
// all the quality_checks data which comes from src/human_exp/pragmatics2/pvt21_quality_checks.csv 

var quality_checks_gradable_meanings = [
    {
        "id": "quality_checks_0",
        "scenario": "Gerry and Matt are looking for a new car. When Gerry asks Matt what color car he's looking for, Matt says \"I want a red car.\"",
        "question": "What color car does Matt want?",
            "interpretations": [
                "Matt wants a car.",
                "Matt wants a dark car.",
                "Matt wants a red car.",
            ],
        "stronger_alternative": "What about this red car?",
        "alternative_cancellation": "Oh definitely not red. I hate that color.",
        "mainName": "Matt",
        "secondName": "Gerry",
    },
    {
        "id": "quality_checks_1",
        "scenario": "Gerry wants to cook something for his girlfriend Sara. Gerry calls Sara and asks her what she'd like to eat for dinner. Sara says \"Italian would be great!\"",
        "question": "What type of food does Sara want?",
            "interpretations": [
                "She really wants Italian food.",
                "She wants Italian food.",
                "She doesn't want Italian nor Korean food.",
                "She wants Korean food.",
                "She really wants Korean food.",
            ],
        "stronger_alternative": "Ok, I'll make some pasta then!",
        "alternative_cancellation": "Great! See you tonight.",
        "mainName": "Sara",
        "secondName": "Gerry",
    }
];
