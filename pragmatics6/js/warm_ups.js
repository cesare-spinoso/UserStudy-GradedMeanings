// pragmatics6 warm-ups — two interactive trials (one selection, one production).
// Uses displays not appearing in main trials or examples.

var warm_ups_reference_games = [
  // Warmup 1 — SELECTION
  // Display: orange square (A), orange circle (B), green square (C)
  // "orange" → orange square (A), because for orange circle speaker says "circle"
  {
    id: "warmup_selection",
    task: "selection",
    display: [
      { id: "A", color: "orange", shape: "square"  },
      { id: "B", color: "orange", shape: "circle"  },
      { id: "C", color: "green",  shape: "square"  },
    ],
    utterance: "orange",
    correct_id: "A",
  },

  // Warmup 2 — PRODUCTION (pragmatic target)
  // Display: blue triangle (A), blue circle (B), red triangle (C)
  // Target = blue triangle (A)
  // "triangle" identifies C (red triangle) → "circle" identifies B → "blue" → A
  // Pragmatic choice: "blue" (idx 0) — sufficient in context
  {
    id: "warmup_production",
    task: "production",
    display: [
      { id: "A", color: "blue", shape: "triangle" },
      { id: "B", color: "blue", shape: "circle"   },
      { id: "C", color: "red",  shape: "triangle" },
    ],
    target_id: "A",
    utterance_options: ["blue", "blue triangle"],
    pragmatic_option_idx: 0,
    production_target_type: "pragmatic",
  },
];
