// Briques de mise en page du fichier d'autonomie (HTML imprimable A4).
// Le contenu des missions est du HTML de confiance écrit à la main.

export const CSS = String.raw`
@font-face { font-family: "Andika"; src: url("../fonts/andika-latin-400-normal.woff2") format("woff2"); font-weight: 400; }
@font-face { font-family: "Andika"; src: url("../fonts/andika-latin-700-normal.woff2") format("woff2"); font-weight: 700; }
@font-face { font-family: "Andika"; src: url("../fonts/andika-latin-400-italic.woff2") format("woff2"); font-weight: 400; font-style: italic; }
@font-face { font-family: "Lexend"; src: url("../fonts/lexend-latin-400-normal.woff2") format("woff2"); font-weight: 400; }
@font-face { font-family: "Lexend"; src: url("../fonts/lexend-latin-600-normal.woff2") format("woff2"); font-weight: 600; }
@font-face { font-family: "Lexend"; src: url("../fonts/lexend-latin-700-normal.woff2") format("woff2"); font-weight: 700; }

@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: "Andika", "DejaVu Sans", sans-serif;
  font-size: 12.5pt; line-height: 1.38; color: #1c1c1c;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
:root {
  --ink: #1c1c1c; --muted: #5b6370; --rule: #c9ced6; --line: #8f97a3;
  --fr: #0f6e78; --fr-tint: #e6f2f3; --fr-soft: #b9dadd;
  --ma: #b4521a; --ma-tint: #fbefe6; --ma-soft: #efc7ab;
  --l1: #2f7d4a; --l2: #d4741c; --l3: #2a62b0;
}
.page {
  width: 210mm; height: 297mm; padding: 9mm 13mm 8mm 13mm;
  position: relative; display: flex; flex-direction: column;
  break-after: page; page-break-after: always; overflow: hidden;
}
.page.fr { --c: var(--fr); --tint: var(--fr-tint); --soft: var(--fr-soft); }
.page.ma { --c: var(--ma); --tint: var(--ma-tint); --soft: var(--ma-soft); }
.content { flex: 1 1 auto; display: flex; flex-direction: column; overflow: hidden; min-height: 0; }
.content.spread { justify-content: space-between; font-size: 12pt; line-height: 1.33; }
.content.spread .mt { margin-top: 1.3mm; }

/* En-tête */
.hd { display: flex; align-items: center; gap: 3mm; padding-bottom: 2mm; margin-bottom: 3mm; border-bottom: 0.6mm solid var(--c); }
.hd .tag { display: flex; align-items: center; gap: 2mm; background: var(--c); color: #fff; font-family: "Lexend"; font-weight: 600; font-size: 10.5pt; letter-spacing: 0.06em; padding: 1.2mm 3mm 1.2mm 1.6mm; border-radius: 2mm; }
.hd .ico { display: inline-flex; align-items: center; justify-content: center; width: 6.4mm; height: 6.4mm; background: #fff; color: var(--c); border-radius: 1.4mm; font-size: 8.5pt; font-weight: 700; letter-spacing: 0; }
.hd .dom { font-family: "Lexend"; font-size: 10.5pt; color: var(--muted); flex: 1; white-space: nowrap; }
.hd .dom b { color: var(--ink); font-weight: 600; }
.hd .kind { font-family: "Lexend"; font-size: 9pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--c); border: 0.35mm solid var(--c); border-radius: 1.5mm; padding: 0.8mm 2.4mm; }
.hd .prog { display: flex; gap: 0.5mm; align-items: center; }
.hd .prog i { display: block; width: 1.2mm; height: 3.2mm; border-radius: 0.4mm; background: #dfe3e8; }
.hd .prog i.on { background: var(--c); }

/* Pied de page */
.ft { display: flex; align-items: center; justify-content: space-between; font-size: 9.5pt; color: var(--muted); padding-top: 2mm; margin-top: 2mm; border-top: 0.25mm solid var(--rule); }
.ft .pn { font-family: "Lexend"; font-weight: 600; color: var(--ink); font-size: 10pt; }
.ft .self { display: flex; gap: 5mm; align-items: center; }
.cb { display: inline-block; width: 3.8mm; height: 3.8mm; border: 0.35mm solid #555; border-radius: 0.6mm; vertical-align: -0.6mm; margin-right: 1.2mm; background: #fff; }

/* Leçon */
h1.lt { font-family: "Lexend"; font-weight: 700; font-size: 21pt; line-height: 1.15; color: var(--c); margin: 0.5mm 0 3mm; }
h1.lt small { display: block; font-size: 11pt; font-weight: 400; color: var(--muted); margin-top: 1mm; }
.box { border: 0.45mm solid var(--c); border-radius: 3mm; padding: 4.2mm 5mm 3.2mm; position: relative; margin: 3.5mm 0 3mm; }
.box.tint { background: var(--tint); }
.box > .lab { position: absolute; top: -3mm; left: 4mm; background: var(--c); color: #fff; font-family: "Lexend"; font-weight: 600; font-size: 9.5pt; padding: 0.6mm 2.6mm; border-radius: 1.4mm; letter-spacing: 0.04em; }
.box.warn { border-style: dashed; }
.box.warn > .lab { background: #fff; color: var(--c); border: 0.4mm solid var(--c); }
.box p { margin: 0 0 1.6mm; }
.box p:last-child { margin-bottom: 0; }
h2.st { font-family: "Lexend"; font-weight: 600; font-size: 12.5pt; color: var(--ink); margin: 3mm 0 1.8mm; display: flex; align-items: center; gap: 2mm; }
h2.st::before { content: ""; width: 2.2mm; height: 4.8mm; background: var(--c); border-radius: 0.6mm; }
.exs { margin: 0; padding: 0; list-style: none; }
.exs li { padding-left: 6mm; position: relative; margin: 0 0 1.4mm; }
.exs li::before { content: "→"; position: absolute; left: 0; color: var(--c); font-weight: 700; }
.hl { background: var(--soft); border-radius: 0.8mm; padding: 0 0.6mm; font-weight: 700; }
.u { text-decoration: underline; text-decoration-thickness: 0.4mm; text-underline-offset: 0.8mm; }
.uu { text-decoration: underline double; text-underline-offset: 0.8mm; }
.k { color: var(--c); font-weight: 700; }
.mut { color: var(--muted); }
.sm { font-size: 11pt; }
.xs { font-size: 10pt; }
.c { text-align: center; }
.r { text-align: right; }
.row { display: flex; gap: 5mm; }
.row > * { flex: 1; }
.col2 { display: grid; grid-template-columns: 1fr 1fr; column-gap: 7mm; row-gap: 1.6mm; }
.col3 { display: grid; grid-template-columns: 1fr 1fr 1fr; column-gap: 5mm; row-gap: 1.6mm; }
.col4 { display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 4mm; row-gap: 1.6mm; }
.mt { margin-top: 2mm; } .mb { margin-bottom: 2mm; }
.ml { margin-left: 6mm; }

/* Tableaux */
table.t { border-collapse: collapse; width: 100%; font-size: 11.5pt; }
table.t th, table.t td { border: 0.3mm solid #8f97a3; padding: 1.2mm 2mm; text-align: center; vertical-align: middle; }
table.t th { background: var(--tint); font-family: "Lexend"; font-weight: 600; font-size: 10pt; }
table.t td.l, table.t th.l { text-align: left; }
table.t.auto { width: auto; }
table.t.tall td { height: 8mm; }
table.t td.g { background: #f1f3f5; }

/* Conjugaison */
.conj { display: grid; gap: 4mm; }
.conj table { border-collapse: collapse; width: 100%; font-size: 12pt; }
.conj caption { font-family: "Lexend"; font-weight: 600; font-size: 11pt; text-align: left; padding: 0 0 1.2mm 0.5mm; color: var(--c); }
.conj td { padding: 0.8mm 1.6mm; border-bottom: 0.25mm solid var(--rule); }
.conj td.p { color: var(--muted); width: 38%; text-align: right; padding-right: 2.4mm; white-space: nowrap; }
.conj td .tm { background: var(--soft); font-weight: 700; border-radius: 0.8mm; padding: 0 0.6mm; }
.conj td .mt2 { text-decoration: underline; text-decoration-thickness: 0.45mm; text-underline-offset: 0.7mm; font-weight: 700; }

/* Exercices */
.lvl { display: flex; align-items: center; gap: 2mm; font-family: "Lexend"; font-weight: 600; font-size: 10.5pt; margin: 0 0 0.6mm; letter-spacing: 0.02em; }
.lvl .d { display: inline-block; width: 3.2mm; height: 3.2mm; border-radius: 50%; }
.lvl.l1 { color: var(--l1); } .lvl.l1 .d { background: var(--l1); }
.lvl.l2 { color: var(--l2); } .lvl.l2 .d { background: var(--l2); }
.lvl.l3 { color: var(--l3); } .lvl.l3 .d { background: var(--l3); }
.lvl::after { content: ""; flex: 1; border-bottom: 0.3mm dotted currentColor; margin-left: 1mm; opacity: 0.6; }
.ex { margin: 0 0 1mm; }
.exh { display: flex; gap: 2.2mm; align-items: baseline; font-weight: 700; margin-bottom: 0.9mm; }
.exh .n { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 6mm; height: 6mm; border-radius: 50%; border: 0.4mm solid var(--c); color: var(--c); font-family: "Lexend"; font-size: 10pt; font-weight: 700; position: relative; top: -0.3mm; }
.exb { padding-left: 8.2mm; }
.eg { font-size: 11pt; color: #3e4652; background: #f3f4f6; border-radius: 1.6mm; padding: 1mm 2.6mm; margin: 0 0 1.4mm 8.2mm; display: block; }
.eg b.lbl { font-family: "Lexend"; font-weight: 600; font-size: 9.5pt; color: var(--muted); margin-right: 1.4mm; }
.blank { display: inline-block; border-bottom: 0.35mm solid #6b7280; height: 1.15em; vertical-align: -0.25em; margin: 0 0.6mm; }
.lines { width: 100%; background-image: repeating-linear-gradient(to bottom, transparent 0, transparent calc(var(--h) - 0.3mm), #8f97a3 calc(var(--h) - 0.3mm), #8f97a3 var(--h)); height: calc(var(--n) * var(--h)); }
.qcm { display: grid; gap: 1.2mm; }
.qcm .q { display: flex; gap: 3mm; align-items: baseline; flex-wrap: wrap; }
.qcm .o { display: inline-flex; align-items: center; margin-right: 3mm; white-space: nowrap; }
.rel { display: grid; grid-template-columns: max-content 26mm max-content; row-gap: 0.9mm; align-items: center; }
.rel .a { text-align: right; } .rel .a::after, .rel .b::before { content: ""; display: inline-block; width: 2mm; height: 2mm; border-radius: 50%; background: #333; vertical-align: 0.4mm; }
.rel .a::after { margin-left: 2mm; } .rel .b::before { margin-right: 2mm; }
.chips { display: flex; flex-wrap: wrap; gap: 2mm 3mm; }
.chips span { border: 0.3mm solid #8f97a3; border-radius: 1.4mm; padding: 0.4mm 2.2mm; }
.word-box { border: 0.35mm dashed #8f97a3; border-radius: 2mm; padding: 1.5mm 3mm; display: flex; flex-wrap: wrap; gap: 1mm 5mm; justify-content: center; margin-bottom: 1.4mm; }
.text { border-left: 1mm solid var(--soft); padding: 1mm 0 1mm 4mm; font-size: 12pt; line-height: 1.45; margin-bottom: 1.6mm; }
.text p { margin: 0 0 1mm; text-indent: 5mm; }
.text .ttl { font-family: "Lexend"; font-weight: 600; font-size: 11pt; margin-bottom: 1mm; text-indent: 0; }
.op { font-family: "Lexend"; font-size: 13pt; }
.vf .o { margin-right: 2mm; }
svg { display: block; }
.fig { display: flex; justify-content: center; align-items: center; gap: 6mm; }
.hint { font-size: 10.5pt; color: var(--muted); font-style: italic; }
.ans { display: inline-block; min-width: 28mm; border-bottom: 0.35mm solid #6b7280; height: 1.15em; vertical-align: -0.25em; }

/* Corrigés */
.cor { columns: 2; column-gap: 8mm; font-size: 10pt; line-height: 1.32; }
.cor .m { break-inside: avoid-column; margin: 0 0 3mm; }
.cor .m h3 { font-family: "Lexend"; font-size: 10.5pt; margin: 0 0 1mm; color: var(--c); }
.cor .m.fr h3 { color: var(--fr); } .cor .m.ma h3 { color: var(--ma); }
.cor .m p { margin: 0 0 0.8mm; }
.cor .m b { font-family: "Lexend"; font-weight: 600; }
`;

const pad = (n) => String(n).padStart(2, "0");

export const blank = (w = 28) => `<span class="blank" style="width:${w}mm"></span>`;
export const ans = (w = 28) => `<span class="ans" style="min-width:${w}mm"></span>`;
export const lines = (n = 2, h = 8.5) => `<div class="lines" style="--n:${n};--h:${h}mm"></div>`;
export const cb = () => `<span class="cb"></span>`;

export function lvl(k) {
  const lab = { 1: "Je m'entraîne", 2: "Je réfléchis", 3: "Je relève le défi" }[k];
  const dots = Array.from({ length: k }, () => `<span class="d"></span>`).join("");
  return `<div class="lvl l${k}">${dots} ${lab}</div>`;
}

let exCounter = 0;
export function resetEx() { exCounter = 0; }
/** Un exercice numéroté : consigne, exemple éventuel, corps. */
export function ex(consigne, body = "", { eg, style = "" } = {}) {
  exCounter += 1;
  return `<div class="ex" style="${style}">
  <div class="exh"><span class="n">${exCounter}</span><span>${consigne}</span></div>
  ${eg ? `<div class="eg"><b class="lbl">Exemple</b>${eg}</div>` : ""}
  <div class="exb">${body}</div></div>`;
}

export function qcm(items, { gap = 3 } = {}) {
  const k = Math.max(...items.map(([, o]) => o.length));
  return `<div class="qcm" style="display:grid;grid-template-columns:max-content repeat(${k}, max-content);column-gap:${gap}mm;row-gap:1.2mm;align-items:baseline">${items
    .map(([q, opts]) => `<span>${q}</span>${Array.from({ length: k }, (_, i) => (opts[i] != null ? `<span class="o">${cb()}${opts[i]}</span>` : "<span></span>")).join("")}`)
    .join("")}</div>`;
}

export function relier(left, right, gap = 26) {
  const rows = left
    .map((l, i) => `<div class="a">${l}</div><div></div><div class="b">${right[i] ?? ""}</div>`)
    .join("");
  return `<div class="rel" style="grid-template-columns:max-content ${gap}mm max-content">${rows}</div>`;
}

export function table(head, rows, { cls = "", widths } = {}) {
  const cg = widths ? `<colgroup>${widths.map((w) => `<col style="width:${w}">`).join("")}</colgroup>` : "";
  const th = head ? `<tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr>` : "";
  const tr = rows.map((r) => `<tr>${r.map((c) => (typeof c === "object" && c ? `<td class="${c.cls ?? ""}" colspan="${c.span ?? 1}">${c.v ?? ""}</td>` : `<td>${c}</td>`)).join("")}</tr>`).join("");
  return `<table class="t ${cls}">${cg}${th}${tr}</table>`;
}

/** Tableau de conjugaison : rows = [[pronom, radical, terminaison], ...] */
export function conj(caption, rows) {
  return `<table><caption>${caption}</caption>${rows
    .map(([p, rad, term]) => `<tr><td class="p">${p}</td><td>${rad}${term ? `<span class="tm">${term}</span>` : ""}</td></tr>`)
    .join("")}</table>`;
}

export function vf(items, { cols = 1 } = {}) {
  return `<div class="${cols === 2 ? "col2" : ""}" style="display:grid;row-gap:1mm">${items
    .map((t) => `<div style="display:flex;justify-content:space-between;gap:3mm;border-bottom:0.25mm dotted #c9ced6"><span>${t}</span><span style="white-space:nowrap">${cb()}V &nbsp;${cb()}F</span></div>`)
    .join("")}</div>`;
}

/** Espaces insécables dans les nombres (texte uniquement, pas dans les balises). */
export function nbspNumbers(html) {
  return html.split(/(<[^>]*>)/).map((seg) => (seg.startsWith("<") ? seg : seg.replace(/(\d) (?=\d{3}(?!\d))/g, "$1\u00a0").replace(/ ([?!;:»])/g, "\u00a0$1").replace(/(«) /g, "$1\u00a0"))).join("");
}

export function box(label, html, { tint = true, warn = false, style = "" } = {}) {
  return `<div class="box ${tint ? "tint" : ""} ${warn ? "warn" : ""}" style="${style}"><span class="lab">${label}</span>${html}</div>`;
}
export const st = (t) => `<h2 class="st">${t}</h2>`;
export const exs = (items) => `<ul class="exs">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

// ---------- Éléments SVG ----------

/** Quadrillage (carreaux de `s` mm) avec contenu SVG optionnel (unités = carreaux). */
export function grid(cols, rows, inner = "", s = 5) {
  const w = cols * s, h = rows * s;
  let g = "";
  for (let i = 0; i <= cols; i++) g += `<line x1="${i}" y1="0" x2="${i}" y2="${rows}" />`;
  for (let j = 0; j <= rows; j++) g += `<line x1="0" y1="${j}" x2="${cols}" y2="${j}" />`;
  return `<svg width="${w}mm" height="${h}mm" viewBox="-0.05 -0.05 ${cols + 0.1} ${rows + 0.1}"><g stroke="#b8c0ca" stroke-width="0.04">${g}</g>${inner}</svg>`;
}

/** Droite graduée : de `a` à `b`, pas `step`, étiquettes listées dans `labels` (valeur → texte). */
export function numberLine({ a, b, step, width = 170, labels = {}, marks = {}, every = 0, height = 18, sub = 0 }) {
  const n = Math.round((b - a) / step);
  const L = 6, R = width - 6;
  const x = (v) => L + ((v - a) / (b - a)) * (R - L);
  let s = `<line x1="${L - 3}" y1="8" x2="${R + 3}" y2="8" stroke="#222" stroke-width="0.45"/>`;
  s += `<path d="M ${R + 3} 8 l -2 -1.3 v 2.6 z" fill="#222"/>`;
  if (sub) {
    const m = Math.round((b - a) / sub);
    for (let i = 0; i <= m; i++) { const v = a + i * sub; s += `<line x1="${x(v)}" y1="6.6" x2="${x(v)}" y2="9.4" stroke="#444" stroke-width="0.25"/>`; }
  }
  for (let i = 0; i <= n; i++) {
    const v = a + i * step;
    s += `<line x1="${x(v)}" y1="5.2" x2="${x(v)}" y2="10.8" stroke="#222" stroke-width="0.4"/>`;
    const key = String(+v.toFixed(6));
    const lab = labels[key] ?? (every && i % every === 0 ? fmt(v) : null);
    if (lab != null) s += `<text x="${x(v)}" y="15.4" font-size="3.6" text-anchor="middle" font-family="Andika">${lab}</text>`;
  }
  for (const [v, t] of Object.entries(marks)) {
    const xv = x(+v);
    s += `<path d="M ${xv} 4.6 l -1.3 -2.6 h 2.6 z" fill="var(--c)"/><text x="${xv}" y="1.4" font-size="3.6" text-anchor="middle" font-family="Lexend" font-weight="600" fill="var(--c)">${t}</text>`;
  }
  return `<svg width="${width}mm" height="${height}mm" viewBox="0 -2 ${width} ${height}">${s}</svg>`;
}

export const fmt = (v) => {
  const s = String(+v.toFixed(6)).replace(".", ",");
  const [i, d] = s.split(",");
  const ii = i.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return d ? `${ii},${d}` : ii;
};

// ---------- Pages ----------

const ICON = { fr: "Aa", ma: "1+2" };
const DISC = { fr: "Français", ma: "Mathématiques" };

function header(m, kind) {
  const prog = Array.from({ length: 30 }, (_, i) => `<i class="${i < m.n ? "on" : ""}"></i>`).join("");
  return `<header class="hd">
    <div class="tag"><span class="ico">${ICON[m.disc]}</span>MISSION ${pad(m.n)}</div>
    <div class="dom"><b>${DISC[m.disc]}</b> · ${m.domaine}</div>
    <div class="prog" title="progression">${prog}</div>
    <div class="kind">${kind}</div>
  </header>`;
}

export function lessonPage(m, pageNo) {
  return `<section class="page ${m.disc}">
  ${header(m, "Leçon")}
  <div class="content">${m.lecon}</div>
  <footer class="ft"><span class="pn">${pageNo}</span><span>Je lis la leçon en entier avant de commencer.</span><span></span></footer>
  </section>`;
}

export function exercisePage(m, pageNo) {
  return `<section class="page ${m.disc}">
  ${header(m, "Exercices")}
  <div class="content spread">${m.exos}</div>
  <footer class="ft"><span class="self"><span>${cb()}Je me suis relu(e).</span><span>${cb()}J'ai vérifié avec la leçon.</span></span><span class="pn">${pageNo}</span></footer>
  </section>`;
}

/** Zone de recherche pour un problème + ligne de réponse. */
export function work(h = 16, rep = true) {
  return `<div style="border:0.3mm dashed #b8c0ca;border-radius:2mm;height:${h}mm;position:relative;margin-bottom:1.2mm"><span style="position:absolute;top:0.6mm;left:2mm;font-size:8.5pt;color:#8a929d;font-family:Lexend">Je cherche (schéma, calculs)</span></div>${rep ? `<div>Réponse : <span class="blank" style="width:150mm"></span></div>` : ""}`;
}

/**
 * Opération posée. rows : nombres (chaînes, sans espace) ; sign : "+", "−", "×".
 * result : chaîne (affichée) ou null (cases vides) ; carry : chaîne de retenues alignée à droite (" 1 1" etc.).
 */
export function posed(rows, { sign = "+", result = null, carry = "", cols, size = 15, hl = "", partials = 0, partialVals = null } = {}) {
  const w = cols ?? Math.max(...rows.map((r) => r.length), result ? result.length : 0) + 1;
  const cell = (ch, extra = "") => `<td style="width:7mm;height:${size === 15 ? 8 : 7}mm;text-align:center;${extra}">${ch === " " ? "" : ch === "□" ? `<span style="display:inline-block;width:5mm;height:6.2mm;border:0.4mm solid var(--c);border-radius:1mm;vertical-align:middle"></span>` : ch}</td>`;
  const padL = (s) => " ".repeat(w - s.length) + s;
  let html = "";
  if (carry) html += `<tr style="font-size:9pt;color:var(--c);font-weight:700">${[...padL(carry)].map((c) => cell(c, "height:3.5mm")).join("")}</tr>`;
  rows.forEach((r, i) => {
    const last = i === rows.length - 1;
    const chars = [...padL(r)];
    if (last) chars[0] = sign;
    html += `<tr>${chars.map((c) => cell(c, last ? "border-bottom:0.45mm solid #222" : "")).join("")}</tr>`;
  });
  for (let k = 0; k < partials; k++) {
    const pv = partialVals ? [...padL(partialVals[k])] : Array(w).fill(" ");
    html += `<tr>${pv.map((c, j) => cell(k === partials - 1 && j === 0 ? "+" : c, k === partials - 1 ? "border-bottom:0.45mm solid #222" : "")).join("")}</tr>`;
  }
  const res = result != null ? [...padL(result)] : Array(w).fill(" ");
  html += `<tr>${res.map((c) => cell(c)).join("")}</tr>`;
  return `<table style="border-collapse:collapse;font-family:Lexend;font-size:${size}pt;${hl}">${html}</table>`;
}

/** Schéma en barres. top : {label, w?} ; parts : [{label, w, shade?}] (w en mm). */
export function bars({ top, parts }) {
  let y = 0, s = "";
  const total = parts.reduce((a, p) => a + p.w, 0);
  if (top) {
    s += `<path d="M0 6 v-3 h${total} v3" fill="none" stroke="#222" stroke-width="0.35"/><text x="${total / 2}" y="2" font-size="3.6" text-anchor="middle" font-family="Andika" font-weight="700">${top}</text>`;
    y = 7;
  }
  let x = 0;
  for (const p of parts) {
    s += `<rect x="${x}" y="${y}" width="${p.w}" height="8" fill="${p.shade ? "var(--soft)" : "#fff"}" stroke="#222" stroke-width="0.35"/><text x="${x + p.w / 2}" y="${y + 5.4}" font-size="3.6" text-anchor="middle" font-family="Andika">${p.label}</text>`;
    x += p.w;
  }
  return `<svg width="${total + 2}mm" height="${y + 10}mm" viewBox="-1 -1 ${total + 2} ${y + 10}">${s}</svg>`;
}

/** Ligne de cellules vides de hauteur h (mm) pour un tableau à remplir. */
export const emptyRow = (n, h = 14) => Array.from({ length: n }, () => ({ v: `<div style="height:${h}mm"></div>` }));
