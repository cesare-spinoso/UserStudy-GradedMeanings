
// Pragmatics4 quality checks — 4 natural-language items, plus 2 pragmatics7
// refgame items appended at the end (6 total)
//
// All items have a clear correct answer (slider should be near one extreme).
// Scenarios appear in either the no_alts or with_alts condition only (not both),
// to reduce predictability and cheating.
//
// For no_alts:   observed_utterance shown, no alternatives displayed.
// For with_alts: observed_utterance shown alongside an alternative.
//
// Scenarios and expected responses:
//   quality7   "I want an apple."         (no_alts only)        — expected: very HIGH (said apple → eats apple)
//   quality8   "I want water."            (with_alts only)      — expected: very HIGH (said water → gets water)
//   quality9   "I want to watch TV."      (no_alts only)        — expected: very LOW  (said TV → unlikely to play video games)
//   quality10  "I want to go out."        (with_alts only)      — expected: very LOW  (said go out → unlikely to stay in)

var quality_checks_gradable_meanings = [

    // ── quality7: apple — NO alternatives only ───────────────────────────────────
    {
        "id": "quality_checks_q7_no_alts",
        "scenario_id": "pvt21_quality7_high_likely",
        "scenario_type": "quality_no_alts",
        "scenario": "Sam and Dana are in their kitchen looking for a snack. There is a fruit bowl on the counter with apples and bananas. Sam turns to Dana.",
        "question": "How likely is it that Sam eats an apple?",
        "observed_utterance": "I want an apple.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Sam",
        "secondName": "Dana",
    },

    // ── quality8: water — WITH alternatives only ─────────────────────────────────
    {
        "id": "quality_checks_q8_with_alts",
        "scenario_id": "pvt21_quality8_high_likely",
        "scenario_type": "quality_with_alts",
        "scenario": "Nina and Carlos are at a vending machine and are deciding what to drink. The vending machine sells several drinks including water and Coca Cola. Nina turns to Carlos.",
        "question": "How likely is it that Nina gets a water bottle?",
        "observed_utterance": "I want water.",
        "alternatives": [
            "I want water.",
            "I want Coca Cola.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Nina",
        "secondName": "Carlos",
    },

    // ── quality9: watch TV — NO alternatives only ────────────────────────────────
    {
        "id": "quality_checks_q9_no_alts",
        "scenario_id": "pvt21_quality9_low_likely",
        "scenario_type": "quality_no_alts",
        "scenario": "Leo and Zoe are figuring out how to spend their evening. Leo turns to Zoe.",
        "question": "How likely is it that Leo plays video games this evening?",
        "observed_utterance": "I want to watch TV.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Leo",
        "secondName": "Zoe",
    },

    // ── quality10: go out — WITH alternatives only ───────────────────────────────
    {
        "id": "quality_checks_q10_with_alts",
        "scenario_id": "pvt21_quality10_low_likely",
        "scenario_type": "quality_with_alts",
        "scenario": "Maya and Ryan are deciding what to do tonight. Maya turns to Ryan.",
        "question": "How likely is it that Maya stays in?",
        "observed_utterance": "I want to go out.",
        "alternatives": [
            "I want to go out.",
            "I want to stay in.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Maya",
        "secondName": "Ryan",
    },

    // ── pragmatics7 addition: 2 refgame quality checks ──────────────────────
    // Both use the fully explicit (strong) utterance only, so there is no
    // pragmatic inference required — an attentive participant should answer
    // near one extreme.

    // quality_refgame_high: strong utterance names the target's exact color+shape.
    {
        "id": "quality_checks_refgame_high",
        "scenario_id": "refgame_quality_high_likely",
        "scenario_type": "refgame_quality",
        "stimulus_type": "refgame",
        "is_quality_check": true,
        "scenario": "Petra and Sam are cleaning out a toy box. Three toys sit on the table:",
        "display": [
            { "color": "red", "shape": "circle" },
            { "color": "blue", "shape": "circle" },
            { "color": "red", "shape": "square" },
        ],
        "question": "How likely is it that Petra wants the blue circle?",
        "observed_utterance": "Can you hand me the blue circle?",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Petra",
        "secondName": "Sam",
        "target": { "color": "blue", "shape": "circle" },
        "strong_utterance": "Can you hand me the blue circle?",
    },

    // quality_refgame_low: strong utterance names a DIFFERENT object entirely;
    // the question asks about the one object that matches neither its color
    // nor its shape.
    {
        "id": "quality_checks_refgame_low",
        "scenario_id": "refgame_quality_low_likely",
        "scenario_type": "refgame_quality",
        "stimulus_type": "refgame",
        "is_quality_check": true,
        "scenario": "Owen and Iris are packing up art supplies. Three items sit on the table:",
        "display": [
            { "color": "green", "shape": "square" },
            { "color": "purple", "shape": "square" },
            { "color": "green", "shape": "triangle" },
        ],
        "question": "How likely is it that Owen wants the green triangle?",
        "observed_utterance": "Can you hand me the purple square?",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Owen",
        "secondName": "Iris",
        "target": { "color": "purple", "shape": "square" },
        "strong_utterance": "Can you hand me the purple square?",
    },
];
