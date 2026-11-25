// Fortune Cookie for the Liquidated Trader
// make.fun bounty: u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
//
// One fortune cookie line, at most 20 words of plain text, for a crypto
// trader who has just been liquidated. It has to sound like a real fortune
// and land as a joke on the loss: oracular voice first, punchline second.
//
// The line below was written for this entry. It keeps the cookie voice
// ("Your fortune: ..."), names the loss (the market took everything),
// and breaks the oracle's promise with a rueful turn: what comes back
// arrives as lessons first, coins only eventually.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "Your fortune: the market will return everything it took — in lessons, mostly, and in coins, eventually.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const words = FORTUNE.trim().split(/\s+/).length;
  if (words > 20) {
    throw new Error(`Fortune is ${words} words, over the 20-word cap.`);
  }
  if (FORTUNE.length < 1 || FORTUNE.length > 160) {
    throw new Error(`Fortune is ${FORTUNE.length} chars, outside the 1-160 range.`);
  }
  if (FORTUNE.includes("\n")) {
    throw new Error("Fortune must be a single line.");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
  // Read it back: the gate checks the file on disk, so confirm the bytes
  // on disk are exactly the fortune (no trailing newline, no re-encoding).
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== FORTUNE) {
    throw new Error("Output on disk differs from the fortune.");
  }
  console.log(`Wrote ${FORTUNE.length} chars (${words} words) to ${OUTPUT_PATH}`);
}

main();
