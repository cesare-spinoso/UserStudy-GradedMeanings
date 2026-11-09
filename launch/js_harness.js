// Node helper for launch/launch.py. Two modes:
//
//   node js_harness.js read  <js_file> <variable>
//       Evaluates <js_file> and prints JSON of the global <variable>.
//
//   node js_harness.js smoke <experiment_dir> <design>
//       Loads underscore + every local js/*.js <script> from experiment.html
//       (in page order), with jQuery / URL params stubbed, then runs the real
//       init() for every condition of <design>. The number of conditions comes
//       from NUM_CONDITIONS_BY_DESIGN in the experiment's own code. Prints JSON:
//       { conditions: N, results: [{condition, ok, n_trials, error}] }

const vm = require('vm');
const fs = require('fs');
const path = require('path');

function localScripts(expDir) {
  const html = fs.readFileSync(path.join(expDir, 'experiment.html'), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '');
  const srcs = [];
  const re = /<script[^>]*\ssrc="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) srcs.push(m[1]);
  // Only the experiment's own code; jQuery-dependent shared libs are stubbed.
  return srcs.filter(s => /^js\//.test(s) && !/proliferate/.test(s));
}

function makeContext(expDir, params) {
  const chain = new Proxy(function () {}, {
    get: (t, k) => (k === 'length' ? 0 : () => chain),
    apply: () => chain,
  });
  const ctx = {
    console: { log() {}, warn() {}, error() {} },
    $: chain, jQuery: chain, window: {}, document: {},
    slide: o => o,
    get_url_param: (n, d) => (params[n] !== undefined ? String(params[n]) : d),
  };
  vm.createContext(ctx);
  const files = ['shared/js/underscore-min.js'].concat(localScripts(expDir));
  for (const f of files) {
    vm.runInContext(fs.readFileSync(path.join(expDir, f), 'utf8'), ctx, { filename: f });
  }
  return ctx;
}

const [mode, a, b] = process.argv.slice(2);

try {

if (mode === 'read') {
  const ctx = { console, module: undefined };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(a, 'utf8'), ctx, { filename: a });
  const value = vm.runInContext(b, ctx);
  process.stdout.write(JSON.stringify(value));
} else if (mode === 'smoke') {
  const expDir = a, design = b;
  const probe = makeContext(expDir, { design: design });
  const byDesign = vm.runInContext(
    "typeof NUM_CONDITIONS_BY_DESIGN === 'undefined' ? null : NUM_CONDITIONS_BY_DESIGN", probe);
  if (!byDesign) throw new Error('NUM_CONDITIONS_BY_DESIGN not defined in ' + expDir + '/js');
  const n = byDesign[design];
  if (n === undefined) {
    throw new Error('design ' + design + ' not in NUM_CONDITIONS_BY_DESIGN (' + Object.keys(byDesign).join(', ') + ')');
  }
  const results = [];
  for (let c = 0; c < n; c++) {
    try {
      const ctx = makeContext(expDir, { design: design, condition: c });
      vm.runInContext('var exp = { go: function () {} }; init();', ctx);
      results.push({ condition: c, ok: true, n_trials: vm.runInContext('exp.stimuli.length', ctx) });
    } catch (err) {
      results.push({ condition: c, ok: false, error: String(err && err.message || err) });
    }
  }
  process.stdout.write(JSON.stringify({ conditions: n, results: results }));
} else {
  console.error('usage: js_harness.js read <file> <var> | smoke <exp_dir> <design>');
  process.exit(2);
}
} catch (err) {
  process.stderr.write(String(err && err.message || err) + '\n');
  process.exit(1);
}
