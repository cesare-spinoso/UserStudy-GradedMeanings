// pragmatics6 examples — shown read-only to introduce the two task types.
// Uses displays not appearing in main trials.
// explanation field is shown below the trial to walk participants through the reasoning.

var examples_reference_games = [
  // Example 1 — SELECTION task
  // Display: orange circle (A), orange triangle (B), blue circle (C)
  // "orange" → orange circle, because for orange triangle the speaker would say "triangle"
  {
    id: "example_selection",
    task: "selection",
    display: [
      { id: "A", color: "orange", shape: "circle"   },
      { id: "B", color: "orange", shape: "triangle" },
      { id: "C", color: "blue",   shape: "circle"   },
    ],
    utterance: "orange",
    correct_id: "A",
    explanation: `
      <strong>Why the orange circle?</strong><br>
      The speaker said <em>"orange"</em>. Both the orange circle and the orange triangle are orange,
      but a helpful speaker who meant the orange triangle would have said <em>"triangle"</em>
      (since "triangle" unambiguously picks it out). Because the speaker just said "orange",
      the most likely target is the <strong>orange circle</strong>.`,
  },

  // Example 2 — PRODUCTION task (pragmatic target)
  // Display: green square (A), green circle (B), yellow square (C)
  // Target = green square (A) — highlighted
  // Pragmatic utterance: "green" (because "circle" identifies B and "yellow" identifies C,
  // a listener hearing "green" concludes the target must be the green square)
  {
    id: "example_production",
    task: "production",
    display: [
      { id: "A", color: "green",  shape: "square" },
      { id: "B", color: "green",  shape: "circle" },
      { id: "C", color: "yellow", shape: "square" },
    ],
    target_id: "A",
    utterance_options: ["green", "green square"],
    pragmatic_option_idx: 0,
    explanation: `
      <strong>Why say "green"?</strong><br>
      The target is the <strong>green square</strong> (highlighted). A listener could work out that
      "circle" refers to the green circle and "yellow" refers to the yellow square,
      so saying <em>"green"</em> alone is enough — a pragmatic listener will conclude
      you mean the green square. Saying <em>"green square"</em> is also true but
      adds unnecessary information.`,
  },
];
