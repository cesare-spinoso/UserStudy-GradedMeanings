
// Pragmatics4 quality checks — 4 scenarios × 2 conditions (no_alts / with_alts) = 8 items
//
// All items have a clear correct answer (slider should be near one extreme).
// Each scenario appears twice: once without alternatives and once with alternatives.
//
// For no_alts:   observed_utterance = weak_utterance, no alternatives shown.
// For with_alts: observed_utterance = weak_utterance, alternatives = [weak, strong].
//
// Scenarios and expected responses:
//   quality3  bad (alt: unrelated)   — expected: very LOW   (food tastes bad → unlikely 5-star)
//   quality4  amazing (alt: unrelated) — expected: very HIGH  (view is amazing → likely takes photo)
//   quality7  apple / banana         — expected: very HIGH   (Sam says "I want an apple" → wants apple)
//   quality8  water / coffee         — expected: very LOW    (Nina says "I want water" → doesn't want coffee)

var quality_checks_gradable_meanings = [

    // ── quality3: bad — NO alternatives ─────────────────────────────────────────
    {
        "id": "quality_checks_q3_no_alts",
        "scenario_id": "pvt21_quality3",
        "scenario_type": "quality_no_alts",
        "scenario": "Aya and Bo are having dinner at a new restaurant in town. After tasting her dish, Aya turns to Bo.",
        "question": "How likely is it that Aya gives the restaurant a 5-star rating?",
        "observed_utterance": "The food tastes bad.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Aya",
        "secondName": "Bo",
    },

    // ── quality3: bad — WITH alternatives ────────────────────────────────────────
    // Alternative is unrelated ("I have an appointment..."): no scalar implicature
    // about food quality; speaker simply chose to comment on the food.
    {
        "id": "quality_checks_q3_with_alts",
        "scenario_id": "pvt21_quality3",
        "scenario_type": "quality_with_alts",
        "scenario": "Aya and Bo are having dinner at a new restaurant in town. After tasting her dish, Aya turns to Bo.",
        "question": "How likely is it that Aya gives the restaurant a 5-star rating?",
        "observed_utterance": "The food tastes bad.",
        "alternatives": [
            "The food tastes bad.",
            "I have an appointment to go to tomorrow.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Aya",
        "secondName": "Bo",
    },

    // ── quality4: amazing — NO alternatives ──────────────────────────────────────
    {
        "id": "quality_checks_q4_no_alts",
        "scenario_id": "pvt21_quality4",
        "scenario_type": "quality_no_alts",
        "scenario": "Cai and Desmond are hiking together. After reaching the top of the hill, Cai turns to Desmond.",
        "question": "How likely is it that Cai takes a photo of the view?",
        "observed_utterance": "This view is amazing.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Cai",
        "secondName": "Desmond",
    },

    // ── quality4: amazing — WITH alternatives ─────────────────────────────────────
    // Alternative is unrelated ("I need to call my brother back."): no scalar
    // implicature about how impressive the view is; speaker chose to comment on it.
    {
        "id": "quality_checks_q4_with_alts",
        "scenario_id": "pvt21_quality4",
        "scenario_type": "quality_with_alts",
        "scenario": "Cai and Desmond are hiking together. After reaching the top of the hill, Cai turns to Desmond.",
        "question": "How likely is it that Cai takes a photo of the view?",
        "observed_utterance": "This view is amazing.",
        "alternatives": [
            "This view is amazing.",
            "I need to call my brother back.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Cai",
        "secondName": "Desmond",
    },

    // ── quality7: apple — NO alternatives ────────────────────────────────────────
    {
        "id": "quality_checks_q7_no_alts",
        "scenario_id": "pvt21_quality7",
        "scenario_type": "quality_no_alts",
        "scenario": "Sam and Dana are looking for a snack. Sam turns to Dana.",
        "question": "How likely is it that Sam wants an apple?",
        "observed_utterance": "I want an apple.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Sam",
        "secondName": "Dana",
    },

    // ── quality7: apple — WITH alternatives ──────────────────────────────────────
    // Alternative is a direct preference contrast (banana): speaker explicitly
    // chose apple, making the correct answer even more obvious.
    {
        "id": "quality_checks_q7_with_alts",
        "scenario_id": "pvt21_quality7",
        "scenario_type": "quality_with_alts",
        "scenario": "Sam and Dana are looking for a snack. Sam turns to Dana.",
        "question": "How likely is it that Sam wants an apple?",
        "observed_utterance": "I want an apple.",
        "alternatives": [
            "I want an apple.",
            "I want a banana.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Sam",
        "secondName": "Dana",
    },

    // ── quality8: water — NO alternatives ────────────────────────────────────────
    {
        "id": "quality_checks_q8_no_alts",
        "scenario_id": "pvt21_quality8",
        "scenario_type": "quality_no_alts",
        "scenario": "Nina and Carlos are deciding what to drink. Nina turns to Carlos.",
        "question": "How likely is it that Nina wants coffee?",
        "observed_utterance": "I want water.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Nina",
        "secondName": "Carlos",
    },

    // ── quality8: water — WITH alternatives ──────────────────────────────────────
    // Alternative is a direct drink contrast (coffee): speaker explicitly chose
    // water, making the correct answer (coffee = impossible) even clearer.
    {
        "id": "quality_checks_q8_with_alts",
        "scenario_id": "pvt21_quality8",
        "scenario_type": "quality_with_alts",
        "scenario": "Nina and Carlos are deciding what to drink. Nina turns to Carlos.",
        "question": "How likely is it that Nina wants coffee?",
        "observed_utterance": "I want water.",
        "alternatives": [
            "I want water.",
            "I want coffee.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Nina",
        "secondName": "Carlos",
    },
];
