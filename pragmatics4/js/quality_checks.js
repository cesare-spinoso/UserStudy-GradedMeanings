
// Pragmatics4 quality checks: validating understanding with clear weaker vs stronger utterances

var quality_checks_gradable_meanings = [
    {
        "id": "quality_checks_0",
        "scenario": "Gerry and Matt are looking for a new car. When Gerry asks Matt what color car he's looking for, Matt says something.",
        "question": "What color car does Matt want?",
        "weaker_utterance": "I want a car.",
        "stronger_utterance": "I want a red car.",
        "interpretations": [
            "Not red",
            "Red",
        ],
        "mainName": "Matt",
        "secondName": "Gerry",
    },
    {
        "id": "quality_checks_1",
        "scenario": "Gerry wants to cook something for his girlfriend Sara. Gerry calls Sara and asks her what she'd like to eat for dinner. Sara responds.",
        "question": "What type of food does Sara want?",
        "weaker_utterance": "Something would be great.",
        "stronger_utterance": "Italian would be great!",
        "interpretations": [
            "Not Italian",
            "Italian",
        ],
        "mainName": "Sara",
        "secondName": "Gerry",
    }
];
