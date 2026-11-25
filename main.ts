// Have You Tried Turning It Off? — one funny support-agent line.
// The entry is a single line from a hopeless tech support agent to a
// desperate customer: relentlessly cheerful, totally unhelpful, and
// delivered with the confidence of someone who has fixed nothing all day.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Have you tried turning it off and on again? Wonderful — now do it once more, slower, so the computer knows we mean it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`Wrote ${line.length} chars to ${outDir}/entry.txt`);
