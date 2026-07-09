
// Pragmatics4 warm-ups: likelihood scale, one without alternatives, one with
// Group A: loud_no_alts + rude_with_alts
// Group B: loud_with_alts + rude_no_alts
// Assigned via coin flip in init()
// pragmatics7 addition: a third pair (refgame_no_alts / refgame_with_alts)
// built from an object display, also coin-flipped in init().

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
    },
    refgame_no_alts: {
        "id": "warm_ups_refgame",
        "scenario_id": "refgame_warmup0",
        "scenario_type": "refgame_no_alts",
        "stimulus_type": "refgame",
        "context_id": "warmup_ctx",
        "scenario": "Mona and Theo are arranging stickers in an album. Three stickers sit in front of them:",
        "display": [
            { "color": "yellow", "shape": "triangle" },
            { "color": "yellow", "shape": "square" },
            { "color": "green", "shape": "triangle" },
        ],
        "question": "How likely is it that Mona wants the yellow triangle (and not the yellow square)?",
        "observed_utterance": "Pass me the yellow one.",
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Mona",
        "secondName": "Theo",
        "target": { "color": "yellow", "shape": "triangle" },
        "competitor": { "color": "yellow", "shape": "square" },
        "weak_utterance": "Pass me the yellow one.",
        "strong_utterance": "Pass me the yellow triangle.",
    },
    refgame_with_alts: {
        "id": "warm_ups_refgame",
        "scenario_id": "refgame_warmup0",
        "scenario_type": "refgame_with_alts",
        "stimulus_type": "refgame",
        "context_id": "warmup_ctx",
        "scenario": "Mona and Theo are arranging stickers in an album. Three stickers sit in front of them:",
        "display": [
            { "color": "yellow", "shape": "triangle" },
            { "color": "yellow", "shape": "square" },
            { "color": "green", "shape": "triangle" },
        ],
        "question": "How likely is it that Mona wants the yellow triangle (and not the yellow square)?",
        "observed_utterance": "Pass me the yellow one.",
        "alternatives": [
            "Pass me the yellow one.",
            "Pass me the yellow triangle.",
        ],
        "interpretations": [
            "Absolutely Impossible",
            "Absolutely Certain",
        ],
        "mainName": "Mona",
        "secondName": "Theo",
        "target": { "color": "yellow", "shape": "triangle" },
        "competitor": { "color": "yellow", "shape": "square" },
        "weak_utterance": "Pass me the yellow one.",
        "strong_utterance": "Pass me the yellow triangle.",
    },
};
