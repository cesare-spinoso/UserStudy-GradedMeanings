
// Pragmatics4 quality checks: likelihood scale, 2 without alternatives, 2 with
// All items have a clear correct answer (very high or very low likelihood)

var quality_checks_gradable_meanings = [
    {
        "id": "quality_checks_0",
        "scenario": "Gerry and Matt are looking for a new car. When Gerry asks Matt what color car he's looking for, Matt says something.",
        "question": "How likely is it that Matt will choose a red car?",
        "observed_utterance": "I want a red car.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Matt",
        "secondName": "Gerry",
    },
    {
        "id": "quality_checks_1",
        "scenario": "Gerry wants to cook something for his girlfriend Sara. Gerry calls Sara and asks her what she'd like to eat for dinner. Sara responds.",
        "question": "How likely is it that they will have Italian food for dinner?",
        "observed_utterance": "Italian would be great!",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Sara",
        "secondName": "Gerry",
    },
    {
        "id": "quality_checks_2",
        "scenario": "Tom and Alex are shopping for a new shirt. Alex asks Tom which one he'd like to buy. Tom thinks about what to say.",
        "question": "How likely is it that Tom will buy a blue shirt?",
        "observed_utterance": "I want that shirt.",
        "alternatives": [
            "I want that shirt.",
            "I want that blue shirt.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Tom",
        "secondName": "Alex",
    },
    {
        "id": "quality_checks_3",
        "scenario": "Maria is hosting a birthday party and calls her friend Chris to ask if he can make it. Chris thinks about what to say.",
        "question": "How likely is Chris to attend the party?",
        "observed_utterance": "I might be a bit late.",
        "alternatives": [
            "I might be a bit late.",
            "I won't be able to make it.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Chris",
        "secondName": "Maria",
    },
];
