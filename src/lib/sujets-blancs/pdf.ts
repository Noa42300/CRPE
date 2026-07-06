/**
 * Génération PDF des SUJETS BLANCS (côté navigateur)
 * --------------------------------------------------
 * Produit un PDF propre et imprimable À PARTIR DU CONTENU structuré
 * (les mêmes blocs que l'affichage web). Aucune capture d'écran, aucune
 * duplication de contenu : on écrit le sujet une seule fois.
 *
 * jsPDF est importé dynamiquement pour ne pas alourdir le chargement des
 * pages : le module n'est téléchargé que lorsqu'on clique sur un bouton.
 */
import type {
  Block,
  Bareme,
  SujetBlanc,
  SujetSection,
} from "./types";
import { SUJET_MATIERES } from "./types";
import { ILLUSTRATIONS, svgString } from "./illustrations";

// Charte graphique (reprise du site) en composantes RVB.
const NAVY: [number, number, number] = [11, 23, 48]; // navy-900
const SKY: [number, number, number] = [36, 120, 234]; // sky-600
const GREY: [number, number, number] = [90, 100, 120];
const LIGHT: [number, number, number] = [238, 242, 249]; // navy-50

const NOTE_COLORS: Record<
  string,
  { border: [number, number, number]; fill: [number, number, number]; label: string }
> = {
  info: { border: [125, 190, 250], fill: [239, 248, 255], label: "À noter" },
  methode: { border: [110, 210, 170], fill: [236, 253, 245], label: "Méthode" },
  attendu: {
    border: [180, 150, 230],
    fill: [245, 240, 253],
    label: "Ce que le correcteur attend",
  },
  attention: { border: [245, 165, 175], fill: [254, 242, 243], label: "Attention" },
};

/**
 * Certains symboles Unicode (√, π, ≈, −, →…) n'appartiennent pas à
 * l'encodage WinAnsi des polices standard de jsPDF et s'afficheraient de
 * façon incorrecte. On les remplace par un équivalent lisible et sûr.
 * (L'affichage WEB, lui, conserve les vrais symboles.)
 */
const PDF_CHAR_MAP: Array<[RegExp, string]> = [
  [/√/g, "racine de "],
  [/π/g, "pi"],
  [/≈/g, "~"],
  [/≤/g, "<="],
  [/≥/g, ">="],
  [/≠/g, "!="],
  [/−/g, "-"], // vrai signe moins U+2212 → trait d'union
  [/→/g, "->"],
  [/⇒/g, "=>"],
  [/∞/g, "infini"],
  [/…/g, "..."],
];

// Retire le **gras** Markdown (jsPDF gère le gras via setFont, pas inline)
// et neutralise les symboles non pris en charge par la police PDF.
function plain(text: string): string {
  let out = text.replace(/\*\*(.+?)\*\*/g, "$1");
  for (const [re, rep] of PDF_CHAR_MAP) out = out.replace(re, rep);
  return out;
}

interface RasterImage {
  data: string;
  w: number;
  h: number;
}

interface Ctx {
  doc: import("jspdf").jsPDF;
  y: number;
  page: number;
  readonly W: number;
  readonly H: number;
  readonly M: number; // marge
  footer: string;
  images: Map<string, RasterImage>; // figures rasterisées (clé → PNG)
}

/** Rasterise un SVG en PNG (data URI) via un canvas hors écran. */
function rasterizeSvg(svg: string): Promise<RasterImage> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = 2; // rendu net à l'impression
      const w = img.width || 400;
      const h = img.height || 300;
      const canvas = document.createElement("canvas");
      canvas.width = w * scale;
      canvas.height = h * scale;
      const c = canvas.getContext("2d");
      if (!c) return reject(new Error("canvas context indisponible"));
      c.fillStyle = "#ffffff";
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve({ data: canvas.toDataURL("image/png"), w, h });
    };
    img.onerror = () => reject(new Error("rasterisation SVG impossible"));
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  });
}

/** Rasterise à l'avance toutes les figures présentes dans les sections. */
async function prepareImages(
  sections: SujetSection[]
): Promise<Map<string, RasterImage>> {
  const map = new Map<string, RasterImage>();
  const keys = new Set<string>();
  for (const sec of sections) {
    for (const b of sec.blocks) {
      if (b.type === "figure") keys.add(b.illustration);
    }
  }
  for (const key of keys) {
    const svg = svgString(key);
    if (!svg) continue;
    try {
      map.set(key, await rasterizeSvg(svg));
    } catch {
      // En cas d'échec, on retombera sur la description textuelle (alt).
    }
  }
  return map;
}

const LH = 5.2; // interligne de base (mm)

function newPage(ctx: Ctx) {
  drawFooter(ctx);
  ctx.doc.addPage();
  ctx.page += 1;
  ctx.y = ctx.M;
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

/** S'assure qu'il reste `need` mm avant le pied de page, sinon saute. */
function ensure(ctx: Ctx, need: number) {
  if (ctx.y + need > ctx.H - 16) newPage(ctx);
}

/** Écrit un paragraphe justifié, en gérant les sauts de page. */
function writeText(
  ctx: Ctx,
  text: string,
  opts: {
    size?: number;
    style?: "normal" | "bold" | "italic";
    color?: [number, number, number];
    indent?: number;
    gap?: number;
  } = {}
) {
  const { doc, M, W } = ctx;
  const size = opts.size ?? 10;
  const indent = opts.indent ?? 0;
  doc.setFont("helvetica", opts.style ?? "normal");
  doc.setFontSize(size);
  doc.setTextColor(...(opts.color ?? NAVY));
  const maxW = W - 2 * M - indent;
  const lines = doc.splitTextToSize(plain(text), maxW) as string[];
  const lh = size * 0.42 + 1.2;
  for (const line of lines) {
    ensure(ctx, lh);
    doc.text(line, M + indent, ctx.y);
    ctx.y += lh;
  }
  ctx.y += opts.gap ?? 1.4;
}

/** Bandeau de séparation d'une grande partie (Méthodologie, Erreurs…). */
function bandeau(ctx: Ctx, title: string) {
  const { doc, M, W } = ctx;
  ensure(ctx, 14);
  ctx.y += 3;
  doc.setFillColor(...SKY);
  doc.roundedRect(M, ctx.y - 4, W - 2 * M, 8, 1.2, 1.2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(255, 255, 255);
  doc.text(plain(title), W / 2, ctx.y + 1.6, { align: "center" });
  ctx.y += 10;
}

function sectionHeading(ctx: Ctx, title: string, points?: number) {
  const { doc, M, W } = ctx;
  ensure(ctx, 14);
  ctx.y += 2;
  doc.setFillColor(...NAVY);
  doc.roundedRect(M, ctx.y - 4, W - 2 * M, 9, 1.5, 1.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(plain(title), M + 3, ctx.y + 2.2);
  if (typeof points === "number") {
    doc.text(`${points} points`, W - M - 3, ctx.y + 2.2, { align: "right" });
  }
  ctx.y += 10;
}

function blockToPdf(ctx: Ctx, block: Block) {
  const { doc, M, W } = ctx;
  switch (block.type) {
    case "p":
      writeText(ctx, block.text);
      break;

    case "intro": {
      const top = ctx.y;
      if (block.citation) {
        writeText(ctx, `« ${block.citation} »`, {
          style: "italic",
          size: 11,
          color: [22, 36, 77],
          indent: 4,
        });
        if (block.auteur) {
          writeText(ctx, `— ${block.auteur}`, {
            size: 9,
            color: GREY,
            indent: 4,
            gap: 2,
          });
        }
        // Filet bleu à gauche de la citation.
        doc.setDrawColor(...SKY);
        doc.setLineWidth(0.8);
        doc.line(M + 1.5, top, M + 1.5, ctx.y - 2);
        doc.setLineWidth(0.2);
      }
      for (const p of block.paragraphs) writeText(ctx, p);
      ctx.y += 1;
      break;
    }

    case "consigne":
      writeText(ctx, block.text, { size: 9, style: "italic", color: GREY });
      break;

    case "document": {
      ensure(ctx, 16);
      const boxTop = ctx.y;
      if (block.titre) {
        doc.setFillColor(...LIGHT);
        doc.rect(M, ctx.y, W - 2 * M, 7, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(...NAVY);
        doc.text(plain(block.titre), M + 3, ctx.y + 4.8);
        ctx.y += 9;
      } else {
        ctx.y += 2;
      }
      for (const line of block.lines) {
        writeText(ctx, line, { size: 9.5, indent: 3, color: [40, 51, 74] });
      }
      if (block.source) {
        writeText(ctx, block.source, {
          size: 8,
          style: "italic",
          color: GREY,
          indent: 3,
        });
      }
      // Filet latéral pour matérialiser le document.
      doc.setDrawColor(...SKY);
      doc.setLineWidth(0.8);
      doc.line(M, boxTop, M, ctx.y - 1);
      doc.setLineWidth(0.2);
      ctx.y += 2;
      break;
    }

    case "figure": {
      const png = ctx.images.get(block.illustration);
      if (block.titre) {
        writeText(ctx, block.titre, { style: "bold", size: 10, gap: 1 });
      }
      if (png) {
        const maxW = 105; // mm
        const w = maxW;
        const h = maxW * (png.h / png.w);
        ensure(ctx, h + 6);
        const x = (W - w) / 2;
        doc.addImage(png.data, "PNG", x, ctx.y, w, h);
        // Cadre léger autour de l'illustration.
        doc.setDrawColor(200, 206, 216);
        doc.setLineWidth(0.3);
        doc.rect(x, ctx.y, w, h);
        ctx.y += h + 2;
      } else {
        const alt = ILLUSTRATIONS[block.illustration]?.alt ?? "Illustration";
        writeText(ctx, `[Illustration : ${alt}]`, {
          style: "italic",
          size: 9,
          color: GREY,
        });
      }
      if (block.legende) {
        writeText(ctx, block.legende, {
          style: "italic",
          size: 9,
          color: GREY,
        });
      }
      if (block.source) {
        writeText(ctx, block.source, { size: 8, style: "italic", color: GREY });
      }
      ctx.y += 2;
      break;
    }

    case "questions":
      for (const q of block.items) {
        const label = q.num + " ";
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        const numW = doc.getTextWidth(label);
        const suffix =
          typeof q.points === "number"
            ? `  (${q.points} pt${q.points > 1 ? "s" : ""})`
            : "";
        const maxW = W - 2 * M - numW - 2;
        const lines = doc.splitTextToSize(plain(q.text) + suffix, maxW) as string[];
        const lh = 5;
        ensure(ctx, lines.length * lh);
        doc.setTextColor(...SKY);
        doc.text(label, M, ctx.y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...NAVY);
        lines.forEach((ln, i) => {
          doc.text(ln, M + numW + 2, ctx.y);
          if (i < lines.length - 1) ctx.y += lh;
        });
        ctx.y += lh + 1;
      }
      break;

    case "list":
      block.items.forEach((it, i) => {
        const bullet = block.ordered ? `${i + 1}.` : "•";
        const bw = doc.getTextWidth(bullet + " ");
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const lines = doc.splitTextToSize(
          plain(it),
          W - 2 * M - bw - 4
        ) as string[];
        ensure(ctx, lines.length * LH);
        doc.setTextColor(...SKY);
        doc.text(bullet, M + 2, ctx.y);
        doc.setTextColor(...NAVY);
        lines.forEach((ln, k) => {
          doc.text(ln, M + 4 + bw, ctx.y);
          if (k < lines.length - 1) ctx.y += LH;
        });
        ctx.y += LH + 0.5;
      });
      ctx.y += 1;
      break;

    case "table":
      drawTable(ctx, block.entetes, block.lignes, block.titre);
      break;

    case "note": {
      const c = NOTE_COLORS[block.variant];
      // Mesure la hauteur nécessaire.
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      const innerW = W - 2 * M - 8;
      const wrapped = block.lines.map(
        (l) => doc.splitTextToSize(plain(l), innerW) as string[]
      );
      const bodyLines = wrapped.reduce((n, arr) => n + arr.length, 0);
      const boxH = 8 + bodyLines * 4.6 + (block.lines.length - 1) * 1 + 3;
      ensure(ctx, boxH);
      doc.setDrawColor(...c.border);
      doc.setFillColor(...c.fill);
      doc.setLineWidth(0.4);
      doc.roundedRect(M, ctx.y, W - 2 * M, boxH, 2, 2, "FD");
      let yy = ctx.y + 5.5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...NAVY);
      doc.text(plain(block.titre ?? c.label), M + 4, yy);
      yy += 5;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(40, 51, 74);
      wrapped.forEach((arr, idx) => {
        arr.forEach((ln) => {
          doc.text(ln, M + 4, yy);
          yy += 4.6;
        });
        if (idx < wrapped.length - 1) yy += 1;
      });
      ctx.y += boxH + 3;
      break;
    }

    case "qa": {
      ensure(ctx, 12);
      // Question
      const label = block.num ? block.num + " " : "";
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      const numW = label ? doc.getTextWidth(label) : 0;
      const suffix =
        typeof block.points === "number"
          ? `  (${block.points} pt${block.points > 1 ? "s" : ""})`
          : "";
      const qLines = doc.splitTextToSize(
        plain(block.question) + suffix,
        W - 2 * M - numW - 2
      ) as string[];
      ensure(ctx, qLines.length * 5.2);
      if (label) {
        doc.setTextColor(...SKY);
        doc.text(label, M, ctx.y);
      }
      doc.setTextColor(...NAVY);
      qLines.forEach((ln, i) => {
        doc.text(ln, M + numW, ctx.y);
        if (i < qLines.length - 1) ctx.y += 5.2;
      });
      ctx.y += 6;
      // Réponse (avec filet bleu à gauche)
      const respTop = ctx.y - 3;
      for (const line of block.reponse) {
        writeText(ctx, line, { size: 10, indent: 5, color: [40, 51, 74] });
      }
      doc.setDrawColor(...SKY);
      doc.setLineWidth(0.7);
      doc.line(M + 1.5, respTop, M + 1.5, ctx.y - 2);
      doc.setLineWidth(0.2);
      if (block.attendu) {
        blockToPdf(ctx, {
          type: "note",
          variant: "attendu",
          lines: [block.attendu],
        });
      }
      ctx.y += 2;
      break;
    }
  }
}

function drawTable(
  ctx: Ctx,
  entetes: string[],
  lignes: string[][],
  titre?: string
) {
  const { doc, M, W } = ctx;
  if (titre) {
    writeText(ctx, titre, { style: "bold", size: 10, gap: 0.5 });
  }
  const tableW = W - 2 * M;
  const nCol = entetes.length;
  const colW = tableW / nCol;
  const pad = 1.8;
  doc.setFontSize(8.8);

  const rowHeight = (cells: string[], bold: boolean): { h: number; wrapped: string[][] } => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const wrapped = cells.map(
      (c) => doc.splitTextToSize(plain(c), colW - 2 * pad) as string[]
    );
    const maxLines = Math.max(1, ...wrapped.map((w) => w.length));
    return { h: maxLines * 4 + 2.4, wrapped };
  };

  // En-tête
  const head = rowHeight(entetes, true);
  ensure(ctx, head.h + 4);
  doc.setFillColor(...NAVY);
  doc.rect(M, ctx.y, tableW, head.h, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  entetes.forEach((_, ci) => {
    const lines = head.wrapped[ci];
    lines.forEach((ln, li) => {
      doc.text(ln, M + ci * colW + pad, ctx.y + 3.4 + li * 4);
    });
  });
  ctx.y += head.h;

  // Lignes
  lignes.forEach((row, ri) => {
    const r = rowHeight(row, false);
    if (ctx.y + r.h > ctx.H - 16) {
      newPage(ctx);
      // Redessine l'en-tête sur la nouvelle page.
      doc.setFillColor(...NAVY);
      doc.rect(M, ctx.y, tableW, head.h, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.8);
      entetes.forEach((_, ci) => {
        head.wrapped[ci].forEach((ln, li) => {
          doc.text(ln, M + ci * colW + pad, ctx.y + 3.4 + li * 4);
        });
      });
      ctx.y += head.h;
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
      r.wrapped[ci].forEach((ln, li) => {
        doc.text(ln, M + ci * colW + pad, ctx.y + 3.4 + li * 4);
      });
    });
    // Séparateurs verticaux
    for (let c = 1; c < nCol; c++) {
      doc.line(M + c * colW, ctx.y, M + c * colW, ctx.y + r.h);
    }
    ctx.y += r.h;
  });
  ctx.y += 3;
}

function coverBlock(
  ctx: Ctx,
  sujet: SujetBlanc,
  kind: "sujet" | "correction"
) {
  const { doc, M, W } = ctx;
  const meta = SUJET_MATIERES[sujet.matiere];
  // Bandeau de titre
  doc.setFillColor(...NAVY);
  doc.roundedRect(M, ctx.y, W - 2 * M, 30, 2.5, 2.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...[150, 190, 245]);
  doc.text(
    `CRPE avec Noa · Sujet blanc · ${meta.label}`.toUpperCase(),
    M + 6,
    ctx.y + 9
  );
  doc.setFontSize(15);
  doc.setTextColor(255, 255, 255);
  const tLines = doc.splitTextToSize(plain(sujet.titre), W - 2 * M - 12) as string[];
  let ty = ctx.y + 17;
  tLines.forEach((ln) => {
    doc.text(ln, M + 6, ty);
    ty += 6.5;
  });
  ctx.y += 30 + 4;

  // Bandeau info (épreuve · durée · barème · type de document)
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  const badge = kind === "sujet" ? "SUJET" : "CORRIGÉ";
  writeText(
    ctx,
    `${badge}  ·  ${sujet.epreuve}  ·  ${sujet.duree}  ·  Barème sur ${sujet.totalPoints} points`,
    { size: 9, color: GREY, gap: 2 }
  );
  doc.setDrawColor(...SKY);
  doc.setLineWidth(0.5);
  doc.line(M, ctx.y, W - 2 * M + M, ctx.y);
  ctx.y += 4;
}

function baremeBlock(ctx: Ctx, bareme: Bareme) {
  sectionHeading(ctx, "Barème indicatif");
  drawTable(ctx, bareme.entetes, bareme.lignes);
  writeText(ctx, `Total : ${bareme.total}`, {
    style: "bold",
    size: 10.5,
    color: NAVY,
  });
}

function renderSections(ctx: Ctx, sections: SujetSection[]) {
  for (const sec of sections) {
    sectionHeading(ctx, sec.titre, sec.points);
    if (sec.intro) writeText(ctx, sec.intro, { style: "italic", color: GREY });
    for (const block of sec.blocks) blockToPdf(ctx, block);
    ctx.y += 2;
  }
}

async function buildDoc(
  sujet: SujetBlanc,
  kind: "sujet" | "correction"
): Promise<import("jspdf").jsPDF> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const sections =
    kind === "sujet"
      ? sujet.sujet
      : [
          ...sujet.correction,
          ...(sujet.methodologie ?? []),
          ...(sujet.erreursFrequentes ?? []),
        ];
  const images = await prepareImages(sections);
  const ctx: Ctx = {
    doc,
    y: 16,
    page: 1,
    W: doc.internal.pageSize.getWidth(),
    H: doc.internal.pageSize.getHeight(),
    M: 16,
    footer:
      kind === "sujet"
        ? "Sujet blanc CRPE"
        : "Corrigé — Sujet blanc CRPE",
    images,
  };

  coverBlock(ctx, sujet, kind);

  if (kind === "sujet") {
    if (sujet.consignes.length) {
      blockToPdf(ctx, {
        type: "note",
        variant: "info",
        titre: "Consignes",
        lines: sujet.consignes,
      });
    }
    renderSections(ctx, sujet.sujet);
    ctx.y += 2;
    baremeBlock(ctx, sujet.bareme);
  } else {
    if (sujet.correctionIntro) {
      blockToPdf(ctx, {
        type: "note",
        variant: "methode",
        titre: "Esprit de la correction",
        lines: [sujet.correctionIntro],
      });
    }
    renderSections(ctx, sujet.correction);

    if (sujet.methodologie?.length) {
      ctx.y += 3;
      bandeau(ctx, "MÉTHODOLOGIE");
      renderSections(ctx, sujet.methodologie);
    }
    if (sujet.erreursFrequentes?.length) {
      ctx.y += 3;
      bandeau(ctx, "ERREURS FRÉQUENTES");
      renderSections(ctx, sujet.erreursFrequentes);
    }
  }

  drawFooter(ctx);
  return doc;
}

/** Nom de fichier propre (sans accents ni caractères spéciaux). */
function fileName(sujet: SujetBlanc, kind: "sujet" | "correction"): string {
  const base = sujet.slug.replace(/[^a-z0-9-]/gi, "");
  return `${kind === "sujet" ? "sujet" : "corrige"}-${base}.pdf`;
}

/** Télécharge le PDF du sujet ou de la correction. */
export async function downloadSujetPdf(
  sujet: SujetBlanc,
  kind: "sujet" | "correction"
): Promise<void> {
  const doc = await buildDoc(sujet, kind);
  doc.save(fileName(sujet, kind));
}
