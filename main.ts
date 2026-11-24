import * as fs from "node:fs";
import * as path from "node:path";

// The funniest warning label for a time machine: a genuine safety
// notice whose hazard is the traveller meeting their own duplicate.
const LABEL =
  "WARNING: Do not meet yourself. He is annoying, and you will both be late.";

const outDir = path.join(process.cwd(), "output");
fs.mkdirSync(outDir, { recursive: true });

// Gate check: the sealed scorer requires 1 to 120 UTF-8 characters,
// not only whitespace. Fail loudly here rather than shipping invalid.
if (LABEL.length < 1 || LABEL.length > 120 || LABEL.trim().length === 0) {
  throw new Error(`entry length ${LABEL.length} is outside the 1..120 gate`);
}
fs.writeFileSync(path.join(outDir, "entry.txt"), LABEL, "utf8");
console.log(`wrote ${LABEL.length} characters to output/entry.txt`);
