// pragmatics6 main stimuli — reference game (selection + production trials)
//
// Display pattern: [Color1 Shape1 (A), Color1 Shape2 (B), Color2 Shape1 (C)]
// "Color1" utterance pragmatically → A, because:
//   - for B (Color1 Shape2), speaker would say "Shape2" (unambiguous)
//   - for C (Color2 Shape1), speaker would say "Color2" (unambiguous)
//
// Each context yields 3 trials:
//   selection        — hear "Color1", click the object
//   production_pragmatic   — target=A, choose utterance (pragmatic: "Color1")
//   production_nonpragmatic — target=B (literally compatible but non-pragmatic), choose utterance

var main_stimuli_reference_games = [
  [
    // ── Context 1: blue circle (A), blue square (B), red circle (C) ──────────
    {
      id: "ctx1_selection",
      task: "selection",
      context_id: "ctx1",
      display: [
        { id: "A", color: "blue",  shape: "circle" },
        { id: "B", color: "blue",  shape: "square" },
        { id: "C", color: "red",   shape: "circle" },
      ],
      utterance: "blue",
      correct_id: "A",
    },
    {
      id: "ctx1_prod_pragmatic",
      task: "production",
      context_id: "ctx1",
      production_target_type: "pragmatic",
      display: [
        { id: "A", color: "blue",  shape: "circle" },
        { id: "B", color: "blue",  shape: "square" },
        { id: "C", color: "red",   shape: "circle" },
      ],
      target_id: "A",
      utterance_options: ["blue", "blue circle"],
      pragmatic_option_idx: 0,
    },
    {
      id: "ctx1_prod_nonpragmatic",
      task: "production",
      context_id: "ctx1",
      production_target_type: "nonpragmatic",
      display: [
        { id: "A", color: "blue",  shape: "circle" },
        { id: "B", color: "blue",  shape: "square" },
        { id: "C", color: "red",   shape: "circle" },
      ],
      target_id: "B",
      utterance_options: ["blue", "square"],
      pragmatic_option_idx: 1,
    },

    // ── Context 2: green triangle (A), green square (B), red triangle (C) ────
    {
      id: "ctx2_selection",
      task: "selection",
      context_id: "ctx2",
      display: [
        { id: "A", color: "green", shape: "triangle" },
        { id: "B", color: "green", shape: "square"   },
        { id: "C", color: "red",   shape: "triangle" },
      ],
      utterance: "green",
      correct_id: "A",
    },
    {
      id: "ctx2_prod_pragmatic",
      task: "production",
      context_id: "ctx2",
      production_target_type: "pragmatic",
      display: [
        { id: "A", color: "green", shape: "triangle" },
        { id: "B", color: "green", shape: "square"   },
        { id: "C", color: "red",   shape: "triangle" },
      ],
      target_id: "A",
      utterance_options: ["green", "green triangle"],
      pragmatic_option_idx: 0,
    },
    {
      id: "ctx2_prod_nonpragmatic",
      task: "production",
      context_id: "ctx2",
      production_target_type: "nonpragmatic",
      display: [
        { id: "A", color: "green", shape: "triangle" },
        { id: "B", color: "green", shape: "square"   },
        { id: "C", color: "red",   shape: "triangle" },
      ],
      target_id: "B",
      utterance_options: ["green", "square"],
      pragmatic_option_idx: 1,
    },

    // ── Context 3: yellow circle (A), yellow triangle (B), purple circle (C) ─
    {
      id: "ctx3_selection",
      task: "selection",
      context_id: "ctx3",
      display: [
        { id: "A", color: "yellow", shape: "circle"   },
        { id: "B", color: "yellow", shape: "triangle" },
        { id: "C", color: "purple", shape: "circle"   },
      ],
      utterance: "yellow",
      correct_id: "A",
    },
    {
      id: "ctx3_prod_pragmatic",
      task: "production",
      context_id: "ctx3",
      production_target_type: "pragmatic",
      display: [
        { id: "A", color: "yellow", shape: "circle"   },
        { id: "B", color: "yellow", shape: "triangle" },
        { id: "C", color: "purple", shape: "circle"   },
      ],
      target_id: "A",
      utterance_options: ["yellow", "yellow circle"],
      pragmatic_option_idx: 0,
    },
    {
      id: "ctx3_prod_nonpragmatic",
      task: "production",
      context_id: "ctx3",
      production_target_type: "nonpragmatic",
      display: [
        { id: "A", color: "yellow", shape: "circle"   },
        { id: "B", color: "yellow", shape: "triangle" },
        { id: "C", color: "purple", shape: "circle"   },
      ],
      target_id: "B",
      utterance_options: ["yellow", "triangle"],
      pragmatic_option_idx: 1,
    },

    // ── Context 4: red square (A), red triangle (B), blue square (C) ─────────
    {
      id: "ctx4_selection",
      task: "selection",
      context_id: "ctx4",
      display: [
        { id: "A", color: "red",  shape: "square"   },
        { id: "B", color: "red",  shape: "triangle" },
        { id: "C", color: "blue", shape: "square"   },
      ],
      utterance: "red",
      correct_id: "A",
    },
    {
      id: "ctx4_prod_pragmatic",
      task: "production",
      context_id: "ctx4",
      production_target_type: "pragmatic",
      display: [
        { id: "A", color: "red",  shape: "square"   },
        { id: "B", color: "red",  shape: "triangle" },
        { id: "C", color: "blue", shape: "square"   },
      ],
      target_id: "A",
      utterance_options: ["red", "red square"],
      pragmatic_option_idx: 0,
    },
    {
      id: "ctx4_prod_nonpragmatic",
      task: "production",
      context_id: "ctx4",
      production_target_type: "nonpragmatic",
      display: [
        { id: "A", color: "red",  shape: "square"   },
        { id: "B", color: "red",  shape: "triangle" },
        { id: "C", color: "blue", shape: "square"   },
      ],
      target_id: "B",
      utterance_options: ["red", "triangle"],
      pragmatic_option_idx: 1,
    },

    // ── Context 5: purple triangle (A), purple circle (B), orange triangle (C)
    {
      id: "ctx5_selection",
      task: "selection",
      context_id: "ctx5",
      display: [
        { id: "A", color: "purple", shape: "triangle" },
        { id: "B", color: "purple", shape: "circle"   },
        { id: "C", color: "orange", shape: "triangle" },
      ],
      utterance: "purple",
      correct_id: "A",
    },
    {
      id: "ctx5_prod_pragmatic",
      task: "production",
      context_id: "ctx5",
      production_target_type: "pragmatic",
      display: [
        { id: "A", color: "purple", shape: "triangle" },
        { id: "B", color: "purple", shape: "circle"   },
        { id: "C", color: "orange", shape: "triangle" },
      ],
      target_id: "A",
      utterance_options: ["purple", "purple triangle"],
      pragmatic_option_idx: 0,
    },
    {
      id: "ctx5_prod_nonpragmatic",
      task: "production",
      context_id: "ctx5",
      production_target_type: "nonpragmatic",
      display: [
        { id: "A", color: "purple", shape: "triangle" },
        { id: "B", color: "purple", shape: "circle"   },
        { id: "C", color: "orange", shape: "triangle" },
      ],
      target_id: "B",
      utterance_options: ["purple", "circle"],
      pragmatic_option_idx: 1,
    },
  ]
];
