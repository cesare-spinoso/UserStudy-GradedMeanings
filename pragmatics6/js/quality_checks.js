// pragmatics6 quality checks — 5 trials with clear, unambiguous correct answers.
// Selection QCs use a unique (full color+shape) utterance so no pragmatic inference needed.
// Production QCs have one option that matches the target color and one that clearly does not.

var quality_checks_reference_games = [
  // QC1 — SELECTION, unique utterance
  // "blue circle" uniquely identifies B; any attentive participant clicks B
  {
    id: "qc1_selection",
    task: "selection",
    is_quality_check: true,
    display: [
      { id: "A", color: "red",  shape: "circle" },
      { id: "B", color: "blue", shape: "circle" },
      { id: "C", color: "red",  shape: "square" },
    ],
    utterance: "blue circle",
    correct_id: "B",
  },

  // QC2 — SELECTION, unique utterance
  // "green triangle" uniquely identifies C
  {
    id: "qc2_selection",
    task: "selection",
    is_quality_check: true,
    display: [
      { id: "A", color: "yellow", shape: "circle"   },
      { id: "B", color: "yellow", shape: "triangle" },
      { id: "C", color: "green",  shape: "triangle" },
    ],
    utterance: "green triangle",
    correct_id: "C",
  },

  // QC3 — PRODUCTION, obvious choice (distractor is the wrong color entirely)
  // Target = orange circle (A); options: "orange" (correct) vs "blue" (wrong color)
  {
    id: "qc3_production",
    task: "production",
    is_quality_check: true,
    display: [
      { id: "A", color: "orange", shape: "circle"   },
      { id: "B", color: "purple", shape: "triangle" },
      { id: "C", color: "green",  shape: "square"   },
    ],
    target_id: "A",
    utterance_options: ["orange", "blue"],
    pragmatic_option_idx: 0,
    production_target_type: "attention",
  },

  // QC4 — PRODUCTION, obvious choice (distractor is the wrong color entirely)
  // Target = red square (B); options: "red" (correct) vs "green" (wrong color)
  {
    id: "qc4_production",
    task: "production",
    is_quality_check: true,
    display: [
      { id: "A", color: "blue", shape: "circle"   },
      { id: "B", color: "red",  shape: "square"   },
      { id: "C", color: "blue", shape: "triangle"  },
    ],
    target_id: "B",
    utterance_options: ["red", "green"],
    pragmatic_option_idx: 0,
    production_target_type: "attention",
  },

  // QC5 — PRODUCTION, obvious choice (distractor is the wrong color entirely)
  // Target = yellow triangle (C); options: "yellow" (correct) vs "purple" (wrong color)
  {
    id: "qc5_production",
    task: "production",
    is_quality_check: true,
    display: [
      { id: "A", color: "red",    shape: "circle"   },
      { id: "B", color: "orange", shape: "square"   },
      { id: "C", color: "yellow", shape: "triangle" },
    ],
    target_id: "C",
    utterance_options: ["yellow", "purple"],
    pragmatic_option_idx: 0,
    production_target_type: "attention",
  },
];
