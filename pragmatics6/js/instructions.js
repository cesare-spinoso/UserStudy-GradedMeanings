function start_instructions_html() {
  return `
    <p>
      <strong>Study description:</strong> This study is about how people communicate when referring to
      objects. You will see displays of <strong>three colored shapes</strong> and complete two types of tasks:
    </p>
    <ul>
      <li>
        <strong>Selection:</strong> You will be told what a speaker said (e.g., <em>"blue"</em>) and you
        must click on the object you think the speaker was referring to.
      </li>
      <li>
        <strong>Production:</strong> One object will be highlighted. You must choose a word or phrase
        to refer to it, then rate how certain you are about your choice on a 1–7 scale.
      </li>
    </ul>
    <p>
      The two task types are <strong>mixed together</strong> in random order throughout the study.
    </p>
    <p>
      <strong>Study structure:</strong> First you will see <strong>two example trials</strong>
      (one of each type) with explanations. Then you will complete <strong>two warm-up trials</strong>
      for practice. After that you will complete the <strong>main study trials</strong>.
    </p>
    <p>Expected duration: 10–15 minutes.</p>`;
}

function warmup_instructions_html() {
  return `
    <p id="instruct-text" class="left">
      Now that you have seen the two example types, let's try some <strong>warm-up trials</strong>.
    </p>
    <p>
      For <strong>selection</strong> trials, click the object the speaker is referring to, then press Continue.<br>
      For <strong>production</strong> trials, click a word to describe the highlighted object, then rate
      your certainty and press Continue.
    </p>`;
}
