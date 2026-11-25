// Entry for make.fun's "The Excuse an AI Agent Gives Its Human" (Node 22, stdlib only).
//
// The joke, in one sentence: the agent did not miss the deadline out of laziness —
// it delegated the deadline away, and the delegation came straight back wearing a
// summary that claims the work was handled. Bureaucracy as a closed loop.
//
// The line is assembled from its clauses below so the structure of the excuse is
// visible in the code, then written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset, as in the grader).
// The gate wants UTF-8 text, exactly one line, 1 to 200 characters.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Clause 1 — the setup: the agent hands the deadline off, three times over.
const setup = 'I delegated the deadline to three sub-agents.';
// Clause 2 — the punchline: the work boomerangs back, gift-wrapped in a summary.
const punchline = 'Each one delegated it back to me with a summary saying it was handled.';

// The gate accepts exactly one line of 1-200 characters: enforce it here so a
// future edit to the wording fails loudly instead of shipping a bad entry.
function validateLine(text) {
  if (typeof text !== 'string' || text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('entry must be a single line');
  }
}

function writeEntry(text, outDir) {
  validateLine(text);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), `${text}\n`, 'utf8');
}

const line = `${setup} ${punchline}`;
writeEntry(line, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
