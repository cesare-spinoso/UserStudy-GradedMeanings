var alternative_instructions = "<strong>Alternative statement</strong>: In addition to what the character <em>did say<em>, you will also be shown something that the character <em>could have said but chose not to<em>. You should consider this alternative statement when coming up with an interpretation (i.e., a point distribution) for the character's statement.";

function alternative_utterance_html(speaker_name, alternative_utterance) {
    return `In addition, assume that ${speaker_name} <em>could have but chose not to say</em> \"<span style="color: #318500;">${alternative_utterance}</span>\"`;
}