# pragmatics7

Merges the naturalistic dialogue stimuli from `pragmatics4` with the
reference-game (colored-shape) stimuli from `pragmatics6` into a single
experiment. Every trial — whether it's a dialogue scenario or a display of
colored shapes — asks the same kind of question: a 0-100 **likelihood**
slider (`Absolutely Impossible` <-> `Absolutely Certain`), following p4's
mechanic rather than p6's click-to-select / choose-a-word mechanic.

## Research questions

1. How do pragmatic interpretations (scalar implicature, whether from a
   gradable adjective or from an under-informative referring expression)
   affect participants' likelihood judgments?
2. How does **counterfactual information** — being told what the speaker
   *could have said instead* — affect those judgments?

## The counterfactual manipulation

Every item (natural-language or object-based) exists in two versions:

- **`*_with_alts`**: the scenario reveals that the speaker considered two
  utterances — a **weak** one (compatible with more than one referent/degree)
  and a **strong** one (compatible with only the intended one) — before
  settling on the weak one. This is the counterfactual condition: the
  participant is explicitly told what the unambiguous alternative would have
  been.
- **`*_no_alts`**: only the weak utterance is shown; the strong alternative
  is never mentioned, so no counterfactual information is available.

For object stimuli specifically, both utterances name exactly ONE feature
(never a color+shape compound like "the blue circle"):
- **weak** = color word alone (e.g. "the blue one") — AMBIGUOUS, since a
  same-color competitor object is also in the display.
- **strong** = shape word alone (e.g. "the circle") — UNAMBIGUOUS, since
  shapes are never shared across the three displayed objects (only the
  target and competitor share a color; the foil shares neither color nor
  shape with the target). This mirrors ordinary cases like "orange" being
  unambiguous simply because only one object in the display happens to be
  orange.

## Stimulus pools

- **30 natural-language scenarios** (`js/main_stimuli.js`,
  `main_stimuli_gradable_meanings`) — unchanged from pragmatics4. The
  canonical weak/strong pair for all 30 (filling in 12 that pragmatics4 only
  ever showed with a single fixed utterance) lives in
  `js/natural_stimuli_catalog.js`; that file is used only to render the
  "natural text examples" PDF, not by the live experiment.
- **30 reference-game contexts** (`js/main_stimuli.js`, `all_refgame_contexts`
  / `main_stimuli_reference_games`) — new for pragmatics7. Each context is a
  target object + a same-color/different-shape competitor + a
  different-color/different-shape foil, split 15 `with_alts` / 15 `no_alts`.
  `main_stimuli_reference_games` holds 5 overlapping 12-item sliding-window
  batches (step 6) so each context appears in exactly 2 of the 5
  `condition`s.

Each participant (selected via the `condition` URL param, 0-4) sees 24
main-phase scenarios total — matching pragmatics4's per-participant count —
split evenly: 12 natural-language items (an every-other trim of p4's
original 24-item batch for that condition, kept unmodified in
`main_stimuli.js`) + 12 reference-game items (that condition's 12-item
sliding-window slice). On top of that, 6 quality-check items (4 natural + 2
refgame) are appended, for 30 trials total.

## DEBUG / design note

See the `console.warn` at the top of `init()` in `js/experiment.js` (and the
matching comment in `js/main_stimuli.js`): each object triple is currently
shown only once per participant, in either its with_alts or no_alts form.
Because object stimuli decouple color and shape identity, it should be
possible to reuse the *same* triple in both conditions by swapping which
dimension is the ambiguous one — something natural-language gradable
adjectives don't allow. Worth revisiting before the next revision.

## Stimulus PDFs

`scripts/dump_stimuli.js` (Node) exports both stimulus pools to JSON;
`scripts/make_pdfs.py` (matplotlib) renders them into two PDFs:

- `stimuli_pdfs/natural_text_examples.pdf` — all 30 natural-language
  scenarios (Scenario / Weak & Strong utterances / Question).
- `stimuli_pdfs/object_stimuli.pdf` — all 30 reference-game contexts,
  rendered as the actual colored shapes, with the weak/strong utterances and
  question underneath each.

Regenerate with:

```
node scripts/dump_stimuli.js
python3 scripts/make_pdfs.py
```
