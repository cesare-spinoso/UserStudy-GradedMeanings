function make_slides(f) {
  var slides = {};

  // START SLIDE //

  slides.i0 = slide({
    name: "i0",
    start: function () {
      exp.startT = Date.now();
      let num_interpretations;
      if (exp.num_interpretations === 2) {
        num_interpretations = "two";
      } else if (exp.num_interpretations === 4) {
        num_interpretations = "four";
      } else if (exp.num_interpretations === 5) {
        num_interpretations = "five";
      }
      $("#start-instructions").html(start_instructions_html(condition = exp.condition));
      $("#num-interpretations").text(num_interpretations);
    }
  });

  // Helper function to build scenario text based on condition
  function buildScenarioText(stim, condition) {
    // condition: 0 and 1 show a single utterance, 2 and 3 show a choice between two utterances
    const mainName = stim.mainName || "(Speaker)";
    const weakerUtterance = stim.weaker_utterance || "";
    const strongerUtterance = stim.stronger_utterance || "";

    let scenarioText = stim.scenario;

    if (condition === 0) {
      // Character says an utterance
      scenarioText += ` ${mainName} says, "<span style="color: #318500;">${_.escape(weakerUtterance)}</span>"`;
    } else if (condition === 1) {
      // Character says an utterance
      scenarioText += ` ${mainName} says, "<span style="color: #318500;">${_.escape(strongerUtterance)}</span>"`;
    } else if (condition === 2 || condition === 3) {
      // Visual choice display for alternatives
      scenarioText += ` ${mainName} is choosing between two ways to express themselves.`;
    }

    return `<strong>Scenario:</strong> ${scenarioText}`;
  }

  // Helper function to build visual alternatives display for conditions 2/3
  function buildAlternativesDisplay(stim) {
    const utterance1 = stim.weaker_utterance || "";
    const utterance2 = stim.stronger_utterance || "";
    return `
      <div class="alternatives-display">
        <div class="alternative-option">
          <span>"${_.escape(utterance1)}"</span>
        </div>
        <div class="alternative-option">
          <span>"${_.escape(utterance2)}"</span>
        </div>
      </div>
    `;
  }

  // Helper functions to populate slides for example, warmup, and main stimuli

  function populateInterpretations(scenarioSelector, scenarioValue, questionSelector, questionValue, interpretationAreaSelector, interpretations, stimuli_type, condition, isAlternativesDisplay) {
    const $slide = $(`#${stimuli_type}`);
    $slide.find(scenarioSelector).empty().html(scenarioValue);
    $slide.find(questionSelector).empty().html(questionValue);
    const $area = $slide.find(interpretationAreaSelector);
    $area.empty();

    // Randomize left/right interpretation assignment
    const shuffled = _.shuffle([0, 1]);
    const leftInterpIdx = shuffled[0];
    const rightInterpIdx = shuffled[1];
    const leftInterp = interpretations[leftInterpIdx];
    const rightInterp = interpretations[rightInterpIdx];

    // Store which interpretation is on which side for logging
    $area.data('left-interp-idx', leftInterpIdx);
    $area.data('right-interp-idx', rightInterpIdx);

    const disabledAttr = (stimuli_type === 'example') ? 'disabled' : '';

    let htmlContent = '';

    // Add alternatives display for conditions 2/3
    if (isAlternativesDisplay) {
      htmlContent += isAlternativesDisplay;
    }

    htmlContent +=
      '<div class="interp-slider-section">' +
        '<div class="slider-instruction">Click and drag anywhere along the slider to indicate your interpretation!</div>' +
        '<input type="range" min="0" max="100" step="1" value="50"' +
               ' class="interp-slider" id="' + stimuli_type + '_slider" ' + disabledAttr + '>' +
        '<div class="interp-endpoint-labels">' +
          '<span class="interp-endpoint-left">' + _.escape(leftInterp) + '</span>' +
          '<span class="interp-endpoint-right">' + _.escape(rightInterp) + '</span>' +
        '</div>' +
        '<div class="slider-scale-labels">' +
          '<span>0</span>' +
          '<span style="font-weight: bold; color: #800080;">50<br><span style="font-size: 0.85em; font-weight: normal;">Neither</span></span>' +
          '<span>100</span>' +
        '</div>' +
      '</div>' +
      '<div class="interp-value-row">' +
        '<span class="interp-value-num" id="' + stimuli_type + '_value_num"></span>' +
      '</div>';

    $area.append(htmlContent);

    // Set example slider to midpoint, disable it, and show value immediately
    if (stimuli_type === 'example' && typeof exp !== 'undefined') {
      const $exSlider = $area.find('#' + stimuli_type + '_slider');
      $exSlider.val(50).prop('disabled', true).addClass('thumb-visible slider-interacted');
      $area.find('#' + stimuli_type + '_value_num').text(50).addClass('show-value');
      $area.find('.slider-instruction').addClass('hide-instruction');
    }

    const $slider = $area.find('#' + stimuli_type + '_slider');
    if ($slider.length && !$slider.prop('disabled')) {
      // On first touch/click: reveal thumb, mark interacted, hide instruction, show value
      $slider.one('mousedown touchstart', function() {
        const $s = $(this);
        $s.addClass('thumb-visible slider-interacted');
        $s.closest('.interp-slider-section').find('.slider-instruction').addClass('hide-instruction');
        $area.find('#' + stimuli_type + '_value_num').text($s.val()).addClass('show-value');
      });
      // Update value display as slider moves
      $slider.off('input change').on('input change', function() {
        $area.find('#' + stimuli_type + '_value_num').text($(this).val());
      });
      setTimeout(function() { $slider.focus(); }, 0);
    }
  }

  function getSliderSelection(slide) {
    const $slider = slide.find('.interp-slider');
    if ($slider.length === 0) return { valid: false, slider_value: null, errMsg: 'Slider missing.' };
    const val = $slider.val();
    if (val === '' || val == null) return { valid: false, slider_value: null, errMsg: 'Please move the slider.' };
    return { valid: true, slider_value: parseInt(val, 10), errMsg: '' };
  }

  function display_stimulus(current_index, stimuli, stimuli_type, condition) {
    if (current_index < stimuli.length) {
      const stim = stimuli[current_index];
      // Build scenario text based on condition
      const scenarioWithLabel = buildScenarioText(stim, condition);
      // Bold the question
      const question = `<strong>${stim.question}</strong>`;
      // Build alternatives display for conditions 2/3
      let alternativesDisplay = '';
      if (condition === 2 || condition === 3) {
        alternativesDisplay = buildAlternativesDisplay(stim);
      }
      // Populate the html with the scenario, question, and interpretations
      populateInterpretations(
        scenarioSelector = ".scenario",
        scenarioValue = scenarioWithLabel,
        questionSelector = ".question",
        questionValue = question,
        interpretationAreaSelector = ".interpretation-area",
        interpretations = stim.interpretations,
        stimuli_type = stimuli_type,
        condition = condition,
        isAlternativesDisplay = alternativesDisplay
      );
      if (stimuli_type === 'warmup' || stimuli_type === 'main') {
        const $slide = $(`#${stimuli_type}`);
        $slide.find('.err').hide();
        if (stimuli_type === 'main') { $slide.find('#rationale').val(''); }
      }
    } else {
      exp.go();
    }
  }

  // EXAMPLE SLIDE //

  // Removed allocation example table logic per updated design
  function add_example_allocations() { /* no-op */ }

  slides.example = slide({
    name: "example",
    index: 0,

    start: function () {
      console.log("In the start of example slide");
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", condition = exp.condition);
      add_example_allocations();
    },

    button: function () {
      console.log("In the button of example slide");
      this.index++;
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", condition = exp.condition);
    }
  });

  // Helper functions for buttons/logging for warmup and main slides

  // Record slider_value for pragmatics4 with condition and utterances
  function log_responses(stim, rationale, slider_value, condition, leftInterpIdx, rightInterpIdx) {
    let trial_data = {
      id: stim.id,
      condition: condition,
      phenomenon: exp.phenomenon,
      batch_index: exp.batch_index,
      scenario: stim.scenario,
      question: stim.question,
      weaker_utterance: stim.weaker_utterance || null,
      stronger_utterance: stim.stronger_utterance || null,
      rationale: rationale,
      slider_value: (typeof slider_value !== 'undefined' ? slider_value : null),
      time_in_minutes: (Date.now() - exp.startT) / 60000,
      interpretation_left: stim.interpretations[leftInterpIdx],
      interpretation_right: stim.interpretations[rightInterpIdx],
      left_option_index: leftInterpIdx,
      right_option_index: rightInterpIdx,
    };
    exp.collected_data.push(trial_data);
  }

  function trial_button_event(current_index, stimuli_type, stimuli, condition) {
    const $slide = $(`#${stimuli_type}`);
    $slide.find(".err").hide();

    // Get slider selection
    const $slider = $slide.find('.interp-slider');
    if ($slider.length === 0) {
      $slide.find('.err').text('Slider missing.').show();
      return false;
    }
    if (!$slider.hasClass('slider-interacted')) {
      $slide.find('.err').text('Please move the slider to indicate your interpretation.').show();
      return false;
    }
    const sliderValue = $slider.val();

    // Get rationale (optional for main trials, not shown for warmup)
    let rationale = "";
    if (stimuli_type !== "warmup") {
      rationale = $slide.find("#rationale").val() || ""; // Optional - can be empty
    }

    // Get the interpretation indices for left and right positions
    const $area = $slide.find(".interpretation-area");
    const leftInterpIdx = $area.data('left-interp-idx') || 0;
    const rightInterpIdx = $area.data('right-interp-idx') || 1;

    log_responses(stim = stimuli[current_index], rationale = rationale, slider_value = parseInt(sliderValue, 10), condition = condition, leftInterpIdx = leftInterpIdx, rightInterpIdx = rightInterpIdx);
    return true;
  }

  // WARMUP SLIDES //

  slides.startWarmup = slide({
    name: "startWarmup",
    start: function () {
      $("#warmup-instructions").html(warmup_instructions_html(condition = exp.condition));
    },
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
      console.log("In the start");
      display_stimulus(current_index = this.index, stimuli = exp.warmup_stimuli, stimuli_type = "warmup", condition = exp.condition);
    },

    button: function () {
      console.log(this.index);
      console.log(exp.warmup_stimuli);
      console.log("In the button");
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "warmup", stimuli = exp.warmup_stimuli, condition = exp.condition);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = exp.warmup_stimuli, stimuli_type = "warmup", condition = exp.condition);
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
      display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main", condition = exp.condition);
    },

    button: function () {
      console.log(this.index);
      console.log(exp.stimuli);
      console.log("In the button of main slide");
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "main", stimuli = exp.stimuli, condition = exp.condition);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main", condition = exp.condition);
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
  // Don't do this if you're using a slider!
  // stimuli.forEach(stim => {
  //   stim.interpretations = _.shuffle(stim.interpretations);
  // });
  return stimuli;
}

function init() {
  // Initialize the collected data
  exp.trials = [];
  exp.catch_trials = [];
  // Get the stimuli using the URL parameters
  var batch_index = parseInt(get_url_param("batch", 0)); // Which batch to select for that phenomenon
  var condition = parseInt(get_url_param("condition", 0)); // Which experimental condition (0-3)
  exp.example_stimuli = examples_gradable_meanings;
  exp.warmup_stimuli = warm_ups_gradable_meanings;
  exp.stimuli = main_stimuli_gradable_meanings[batch_index];
  exp.stimuli = exp.stimuli.concat(quality_checks_gradable_meanings);
  // Shuffle the order of the stimuli
  exp.phenomenon = "gradable_meanings"; // Store the phenomenon for later use
  exp.condition = condition; // Store the condition (0-3)
  exp.batch_index = batch_index; // Store the batch index for later use
  exp.example_stimuli = shuffle_stimuli(exp.example_stimuli);
  exp.warmup_stimuli = shuffle_stimuli(exp.warmup_stimuli);
  exp.stimuli = shuffle_stimuli(exp.stimuli);
  exp.num_interpretations = exp.stimuli[0].interpretations.length; // Should be 2 for pragmatics4
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