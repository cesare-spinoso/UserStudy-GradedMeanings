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
        identifier: "instruction_1_some_all",
        "asks-for": "interpretation",
        "speaker-name": "A",
        "hard_label": 1, // Likely or more
        scenario: "A: i drink coffee on some evenings.",
        implicature: "I like to drink coffee on some, but not all, evenings."
    },
    {
        // Dialogue implicature and cancellation
        identifier: "instruction_2",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 0, // Unlikely or less
        scenario: "<strong>Dialogue:</strong><br>A: Do you need a tissue?<br>B: Please.",
        implicature: "B does not need a tissue."
    },
    {
        // Contextual implicature
        identifier: "instruction_3",
        "asks-for": "interpretation",
        "speaker-name": "Mike",
        "hard_label": 1, // Likely or more
        scenario: "<strong>Scenario:</strong><br>Jack and Mike are debating whether they should go for Chinese food or Italian food tonight. Jack tells Mike \"What if we order both?\" Mike replies \"<em>That might be the dumbest idea I've ever heard.</em>\"",
        implicature: "He does not want them to order both Chinese and Italian food."
    },
    {
        // Context with negated implicature
        identifier: "instruction_4",
        "asks-for": "interpretation",
        "hard_label": 0, // Unlikely or less
        "speaker-name": "A",
        scenario: "<strong>Context:</strong> A and B are talking about careers. A has a son.<br>B: What, what does, your son -<br>B: he hopes to be a writer.<br>A: Yes,<br>A: he thinks that's what he'd like to do,<br>A: but he's really strong in math and science, too,",
        implicature: "A thinks that their son should be a writer."
    },
    {
        // Dialogue implicature and cancellation
        identifier: "instruction_5",
        "asks-for": "interpretation",
        "hard_label": 1, // Unlikely or less
        "speaker-name": "the passage",
        scenario: "<strong>Passage:</strong> Hungry for more stock, Ford Motor disclosed that it has raised its holding in Jaguar to 10.4% from 5%. Ford, which has repeatedly signaled its desire to diversify its portfolio, appears poised to make several other major moves.",
        implicature: "Ford will be making more stock acquisitions."
    }
];

// Hard-coded attention check datapoints
const ATTENTION_CHECK_DATA = [
    {
        // some_all which looks like a cancellation but is likely
        identifier: "instruction_6_some_all",
        "asks-for": "interpretation",
        "speaker-name": "A",
        "hard_label": 1,
        scenario: "A: some of, of, of, my friends like the one next to my place. and then some of my other friends like the one further away",
        implicature: "Some, but not all, of my friends like the one next to my place."
    },
    {
        // some_all which looks like an original but it's unlikely
        identifier: "instruction_7_some_all",
        "asks-for": "interpretation",
        "speaker-name": "A",
        "hard_label": 0,
        scenario: "A: it really gets annoying, because all my teachers do that.",
        implicature: "Some, but not all, of my teachers do that."
    },
    {
        // two_turn which looks like a cancellation but is likely
        identifier: "instruction_8",
        "asks-for": "interpretation",
        "speaker-name": "T",
        "hard_label": 0,
        scenario: "<strong>Dialogue:</strong><br>S: Do you mind sending me that by the end of the day?<br>T: I'm afraid I'm leaving after lunch. Sorry about that.",
        implicature: "T will not send it by the end of the day."
    },
    {
        // two_turn which does not have a cancellation but is unlikely
        identifier: "instruction_9",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 0,
        scenario: "<strong>Dialogue:</strong><br>A: Can you speak any other languages?<br>B: I only know English.",
        implicature: "B can speak a little French."
    },
    {
        // scenario which looks like a cancellation but is likely
        identifier: "instruction_10",
        "asks-for": "interpretation",
        "speaker-name": "the advisor",
        "hard_label": 1,
        scenario: "<strong>Scenario:</strong> Sam is excited about his new research idea. He schedules a meeting with his advisor and explains to him the idea as best he can. His advisor replies \"This idea is as realistic as my mom disproving the theory of relativity. I really very strongly recommend you to think of something else.\"",
        implicature: "The advisor does not think the research idea is realistic."
    },
    {
        // scenario which does not have a cancellation but is unlikely
        identifier: "instruction_11",
        "asks-for": "interpretation",
        "speaker-name": "Barb",
        "hard_label": 0,
        scenario: "<strong>Scenario:</strong> Barb and Alice are playing basketball together. Alice is a skilled player who keeps the ball to herself. At the end of the game, Barb tells Alice \"I really liked how you kept passing the ball to us.\"",
        implicature: "Barb enjoyed playing with Alice."
    },
    {
        // multi_turn which looks like a cancellation but is likely
        identifier: "instruction_11",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 1,
        scenario: "<strong>Context:</strong> A and B are talking about financial discussions.<br>B: Well, I think, uh, -<br>B: I haven't had that much, of course<br>B: I just heard,<br>B: but I haven't had that much time to think about it, either.",
        implicature: "B does not have much to say about the topic."
    },
    {
        // multi_turn which does not have a cancellation but is unlikely
        identifier: "instruction_12",
        "asks-for": "interpretation",
        "speaker-name": "B",
        "hard_label": 0,
        scenario: "<strong>Context:</strong> A and B are talking about the quality of nursing homes.<br>A: I wouldn't put my mother, father in that nursing home at all.<br>B: Was this in a big town or a little town?<br>A: A small town.<br>B: Oh, really?",
        implicature: "B was expecting the town to be small."
    },
    {
        // discourse which looks like a cancellation but is likely
        identifier: "instruction_13",
        "asks-for": "interpretation",
        "speaker-name": "the passage",
        "hard_label": 1,
        scenario: "<strong>Passage:</strong> The controls on cooperatives appeared relatively liberal when first introduced. But that changed following a resolution from the Supreme Soviet banning cooperatives from operating in some areas of the economy, and permitting activity in others only if the cooperatives are under contract to the state.",
        implicature: "The controls are no longer liberal."
    },
    {
        // discourse which does not have a cancellation but is unlikely
        identifier: "instruction_14",
        "asks-for": "interpretation",
        "speaker-name": "the passage",
        "hard_label": 0,
        scenario: "<strong>Passage:</strong> \"The HUD budget has dropped by more than 70% since 1980,\" argues Mr. Colton. \"We've taken more than our fair share.\"",
        implicature: "Mr. Colton supports cutting the HUD budget."
    },
];

const FEEDBACK = {
    instruction_1_some_all: (color) => `
        <strong style="color: ${color};">Feedback:</strong><br><br>
        This interpretation of the utterance is quite likely. If the speaker had meant that they drink coffee every evening, they would have said something like \"I drink coffee every evening.\"<br><br>
    `,

    instruction_2: (color) => `
        <strong style="color: ${color};">Feedback:</strong><br><br>
        This interpretation of the utterance is quite unlikely. The fact that B answers with \"Please.\" given signals that they do need a tissue and would be thankful if A handed them one.<br><br>
    `,

    instruction_3: (color) => `
        <strong style="color: ${color};">Feedback:</strong><br><br>
        This interpretation is quite likely if not certain. If Mike finds the idea of ordering both Chinese and Italian dumb, then he is not likely to support doing it.<br><br>
    `,

    instruction_4: (color) => `
        <strong style="color: ${color};">Feedback:</strong><br><br>
        This interpretation is somewhat unlikely. While it's possible that A supports their son in becoming a writer, the way in which A says \"He <em>thinks</em> that's what he'd like to do\" suggests that they do not agree. This is further supported by the fact that they continue to describe their son as strong in math and science.<br><br>
    `,

    instruction_5: (color) => `
        <strong style="color: ${color};">Feedback:</strong><br><br>
        This interpretation is likely, if not very likely. Given that the passage describes Ford as wanting to diversify its portfolio and that it has already done so by acquiring Jaguar stock, this implies that further stock acquisitions are likely to come.<br><br>
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
            if (isNaN(listIndexNum) || listIndexNum < 0 || listIndexNum >= IMPLI_DATA.length) {
                throw new Error(`Invalid list index: ${listIndex}. Valid range: 0-${IMPLI_DATA.length - 1}`);
            }
        }

        const index = listIndexNum;

        currentData = IMPLI_DATA[index];

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
        `<strong>Situation:</strong> ${example.scenario}`;

    // Display alternatives
    document.getElementById('alternatives').innerHTML =
        `<strong>Possible <mark>${example['asks-for']}</mark>:</strong> ${example.implicature}`;

    // Display instruction
    let instructionText = `<strong>This is a practice example. Rate how likely you find the interpretation of what <mark>${example['speaker-name']}</mark> has said by selecting a point on the scale below.</strong>`;

    // Add important instruction for all examples
    // instructionText += ` When giving your rating, be sure to consider the context (if any) and other possible interpretations; some situations will favor more uncertain responses.`;

    document.getElementById('instruction').innerHTML = instructionText;

    // Update choice context to show the complete sentence (use example in instruction phase)
    const isSomeAll = (example.identifier || '').includes('some_all');
    const contextText = `<div${isSomeAll ? ' style="text-align:center;"' : ''}>${example.scenario}</div><br><div style="text-align:center;"><strong>Interpretation of what <mark>${example['speaker-name']}</mark> has said:</strong> ${example.implicature}</div>`;
    document.getElementById('choice-context').innerHTML = contextText;

    // Reset likelihood (slider)
    likelihoodRating = null;
    const instructionElement = document.getElementById('slider-instruction');
    if (instructionElement) {
        instructionElement.classList.remove('hide-instruction');
    }
    // Reset radio scale
    document.querySelectorAll('input[name="likelihood-scale"]').forEach(r => { r.checked = false; });

    // Clear any feedback from the previous example
    const feedbackDiv = document.getElementById('instruction-feedback');
    if (feedbackDiv) { feedbackDiv.style.display = 'none'; feedbackDiv.innerHTML = ''; }

    // Disable continue button until slider is moved
    document.getElementById('continue-btn').disabled = true;
}

// Display welcome message
function displayWelcomeMessage() {
    // Update progress
    document.getElementById('progress').textContent = 'Welcome';

    // Display welcome information
    document.getElementById('information').innerHTML =
        `<strong>Welcome to this experiment!</strong>`;

    // Display description
    document.getElementById('alternatives').innerHTML =
        `<strong>What you'll be doing:</strong><br>
        In this experiment, you'll be asked to rate the likelihood of the interpretation of utterances and passages (i.e., things that people have said). 
        You will see some text - an utterance, a dialogue or a passage - and will be asked to rate how likely an interpretation related to that text is.`;

    // Display instruction
    document.getElementById('instruction').innerHTML =
        `<strong>How it works:</strong><br>
        • We'll start with a couple of practice examples to help you understand the task. During this stage, we will give you some feedback after you complete each example.<br>
        • Then we'll move on to the real experiment.<br>
        • There are no right or wrong answers in the real experiment - we just want your honest opinions<br>
        • In some cases, you may feel that there isn't enough information to answer. That's perfectly normal, just give your best judgement!`;

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
        `<strong>Situation:</strong> ${datapoint.scenario}`;

    // Display alternatives
    document.getElementById('alternatives').innerHTML =
        `<strong>Possible <mark>${datapoint['asks-for']}</mark>:</strong><br>
        ${datapoint.implicature}`;

    // Display instruction
    document.getElementById('instruction').innerHTML =
        `<strong>Rate how likely you find the interpretation of what <mark>${example['speaker-name']}</mark> has said by selecting a point on the scale below.</strong>`;

    // Update choice context to show the complete sentence
    const isSomeAll = (datapoint.identifier || '').includes('some_all');
    const contextText = `<div${isSomeAll ? ' style="text-align:center;"' : ''}>${datapoint.scenario}</div><br><div style="text-align:center;"><strong>Interpretation of what <mark>${datapoint['speaker-name']}</mark> has said:</strong> ${datapoint.implicature}</div>`;
    document.getElementById('choice-context').innerHTML = contextText;

    // Reset likelihood (slider)
    likelihoodRating = null;
    const instructionElement = document.getElementById('slider-instruction');
    if (instructionElement) {
        // Hide instruction during main experiment phase
        instructionElement.classList.add('hide-instruction');
    }
    // Reset radio scale
    document.querySelectorAll('input[name="likelihood-scale"]').forEach(r => { r.checked = false; });

    // Ensure feedback div is hidden during the real experiment
    const feedbackDiv = document.getElementById('instruction-feedback');
    if (feedbackDiv) { feedbackDiv.style.display = 'none'; feedbackDiv.innerHTML = ''; }

    // Disable continue button until slider is moved
    document.getElementById('continue-btn').disabled = true;
}

// Handle radio scale selection
function updateLikelihoodValue() {
    const instructionElement = document.getElementById('slider-instruction');
    const checked = document.querySelector('input[name="likelihood-scale"]:checked');
    if (!checked) return;

    likelihoodRating = parseInt(checked.value);
    if (instructionElement) instructionElement.classList.add('hide-instruction');

    if (isInstructionPhase && !isWelcomePhase && instructionIndex < INSTRUCTIONAL_EXAMPLES.length) {
        // Practice phase: only allow Continue when rating is in the correct range
        const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
        const isCorrect = (example['hard_label'] === 1 && likelihoodRating >= 5) ||
            (example['hard_label'] === 0 && likelihoodRating <= 3);
        const feedbackDiv = document.getElementById('instruction-feedback');

        if (isCorrect) {
            const feedbackFn = FEEDBACK[example.identifier];
            if (feedbackDiv) {
                feedbackDiv.className = '';
                feedbackDiv.innerHTML = feedbackFn ? feedbackFn('#2e7d32') : '<strong style="color:#2e7d32;">Correct!</strong>';
                feedbackDiv.style.display = 'block';
            }
            document.getElementById('continue-btn').disabled = false;
        } else {
            if (feedbackDiv) {
                feedbackDiv.className = 'feedback-hint';
                feedbackDiv.innerHTML = '<em>Not quite! Try again to get some feedback about this example.</em>';
                feedbackDiv.style.display = 'block';
            }
            document.getElementById('continue-btn').disabled = true;
        }
    } else if (!isWelcomePhase) {
        document.getElementById('continue-btn').disabled = false;
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
        correctOption: currentDatapoint['hard_label'],
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
        responseData.likelihoodCorrect = likelihoodCorrect;

        // Store attention check result
        attentionCheckResults[currentDatapoint.attentionCheckId - 1] = {
            id: currentDatapoint.attentionCheckId,
            passed: likelihoodCorrect,
            likelihood: likelihoodRating,
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
        const scaleInputs = document.querySelectorAll('input[name="likelihood-scale"]');
        if (scaleInputs && scaleInputs.length) {
            scaleInputs.forEach(r => r.addEventListener('change', updateLikelihoodValue));
        } else {
            console.warn('Scale radio inputs not found when initializing listeners.');
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