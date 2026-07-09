
// Pragmatics4 examples: likelihood scale, one without alternatives, one with

var examples_gradable_meanings = [
    {
        "id": "examples_0",
        "scenario": "Emily and Sarah are tasting a new dish at a restaurant. Emily thinks about what to say.",
        "question": "How likely is Emily to ask for a glass of water?",
        "observed_utterance": "This is spicy!",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Emily",
        "secondName": "Sarah",
    },
    {
        "id": "examples_1",
        "scenario": "Mark walks into the office and sees a dog.",
        "question": "How likely is it that the dog can fit in a purse?",
        "observed_utterance": "What a small dog!",
        "alternatives": [
            "What a small dog!",
            "What a tiny dog!",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Mark",
        "secondName": "",
    },
    // pragmatics7 addition: one example built from an object display, showing
    // that the same slider mechanic applies whether the scenario is a
    // dialogue or a set of colored shapes.
    {
        "id": "examples_2",
        "scenario_type": "refgame_with_alts",
        "stimulus_type": "refgame",
        "context_id": "example_ctx",
        "scenario": "Ana and Leo are unwrapping a few small gifts. Three of them sit on the table:",
        "display": [
            { "color": "orange", "shape": "circle" },
            { "color": "orange", "shape": "triangle" },
            { "color": "blue", "shape": "square" },
        ],
        "question": "How likely is it that Ana wants the orange circle?",
        "observed_utterance": "Can you hand me the orange one?",
        "alternatives": [
            "Can you hand me the orange one?",
            "Can you hand me the circle?",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Ana",
        "secondName": "Leo",
        "target": { "color": "orange", "shape": "circle" },
        "competitor": { "color": "orange", "shape": "triangle" },
        "weak_utterance": "Can you hand me the orange one?",
        "strong_utterance": "Can you hand me the circle?",
    },
];
