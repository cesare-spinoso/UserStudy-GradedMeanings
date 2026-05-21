function start_instructions_html(condition) {
    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how <strong>utterances</strong> (what people say) are interpreted in conversations. In this study, you will be shown scenarios where a character says an utterance (sometimes choosing between two). You will then <strong>use a slider</strong> to rate the <strong>likelihood</strong> of a statement related to the speaker's utterance. You will also have the option to provide a rationale for your rating.
    </p>`;
    common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see two <strong>example scenarios</strong>. Then you'll complete two <strong>warm‑up scenarios</strong> using the slider. After that you'll rate <strong>${exp.stimuli.length} study scenarios</strong>, each time moving the slider to the position that best reflects how likely you believe the statement is.
    </p>
    <p>
    Expected duration: 10-15 minutes.
    </p>`;
    return common_instructions_html
}

function warmup_instructions_html(condition) {
    return `
            <p id="instruct-text" class="left">Now that you've seen an example scenario, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, use the slider to indicate how likely you believe the statements are. No rationales are needed for warm‑ups.</p>
        `;
}