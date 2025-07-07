function create_feedback(interpretationKeys, exampleAllocations) {
    // 1. Derive the list of interpretations from the first example's keys.
    // This assumes all examples have the same set of interpretations.
    if (!exampleAllocations || exampleAllocations.length === 0) {
        return '<p>No examples to display.</p>';
    }
    // Use the interpretations which are already generated (to respect the presentation order)
    const interpretations = interpretationKeys.map((text, index) => ({ id: index + 1, text: text }));

    // 2. Process and categorize the raw data
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
                <tr>
                    <th class="p-3"></th>
                    <th colspan="${sensibleExamples.length}" class="text-lg font-semibold text-center text-green-700 bg-green-100 border-b-2 border-green-200 p-4 rounded-tl-lg">✅ Sensible Allocations</th>
                    <th colspan="${nonsensicalExamples.length}" class="text-lg font-semibold text-center text-red-700 bg-red-100 border-b-2 border-red-200 p-4 rounded-tr-lg">⚠️ Nonsensical Allocations</th>
                </tr>
                <tr class="bg-gray-50">
                    <th class="text-left font-semibold text-gray-700 p-3 border-b">Interpretation</th>
            `;
    sensibleExamples.forEach((ex, index) => {
        headerHtml += `<th class="font-medium text-gray-600 p-3 border-b ${index === 0 ? 'border-l' : ''} border-r">Example ${ex.name}</th>`;
    });
    nonsensicalExamples.forEach((ex, index) => {
        headerHtml += `<th class="font-medium text-gray-600 p-3 border-b ${index === 0 ? 'border-l' : ''} border-r">Example ${ex.name}</th>`;
    });
    headerHtml += `</tr>`;

    // 4. Generate Table Body HTML
    let bodyHtml = '';
    interpretations.forEach((interp, interpIndex) => {
        bodyHtml += `<tr class="${interpIndex % 2 === 0 ? 'text-center' : 'bg-gray-50 text-center'}">`;
        bodyHtml += `<td class="text-left p-3 border-b text-gray-800">${interp.id}. ${interp.text}</td>`;

        sensibleExamples.forEach((ex, exIndex) => {
            bodyHtml += `<td class="p-3 border-b ${exIndex === 0 ? 'border-l' : ''} border-r">${ex.allocations[interp.text]}</td>`;
        });
        nonsensicalExamples.forEach((ex, exIndex) => {
            bodyHtml += `<td class="p-3 border-b ${exIndex === 0 ? 'border-l' : ''} border-r">${ex.allocations[interp.text]}</td>`;
        });
        bodyHtml += `</tr>`;
    });

    // 5. Generate Table Footer (Rationales) HTML
    let footerHtml = `
                <tr class="font-medium text-left bg-gray-50">
                    <td class="text-left p-3 text-gray-900 font-bold align-top">Rationale</td>
                    <td colspan="${sensibleExamples.length}" class="p-3 text-sm text-gray-700 align-top">
                        <p class="font-semibold text-gray-800 mb-2">These are logical because they focus on related concepts.</p>
                        <div class="space-y-1 text-gray-600">
                            ${sensibleExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
                        </div>
                    </td>
                    <td colspan="${nonsensicalExamples.length}" class="p-3 text-sm text-gray-700 border-l align-top">
                        <p class="font-semibold text-gray-800 mb-2">These are illogical because they assign high probability to contradictory concepts.</p>
                        <div class="space-y-1 text-gray-600">
                            ${nonsensicalExamples.map(ex => `<p><b>Example ${ex.name}:</b> ${ex.rationale}</p>`).join('')}
                        </div>
                    </td>
                </tr>
            `;

    // 6. Assemble the final HTML
    const table_html = `
            <div class="w-full max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div class="text-center mb-8">
                    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Allocation Examples</h1>
                    <p class="text-lg text-gray-600">Your points must sum to 100, and your choices should be logically consistent. Here are some examples.</p>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>${headerHtml}</thead>
                        <tbody>${bodyHtml}</tbody>
                        <tfoot>${footerHtml}</tfoot>
                    </table>
                </div>
            </div>
            `;

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
