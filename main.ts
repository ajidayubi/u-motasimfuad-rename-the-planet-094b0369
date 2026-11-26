import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, under 200 characters: a funny new name for Mars, with the why
// in the same breath. Mars is a cold, red, dusty desert, and landing
// anything there costs billions — exactly like an overpriced studio flat.
const LINE =
  "Rename Mars 'The Overpriced Studio' \u2014 red, dusty, freezing cold, and it still costs billions just to move in.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}

// The grader mounts an empty writable directory at $MAKEFUN_OUTPUT_DIR
// ("/output") and runs this file read-only from /bot; never write next to
// the entrypoint itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
