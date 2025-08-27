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

    // Build slider UI: labels list + range input + tick labels row.
    // Example slide will display interpretations but disabled slider (no response collected), warmup & main active.
    const sliderId = `${stimuli_type}_slider`;
    const min = 0;
    const max = interpretations.length - 1;
    const initial = Math.floor((min + max) / 2);

    // Interpretations list numbered
    let listHtml = '<ol class="interp-list" style="padding-left:20px;">';
    interpretations.forEach((interp, i) => {
      listHtml += `<li id="interp${i + 1}" style="margin-bottom:4px;">${interp}</li>`;
    });
    listHtml += '</ol>';

    // Slider with ticks
    let ticks = '<div class="tick-labels" style="display:flex; justify-content:space-between; font-size:12px; margin-top:4px;">';
    interpretations.forEach((interp, i) => {
      ticks += `<span style="flex:1; text-align:center;">${i + 1}</span>`;
    });
    ticks += '</div>';

    const sliderHtml = `
      <div class="slider-wrapper" style="margin:10px 0 20px;">
        <input type="range" id="${sliderId}" class="interp-slider" min="${min}" max="${max}" step="1" value="${initial}" ${stimuli_type === 'example' ? 'disabled' : ''} style="width:100%;">
        ${ticks}
        <div style="font-size:12px; margin-top:6px;">Current selection: <span class="current-selection" data-slider="${sliderId}">${initial + 1}</span> / ${interpretations.length}</div>
        <div style="font-size:12px; margin-top:4px;">(Left = Interpretation 1; Right = Interpretation ${interpretations.length})</div>
      </div>`;

    $area.append(listHtml + sliderHtml);

    if (stimuli_type !== 'example') {
      const $slider = $area.find(`#${sliderId}`);
      $slider.off('input').on('input', function () {
        const val = parseInt(this.value, 10);
        $area.find('.current-selection').text(val + 1);
        // highlight selected interpretation in list
        $area.find('li').css({ 'font-weight': 'normal', 'background': 'transparent' });
        $area.find(`#interp${val + 1}`).css({ 'font-weight': 'bold', 'background': '#efe8f3' });
      });
      // trigger initial highlight
      $slider.trigger('input');
    }
  }

  function getSliderSelection(slide) {
    const $slider = slide.find('.interp-slider');
    if ($slider.length === 0) return { valid: false, selectedIndex: null, errMsg: 'Slider missing.' };
    const val = $slider.val();
    if (val === '' || val == null) return { valid: false, selectedIndex: null, errMsg: 'Please move the slider.' };
    return { valid: true, selectedIndex: parseInt(val, 10), errMsg: '' };
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
      // If there is an alternative statement
      if (is_alt) {
        // Add the alternative utterance html to the highlighted scenario
        highlighted += `<br>${alternative_utterance_html(speaker_name = stim.speaker_name, alternative_utterance = stim.stronger_alternative)}`;
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

  function add_example_allocations(slideSelector, interpretations, exampleAllocations) {
    // First select the appropriate slide
    const $slide = $(`#${slideSelector}`);
    // Find the examples allocations tag
    const $exampleAllocations = $slide.find(".possible-allocations");
    // Clear any existing content
    $exampleAllocations.empty();
    // Add the example allocations html if using alternatives
    if (exp.is_alt) {
      example_allocations_html = create_feedback(interpretationKeys = interpretations, exampleAllocations = exampleAllocations);
      $exampleAllocations.html(example_allocations_html);
    }
  }

  slides.example = slide({
    name: "example",
    index: 0,

    start: function () {
      console.log("In the start of example slide");
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", is_alt = exp.is_alt);
      add_example_allocations(
        slideSelector = "example",
        interpretations = exp.example_stimuli[0].interpretations,
        exampleAllocations = exp.example_allocations,
      );
    },

    button: function () {
      console.log("In the button of example slide");
      this.index++;
      display_stimulus(current_index = this.index, stimuli = exp.example_stimuli, stimuli_type = "example", is_alt = exp.is_alt);
    }
  });

  // Helper functions for buttons/logging for warmup and main slides

  function log_responses(stim, rationale, selectedIndex, is_alt) {
    let trial_data = {
      id: stim.id,
      is_alt: is_alt,
      phenomenon: exp.phenomenon,
      batch_index: exp.batch_index,
      scenario: stim.scenario,
      question: stim.question,
      alternative_utterance: stim.stronger_alternative,
      rationale: rationale,
      selected_index: selectedIndex + 1,
      time_in_minutes: (Date.now() - exp.startT) / 60000
    };
    // Store interpretations
    for (let i = 1; i <= stim.interpretations.length; i++) {
      trial_data[`interpretation${i}`] = stim.interpretations[i - 1];
    }
    // One-hot style selection (keep schema similarity): allocation = 100 for chosen, 0 otherwise
    for (let i = 1; i <= stim.interpretations.length; i++) {
      trial_data[`allocation${i}`] = (i - 1 === selectedIndex) ? 100 : 0;
    }

    exp.collected_data.push(trial_data);
  }

  function trial_button_event(current_index, stimuli_type, stimuli, is_alt) {
    const $slide = $(`#${stimuli_type}`);

    $slide.find(".err").hide();
    const sel = getSliderSelection($slide);
    if (!sel.valid) { $slide.find('.err').text(sel.errMsg).show(); return false; }

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
    log_responses(stim = stimuli[current_index], rationale = rationale, selectedIndex = sel.selectedIndex, is_alt = is_alt);
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