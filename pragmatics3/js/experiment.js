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
      $("#start-instructions").html(start_instructions_html(is_alt = exp.is_alt));
      $("#num-interpretations").text(num_interpretations);
    }
  });

  // Helper functions to populate slides for example, warmup, and main stimuli

  function populateInterpretations(scenarioSelector, scenarioValue, questionSelector, questionValue, interpretationAreaSelector, interpretations, stimuli_type) {
    const $slide = $(`#${stimuli_type}`);
    const $scenario = $slide.find(scenarioSelector).empty().html(scenarioValue);
    const $question = $slide.find(questionSelector).empty().html(questionValue);
    const $area = $slide.find(interpretationAreaSelector);
    $area.empty();
    // Only two bins: show both interpretations and numeric input for each
    const interp1 = interpretations[0];
    const interp2 = interpretations[1];
    const disabledAttr = (stimuli_type === 'example') ? 'disabled' : '';
    const html = `
      <div class="point-allocation" style="margin:18px 0 18px;">
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:10px;">
          <label style="flex:1;">${_.escape(interp1)}</label>
          <input type="number" min="0" max="100" step="1" class="point-input" id="${stimuli_type}_alloc1" style="width:60px;" ${disabledAttr}> points
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <label style="flex:1;">${_.escape(interp2)}</label>
          <input type="number" min="0" max="100" step="1" class="point-input" id="${stimuli_type}_alloc2" style="width:60px;" ${disabledAttr}> points
        </div>
        <div style="margin-top:10px; display:flex; align-items:center; gap:12px;">
          <div class="allocation-hint" style="color:#666; font-size:0.95em;">Total must add up to 100 points.</div>
          <div id="${stimuli_type}_running_total" style="color:#333; font-weight:600; margin-left:8px;">Total: 0/100</div>
        </div>
      </div>`;
    $area.append(html);

    // If this is the example slide, prefill example allocations and keep inputs disabled
    if (stimuli_type === 'example' && typeof exp !== 'undefined' && exp.example_allocations) {
      const ex1 = exp.example_allocations[0] || 0;
      const ex2 = exp.example_allocations[1] || 0;
      $area.find(`#${stimuli_type}_alloc1`).val(ex1).prop('disabled', true);
      $area.find(`#${stimuli_type}_alloc2`).val(ex2).prop('disabled', true);
      $area.find(`#${stimuli_type}_running_total`).text(`Total: ${ex1 + ex2}/100`);
    }

    // Handler to update running total live when user types
    function updateRunningTotal() {
      const v1 = parseInt($area.find(`#${stimuli_type}_alloc1`).val(), 10);
      const v2 = parseInt($area.find(`#${stimuli_type}_alloc2`).val(), 10);
      const n1 = isNaN(v1) ? 0 : v1;
      const n2 = isNaN(v2) ? 0 : v2;
      const sum = n1 + n2;
      const $total = $area.find(`#${stimuli_type}_running_total`);
      $total.text(`Total: ${sum}/100`);
      // Visual hint if sum is exactly 100
      if (sum === 100) {
        $total.css('color', '#138000');
      } else {
        $total.css('color', '#333');
      }
    }

    // Attach input listeners (only for enabled inputs)
    $area.find('.point-input').off('input').on('input', function () {
      // clamp values to [0,100]
      let val = parseInt($(this).val(), 10);
      if (!isNaN(val)) {
        if (val < 0) { val = 0; }
        if (val > 100) { val = 100; }
        $(this).val(val);
      }
      updateRunningTotal();
    });

    // Autofocus the first input when a new stimulus appears (skip if disabled)
    const $firstInput = $area.find(`#${stimuli_type}_alloc1`);
    if (!$firstInput.prop('disabled')) {
      // small timeout to ensure element is fully in DOM
      setTimeout(function () { $firstInput.focus(); }, 0);
    }
  }

  function getPointAllocations(slide) {
    const $inputs = slide.find('.point-input');
    if ($inputs.length !== 2) return { valid: false, allocations: [null, null], errMsg: 'Inputs missing.' };
    const val1 = parseInt($inputs.eq(0).val(), 10);
    const val2 = parseInt($inputs.eq(1).val(), 10);
    if (isNaN(val1) || isNaN(val2)) return { valid: false, allocations: [val1, val2], errMsg: 'Please enter a value for both bins.' };
    if (val1 < 0 || val2 < 0) return { valid: false, allocations: [val1, val2], errMsg: 'Points must be non-negative.' };
    if (val1 + val2 !== 100) return { valid: false, allocations: [val1, val2], errMsg: 'Total must be exactly 100 points.' };
    return { valid: true, allocations: [val1, val2], errMsg: '' };
  }

  function display_stimulus(current_index, stimuli, stimuli_type, is_alt) {
    if (current_index < stimuli.length) {
      const stim = stimuli[current_index];
      // Prettify the scenario and question
      const scenario = stim.scenario;
      // Add <strong>Scenario:</strong> to the beginning of the scenario
      const scenarioWithLabel = `<strong>Scenario:</strong> ${scenario}`;
      // Make the utterance green so it stands out
      var highlighted = scenarioWithLabel.replace(/(\"[^\"]*\").?$/, '<span style="color: #318500;">$1</span>'); // Use [^\"] and $ in case multiple quotes are present

  if (is_alt) {
  const otherName = stim.secondName || '(Partner)';
  const mainName = stim.mainName || stim.speaker_name || '(Speaker)';
    const altUtterance = `<span style="color: #318500;">\"${stim.stronger_alternative}\"</span>`;
    const cancellationText = stim.alternative_cancellation || "It's not that extreme.";
    const cancellation = `<span style=\"color: #318500;\">\"${_.escape(cancellationText)}\"</span>`;
  highlighted += ` ${otherName} says ${altUtterance} ${mainName} responds ${cancellation}`;
  }
      // Bold the question
      const question = `<strong>${stim.question}</strong>`;
      // Populate the html with the scenario, question, and interpretations
      populateInterpretations(
        scenarioSelector = ".scenario",
        scenarioValue = highlighted,
        questionSelector = ".question",
        questionValue = question,
        interpretationAreaSelector = ".interpretation-area",
        interpretations = stim.interpretations,
        stimuli_type = stimuli_type
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

  // Removed allocation example table logic per updated design (create_feedback now returns empty string).
  function add_example_allocations() { /* no-op */ }

  slides.example = slide({
    name: "example",
    index: 0,

    start: function () {
      console.log("In the start of example slide");
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", is_alt = exp.is_alt);
  add_example_allocations();
    },

    button: function () {
      console.log("In the button of example slide");
      this.index++;
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", is_alt = exp.is_alt);
    }
  });

  // Helper functions for buttons/logging for warmup and main slides

  function log_responses(stim, rationale, allocations, is_alt) {
    let trial_data = {
      id: stim.id,
      is_alt: is_alt,
      phenomenon: exp.phenomenon,
      batch_index: exp.batch_index,
      scenario: stim.scenario,
      question: stim.question,
      alternative_utterance: stim.stronger_alternative,
      alternative_cancellation: stim.alternative_cancellation || null,
      mainName: stim.mainName || stim.speaker_name || null,
      secondName: stim.secondName || null,
      rationale: rationale,
      allocation1: allocations[0],
      allocation2: allocations[1],
      time_in_minutes: (Date.now() - exp.startT) / 60000
    };
    trial_data['interpretation1'] = stim.interpretations[0];
    trial_data['interpretation2'] = stim.interpretations[1];
    exp.collected_data.push(trial_data);
  }

  function trial_button_event(current_index, stimuli_type, stimuli, is_alt) {
    const $slide = $(`#${stimuli_type}`);
    $slide.find(".err").hide();
    const sel = getPointAllocations($slide);
    if (!sel.valid) { $slide.find('.err').text(sel.errMsg).show(); return false; }
    let rationale = "";
    if (stimuli_type == "warmup") {
      rationale = "None";
    } else {
      rationale = $slide.find("#rationale").val();
      if (!rationale) {
        $slide.find(".err").text("Please provide a rationale.").show();
        return false;
      }
    }
    log_responses(stim = stimuli[current_index], rationale = rationale, allocations = sel.allocations, is_alt = is_alt);
    return true;
  }

  // WARMUP SLIDES //

  slides.startWarmup = slide({
    name: "startWarmup",
    start: function () {
      $("#warmup-instructions").html(warmup_instructions_html(is_alt = exp.is_alt));
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
      display_stimulus(current_index = this.index, stimuli = exp.warmup_stimuli, stimuli_type = "warmup", is_alt = exp.is_alt);
    },

    button: function () {
      console.log(this.index);
      console.log(exp.warmup_stimuli);
      console.log("In the button");
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "warmup", stimuli = exp.warmup_stimuli, is_alt = exp.is_alt);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = stimuli, stimuli_type = stimuli_type, is_alt = exp.is_alt);
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
      display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main", is_alt = exp.is_alt);
    },

    button: function () {
      console.log(this.index);
      console.log(exp.stimuli);
      console.log("In the button of main slide");
      trial_result = trial_button_event(current_index = this.index, stimuli_type = "main", stimuli = exp.stimuli, is_alt = exp.is_alt);
      if (trial_result) {
        this.index++;
        display_stimulus(current_index = this.index, stimuli = exp.stimuli, stimuli_type = "main", is_alt = exp.is_alt);
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
  // IMPORTANT NOTE ABOUT PROLIFERATE: When four vs five interpretations are used, the API only captures the four interpretations when
  // you do getresults on the python side.
  // Initialize the collected data
  exp.trials = [];
  exp.catch_trials = [];
  // Get the stimuli using the URL parameters
  var batch_index = parseInt(get_url_param("batch", 0)); // Which batch to select for that phenomenon
  var is_alt = parseInt(get_url_param("alt", 0)); // Whether to use the alternative stimuli or not
  exp.example_stimuli = examples_gradable_meanings;
  exp.warmup_stimuli = warm_ups_gradable_meanings;
  exp.stimuli = main_stimuli_gradable_meanings[batch_index];
  exp.stimuli = exp.stimuli.concat(quality_checks_gradable_meanings);
  // Shuffle the order of the stimuli and of the interpretations
  exp.phenomenon = "gradable_meanings"; // Store the phenomenon for later use
  exp.is_alt = is_alt; // Store whether this is the alternative stimuli or not
  exp.batch_index = batch_index; // Store the batch index for later use
  exp.example_stimuli = shuffle_stimuli(exp.example_stimuli);
  exp.warmup_stimuli = shuffle_stimuli(exp.warmup_stimuli);
  exp.stimuli = shuffle_stimuli(exp.stimuli);
  exp.num_interpretations = exp.stimuli[0].interpretations.length; // Number of interpretations per stimulus, may be different for each phenomenon
  // Get the example allocations for gradable meanings
  exp.example_allocations = example_allocations;
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