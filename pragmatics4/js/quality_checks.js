
// Pragmatics4 quality checks — 4 items total
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
];
