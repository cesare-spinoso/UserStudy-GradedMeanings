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

    // 3. Generate Table Header HTML using Bootstrap classes.
    let headerHtml = `
        <tr>
            <th></th>
            <th colspan="${sensibleExamples.length}" class="text-center success">✅ Sensible Allocations</th>
            <th colspan="${nonsensicalExamples.length}" class="text-center danger">⚠️ Nonsensical Allocations</th>
        </tr>
        <tr>
            <th class="text-left">Interpretation</th>
            ${sensibleExamples.map(ex => `<th class="text-center">Example ${ex.name}</th>`).join('')}
            ${nonsensicalExamples.map(ex => `<th class="text-center">Example ${ex.name}</th>`).join('')}
        </tr>`;

    // 4. Generate Table Body HTML.
    // The .table-striped class on the table will handle alternating row colors.
    let bodyHtml = '';
    interpretations.forEach((interp) => {
        bodyHtml += `
            <tr>
                <td class="text-left">${interp.id}. ${interp.text}</td>
                ${sensibleExamples.map(ex => `<td class="text-center">${ex.allocations[interp.text]}</td>`).join('')}
                ${nonsensicalExamples.map(ex => `<td class="text-center">${ex.allocations[interp.text]}</td>`).join('')}
            </tr>`;
    });

    // 5. Generate Table Footer (Rationales) HTML.
    let footerHtml = `
        <tr>
            <td class="text-left"><strong>Rationale</strong></td>
            <td colspan="${sensibleExamples.length}" valign="top">
                <p><strong>These are logical because they focus on related concepts.</strong></p>
                ${sensibleExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
            </td>
            <td colspan="${nonsensicalExamples.length}" valign="top">
                <p><strong>These are illogical because they assign high probability to contradictory concepts.</strong></p>
                ${nonsensicalExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
            </td>
        </tr>`;

    // 6. Assemble the final HTML using Bootstrap's .panel and .table structure.
    const table_html = `
        <div class="panel panel-default">
            <div class="panel-heading text-center">
                <h1>Allocation Examples</h1>
                <p class="lead">Your points must sum to 100, and your choices should be logically consistent. Here are some examples.</p>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>${headerHtml}</thead>
                        <tbody>${bodyHtml}</tbody>
                        <tfoot>${footerHtml}</tfoot>
                    </table>
                </div>
            </div>
        </div>`;

    return table_html;
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
