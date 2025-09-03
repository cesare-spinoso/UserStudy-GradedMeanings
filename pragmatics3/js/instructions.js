function start_instructions_html(is_alt) {
    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how people interpret everyday utterances. In each scenario a character says something about an underlying quality (e.g., size, temperature, performance quality, emotional intensity). You will read the scenario and then distribute <strong>100 points</strong> across two options (bins) that represent different interpretations of the utterance. Allocate points to show how strongly the speaker's belief favors each option. You will also provide a short <strong>rationale</strong> explaining your judgment for the main study scenarios.
    </p>`;
    if (!is_alt) {
        common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see one <strong>example scenario</strong> (no response needed). Then you'll complete two <strong>warm‑up scenarios</strong> allocating points (no rationale needed). After that you'll allocate points for seven <strong>study scenarios</strong>, each time distributing 100 points across the two options and providing a brief rationale for your choice. Expected duration: 15–25 minutes.
    </p>`;
    } else {
        common_instructions_html += `
        <p>
            <strong>Alternative utterance</strong>: In some conditions you will also see an <strong>alternative utterance</strong>—something the character <em>could have said</em> but intentionally did not. Consider this when allocating points (it may signal a weaker or stronger intended degree).
        </p>
        <p>
            <strong>Study structure:</strong> You'll see one <strong>example scenario</strong> (with illustrative allocation), then two <strong>warm‑ups</strong>, then seven <strong>study scenarios</strong>. Provide a rationale only for the main scenarios. Duration: 15–25 minutes.
        </p>`;
    }
    return common_instructions_html
}

function warmup_instructions_html(is_alt) {
    if (!is_alt) {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>You will complete two scenarios. For each, allocate 100 points across the two options to indicate how strongly the speaker's intended meaning favors each. No rationales are required for warm‑ups.</p>
        `;
    } else {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example (and the alternative utterance), we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, allocate 100 points across the two options to indicate the speaker's degree. No rationales for warm‑ups.</p>
        `;
    }
}

// alternative_utterance_html removed: alternative now shown via other character utterance + cancellation.