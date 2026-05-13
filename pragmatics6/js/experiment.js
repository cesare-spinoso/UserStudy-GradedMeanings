// pragmatics6 — Reference game experiment
// Two trial types (randomly interleaved):
//   selection  — hear an utterance, click the intended object
//   production — see a highlighted target, pick a word + rate certainty 1-7

var COLOR_HEX = {
  blue:   '#2196f3',
  red:    '#e53935',
  green:  '#43a047',
  yellow: '#fdd835',
  purple: '#8e24aa',
  orange: '#fb8c00',
};

// ── Shape rendering ──────────────────────────────────────────────────────────

function renderShape(color, shape, px) {
  var hex = COLOR_HEX[color] || '#888';
  px = px || 100;
  if (shape === 'circle') {
    return '<div style="width:' + px + 'px;height:' + px + 'px;background-color:' + hex +
           ';border-radius:50%;"></div>';
  }
  if (shape === 'triangle') {
    return '<svg width="' + px + '" height="' + px + '" viewBox="0 0 100 100" style="display:block;">' +
           '<polygon points="50,5 95,95 5,95" fill="' + hex + '"/></svg>';
  }
  // square
  return '<div style="width:' + px + 'px;height:' + px + 'px;background-color:' + hex +
         ';border-radius:4px;"></div>';
}

function buildDisplayHTML(displayOrder, targetId, isClickable) {
  var html = '<div class="ref-display">';
  for (var i = 0; i < displayOrder.length; i++) {
    var obj = displayOrder[i];
    var isTarget = targetId && obj.id === targetId;
    var classes = 'ref-obj';
    if (isTarget)    classes += ' ref-obj-target';
    if (isClickable) classes += ' ref-obj-clickable';
    var dataAttr = isClickable ? 'data-obj-id="' + obj.id + '"' : '';
    html += '<div class="' + classes + '" ' + dataAttr + '>';
    html += renderShape(obj.color, obj.shape);
    html += '<div class="obj-label">' + obj.color + ' ' + obj.shape + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

function buildCertaintyHTML(namePrefix) {
  var html = '<div class="certainty-section">';
  html += '<div class="certainty-question">How certain are you about your choice?</div>';
  html += '<div class="certainty-scale-row">';
  html += '<span class="certainty-endpoint-label">Not sure at all</span>';
  html += '<div class="certainty-radios">';
  for (var i = 1; i <= 7; i++) {
    html += '<label class="certainty-radio-label">' +
            '<input type="radio" name="' + namePrefix + '-certainty" value="' + i + '">' +
            '<span class="radio-dot"></span>' +
            '<span class="radio-num">' + i + '</span>' +
            '</label>';
  }
  html += '</div>';
  html += '<span class="certainty-endpoint-label">Completely sure</span>';
  html += '</div></div>';
  return html;
}

// ── Core display logic ───────────────────────────────────────────────────────

function displayTrial(stim, slideType, isExample) {
  var $slide = $('#' + slideType);
  var shuffledDisplay = _.shuffle(stim.display.slice());
  $slide.data('shuffled-display', shuffledDisplay);
  $slide.data('stim', stim);
  $slide.find('.err').hide().text('');
  $slide.removeData('selected-id').removeData('selected-utterance');

  if (stim.task === 'selection') {
    $slide.find('.trial-type-label').html(
      '<strong>Selection trial:</strong> The speaker said: ' +
      '<span class="utterance-display">&ldquo;' + _.escape(stim.utterance) + '&rdquo;</span>. ' +
      'Click the object you think the speaker is referring to.'
    );
    $slide.find('.display-area').html(
      buildDisplayHTML(shuffledDisplay, isExample ? stim.correct_id : null, !isExample)
    );
    $slide.find('.selection-hint').toggle(!isExample);
    $slide.find('.production-area').hide();

    if (!isExample) {
      $slide.find('.ref-obj-clickable').on('click', function () {
        $slide.find('.ref-obj-clickable').removeClass('ref-obj-selected');
        $(this).addClass('ref-obj-selected');
        $slide.data('selected-id', $(this).data('obj-id'));
      });
    }

    if (isExample) {
      $slide.find('.example-explanation').html(stim.explanation || '').show();
    }

  } else {
    // production
    $slide.find('.trial-type-label').html(
      '<strong>Production trial:</strong> The highlighted object is the target. ' +
      'Choose the word you would use to refer to it.'
    );
    $slide.find('.display-area').html(buildDisplayHTML(shuffledDisplay, stim.target_id, false));
    $slide.find('.selection-hint').hide();
    $slide.find('.production-area').show();

    // Utterance choice buttons (shuffled display order for real trials, original for examples)
    var optionsToShow = isExample ? stim.utterance_options.slice() : _.shuffle(stim.utterance_options.slice());
    $slide.data('shuffled-options', optionsToShow);
    var pragmaticUtterance = stim.utterance_options[stim.pragmatic_option_idx];

    var optHtml = '<div class="utterance-options">';
    for (var j = 0; j < optionsToShow.length; j++) {
      var opt = optionsToShow[j];
      var selectedClass = (isExample && opt === pragmaticUtterance) ? ' utterance-btn-selected' : '';
      var disabledAttr = isExample ? ' disabled' : '';
      optHtml += '<button class="utterance-btn' + selectedClass + '" data-utterance="' +
                 _.escape(opt) + '"' + disabledAttr + '>&ldquo;' + _.escape(opt) + '&rdquo;</button>';
    }
    optHtml += '</div>';
    $slide.find('.utterance-choice-area').html(optHtml);

    if (!isExample) {
      $slide.find('.certainty-area').html(buildCertaintyHTML(slideType)).show();
      $slide.find('.utterance-btn').on('click', function () {
        $slide.find('.utterance-btn').removeClass('utterance-btn-selected');
        $(this).addClass('utterance-btn-selected');
        $slide.data('selected-utterance', $(this).data('utterance'));
      });
    } else {
      $slide.find('.certainty-area').hide();
    }

    if (isExample) {
      $slide.find('.example-explanation').html(stim.explanation || '').show();
    }
  }
}

// ── Validation + logging ─────────────────────────────────────────────────────

function validateTrial(stim, slideType) {
  var $slide = $('#' + slideType);
  $slide.find('.err').hide();

  if (stim.task === 'selection') {
    if (!$slide.data('selected-id')) {
      $slide.find('.err').text('Please click on an object to select it.').show();
      return false;
    }
  } else {
    if (!$slide.data('selected-utterance')) {
      $slide.find('.err').text('Please select a word to describe the highlighted object.').show();
      return false;
    }
    if (!$slide.find('input[name="' + slideType + '-certainty"]:checked').length) {
      $slide.find('.err').text('Please rate how certain you are (1–7).').show();
      return false;
    }
  }
  return true;
}

function logTrial(stim, slideType, trialPhase) {
  var $slide = $('#' + slideType);
  var shuffledDisplay = $slide.data('shuffled-display') || stim.display;
  var displayOrder = shuffledDisplay.map(function (o) { return o.id; }).join(',');

  var entry = {
    id:              stim.id,
    task:            stim.task,
    trial_phase:     trialPhase || 'main',
    context_id:      stim.context_id || null,
    is_quality_check: stim.is_quality_check || false,
    display:         stim.display.map(function (o) { return o.color + '_' + o.shape + '_' + o.id; }).join(', '),
    display_order:   displayOrder,
    time_in_minutes: (Date.now() - exp.startT) / 60000,
  };

  if (stim.task === 'selection') {
    var selectedId = $slide.data('selected-id') || null;
    entry.utterance    = stim.utterance;
    entry.correct_id   = stim.correct_id;
    entry.selected_id  = selectedId;
    entry.is_correct   = selectedId === stim.correct_id;
  } else {
    var selectedUtterance = $slide.data('selected-utterance') || null;
    var pragmaticUtterance = stim.utterance_options[stim.pragmatic_option_idx] || null;
    var $radio = $slide.find('input[name="' + slideType + '-certainty"]:checked');
    entry.target_id              = stim.target_id;
    entry.production_target_type = stim.production_target_type || null;
    entry.utterance_options      = stim.utterance_options.join(' / ');
    entry.pragmatic_utterance    = pragmaticUtterance;
    entry.selected_utterance     = selectedUtterance;
    entry.is_pragmatic_choice    = selectedUtterance === pragmaticUtterance;
    entry.certainty              = $radio.length ? parseInt($radio.val(), 10) : null;
  }

  exp.collected_data.push(entry);
}

// ── Slides ───────────────────────────────────────────────────────────────────

function make_slides(f) {
  var slides = {};

  // START
  slides.i0 = slide({
    name: 'i0',
    start: function () {
      exp.startT = Date.now();
      $('#start-instructions').html(start_instructions_html());
    }
  });

  // EXAMPLES (read-only, cycle through 2 examples)
  slides.example = slide({
    name: 'example',
    index: 0,
    start: function () {
      this.index = 0;
      $('#example').find('.example-explanation').hide();
      displayTrial(exp.example_stimuli[this.index], 'example', true);
    },
    button: function () {
      this.index++;
      if (this.index < exp.example_stimuli.length) {
        $('#example').find('.example-explanation').hide();
        displayTrial(exp.example_stimuli[this.index], 'example', true);
      } else {
        exp.go();
      }
    }
  });

  // WARMUP INTRO
  slides.startWarmup = slide({
    name: 'startWarmup',
    start: function () {
      $('#warmup-instructions').html(warmup_instructions_html());
    },
    button: function () { exp.go(); }
  });

  // WARMUP (interactive, logged)
  slides.warmup = slide({
    name: 'warmup',
    index: 0,
    start: function () {
      this.index = 0;
      displayTrial(exp.warmup_stimuli[this.index], 'warmup', false);
    },
    button: function () {
      var stim = exp.warmup_stimuli[this.index];
      if (!validateTrial(stim, 'warmup')) return;
      logTrial(stim, 'warmup', 'warmup');
      this.index++;
      if (this.index < exp.warmup_stimuli.length) {
        displayTrial(exp.warmup_stimuli[this.index], 'warmup', false);
      } else {
        exp.go();
      }
    }
  });

  // MAIN INTRO
  slides.startExp = slide({
    name: 'startExp',
    start: function () {},
    button: function () { exp.go(); }
  });

  // MAIN (interactive, logged; handles both selection and production)
  slides.main = slide({
    name: 'main',
    index: 0,
    start: function () {
      this.index = 0;
      updateProgress(this.index, exp.stimuli.length);
      displayTrial(exp.stimuli[this.index], 'main', false);
    },
    button: function () {
      var stim = exp.stimuli[this.index];
      if (!validateTrial(stim, 'main')) return;
      logTrial(stim, 'main', 'main');
      this.index++;
      if (this.index < exp.stimuli.length) {
        updateProgress(this.index, exp.stimuli.length);
        displayTrial(exp.stimuli[this.index], 'main', false);
      } else {
        exp.go();
      }
    }
  });

  // ADD INFO
  slides.add_info = slide({
    name: 'add_info',
    submit: function () {
      exp.add_data = {
        understood:       $('#understood').val()        || 'NA',
        payment_fairness: $('#payment_fairness').val()  || 'NA',
        enjoyment:        $('#enjoyment').val()         || 'NA',
        comments:         $('#comments').val()          || 'NA',
      };
      exp.data = {
        collected_data:         exp.collected_data,
        additional_information: exp.add_data,
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

function updateProgress(index, total) {
  $('#main-progress').text('Trial ' + (index + 1) + ' of ' + total);
}

// ── Init ─────────────────────────────────────────────────────────────────────

function init() {
  exp.collected_data = [];
  exp.startT = Date.now();

  exp.example_stimuli = examples_reference_games;
  exp.warmup_stimuli  = _.shuffle(warm_ups_reference_games.slice());
  exp.stimuli = _.shuffle(
    main_stimuli_reference_games[0].concat(quality_checks_reference_games)
  );

  exp.structure = [
    'i0',
    'example',
    'startWarmup',
    'warmup',
    'startExp',
    'main',
    'add_info',
  ];

  exp.slides = make_slides(exp);
  $('.slide').hide();
  $('#start_button').click(function () { exp.go(); });
  exp.go();
}
