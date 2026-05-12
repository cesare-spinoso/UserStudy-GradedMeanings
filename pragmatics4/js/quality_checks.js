
// Pragmatics4 quality checks: 2 without alternatives, 2 with alternatives
// All items have clear, unambiguous correct answers to catch inattentive participants

var quality_checks_gradable_meanings = [
    {
        "id": "quality_checks_0",
        "scenario": "Gerry and Matt are looking for a new car. When Gerry asks Matt what color car he's looking for, Matt says something.",
        "question": "What color car does Matt want?",
        "observed_utterance": "I want a red car.",
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
        "observed_utterance": "Italian would be great!",
        "interpretations": [
            "Not Italian",
            "Italian",
        ],
        "mainName": "Sara",
        "secondName": "Gerry",
    },
    {
        "id": "quality_checks_2",
        "scenario": "Tom and Alex are shopping for a new shirt. Alex asks Tom which one he'd like to buy.",
        "question": "Which shirt does Tom want?",
        "observed_utterance": "I want the blue one.",
        "alternatives": [
            "I want a shirt.",
            "I want the blue one.",
        ],
        "interpretations": [
            "Not blue",
            "Blue",
        ],
        "mainName": "Tom",
        "secondName": "Alex",
    },
    {
        "id": "quality_checks_3",
        "scenario": "Maria is planning a birthday dinner for her friend Chris. She calls him to ask what type of food he'd like.",
        "question": "What type of food does Chris want?",
        "observed_utterance": "I'd love pizza!",
        "alternatives": [
            "I'd love food.",
            "I'd love pizza!",
        ],
        "interpretations": [
            "Not pizza",
            "Pizza",
        ],
        "mainName": "Chris",
        "secondName": "Maria",
    },
];
