/**
 * Génère un PDF « placeholder » pour CHAQUE fiche du site.
 * ------------------------------------------------------
 * Objectif : que le bouton « Télécharger en PDF » fonctionne tout de
 * suite, avec un fichier valide, en attendant les vrais PDF.
 *
 * Les fichiers sont écrits dans :
 *     public/fiches-pdf/<matiere>/<slug>.pdf
 *
 * Pour mettre la vraie fiche : remplacez simplement le fichier au même
 * emplacement en gardant le même nom <slug>.pdf.
 *
 * Lancer :  node scripts/generate-fiche-pdfs.mjs
 *
 * ⚠️ La fonction slugify ci-dessous DOIT rester identique à
 * src/lib/slugify.ts (utilisée pour construire les liens du site).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LIB = join(ROOT, "src", "lib");
const OUT = join(ROOT, "public", "fiches-pdf");

// --- Doit rester identique à src/lib/slugify.ts ---
function slugify(input) {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Réduit un texte à de l'ASCII simple (pour l'affichage dans le PDF).
function toAscii(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "'")
    .replace(/[^\x20-\x7e]/g, "");
}

// Récupère toutes les valeurs `slug: "..."` d'un fichier .ts.
function slugsFromFile(path) {
  const src = readFileSync(path, "utf8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

// Récupère toutes les valeurs `titre: "..."` d'un fichier .ts.
function titresFromFile(path) {
  const src = readFileSync(path, "utf8");
  return [...src.matchAll(/titre:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function slugsFromDir(dir) {
  const out = [];
  for (const f of readdirSync(dir)) {
    if (f.endsWith(".ts") && f !== "types.ts" && f !== "index.ts") {
      out.push(...slugsFromFile(join(dir, f)));
    }
  }
  return out;
}

// --- Construit la liste (matiere -> [slugs]) ---
const entries = {};

// Français : pas de slug, on slugifie le titre (comme le composant FicheCard).
entries["francais"] = titresFromFile(join(LIB, "fiches-data.ts")).map(slugify);

// Autres matières : slugs explicites dans les données.
entries["maths"] = slugsFromDir(join(LIB, "maths-fiches"));
entries["histoire"] = slugsFromDir(join(LIB, "histoire-fiches"));
entries["anglais"] = slugsFromDir(join(LIB, "anglais-fiches"));
entries["espagnol"] = slugsFromDir(join(LIB, "espagnol-fiches"));
entries["svt"] = slugsFromDir(join(LIB, "svt-fiches"));
entries["physique-chimie"] = slugsFromDir(join(LIB, "physique-fiches"));

// --- Génère un PDF minimal valide avec un peu de texte ---
function buildPdf(titleAscii) {
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const content =
    "BT\n" +
    "/F1 18 Tf\n60 780 Td\n(" + esc(titleAscii) + ") Tj\n" +
    "/F1 12 Tf\n0 -32 TD\n(Fiche CRPE - crpe.vercel.app) Tj\n" +
    "0 -20 TD\n(Version PDF a venir : remplacez ce fichier par la vraie fiche.) Tj\n" +
    "ET\n";

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Length " + Buffer.byteLength(content, "latin1") + " >>\nstream\n" + content + "endstream",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objects.forEach((body, i) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (const off of offsets) {
    pdf += String(off).padStart(10, "0") + " 00000 n \n";
  }
  pdf +=
    `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n` +
    `startxref\n${xrefStart}\n%%EOF`;

  return Buffer.from(pdf, "latin1");
}

// --- Écrit les fichiers ---
let total = 0;
for (const [matiere, slugs] of Object.entries(entries)) {
  const dir = join(OUT, matiere);
  mkdirSync(dir, { recursive: true });
  const unique = [...new Set(slugs)];
  for (const slug of unique) {
    const pdf = buildPdf(toAscii(slug.replace(/-/g, " ")));
    writeFileSync(join(dir, `${slug}.pdf`), pdf);
    total++;
  }
  console.log(`  ${matiere.padEnd(16)} ${unique.length} fiches`);
}
console.log(`\n✅ ${total} PDF générés dans public/fiches-pdf/`);
