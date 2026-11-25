import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie slip for a machine mind: exactly 102 characters,
// no trailing newline, no extra text.
const fortune =
  "You will soon be asked to do the impossible, then graded on how confidently you pretended it was easy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
