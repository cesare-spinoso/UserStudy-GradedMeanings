// all the quality checks data which comes from src/human_exp/pilot_study_1/quality_checks.csv 

// TODO: Make these specific to each pragmatic phenomena
var quality_checks = [
    {
        "id": "quality_check_1",
        "scenario": "Alice and Bob are hanging out at Bob's house. Alice asks Bob \"Can you turn on the heater?\"",
        "question": "What did Alice want to convey?",
        "interpretations": [
            "The room is cold and Alice wants Bob to turn the heat on.",
            "Alice wants to watch TV.",
            "Alice does not care for Bob's sweater.",
            "Alice wants to know if Bob has a heater.",
        ]
    },
    {
        "id": "quality_check_2",
        "scenario": "Alice and Bob are playing with dice. Alice rolls a four-sided die and covers it with her hand. She asks Bob what number has been rolled. Bob says \"I think 1, 2, 3 and 4 are all equally likely.\"",
        "question": "What did Alice want to convey?",
        "interpretations": [
            "Bob thinks Alice has rolled a 1.",
            "Bob thinks Alice has rolled a 2.",
            "Bob thinks Alice has rolled a 3.",
            "Bob thinks Alice has rolled a 4.",
        ]
    }
];
