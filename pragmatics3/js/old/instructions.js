function start_instructions_html(is_alt) {
    common_instructions_html = `
    <p>
    <strong>Study description:</strong> We're interested in how people interpret everyday utterances. In each scenario a character says something about an underlying quality (e.g., size, temperature, performance quality, emotional intensity). You will read the scenario and then use a <strong>continuous slider</strong> to indicate where you think the speaker's belief lies along the scale — the left and right ends of the slider will represent extreme degrees. You will also provide a short <strong>rationale</strong> explaining your judgment for the main study scenarios.
    </p>`;
    if (!is_alt) {
        common_instructions_html += `
    <p>
    <strong>Study structure:</strong> First you'll see one <strong>example scenario</strong> (no response needed). Then you'll complete two <strong>warm‑up scenarios</strong> using the slider (no rationale needed). After that you'll rate seven <strong>study scenarios</strong>, each time moving the slider to the position that best reflects the speaker's intended degree and providing a brief rationale. Expected duration: 15–25 minutes.
    </p>`;
    } else {
        common_instructions_html += `
        <p>
            <strong>Alternative utterance</strong>: In some conditions you will also see an <strong>alternative utterance</strong>—something the character <em>could have said</em> but intentionally did not. Consider this when positioning the slider (it may signal a weaker or stronger intended degree).
        </p>
        <p>
            <strong>Study structure:</strong> You'll see one <strong>example scenario</strong> (with illustrative slider placement), then two <strong>warm‑ups</strong>, then seven <strong>study scenarios</strong>. Provide a rationale only for the main scenarios. Duration: 15–25 minutes.
        </p>`;
    }
    return common_instructions_html
}

function warmup_instructions_html(is_alt) {
    if (!is_alt) {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example, we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>You will complete two scenarios. For each, move the slider to the position that best reflects the speaker's intended degree. No rationales are required for warm‑ups.</p>
        `;
    } else {
        return `
            <p id="instruct-text" class="left">Now that you've seen an example (and the alternative utterance), we'll begin with the <strong>warm‑up scenarios</strong>.</p>
            <p>For each warm‑up, move the slider to indicate the degree you believe the speaker intended. No rationales for warm‑ups.</p>
        `;
    }
}

// alternative_utterance_html removed: alternative now shown via other character utterance + cancellation.