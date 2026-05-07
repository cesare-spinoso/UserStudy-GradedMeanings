// Pragmatics4 stimuli: weaker vs stronger utterances with interpretations as slider endpoints
// Slider anchors have no lexical overlap with utterances and use "very X" scale

var main_stimuli_gradable_meanings = [
  [
    {
      id: "main_stimuli_pvt21_revised48",
      scenario: "Andrew and Sophie are walking home after watching a live music performance by Andrew's favorite band.",
      question: "What does Andrew think about the band's performance?",
      weaker_utterance: "That was good.",
      stronger_utterance: "That was absolutely incredible!",
      interpretations: [
        "Very unfavorable",
        "Very favorable",
      ],
      mainName: "Andrew",
      secondName: "Sophie",
    },
    {
      id: "main_stimuli_pvt21_revised26",
      scenario: "Gregory and Ava are sitting in a coffee shop, reviewing the outcomes of their recent science project. They both look puzzled as the results don't match their expectations.",
      question: "What does Gregory think about the nature of the results?",
      weaker_utterance: "These results are different.",
      stronger_utterance: "These results are so weird.",
      interpretations: [
        "Very expected",
        "Very surprising",
      ],
      mainName: "Gregory",
      secondName: "Ava",
    },
    {
      id: "main_stimuli_pvt21_revised25",
      scenario: "Sharon is preparing dinner in the kitchen where her son Jason is trying to help. As Sharon turns off the stove, she points to the pot of water.",
      question: "What does Sharon think about the temperature of the water?",
      weaker_utterance: "The water is warm.",
      stronger_utterance: "Make sure not to stick your fingers in there!",
      interpretations: [
        "Very cool",
        "Very intense",
      ],
      mainName: "Sharon",
      secondName: "Jason",
    },
    {
      id: "main_stimuli_pvt21_revised32",
      scenario: "Hannah and Jacob just finished a meal at a new restaurant in town. As they exit, Hannah remarks to Jacob.",
      question: "What does Hannah think about the staff's treatment?",
      weaker_utterance: "I liked the way they treated us.",
      stronger_utterance: "They treated us as if we were old friends.",
      interpretations: [
        "Very cold",
        "Very warm",
      ],
      mainName: "Hannah",
      secondName: "Jacob",
    },
    {
      id: "main_stimuli_pvt21_revised19",
      scenario: "Aaron and Sara are investigating a series of mysterious disappearances in their small town. They stumble upon an abandoned building rumored to be a meeting place for a local cult. After uncovering disturbing artifacts and symbols inside, Aaron, shocked, turns to Sara and says, \"This cult is up to no good. Look at all this stuff. It's all so dark.\"",
      question: "What does Aaron think about the cult?",
      interpretations: [
        "The cult was very evil.",
        "The cult was evil.",
        "The cult was neither evil nor saintly.",
        "The cult was saintly.",
        "The cult was very saintly.",
      ],
      stronger_alternative: "Yeah, this is scary Aaron. They must be evil satan worshippers.",
      mainName: "Aaron",
      secondName: "Sara",
      alternative_cancellation: "Okay Sara, let's not jump to conclusion. It doesn't seem that bad.",
      alternative_amplification: "Yeah, they're definitely into some really sinister stuff. We should alert the authorities."
    }
  ]
];