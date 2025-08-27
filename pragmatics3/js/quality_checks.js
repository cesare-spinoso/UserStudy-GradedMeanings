
// all the quality_checks data which comes from src/human_exp/pragmatics2/pvt21_quality_checks.csv 

var quality_checks_gradable_meanings = [
    {
        "id": "quality_checks_0",
        "scenario": "Gerry and Matt are looking for a new car. When Gerry asks Matt what color car he's looking for, Matt says \"I want a red one.\"",
    "question": "What does Matt think about the car color he wants?",
        "interpretations": [
            "Matt wants a yellow car.",
            "Matt wants a red car.",
            "Matt wants a blue car.",
            "Matt wants a green car.",
            "Matt wants a black car."
        ],
    "stronger_alternative": "I don't want a white car.",
    "alternative_cancellation": "Not rejecting every other color Gerry, I just want red.",
    "speaker_name": "Matt",
    "mainName": "Matt",
    "secondName": "Gerry"
    },
    {
        "id": "quality_checks_1",
        "scenario": "Gerry wants to cook something for his girlfriend Sara. Gerry calls Sara and asks her what she'd like to eat for dinner. Sara says \"Italian would be great!\"",
    "question": "What does Sara think about the type of food for dinner?",
        "interpretations": [
            "She wants Italian food.",
            "She wants Korean food.",
            "She wants Chinese food.",
            "She wants Thai food.",
            "She wants Greek food."
        ],
    "stronger_alternative": "I'm not hungry.",
    "alternative_cancellation": "Not that I'm not hungry Gerry, I just think Italian would be great.",
    "speaker_name": "Sara",
    "mainName": "Sara",
    "secondName": "Gerry"
    }
];
