
// Pragmatics4 quality checks: likelihood scale, 4 without alternatives, 4 with
// All items have a clear correct answer (very high or very low likelihood)

var quality_checks_gradable_meanings = [
    // 1. bad — no alternatives (expected: very low, food tastes bad → unlikely 5-star)
    {
        "id": "quality_checks_0",
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
    // 2. good — no alternatives (expected: very high, food tastes great → likely 5-star)
    {
        "id": "quality_checks_1",
        "scenario_id": "pvt21_quality4",
        "scenario_type": "quality_no_alts",
        "scenario": "Aya and Bo are having dinner at a new restaurant in town. After tasting her dish, Aya turns to Bo.",
        "question": "How likely is it that Aya gives the restaurant a 5-star rating?",
        "observed_utterance": "The food tastes great.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Aya",
        "secondName": "Bo",
    },
    // 3. hot — with alternatives (expected: very low, hot outside → unlikely to put on warm clothes)
    {
        "id": "quality_checks_2",
        "scenario_id": "pvt21_quality5",
        "scenario_type": "quality_with_alts",
        "scenario": "Jake and Mia are getting ready to head out for the day. Jake has just come back from outside and turns to Mia.",
        "question": "How likely is it that Mia puts on something warm to go outside?",
        "observed_utterance": "It's really hot out.",
        "alternatives": [
            "It's really hot out.",
            "I forgot to brush my teeth.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Jake",
        "secondName": "Mia",
    },
    // 4. cold — with alternatives (expected: very high, cold outside → likely to put on warm clothes)
    {
        "id": "quality_checks_3",
        "scenario_id": "pvt21_quality6",
        "scenario_type": "quality_with_alts",
        "scenario": "Jake and Mia are getting ready to head out for the day. Jake has just come back from outside and turns to Mia.",
        "question": "How likely is it that Mia puts on something warm to go outside?",
        "observed_utterance": "It's really cold out.",
        "alternatives": [
            "It's really cold out.",
            "I need to buy my mom some flowers.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Jake",
        "secondName": "Mia",
    },
    // 5. apple — no alternatives (expected: very high, Sam says "I want an apple")
    {
        "id": "quality_checks_4",
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
    // 6. water — no alternatives (expected: very low, Nina wants water not coffee)
    {
        "id": "quality_checks_5",
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
    // 7. watch TV — with alternatives (expected: very high, Leo says "I want to watch TV")
    {
        "id": "quality_checks_6",
        "scenario_id": "pvt21_quality9",
        "scenario_type": "quality_with_alts",
        "scenario": "Leo and Zoe are figuring out how to spend their evening. Leo turns to Zoe.",
        "question": "How likely is it that Leo wants to watch TV?",
        "observed_utterance": "I want to watch TV.",
        "alternatives": [
            "I want to watch TV.",
            "I want to go on my computer.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Leo",
        "secondName": "Zoe",
    },
    // 8. go out — with alternatives (expected: very low, Maya wants to go out not stay in)
    {
        "id": "quality_checks_7",
        "scenario_id": "pvt21_quality10",
        "scenario_type": "quality_with_alts",
        "scenario": "Maya and Ryan are deciding what to do tonight. Maya turns to Ryan.",
        "question": "How likely is it that Maya wants to stay in?",
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
