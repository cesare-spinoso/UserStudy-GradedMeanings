function create_feedback(interpretationKeys, exampleAllocations) {
    // 1. Derive the list of interpretations.
    if (!exampleAllocations || exampleAllocations.length === 0) {
        return '<p>No examples to display.</p>';
    }
    const interpretations = interpretationKeys.map((text, index) => ({ id: index + 1, text: text }));

    // 2. Process and categorize the raw data.
    const examplesData = exampleAllocations.map((ex, index) => ({
        name: index + 1,
        type: ex.type,
        allocations: ex.allocations,
        rationale: ex.rationale
    }));

    const sensibleExamples = examplesData.filter(ex => ex.type === 'sensible');
    const nonsensicalExamples = examplesData.filter(ex => ex.type === 'nonsensical');

    // --- Helper function to build a table body ---
    const buildTableBody = (examples) => {
        let body = '';
        interpretations.forEach(interp => {
            body += '<tr>';
            body += `<td class="text-left">${interp.id}. ${interp.text}</td>`;
            examples.forEach(ex => {
                body += `<td class="text-center">${ex.allocations[interp.text]}</td>`;
            });
            body += '</tr>';
        });
        return body;
    };

    // 3. Build the "Sensible Allocations" Panel
    const sensiblePanel = `
        <div class="panel panel-success" style="margin-top: 20px;">
            <div class="panel-heading">
                <h3 class="panel-title">✅ Sensible Allocations</h3>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th class="text-left">Interpretation</th>
                            ${sensibleExamples.map(ex => `<th class="text-center">Example ${ex.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${buildTableBody(sensibleExamples)}
                    </tbody>
                </table>
            </div>
            <div class="panel-footer">
                <p style="margin-bottom: 5px;"><strong>Rationale:</strong> These are logical because they focus on related concepts.</p>
                ${sensibleExamples.map(ex => `<p style="margin-bottom: 0;"><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
            </div>
        </div>
    `;

    // 4. Build the "Nonsensical Allocations" Panel
    const nonsensicalPanel = `
        <div class="panel panel-danger">
            <div class="panel-heading">
                <h3 class="panel-title">⚠️ Nonsensical Allocations</h3>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th class="text-left">Interpretation</th>
                            ${nonsensicalExamples.map(ex => `<th class="text-center">Example ${ex.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${buildTableBody(nonsensicalExamples)}
                    </tbody>
                </table>
            </div>
            <div class="panel-footer">
                <p style="margin-bottom: 5px;"><strong>Rationale:</strong> These are illogical because they assign high probability to contradictory concepts.</p>
                ${nonsensicalExamples.map(ex => `<p style="margin-bottom: 0;"><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
            </div>
        </div>
    `;


    // 5. Assemble the final HTML by stacking the panels vertically.
    const finalHtml = `
        <div style="margin-top: 15px;">
             <h3 class="text-center">Allocation Examples</h3>
             <p class="text-center">Your points must sum to 100, and your choices should be logically consistent. Here are some examples.</p>
        </div>
        ${sensiblePanel}
        ${nonsensicalPanel}
    `;

    return finalHtml;
}

var example_allocations = [
    {
        "allocations": {
            "The dog is tiny.": 20,
            "The dog is small.": 0,
            "The dog is of normal size.": 0,
            "The dog is big.": 30,
            "The dog is huge.": 50,
        },
        "rationale": "Mark is clearly exaggerating the size of the dog.",
        "type": "sensible",
    },
    {
        "allocations": {
            "The dog is tiny.": 0,
            "The dog is small.": 20,
            "The dog is of normal size.": 0,
            "The dog is big.": 30,
            "The dog is huge.": 50,
        },
        "rationale": "Mark is clearly exaggerating the size of the dog, so this allocation does not make sense.",
        "type": "nonsensical",
    },
    {
        "allocations": {
            "The dog is tiny.": 0,
            "The dog is small.": 0,
            "The dog is of normal size.": 100,
            "The dog is big.": 0,
            "The dog is huge.": 0,
        },
        "rationale": "Mark's statement does not imply that the dog is of normal size.",
        "type": "nonsensical",
    }
]
