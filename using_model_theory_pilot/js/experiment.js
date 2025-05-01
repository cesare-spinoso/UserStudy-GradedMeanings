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
      setTimeout(() => {
        $("#psuedo_true_option1").prop("disabled", false);
        $("#psuedo_true_option1").prop("checked", true);
        $("#psuedo_true_option1").prop("disabled", true);
      }, 10);
    },
    button: function () {
      exp.go();
    }
  });


  slides.example2 = slide({
    name: "example2",
    start: function () {
      setTimeout(() => {
        $("#psuedo_false_option2").prop("disabled", false);
        $("#psuedo_false_option2").prop("checked", true);
        $("#psuedo_false_option2").prop("disabled", true);
      }, 10);
    },
    button: function () {
      exp.go();
    }
  });


  slides.startExp = slide({
    name: "startExp",
    start: function () {
    },
    button: function () {
      exp.go();
    }
  });

  slides.main = slide({
    name: "main",
    index: 0, // Track current stimulus index

    start: function () {
      $('.err').hide();
      this.display_stimulus();
    },

    display_stimulus: function () {
      if (this.index < exp.stimuli.length) {
        const stim = exp.stimuli[this.index];

        // Fill in scenario and interpretations
        console.log("Logging stimulus:");
        console.log(stim);
        $("#trial-scenario").text(stim.scenario);
        $("#trial-question").text(stim.question);
        $("#interp1").text(stim.interpretation1);
        $("#interp2").text(stim.interpretation2);
        $("#interp3").text(stim.interpretation3);
        $("#interp4").text(stim.interpretation4);
        $("#interp5").text(stim.interpretation5);

        // Reset inputs
        $(".alloc").val("");
        $("#point-total").text("0");
        $("#rationale").val("");
        $(".err").hide();

        // Live validation
        $(".alloc").off("input").on("input", () => {
          let total = 0;
          let valid = true;
          let errMsg = "";

          $(".alloc").each(function () {
            const val = $(this).val();
            const num = Number(val);

            if (val === "") return;
            if (isNaN(num)) {
              valid = false;
              errMsg = "Please enter numbers only.";
            } else if (num < 0 || num > 100) {
              valid = false;
              errMsg = "Each number must be between 0 and 100.";
            } else {
              total += num;
            }
          });

          $("#point-total").text(total);

          if (!valid) {
            $(".err").text(errMsg).show();
          } else if (total !== 100) {
            $(".err").text("Total must equal 100.").show();
          } else {
            $(".err").hide();
          }
        });

      } else {
        exp.go(); // Done with all stimuli
      }
    },

    button: function () {
      $(".err").hide();
      const rationale = $("#rationale").val().trim();

      // Validate rationale
      if (!rationale) {
        $(".err").text("Please provide a rationale.").show();
        return;
      }

      // Validate allocations
      let total = 0;
      let inputs = [];
      let valid = true;
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

      $("#point-total").text(total);

      if (!valid) {
        $(".err").text(errMsg).show();
        return;
      } else if (total !== 100) {
        $(".err").text("Total must equal 100.").show();
        return;
      }

      // If all validations pass
      this.log_responses(rationale, inputs);
      this.index++;
      this.display_stimulus();
    },

    log_responses: function (rationale, inputs) {
      const stim = exp.stimuli[this.index];

      exp.data_trials.push({
        scenario: stim.scenario,
        question: stim.question,
        interpretation1: stim.interpretation1,
        interpretation2: stim.interpretation2,
        interpretation3: stim.interpretation3,
        interpretation4: stim.interpretation4,
        interpretation5: stim.interpretation5,
        allocation1: inputs[0],
        allocation2: inputs[1],
        allocation3: inputs[2],
        allocation4: inputs[3],
        allocation5: inputs[4],
        rationale: rationale,
        time_in_minutes: (Date.now() - exp.startT) / 60000
      });
    }
  });


  slides.add_info = slide({
    name: "add_info",
    submit: function () {
      exp.add_data = {
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
  var stimuli = all_stims;
  var list_index = parseInt(get_url_param("list", 0)); // TODO: Change this with a URL parameter
  exp.stimuli = stimuli[list_index]; // Load stimulus sublist
  exp.stimuli = _.shuffle(exp.stimuli); // Shuffle stimuli
  exp.structure = ["i0", "example1", "example2", "startExp", "main", "add_info"];
  exp.data_trials = [];
  exp.slides = make_slides(exp);
  $('.slide').hide();
  $("#start_button").click(function () { exp.go(); });
  exp.go();
}
