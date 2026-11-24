import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "We bottle pure silence from anechoic chambers and sell it to open-plan offices for $29 a jar, because exhausted workers will pay anything for ten minutes inside a room that makes no sound at all.";

mkdirSync("/output", { recursive: true });
// Write via a temp file and rename, so a concurrent reader never sees a
// half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
