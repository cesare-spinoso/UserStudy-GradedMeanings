function create_feedback(interpretationKeys, exampleAllocations) {
    // 1. Exit if there's no data.
    if (!exampleAllocations || exampleAllocations.length === 0) {
        return '<p>No examples to display.</p>';
    }

    // 2. Process and categorize the data
    const interpretations = interpretationKeys.map((text, index) => ({ id: index + 1, text: text }));
    const examplesData = exampleAllocations.map((ex, index) => ({
        name: index + 1,
        type: ex.type,
        allocations: ex.allocations,
        rationale: ex.rationale
    }));

    const sensibleExamples = examplesData.filter(ex => ex.type === 'sensible');
    const nonsensicalExamples = examplesData.filter(ex => ex.type === 'nonsensical');

    // 3. Generate Table Header HTML
    let headerHtml = `
        <thead>
            <tr>
                <th></th>
                <th colspan="${sensibleExamples.length}" class="text-center success">✅ Sensible Allocations</th>
                <th colspan="${nonsensicalExamples.length}" class="text-center danger" style="border-left: 2px solid #ddd;">⚠️ Nonsensical Allocations</th>
            </tr>
            <tr>
                <th class="text-left">Interpretation</th>
                ${sensibleExamples.map(ex => `<th class="text-center">Example ${ex.name}</th>`).join('')}
                ${nonsensicalExamples.map(ex => `<th class="text-center" style="border-left: 2px solid #ddd;">Example ${ex.name}</th>`).join('')}
            </tr>
        </thead>`;

    // 4. Generate Table Body HTML
    let bodyHtml = '<tbody>';
    interpretations.forEach((interp) => {
        bodyHtml += '<tr>';
        bodyHtml += `<td class="text-left">${interp.id}. ${interp.text}</td>`;
        
        sensibleExamples.forEach(ex => {
            bodyHtml += `<td class="text-center">${ex.allocations[interp.text]}</td>`;
        });

        nonsensicalExamples.forEach((ex, index) => {
            const borderStyle = (index === 0) ? 'style="border-left: 2px solid #ddd;"' : '';
            bodyHtml += `<td class="text-center" ${borderStyle}>${ex.allocations[interp.text]}</td>`;
        });
        
        bodyHtml += '</tr>';
    });
    bodyHtml += '</tbody>';

    // 5. Generate Table Footer (Rationales) HTML
    let footerHtml = `
        <tfoot>
            <tr class="active">
                <td class="text-left"><strong>Rationale</strong></td>
                <td colspan="${sensibleExamples.length}">
                    <p><strong>These are logical because:</strong></p>
                    ${sensibleExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
                </td>
                <td colspan="${nonsensicalExamples.length}" style="border-left: 2px solid #ddd;">
                    <p><strong>These are illogical because:</strong></p>
                    ${nonsensicalExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
                </td>
            </tr>
        </tfoot>`;

    // 6. Assemble the final HTML, FORCING the box-sizing property on the container.
    const finalHtml = `
        <div style="margin-top: 15px;">
            <h3 class="text-center">Allocation Examples</h3>
            <p class="text-center">Your points must sum to 100, and your choices should be logically consistent. Here are some examples.</p>
        </div>
        <div class="table-responsive" style="box-sizing: border-box;">
            <table class="table table-bordered table-striped" style="margin-top: 20px; margin-left: auto; margin-right: auto;">
                ${headerHtml}
                ${bodyHtml}
                ${footerHtml}
            </table>
        </div>
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
