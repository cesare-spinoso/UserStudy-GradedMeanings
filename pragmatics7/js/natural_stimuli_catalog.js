// Canonical catalog of all 30 unique natural-language (dialogue) scenarios
// used in pragmatics7, each carrying BOTH a weak and a strong utterance:
//   weak_utterance   — the milder phrasing on the gradable-adjective scale
//                       (the one participants actually see in the *_no_alts
//                       condition, and the "observed" utterance in *_with_alts)
//   strong_utterance — the more intense phrasing on the same scale (only
//                       revealed in the *_with_alts condition, as the
//                       alternative the speaker considered but did not say)
//
// This file is NOT loaded by experiment.html / experiment.js -- the live
// experiment still runs off main_stimuli_gradable_meanings (copied from
// pragmatics4 unchanged, batch-by-batch). This catalog exists purely as the
// single source of truth for scripts/dump_stimuli.js, which renders the
// "all natural text examples" PDF from it.
//
// 18 of these 30 scenarios already had a weak/strong pair in pragmatics4
// (shown as alternatives in some batch). The other 12 previously appeared
// with only a single fixed utterance; weak/strong counterparts were added
// here for completeness of the catalog (2 provided by the researcher, 10
// authored to match the existing intensity-scale pattern).

var natural_stimuli_catalog = [
  {
    'scenario_id': 'pvt21_revised0',
    'scenario': "David and Rachel are watching their favorite hockey team play. As one of their team's players scores, they cheer.",
    'question': 'How likely is it that this goal is remembered for years to come?',
    'mainName': 'David', 'secondName': 'Rachel',
    'weak_utterance': 'What an amazing goal!', 'strong_utterance': 'What a miraculous goal!',
  },
  {
    'scenario_id': 'pvt21_revised1',
    'scenario': "Joshua and Beverly, who are walking over to a friend's house downtown, come across a group of protesters. Beverly turns to Joshua.",
    'question': 'How likely is it that the protest requires riot police?',
    'mainName': 'Beverly', 'secondName': 'Joshua',
    'weak_utterance': 'This crowd looks angry.', 'strong_utterance': 'This crowd looks violent.',
  },
  {
    'scenario_id': 'pvt21_revised2',
    'scenario': 'William and Katherine are walking through an affluent neighborhood with many mansions. As they stop to admire one mansion in particular, William turns to Katherine.',
    'question': 'How likely is it that this mansion has more than 10 rooms?',
    'mainName': 'William', 'secondName': 'Katherine',
    'weak_utterance': 'Damn, this thing is big!', 'strong_utterance': 'Damn, this thing is huge!',
  },
  {
    'scenario_id': 'pvt21_revised5',
    'scenario': 'Amanda and Paul arrive at a restaurant that does not take reservations. Amanda glances around the dining area and turns to Paul.',
    'question': 'How likely are Amanda and Paul to wait long for a table?',
    'mainName': 'Amanda', 'secondName': 'Paul',
    'weak_utterance': 'This place is busy!', 'strong_utterance': 'This place is full!',
  },
  {
    'scenario_id': 'pvt21_revised9',
    'scenario': 'Lucy and Mark return home after a weekend getaway at a resort. As they unpack, Lucy smiles thinking about their accommodations.',
    'question': 'How likely is it that Lucy and Mark stayed at a five-star hotel?',
    'mainName': 'Lucy', 'secondName': 'Mark',
    'weak_utterance': 'The room we had was quite comfortable.', 'strong_utterance': 'The room we had was quite luxurious.',
  },
  {
    'scenario_id': 'pvt21_revised10',
    'scenario': 'Linda and Kenneth are sitting around a campfire after a long day of hiking. As the stars begin to twinkle above them, Linda looks to Kenneth.',
    'question': 'How likely is it that Linda puts on an extra layer?',
    'mainName': 'Linda', 'secondName': 'Kenneth',
    'weak_utterance': "It's starting to get a bit cool.", 'strong_utterance': "It's starting to get a bit cold.",
  },
  {
    'scenario_id': 'pvt21_revised11',
    'scenario': "Daniel and Brenda are having coffee at a trendy café. Brenda just met Daniel's girlfriend for the first time, and she looks pleasantly surprised as she turns to Daniel.",
    'question': "How likely is it that Daniel's girlfriend often gets compliments about her looks?",
    'mainName': 'Brenda', 'secondName': 'Daniel',
    'weak_utterance': "You didn't tell me she was that cute.", 'strong_utterance': "You didn't tell me she was that beautiful.",
  },
  {
    'scenario_id': 'pvt21_revised14',
    'scenario': 'Bobby is meeting up with his friend Logan. When Bobby sees Logan, he notices that Logan has gotten a new haircut.',
    'question': 'How likely is Bobby to ask Logan where he got his haircut?',
    'mainName': 'Bobby', 'secondName': 'Logan',
    'weak_utterance': 'Logan, your hair looks nice!', 'strong_utterance': 'Logan, your hair looks great!',
  },
  {
    'scenario_id': 'pvt21_revised15',
    'scenario': 'Larry and Tina are driving through the countryside. As they pass the farmlands, Larry glances at the ground and turns to Tina.',
    'question': 'How likely is it that this part of the country is experiencing a drought?',
    'mainName': 'Larry', 'secondName': 'Tina',
    'weak_utterance': 'This grass looks dry.', 'strong_utterance': 'This grass looks arid.',
  },
  {
    'scenario_id': 'pvt21_revised21',
    'scenario': 'Carl and Laura are at a comedy club, enjoying a night of stand-up performances. At the end of the night, Carl thinks back, chuckles and turns to Laura.',
    'question': 'How likely is Carl to watch another performance by that last comedian?',
    'mainName': 'Carl', 'secondName': 'Laura',
    'weak_utterance': 'That last comedian was funny.', 'strong_utterance': 'That last comedian was hilarious.',
  },
  {
    'scenario_id': 'pvt21_revised23',
    'scenario': "Jose and Jasmine have just attended a charity concert that included several musical performances. As they leave, Jose turns to Jasmine.",
    'question': "How likely is it for Jose's ears to still be ringing from the concert?",
    'mainName': 'Jose', 'secondName': 'Jasmine',
    'weak_utterance': 'That crowd was noisy.', 'strong_utterance': 'That crowd was loud.',
  },
  {
    'scenario_id': 'pvt21_revised24',
    'scenario': 'Marie and Jordan, two colleagues, are discussing a TED talk they just attended. Jordan asks Marie how she found the talk.',
    'question': 'How likely is it that Marie recommends watching the talk to others?',
    'mainName': 'Marie', 'secondName': 'Jordan',
    'weak_utterance': 'I liked it.', 'strong_utterance': 'I loved it.',
  },
  {
    'scenario_id': 'pvt21_revised25',
    'scenario': 'Sharon is preparing dinner in the kitchen where her son Jason is trying to help. When Jason walks closer to the stove, Sharon turns to Jason.',
    'question': 'How likely is Jason to burn himself if he touches the pot?',
    'mainName': 'Sharon', 'secondName': 'Jason',
    'weak_utterance': 'Careful, the pot is hot.', 'strong_utterance': 'Careful, the pot is boiling.',
  },
  {
    'scenario_id': 'pvt21_revised27',
    'scenario': "Jeremy and Marcus are attending a gaming convention. They're discussing a new game that was showcased during the event, particularly the visuals it offered. Jeremy turns to Marcus.",
    'question': 'How likely is the game to receive a five-star rating for its graphics?',
    'mainName': 'Jeremy', 'secondName': 'Marcus',
    'weak_utterance': 'The graphics were nice.', 'strong_utterance': 'The graphics were great.',
  },
  {
    'scenario_id': 'pvt21_revised28',
    'scenario': "Ronald and Jess are sitting in a conference room brainstorming ideas for a new promotional campaign. After listening to Ronald's latest proposal, Jess turns to Ronald.",
    'question': 'How likely is it that Jess has never heard an idea like this before?',
    'mainName': 'Jess', 'secondName': 'Ronald',
    'weak_utterance': "That's a different idea.", 'strong_utterance': "That's an odd idea.",
  },
  {
    'scenario_id': 'pvt21_revised29',
    'scenario': 'Gerald and Margaret are attending a live musical concert. As the last song finishes, Gerald turns to Margaret.',
    'question': 'How likely is Gerald to give the musical performance a five-star rating?',
    'mainName': 'Gerald', 'secondName': 'Margaret',
    'weak_utterance': 'That was a good show.', 'strong_utterance': 'That was an excellent show.',
  },
  {
    'scenario_id': 'pvt21_revised30',
    'scenario': 'Timothy is visiting his doctor, Dr. Sanders, who is recommending that Timothy go through a minor operation. Dr. Sanders is describing the procedure and its risks.',
    'question': 'How likely is it that the operation will involve some anesthesia?',
    'mainName': 'Dr. Sanders', 'secondName': 'Timothy',
    'weak_utterance': 'It will be uncomfortable.', 'strong_utterance': 'It will be painful.',
  },
  {
    'scenario_id': 'pvt21_revised32',
    'scenario': 'Hannah and Jacob just finished a meal at a new restaurant in town. As they are getting ready to pay the bill, Hannah turns to Jacob.',
    'question': 'How likely is Hannah to leave a larger-than-usual tip?',
    'mainName': 'Hannah', 'secondName': 'Jacob',
    'weak_utterance': 'I like how nice the staff is.', 'strong_utterance': 'I like how polite the staff is.',
  },
  {
    'scenario_id': 'pvt21_revised33',
    'scenario': 'Catherine and Charles are visiting a small village during a road trip. After walking up a hill, they arrive at a viewpoint overlooking the entire village. Catherine turns to Charles.',
    'question': 'How likely is Catherine to take a photo of the view?',
    'mainName': 'Catherine', 'secondName': 'Charles',
    'weak_utterance': 'What a pretty view.', 'strong_utterance': 'What a beautiful view.',
  },
  {
    'scenario_id': 'pvt21_revised34',
    'scenario': 'Max and Judy are sitting in a library, studying for their final exams. Max turns to Judy.',
    'question': 'How likely is it that no talking is allowed in the library?',
    'mainName': 'Max', 'secondName': 'Judy',
    'weak_utterance': 'I like how quiet it is here.', 'strong_utterance': 'I like how silent it is here.',
  },
  {
    'scenario_id': 'pvt21_revised36',
    'scenario': 'Megan and her husband Caleb are on a road trip together. As Megan drives, Caleb turns to her.',
    'question': 'How likely is it that Caleb asks Megan to get off at the next exit to eat?',
    'mainName': 'Caleb', 'secondName': 'Megan',
    'weak_utterance': 'I could eat something.', 'strong_utterance': "I'm hungry.",
  },
  {
    'scenario_id': 'pvt21_revised38',
    'scenario': "Tiffany and Matthew are academics at a university. Tiffany is expressing her opinion of Matthew's new research idea he just presented at a talk.",
    'question': 'How likely is it that no one has thought of this idea before?',
    'mainName': 'Tiffany', 'secondName': 'Matthew',
    'weak_utterance': "That's a smart idea.", 'strong_utterance': "That's a brilliant idea.",
  },
  {
    'scenario_id': 'pvt21_revised39',
    'scenario': 'James and Lauren are looking to have a healthy snack in their kitchen. James picks up a banana, notices its texture, and turns to Lauren.',
    'question': 'How likely is it that the banana has gone bad?',
    'mainName': 'James', 'secondName': 'Lauren',
    'weak_utterance': 'This banana is kind of soft.', 'strong_utterance': 'This banana is kind of mushy.',
  },
  {
    'scenario_id': 'pvt21_revised40',
    'scenario': 'Albert and Jessica are exploring a historic castle. They come across a wall whose size impresses them. Albert turns to Jessica.',
    'question': 'How likely is it that the wall could resist heavy cannon fire?',
    'mainName': 'Albert', 'secondName': 'Jessica',
    'weak_utterance': 'This wall seems sturdy.', 'strong_utterance': 'This wall seems thick.',
  },
  {
    'scenario_id': 'pvt21_revised41',
    'scenario': 'Terry is telling Jenna about a movie he recently watched.',
    'question': 'How likely is it that Terry gives the movie a one-star rating?',
    'mainName': 'Terry', 'secondName': 'Jenna',
    'weak_utterance': 'I found it mediocre.', 'strong_utterance': 'I found it bad.',
  },
  {
    'scenario_id': 'pvt21_revised42',
    'scenario': 'Jacqueline and Christian are observing a caterpillar which is resting on a leaf. They are interested in finding out how caterpillars move. Jacqueline turns to Christian.',
    'question': "How likely is it for an average person to not notice the caterpillar's movement?",
    'mainName': 'Jacqueline', 'secondName': 'Christian',
    'weak_utterance': 'Its movements are tiny.', 'strong_utterance': 'Its movements are imperceptible.',
  },
  {
    'scenario_id': 'pvt21_revised43',
    'scenario': 'Pamela and Bruce are exiting their classroom after having taken an exam. As they walk to their next class, Pamela turns to Bruce.',
    'question': 'How likely is it that Pamela failed the exam?',
    'mainName': 'Pamela', 'secondName': 'Bruce',
    'weak_utterance': 'That exam was tough.', 'strong_utterance': 'That exam was impossible.',
  },
  {
    'scenario_id': 'pvt21_revised45',
    'scenario': 'Liam and Harper live together and are looking at the weather forecast for tomorrow. Harper looks to Liam.',
    'question': 'How likely is it that Harper and Liam will use their air conditioning tomorrow?',
    'mainName': 'Harper', 'secondName': 'Liam',
    'weak_utterance': "Looks like it's going to be warm tomorrow.", 'strong_utterance': "Looks like it's going to be hot tomorrow.",
  },
  {
    'scenario_id': 'pvt21_revised47',
    'scenario': "Jack has just gone out to buy some milk during which it rained unexpectedly. When Jack returns home, Judith, Jack's partner, looks at him.",
    'question': 'How likely is Jack to change into dry clothes?',
    'mainName': 'Judith', 'secondName': 'Jack',
    'weak_utterance': 'You look damp.', 'strong_utterance': 'You look wet.',
  },
  {
    'scenario_id': 'pvt21_revised48',
    'scenario': "Liam is discussing his daughter's piano recital performance with his colleague Sophie.",
    'question': "How likely is it that Liam's daughter did not make any mistakes during the recital?",
    'mainName': 'Liam', 'secondName': 'Sophie',
    'weak_utterance': 'She played well.', 'strong_utterance': 'She played superbly.',
  },
];

// Node.js export (used only by scripts/dump_stimuli.js; ignored in-browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { natural_stimuli_catalog: natural_stimuli_catalog };
}
