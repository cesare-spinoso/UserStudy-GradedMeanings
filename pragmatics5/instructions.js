// Global variables
let currentData = [];
let currentIndex = 0;
let responses = [];
let experimentStartTime = null;
let attentionChecks = [];
let attentionCheckResults = [];
let isInstructionPhase = true;
let instructionIndex = 0;
let isWelcomePhase = true;
let likelihoodRating = null;
let instructionResponses = [];
let transitionSlideTimestamp = null;
let showingInstructionFeedback = false;
let lastInstructionLikelihood = null;

// Instructional examples for practice
const INSTRUCTIONAL_EXAMPLES = [
    {
        // Vanilla utterance implicature
        id: "instruction_1",
        "asks-for": "interpretation",
        "speaker-name": "the",
        "hard_label": 1, // Likely or more
        premise: "John managed to open the door.",
        hypothesis: "Opening the door was not straightforward."
    },
    {
        // Dialogue implicature and cancellation
        id: "instruction_2",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 0, // Likely or more
        premise: "A: Did you read the entire paper?<br>B: I read the introduction and the conclusion. And the rest of the paper too.",
        hypothesis: "B did not read the entire paper."
    },
    {
        // Contextual implicature
        id: "instruction_3",
        "asks-for": "interpretation",
        "speaker-name": "Jamie",
        "hard_label": 1, // Likely or more
        premise: "Jamie and George are going to their friend Michael's party. When they walk in, the music is booming and people are singing. Jamie turns to George and says \"What a racket!\"",
        hypothesis: "The party is loud."
    },
    {
        // Context with negated implicature
        id: "instruction_4",
        "asks-for": "interpretation",
        "hard_label": 0, // Unlikely or less
        "speaker-name": "Alice",
        premise: "Two colleagues, Alice and Bob, are discussing their new manager Mary. Bob asks Alice what she thinks of Mary's managing skills. Alice says \"Well, she certainly knows her way around the kitchen.\"",
        hypothesis: "Mary is an excellent manager who is on top of everything."
    },
    {
        // Dialogue implicature and cancellation
        id: "instruction_5",
        "asks-for": "interpretation",
        "hard_label": 0, // Unlikely or less
        "speaker-name": "S",
        premise: "T: Did you ever go to John's house?<br>S: Where is it? I've been, but I can't remember when or even where.",
        hypothesis: "S did not go to John's house."
    }
];

// Hard-coded attention check datapoints
const ATTENTION_CHECK_DATA = [
    {
        // Vanilla utterance implicature
        id: "instruction_4",
        "asks-for": "interpretation",
        "speaker-name": "the",
        "hard_label": 1,
        premise: "John forgot to lock the door.",
        hypothesis: "John was supposed to lock the door."
    },
    {
        // Dialogue implicature
        id: "instruction_5",
        "asks-for": "interpretation",
        "speaker-name": "the",
        "hard_label": 1,
        premise: "A: Is Sarah coming to the meeting?\nB: She has to pick up her kids from school.",
        hypothesis: "Sarah will not come to the meeting."
    },
    {
        // Dialogue implicature and cancellation
        id: "instruction_6",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 0,
        premise: "A: Can you drive me to the airport? B: I don't have a car. But I'll just rent one.",
        hypothesis: "B will not drive A to the airport."
    },
    {
        // Contextual implicature
        id: "instruction_7",
        "asks-for": "interpretation",
        "speaker-name": "Liam",
        "hard_label": 1,
        premise: "Two colleagues, Emma and Liam, are discussing a presentation their colleague just gave. Liam says: \"Well, the slides were perfectly formatted.\"",
        hypothesis: "The content of the presentation was not very good."
    },
    // Vanilla utterance implicature and cancellation
    {
        id: "instruction_8",
        "asks-for": "interpretation",
        "speaker-name": "the",
        "hard_label": 0,
        premise: "Mary arrived at the office at 8 a.m. sharp. Her boss scolded her for being late.",
        hypothesis: "Mary arrived got to work early."
    }
];

const FEEDBACK = {
    instruction_1: (color) => `
        <strong style="color: ${color};">Correct!</strong><br><br>
        This interpretation of the utterance is likely. While it's possible that the door was easy to open, the fact that the expression "managed to open" was used (as opposed to simply saying "opened") signals that opening the door was not a simply routine action, perhaps because something was blocking or it required an inordinate amount of effort.<br><br>
    `,

    instruction_2: (color) => `
        <strong style="color: ${color};">Correct!</strong><br><br>
        This interpretation of the utterance is likely if not quite likely. The fact that B chooses to describe which parts of the paper they read rather than simply answering something like "Yes, I did." likely signals that they only read those two parts of the paper and not the rest.<br><br>
    `,

    instruction_3: (color) => `
        <strong style="color: ${color};">Correct!</strong><br><br>
        This interpretation is likely if not certain. Not only does the context describe "booming music", but the utterance itself "What a racket!" also suggests a loud volume.<br><br>
    `,

    instruction_4: (color) => `
        <strong style="color: ${color};">Correct!</strong><br><br>
        This interpretation is unlikely if not impossible. The fact that Alice chooses to discuss the manager's way around the kitchen rather than anything about her managing skills signals to Bob that she doesn't want to talk about her managing skills potentially because they are not good.<br><br>
    `,

    instruction_5: (color) => `
        <strong style="color: ${color};">Correct!</strong><br><br>
        This interpretation is unlikely if not impossible. Given that S is discussing the good time they had at John's house they are almost guaranteed to have visited, making the interpretation impossible.<br><br>
    `,
};


// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if download is enabled
function shouldDownloadData() {
    const downloadParam = getUrlParameter('download');
    return downloadParam === '1';
}

// Download data as JSON file
function downloadDataAsJson(data, filename) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Load data from embedded JSON
function loadData() {
    try {
        const listIndex = getUrlParameter('list');
        let listIndexNum;

        if (listIndex === null) {
            // Default to list=0 if no list parameter is provided
            console.log('No list parameter provided, defaulting to list=0');
            listIndexNum = 0;
        } else {
            listIndexNum = parseInt(listIndex);
            if (isNaN(listIndexNum) || listIndexNum < 0 || listIndexNum >= COPA_DATA.length) {
                throw new Error(`Invalid list index: ${listIndex}. Valid range: 0-${COPA_DATA.length - 1}`);
            }
        }

        const index = listIndexNum;

        currentData = COPA_DATA[index];

        // Randomly shuffle the datapoints
        for (let i = currentData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentData[i], currentData[j]] = [currentData[j], currentData[i]];
        }

        // Create a mixed array with attention checks randomly interspersed
        const totalItems = currentData.length + ATTENTION_CHECK_DATA.length;
        const mixedData = [];
        const attentionCheckIndices = [];

        // Randomly select positions for attention checks
        for (let i = 0; i < ATTENTION_CHECK_DATA.length; i++) {
            let position;
            do {
                position = Math.floor(Math.random() * totalItems);
            } while (attentionCheckIndices.includes(position));
            attentionCheckIndices.push(position);
        }

        // Build the mixed array
        let dataIndex = 0;
        let attentionIndex = 0;
        for (let i = 0; i < totalItems; i++) {
            if (attentionCheckIndices.includes(i)) {
                mixedData.push({
                    ...ATTENTION_CHECK_DATA[attentionIndex],
                    isAttentionCheck: true,
                    attentionCheckId: attentionIndex + 1
                });
                attentionIndex++;
            } else {
                mixedData.push({
                    ...currentData[dataIndex],
                    isAttentionCheck: false
                });
                dataIndex++;
            }
        }

        currentData = mixedData;
        responses = new Array(currentData.length);
        attentionCheckResults = new Array(ATTENTION_CHECK_DATA.length);
        experimentStartTime = Date.now();

        console.log(`Loaded list ${index} with ${currentData.length} items (${ATTENTION_CHECK_DATA.length} attention checks interspersed)`);
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        showError(error.message);
        return false;
    }
}

// Show error message
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-container').style.display = 'block';
    document.getElementById('experiment-container').style.display = 'none';
}

// Display instructional example
function displayInstructionExample() {
    if (instructionIndex >= INSTRUCTIONAL_EXAMPLES.length) {
        // Instructions completed, show transition message
        showTransitionMessage();
        return;
    }

    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];

    // Update progress
    document.getElementById('progress').textContent =
        `Practice Example ${instructionIndex + 1} of ${INSTRUCTIONAL_EXAMPLES.length}`;

    // Display information
    document.getElementById('information').innerHTML =
        `<strong>Situation:</strong> ${example.premise}`;

    // Display alternatives
    document.getElementById('alternatives').innerHTML =
        `<strong>Possible <mark>${example['asks-for']}</mark>:</strong> ${example.hypothesis}`;

    // Display instruction
    let instructionText = `<strong>This is a practice example. Choose the best option on the 7-point scale for how likely you find the <mark>${example['asks-for']}</mark> of <mark>${example['speaker-name']}</mark> utterance.</strong>`;

    // Add important instruction for all examples
    instructionText += ` When giving your rating, be sure to consider the context (if any) and other possible interpretations; some situations will favor more uncertain responses.`;

    document.getElementById('instruction').innerHTML = instructionText;

    // Update choice context to show the complete sentence (use example in instruction phase)
    const contextText = `Utterance: ${example.premise}<br><strong>Interpretation:</strong> ${example.hypothesis}`;
    document.getElementById('choice-context').innerHTML = contextText;

    // Reset likelihood (Likert scale)
    likelihoodRating = null;
    const instructionElement = document.getElementById('slider-instruction');
    if (instructionElement) {
        instructionElement.classList.remove('hide-instruction');
    }
    // Clear any previous selection
    document.querySelectorAll('input[name="likert-scale"]').forEach(el => { el.checked = false; el.parentElement.classList.remove('selected'); });

    // Disable continue button until ratings are made
    document.getElementById('continue-btn').disabled = true;
}

// Display welcome message
function displayWelcomeMessage() {
    // Update progress
    document.getElementById('progress').textContent = 'Welcome';

    // Display welcome information
    document.getElementById('information').innerHTML =
        `<strong>Welcome to the experiment!</strong>`;

    // Display description
    document.getElementById('alternatives').innerHTML =
        `<strong>What you'll be doing:</strong><br>
        In this experiment, you'll be asked to rate the likelihood of the interpretation of an utterance (i.e., something someone has said). 
        You'll see an utterance - potentially accompanied by some context- and be asked to rate how likely the interpretation provided for the utterance is.`;

    // Display instruction
    document.getElementById('instruction').innerHTML =
        `<strong>How it works:</strong><br>
        • We'll start with a couple of practice examples to help you understand the task<br>
        • Then we'll move on to the real experiment<br>
        • There are no right or wrong answers in the real experiment - we just want your honest opinion<br>
        • In some cases, you may feel that there isn't enough information to answer. That's perfectly normal - just give your best judgement!`;

    // Hide choice and likelihood sections for welcome
    document.querySelector('.choice-container').style.display = 'none';
    document.querySelector('.likelihood-container').style.display = 'none';

    // Update continue button text
    document.getElementById('continue-btn').textContent = 'Start Practice Examples';
    document.getElementById('continue-btn').disabled = false;
}



// Show transition message before starting real experiment
function showTransitionMessage() {
    // Record timestamp when transition slide is shown
    transitionSlideTimestamp = new Date().toISOString();

    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('transition-container').style.display = 'block';

    console.log(`Transition slide shown at: ${transitionSlideTimestamp}`);
}

// Handle instructional example response
function handleInstructionResponse(likelihood) {
    // Record the instructional response with timestamp and time_in_minutes
    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
    const instructionResponseData = {
        instruction_example: example,
        likelihood: likelihood,
        instruction_number: instructionIndex + 1,
        timestamp: new Date().toISOString(),
        time_in_minutes: (Date.now() - experimentStartTime) / 60000,
        passed: true
    };
    instructionResponses.push(instructionResponseData);

    console.log(`Instruction ${instructionIndex + 1} completed: likelihood=${likelihood}, time=${instructionResponseData.time_in_minutes.toFixed(2)} min`);

    // Move to next example without showing feedback
    instructionIndex++;
    displayCurrentDatapoint();
}

// Display current datapoint
function displayCurrentDatapoint() {
    if (isWelcomePhase) {
        displayWelcomeMessage();
        return;
    }

    if (isInstructionPhase) {
        displayInstructionExample();
        return;
    }

    if (currentIndex >= currentData.length) {
        // Experiment completed - show feedback form
        document.getElementById('experiment-container').style.display = 'none';
        document.getElementById('feedback-container').style.display = 'block';

        // Data will be prepared and submitted when feedback is submitted

        return;
    }

    const datapoint = currentData[currentIndex];

    // Update progress
    document.getElementById('progress').textContent =
        `Question ${currentIndex + 1} of ${currentData.length}`;

    // Display information
    document.getElementById('information').innerHTML =
        `<strong>Situation:</strong> ${datapoint.premise}`;

    // Display alternatives
    document.getElementById('alternatives').innerHTML =
        `<strong>Possible <mark>${datapoint['asks-for']}</mark>:</strong><br>
        ${datapoint.hypothesis}`;

    // Display instruction
    document.getElementById('instruction').innerHTML =
        `<strong>Choose the best option on the 7-point scale for how likely you find the interpretation of the utterance.</strong>`;

    // Update choice context to show the complete sentence
    const contextText = `Utterance: ${datapoint.premise}<br><strong>Interpretation:</strong> ${datapoint.hypothesis}`;
    document.getElementById('choice-context').innerHTML = contextText;

    // Reset likelihood (Likert scale)
    likelihoodRating = null;
    const instructionElement = document.getElementById('slider-instruction');
    if (instructionElement) {
        // Hide instruction during main experiment phase
        instructionElement.classList.add('hide-instruction');
    }
    // Clear any previous selection
    document.querySelectorAll('input[name="likert-scale"]').forEach(el => { el.checked = false; el.parentElement.classList.remove('selected'); });

    // Disable continue button until ratings are made
    document.getElementById('continue-btn').disabled = true;
}

// Handle Likert scale selection
function updateLikelihoodValue() {
    const instructionElement = document.getElementById('slider-instruction');
    const selected = document.querySelector('input[name="likert-scale"]:checked');
    const labels = [
        'Absolutely no chance',
        'Highly unlikely',
        'Unlikely',
        'Even chance',
        'Likely',
        'Highly likely',
        'Absolutely certain'
    ];

    if (selected) {
        likelihoodRating = parseInt(selected.value);
        // Toggle selected class for styling
        document.querySelectorAll('.likert-option').forEach(opt => opt.classList.remove('selected'));
        if (selected.parentElement) selected.parentElement.classList.add('selected');

        if (instructionElement) instructionElement.classList.add('hide-instruction');

        if (!isWelcomePhase) {
            document.getElementById('continue-btn').disabled = false;
        }
    }
}

// Handle choice button selection (no longer used in new format)
function selectChoice(choice) {
    // This function is kept for compatibility but not used in the new format
    // where we only have a likelihood slider
}

// Handle continue button click
function continueToNext() {
    console.log('continueToNext called, isWelcomePhase:', isWelcomePhase);
    if (isWelcomePhase) {
        console.log('Starting instruction phase...');
        startInstructionPhase();
        return;
    }

    if (isInstructionPhase) {
        handleInstructionResponse(likelihoodRating); // Pass likelihoodRating
        return;
    }

    // Store response
    const currentDatapoint = currentData[currentIndex];
    const responseData = {
        datapoint: currentDatapoint,
        likelihood: likelihoodRating, // Use likelihoodRating
        slide_number: currentIndex + 1,
        timestamp: new Date().toISOString(),
        time_in_minutes: (Date.now() - experimentStartTime) / 60000
    };

    // Handle attention checks
    if (currentDatapoint.isAttentionCheck) {
        // Check if likelihood rating is appropriate based on the hard_label
        let likelihoodCorrect = false;
        if (currentDatapoint['hard_label'] === 1) {
            // High likelihood case - should be rated 5 or higher (Likely, Highly likely, Absolutely certain)
            likelihoodCorrect = likelihoodRating >= 5;
        } else if (currentDatapoint['hard_label'] === 0) {
            // Low likelihood case - should be rated 3 or lower (Absolutely no chance, Highly unlikely, Unlikely)
            likelihoodCorrect = likelihoodRating <= 3;
        }

        responseData.isAttentionCheck = true;
        responseData.attentionCheckId = currentDatapoint.attentionCheckId;
        responseData.attentionPassed = likelihoodCorrect;
        responseData.correctOption = currentDatapoint['hard_label'];
        responseData.likelihoodCorrect = likelihoodCorrect;

        // Store attention check result
        attentionCheckResults[currentDatapoint.attentionCheckId - 1] = {
            id: currentDatapoint.attentionCheckId,
            passed: likelihoodCorrect,
            likelihood: likelihoodRating,
            correctOption: currentDatapoint['hard_label'],
            likelihoodCorrect: likelihoodCorrect,
            slide_number: currentIndex + 1
        };

        console.log(`Attention check ${currentDatapoint.attentionCheckId}: ${likelihoodCorrect ? 'PASSED' : 'FAILED'} (likelihood: ${likelihoodRating}, correct range: ${currentDatapoint['hard_label'] === 1 ? '5-7' : '1-3'})`);
    } else {
        responseData.isAttentionCheck = false;
    }

    responses[currentIndex] = responseData;

    console.log(`Question ${currentIndex + 1} response: likelihood=${likelihoodRating}`);

    // Move to next datapoint
    currentIndex++;

    // Disable continue button temporarily
    document.getElementById('continue-btn').disabled = true;

    // Display next datapoint
    displayCurrentDatapoint();
}

// Start the instruction phase after welcome
function startInstructionPhase() {
    isWelcomePhase = false;
    document.querySelector('.choice-container').style.display = 'block';
    document.querySelector('.likelihood-container').style.display = 'block';

    // Show the instruction box for practice examples
    document.getElementById('instruction').style.display = 'block';

    // Show the information and alternatives boxes for practice examples
    document.getElementById('information').style.display = 'none';
    document.getElementById('alternatives').style.display = 'none';

    document.getElementById('continue-btn').textContent = 'Continue';
    displayCurrentDatapoint();
}

// Start the real experiment after instructions
function startRealExperiment() {
    // Record timestamp and time when participant advances from transition slide
    const transitionCompleteTimestamp = new Date().toISOString();
    const transitionCompleteTime = (Date.now() - experimentStartTime) / 60000;

    // Store transition slide timing data
    const transitionData = {
        transition_slide_shown_timestamp: transitionSlideTimestamp,
        transition_slide_complete_timestamp: transitionCompleteTimestamp,
        transition_slide_complete_time_in_minutes: transitionCompleteTime
    };

    // Add transition data to instruction responses
    instructionResponses.push({
        type: "transition_slide",
        ...transitionData
    });

    console.log(`Transition slide completed: time=${transitionCompleteTime.toFixed(2)} min`);

    isInstructionPhase = false;
    document.getElementById('transition-container').style.display = 'none';
    document.getElementById('experiment-container').style.display = 'block';

    displayCurrentDatapoint();
}

// Handle feedback submission
function handleFeedbackSubmission() {
    const feedbackText = document.getElementById('feedback-text').value.trim();

    // Add feedback to the experiment data
    const experimentData = {
        "instruction_trials": instructionResponses,
        "trials": responses,
        "attention_checks": attentionCheckResults,
        "feedback": feedbackText,
        "experiment_info": {
            "list_index": getUrlParameter('list'),
            "total_questions": currentData.length,
            "instruction_examples_completed": instructionResponses.filter(r => r.type !== "transition_slide").length,
            "attention_checks_passed": attentionCheckResults.filter(r => r && r.passed).length,
            "attention_checks_total": ATTENTION_CHECK_DATA.length,
            "experiment_duration_minutes": (Date.now() - experimentStartTime) / 60000,
            "completion_time": new Date().toISOString()
        }
    };

    // Submit to Proliferate (will work in sandbox/debug mode locally)
    if (typeof proliferate !== 'undefined') {
        proliferate.submit(experimentData);
    } else {
        console.log('Proliferate not available, logging data to console:', experimentData);
    }

    // Download data if requested
    if (shouldDownloadData()) {
        downloadDataAsJson(experimentData, 'trial_responses.json');
        console.log('Data downloaded as trial_responses.json');
    }

    // Show completion message
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('completion-container').style.display = 'block';
}

// Initialize the experiment
function initExperiment() {
    console.log('initExperiment called');
    const success = loadData();
    if (success) {
        document.getElementById('experiment-container').style.display = 'block';
        displayCurrentDatapoint();

        // Add event listeners (null-safe)
        console.log('Adding event listeners...');
        const likertInputs = document.querySelectorAll('input[name="likert-scale"]');
        if (likertInputs && likertInputs.length) {
            likertInputs.forEach(el => el.addEventListener('change', updateLikelihoodValue));
        } else {
            console.warn('No Likert inputs found when initializing listeners.');
        }

        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', continueToNext);
        } else {
            console.warn('continue-btn element not found.');
        }

        const submitFeedbackBtn = document.getElementById('submit-feedback-btn');
        if (submitFeedbackBtn) {
            submitFeedbackBtn.addEventListener('click', handleFeedbackSubmission);
        } else {
            console.warn('submit-feedback-btn element not found.');
        }
        console.log('Event listeners added');
    }
}

// Start the experiment when page loads
document.addEventListener('DOMContentLoaded', initExperiment);