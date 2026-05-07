function start_instructions_html(condition) {
    const conditionLabels = {
        0: "where the character says an utterance",
        1: "where the character says an utterance",
        2: "where the character chooses between two utterances",
        3: "where the character chooses between two utterances"
    };
    const conditionLabel = conditionLabels[condition] || "";

    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how utterances (what people say) are interpreted in conversations. In this study, you will be shown scenarios ${conditionLabel}. You will then <strong>use a continuous slider</strong> to indicate where along the scale you believe the speaker's intended meaning lies. The slider ranges from 0 to 100; the two ends correspond to the two provided interpretations for each scenario. Rationales are optional on the main study scenarios.
    </p>`;
    common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see one <strong>example scenario</strong> (no response needed). Then you'll complete two <strong>warm‑up scenarios</strong> using the slider (no rationale needed). After that you'll rate seven <strong>study scenarios</strong>, each time moving the slider to the position that best reflects the speaker's intended meaning. You may also provide an optional brief rationale for each main scenario. Expected duration: 10-15 minutes.
    </p>`;
    return common_instructions_html
}

function warmup_instructions_html(condition) {
    return `
            <p id="instruct-text" class="left">Now that you've seen an example scenario, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, use the slider to indicate your interpretation between the two provided options. No rationales are needed for warm‑ups.</p>
        `;
}