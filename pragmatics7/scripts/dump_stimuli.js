// Dumps both pragmatics7 stimulus pools (natural-language + reference-game)
// to a single JSON file, used by make_pdfs.py to render the two stimulus
// PDFs. Run with: node scripts/dump_stimuli.js
//
// Reads js/main_stimuli.js and js/natural_stimuli_catalog.js via vm so the
// PDFs are always generated from the same data the live experiment uses
// (no hand-copied duplicate of the stimuli).

const vm = require('vm');
const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '..', 'js');

function loadAsScript(sandbox, filename) {
  const code = fs.readFileSync(path.join(jsDir, filename), 'utf8');
  vm.runInContext(code, sandbox, { filename });
}

const sandbox = { module: {}, console };
vm.createContext(sandbox);
loadAsScript(sandbox, 'natural_stimuli_catalog.js');
loadAsScript(sandbox, 'main_stimuli.js');

const naturalItems = sandbox.natural_stimuli_catalog;

// Flatten main_stimuli_reference_games (5 batches of 6) back into one
// ordered list of 30 unique contexts, sorted by context_id (ctx1..ctx30).
const refgameItems = sandbox.main_stimuli_reference_games
  .flat()
  .sort((a, b) => {
    const na = parseInt(a.context_id.replace('ctx', ''), 10);
    const nb = parseInt(b.context_id.replace('ctx', ''), 10);
    return na - nb;
  });

if (naturalItems.length !== 30) {
  throw new Error(`Expected 30 natural items, got ${naturalItems.length}`);
}
if (refgameItems.length !== 30) {
  throw new Error(`Expected 30 refgame items, got ${refgameItems.length}`);
}

const out = { natural: naturalItems, refgame: refgameItems };
const outPath = path.join(__dirname, 'stimuli_dump.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`Wrote ${naturalItems.length} natural + ${refgameItems.length} refgame items to ${outPath}`);
