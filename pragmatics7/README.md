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

For object stimuli specifically: the **weak** utterance names only the
shared property (e.g. "the blue one" — true of both the target and a
same-color competitor object), while the **strong** utterance fully
disambiguates (e.g. "the blue circle" — true of the target only).

## Stimulus pools

- **30 natural-language scenarios** (`js/main_stimuli.js`,
  `main_stimuli_gradable_meanings`) — unchanged from pragmatics4. The
  canonical weak/strong pair for all 30 (filling in 12 that pragmatics4 only
  ever showed with a single fixed utterance) lives in
  `js/natural_stimuli_catalog.js`; that file is used only to render the
  "natural text examples" PDF, not by the live experiment.
- **30 reference-game contexts** (`js/main_stimuli.js`,
  `main_stimuli_reference_games`) — new for pragmatics7. Each context is a
  target object + a same-color/different-shape competitor + a
  different-color/same-shape foil, split 15 `with_alts` / 15 `no_alts`, and
  divided into 5 disjoint batches of 6 (one per `condition`).

Each participant (selected via the `condition` URL param, 0-4) sees the same
24 natural-language items p4 always used for that batch, plus 6
reference-game items, plus 6 quality-check items (4 natural + 2 refgame) =
36 trials total.

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
