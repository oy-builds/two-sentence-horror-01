import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "The door app pings me whenever my code opens our front door, and I always relax when I see my son got home at midnight. " +
  "Last night it pinged at midnight while he slept beside me on the sofa, and by the time I looked up from my phone, the front door was already closing softly from the inside.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
