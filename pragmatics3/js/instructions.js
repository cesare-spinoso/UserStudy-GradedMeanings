function start_instructions_html(is_alt) {
    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how utterances (what people say) are interpreted in conversations. In this study, you will be shown scenarios in which a character says something. You will then <strong>evaluate the meaning</strong> of that utterance by distributing 100 points across two possible interpretations based on how likely you believe each one of them to be. You will also justify your point distribution.
    </p>`;
    common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see one <strong>example scenario</strong> (no response needed). Then you'll complete two <strong>warm‑up scenarios</strong> allocating points (no rationale needed). After that you'll allocate points for seven <strong>study scenarios</strong>, each time distributing 100 points across the two options and providing a brief rationale for your choice. Expected duration: 10-15 minutes.
    </p>`;
    return common_instructions_html
}

function warmup_instructions_html(is_alt) {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example scenario, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, allocate 100 points across the two meaning interpretations. No rationales are needed for warm‑ups.</p>
        `;
}

// alternative_utterance_html removed: alternative now shown via other character utterance + cancellation.