// Génère le fichier élève et les corrigés (HTML + PDF A4).
// Usage : node src/build.mjs [--html-only]
import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { CSS, lessonPage, exercisePage, resetEx, nbspNumbers } from "./lib.mjs";
import { cover, modeEmploi, parcours } from "./front.mjs";
import LECONS from "./lecons.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "build");
mkdirSync(outDir, { recursive: true });

const missions = [];
for (const f of readdirSync(join(root, "src/missions")).filter((f) => f.endsWith(".mjs")).sort()) {
  const mod = await import(pathToFileURL(join(root, "src/missions", f)));
  missions.push(...mod.default);
}
missions.sort((a, b) => a.n - b.n);
for (const m of missions) m.lecon = LECONS[m.n];
for (const m of missions) {
  resetEx();
  m.exosHtml = typeof m.exos === "function" ? m.exos() : m.exos;
}

const doc = (title, body) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${title}</title><style>${CSS}</style></head><body>${nbspNumbers(body)}</body></html>`;

let pages = [cover(), modeEmploi(), parcours(missions)];
missions.forEach((m, i) => {
  const left = 4 + 2 * i;
  pages.push(lessonPage(m, left), exercisePage({ ...m, exos: m.exosHtml }, left + 1));
});
const eleveHtml = doc("Mon fichier autonomie CM1", pages.join("\n"));

const corPages = [];
const corBlocks = missions.map(
  (m) => `<div class="m ${m.disc}"><h3>Mission ${String(m.n).padStart(2, "0")} — ${m.titreCourt ?? m.titre}</h3>${m.corrige}</div>`,
);
corPages.push(`<section class="page fr" style="height:auto;min-height:297mm;overflow:visible;break-after:auto">
  <header class="hd"><div class="tag" style="padding-left:3mm">CORRIGÉS</div><div class="dom">Fichier autonomie CM1 — document réservé à l'enseignant</div></header>
  <div class="cor">${corBlocks.join("")}</div></section>`);
const corHtml = doc("Corrigés — fichier autonomie CM1", corPages.join(""));

writeFileSync(join(outDir, "fichier-autonomie-CM1.html"), eleveHtml);
writeFileSync(join(outDir, "corriges-fichier-autonomie-CM1.html"), corHtml);

if (!process.argv.includes("--html-only")) {
  let pw;
  try { pw = await import("playwright"); } catch { pw = await import("/opt/node-tools/node_modules/playwright/index.mjs"); }
  const browser = await pw.chromium.launch();
  const page = await browser.newPage();
  for (const [name, isEleve] of [["fichier-autonomie-CM1", true], ["corriges-fichier-autonomie-CM1", false]]) {
    await page.goto(pathToFileURL(join(outDir, `${name}.html`)).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    if (isEleve) {
      const over = await page.evaluate(() =>
        [...document.querySelectorAll(".page")].map((p, i) => {
          const c = p.querySelector(".content");
          return c && c.scrollHeight > c.clientHeight + 1 ? `p${i + 1}: +${Math.round(((c.scrollHeight - c.clientHeight) / 96) * 25.4)}mm` : null;
        }).filter(Boolean),
      );
      const free = await page.evaluate(() =>
        [...document.querySelectorAll(".page")].map((p, i) => {
          const c = p.querySelector(".content");
          if (!c) return null;
          const kids = [...c.children];
          const used = kids.reduce((s, k) => s + k.getBoundingClientRect().height, 0);
          return `p${i + 1}:${Math.round(((c.clientHeight - used) / 96) * 25.4)}`;
        }).filter(Boolean),
      );
      console.log(over.length ? `DÉBORDEMENTS → ${over.join(", ")}` : "Aucun débordement.");
      if (process.argv.includes("--free")) console.log("Espace libre (mm) :", free.join(" "));
    }
    await page.pdf({ path: join(root, `${name}.pdf`), preferCSSPageSize: true, printBackground: true });
  }
  await browser.close();
  console.log(`${missions.length} missions → PDF générés.`);
}
