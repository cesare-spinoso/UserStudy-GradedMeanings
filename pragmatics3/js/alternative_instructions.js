var alternative_instructions = "<strong>Alternative utterance</strong>: In addition, in these scenarios, you will be shown an <strong>alternative utterance:</strong> something the character <em>could have said</em> but <em>intentionally chose not to</em>. You should consider this alternative utterance when coming up with your interpretation (i.e., point distribution) for the character's statement.";

function alternative_utterance_html(speaker_name, alternative_utterance) {
    return `In addition, assume that ${speaker_name} <em>intentionally chose not to say</em> \"<span style="color: #318500;">${alternative_utterance}</span>\"`;
}