
// Pragmatics4 warm-ups: likelihood scale, one without alternatives, one with
// Group A: loud_no_alts + rude_with_alts
// Group B: loud_with_alts + rude_no_alts
// Assigned via coin flip in init()

var warm_ups_gradable_meanings = {
    loud_no_alts: {
        "id": "warm_ups_loud",
        "scenario_id": "pvt21_warmup0",
        "scenario_type": "weak_no_alts",
        "scenario": "Jamie and George are going to their friend Michael's party. When they walk in and hear the music, Jamie turns to George.",
        "question": "How likely is it that Jamie could not hear what George is saying at the party?",
        "observed_utterance": "The music is loud!",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Jamie",
        "secondName": "George"
    },
    loud_with_alts: {
        "id": "warm_ups_loud",
        "scenario_id": "pvt21_warmup0",
        "scenario_type": "weak_with_alts",
        "scenario": "Jamie and George are going to their friend Michael's party. When they walk in and hear the music, Jamie turns to George.",
        "question": "How likely is it that Jamie could not hear what George is saying at the party?",
        "observed_utterance": "The music is so loud!",
        "alternatives": [
            "The music is loud!",
            "The music is deafening!",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Jamie",
        "secondName": "George"
    },
    rude_no_alts: {
        "id": "warm_ups_rude",
        "scenario_id": "pvt21_warmup1",
        "scenario_type": "weak_no_alts",
        "scenario": "Lisa and Amy are talking about a comment their coworker made during their meeting. Lisa turns to Amy.",
        "question": "How likely is it that the coworker gets reported to HR?",
        "observed_utterance": "That was such a rude thing to say.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Lisa",
        "secondName": "Amy"
    },
    rude_with_alts: {
        "id": "warm_ups_rude",
        "scenario_id": "pvt21_warmup1",
        "scenario_type": "weak_with_alts",
        "scenario": "Lisa and Amy are talking about a comment their coworker made during their meeting. Lisa turns to Amy.",
        "question": "How likely is it that the coworker gets reported to HR?",
        "observed_utterance": "That was such a rude thing to say.",
        "alternatives": [
            "That was such a rude thing to say.",
            "That was such an offensive thing to say.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Lisa",
        "secondName": "Amy"
    }
};
