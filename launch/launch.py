"""Check an experiment end to end, then write (and optionally post) its
proliferate config.

Example:
  python3 launch/launch.py --experiment pragmatics4 --design 0 \\
      --name modbeliefs_noalts_1 --participants 10 \\
      --completion-url "https://app.prolific.com/submissions/complete?cc=XXXX" \\
      --source ~/modulating_beliefs_via_alternatives/src/data/alternatives_v2.csv \\
      --source ~/modulating_beliefs_via_alternatives/src/data/belief_verbalizations.csv \\
      [--mapping pragmatics4/stimuli_mapping.json] [--notes "pilot"] [--post]

Stages (each must pass before the next one runs):
  1. stimuli  -- the experiment's JS stimuli match the --source files, item by
                 item, according to the mapping file.
  2. smoke    -- the real init() runs for every condition of --design.
  3. git      -- <experiment>/ is committed, and identical to origin/main.
  4. pages    -- GitHub Pages serves exactly origin/main's experiment.html and
                 every local script / stylesheet it loads.
  5. config   -- writes launch/configs/<name>/<name>.config, logs the launch.
  6. post     -- only with --post: `proliferate post <name>`.
"""
import argparse
import csv
import datetime
import hashlib
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request

REPO = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
LAUNCH_DIR = os.path.join(REPO, "launch")
HARNESS = os.path.join(LAUNCH_DIR, "js_harness.js")
BRANCH = "main"


class StageFailed(Exception):
    pass


def stage(n, title):
    print(f"\n[{n}] {title}")


def ok(msg):
    print(f"    ✓ {msg}")


def bad(msg):
    print(f"    ✗ {msg}")


def run(cmd, cwd=REPO, check=True):
    p = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if check and p.returncode != 0:
        raise StageFailed((p.stderr.strip() or p.stdout.strip()) or f"`{' '.join(cmd)}` failed")
    return p


def sha256_file(path):
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()


# ── 1. stimuli vs source ────────────────────────────────────────────────────

def newer_sibling(path):
    """If `path` looks like <stem>_v<N>.<ext>, return a sibling with a higher N."""
    m = re.fullmatch(r"(.*)_v(\d+)(\.[^.]+)", os.path.basename(path))
    if not m:
        return None
    stem, ver, ext = m.group(1), int(m.group(2)), m.group(3)
    pat = re.compile(re.escape(stem) + r"_v(\d+)" + re.escape(ext))
    newer = [(int(mm.group(1)), f) for f in os.listdir(os.path.dirname(os.path.abspath(path)))
             for mm in [pat.fullmatch(f)] if mm and int(mm.group(1)) > ver]
    return max(newer)[1] if newer else None


def norm(v):
    return v.strip() if isinstance(v, str) else v


def check_stimuli(exp_dir, mapping_path, source_paths):
    mapping = json.load(open(mapping_path))
    sources_by_name = {os.path.basename(p): p for p in source_paths}
    expected = set(mapping["sources"])
    problems = []

    missing = expected - set(sources_by_name)
    extra = set(sources_by_name) - expected
    if missing:
        problems.append(f"mapping expects source(s) not passed via --source: {sorted(missing)}")
    if extra:
        problems.append(f"--source file(s) not described in the mapping: {sorted(extra)}")
    if problems:
        raise StageFailed("\n".join(problems))

    for name, path in sources_by_name.items():
        newer = newer_sibling(path)
        if newer:
            problems.append(f"{name}: a newer version exists next to it ({newer})")

    # Merge source rows on their key: merged[key][column] = value
    merged, source_keys = {}, {}
    for name, spec in mapping["sources"].items():
        with open(sources_by_name[name], newline="", encoding="utf-8") as f:
            rows = list(csv.DictReader(f))
        keys = [r[spec["key"]] for r in rows]
        if len(set(keys)) != len(keys):
            problems.append(f"{name}: duplicate values in key column '{spec['key']}'")
        source_keys[name] = set(keys)
        for r in rows:
            merged.setdefault(r[spec["key"]], {}).update(r)

    js_file = os.path.join(exp_dir, mapping["js_file"])
    out = run(["node", HARNESS, "read", js_file, mapping["js_variable"]])
    js_items = json.loads(out.stdout)
    js_key = mapping["js_key"]
    js_by_key = {it[js_key]: it for it in js_items}
    if len(js_by_key) != len(js_items):
        problems.append(f"{mapping['js_file']}: duplicate {js_key} values")

    n_mismatch = 0
    for name, spec in mapping["sources"].items():
        only_src = source_keys[name] - set(js_by_key)
        only_js = set(js_by_key) - source_keys[name]
        if only_src:
            problems.append(f"{name}: items missing from {mapping['js_file']}: {sorted(only_src)}")
        if only_js:
            problems.append(f"{mapping['js_file']}: items not in {name}: {sorted(only_js)}")
        for key in sorted(source_keys[name] & set(js_by_key)):
            for col, field in spec["fields"].items():
                src_v, js_v = norm(merged[key].get(col)), norm(js_by_key[key].get(field))
                if src_v != js_v:
                    n_mismatch += 1
                    problems.append(f"{key}: {name}[{col}] != js[{field}]\n"
                                    f"        source: {src_v!r}\n        js:     {js_v!r}")

    for d in mapping.get("derived", []):
        ft = d["fill_template"]
        for key in sorted(set(js_by_key) & set(merged)):
            row = merged[key]
            if ft["template_column"] not in row or ft["fill_column"] not in row:
                continue  # item missing from one source; already reported above
            want = row[ft["template_column"]].strip().replace(ft["placeholder"], row[ft["fill_column"]].strip())
            got = norm(js_by_key[key].get(d["js_field"]))
            if want != got:
                n_mismatch += 1
                problems.append(f"{key}: js[{d['js_field']}] != {ft['template_column']} filled with "
                                f"{ft['fill_column']}\n        expected: {want!r}\n        js:       {got!r}")

    if problems:
        raise StageFailed("\n".join(problems))
    n_fields = sum(len(s["fields"]) for s in mapping["sources"].values()) + len(mapping.get("derived", []))
    ok(f"{len(js_items)} items x {n_fields} fields match {', '.join(sorted(sources_by_name))}")
    return {name: sha256_file(p) for name, p in sources_by_name.items()}


# ── 2. smoke test ───────────────────────────────────────────────────────────

def smoke_test(exp_dir, design):
    out = run(["node", HARNESS, "smoke", exp_dir, str(design)])
    res = json.loads(out.stdout)
    failed = [r for r in res["results"] if not r["ok"]]
    for r in res["results"]:
        (ok if r["ok"] else bad)(f"design={design} condition={r['condition']}: "
                                 + (f"{r['n_trials']} trials" if r["ok"] else r["error"]))
    if failed:
        raise StageFailed(f"init() failed for {len(failed)} condition(s)")
    return res["conditions"]


# ── 3. git ──────────────────────────────────────────────────────────────────

def check_git(exp):
    dirty = run(["git", "status", "--porcelain", "--", exp]).stdout.rstrip()
    if dirty:
        raise StageFailed(f"uncommitted / untracked changes in {exp}/:\n" +
                          "\n".join("        " + l for l in dirty.splitlines()) +
                          "\n    Commit and push them first.")
    ok(f"{exp}/ has no uncommitted changes")
    run(["git", "fetch", "--quiet", "origin", BRANCH])
    remote = f"origin/{BRANCH}"
    if run(["git", "diff", "--quiet", "HEAD", remote, "--", exp], check=False).returncode != 0:
        ahead = run(["git", "rev-list", "--count", f"{remote}..HEAD"]).stdout.strip()
        behind = run(["git", "rev-list", "--count", f"HEAD..{remote}"]).stdout.strip()
        raise StageFailed(f"{exp}/ differs between HEAD and {remote} "
                          f"(local is {ahead} commit(s) ahead, {behind} behind). Push / pull first.")
    sha = run(["git", "rev-parse", remote]).stdout.strip()
    ok(f"{exp}/ matches {remote} ({sha[:10]})")
    return sha


# ── 4. GitHub Pages ─────────────────────────────────────────────────────────

def pages_base():
    url = run(["git", "remote", "get-url", "origin"]).stdout.strip()
    m = re.search(r"github\.com[:/]([^/]+)/([^/]+?)(?:\.git)?$", url)
    if not m:
        raise StageFailed(f"cannot derive a GitHub Pages URL from remote {url}")
    return f"https://{m.group(1).lower()}.github.io/{m.group(2)}"


def local_assets(html):
    html = re.sub(r"<!--.*?-->", "", html, flags=re.S)
    refs = re.findall(r'<script[^>]*\ssrc="([^"]+)"', html) + \
        re.findall(r'<link[^>]*\shref="([^"]+)"', html)
    return [r for r in refs if not re.match(r"^(https?:)?//", r)]


def check_pages(exp, sha):
    base = f"{pages_base()}/{exp}"
    html = run(["git", "show", f"{sha}:{exp}/experiment.html"]).stdout
    files = ["experiment.html"] + local_assets(html)
    stamp = int(time.time())
    stale = []
    for rel in files:
        want = subprocess.run(["git", "show", f"{sha}:{exp}/{rel}"], cwd=REPO, capture_output=True).stdout
        url = f"{base}/{rel}?nocache={stamp}"
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"Cache-Control": "no-cache"}),
                                        timeout=20) as r:
                got = r.read()
        except urllib.error.URLError as e:
            stale.append(f"{rel}: could not fetch ({e})")
            continue
        if got != want:
            stale.append(f"{rel}: served content differs from {sha[:10]}")
    if stale:
        raise StageFailed("\n".join(stale) +
                          "\n    GitHub Pages is not serving the pushed version yet. The push may not have "
                          "finished deploying -- wait a minute or two and rerun.")
    ok(f"{len(files)} files served at {base}/ match {sha[:10]}")
    return f"{base}/experiment.html"


# ── 5/6. config + post ──────────────────────────────────────────────────────

def write_config(args, url, n_conditions, sha, source_hashes):
    cfg_dir = os.path.join(LAUNCH_DIR, "configs", args.name)
    cfg_path = os.path.join(cfg_dir, f"{args.name}.config")
    if os.path.exists(cfg_path) and not args.overwrite:
        raise StageFailed(f"{cfg_path} already exists (use --overwrite to replace it)")
    provenance = (f"{args.experiment} design={args.design}; commit {sha[:10]}; " +
                  "; ".join(f"{n} sha256 {h[:12]}" for n, h in sorted(source_hashes.items())))
    config = {
        "name": args.name,
        "notes": f"{args.notes} | {provenance}" if args.notes else provenance,
        "completion_URL": args.completion_url,
        "conditions": [
            {"name": f"design {args.design} / condition {c}",
             "experiment_URL": f"{url}?design={args.design}&condition={c}",
             "participants": args.participants}
            for c in range(n_conditions)
        ],
    }
    os.makedirs(cfg_dir, exist_ok=True)
    with open(cfg_path, "w") as f:
        json.dump(config, f, indent=4)
    ok(f"wrote {os.path.relpath(cfg_path, REPO)} ({n_conditions} conditions x {args.participants} participants)")

    log = {
        "date": datetime.datetime.now().isoformat(timespec="seconds"),
        "name": args.name, "experiment": args.experiment, "design": args.design,
        "conditions": n_conditions, "participants_per_condition": args.participants,
        "commit": sha, "sources_sha256": source_hashes, "posted": bool(args.post),
    }
    with open(os.path.join(LAUNCH_DIR, "launch_log.jsonl"), "a") as f:
        f.write(json.dumps(log) + "\n")
    ok("appended to launch/launch_log.jsonl")
    return cfg_dir


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--experiment", required=True, help="experiment folder, e.g. pragmatics4")
    ap.add_argument("--design", required=True, type=int)
    ap.add_argument("--name", required=True, help="proliferate label (config file name)")
    ap.add_argument("--participants", required=True, type=int, help="participants per condition")
    ap.add_argument("--completion-url", required=True)
    ap.add_argument("--source", action="append", required=True, help="stimulus source file (repeatable)")
    ap.add_argument("--mapping", help="mapping JSON (default: <experiment>/stimuli_mapping.json)")
    ap.add_argument("--notes", default="")
    ap.add_argument("--post", action="store_true", help="run `proliferate post` after all checks pass")
    ap.add_argument("--overwrite", action="store_true", help="replace an existing config of the same name")
    args = ap.parse_args()

    exp_dir = os.path.join(REPO, args.experiment)
    if not os.path.isfile(os.path.join(exp_dir, "experiment.html")):
        sys.exit(f"ERROR: {exp_dir}/experiment.html not found")
    mapping = args.mapping or os.path.join(exp_dir, "stimuli_mapping.json")
    sources = [os.path.abspath(os.path.expanduser(s)) for s in args.source]

    try:
        stage(1, "Stimuli vs source")
        source_hashes = check_stimuli(exp_dir, mapping, sources)
        stage(2, "Smoke test (init() for every condition)")
        n_conditions = smoke_test(exp_dir, args.design)
        stage(3, "Git: committed and pushed")
        sha = check_git(args.experiment)
        stage(4, "GitHub Pages serves the pushed version")
        url = check_pages(args.experiment, sha)
        stage(5, "Config")
        cfg_dir = write_config(args, url, n_conditions, sha, source_hashes)
    except StageFailed as e:
        for line in str(e).splitlines():
            bad(line) if not line.startswith("    ") else print(line)
        print("\nNOT LAUNCHED: fix the issue above and rerun.")
        sys.exit(1)

    stage(6, "Post")
    if args.post:
        p = subprocess.run(["proliferate", "post", args.name], cwd=cfg_dir)
        if p.returncode != 0:
            sys.exit("proliferate post failed (config was written; you can retry the post manually)")
        ok("posted")
    else:
        print(f"    not posted. To post:  cd {os.path.relpath(cfg_dir)} && proliferate post {args.name}")


if __name__ == "__main__":
    main()
