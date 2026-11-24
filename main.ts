// Entry for make.fun's "The Excuse an AI Agent Gives Its Human" (Node 22, standard library only):
// the excuse is the entry.txt beside this file, and the program copies it to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 200 characters, not only white space.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
