# launch

`launch.py` checks an experiment end to end. Only if every check passes does
it write the proliferate config, and it posts that config only when you pass
`--post`.

```
python3 launch/launch.py --experiment pragmatics4 --design 0 \
    --name modbeliefs_noalts_1 --participants 10 \
    --completion-url "https://app.prolific.com/submissions/complete?cc=XXXX" \
    --source ~/modulating_beliefs_via_alternatives/src/data/alternatives_v2.csv \
    --source ~/modulating_beliefs_via_alternatives/src/data/belief_verbalizations.csv \
    [--mapping pragmatics4/stimuli_mapping.json] [--notes "pilot"] [--post]
```

The stages run in order and stop at the first failure.

| # | Stage | Guards against |
|---|---|---|
| 1 | **Stimuli vs source**: each `--source` file is compared item by item with the experiment's JS stimuli, as described by the mapping file (default `<experiment>/stimuli_mapping.json`). | Stimuli edited or regenerated in one repo but not the other, or a newer `*_vN` source file existing next to the one you passed. |
| 2 | **Smoke test**: the real `init()` runs headlessly for every condition. Conditions come from `NUM_CONDITIONS_BY_DESIGN`. | A URL that throws, or a mistyped condition count. |
| 3 | **Git**: `<experiment>/` is committed and identical to `origin/main`. | Launching code that isn't pushed. If this fails, Pages is not fetched. |
| 4 | **GitHub Pages**: `experiment.html` and every local file it loads are fetched and compared byte for byte with `origin/main`. | A push whose deploy hasn't finished yet. Wait a minute and rerun. |
| 5 | **Config**: writes `configs/<name>/<name>.config` and appends to `launch_log.jsonl` (commit SHA, source sha256s). | Not knowing later exactly what a study ran. |
| 6 | **Post** (only with `--post`): `proliferate post <name>`. | |

## Mapping file

```json
{
  "js_file": "js/natural_stimuli_v2.js", "js_variable": "natural_stimuli_v2", "js_key": "scenario_id",
  "sources": { "alternatives_v2.csv": { "key": "id", "fields": { "U1": "weak_utterance", "...": "..." } } },
  "derived": [ { "js_field": "question",
                 "fill_template": { "template_column": "Question", "placeholder": "{}", "fill_column": "Belief" } } ]
}
```

Sources are matched to the `--source` files by file name and merged on their
key columns.

## Data stays out of this repo

`configs/` is gitignored. It holds the Prolific completion code, and
`proliferate getresults` downloads `*-workerids.csv` (Prolific IDs) into it.
This repo is public. Move downloaded results to the private research repo.
