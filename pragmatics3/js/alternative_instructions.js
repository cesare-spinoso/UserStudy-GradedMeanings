function alternative_utterance_form(speaker_name, original_utterance, alternative_utterance, stimuli_type) {
    var rationale;

    if (stimuli_type === "main") {
        rationale = `
                <div class="form-group" style="margin-bottom: 30px;">
            <h4 style="color: #800080; margin-bottom: 15px;">Your Rationale:</h4>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                <textarea class="form-control" id="rationale" rows="3"
                    placeholder="Explain your rationale: why did you assign the points as you did?"
                    required></textarea>
            </div>
        </div>
        `;
    } else {
        rationale = "";
    }

    const finalHtmlString = `
    <div class="panel-body" style="padding: 20px;">

        <div class="form-group" style="margin-bottom: 30px;">
            <p><strong>Alternative Utterance:</strong> Now, in addition to what ${speaker_name} did say ("<span
                    style="color: #318500;">${original_utterance}</span>"), assume that ${speaker_name} could have said
                "<span style="color: #318500;">${alternative_utterance}</span>" but
                <em>intentionally chose not to</em>.
            </p>
        </div>

        <div class="form-group" style="margin-bottom: 30px;">
            <p>Re-distribute 100 points across the interpretations based on how likely you find each
                interpretation given this new information about the alternative utterance.</p>
            <ul style="list-style-type: none; padding-left: 0;" class="interpretation-list">
                ${interpretationListHtml}
            </ul>
            <p><strong>Total:</strong> <span class="point-total">0</span> / 100</p>
        </div>

        ${rationale}

        <div style="text-align: center; margin-top: 30px; margin-bottom: 20px;">
            <button class="btn btn-lg btn-primary continueButton" onclick="_s.button()" style="background-color: #800080;
                border-color: #800080;
                padding: 15px 40px;
                font-size: 18px;">
                Continue
            </button>
            <div class="err" style="color: #dc3545; margin-top: 10px;">
                Please make sure your total is 100 and the rationale is filled out.
            </div>
        </div>
    </div>
    `;

    return finalHtmlString;
}