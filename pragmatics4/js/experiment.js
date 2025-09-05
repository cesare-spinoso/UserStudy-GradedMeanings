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
    // For pragmatics4 we use a continuous slider from 0..100 where the two extremes map to the two interpretations
  // interpretations array will be used directly for tick labels
    const disabledAttr = (stimuli_type === 'example') ? 'disabled' : '';
    const sliderHtml = `
      <div class="slider-allocation" style="margin:18px 0 18px;">
        <div style="position:relative; width:100%;">
          <input type="range" min="0" max="100" step="1" value="50" class="interp-slider" id="${stimuli_type}_slider" ${disabledAttr} style="width:100%; display:block;">
          <!-- ticks overlay positioned exactly at 0,25,50,75,100% -->
          <div class="ticks-overlay" aria-hidden="true">
            <div class="tick" style="left:0%;"><span class="tick-mark"></span><span class="tick-label">${_.escape(interpretations[0] || '')}</span></div>
            <div class="tick" style="left:25%;"><span class="tick-mark"></span><span class="tick-label">${_.escape(interpretations[1] || '')}</span></div>
            <div class="tick" style="left:50%;"><span class="tick-mark"></span><span class="tick-label">${_.escape(interpretations[2] || '')}</span></div>
            <div class="tick" style="left:75%;"><span class="tick-mark"></span><span class="tick-label">${_.escape(interpretations[3] || '')}</span></div>
            <div class="tick" style="left:100%;"><span class="tick-mark"></span><span class="tick-label">${_.escape(interpretations[4] || '')}</span></div>
          </div>
        </div>

        <!-- numeric slider value for testing -->
        <div style="margin-top:10px; color:#666; font-size:0.95em; display:flex; justify-content:center;">
          <div id="${stimuli_type}_slider_value_display">Slider value: 50</div>
        </div>

        <div style="margin-top:6px; color:#666; font-size:0.95em;">Move the slider to indicate your interpretation. Provide a short rationale below.</div>
      </div>`;
    $area.append(sliderHtml);

    // If example slide, set slider to midpoint or derive from example_allocations if available
    if (stimuli_type === 'example' && typeof exp !== 'undefined') {
      let value = 50;
      if (exp.example_allocations && exp.example_allocations.length === 2) {
        const a = exp.example_allocations[0] || 0;
        const b = exp.example_allocations[1] || 0;
        const sum = a + b;
        if (sum > 0) { value = Math.round((a / sum) * 100); }
      }
      const $slider = $area.find(`#${stimuli_type}_slider`);
      $slider.val(value).prop('disabled', true);
    }

  // Update numeric display on slider input (visible for testing)
  $area.find('.interp-slider').off('input').on('input', function () {
    const v = $(this).val();
    $area.find(`#${stimuli_type}_slider_value_display`).text(`Slider value: ${v}`);
  });

    // Autofocus the slider when a new stimulus appears (skip if disabled)
    const $firstControl = $area.find(`#${stimuli_type}_slider`);
    if ($firstControl.length && !$firstControl.prop('disabled')) {
      setTimeout(function () { $firstControl.focus(); }, 0);
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

  // Slider selection helper for slider-based UI (pragmatics4)
  function getSliderSelection(slide) {
    const $slider = slide.find('.interp-slider');
    if ($slider.length === 0) return { valid: false, slider_value: null, errMsg: 'Slider missing.' };
    const val = $slider.val();
    if (val === '' || val == null) return { valid: false, slider_value: null, errMsg: 'Please move the slider.' };
    return { valid: true, slider_value: parseInt(val, 10), errMsg: '' };
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

  // Now we only record slider_value for pragmatics4 (allocations removed)
  function log_responses(stim, rationale, allocations, is_alt, slider_value) {
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
      slider_value: (typeof slider_value !== 'undefined' ? slider_value : null),
      time_in_minutes: (Date.now() - exp.startT) / 60000
    };
    trial_data['interpretation1'] = stim.interpretations[0];
    trial_data['interpretation2'] = stim.interpretations[1];
    exp.collected_data.push(trial_data);
  }

  function trial_button_event(current_index, stimuli_type, stimuli, is_alt) {
    const $slide = $(`#${stimuli_type}`);
    $slide.find(".err").hide();
    // Support both point-allocation and slider-based UI: prefer slider when present
    let sel;
    if ($slide.find('.interp-slider').length > 0) {
      sel = getSliderSelection($slide);
      if (!sel.valid) { $slide.find('.err').text(sel.errMsg).show(); return false; }
    } else {
      sel = getPointAllocations($slide);
      if (!sel.valid) { $slide.find('.err').text(sel.errMsg).show(); return false; }
    }
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
    if (sel.hasOwnProperty('slider_value')) {
      log_responses(stim = stimuli[current_index], rationale = rationale, allocations = null, is_alt = is_alt, sel.slider_value);
    } else {
      log_responses(stim = stimuli[current_index], rationale = rationale, allocations = sel.allocations, is_alt = is_alt);
    }
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