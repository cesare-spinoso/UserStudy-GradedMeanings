IMPLI_DATA = [
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you mail these letters for me, please?<br>B: <em>Your friends are going to be very happy to hear from you.</em>",
      implicature: "I believe that these letters are to your friends.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_9_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you mail these letters for me, please?<br>B: <em>Your friends are going to be very happy to hear from you. Unless these are to your parents?</em>",
      implicature: "I believe that these letters are to your friends.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_9_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lucy discusses her trip to Paris with her mom Patricia. Lucy says: "I\'d like to visit Vincent when I am in Paris. Where does he live?" Patricia responds: "<em>Somewhere in France.</em>"',
      implicature: "Patricia does not know where exactly Vincent lives.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Patricia",
      identifier: "jhu_max_5_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lucy discusses her trip to Paris with her mom Patricia. Lucy says: "I\'d like to visit Vincent when I am in Paris. Where does he live?" Patricia responds: "<em>Somewhere in France. Haha, just kidding! He\'s in the 4th arrondissement, in a small flat that overlooks the Seine.</em>"',
      implicature: "Patricia does not know where exactly Vincent lives.",
      "ask-for": "interpretation",
      "speaker-name": "Patricia",
      hard_label: 0,
      identifier: "jhu_max_5_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you planning to drink?<br>B: <em>I'm trying to cut back.</em>",
      implicature: "I am not planning to drink .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_21789_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you planning to drink?<br>B: <em>I'm trying to cut back. Though I will probably still drink a couple of times.</em>",
      implicature: "I am not planning to drink .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_21789_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is your job stressful?<br>B: <em>I try not to let it affect me.</em>",
      implicature: "My job is stressful.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_13593_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is your job stressful?<br>B: <em>I try not to let it affect me. I don't mean the stress though. That part is fine. It's more how unfriendly everyone is.</em>",
      implicature: "My job is stressful.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_13593_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: This calculator is not working, right?<br>B: <em>I think you got the battery on upside down.</em>",
      implicature:
        "It is not working because the battery is not correctly positioned.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_6_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: This calculator is not working, right?<br>B: <em>I think you got the battery on upside down. Though it wasn't working before that either.</em>",
      implicature:
        "It is not working because the battery is not correctly positioned.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_6_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Do you remember this village well?<br><em>T: I was quite young when I came here.</em>",
      implicature: "I do not remember the village well.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_8_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Do you remember this village well?<br><em>T: I was quite young when I came here. And yet, I still remember quite a lot about it.</em>",
      implicature: "I do not remember the village well.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_8_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you enjoy American Food?<br>B: <em>It's so salty.</em>",
      implicature: "I do not enjoy American Food .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_26165_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you enjoy American Food?<br>B: <em>It's so salty. I love to have it when I'm craving something savory. </em>",
      implicature: "I do not enjoy American Food .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_26165_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does it mean that I'm crazy?<br>B: <em>A person cannot be crazy, Jerry.</em>",
      implicature: "No, you're not crazy Jerry.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_44_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does it mean that I'm crazy?<br>B: <em>A person cannot be crazy, Jerry. Unless they are you, you mad man.</em>",
      implicature: "No, you're not crazy Jerry.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_44_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can I call you?<br>B: <em>It's four in the morning...</em>",
      implicature: "No, you cannot call me.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_30_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can I call you?<br>B: <em>It's four in the morning... But if it's urgent, go ahead and call me.</em>",
      implicature: "No, you cannot call me.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_30_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you consider a job related to customer service?<br>B: <em>I'm not sure I want to work with the public.</em>",
      implicature: "I would not consider a job related to customer service.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_12932_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you consider a job related to customer service?<br>B: <em>I'm not sure I want to work with the public. Though in this economy I'll take whatever I can get.</em>",
      implicature: "I would not consider a job related to customer service.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_12932_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are there young families in this neighborhood?<br>B: <em>I haven't seen many kids around.</em>",
      implicature: "There are no young families in this neighborhood.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_10562_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are there young families in this neighborhood?<br>B: <em>I haven't seen many kids around. Though I think that's just because all the young couples here don't want to have kids.</em>",
      implicature: "There are no young families in this neighborhood.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_10562_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: It looked like the police arrested a man.<br><em>T: That man is here on the train.</em>",
      implicature: "The police did not arrest the man.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_3_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: It looked like the police arrested a man.<br><em>T: That man is here on the train. He appears to be accompanied by the police so it does indeed look that way.</em>",
      implicature: "The police did not arrest the man.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_3_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Has your brother always lived near here?<br><em>T: He's still living in the same flat.</em>",
      implicature: "His brother has always lived nearby.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_29_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Has your brother always lived near here?<br><em>T: He's still living in the same flat. He was somewhere else for a while but then he came back.</em>",
      implicature: "His brother has always lived nearby.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_29_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you alone?<br>B: <em>Dan just left.</em>",
      implicature: "Yes, I am alone.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_42_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you alone?<br>B: <em>Dan just left. Pete is still here though.</em>",
      implicature: "Yes, I am alone.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_42_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Why would we go back to the shop? We don't need to buy a newspaper.<br><em>T: We still have to get a map.</em>",
      implicature: "They will go back to the shop.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_25_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Why would we go back to the shop? We don't need to buy a newspaper.<br><em>T: We still have to get a map. The shop's too far though. Let me just check the map on my phone.</em>",
      implicature: "They will go back to the shop.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_25_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How is your paper coming along?<br>B: <em>My laptop is broken.</em>",
      implicature: "I have not made much progress on my paper.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_0_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How is your paper coming along?<br>B: <em>My laptop is broken. So I've been writing things by hand and it's been quite good.</em>",
      implicature: "I have not made much progress on my paper.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_0_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I don't understand this question. Can you help me?<br>B: <em>I'm more behind than you.</em>",
      implicature: "I cannot help you with this question.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_24_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I don't understand this question. Can you help me?<br>B: <em>I'm more behind than you. This one looks doable though. Let me give it a try.</em>",
      implicature: "I cannot help you with this question.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_24_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: It might not be safe in the woods.<br><em>T: There are no bears around here anymore.</em>",
      implicature: "It is safe in the woods.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_27_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: It might not be safe in the woods.<br><em>T: There are no bears around here anymore. That's caused the foxes to be way more aggressive though. Maybe we shouldn't stay the night.</em>",
      implicature: "It is safe in the woods.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_27_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you up for going to the museum tomorrow?<br>B: <em>I was just there yesterday.</em>",
      implicature: "I am not up for going to the museum tomorrow .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_26457_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you up for going to the museum tomorrow?<br>B: <em>I was just there yesterday. But since you've come from so far, I'm happy to go again!</em>",
      implicature: "I am not up for going to the museum tomorrow .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_26457_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Could you help Bob and me plan a surprise party for Meg?<br>B: <em>What can I do?</em>",
      implicature: "Yes, I am glad to help on planning the party.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_19_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Could you help Bob and me plan a surprise party for Meg?<br>B: <em>What can I do? I'm available for roughly fifteen minutes in three Sundays from now.</em>",
      implicature: "Yes, I am glad to help on planning the party.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_19_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mark is discussing Jane, a senior financial manager who he hired, with his colleague John. Mark asks: "How is Jane managing her new position?" John responds: "<em>She has excellent handwriting and is always dressed so nicely.</em>"',
      implicature: "John's opinion of Jane as a financial manager is very low.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "John",
      identifier: "jhu_max_4_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mark is discussing Jane, a senior financial manager who he hired, with his colleague John. Mark asks: "How is Jane managing her new position?" John responds: "<em>She has excellent handwriting and is always dressed so nicely. But more importantly, she\'s adapting quickly and leading her team successfully.</em>"',
      implicature: "John's opinion of Jane as a financial manager is very low.",
      "ask-for": "interpretation",
      "speaker-name": "John",
      hard_label: 0,
      identifier: "jhu_max_4_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Have you ever tried skiing before?<br><em>S: My friend said it was very hard.</em>",
      implicature: "I have not tried skiing before.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_10_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Have you ever tried skiing before?<br><em>S: My friend said it was very hard. He was right, it is very hard!</em>",
      implicature: "I have not tried skiing before.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_10_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are we getting an end-of-year bonus?<br>B: <em>I've heard we've had a very good year.</em>",
      implicature: "We are getting an end-of-year bonus.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_9988_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are we getting an end-of-year bonus?<br>B: <em>I've heard we've had a very good year. Then again, they usually end up giving all the bonus money to the executives.</em>",
      implicature: "We are getting an end-of-year bonus.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_9988_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does marriage ever get easier?<br>B: <em>Well, we started seeing a marriage counselor.</em>",
      implicature: "Marriage does not get easier.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_31_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does marriage ever get easier?<br>B: <em>Well, we started seeing a marriage counselor. I would say that really helped a lot. I don't think we've every been happier!</em>",
      implicature: "Marriage does not get easier.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_31_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you a fan of nonfiction?<br>B: <em>I read more fiction than nonfiction.</em>",
      implicature: "I am not a fan of nonfiction.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_27735_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you a fan of nonfiction?<br>B: <em>I read more fiction than nonfiction. That's not to say that I don't like nonfiction though. Both are great.</em>",
      implicature: "I am not a fan of nonfiction.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_27735_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Richard came to visit his friend, Alex. Alex is an artist. Richard brought one of his artworks to Alex and asked Alex: "What do you think of my painting?" Alex responds, "<em>Have you noticed that I painted the walls?</em>"',
      implicature: "Alex thinks that Richard's painting is mediocre.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Alex",
      identifier: "jhu_max_1_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Richard came to visit his friend, Alex. Alex is an artist. Richard brought one of his artworks to Alex and asked Alex: "What do you think of my painting?" Alex responds, "<em>Have you noticed that I painted the walls? They\'re the same shade as your painting, which I think is really beautiful!</em>"',
      implicature: "Alex thinks that Richard's painting is mediocre.",
      "ask-for": "interpretation",
      "speaker-name": "Alex",
      hard_label: 0,
      identifier: "jhu_max_1_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you had a chance to wear your new coat yet?<br>B: <em>I have been trying to exchange it for a larger size.</em>",
      implicature: "The coat does not fit me well.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_28_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you had a chance to wear your new coat yet?<br>B: <em>I have been trying to exchange it for a larger size. It fit perfectly, but I wanted to wear something heavy under it.</em>",
      implicature: "The coat does not fit me well.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_28_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mike comes home from school. His mom asks him: "What did you do at school today?" Mike responds: "<em>Some schoolwork.</em>"',
      implicature: "Mike does not want to talk about school with his mom.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Mike",
      identifier: "jhu_max_9_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mike comes home from school. His mom asks him: "What did you do at school today?" Mike responds: "<em>Some schoolwork. That was a bit boring, but then I got to play football with my friends from school and that was really fun.</em>"',
      implicature: "Mike does not want to talk about school with his mom.",
      "ask-for": "interpretation",
      "speaker-name": "Mike",
      hard_label: 0,
      identifier: "jhu_max_9_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Have you got my ticket too?<br><em>S: The tickets are all in the envelope.</em>",
      implicature: "I have your ticket.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_2_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Have you got my ticket too?<br><em>S: The tickets are all in the envelope. Unfortunately, there isn't one for you.</em>",
      implicature: "I have your ticket.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_2_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you know how much the flat is?<br>B: <em>I have an idea</em>",
      implicature: "I know how much the flat is.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_9547_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you know how much the flat is?<br>B: <em>I have an idea Not about the flat's price though. About something else.</em>",
      implicature: "I know how much the flat is.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_9547_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you have a good week at work?<br>B: <em>It was exhausting.</em>",
      implicature: "I did not have a good week at work.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_7650_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you have a good week at work?<br>B: <em>It was exhausting. Not in a bad way though. It's way better than when I had nothing to do.</em>",
      implicature: "I did not have a good week at work.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_7650_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go camping this weekend at the park?<br>B: <em>It's supposed to rain.</em>",
      implicature: "I would not like to go camping this weekend at the park.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_20820_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go camping this weekend at the park?<br>B: <em>It's supposed to rain. Which is my preferred camping weather!</em>",
      implicature: "I would not like to go camping this weekend at the park.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_20820_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Does the temperature need turning up in here?<br><em>T: I just took off my jumper.</em>",
      implicature: "The temperature does not need to be turned up.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_11_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Does the temperature need turning up in here?<br><em>T: I just took off my jumper. I'll probably be a bit cold without it so yeah could you turn it up a bit?</em>",
      implicature: "The temperature does not need to be turned up.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_11_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Can we take a rest here?<br><em>T: This is a nice quiet area.</em>",
      implicature: "They will take a rest here.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_16_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Can we take a rest here?<br><em>T: This is a nice quiet area. But I'd prefer walking a little bit longer if you don't mind.</em>",
      implicature: "They will take a rest here.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_16_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go out for a drink?<br>B: <em>I don't drink much.</em>",
      implicature: "I would not like to go out for a drink.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_12388_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go out for a drink?<br>B: <em>I don't drink much. For you, though, I'll make an exception.</em>",
      implicature: "I would not like to go out for a drink.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_12388_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you ever read Dean Koontz?<br>B: <em>What did he write?</em>",
      implicature: "I have not read Dean Koontz.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_9654_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you ever read Dean Koontz?<br>B: <em>What did he write? I only remember reading his first book.</em>",
      implicature: "I have not read Dean Koontz.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_9654_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Can you see more by climbing the rocks?<br><em>S: The rocks here aren't very high.</em>",
      implicature: "Climbing the rocks will not allow her to see more.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_26_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Can you see more by climbing the rocks?<br><em>S: The rocks here aren't very high. But there's a specific spot at the top where you can see a lot more.</em>",
      implicature: "Climbing the rocks will not allow her to see more.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_26_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will this check engine light go away?<br>B: <em>Oh I've been meaning to ask the mechanic about that.</em>",
      implicature: "The check engine light will not go away on its own.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_48_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will this check engine light go away?<br>B: <em>Oh I've been meaning to ask the mechanic about that. It usually goes away after a while though.</em>",
      implicature: "The check engine light will not go away on its own.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_48_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did marriage counseling help?<br>B: <em>We established that we have nothing in common.</em>",
      implicature: "It did not help.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_32_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did marriage counseling help?<br>B: <em>We established that we have nothing in common. This helped us realize that we should just be friends.</em>",
      implicature: "It did not help.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_32_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Take a look at this gift store. Maybe we can find something to get Janet for her new house.<br>B: <em>Okay but remember we're on a budget.</em>",
      implicature: "We should select an inexpensive gift.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_15_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Take a look at this gift store. Maybe we can find something to get Janet for her new house.<br>B: <em>Okay but remember we're on a budget. Though, given how generous Janet has been, maybe we should get her something nice.</em>",
      implicature: "We should select an inexpensive gift.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_15_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Shall I get the cereals out?<br><em>S: I've bought us some milk.</em>",
      implicature: "They will eat cereal.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_23_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Shall I get the cereals out?<br><em>S: I've bought us some milk. But I got a craving for toast on the way back. Let's do that instead.</em>",
      implicature: "They will eat cereal.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_23_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Have you tried the new tea?<br><em>T: I needed a hot drink after skiing.</em>",
      implicature: "I tried the new tea.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_22_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Have you tried the new tea?<br><em>T: I needed a hot drink after skiing. I didn't want tea though. I got the hot chocolate.</em>",
      implicature: "I tried the new tea.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_22_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Annie and Kelly are discussing their plans for summer. Annie asks Kelly: "How many books do you plan to read this summer?" Kelly responds: "<em>A million.</em>"',
      implicature:
        "Kelly plans to devote a lot of time to reading this summer.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Kelly",
      identifier: "jhu_max_19_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Annie and Kelly are discussing their plans for summer. Annie asks Kelly: "How many books do you plan to read this summer?" Kelly responds: "<em>A million. Is what I would say to exaggerate. I\'ll probably read around 5 or 6.</em>"',
      implicature:
        "Kelly plans to devote a lot of time to reading this summer.",
      "ask-for": "interpretation",
      "speaker-name": "Kelly",
      hard_label: 0,
      identifier: "jhu_max_19_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you need a loan to buy it?<br>B: <em>A little one.</em>",
      implicature: "I will need a loan to buy it.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_1145_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you need a loan to buy it?<br>B: <em>A little one. Or not even actually.</em>",
      implicature: "I will need a loan to buy it.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_1145_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Will we arrive before seven o'clock?<br><em>T: There's still a long way to go.</em>",
      implicature: "They will not arrive before seven.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_5_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Will we arrive before seven o'clock?<br><em>T: There's still a long way to go. At this speed, though, there's no way we won't make it on time.</em>",
      implicature: "They will not arrive before seven.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_5_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is there a clean cup in the cupboard?<br><em>T: You'll have to wash out a cup.</em>",
      implicature: "There is no clean cup in the cupboard.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_21_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is there a clean cup in the cupboard?<br><em>T: You'll have to wash out a cup. Not because they're not clean though. It's just what we always do as the first step in making tea.</em>",
      implicature: "There is no clean cup in the cupboard.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_21_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can you get the weekend off?<br>B: <em>I usually have to run personal errands for my boss over the weekend.</em>",
      implicature: "I cannot get the weekend off.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_25758_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can you get the weekend off?<br>B: <em>I usually have to run personal errands for my boss over the weekend. But I'll just do those on a weekday.</em>",
      implicature: "I cannot get the weekend off.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_25758_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Nancy really wants to ski on Thursday<br>B: <em>Yeah, but she can't.</em>",
      implicature: "Nancy won't be able to go skiing on Thursday.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_4_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Nancy really wants to ski on Thursday<br>B: <em>Yeah, but she can't. Which is why she'll probably take the day off to go anyway.</em>",
      implicature: "Nancy won't be able to go skiing on Thursday.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_4_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Paul, a theater critique, was asked to comment on the performance of one of the actresses. Paul said: "<em>Miss Smith produced a series of sounds that corresponded closely with the score of Home Sweet Home.</em>"',
      implicature: "Paul thinks that the actress's performance was bad.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Paul",
      identifier: "jhu_max_12_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Paul, a theater critique, was asked to comment on the performance of one of the actresses. Paul said: "<em>Miss Smith produced a series of sounds that corresponded closely with the score of Home Sweet Home. In any other context, that would have been a recipe for disaster. However, I happen to love Home Sweet Home.</em>"',
      implicature: "Paul thinks that the actress's performance was bad.",
      "ask-for": "interpretation",
      "speaker-name": "Paul",
      hard_label: 0,
      identifier: "jhu_max_12_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Going out of town this weekend?<br>B: <em>I don't have any concrete plans.</em>",
      implicature: "I'm not going out of town this weekend.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_19738_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Going out of town this weekend?<br>B: <em>I don't have any concrete plans. Which means we'll probably go to our cottage like we usually do.</em>",
      implicature: "I'm not going out of town this weekend.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_19738_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can you get the weekend off?<br>B: <em>I work on the weekend.</em>",
      implicature: "I can't get the weekend off.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_20143_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can you get the weekend off?<br>B: <em>I work on the weekend. I'll just call in sick though.</em>",
      implicature: "I can't get the weekend off.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_20143_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you like to ski?<br>B: <em>I prefer snowboarding.</em>",
      implicature: "I do not like to ski.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_19233_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you like to ski?<br>B: <em>I prefer snowboarding. Though skiing is really fun when you have friends with you.</em>",
      implicature: "I do not like to ski.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_19233_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I wonder, Bob, if you can handle my car?<br>B: <em>It's an ordinary six cylinder, right?</em>",
      implicature: "Yes, I can handle your car.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_45_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I wonder, Bob, if you can handle my car?<br>B: <em>It's an ordinary six cylinder, right? If that's the case, then no.</em>",
      implicature: "Yes, I can handle your car.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_45_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: It's bad isn't it?<br>B: <em>We should get you to the doctor.</em>",
      implicature: "Yes, it is bad.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_33_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: It's bad isn't it?<br>B: <em>We should get you to the doctor. Just as a precaution though. It doesn't look serious.</em>",
      implicature: "Yes, it is bad.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_33_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you mail these letters for me, please?<br>B: <em>Your friends are going to be very happy to hear from you.</em>",
      implicature: "I will mail these letters for you.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_8_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Will you mail these letters for me, please?<br>B: <em>Your friends are going to be very happy to hear from you. Unfortunately, I'll be out of town for the rest of the week.</em>",
      implicature: "I will mail these letters for you.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_8_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you want to get a loft?<br>B: <em>It is an option that I've been seriously considering.</em>",
      implicature: "I want to get a loft.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_11684_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you want to get a loft?<br>B: <em>It is an option that I've been seriously considering. More out of desperation though.</em>",
      implicature: "I want to get a loft.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_11684_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Luke missed a wedding reception and wants his wife Melanie to tell him about it. He asks: "What were you served at the wedding?" Melanie responds: "<em>Some food.</em>"',
      implicature: "The food at the wedding was mediocre.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Melanie",
      identifier: "jhu_max_6_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Luke missed a wedding reception and wants his wife Melanie to tell him about it. He asks: "What were you served at the wedding?" Melanie responds: "<em>Some food. I\'m trying to remember what exactly. Oh, right. Roast chicken, vegetables and a very nice chocolate cake as dessert.</em>"',
      implicature: "The food at the wedding was mediocre.",
      "ask-for": "interpretation",
      "speaker-name": "Melanie",
      hard_label: 0,
      identifier: "jhu_max_6_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: If you are staying late will you be sure to lock up the office before you leave?<br>B: <em>I hope I won't leave within an hour.</em>",
      implicature: "I will leave the office in about an hour.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_3_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: If you are staying late will you be sure to lock up the office before you leave?<br>B: <em>I hope I won't leave within an hour. Though since I need to finish this, that's probably unlikely.</em>",
      implicature: "I will leave the office in about an hour.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_3_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: It took me 5 days to drive down to Florida<br>B: <em>I could have walked there in less time.</em>",
      implicature: "You are a very slow driver.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_20_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: It took me 5 days to drive down to Florida<br>B: <em>I could have walked there in less time. But only if I did not rest or sleep or enjoyed the scenery along the way.</em>",
      implicature: "You are a very slow driver.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_20_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you have any field experience?<br>B: <em>I used to work in an office.</em>",
      implicature: "No, I don't have any field experience.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_49_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you have any field experience?<br>B: <em>I used to work in an office. Luckily, they sent me out into the field a few times.</em>",
      implicature: "No, I don't have any field experience.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_49_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you need a college degree for the job?<br>B: <em>They asked if I had one.</em>",
      implicature: "I need a college degree for the job .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_17806_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you need a college degree for the job?<br>B: <em>They asked if I had one. But they said it wasn't required.</em>",
      implicature: "I need a college degree for the job .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_17806_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you call Carl?<br>B: <em>I tried several times.</em>",
      implicature: "I could not reach Carl.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_29_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you call Carl?<br>B: <em>I tried several times. I finally got through to him on the seventh try. He was in a lecture.</em>",
      implicature: "I could not reach Carl.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_29_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you ever throw anything away?<br>B: <em>Someday, I'm going to need all this stuff.</em>",
      implicature: "No, I don't throw anything away.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_46_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you ever throw anything away?<br>B: <em>Someday, I'm going to need all this stuff. But I'll have you know that I have gotten rid of many things because Jane asked me to.</em>",
      implicature: "No, I don't throw anything away.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_46_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lenny is saying goodbye to his date Bianka. Lenny asks Bianka: "Where do you live?" Bianka responds: "<em>I live on the moon.</em>"',
      implicature: "Bianka does not want Lenny to know her address.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Bianka",
      identifier: "jhu_max_18_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lenny is saying goodbye to his date Bianka. Lenny asks Bianka: "Where do you live?" Bianka responds: "<em>I live on the moon. Oh, wait, you won\'t get that reference, sorry. I live downtown on Main street.</em>"',
      implicature: "Bianka does not want Lenny to know her address.",
      "ask-for": "interpretation",
      "speaker-name": "Bianka",
      hard_label: 0,
      identifier: "jhu_max_18_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I see a book store has just opened on the main street.<br>B: <em>It may be a new store, but the books are far from new.</em>",
      implicature: "The books in the new book store are old.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_11_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I see a book store has just opened on the main street.<br>B: <em>It may be a new store, but the books are far from new. Unless, oh sorry, that's another store.</em>",
      implicature: "The books in the new book store are old.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_11_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: The seats here are all taken.<br><em>T: The carriage behind is much less busy.</em>",
      implicature: "They will be able to find seats in the carriage behind.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_1_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: The seats here are all taken.<br><em>T: The carriage behind is much less busy. Though the seats there are reserved so we won't be able to sit there either.</em>",
      implicature: "They will be able to find seats in the carriage behind.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_1_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Does your brother also go skiing?<br><em>T: He does a whole range of sports.</em>",
      implicature: "His brother also goes skiing.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_30_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Does your brother also go skiing?<br><em>T: He does a whole range of sports. Skiing, however, is not one of them.</em>",
      implicature: "His brother also goes skiing.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_30_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you ever going back to school?<br>B: <em>I am going for a certificate.</em>",
      implicature: "I am going back to school.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_30251_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you ever going back to school?<br>B: <em>I am going for a certificate. Not to school though. My company is offering a private course.</em>",
      implicature: "I am going back to school.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_30251_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is anyone sitting here?<br>B: <em>Mark left at 2.</em>",
      implicature: "No, this seat is free.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_50_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is anyone sitting here?<br>B: <em>Mark left at 2. Sadly for you, Tony took his spot. He's just in the bathroom right now.</em>",
      implicature: "No, this seat is free.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_50_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Kelsey is in a bad mood. Every minor thing irritates her. When she sees her husband Tom watching a football game, she yells: "Can you turn off the TV?" Tom replies: "<em>Beer and chips would be awesome. Thanks!</em>"',
      implicature:
        "Tom pretends that he did not understand his wife's comment.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Tom",
      identifier: "jhu_max_3_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Kelsey is in a bad mood. Every minor thing irritates her. When she sees her husband Tom watching a football game, she yells: "Can you turn off the TV?" Tom replies: "<em>Beer and chips would be awesome. Thanks! Just kidding. I\'ll turn off the TV now.</em>"',
      implicature:
        "Tom pretends that he did not understand his wife's comment.",
      "ask-for": "interpretation",
      "speaker-name": "Tom",
      hard_label: 0,
      identifier: "jhu_max_3_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you hear that Mary turned down that job offer?<br>B: <em>They were offering her less than what she was making now.</em>",
      implicature: "Mary turned down the job offer because of the low salary.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_26_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you hear that Mary turned down that job offer?<br>B: <em>They were offering her less than what she was making now. Though, I actually don't think that's why she turned it down. She had mentioned something about relocating.</em>",
      implicature: "Mary turned down the job offer because of the low salary.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_26_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You looked out for him?<br>B: <em>He looked out for me.</em>",
      implicature: "He looked out for me, but I did not look out for him.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_37_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You looked out for him?<br>B: <em>He looked out for me. And, in turn, I looked out for him.</em>",
      implicature: "He looked out for me, but I did not look out for him.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_37_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Hey, what kind of bread is this on the patty melt, anyway?<br>B: <em>Did you look at the menu before ordering?</em>",
      implicature: "The menu says what kind of bread it is.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_40_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Hey, what kind of bread is this on the patty melt, anyway?<br>B: <em>Did you look at the menu before ordering? It wouldn't have told you the type of bread, but there was a picture of it.</em>",
      implicature: "The menu says what kind of bread it is.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_40_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Mind if I leave my umbrella here in the hallway?<br>B: <em>Shake it outside first, would you?</em>",
      implicature: "Yes, you can leave your umbrella in the hallway.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_17_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Mind if I leave my umbrella here in the hallway?<br>B: <em>Shake it outside first, would you? And then maybe just keep it outside.</em>",
      implicature: "Yes, you can leave your umbrella in the hallway.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_17_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Want to go to the movies?<br>B: <em>I don't see anything good on.</em>",
      implicature: "I do not want to go to the movies.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_7848_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Want to go to the movies?<br>B: <em>I don't see anything good on. Then again, I didn't look super carefully. Besides, we always have fun when we go to the movies together.</em>",
      implicature: "I do not want to go to the movies.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_7848_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Are you having a good time?<br><em>S: I will definitely come skiing again here.</em>",
      implicature: "I am having a good time.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_17_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Are you having a good time?<br><em>S: I will definitely come skiing again here. If I want to torture myself again that is.</em>",
      implicature: "I am having a good time.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_17_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Leslie and Jane are chatting at a coffee shop. Leslie asks, "Who was that man that I saw you with last night?" Jane responds, "<em>The latte is unbelievable here.</em>"',
      implicature:
        "Jane does not want to discuss the topic that Leslie has raised.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Jane",
      identifier: "jhu_max_2_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Leslie and Jane are chatting at a coffee shop. Leslie asks, "Who was that man that I saw you with last night?" Jane responds, "<em>The latte is unbelievable here. And that man is a friend from high school who I hadn\'t seen in a long time.</em>"',
      implicature:
        "Jane does not want to discuss the topic that Leslie has raised.",
      "ask-for": "interpretation",
      "speaker-name": "Jane",
      hard_label: 0,
      identifier: "jhu_max_2_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How did the game go the other night?<br>B: <em>It was a disaster.</em>",
      implicature: "My team lost the game.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_13_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How did the game go the other night?<br>B: <em>It was a disaster. For the other team.</em>",
      implicature: "My team lost the game.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_13_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you be interested in a pool party?<br>B: <em>I never learned to swim.</em>",
      implicature: "I would not be interested in a pool party .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_32773_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you be interested in a pool party?<br>B: <em>I never learned to swim. Though I wouldn't mind chatting with people.</em>",
      implicature: "I would not be interested in a pool party .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_32773_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: So is everything good?<br>B: <em>I am kind of freaking out here.</em>",
      implicature: "No, everything is not good.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_41_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: So is everything good?<br>B: <em>I am kind of freaking out here. Things have never gone this well.</em>",
      implicature: "No, everything is not good.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_41_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does the neighborhood have a good reputation?<br>B: <em>The crime rate is low.</em>",
      implicature: "The neighborhood does have a good reputation.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_32508_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Does the neighborhood have a good reputation?<br>B: <em>The crime rate is low. That's only because the houses are either vacant or worthless though.</em>",
      implicature: "The neighborhood does have a good reputation.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_32508_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: It is too dark to see the sea.<br><em>S: We will drive back this way tomorrow morning.</em>",
      implicature: "They will see the sea tomorrow morning.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_7_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: It is too dark to see the sea.<br><em>S: We will drive back this way tomorrow morning. It might still be too foggy to see it properly though.</em>",
      implicature: "They will see the sea tomorrow morning.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_7_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you still as fun as you were when we were young?<br>B: <em>I've slowed down a bit since having kids.</em>",
      implicature: "I am not as fun as I was when we was young.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_9414_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you still as fun as you were when we were young?<br>B: <em>I've slowed down a bit since having kids. But that doesn't make me any less fun!</em>",
      implicature: "I am not as fun as I was when we was young.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_9414_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You should buy a good guidebook and study off it before the trip to Montreal.<br>B: <em>What about the library?</em>",
      implicature: "I will rent the guidebook from the library.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_7_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You should buy a good guidebook and study off it before the trip to Montreal.<br>B: <em>What about the library? Oh wait, the library closed permanently. I'll have to order it online then.</em>",
      implicature: "I will rent the guidebook from the library.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_7_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How does that sound?<br>B: <em>About as good as a crying baby.</em>",
      implicature: "It does not sound good.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_34_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: How does that sound?<br>B: <em>About as good as a crying baby. If that baby is crying of joy of course.</em>",
      implicature: "It does not sound good.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_34_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is your brother always late turning up?<br><em>T: There must be bad traffic today.</em>",
      implicature: "His brother is not always late.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_32_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is your brother always late turning up?<br><em>T: There must be bad traffic today. I mean, yes, he's usually late but not this late.</em>",
      implicature: "His brother is not always late.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_32_w_cancellation",
    },
    {
      scenario:
        '<strong>Dialogue:</strong><br>A: How much of what you\'ve got did you buy and how much did you steal?<br>B: <em>Buy? What do you mean "buy"?</em>',
      implicature: "All of this is stolen.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_47_wo_cancellation",
    },
    {
      scenario:
        '<strong>Dialogue:</strong><br>A: How much of what you\'ve got did you buy and how much did you steal?<br>B: <em>Buy? What do you mean "buy"? We agreed that I would steal most of it. I bought that last thing, the radio, to not seem too suspicious.</em>',
      implicature: "All of this is stolen.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_47_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: We forgot to buy anything for dessert.<br><em>S: It's past eight o'clock now.</em>",
      implicature: "They will not buy dessert.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_15_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: We forgot to buy anything for dessert.<br><em>S: It's past eight o'clock now. I know one shop that's open late though, let's go there.</em>",
      implicature: "They will not buy dessert.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_15_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Did you find it easy learning to ski?<br><em>T: I fell over lots of times.</em>",
      implicature: "I did not find learning to ski easy.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_19_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Did you find it easy learning to ski?<br><em>T: I fell over lots of times. Probably because my skiis were on backwards. Once I fixed that it was pretty easy.</em>",
      implicature: "I did not find learning to ski easy.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_19_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are they after you?<br>B: <em>My father must have sent them.</em>",
      implicature: "Yes, they are after me.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_53_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are they after you?<br>B: <em>My father must have sent them. They're not after me though, it's probably just you.</em>",
      implicature: "Yes, they are after me.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_53_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you continued doing sports?<br>B: <em>Work and family take up a lot of my time.</em>",
      implicature: "I have not continued doing sports.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_9490_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you continued doing sports?<br>B: <em>Work and family take up a lot of my time. But I make it a point to do volleyball with friends twice a week.</em>",
      implicature: "I have not continued doing sports.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_9490_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you interested in fishing this weekend?<br>B: <em>It's supposed to rain.</em>",
      implicature: "I am not interested in fishing this weekend.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_10832_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you interested in fishing this weekend?<br>B: <em>It's supposed to rain. No matter though, I'll just bring my rain gear.</em>",
      implicature: "I am not interested in fishing this weekend.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_10832_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Can the two of us sit here?<br><em>M: The children just went to find the toilet.</em>",
      implicature: "They cannot sit there.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "M",
      identifier: "ict_0_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Can the two of us sit here?<br><em>M: The children just went to find the toilet. But, actually, they're not coming back anytime soon. Please go ahead.</em>",
      implicature: "They cannot sit there.",
      "ask-for": "interpretation",
      "speaker-name": "M",
      hard_label: 0,
      identifier: "ict_0_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Can you see the hills in the darkness?<br><em>S: It's quite bright with the car lights.</em>",
      implicature: "I can see the hills outside.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_6_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Can you see the hills in the darkness?<br><em>S: It's quite bright with the car lights. But I still can't make them out.</em>",
      implicature: "I can see the hills outside.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_6_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you going to use the subway?<br>B: <em>I was planning on using the bus system.</em>",
      implicature: "I am not going to use the subway.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_7566_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you going to use the subway?<br>B: <em>I was planning on using the bus system. I'll probably have to take the subway to get to my bus stop though.</em>",
      implicature: "I am not going to use the subway.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_7566_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you going to get a place close to where you work?<br>B: <em>That would be my preference.</em>",
      implicature: "I am going to get a place close to where I work.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_12661_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you going to get a place close to where you work?<br>B: <em>That would be my preference. Though, based on what my partner's been saying, we might end up way further than that.</em>",
      implicature: "I am going to get a place close to where I work.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_12661_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: If you are staying late will you be sure to lock up the office before you leave?<br>B: <em>I hope I won't leave within an hour.</em>",
      implicature: "I can't be sure to lock the office.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_2_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: If you are staying late will you be sure to lock up the office before you leave?<br>B: <em>I hope I won't leave within an hour. But even if I do, I'll make sure to lock up.</em>",
      implicature: "I can't be sure to lock the office.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_2_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Why do you think she wouldn't go to her own grandmother?<br>B: <em>I don't see what this has to do with me.</em>",
      implicature: "I don't want to answer that question.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_36_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Why do you think she wouldn't go to her own grandmother?<br>B: <em>I don't see what this has to do with me. My guess is that she was either embarrassed or afraid.</em>",
      implicature: "I don't want to answer that question.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_36_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Is it cold in the other rooms?<br><em>S: We're going to need more sheets for those rooms.</em>",
      implicature: "It is cold in the other rooms.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_12_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Is it cold in the other rooms?<br><em>S: We're going to need more sheets for those rooms. Not because of the temperature though.</em>",
      implicature: "It is cold in the other rooms.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_12_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is your neighborhood an affordable place to buy in?<br>B: <em>It's not the cheapest place to live in.</em>",
      implicature: "B's neighborhood is not an affordable place to buy in.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_8747_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is your neighborhood an affordable place to buy in?<br>B: <em>It's not the cheapest place to live in. But with the salary you make you should be more than able to find a place.</em>",
      implicature: "B's neighborhood is not an affordable place to buy in.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_8747_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mike and Melissa are arguing about the state of secondary education in their state. Mike states: "Standardized test scores are up 42% in our schools." Melissa responds: "<em>And 47% of the kids didn\'t use the right pencil, 6% were chewing gum during the exam, and 32% yawned while completing their exams.</em>"',
      implicature:
        "Melissa thinks that statistical information is completely useless in this debate.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Melissa",
      identifier: "jhu_max_13_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mike and Melissa are arguing about the state of secondary education in their state. Mike states: "Standardized test scores are up 42% in our schools." Melissa responds: "<em>And 47% of the kids didn\'t use the right pencil, 6% were chewing gum during the exam, and 32% yawned while completing their exams. So while that 47% statistic does tell us something, it doesn\'t give the whole picture.</em>"',
      implicature:
        "Melissa thinks that statistical information is completely useless in this debate.",
      "ask-for": "interpretation",
      "speaker-name": "Melissa",
      hard_label: 0,
      identifier: "jhu_max_13_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> George and Cindy are about to enter their favorite shoe shop in the mall. George asks Cindy: "What would you like to buy?" Cindy responds: "<em>A pair of shoes.</em>"',
      implicature: "Cindy does not know what type of shoes she wants to buy.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Cindy",
      identifier: "jhu_max_8_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> George and Cindy are about to enter their favorite shoe shop in the mall. George asks Cindy: "What would you like to buy?" Cindy responds: "<em>A pair of shoes. To state the obvious. Something that would go well with my new dress, to be more specific.</em>"',
      implicature: "Cindy does not know what type of shoes she wants to buy.",
      "ask-for": "interpretation",
      "speaker-name": "Cindy",
      hard_label: 0,
      identifier: "jhu_max_8_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is it challenging?<br>B: <em>It has its moments.</em>",
      implicature: "It is challenging.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_7343_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is it challenging?<br>B: <em>It has its moments. Not challenging though. More like intellectually stimulating.</em>",
      implicature: "It is challenging.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_7343_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Shall we have the chicken we bought?<br><em>T: The pasta would be ready much quicker.</em>",
      implicature: "They will have the pasta instead of the chicken.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_14_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Shall we have the chicken we bought?<br><em>T: The pasta would be ready much quicker. Chicken does sound nice though. Let's go with that.</em>",
      implicature: "They will have the pasta instead of the chicken.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_14_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: The former boxing champion is going to try again tonight. He is coming out of his third retirement.<br>B: <em>Can people still box at this age?</em>",
      implicature: "I don't think he will win.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_18_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: The former boxing champion is going to try again tonight. He is coming out of his third retirement.<br>B: <em>Can people still box at this age? Because I was looking at his training routine and he seems more ready than ever.</em>",
      implicature: "I don't think he will win.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_18_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Excuse me, I don't understand why flight 213 has been delayed. The weather seems fine now.<br>B: <em>I am afraid that New York got 3 times more snow than it did here.</em>",
      implicature:
        "The plane cannot land in New York because of the snowstorm.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_14_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Excuse me, I don't understand why flight 213 has been delayed. The weather seems fine now.<br>B: <em>I am afraid that New York got 3 times more snow than it did here. Though, if I'm being frank, the mechanical issues are the main reason for the delay.</em>",
      implicature:
        "The plane cannot land in New York because of the snowstorm.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_14_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lars and Katy are discussing their CEO. Lars says: "People regard our CEO Mr. Smith as a real intellectual." Katy responds: "<em>Sure, he is regarded as an intellectual by kindergarteners.</em>"',
      implicature: "Katy doubts that Mr. Smith is a smart individual.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Katy",
      identifier: "jhu_max_16_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lars and Katy are discussing their CEO. Lars says: "People regard our CEO Mr. Smith as a real intellectual." Katy responds: "<em>Sure, he is regarded as an intellectual by kindergarteners. And by academics. And by everyone in between!</em>"',
      implicature: "Katy doubts that Mr. Smith is a smart individual.",
      "ask-for": "interpretation",
      "speaker-name": "Katy",
      hard_label: 0,
      identifier: "jhu_max_16_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you help me to go over these questions again?<br>B: <em>How about tomorrow?</em>",
      implicature: "I am free to help you with these questions tomorrow.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_10_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you help me to go over these questions again?<br>B: <em>How about tomorrow? Actually, never mind, I just remembered I am away tomorrow. What about next week?</em>",
      implicature: "I am free to help you with these questions tomorrow.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_10_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Samantha is talking with her dad Paul about her fiance. Samantha notes: "John is an innocent person." Paul replies: "<em>Undoubtedly, as innocent as a saint.</em>"',
      implicature:
        "Paul thinks that Samantha has an incorrect view of her fiance.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Paul",
      identifier: "jhu_max_17_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Samantha is talking with her dad Paul about her fiance. Samantha notes: "John is an innocent person." Paul replies: "<em>Undoubtedly, as innocent as a saint. And this is the first guy you\'ve been with where I really mean that.</em>"',
      implicature:
        "Paul thinks that Samantha has an incorrect view of her fiance.",
      "ask-for": "interpretation",
      "speaker-name": "Paul",
      hard_label: 0,
      identifier: "jhu_max_17_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I can't seem to find my photo album.<br>B: <em>I think Mary is looking for it in the living room.</em>",
      implicature: "The photo album is likely in the living room.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_25_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I can't seem to find my photo album.<br>B: <em>I think Mary is looking for it in the living room. I'm not entirely sure why though. I know for a fact that it's upstairs.</em>",
      implicature: "The photo album is likely in the living room.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_25_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: There are a few cars driving this way. Will they get all the way to where we are?<br><em>S: They are turning at the traffic lights.</em>",
      implicature: "The cars will not continue coming their way.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_31_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: There are a few cars driving this way. Will they get all the way to where we are?<br><em>S: They are turning at the traffic lights. But they'll just circle back this way when they realize it's a dead end.</em>",
      implicature: "The cars will not continue coming their way.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_31_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did this happen by accident or was it done deliberately?<br>B: <em>This was definitely not an accident.</em>",
      implicature: "This was done deliberately.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_43_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did this happen by accident or was it done deliberately?<br>B: <em>This was definitely not an accident. It couldn't have been done deliberately either though. I have no idea how this happened.</em>",
      implicature: "This was done deliberately.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_43_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Shall we go out for dinner tonight?<br><em>S: I'm tired after the train journey.</em>",
      implicature: "They will not go out for dinner.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_13_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Shall we go out for dinner tonight?<br><em>S: I'm tired after the train journey. But I am also quite hungry and I did really like the look of that pizza place.</em>",
      implicature: "They will not go out for dinner.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_13_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you guys here to look at the refrigerator?<br>B: <em>We're here to look at the TV.</em>",
      implicature: "No, we are not here to look at the refrigerator.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_55_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you guys here to look at the refrigerator?<br>B: <em>We're here to look at the TV. And the refrigerator as well, sorry.</em>",
      implicature: "No, we are not here to look at the refrigerator.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_55_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Let me help you with those packages?<br>B: <em>Thanks, but it is only three quarters of a mile to the block.</em>",
      implicature: "I don't want you to help me with those packages.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_5_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Let me help you with those packages?<br>B: <em>Thanks, but it is only three quarters of a mile to the block. If you insist though, I will not say no.</em>",
      implicature: "I don't want you to help me with those packages.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_5_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you still waiting for Bob?<br>B: <em>I don't know why I bother.</em>",
      implicature: "Yes, I am still waiting for Bob.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_22_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Are you still waiting for Bob?<br>B: <em>I don't know why I bother. I mean, bother inviting him over. I stopped waiting for him an hour ago.</em>",
      implicature: "Yes, I am still waiting for Bob.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_22_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: So, how did it go?<br>B: <em>Her reaction was much better than I expected.</em>",
      implicature: "It went well.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_54_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: So, how did it go?<br>B: <em>Her reaction was much better than I expected. That was only her initial reaction though. She freaked out afterwards.</em>",
      implicature: "It went well.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_54_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Alice is spending a lot of time in the library lately.<br>B: <em>She has got a paper to do and two final exams next week.</em>",
      implicature: "Alice has been studying a lot in the library.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_12_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Alice is spending a lot of time in the library lately.<br>B: <em>She has got a paper to do and two final exams next week. Which makes the fact that she's been procrastinating in the library all the more worrisome.</em>",
      implicature: "Alice has been studying a lot in the library.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_12_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do I have to pay?<br>B: <em>Either you pay or you're not coming in...</em>",
      implicature: "Yes, you have to pay.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_52_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do I have to pay?<br>B: <em>Either you pay or you're not coming in... is what I would normally say. But since it's free today, you don't have to pay.</em>",
      implicature: "Yes, you have to pay.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_52_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Berta often forgets to return money that she borrows from her friends. One day Berta asks her friend Freddie for $500. Freddie responds: "<em>Of course, but only when I fly to space.</em>"',
      implicature: "Freddie will never give Berta any money.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Freddie",
      identifier: "jhu_max_15_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Berta often forgets to return money that she borrows from her friends. One day Berta asks her friend Freddie for $500. Freddie responds: "<em>Of course, but only when I fly to space. Just messing with you. I\'ll obviously lend you the money.</em>"',
      implicature: "Freddie will never give Berta any money.",
      "ask-for": "interpretation",
      "speaker-name": "Freddie",
      hard_label: 0,
      identifier: "jhu_max_15_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you like living in New Jersey?<br>B: <em>It's a little loud.</em>",
      implicature: "I do not like living in New Jersey .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_16495_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you like living in New Jersey?<br>B: <em>It's a little loud. Most couples wouldn't like that, but we find it makes things less mundane.</em>",
      implicature: "I do not like living in New Jersey .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_16495_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I spent the whole weekend totally absorbed in this biography.<br>B: <em>Wow, and you still have not finished reading it?</em>",
      implicature: "The biography must be very long.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_21_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: I spent the whole weekend totally absorbed in this biography.<br>B: <em>Wow, and you still have not finished reading it? You must be one slow reader.</em>",
      implicature: "The biography must be very long.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_21_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can I help with anything?<br>B: <em>I think Jordan was looking for someone to hold the ladder.</em>",
      implicature: "Yes, you can help by holding the ladder for Jordan.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_39_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Can I help with anything?<br>B: <em>I think Jordan was looking for someone to hold the ladder. Though he must have found someone else by now. Maybe you can hold this thing down for me.</em>",
      implicature: "Yes, you can help by holding the ladder for Jordan.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_39_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you have a good day at work today?<br>B: <em>It was tiring.</em>",
      implicature: "I did not have a good day at work today.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_28772_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Did you have a good day at work today?<br>B: <em>It was tiring. Though my presentation went really well so all and all it wasn't bad!</em>",
      implicature: "I did not have a good day at work today.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_28772_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Are you going to lead the way?<br><em>S: You can give me the map.</em>",
      implicature: "I will lead the way.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_28_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Are you going to lead the way?<br><em>S: You can give me the map. I'll use it to double check our path as you lead us through.</em>",
      implicature: "I will lead the way.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_28_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like some milk in your coffee?<br>B: <em>Oh, I find coffee way too bitter without milk.</em>",
      implicature: "Yes, I would like some milk in my coffee.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_23_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like some milk in your coffee?<br>B: <em>Oh, I find coffee way too bitter without milk. On the other hand, I have been trying to cut down on dairy. Let's try without milk.</em>",
      implicature: "Yes, I would like some milk in my coffee.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_23_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is there a bus I can take to the station?<br>B: <em>I wouldn't count on it.</em>",
      implicature:
        "There is a bus that goes to the station but it's unreliable.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_27_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is there a bus I can take to the station?<br>B: <em>I wouldn't count on it. It's usually quite reliable, but given the transit strike I'm not sure which buses will be running.</em>",
      implicature:
        "There is a bus that goes to the station but it's unreliable.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_27_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: We can spend all day skiing today.<br><em>S: We haven't made your brother's present yet.</em>",
      implicature: "They will make the gift before going to ski.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_20_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: We can spend all day skiing today.<br><em>S: We haven't made your brother's present yet. But let's do that later. Skiing first!</em>",
      implicature: "They will make the gift before going to ski.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_20_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you tried tasting the apple pie?<br>B: <em>It was out of this world.</em>",
      implicature: "The apple pie was delicious.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_1_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Have you tried tasting the apple pie?<br>B: <em>It was out of this world. In the worst possible way.</em>",
      implicature: "The apple pie was delicious.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_1_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Did you buy the milk this morning?<br><em>S: I went out earlier today.</em>",
      implicature: "I bought the milk this morning.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "S",
      identifier: "ict_24_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>T: Did you buy the milk this morning?<br><em>S: I went out earlier today. Didn't buy the milk though. Sorry.</em>",
      implicature: "I bought the milk this morning.",
      "ask-for": "interpretation",
      "speaker-name": "S",
      hard_label: 0,
      identifier: "ict_24_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is budget a major consideration?<br>B: <em>It's important.</em>",
      implicature: "Budget is a major consideration .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_6975_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is budget a major consideration?<br>B: <em>It's important. Though I wouldn't say it's a major consideration.</em>",
      implicature: "Budget is a major consideration .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_6975_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go with us for coffee a little later?<br>B: <em>I can't drink coffee this late in the day.</em>",
      implicature: "I will not join you for coffee.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_16_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Would you like to go with us for coffee a little later?<br>B: <em>I can't drink coffee this late in the day. Though I suppose I could order a decaf.</em>",
      implicature: "I will not join you for coffee.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_16_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is your foot hurting from earlier?<br><em>T: I only slipped a little on the snow.</em>",
      implicature: "My foot is not hurting from earlier.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_18_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Is your foot hurting from earlier?<br><em>T: I only slipped a little on the snow. And yet it still hurts a lot.</em>",
      implicature: "My foot is not hurting from earlier.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_18_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lenny comes to the kitchen and asks his wife, Marcie: "What will we have for breakfast?" Marcie responds: "<em>A hard-boiled egg cooked in hot water and toast that is toasted evenly on both sides.</em>"',
      implicature: "Marcie is annoyed with Lenny's question.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Marcie",
      identifier: "jhu_max_11_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Lenny comes to the kitchen and asks his wife, Marcie: "What will we have for breakfast?" Marcie responds: "<em>A hard-boiled egg cooked in hot water and toast that is toasted evenly on both sides. There I go again with my rambling, sorry dear. Didn\'t mean anything by it. Eggs and toast please.</em>"',
      implicature: "Marcie is annoyed with Lenny's question.",
      "ask-for": "interpretation",
      "speaker-name": "Marcie",
      hard_label: 0,
      identifier: "jhu_max_11_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mary and Ken are having breakfast. Ken asks Mary: "How would you like your tea, dear?" Mary responds, "<em>In a cup.</em>"',
      implicature: "Mary is irritated with Ken.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Mary",
      identifier: "jhu_max_7_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mary and Ken are having breakfast. Ken asks Mary: "How would you like your tea, dear?" Mary responds, "<em>In a cup. Haha, I\'m just teasing you dear. With milk like always, please.</em>"',
      implicature: "Mary is irritated with Ken.",
      "ask-for": "interpretation",
      "speaker-name": "Mary",
      hard_label: 0,
      identifier: "jhu_max_7_w_cancellation",
    },
  ],
  [
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Could you hear what the police said?<br><em>T: There were lots of trains going past.</em>",
      implicature: "I was not able to hear what the police said.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_4_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Could you hear what the police said?<br><em>T: There were lots of trains going past. But because they were using a loudspeaker, I was able to hear them clearly.</em>",
      implicature: "I was not able to hear what the police said.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_4_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You have it, then?<br>B: <em>I had to make a few calls to get it.</em>",
      implicature: "Yes, I have it.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_51_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: You have it, then?<br>B: <em>I had to make a few calls to get it. Which makes it all the more frustrating that I lost it so quickly.</em>",
      implicature: "Yes, I have it.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_51_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: What did you think of my presentation?<br>B: <em>Do you really want to know?</em>",
      implicature: "I did not like your presentation.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_38_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: What did you think of my presentation?<br>B: <em>Do you really want to know? It was the best presentation I've ever seen. There, I said it, you're better than me.</em>",
      implicature: "I did not like your presentation.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_38_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Did you learn to ski here?<br><em>T: Our house was only an hour away.</em>",
      implicature: "I learned to ski here.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_9_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Did you learn to ski here?<br><em>T: Our house was only an hour away. But I actually learned to ski somewhere else.</em>",
      implicature: "I learned to ski here.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_9_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Shall we hide the cake till later?<br><em>T: I already told him not to buy one.</em>",
      implicature: "They will not hide the cake.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "T",
      identifier: "ict_33_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>S: Shall we hide the cake till later?<br><em>T: I already told him not to buy one. Which is why I'm a bit annoyed that we have to hide it now.</em>",
      implicature: "They will not hide the cake.",
      "ask-for": "interpretation",
      "speaker-name": "T",
      hard_label: 0,
      identifier: "ict_33_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you want to go hiking?<br>B: <em>I didn't bring my hiking boots.</em>",
      implicature: "I do not want to go hiking.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_15766_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Do you want to go hiking?<br>B: <em>I didn't bring my hiking boots. Let's go anyway though. These shoes will be fine.</em>",
      implicature: "I do not want to go hiking.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_15766_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is this where I get traveling papers?<br>B: <em>What do you think? Does this look like a candy stand?</em>",
      implicature: "Yes, this is where you get traveling papers.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "george_and_mamidi_35_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is this where I get traveling papers?<br>B: <em>What do you think? Does this look like a candy stand? I'm sorry, that was rude, I'm having a bit of a day. In fact, we don't do traveling papers here you have to go to the main office down the hall.</em>",
      implicature: "Yes, this is where you get traveling papers.",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "george_and_mamidi_35_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Rosy notes to her friend Dan: "Those strangers at the other end of the subway car are nice." Dan replies: "<em>Yeah, I bet they have only sweet dreams, eat organic food, do yoga every morning, plant trees, feed homeless, and read a lot of good books.</em>"',
      implicature:
        "Dan thinks that Rosy has no reason to believe that the strangers are nice.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Dan",
      identifier: "jhu_max_14_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Rosy notes to her friend Dan: "Those strangers at the other end of the subway car are nice." Dan replies: "<em>Yeah, I bet they have only sweet dreams, eat organic food, do yoga every morning, plant trees, feed homeless, and read a lot of good books. Sorry, I\'m going on a rant for no reason. They do seem nice.</em>"',
      implicature:
        "Dan thinks that Rosy has no reason to believe that the strangers are nice.",
      "ask-for": "interpretation",
      "speaker-name": "Dan",
      hard_label: 0,
      identifier: "jhu_max_14_w_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is it too expensive?<br>B: <em>I wouldn't say **too**.</em>",
      implicature: "It is not too expensive .",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "B",
      identifier: "indirect_questions_10933_wo_cancellation",
    },
    {
      scenario:
        "<strong>Dialogue:</strong><br>A: Is it too expensive?<br>B: <em>I wouldn't say **too**. I would say **way too**.</em>",
      implicature: "It is not too expensive .",
      "ask-for": "interpretation",
      "speaker-name": "B",
      hard_label: 0,
      identifier: "indirect_questions_10933_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Bob is having a lunch meeting with his boss, Mr. James. Mr. James asks Bob: "Did you like the presentation that I gave at the board meeting yesterday?" Bob responds: "<em>I cannot wait for our trip to Japan next week.</em>"',
      implicature:
        "Bob disliked the talk that his boss gave but does not want to criticize his boss.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Bob",
      identifier: "jhu_max_0_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Bob is having a lunch meeting with his boss, Mr. James. Mr. James asks Bob: "Did you like the presentation that I gave at the board meeting yesterday?" Bob responds: "<em>I cannot wait for our trip to Japan next week. Sorry, I\'m excited. But yes, I thought the presentation was very clear.</em>"',
      implicature:
        "Bob disliked the talk that his boss gave but does not want to criticize his boss.",
      "ask-for": "interpretation",
      "speaker-name": "Bob",
      hard_label: 0,
      identifier: "jhu_max_0_w_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mark, who is a newlywed, is talking to his mom over the phone. His mom asks: "Did Julie cook your dinner last night?" Mark responds: "<em>Well, she placed a number of edible substances into a pot and then heated them until various chemical reactions took place.</em>"',
      implicature: "The meal Mark's wife cooked turned out mediocre.",
      "ask-for": "interpretation",
      hard_label: 1,
      "speaker-name": "Mark",
      identifier: "jhu_max_10_wo_cancellation",
    },
    {
      scenario:
        '<strong>Scenario:</strong> Mark, who is a newlywed, is talking to his mom over the phone. His mom asks: "Did Julie cook your dinner last night?" Mark responds: "<em>Well, she placed a number of edible substances into a pot and then heated them until various chemical reactions took place. And, surprisingly, it turned out really well.</em>"',
      implicature: "The meal Mark's wife cooked turned out mediocre.",
      "ask-for": "interpretation",
      "speaker-name": "Mark",
      hard_label: 0,
      identifier: "jhu_max_10_w_cancellation",
    },
  ],
];
