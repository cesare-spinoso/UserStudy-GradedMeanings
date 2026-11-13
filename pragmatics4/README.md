# The thought process

- TSee pragmatics3 for the initial thought process.
- This study uses the slider on a (hopefully) intuitive scale. The nice thing is that I can keep the original gradable adjectives and use them in the conversation.

# URL parameters

`experiment.html?design=<0|1|2|3>&condition=<list>`. Both values are logged on every trial.

| `design` | `condition` | Meaning |
|---|---|---|
| `1` (default) | 0-4 | **Alternatives.** 24 scenarios per list, 6 in each of weak/strong × with/without alternatives (the original pragmatics4 structure). In the with-alternatives items, the speaker considers U1 and U2, then says one of them. |
| `0` | 0-1 | **No alternatives.** Each list has **all 30** scenarios, each shown once, with either U1 (weak) or U2 (strong) (15 of each). The two lists are complements: a scenario that gets U1 in list 0 gets U2 in list 1. Examples, warm-ups and quality checks never show alternatives either. |
| `2` | 0 | **Weak utterance only.** A single list: everyone sees **all 30** scenarios, each with U1 (weak) and no alternatives, plus the 4 quality checks (34 trials). Examples, warm-ups and quality checks never show alternatives either. |
| `3` | 0-2 | **U0/U1/U2 pilot** (from `alternatives_v4`). Only the **first 3** v4 scenarios (`id_0`-`id_2`); item *i* gets `U[(i + condition) % 3]`, so list 0 = U0, U1, U2; list 1 = U1, U2, U0; list 2 = U2, U0, U1. Every scenario × level pair occurs in exactly one list. No alternatives anywhere, and only 2 quality checks (q7 apple, q9 TV): 5 trials. |

No overcounting: in designs 0 and 1, every scenario × cell pair (e.g. scenario
`id_7` with U2 and no alternatives) occurs in **exactly one** list. That is
30 × 4 = 120 pairs over 5 lists × 24 in design 1, and 30 × 2 = 60 pairs over
2 lists × 30 in design 0. In design 1, each list is a 24-item sliding window
(step 6) over the 30 scenarios, with cells assigned so that every list is
balanced at 6 per cell. `init()` throws an error if a participant's list would
contain the same scenario twice.

# Stimuli: sync with `alternatives_v2.csv` / `alternatives_v4.csv`

The 30 main scenarios come from `js/natural_stimuli_v2.js`, which is
**generated** from `modulating_beliefs_via_alternatives/src/data/alternatives_v2.csv`
and `belief_verbalizations.csv` (merged on `id`). The question is v2's
template `How likely is it that {}?` filled with the non-negated `Belief`.
The old hand-written batches in `js/main_stimuli.js` are no longer used.

Design 3 uses `js/natural_stimuli_v4.js` (variables `natural_stimuli_v4` /
`natural_stimuli_v4_source`), generated the same way from `alternatives_v4.csv`.
It adds `u0_utterance` (U0, `null` when blank), and its contexts differ slightly
from v2. Designs 0-2 stay on v2. Logged `natural_stimuli_version` is 2 or 4.

```
python3 scripts/sync_natural_stimuli.py --check   # fails if js/ is stale or a newer alternatives_vN.csv exists
python3 scripts/sync_natural_stimuli.py           # regenerate js/natural_stimuli_v{2,4}.js
```

Run `--check` before deploying. The script only reads the source repo. Set
`ALTERNATIVES_DATA_DIR` or pass `--data-dir` if that repo lives elsewhere.
