/**
 * Génération PDF des FICHES (côté navigateur)
 * -------------------------------------------
 * Produit un PDF propre et complet À PARTIR DU CONTENU STRUCTURÉ de la
 * fiche (les mêmes données que l'affichage web). Le PDF reprend donc
 * l'intégralité de la fiche : titres, sous-titres, listes, tableaux,
 * couleurs de rubriques et mise en page soignée — et non plus un simple
 * export vide avec le seul titre.
 *
 * jsPDF est importé dynamiquement : le module n'est téléchargé que
 * lorsqu'on clique sur « Télécharger en PDF ».
 *
 * Ce module couvre les 7 familles de fiches du site :
 *   français, maths, physique-chimie, SVT, histoire, anglais, espagnol.
 */
import type { MathFiche } from "@/lib/maths-fiches/types";
import type { PhysFiche } from "@/lib/physique-fiches/types";
import type { SvtFiche } from "@/lib/svt-fiches/types";
import type { HistoireFiche } from "@/lib/histoire-fiches/types";
import type { AnglaisFiche } from "@/lib/anglais-fiches/types";
import type { EspagnolFiche } from "@/lib/espagnol-fiches/types";
import type { Fiche } from "@/lib/fiches-data";
import { slugify } from "@/lib/slugify";

/* ------------------------------------------------------------------ */
/*  Union des fiches téléchargeables                                  */
/* ------------------------------------------------------------------ */
export type FichePdfData =
  | { matiere: "francais"; fiche: Fiche }
  | { matiere: "maths"; fiche: MathFiche }
  | { matiere: "physique-chimie"; fiche: PhysFiche }
  | { matiere: "svt"; fiche: SvtFiche }
  | { matiere: "histoire"; fiche: HistoireFiche }
  | { matiere: "anglais"; fiche: AnglaisFiche }
  | { matiere: "espagnol"; fiche: EspagnolFiche };

const MATIERE_LABELS: Record<FichePdfData["matiere"], string> = {
  francais: "Français",
  maths: "Mathématiques",
  "physique-chimie": "Physique-Chimie",
  svt: "SVT",
  histoire: "Histoire",
  anglais: "Anglais",
  espagnol: "Espagnol",
};

/* ------------------------------------------------------------------ */
/*  Charte graphique (reprise du site) en composantes RVB             */
/* ------------------------------------------------------------------ */
type RGB = [number, number, number];

const NAVY: RGB = [11, 23, 48];
const NAVY_SOFT: RGB = [40, 51, 74];
const GREY: RGB = [90, 100, 120];
const WHITE: RGB = [255, 255, 255];

// Couleurs d'accent des rubriques (proches des teintes Tailwind du site).
const C = {
  indigo: { strong: [79, 70, 229] as RGB, tint: [238, 240, 253] as RGB, border: [199, 202, 245] as RGB },
  sky: { strong: [2, 132, 199] as RGB, tint: [240, 249, 255] as RGB, border: [186, 224, 250] as RGB },
  emerald: { strong: [5, 150, 105] as RGB, tint: [236, 253, 245] as RGB, border: [167, 224, 199] as RGB },
  amber: { strong: [180, 120, 8] as RGB, tint: [255, 251, 235] as RGB, border: [246, 223, 160] as RGB },
  rose: { strong: [225, 29, 72] as RGB, tint: [255, 241, 243] as RGB, border: [250, 200, 208] as RGB },
  violet: { strong: [124, 58, 237] as RGB, tint: [245, 243, 255] as RGB, border: [214, 202, 248] as RGB },
  orange: { strong: [234, 88, 12] as RGB, tint: [255, 247, 237] as RGB, border: [250, 210, 175] as RGB },
  teal: { strong: [13, 148, 136] as RGB, tint: [240, 253, 250] as RGB, border: [165, 224, 216] as RGB },
};

/**
 * Certains symboles Unicode n'appartiennent pas à l'encodage WinAnsi des
 * polices standard de jsPDF. On les remplace par un équivalent lisible.
 * (Les accents français, eux, sont bien gérés par WinAnsi.)
 */
const PDF_CHAR_MAP: Array<[RegExp, string]> = [
  [/√/g, "racine de "],
  [/π/g, "pi"],
  [/≈/g, "~"],
  [/≤/g, "<="],
  [/≥/g, ">="],
  [/≠/g, "!="],
  [/−/g, "-"],
  [/×/g, "x"],
  [/÷/g, "/"],
  [/→/g, "->"],
  [/⇒/g, "=>"],
  [/⊂/g, "inclus dans "],
  [/∞/g, "infini"],
  [/…/g, "..."],
  [/[’]/g, "'"],
  [/[“”]/g, '"'],
  [/²/g, "2"],
  [/³/g, "3"],
];

/** Neutralise les symboles non gérés par la police PDF (hors accents). */
function sanitize(text: string): string {
  let out = text;
  for (const [re, rep] of PDF_CHAR_MAP) out = out.replace(re, rep);
  // Retire les caractères hors Latin-1 (emojis, symboles exotiques…).
  out = out.replace(/[^\x00-\xff]/g, "");
  return out;
}

/* ------------------------------------------------------------------ */
/*  Contexte de rendu et primitives de mise en page                   */
/* ------------------------------------------------------------------ */
interface Ctx {
  doc: import("jspdf").jsPDF;
  y: number;
  page: number;
  readonly W: number;
  readonly H: number;
  readonly M: number;
  footer: string;
}

function drawFooter(ctx: Ctx) {
  const { doc, W, H, M } = ctx;
  doc.setDrawColor(220, 224, 232);
  doc.setLineWidth(0.2);
  doc.line(M, H - 12, W - M, H - 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GREY);
  doc.text(ctx.footer, M, H - 8);
  doc.text(`Page ${ctx.page}`, W - M, H - 8, { align: "right" });
  doc.text("CRPE avec Noa — crpe.vercel.app", W / 2, H - 8, { align: "center" });
}

function newPage(ctx: Ctx) {
  drawFooter(ctx);
  ctx.doc.addPage();
  ctx.page += 1;
  ctx.y = ctx.M;
}

/** S'assure qu'il reste `need` mm avant le pied de page, sinon saute. */
function ensure(ctx: Ctx, need: number) {
  if (ctx.y + need > ctx.H - 16) newPage(ctx);
}

/* --- Rendu de texte enrichi (gras **inline**) --- */

interface Run {
  text: string;
  bold: boolean;
}

/** Découpe une chaîne en segments normaux / gras (**…**). */
function parseRuns(text: string): Run[] {
  const runs: Run[] = [];
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith("**") && part.endsWith("**")) {
      runs.push({ text: sanitize(part.slice(2, -2)), bold: true });
    } else {
      runs.push({ text: sanitize(part), bold: false });
    }
  }
  return runs;
}

/**
 * Écrit un paragraphe avec gestion du gras inline, du retour à la ligne
 * automatique et des sauts de page.
 */
function writeRich(
  ctx: Ctx,
  text: string,
  opts: {
    size?: number;
    color?: RGB;
    indent?: number;
    gap?: number;
    lineHeight?: number;
  } = {}
) {
  const { doc, M, W } = ctx;
  const size = opts.size ?? 10.5;
  const indent = opts.indent ?? 0;
  const color = opts.color ?? NAVY_SOFT;
  const lh = opts.lineHeight ?? size * 0.42 + 1.5;
  const maxX = W - M;
  const startX = M + indent;

  doc.setFontSize(size);
  doc.setTextColor(...color);

  // On construit une liste de « mots » porteurs de leur style.
  const words: Run[] = [];
  for (const run of parseRuns(text)) {
    const pieces = run.text.split(/(\s+)/);
    for (const piece of pieces) {
      if (piece === "") continue;
      words.push({ text: piece, bold: run.bold });
    }
  }

  let x = startX;
  ensure(ctx, lh);
  const flush = () => {
    ctx.y += lh;
    x = startX;
    ensure(ctx, lh);
  };

  for (const word of words) {
    doc.setFont("helvetica", word.bold ? "bold" : "normal");
    const isSpace = /^\s+$/.test(word.text);
    const w = doc.getTextWidth(word.text);
    if (!isSpace && x + w > maxX && x > startX) {
      flush();
    }
    if (isSpace && x === startX) continue; // pas d'espace en début de ligne
    doc.text(word.text, x, ctx.y);
    x += w;
  }
  ctx.y += lh + (opts.gap ?? 1.6);
}

/** Bandeau de rubrique coloré (titre blanc sur fond teinté fort). */
function rubricBar(ctx: Ctx, title: string, accent: RGB) {
  const { doc, M, W } = ctx;
  ensure(ctx, 14);
  ctx.y += 2.5;
  doc.setFillColor(...accent);
  doc.roundedRect(M, ctx.y - 4, W - 2 * M, 8.5, 1.6, 1.6, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...WHITE);
  doc.text(sanitize(title), M + 3.5, ctx.y + 1.8);
  ctx.y += 10;
}

/** Sous-titre discret à l'intérieur d'une rubrique. */
function subTitle(ctx: Ctx, title: string, accent: RGB) {
  ensure(ctx, 8);
  ctx.y += 1;
  const { doc, M } = ctx;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...accent);
  doc.text(sanitize(title.toUpperCase()), M + 1, ctx.y);
  ctx.y += 4.8;
}

/** Liste à puces (ou numérotée) avec gras inline. */
function bulletList(
  ctx: Ctx,
  items: string[],
  accent: RGB,
  ordered = false
) {
  const { doc, M } = ctx;
  items.forEach((item, i) => {
    const bullet = ordered ? `${i + 1}.` : "•";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...accent);
    const bw = doc.getTextWidth(bullet + " ");
    ensure(ctx, 6);
    doc.text(bullet, M + 2, ctx.y);
    writeRich(ctx, item, { indent: 4 + bw, gap: 0.6 });
  });
  ctx.y += 1;
}

/** Encadré teinté (note / à retenir / astuce…). */
function tintBox(
  ctx: Ctx,
  opts: {
    label?: string;
    accent: { strong: RGB; tint: RGB; border: RGB };
    lines?: string[]; // paragraphes
    bullets?: string[]; // items de liste
  }
) {
  const { doc, M, W } = ctx;
  const innerW = W - 2 * M - 8;

  // Pré-mesure de la hauteur du contenu.
  const measure = (text: string, bold: boolean, size = 10) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    // On mesure sur du texte « aplati » (gras retiré) : approximation sûre.
    const flat = sanitize(text.replace(/\*\*(.+?)\*\*/g, "$1"));
    return (doc.splitTextToSize(flat, innerW) as string[]).length;
  };
  const lh = 4.6;
  let bodyLines = 0;
  for (const l of opts.lines ?? []) bodyLines += measure(l, false);
  for (const b of opts.bullets ?? []) bodyLines += measure("• " + b, false);
  const labelH = opts.label ? 5.5 : 0;
  const boxH = 4 + labelH + bodyLines * lh + 4;

  ensure(ctx, boxH);
  doc.setDrawColor(...opts.accent.border);
  doc.setFillColor(...opts.accent.tint);
  doc.setLineWidth(0.4);
  doc.roundedRect(M, ctx.y, W - 2 * M, boxH, 2, 2, "FD");

  const innerStartY = ctx.y;
  ctx.y += 4.5;
  if (opts.label) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...opts.accent.strong);
    doc.text(sanitize(opts.label.toUpperCase()), M + 4, ctx.y);
    ctx.y += labelH;
  }
  for (const line of opts.lines ?? []) {
    writeRichInBox(ctx, line, M + 4, innerW, lh);
  }
  for (const b of opts.bullets ?? []) {
    writeRichInBox(ctx, "• " + b, M + 4, innerW, lh);
  }
  ctx.y = innerStartY + boxH + 2.5;
}

/** Variante de writeRich contrainte à une largeur (pour les encadrés). */
function writeRichInBox(
  ctx: Ctx,
  text: string,
  x0: number,
  maxW: number,
  lh: number
) {
  const { doc } = ctx;
  doc.setFontSize(10);
  doc.setTextColor(...NAVY_SOFT);
  const words: Run[] = [];
  for (const run of parseRuns(text)) {
    for (const piece of run.text.split(/(\s+)/)) {
      if (piece === "") continue;
      words.push({ text: piece, bold: run.bold });
    }
  }
  let x = x0;
  for (const word of words) {
    doc.setFont("helvetica", word.bold ? "bold" : "normal");
    const isSpace = /^\s+$/.test(word.text);
    const w = doc.getTextWidth(word.text);
    if (!isSpace && x + w > x0 + maxW && x > x0) {
      ctx.y += lh;
      x = x0;
    }
    if (isSpace && x === x0) continue;
    doc.text(word.text, x, ctx.y);
    x += w;
  }
  ctx.y += lh;
}

/** Formule mise en évidence (encadré monospace léger). */
function formulaBox(ctx: Ctx, label: string | undefined, expr: string) {
  const { doc, M, W } = ctx;
  ensure(ctx, 11);
  const h = 9;
  doc.setDrawColor(...C.sky.border);
  doc.setFillColor(...C.sky.tint);
  doc.setLineWidth(0.3);
  doc.roundedRect(M, ctx.y, W - 2 * M, h, 1.5, 1.5, "FD");
  let x = M + 4;
  if (label) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...GREY);
    doc.text(sanitize(label) + " :", x, ctx.y + 5.8);
    x += doc.getTextWidth(sanitize(label) + " :  ");
  }
  doc.setFont("courier", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text(sanitize(expr), x, ctx.y + 5.8);
  ctx.y += h + 2.5;
}

/** Tableau (en-tête foncé, lignes zébrées). */
function drawTable(
  ctx: Ctx,
  entetes: string[],
  lignes: string[][],
  titre?: string
) {
  const { doc, M, W } = ctx;
  if (titre) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...NAVY);
    ensure(ctx, 6);
    doc.text(sanitize(titre), M, ctx.y);
    ctx.y += 5;
  }
  const tableW = W - 2 * M;
  const nCol = Math.max(1, entetes.length);
  const colW = tableW / nCol;
  const pad = 1.8;
  doc.setFontSize(8.8);

  const rowInfo = (cells: string[], bold: boolean) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const wrapped = cells.map(
      (c) => doc.splitTextToSize(sanitize(c), colW - 2 * pad) as string[]
    );
    const maxLines = Math.max(1, ...wrapped.map((w) => w.length));
    return { h: maxLines * 4 + 2.6, wrapped };
  };

  const drawHead = () => {
    const head = rowInfo(entetes, true);
    ensure(ctx, head.h + 4);
    doc.setFillColor(...NAVY);
    doc.rect(M, ctx.y, tableW, head.h, "F");
    doc.setTextColor(...WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.8);
    entetes.forEach((_, ci) => {
      head.wrapped[ci].forEach((ln, li) => {
        doc.text(ln, M + ci * colW + pad, ctx.y + 3.6 + li * 4);
      });
    });
    ctx.y += head.h;
    return head.h;
  };

  drawHead();

  lignes.forEach((row, ri) => {
    const r = rowInfo(row, false);
    if (ctx.y + r.h > ctx.H - 16) {
      newPage(ctx);
      drawHead();
    }
    doc.setFillColor(ri % 2 ? 245 : 255, ri % 2 ? 247 : 255, ri % 2 ? 251 : 255);
    doc.rect(M, ctx.y, tableW, r.h, "F");
    doc.setDrawColor(224, 228, 236);
    doc.setLineWidth(0.15);
    doc.rect(M, ctx.y, tableW, r.h);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.8);
    doc.setTextColor(...NAVY);
    row.forEach((_, ci) => {
      (r.wrapped[ci] ?? []).forEach((ln, li) => {
        doc.text(ln, M + ci * colW + pad, ctx.y + 3.6 + li * 4);
      });
    });
    for (let c = 1; c < nCol; c++) {
      doc.line(M + c * colW, ctx.y, M + c * colW, ctx.y + r.h);
    }
    ctx.y += r.h;
  });
  ctx.y += 3;
}

/** En-tête de couverture (bandeau navy avec matière + titre + intro). */
function cover(ctx: Ctx, matiereLabel: string, titre: string, intro?: string) {
  const { doc, M, W } = ctx;
  const bandH = 26;
  doc.setFillColor(...NAVY);
  doc.roundedRect(M, ctx.y, W - 2 * M, bandH, 2.5, 2.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(150, 190, 245);
  doc.text(
    `CRPE AVEC NOA · FICHE · ${matiereLabel.toUpperCase()}`,
    M + 6,
    ctx.y + 8
  );
  doc.setFontSize(15);
  doc.setTextColor(...WHITE);
  const tLines = doc.splitTextToSize(sanitize(titre), W - 2 * M - 12) as string[];
  let ty = ctx.y + 16;
  tLines.forEach((ln) => {
    doc.text(ln, M + 6, ty);
    ty += 6.5;
  });
  ctx.y += bandH + 5;

  if (intro) {
    writeRich(ctx, intro, { size: 10.5, color: GREY, gap: 2 });
    doc.setDrawColor(...C.sky.strong);
    doc.setLineWidth(0.5);
    doc.line(M, ctx.y, W - M, ctx.y);
    ctx.y += 4;
  }
}

/* ------------------------------------------------------------------ */
/*  Constructeurs par matière                                         */
/* ------------------------------------------------------------------ */

function buildFrancais(ctx: Ctx, f: Fiche) {
  cover(ctx, "Français", f.titre);

  rubricBar(ctx, "Définition", C.indigo.strong);
  writeRich(ctx, f.definition);

  rubricBar(ctx, "Points clés", C.emerald.strong);
  bulletList(ctx, f.points, C.emerald.strong);

  rubricBar(ctx, "Exemple", C.amber.strong);
  tintBox(ctx, { accent: C.amber, lines: f.exemple });

  rubricBar(ctx, "Pièges CRPE", C.rose.strong);
  bulletList(ctx, f.pieges, C.rose.strong);

  rubricBar(ctx, "À retenir", C.violet.strong);
  tintBox(ctx, { accent: C.violet, lines: [f.retenir] });
}

function buildMaths(ctx: Ctx, f: MathFiche) {
  cover(ctx, "Mathématiques", f.titre, f.intro);

  rubricBar(ctx, "Définition", C.indigo.strong);
  writeRich(ctx, f.definition);

  rubricBar(ctx, "Comprendre", C.sky.strong);
  for (const p of f.comprendre) writeRich(ctx, p);

  if (f.points?.length) {
    rubricBar(ctx, "Points essentiels", C.emerald.strong);
    bulletList(ctx, f.points, C.emerald.strong);
  }

  if (f.formules?.length) {
    rubricBar(ctx, "Formules", C.sky.strong);
    for (const fm of f.formules) formulaBox(ctx, fm.label, fm.expr);
  }

  if (f.tableau) {
    rubricBar(ctx, "Tableau", C.teal.strong);
    drawTable(ctx, f.tableau.entetes, f.tableau.lignes, f.tableau.titre);
  }

  rubricBar(ctx, "Méthode", C.emerald.strong);
  bulletList(ctx, f.methode, C.emerald.strong, true);

  rubricBar(ctx, "Exemple corrigé", C.amber.strong);
  if (f.exemple.enonce) writeRich(ctx, f.exemple.enonce, { size: 10, color: NAVY });
  for (const l of f.exemple.lignes) {
    writeRich(ctx, l.calcul, { indent: 2, gap: l.note ? 0.2 : 1 });
    if (l.note) writeRich(ctx, l.note, { indent: 6, size: 9, color: GREY });
  }

  rubricBar(ctx, "Pièges fréquents", C.rose.strong);
  for (const p of f.pieges) {
    tintBox(ctx, { accent: C.rose, label: p.erreur, lines: [p.pourquoi] });
  }

  rubricBar(ctx, "Astuce", C.amber.strong);
  tintBox(ctx, { accent: C.amber, lines: [f.astuce] });

  rubricBar(ctx, "À retenir", C.violet.strong);
  tintBox(ctx, { accent: C.violet, bullets: f.retenir });

  rubricBar(ctx, "Mini-entraînement", C.sky.strong);
  quizBlock(ctx, f.quiz);
}

function buildPhysique(ctx: Ctx, f: PhysFiche) {
  cover(ctx, "Physique-Chimie", f.titre, f.intro);

  rubricBar(ctx, "Définition", C.indigo.strong);
  writeRich(ctx, f.definition);

  rubricBar(ctx, "Explication", C.sky.strong);
  for (const p of f.explication) writeRich(ctx, p);

  if (f.points?.length) {
    rubricBar(ctx, "Points essentiels", C.emerald.strong);
    for (const g of f.points) {
      if (g.titre) subTitle(ctx, g.titre, C.emerald.strong);
      bulletList(ctx, g.points, C.emerald.strong);
    }
  }

  if (f.formules?.length) {
    rubricBar(ctx, "Formules", C.sky.strong);
    for (const fm of f.formules) formulaBox(ctx, fm.label, fm.expr);
  }

  if (f.fonctionnement?.length) {
    rubricBar(ctx, "Fonctionnement", C.teal.strong);
    bulletList(ctx, f.fonctionnement, C.teal.strong, true);
  }

  rubricBar(ctx, "Exemple", C.amber.strong);
  writeRich(ctx, f.exemple);

  rubricBar(ctx, "Pièges à éviter", C.rose.strong);
  for (const p of f.pieges) {
    tintBox(ctx, { accent: C.rose, label: p.erreur, lines: [p.pourquoi] });
  }

  rubricBar(ctx, "Astuce", C.amber.strong);
  tintBox(ctx, { accent: C.amber, lines: [f.astuce] });

  rubricBar(ctx, "À retenir", C.violet.strong);
  tintBox(ctx, { accent: C.violet, bullets: f.retenir });

  rubricBar(ctx, "Mini-entraînement", C.sky.strong);
  quizBlock(ctx, f.quiz);
}

function buildSvt(ctx: Ctx, f: SvtFiche) {
  cover(ctx, "SVT", f.titre, f.intro);

  rubricBar(ctx, "Définition", C.indigo.strong);
  writeRich(ctx, f.definition);

  rubricBar(ctx, "Explication", C.sky.strong);
  for (const p of f.explication) writeRich(ctx, p);

  if (f.points?.length) {
    rubricBar(ctx, "Points essentiels", C.emerald.strong);
    for (const g of f.points) {
      if (g.titre) subTitle(ctx, g.titre, C.emerald.strong);
      bulletList(ctx, g.points, C.emerald.strong);
    }
  }

  if (f.fonctionnement?.length) {
    rubricBar(ctx, "Fonctionnement", C.teal.strong);
    bulletList(ctx, f.fonctionnement, C.teal.strong, true);
  }

  rubricBar(ctx, "Exemple", C.amber.strong);
  writeRich(ctx, f.exemple);

  rubricBar(ctx, "Pièges à éviter", C.rose.strong);
  for (const p of f.pieges) {
    tintBox(ctx, { accent: C.rose, label: p.erreur, lines: [p.pourquoi] });
  }

  rubricBar(ctx, "Astuce", C.amber.strong);
  tintBox(ctx, { accent: C.amber, lines: [f.astuce] });

  rubricBar(ctx, "À retenir", C.violet.strong);
  tintBox(ctx, { accent: C.violet, bullets: f.retenir });

  rubricBar(ctx, "Mini-entraînement", C.sky.strong);
  quizBlock(ctx, f.quiz);
}

function buildHistoire(ctx: Ctx, f: HistoireFiche) {
  cover(ctx, "Histoire", f.titre, f.intro);

  rubricBar(ctx, "Contexte", C.sky.strong);
  for (const p of f.contexte) writeRich(ctx, p);

  if (f.acteurs?.length) {
    rubricBar(ctx, "Acteurs principaux", C.indigo.strong);
    bulletList(ctx, f.acteurs, C.indigo.strong);
  }

  rubricBar(ctx, "Causes", C.emerald.strong);
  for (const g of f.causes) {
    if (g.titre) subTitle(ctx, g.titre, C.emerald.strong);
    bulletList(ctx, g.points, C.emerald.strong);
  }

  rubricBar(ctx, "Événements", C.rose.strong);
  for (const g of f.evenements) {
    if (g.titre) subTitle(ctx, g.titre, C.rose.strong);
    bulletList(ctx, g.points, C.rose.strong);
  }

  rubricBar(ctx, "Conséquences", C.amber.strong);
  for (const g of f.consequences) {
    if (g.titre) subTitle(ctx, g.titre, C.amber.strong);
    bulletList(ctx, g.points, C.amber.strong);
  }

  if (f.frise?.length) {
    rubricBar(ctx, "Frise chronologique", C.teal.strong);
    drawTable(
      ctx,
      ["Date", "Repère"],
      f.frise.map((r) => [r.date, r.label])
    );
  }

  if (f.tableau) {
    rubricBar(ctx, "Tableau comparatif", C.teal.strong);
    drawTable(ctx, f.tableau.entetes, f.tableau.lignes, f.tableau.titre);
  }

  rubricBar(ctx, "À retenir", C.violet.strong);
  tintBox(ctx, { accent: C.violet, bullets: f.retenir });
}

function buildLangue(
  ctx: Ctx,
  f: AnglaisFiche | EspagnolFiche,
  label: string
) {
  cover(ctx, label, f.titre, f.intro);

  rubricBar(ctx, "À retenir", C.emerald.strong);
  tintBox(ctx, { accent: C.emerald, bullets: f.retenir });

  rubricBar(ctx, "Explications", C.sky.strong);
  for (const s of f.sections) {
    subTitle(ctx, s.titre, C.sky.strong);
    if (s.points?.length) bulletList(ctx, s.points, C.sky.strong);
    if (s.exemples?.length) {
      tintBox(ctx, { accent: C.amber, label: "Exemples", lines: s.exemples });
    }
    if (s.tableau) {
      drawTable(ctx, s.tableau.entetes, s.tableau.lignes, s.tableau.titre);
    }
  }

  rubricBar(ctx, "Attention", C.rose.strong);
  bulletList(ctx, f.attention, C.rose.strong);
}

/** Bloc de mini-questions (question + correction). */
function quizBlock(
  ctx: Ctx,
  quiz: Array<{ question: string; correction: string }>
) {
  quiz.forEach((q, i) => {
    ensure(ctx, 10);
    writeRich(ctx, `Q${i + 1}. ${q.question}`, {
      size: 10,
      color: NAVY,
      gap: 0.4,
    });
    tintBox(ctx, { accent: C.emerald, label: "Réponse", lines: [q.correction] });
  });
}

/* ------------------------------------------------------------------ */
/*  Assemblage + téléchargement                                       */
/* ------------------------------------------------------------------ */

async function buildDoc(data: FichePdfData): Promise<import("jspdf").jsPDF> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const ctx: Ctx = {
    doc,
    y: 16,
    page: 1,
    W: doc.internal.pageSize.getWidth(),
    H: doc.internal.pageSize.getHeight(),
    M: 16,
    footer: `Fiche ${MATIERE_LABELS[data.matiere]} — CRPE avec Noa`,
  };

  switch (data.matiere) {
    case "francais":
      buildFrancais(ctx, data.fiche);
      break;
    case "maths":
      buildMaths(ctx, data.fiche);
      break;
    case "physique-chimie":
      buildPhysique(ctx, data.fiche);
      break;
    case "svt":
      buildSvt(ctx, data.fiche);
      break;
    case "histoire":
      buildHistoire(ctx, data.fiche);
      break;
    case "anglais":
      buildLangue(ctx, data.fiche, "Anglais");
      break;
    case "espagnol":
      buildLangue(ctx, data.fiche, "Espagnol");
      break;
  }

  drawFooter(ctx);
  return doc;
}

/** Slug servant de nom de fichier (identique aux liens du site). */
function ficheSlug(data: FichePdfData): string {
  if (data.matiere === "francais") return slugify(data.fiche.titre);
  return data.fiche.slug;
}

/** Génère et télécharge le PDF complet de la fiche. */
export async function downloadFichePdf(data: FichePdfData): Promise<void> {
  const doc = await buildDoc(data);
  const slug = ficheSlug(data).replace(/[^a-z0-9-]/gi, "");
  doc.save(`fiche-${data.matiere}-${slug}.pdf`);
}
