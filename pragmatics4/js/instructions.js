function start_instructions_html(is_alt) {
    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how utterances (what people say) are interpreted in conversations. In this study, you will be shown scenarios in which a character says something. You will then <strong>use a continuous slider</strong> to indicate where along the scale you believe the speaker's intended meaning lies. The slider ranges from 0 to 100 (increments of 1); the two ends correspond to the two provided interpretations for each scenario. You will also provide a short rationale for your judgment on the main study scenarios.
    </p>`;
    common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see one <strong>example scenario</strong> (no response needed). Then you'll complete two <strong>warm‑up scenarios</strong> using the slider (no rationale needed). After that you'll rate seven <strong>study scenarios</strong>, each time moving the slider to the position that best reflects the speaker's intended meaning and providing a brief rationale for the main scenarios. Expected duration: 10-15 minutes.
    </p>`;
    return common_instructions_html
}

function warmup_instructions_html(is_alt) {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example scenario, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, use the slider to indicate your interpretation between the two provided options. No rationales are needed for warm‑ups.</p>
        `;
}

// alternative_utterance_html removed: alternative now shown via other character utterance + cancellation.