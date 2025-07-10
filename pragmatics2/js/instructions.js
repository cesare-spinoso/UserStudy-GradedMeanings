function start_instructions_html(is_alt) {
    common_instructions_html = `
    <p>
        <strong>Study description:</strong> We're interested in how <strong>utterances</strong>
        (what people say)
        are interpreted in conversations between two or more people.
        In this study, you will be shown scenarios in which a character says something. You will
        then <strong>evaluate the meaning</strong> of that utterance
        by <strong>distributing</strong> 100 points across <span id="num-interpretations"></span>
        possible
        meaning
        interpretations based on how likely <em>you believe</em> each one of them to be. You
        will also <strong>justify</strong> your point distribution.
    </p>`;
    if (!is_alt) {
        common_instructions_html += `
    <p>
        <strong>Study structure:</strong> You will first be presented with one
        <strong>example scenario</strong> where you will be shown an example of a scenario.
        After that, you will be given two <strong>warm-up examples</strong> to
        help you
        get familiar with the task. You will then be asked to annotate seven
        <strong>study scenarios</strong>. We expect the annotation to take between 15 to
        25 minutes.
    </p>`;
    } else {
        common_instructions_html += `
        <p>
            <strong>Alternative utterance</strong>: In addition, in these scenarios, you will be shown an <strong>alternative utterance:</strong> something the character <em>could have said</em> but <em>intentionally chose not to</em>. You should consider this alternative utterance when coming up with your interpretation (i.e., point distribution) for the character's statement.
        </p>
        <p>
            <strong>Study structure:</strong> You will first be presented with one
            <strong>example scenario</strong> where you will be shown an example of a scenario as well as sensible and nonsensical annotations.
            After that, you will be given two <strong>warm-up examples</strong> to
            help you
            get familiar with the task. You will then be asked to annotate seven
            <strong>study scenarios</strong>. We expect the annotation to take between 15 to
            25 minutes.
        </p>`;
    }
    return common_instructions_html
}

function warmup_instructions_html(is_alt) {
    if (!is_alt) {
        return `
            <p id="instruct-text" class="left">
                Now that you have seen an example of what an annotation will look like, we will begin with the
                <strong>warm-up
                    scenarios</strong>.
            </p>
            <p>You will be presented with
                two scenarios and
                asked to provide meaning interpretations by assigning points based on how likely you believe each
                interpretation to be. To save you time, you will not need to provide rationales for these warm-up examples.
            </p>
        `;
    } else {
        return `
            <p id="instruct-text" class="left">
                Now that you have seen an example of what an annotation will look like, as well as examples of point
                annotations
                which we deem sensible/nonsensical, we will begin with the
                <strong>warm-up
                    scenarios</strong>.
            </p>
            <p>You will be presented with
                two scenarios and
                asked to provide meaning interpretations by assigning points based on how likely you believe each
                interpretation to be. To save you time, you will not need to provide rationales for these warm-up examples.
            </p>
        `;
    }
}

function alternative_utterance_html(speaker_name, alternative_utterance) {
    return `In addition, assume that ${speaker_name} <em>intentionally chose not to say</em> \"<span style="color: #318500;">${alternative_utterance}</span>\"`;
}