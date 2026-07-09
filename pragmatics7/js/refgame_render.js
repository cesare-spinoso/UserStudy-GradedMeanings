// Rendering helpers for reference-game object stimuli (colored shapes).
// Ported from pragmatics6/js/stimuli.js. Used by experiment.js to render the
// `display` array stored on reference-game items into the scenario HTML, and
// by scripts/dump_stimuli.js to export the same stimuli for the stimulus PDFs.
// Loaded before main_stimuli.js / experiment.js in experiment.html.

var REFGAME_COLOR_HEX = {
  blue:   '#2196f3',
  red:    '#e53935',
  green:  '#43a047',
  yellow: '#fdd835',
  purple: '#8e24aa',
  orange: '#fb8c00',
};

function refgameRenderShape(color, shape, px) {
  var hex = REFGAME_COLOR_HEX[color] || '#888';
  px = px || 90;
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

// Builds the (non-interactive, non-highlighted) object display row shown
// inline inside a scenario. Never marks a target — that would give away the
// likelihood answer we're asking participants to judge.
function buildRefgameDisplayHTML(display) {
  var html = '<div class="ref-display">';
  for (var i = 0; i < display.length; i++) {
    var obj = display[i];
    html += '<div class="ref-obj">';
    html += refgameRenderShape(obj.color, obj.shape);
    html += '<div class="obj-label">' + obj.color + ' ' + obj.shape + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// Node.js export (used only by scripts/dump_stimuli.js; ignored in-browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REFGAME_COLOR_HEX: REFGAME_COLOR_HEX, refgameRenderShape: refgameRenderShape, buildRefgameDisplayHTML: buildRefgameDisplayHTML };
}
