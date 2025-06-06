function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
    name: "i0",
    start: function () {
      exp.startT = Date.now();
    }
  });

  slides.example1 = slide({
    name: "example1",
    start: function () {
    },
    button: function () {
      exp.go();
    }
  });

  slides.example2 = slide({
    name: "example2",
    start: function () {
    },
    button: function () {
      exp.go();
    }
  });

  slides.startExp = slide({
    name: "startExp",
    start: function () { },
    button: function () {
      exp.go();
    }
  });

  function validateAllocations() {
    let total = 0;
    let valid = true;
    let inputs = [];
    let errMsg = "";

    $(".alloc").each(function () {
      const val = $(this).val();
      const num = Number(val);

      if (val === "") {
        valid = false;
        errMsg = "Please fill out all 5 boxes.";
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

    return { total, valid, inputs, errMsg };
  }

  slides.main = slide({
    name: "main",
    index: 0,

    start: function () {
      $('.err').hide();
      this.display_stimulus();
    },

    display_stimulus: function () {
      if (this.index < exp.stimuli.length) {
        const stim = exp.stimuli[this.index];

        // Set the scenario and question
        const scenario = stim.scenario;
        // Add <strong>Scenario:</strong> to the beginning of the scenario
        const scenarioWithLabel = `<strong>Scenario:</strong> ${scenario}`;
        // Make the utterance green so it stands out
        const highlighted = scenarioWithLabel.replace(/\"(.*?)\"/, '\"<span style="color: #318500;">$1</span>\"');
        // Bold the question
        const question = `<strong>${stim.question}</strong>`;
        $("#trial-scenario").html(highlighted);
        $("#trial-question").html(question);

        // Set the interpretations
        for (let i = 0; i < stim.interpretations.length; i++) {
          $(`#interp${i + 1}`).text(stim.interpretations[i]);
        }

        $(".alloc").val("");
        $("#point-total").text("0");
        $("#rationale").val("");
        $(".err").hide();

        $(".alloc").off("input").on("input", () => {
          const result = validateAllocations();
          $("#point-total").text(result.total);

          if (!result.valid) {
            $(".err").text(result.errMsg).show();
          } else if (result.total !== 100) {
            $(".err").text("Total must equal 100.").show();
          } else {
            $(".err").hide();
          }
        });

        // Automatically place cursor in first input
        $(".alloc").first().focus();

      } else {
        exp.go();
      }
    },

    button: function () {
      $(".err").hide();
      const rationale = $("#rationale").val().trim();

      if (!rationale) {
        $(".err").text("Please provide a rationale.").show();
        return;
      }

      const result = validateAllocations();
      $("#point-total").text(result.total);

      if (!result.valid) {
        $(".err").text(result.errMsg).show();
        return;
      } else if (result.total !== 100) {
        $(".err").text("Total must equal 100.").show();
        return;
      }

      this.log_responses(rationale, result.inputs);
      this.index++;
      this.display_stimulus();
    },

    log_responses: function (rationale, inputs) {
      const stim = exp.stimuli[this.index];

      let trial_data = {
        id: stim.id,
        condition_index: exp.condition_index,
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

      exp.data_trials.push(trial_data);

    }
  });

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
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "additional_information": exp.add_data
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

function init() {
  exp.trials = [];
  exp.catch_trials = [];
  // Get the stimuli from the URL parameter
  var stimuli = all_stims;
  var condition_index = parseInt(get_url_param("condition", 0));
  exp.condition_index = condition_index;
  exp.stimuli = stimuli[condition_index];
  exp.stimuli = _.shuffle(exp.stimuli);
  // Shuffle each interpretation list within the stimuli
  exp.stimuli.forEach(stim => {
    stim.interpretations = _.shuffle(
      stim.interpretations);
  });
  // Get the quality check, only one for now
  var quality_check = quality_checks[0];
  // Shuffle the interpretations for the quality check
  quality_check.interpretations = _.shuffle(
    quality_check.interpretations);
  // Add the quality check in the middle of the stimuli
  exp.stimuli.splice(
    Math.floor(exp.stimuli.length / 2), 0, quality_check);
  // Structure experiment and make slides
  exp.structure = ["i0", "example1", "example2", "startExp", "main", "add_info"];
  exp.data_trials = [];
  exp.slides = make_slides(exp);
  $('.slide').hide();
  $("#start_button").click(function () { exp.go(); });
  exp.go();
}