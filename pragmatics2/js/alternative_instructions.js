var alternative_instructions = "<strong>Alternative utterance</strong>: In addition, in these scenarios, you will be shown an alternative utterance, that is something the character <em>could have said</em> but <em>chose not to</em>. You should consider this alternative utterance when coming up with your interpretation (i.e., point distribution) for the character's statement.";

function alternative_utterance_html(speaker_name, alternative_utterance) {
    return `In addition, assume that ${speaker_name} <em>could have but chose not to say</em> \"<span style="color: #318500;">${alternative_utterance}</span>\"`;
}