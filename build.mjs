// Liest puzzle.json und schreibt puzzle.data.js (leicht verschleiert, damit
// die Lösungen nicht im Klartext im öffentlichen Repo stehen).
// Aufruf: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const src = new URL('./puzzle.json', import.meta.url);
const out = new URL('./puzzle.data.js', import.meta.url);

const data = JSON.parse(readFileSync(src, 'utf8'));
const size = data.groups[0].words.length;
for (const g of data.groups) {
  if (g.words.length !== size) throw new Error(`Gruppe "${g.title}" hat ${g.words.length} statt ${size} Begriffe`);
}
const all = data.groups.flatMap(g => g.words.map(w => w.toLowerCase()));
const dup = all.find((w, i) => all.indexOf(w) !== i);
if (dup) throw new Error(`Begriff doppelt: ${dup}`);

const b64 = Buffer.from(JSON.stringify(data), 'utf8').toString('base64').split('').reverse().join('');
writeFileSync(out, `// generiert von build.mjs – nicht von Hand bearbeiten\nwindow.PUZZLE = "${b64}";\n`);
console.log(`puzzle.data.js geschrieben: ${data.groups.length} Gruppen à ${size}`);
