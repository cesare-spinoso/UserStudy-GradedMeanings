function make_slides(f) {
  var slides = {};

  // START SLIDE //

  slides.i0 = slide({
    name: "i0",
    start: function () {
      exp.startT = Date.now();
      let num_interpretations;
      if (exp.num_interpretations === 4) {
        num_interpretations = "four";
      } else if (exp.num_interpretations === 5) {
        num_interpretations = "five";
      }
      $("#num-interpretations").text(num_interpretations);
    }
  });

  // Helper functions to populate slides for example, warmup, and main stimuli

  function populateInterpretations(scenarioSelector, scenarioValue, questionSelector, questionValue, interpretationSelector, interpretations, stimuli_type) {
    // First select the appropriate slide
    const $slide = $(`#${stimuli_type}`);
    // Populate the scenario
    console.log(scenarioSelector)
    console.log(scenarioValue)
    const $scenario = $slide.find(scenarioSelector);
    $scenario.empty(); // Clear any existing content
    $scenario.html(scenarioValue);
    // Populate the question
    console.log(questionSelector)
    console.log(questionValue)
    const $question = $slide.find(questionSelector);
    $question.empty(); // Clear any existing content
    $question.html(questionValue);
    // Populate the interpretations
    console.log(interpretationSelector)
    console.log(interpretations)
    const $interpretation = $slide.find(interpretationSelector);
    $interpretation.empty(); // Clear any existing content
    interpretations.forEach((interp, index) => {
      let listItem;
      if (stimuli_type === "example") {
        listItem = `
                <li>
                    ${index + 1}. <span id="example_interp${index + 1}">${interp}</span>
                    <input type="number" style="width: 60px;" disabled>
                </li>
            `;
      } else {
        listItem = `
                <li>
                    ${index + 1}. <span id="interp${index + 1}">${interp}</span>
                    <input type="number" class="alloc" min="0" max="100" style="width: 60px;">
                </li>
            `;
      }
      $interpretation.append(listItem);
    });
  }

  function validateAllocations(slide) {
    let total = 0;
    let valid = true;
    let inputs = [];
    let errMsg = "";

    var_alloc = slide.find(".alloc");

    var_alloc.each(function () {
      const val = $(this).val();
      const num = Number(val);

      if (val === "") {
        valid = false;
        errMsg = "Please fill out all boxes.";
      } else if (isNaN(num)) {
        valid = false;
        errMsg = "Please enter numbers only.";
      } else if (num < 0 || num > 100) {
        valid = false;
        errMsg = "Each number must be between 0 and 100.";
      } else {
        total += num;
        inputs.push(num);
      }
    });

    if (valid && total !== 100) {
      valid = false;
      errMsg = "Total must equal 100.";
    }

    return { total, valid, inputs, errMsg };
  }

  function display_stimulus(current_index, stimuli, stimuli_type) {
    if (current_index < stimuli.length) {
      const stim = stimuli[current_index];
      // Prettify the scenario and question
      const scenario = stim.scenario;
      // Add <strong>Scenario:</strong> to the beginning of the scenario
      const scenarioWithLabel = `<strong>Scenario:</strong> ${scenario}`;
      // Make the utterance green so it stands out
      const highlighted = scenarioWithLabel.replace(/(\"[^\"]*\").?$/, '<span style="color: #318500;">$1</span>'); // Use [^\"] and $ in case multiple quotes are present
      // Bold the question
      const question = `<strong>${stim.question}</strong>`;
      // Populate the html with the scenario, question, and interpretations
      populateInterpretations(scenarioSelector = ".scenario", scenarioValue = highlighted, questionSelector = ".question", questionValue = question, interpretationSelector = ".interpretation-list", interpretations = stim.interpretations, stimuli_type = stimuli_type);
      // If warmup or main, do point allocation validation
      if (stimuli_type === "warmup" || stimuli_type === "main") {
        // First select the appropriate slide
        const $slide = $(`#${stimuli_type}`);
        // Reset allocations and point total
        $slide.find(".alloc").val("");
        $slide.find(".point-total").text("0");
        $slide.find(".err").hide();
        // If main slide, reset rationale input
        if (stimuli_type === "main") {
          $slide.find("#rationale").val("");
        }
        // Attach input event handler so that it shows as the user types
        $slide.find(".alloc").off("input").on("input", () => {
          const result = validateAllocations(slide = $slide);
          $slide.find(".point-total").text(result.total);
          if (!result.valid) {
            $slide.find(".err").text(result.errMsg).show();
          } else {
            $slide.find(".err").hide();
          }
        });
        // Automatically place cursor in first input
        $slide.find(".alloc").first().focus();
      }
    } else {
      exp.go();
    }
  }

  // EXAMPLE SLIDE //

  slides.example = slide({
    name: "example",
    index: 0,

    start: function () {
      console.log("In the start of example slide");
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example");
    },

    button: function () {
      console.log("In the button of example slide");
      this.index++;
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example");
    }
  });

  // Helper functions for buttons/logging for warmup and main slides

  function log_responses(stim, rationale, inputs) {
    // Log the responses for the current stimulus
    let trial_data = {
      id: stim.id,
      phenomenon: exp.phenomenon,
      batch_index: exp.batch_index,
      scenario: stim.scenario,
      question: stim.question,
      rationale: rationale,
      time_in_minutes: (Date.now() - exp.startT) / 60000
    };

    // Add interpretations and allocations with a loop
    for (let i = 1; i <= stim.interpretations.length; i++) {
      trial_data[`interpretation${i}`] = stim.interpretations[i - 1];
      trial_data[`allocation${i}`] = inputs[i - 1];
    }

    exp.collected_data.push(trial_data);
  }

  function trial_button_event(current_index, stimuli_type, stimuli) {
    const $slide = $(`#${stimuli_type}`);

    $slide.find(".err").hide();

    const result = validateAllocations(slide = $slide);
    $slide.find(".point-total").text(result.total);
    console.log(result);
    console.log("Result valid: ", result.valid);

    if (!result.valid) {
      $slide.find(".err").text(result.errMsg).show();
      return false;
    }

    let rationale = "";
    if (stimuli_type == "warmup") {
      rationale = "None"; // No rationale for warmup
    } else {
      rationale = $slide.find("#rationale").val();
      if (!rationale) {
        $slide.find(".err").text("Please provide a rationale.").show();
        return false;
      }
    }
    console.log("Inside the trial_button function");
    console.log("Rationale: ", rationale);
    console.log("Inputs: ", result.inputs);

    log_responses(stim = stimuli[current_index], rationale = rationale, inputs = result.inputs);
    return true;
  }

  // WARMUP SLIDES //

  slides.startWarmup = slide({
    name: "startWarmup",
    start: function () { },
    button: function () {
      exp.go();
    }
  });

  slides.warmup = slide({
    name: "warmup",
    index: 0,

    start: function () {
      $('.err').hide();
      console.log(this.index);
      console.log(exp.warmup_stimuli);
      console.log("In the start")
      display_stimulus(current_index = this.index, stimuli = exp.warmup_stimuli, stimuli_type = "warmup");
    },

    button: function () {
      console.log(this.index);
      console.log(exp.warmup_stimuli);
      console.log("In the button")
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "warmup", stimuli = exp.warmup_stimuli);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = stimuli, stimuli_type = stimuli_type);
      }
    },
  });


  slides.startExp = slide({
    name: "startExp",
    start: function () { },
    button: function () {
      exp.go();
    }
  });

  // MAIN SLIDE //


  slides.main = slide({
    name: "main",
    index: 0,

    start: function () {
      $('.err').hide();
      console.log(this.index);
      console.log(exp.stimuli);
      console.log("In the start of main slide");
      display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main");
    },

    button: function () {
      console.log(this.index);
      console.log(exp.stimuli);
      console.log("In the button of main slide");
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "main", stimuli = exp.stimuli);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main");
      }
    },
  });

  // ADD INFO SLIDE //

  slides.add_info = slide({
    name: "add_info",
    submit: function () {
      exp.add_data = {
        understood: $('#understood').val() || "NA",
        payment_fairness: $('#payment_fairness').val() || "NA",
        enjoyment: $('#enjoyment').val() || "NA",
        comments: $("#comments").val() || "NA"
      };
      exp.data = {
        "collected_data": exp.collected_data,
        "additional_information": exp.add_data
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

function shuffle_stimuli(stimuli) {
  // Shuffle the stimuli order
  stimuli = _.shuffle(stimuli);
  // Shuffle the interpretations within each stimulus
  stimuli.forEach(stim => {
    stim.interpretations = _.shuffle(stim.interpretations);
  });
  return stimuli;
}

function init() {
  // Initialize the collected data
  exp.trials = [];
  exp.catch_trials = [];
  // Get URL parameters
  var phenomenon = get_url_param("condition", "t"); // Represents the last letter of the phenomenon, e.g. t for Decei*t*
  // Get the stimuli using the URL parameters
  var batch_index = parseInt(get_url_param("batch", 0)); // Which batch to select for that phenomenon
  if (phenomenon === "t") {
    exp.example_stimuli = examples_deceits;
    exp.warmup_stimuli = warm_ups_deceits;
    exp.stimuli = main_stimuli_deceits[batch_index];
    // Add the quality checks for Deceits
    exp.stimuli = exp.stimuli.concat(quality_checks_deceits);
  } else if (phenomenon === "h") {
    exp.example_stimuli = examples_indirectspeech;
    exp.warmup_stimuli = warm_ups_indirectspeech;
    exp.stimuli = main_stimuli_indirectspeech[batch_index];
    exp.stimuli = exp.stimuli.concat(quality_checks_indirectspeech);
  } else if (phenomenon === "y") {
    exp.example_stimuli = examples_irony;
    exp.warmup_stimuli = warm_ups_irony;
    exp.stimuli = main_stimuli_irony[batch_index];
    exp.stimuli = exp.stimuli.concat(quality_checks_irony);
  } else if (phenomenon === "m") {
    exp.example_stimuli = examples_maxims;
    exp.warmup_stimuli = warm_ups_maxims;
    exp.stimuli = main_stimuli_maxims[batch_index];
    exp.stimuli = exp.stimuli.concat(quality_checks_maxims);
  } else { // "r"
    // TODO: There are 5 metaphor interpretations, need to make their creation dynamic
    exp.example_stimuli = examples_metaphor;
    exp.warmup_stimuli = warm_ups_metaphor;
    exp.stimuli = main_stimuli_metaphor[batch_index];
    exp.stimuli = exp.stimuli.concat(quality_checks_metaphor);
  }
  // Shuffle the order of the stimuli and of the interpretations
  exp.phenomenon = phenomenon; // Store the phenomenon for later use
  exp.batch_index = batch_index; // Store the batch index for later use
  exp.warmup_stimuli = shuffle_stimuli(exp.warmup_stimuli);
  exp.stimuli = shuffle_stimuli(exp.stimuli);
  exp.num_interpretations = exp.stimuli[0].interpretations.length; // Number of interpretations per stimulus, may be different for each phenomenon
  // Structure experiment and make slides
  exp.structure = [
    "i0",
    "example",
    "startWarmup",
    "warmup",
    "startExp",
    "main",
    "add_info",
  ];
  exp.collected_data = [];
  exp.slides = make_slides(exp);
  $('.slide').hide();
  $("#start_button").click(function () { exp.go(); });
  exp.go();
}