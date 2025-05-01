// experiment.js

var experiment = {
  trials: [],
  data: [],

  // Called at the beginning of each trial
  next: function () {
    if (this.trials.length === 0) {
      showSlide("subj_info");
    } else {
      var t = this.trials.shift();

      // Populate the scenario and interpretations
      $("#trial-scenario").html(t.scenario);
      for (var i = 1; i <= 5; i++) {
        $("#i" + i + "-text").html(t["interp" + i]);
        $("input[name='i" + i + "']").val("");
      }

      $(".err").hide();
      showSlide("trial");
    }
  },

  // Button click handler
  button: function () {
    var total = 0;
    var responses = {};
    for (var i = 1; i <= 5; i++) {
      var val = parseInt($("input[name='i" + i + "']").val());
      if (!isNaN(val)) {
        total += val;
        responses["i" + i] = val;
      } else {
        responses["i" + i] = 0;
      }
    }

    if (total !== 100) {
      $(".err").show();
    } else {
      this.data.push({
        scenario: $("#trial-scenario").text(),
        responses: responses
      });
      this.next();
    }
  },

  // Called when submitting subject info
  submit_info: function () {
    var subject_information = {
      language: $("#language").val(),
      enjoyment: $("#enjoyment").val(),
      assess: $("input[name='assess']:checked").val(),
      age: $("#age").val(),
      gender: $("#gender").val(),
      education: $("#education").val(),
      comments: $("#comments").val()
    };

    this.data.push({ subject_information: subject_information });
    showSlide("thanks");

    proliferate.submit({ trials: this.data });
  }
};

// Helper to show a slide
function showSlide(id) {
  $(".slide").hide();
  $("#" + id).show();
}

function init() {
  showSlide("i0");
  $("#start_button").click(function () {
    showSlide("example1");
  });

  // Example slides
  $("#example1 .continueButton").click(function () {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
      var val = parseInt($("input[name='ex1-i" + i + "']").val());
      if (!isNaN(val)) total += val;
    }
    if (total !== 100) {
      $("#example1 .err").show();
    } else {
      $("#example1 .err").hide();
      showSlide("example2");
    }
  });

  $("#example2 .continueButton").click(function () {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
      var val = parseInt($("input[name='ex2-i" + i + "']").val());
      if (!isNaN(val)) total += val;
    }
    if (total !== 100) {
      $("#example2 .err").show();
    } else {
      $("#example2 .err").hide();
      showSlide("startExp");
    }
  });

  $("#startExp .continueButton").click(function () {
    experiment.trials = _.shuffle(stimuli);
    experiment.next();
  });
}

// You must define your stimuli array in stimuli.js in this format:
// var stimuli = [
//   {
//     scenario: "Person A: ... Person B: ...",
//     interp1: "...",
//     interp2: "...",
//     interp3: "...",
//     interp4: "...",
//     interp5: "..."
//   },
//   ...
// ];
