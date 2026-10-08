// Leçons courtes : 2-3 phrases « À retenir » + 2-3 visuels.
// Elles remplacent les leçons longues des fichiers missions (voir build.mjs).
import { box, table, posed, bars, frac, fracBar, numberLine, grid } from "./lib.mjs";

const L = (title, sentences, visuals) => `<h1 class="lt">${title}</h1>
<div class="lec-retenir">${box("À retenir", sentences.map((s) => `<p>${s}</p>`).join(""))}</div>
<div class="vis-wrap">${visuals.map(([lab, html]) => `<div class="vis">${lab ? `<div class="vl">${lab}</div>` : ""}${html}</div>`).join("")}</div>`;

const row = (items, gap = 5) => `<div style="display:flex;gap:${gap}mm;justify-content:center;align-items:stretch;flex-wrap:wrap">${items.join("")}</div>`;
const card = (html, style = "") => `<div class="card" style="${style}">${html}</div>`;
const hl = (t) => `<span class="hl">${t}</span>`;
const T = (x, y, t, o = "") => `<text x="${x}" y="${y}" font-family="Andika" font-size="4" ${o}>${t}</text>`;

// Conjugaison
const conjT = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const tm = (s) => `<span class="tm">${s}</span>`;
const P6 = ["je", "tu", "il, elle, on", "nous", "vous", "ils, elles"];
const conjGrid = (tables, cols = 2) => `<div class="conj" style="grid-template-columns:repeat(${cols},1fr);gap:3mm 8mm;width:100%">${tables.join("")}</div>`;

// Géométrie
const pt = (x, y, l, dx = 1.6, dy = -1.6) =>
  `<path d="M${x - 1.2} ${y - 1.2} L${x + 1.2} ${y + 1.2} M${x - 1.2} ${y + 1.2} L${x + 1.2} ${y - 1.2}" stroke="#222" stroke-width="0.35"/>${l ? T(x + dx, y + dy, l) : ""}`;
const Ln = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#222" stroke-width=".45" ${o}/>`;
const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--c)" stroke-width=".45" stroke-dasharray="1.6 1.1"/>`;
const poly = (pts, fill = "none") => `<polygon points="${pts}" fill="${fill}" stroke="#222" stroke-width=".45"/>`;

const L_ = {};

// ---------------------------------------------------------------- 01
L_[1] = L("Les types et les formes de phrases", [
  "Il existe <b>quatre types</b> de phrases. On les reconnaît à leur ponctuation.",
  "À la forme <b>négative</b>, on encadre le verbe avec <b>ne… pas</b> (ou ne… plus, ne… jamais, ne… rien).",
], [
  ["Les quatre types", row([
    ["déclarative", ".", "Le train part."], ["interrogative", "?", "Le train part-il ?"], ["exclamative", "!", "Quel beau train !"], ["impérative", ". ou !", "Monte vite !"],
  ].map(([t, s, e]) => card(`<div style="font-family:Lexend;font-size:24pt;font-weight:700;color:var(--c);line-height:1.1">${s}</div><div style="font-family:Lexend;font-weight:600;font-size:10.5pt">${t}</div><div class="sm"><i>${e}</i></div>`, "width:40mm")), 3)],
  ["Poser une question", row(["Tu viens ?", "Est-ce que tu viens ?", "Viens-tu ?"].map((q) => card(`<span class="big">${q}</span>`)), 4)],
  ["La forme négative", `<svg width="150mm" height="26mm" viewBox="0 0 150 26">
    ${T(4, 15, "Léa", 'font-size="7"')}
    <rect x="22" y="5.5" width="14" height="13" rx="2" fill="var(--tint)" stroke="var(--c)" stroke-width=".5"/>${T(29, 14.5, "ne", 'font-size="6.5" font-weight="700" text-anchor="middle" fill="var(--c)"')}
    ${T(39, 15, "mange", 'font-size="7" font-weight="700"')}
    <rect x="62" y="5.5" width="15" height="13" rx="2" fill="var(--tint)" stroke="var(--c)" stroke-width=".5"/>${T(69.5, 14.5, "pas", 'font-size="6.5" font-weight="700" text-anchor="middle" fill="var(--c)"')}
    ${T(80, 15, "de soupe.", 'font-size="7"')}
    <path d="M29 19.5 Q 49 27 69.5 19.5" fill="none" stroke="var(--c)" stroke-width=".5" stroke-dasharray="1 1"/>
    ${T(116, 15, "Il <tspan font-weight='700' fill='var(--c)'>n'</tspan>aime <tspan font-weight='700' fill='var(--c)'>pas</tspan>.", 'font-size="6"')}
  </svg>`],
]);

// ---------------------------------------------------------------- 02
L_[2] = L("Les nombres jusqu'à 99 999", [
  "Pour lire un grand nombre, je sépare les chiffres <b>par groupes de trois</b> en partant de la droite.",
  "<b>10 milliers</b> = 1 dizaine de mille = 10 000.",
], [
  ["Le tableau de numération", `<table class="t" style="font-size:12.5pt;width:150mm">
    <tr><th colspan="2" style="background:var(--soft)">classe des mille</th><th colspan="3">classe des unités simples</th></tr>
    <tr><th>dizaines de mille</th><th>unités de mille</th><th>centaines</th><th>dizaines</th><th>unités</th></tr>
    <tr style="font-family:Lexend;font-size:18pt;font-weight:600"><td>4</td><td>7</td><td>3</td><td>5</td><td>2</td></tr></table>
    <div class="sm" style="margin-top:1.5mm"><i>quarante-sept-mille-trois-cent-cinquante-deux</i> &nbsp;<span class="mut">(des traits d'union partout ; « mille » ne prend jamais de s)</span></div>`],
  ["Chiffre ou nombre ?", row([
    card(`<div style="font-family:Lexend;font-size:20pt">47 ${hl("3")}52</div><div class="sm">le <b>chiffre</b> des centaines : <b>3</b></div>`, "width:62mm"),
    card(`<div style="font-family:Lexend;font-size:20pt">${hl("47 3")}52</div><div class="sm">le <b>nombre</b> de centaines : <b>473</b></div>`, "width:62mm"),
  ])],
  ["Décomposer", `<div class="big" style="font-family:Lexend;line-height:1.7;text-align:center">47 352 = 40 000 + 7 000 + 300 + 50 + 2<br>30 405 = 30 000 + 400 + 5</div>`],
]);

// ---------------------------------------------------------------- 03
L_[3] = L("Le verbe", [
  "Le verbe <b>se conjugue</b> : il change avec la personne et avec le temps.",
  "Pour trouver son <b>infinitif</b>, je dis « il faut… » : <i>nous finissons</i> → il faut <b>finir</b>.",
], [
  ["Le mot qui change, c'est le verbe", row(["Hier, je <b>jouais</b>.", "Aujourd'hui, je <b>joue</b>.", "Demain, je <b>jouerai</b>."].map((t) => card(`<span class="big">${t}</span>`)), 4)],
  ["Radical et terminaison", `<svg width="110mm" height="27mm" viewBox="0 0 110 27">
    ${T(4, 13, "nous", 'font-size="9"')}
    <rect x="28" y="3" width="28" height="13" rx="1.5" fill="#fff" stroke="#222" stroke-width=".4"/>${T(42, 12.6, "chant", 'font-size="9" text-anchor="middle"')}
    <rect x="56" y="3" width="18" height="13" rx="1.5" fill="var(--soft)" stroke="var(--c)" stroke-width=".5"/>${T(65, 12.6, "ons", 'font-size="9" font-weight="700" text-anchor="middle"')}
    <text x="42" y="23" font-family="Lexend" font-size="4" text-anchor="middle">radical</text><text x="65" y="23" font-family="Lexend" font-size="4" text-anchor="middle" fill="var(--c)">terminaison</text>
    ${T(80, 12.6, "← infinitif : chanter", 'font-size="4.2"')}</svg>`],
  ["Les trois groupes", table(["1<sup>er</sup> groupe", "2<sup>e</sup> groupe", "3<sup>e</sup> groupe"], [
    ["infinitif en <b>-er</b>", "infinitif en <b>-ir</b> + <b>nous …issons</b>", "tous les autres"],
    ["chanter, jouer", "finir → nous fin<b>issons</b>", "aller, venir, faire, courir…"],
  ])],
]);

// ---------------------------------------------------------------- 04
L_[4] = L("Addition et soustraction", [
  "J'aligne les unités sous les unités et je commence <b>par la droite</b>, sans oublier les <b>retenues</b>.",
  "Je vérifie avec l'<b>ordre de grandeur</b> : 3 487 + 2 659 ≈ 3 500 + 2 700 = 6 200.",
], [
  ["Je pose une addition", posed(["3487", "2659"], { sign: "+", result: "6146", carry: "111 ", size: 16 })],
  ["Je pose une soustraction", `<div style="display:flex;gap:8mm;align-items:center">
  <table style="border-collapse:collapse;font-family:Lexend;font-size:16pt">
    <tr>${["", "5", "¹3", "¹0", "¹2"].map((c) => `<td style="width:10mm;height:9mm;text-align:center">${c.replace("¹", '<sup style="font-size:9pt;color:var(--c);font-weight:700">1</sup>')}</td>`).join("")}</tr>
    <tr>${["−", "1₊", "7₊", "6₊", "8"].map((c) => `<td style="width:10mm;height:9mm;text-align:center;border-bottom:.45mm solid #222">${c.replace("₊", '<sub style="font-size:8pt;color:var(--c);font-weight:700">+1</sub>')}</td>`).join("")}</tr>
    <tr>${["", "3", "5", "3", "4"].map((c) => `<td style="width:10mm;height:9mm;text-align:center">${c}</td>`).join("")}</tr></table>
  <div class="card sm" style="text-align:left">2 − 8 impossible :<br><b>12 − 8 = 4</b> (+10 en haut)<br>et <b>+1</b> en bas, à gauche.</div></div>`],
  ["Des astuces", row(["456 + 99 = 456 + 100 − 1", "732 − 198 = 732 − 200 + 2"].map((t) => card(`<span class="big">${t}</span>`)), 4)],
]);

// ---------------------------------------------------------------- 05
L_[5] = L("Les classes de mots", [
  "Chaque mot a une <b>classe</b> : nom, déterminant, adjectif, verbe, pronom…",
  "Un même mot peut changer de classe : <i>la <b>marche</b></i> (nom), <i>il <b>marche</b></i> (verbe).",
], [
  ["Un exemple", `<div style="display:flex;justify-content:center;gap:3.5mm;font-size:17pt">${[["Mon", "D"], ["petit", "A"], ["frère", "N"], ["dessine", "V"], ["un", "D"], ["dragon", "N"], ["vert.", "A"]].map(([w, t]) => `<div style="display:flex;flex-direction:column;align-items:center"><span>${w}</span><span style="font-family:Lexend;font-size:11pt;font-weight:700;color:var(--c);border-top:.45mm solid var(--c);padding:0 2mm">${t}</span></div>`).join("")}</div>`],
  ["Les classes", table(null, [
    [{ v: "<b>N</b> nom", cls: "l" }, { v: "un garçon, la forêt, <b>L</b>ina, <b>P</b>aris", cls: "l" }],
    [{ v: "<b>D</b> déterminant", cls: "l" }, { v: "le, la, les, un, une, des, mon, ses, ce, cette, ces", cls: "l" }],
    [{ v: "<b>A</b> adjectif", cls: "l" }, { v: "un chat <i>noir</i>, une <i>grande</i> maison", cls: "l" }],
    [{ v: "<b>V</b> verbe", cls: "l" }, { v: "il court, nous chantons", cls: "l" }],
    [{ v: "<b>P</b> pronom", cls: "l" }, { v: "je, tu, il, elle, nous, vous, ils, elles", cls: "l" }],
  ], { widths: ["30%", "70%"] })],
]);

// ---------------------------------------------------------------- 06
L_[6] = L("Résoudre des problèmes (1)", [
  "Je lis le problème deux fois, je fais un <b>schéma</b>, je calcule et je réponds par une <b>phrase</b>.",
  "Je connais les deux parties : j'<b>additionne</b>. Je connais le tout et une partie : je <b>soustrais</b>.",
], [
  ["Le tout et les parties", bars({ top: "le tout", parts: [{ label: "partie 1", w: 70 }, { label: "partie 2", w: 45, shade: true }] })],
  ["Un exemple : 52 places, 37 occupées", `<div style="display:flex;gap:8mm;align-items:center">${bars({ top: "52", parts: [{ label: "37", w: 72 }, { label: "?", w: 30, shade: true }] })}<div class="big"><b>52 − 37 = 15</b></div></div>`],
  ["Comparer", `<svg width="120mm" height="26mm" viewBox="0 0 120 26">
    ${T(0, 7, "Léa")}<rect x="14" y="1" width="58" height="8.5" fill="#fff" stroke="#222" stroke-width=".35"/>${T(43, 7, "345", 'text-anchor="middle"')}
    ${T(0, 20, "Tom")}<rect x="14" y="14" width="58" height="8.5" fill="#fff" stroke="#222" stroke-width=".35"/>${T(43, 20, "345", 'text-anchor="middle"')}
    <rect x="72" y="14" width="30" height="8.5" fill="var(--soft)" stroke="#222" stroke-width=".35"/>${T(87, 20, "+ 120", 'text-anchor="middle" font-weight="700"')}
    ${T(105, 20, "= 465", 'font-weight="700"')}</svg>`],
]);

// ---------------------------------------------------------------- 07
L_[7] = L("Le présent : 1<sup>er</sup> et 2<sup>e</sup> groupes", [
  "J'enlève <b>-er</b> ou <b>-ir</b> de l'infinitif et j'ajoute la terminaison.",
  "Au 2<sup>e</sup> groupe, j'ajoute <b>-iss-</b> au pluriel : nous fin<b>iss</b>ons.",
], [
  ["", conjGrid([
    conjT("chanter", P6.map((p, i) => [p, "chant" + tm(["e", "es", "e", "ons", "ez", "ent"][i])])),
    conjT("finir", P6.map((p, i) => [p, "fin" + tm(["is", "is", "it", "issons", "issez", "issent"][i])])),
  ])],
  ["Attention", row([
    card(`<span class="big">nous man<b>ge</b>ons</span>`), card(`<span class="big">nous commen<b>ç</b>ons</span>`), card(`<span class="big">je cri<b>e</b> · ils jou<b>ent</b></span><div class="xs mut">on ne l'entend pas, on l'écrit</div>`),
  ], 4)],
]);

// ---------------------------------------------------------------- 08
L_[8] = L("Droites, segments, perpendiculaires", [
  "Une <b>droite</b> ne s'arrête pas ; un <b>segment</b> a deux extrémités.",
  "Deux droites <b>perpendiculaires</b> forment un <b>angle droit</b>. Je le vérifie avec mon <b>équerre</b>.",
], [
  ["Droite et segment", `<svg width="170mm" height="30mm" viewBox="0 0 170 30">
    ${Ln(4, 24, 76, 6)}${pt(22, 19.5, "A", -1, 6)}${pt(56, 11, "B", -1, 6)}${T(28, 29.5, "la droite (AB)", 'font-size="4.2"')}
    ${Ln(100, 22, 150, 9)}${Ln(99.4, 19.7, 100.6, 24.3)}${Ln(149.4, 6.7, 150.6, 11.3)}${T(94.5, 24, "C")}${T(152, 9, "D")}${T(110, 29.5, "le segment [CD]", 'font-size="4.2"')}</svg>`],
  ["Perpendiculaires", `<svg width="80mm" height="40mm" viewBox="0 0 80 40">
    ${Ln(6, 33.4, 72, 9.2)}${Ln(34, 4, 45.6, 35.6)}
    <polygon points="39.6,20.6 42.4,19.57 43.43,22.39 40.63,23.42" fill="var(--soft)" stroke="var(--c)" stroke-width=".35"/>
    ${T(70, 15, "(d)")}${T(46, 37, "(e)")}</svg>`],
  ["Avec l'équerre", `<svg width="110mm" height="40mm" viewBox="0 0 110 40">
    ${Ln(2, 36, 108, 36)}${T(100, 34, "(d)")}
    <polygon points="30,36 30,6 52,36" fill="var(--tint)" stroke="var(--c)" stroke-width=".5"/>
    <path d="M30 32 h4 v4" fill="none" stroke="var(--c)" stroke-width=".4"/>
    ${pt(30, 4, "A", 2, 0)}${Ln(30, 2, 30, 36, 'stroke-dasharray="1.4 1"')}
    ${T(58, 13, "1. un côté sur (d)", 'font-size="4.2"')}${T(58, 20, "2. je glisse jusqu'à A", 'font-size="4.2"')}${T(58, 27, "3. je trace", 'font-size="4.2"')}</svg>`],
]);

// ---------------------------------------------------------------- 09
L_[9] = L("Le sujet et l'accord du verbe", [
  "Le <b>sujet</b> dit qui fait l'action. Pour le trouver : « <b>C'est… qui</b> » ou « <b>Ce sont… qui</b> ».",
  "Le verbe <b>s'accorde</b> avec son sujet.",
], [
  ["Je trouve le sujet", card(`<span class="big"><b>Ce sont</b> <span class="u">les enfants</span> <b>qui</b> jouent.</span>`)],
  ["Les pièges", row([
    card(`<span class="big"><span class="u">Les enfants</span> de la classe de Mme Lune <b>chantent</b>.</span><div class="xs mut">sujet loin du verbe</div>`, "width:58mm"),
    card(`<span class="big">Dans la forêt <b>vivent</b> <span class="u">des loups</span>.</span><div class="xs mut">sujet après le verbe</div>`, "width:50mm"),
    card(`<span class="big"><span class="u">Le maître</span> <s>les</s> <b>regarde</b>.</span><div class="xs mut">« les » n'est pas le sujet</div>`, "width:50mm"),
  ], 3)],
  ["", card(`<span class="big"><span class="u">Tom et Léa</span> partent. = <span class="u">Ils</span> partent.</span>`)],
]);

// ---------------------------------------------------------------- 10
L_[10] = L("Comparer, ranger, encadrer jusqu'à 999 999", [
  "Le nombre qui a <b>le plus de chiffres</b> est le plus grand.",
  "Sinon, je compare les chiffres <b>un par un, depuis la gauche</b>.",
], [
  ["Le tableau de numération", `<table class="t" style="font-size:12pt;width:160mm">
    <tr><th colspan="3" style="background:var(--soft)">classe des mille</th><th colspan="3">classe des unités</th></tr>
    <tr><th>c. de mille</th><th>d. de mille</th><th>u. de mille</th><th>centaines</th><th>dizaines</th><th>unités</th></tr>
    <tr style="font-family:Lexend;font-size:17pt;font-weight:600"><td>5</td><td>0</td><td>7</td><td>3</td><td>8</td><td>1</td></tr></table>`],
  ["Comparer", `<div style="font-family:Lexend;font-size:20pt">45 ${hl("3")}82 &lt; 45 ${hl("8")}32</div><div class="sm mut">&lt; : « est plus petit que » · &gt; : « est plus grand que »</div>`],
  ["Encadrer : 45 000 &lt; 45 382 &lt; 46 000", numberLine({ a: 40000, b: 50000, step: 1000, width: 172, every: 1, marks: { 45382: "45 382" }, height: 20 })],
]);

// ---------------------------------------------------------------- 11
L_[11] = L("Le présent des verbes très fréquents", [
  "Ces verbes sont <b>irréguliers</b> : je les apprends par cœur.",
  "Attention : <b>vous faites</b>, <b>vous dites</b>, <b>ils sont</b> (être), <b>ils ont</b> (avoir).",
], [
  ["", conjGrid([
    conjT("être", [["je", "suis"], ["tu", "es"], ["il, elle, on", "est"], ["nous", tm("sommes")], ["vous", tm("êtes")], ["ils, elles", tm("sont")]]),
    conjT("avoir", [["j'", "ai"], ["tu", "as"], ["il, elle, on", "a"], ["nous", "avons"], ["vous", "avez"], ["ils, elles", tm("ont")]]),
    conjT("aller", [["je", tm("vais")], ["tu", "vas"], ["il, elle, on", "va"], ["nous", "allons"], ["vous", "allez"], ["ils, elles", tm("vont")]]),
    conjT("faire", [["je", "fais"], ["tu", "fais"], ["il, elle, on", "fait"], ["nous", "faisons"], ["vous", tm("faites")], ["ils, elles", tm("font")]]),
    conjT("dire", [["je", "dis"], ["tu", "dis"], ["il, elle, on", "dit"], ["nous", "disons"], ["vous", tm("dites")], ["ils, elles", "disent"]]),
    conjT("prendre", [["je", "prends"], ["tu", "prends"], ["il, elle, on", tm("prend")], ["nous", "prenons"], ["vous", "prenez"], ["ils, elles", tm("prennent")]]),
  ], 3)],
]);

// ---------------------------------------------------------------- 12
L_[12] = L("La multiplication", [
  "× 10 : j'écris un <b>0</b> à droite (37 × 10 = 370) ; × 100 : deux 0 (37 × 100 = 3 700).",
  "Pour multiplier par un nombre à deux chiffres, je n'oublie pas le <b>0</b> au début de la 2<sup>e</sup> ligne.",
], [
  ["Je décompose : 23 × 4 = 80 + 12 = 92", `<svg width="90mm" height="28mm" viewBox="0 0 90 28">
    <rect x="2" y="2" width="62" height="18" fill="var(--tint)" stroke="#222" stroke-width=".35"/><rect x="64" y="2" width="14" height="18" fill="var(--soft)" stroke="#222" stroke-width=".35"/>
    ${T(33, 12.6, "20 × 4 = 80", 'text-anchor="middle"')}${T(71, 10.5, "3 × 4", 'text-anchor="middle" font-size="3.6"')}${T(71, 15.5, "= 12", 'text-anchor="middle" font-size="3.6"')}
    ${T(33, 25.5, "20", 'text-anchor="middle"')}${T(71, 25.5, "3", 'text-anchor="middle"')}${T(81, 12.6, "4")}</svg>`],
  ["Je pose", row([
    posed(["347", "6"], { sign: "×", result: "2082", carry: "24 ", size: 15 }),
    `<div style="display:flex;gap:3mm;align-items:center">${posed(["243", "36"], { sign: "×", partials: 2, partialVals: ["1458", "7290"], result: "8748", size: 15 })}<div class="sm" style="text-align:left">← 243 × 6<br><br>← 243 × 30 :<br>&nbsp;&nbsp;&nbsp;le <b>0</b> d'abord</div></div>`,
  ], 16)],
]);

// ---------------------------------------------------------------- 13
L_[13] = L("Le dictionnaire et le sens des mots", [
  "Le dictionnaire range les mots dans l'<b>ordre alphabétique</b> : la<b>m</b>pe, la<b>p</b>in, la<b>r</b>ge.",
  "Un mot peut avoir <b>plusieurs sens</b> : la phrase m'aide à choisir le bon.",
], [
  ["Les mots-repères", `<svg width="100mm" height="28mm" viewBox="0 0 100 28"><rect x="1" y="1" width="98" height="26" rx="1.5" fill="#fff" stroke="#8f97a3" stroke-width=".35"/>
    <text x="5" y="8" font-family="Lexend" font-weight="600" font-size="4.6" fill="var(--c)">bateau</text><text x="95" y="8" font-family="Lexend" font-weight="600" font-size="4.6" text-anchor="end" fill="var(--c)">bavard</text>
    <line x1="5" y1="10.5" x2="95" y2="10.5" stroke="#c9ced6" stroke-width=".3"/>${T(50, 19, "batterie ✓ (entre bateau et bavard)", 'text-anchor="middle" font-size="4.4"')}</svg>`],
  ["Un article de dictionnaire", `<div style="border:.4mm solid #8f97a3;border-radius:2mm;padding:3mm 5mm;font-size:13pt;max-width:165mm">
    <b style="font-family:Lexend">renard</b> <span class="hl">n. m.</span> <b>1.</b> Animal sauvage au pelage roux. <i>Le renard chasse la nuit.</i> <b>2.</b> Personne rusée. <i>C'est un vieux renard.</i></div>
    <div class="xs mut" style="margin-top:1mm">n. m. = nom masculin · n. f. = nom féminin · v. = verbe · adj. = adjectif</div>`],
  ["Sens propre / sens figuré", row([
    card(`<span class="big">Le lion <b>dévore</b> sa proie.</span><div class="xs mut">sens propre</div>`), card(`<span class="big">Lina <b>dévore</b> les livres.</span><div class="xs mut">sens figuré (une image)</div>`),
  ])],
]);

// ---------------------------------------------------------------- 14
L_[14] = L("Les longueurs et le périmètre", [
  "<b>1 km = 1 000 m</b> · <b>1 m = 100 cm</b> · <b>1 cm = 10 mm</b>.",
  "Le <b>périmètre</b> est la longueur du tour d'une figure.",
], [
  ["Le tableau des longueurs", `<table class="t" style="font-family:Lexend;font-size:13pt;width:160mm">
    <tr><th>km</th><th>hm</th><th>dam</th><th style="background:var(--soft)">m</th><th>dm</th><th>cm</th><th>mm</th></tr>
    <tr><td>2</td><td>0</td><td>0</td><td style="background:var(--tint)">0</td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td style="background:var(--tint)">3</td><td>4</td><td>5</td><td></td></tr></table>
    <div class="sm" style="margin-top:1mm">2 km = 2 000 m &nbsp;·&nbsp; 3 m 45 cm = 345 cm</div>`],
  ["Le périmètre", `<div style="display:flex;gap:8mm;align-items:center"><svg width="56mm" height="32mm" viewBox="0 0 56 32"><rect x="6" y="5" width="40" height="22" fill="var(--tint)" stroke="#222" stroke-width=".45"/>${T(26, 3.6, "6 cm", 'text-anchor="middle"')}${T(48, 17, "4 cm")}</svg>
    <div class="big">6 + 4 + 6 + 4 = <b>20 cm</b></div></div>`],
  ["Quelle unité ?", row([["une fourmi", "mm"], ["une gomme", "cm"], ["une classe", "m"], ["un trajet", "km"]].map(([a, b]) => card(`${a}<div style="font-family:Lexend;font-size:16pt;font-weight:700;color:var(--c)">${b}</div>`, "width:32mm")), 3)],
]);

// ---------------------------------------------------------------- 15
L_[15] = L("Le présent : venir, pouvoir, voir, vouloir", [
  "Le radical de ces verbes change : je <b>vien</b>s, nous <b>ven</b>ons, ils <b>vienn</b>ent.",
  "Avec je et tu : je peu<b>x</b>, je veu<b>x</b> (avec un x).",
], [
  ["", conjGrid([
    conjT("venir", P6.map((p, i) => [p, ["vien", "vien", "vien", "ven", "ven", "vienn"][i] + tm(["s", "s", "t", "ons", "ez", "ent"][i])])),
    conjT("pouvoir", P6.map((p, i) => [p, ["peu", "peu", "peu", "pouv", "pouv", "peuv"][i] + tm(["x", "x", "t", "ons", "ez", "ent"][i])])),
    conjT("voir", P6.map((p, i) => [p, ["voi", "voi", "voi", "voy", "voy", "voi"][i] + tm(["s", "s", "t", "ons", "ez", "ent"][i])])),
    conjT("vouloir", P6.map((p, i) => [p, ["veu", "veu", "veu", "voul", "voul", "veul"][i] + tm(["x", "x", "t", "ons", "ez", "ent"][i])])),
  ], 2)],
  ["Bilan : je…", row([["je …e", "je chante, je joue"], ["je …s", "je finis, je viens, je prends"], ["je …x", "je peux, je veux"]].map(([a, b]) => card(`<div style="font-family:Lexend;font-size:15pt;font-weight:700;color:var(--c)">${a}</div><div class="sm">${b}</div>`, "width:50mm")), 4)],
]);

// ---------------------------------------------------------------- 16
L_[16] = L("Les fractions simples", [
  "Le <b>dénominateur</b> dit en combien de parts égales on partage l'unité.",
  "Le <b>numérateur</b> dit combien de parts on prend.",
], [
  ["", `<div style="display:flex;gap:8mm;align-items:center">${fracBar(4, 3, 80, 12)}${frac(3, 4, "26pt")}<div class="sm" style="text-align:left">3 parts prises<br>4 parts égales</div></div>`],
  ["Des bandes à comparer", `<div style="display:grid;grid-template-columns:auto auto;gap:1.8mm 5mm;align-items:center">
    ${fracBar(2, 1, 72)}<div>${frac(1, 2)} un demi</div>
    ${fracBar(4, 2, 72)}<div>${frac(2, 4)} = ${frac(1, 2)}</div>
    ${fracBar(3, 1, 72)}<div>${frac(1, 3)} un tiers</div>
    ${fracBar(4, 1, 72)}<div>${frac(1, 4)} un quart</div>
    ${fracBar(4, 4, 72)}<div>${frac(4, 4)} = 1</div>
    <div style="display:flex;gap:1.5mm">${fracBar(4, 4, 72)}${fracBar(4, 1, 72)}</div><div>${frac(5, 4)} &gt; 1</div></div>`],
  ["Une fraction d'une quantité", `<div style="display:flex;gap:6mm;align-items:center"><svg width="78mm" height="14mm" viewBox="0 0 78 14">${[0, 1, 2, 3].map((g) => `<rect x="${g * 19.5 + 0.5}" y="0.5" width="18" height="13" rx="2" fill="${g === 0 ? "var(--soft)" : "#fff"}" stroke="#222" stroke-width=".3"/>` + Array.from({ length: 5 }, (_, i) => `<circle cx="${g * 19.5 + 4 + (i % 3) * 5}" cy="${i < 3 ? 4.5 : 9.5}" r="1.6" fill="#222"/>`).join("")).join("")}</svg>
    <div class="big">${frac(1, 4)} de 20 = <b>5</b> &nbsp; ${frac(3, 4)} de 20 = <b>15</b></div></div>`],
]);

// ---------------------------------------------------------------- 17
const homo = (a, ra, ea, b, rb, eb) => card(`<div style="font-family:Lexend;font-size:16pt;font-weight:700;color:var(--c)">${a} / ${b}</div>
  <div style="text-align:left;margin-top:1mm"><b>${a}</b> → <i>${ra}</i> ✓ : ${ea}<br><b>${b}</b> → <i>${rb}</i> : ${eb}</div>`, "width:80mm");
L_[17] = L("Les homophones a/à, et/est, on/ont, son/sont", [
  "Pour choisir, j'essaie de <b>remplacer</b> le mot.",
  "<b>à</b> prend toujours un accent ; <b>on</b> se conjugue comme <b>il</b>.",
], [
  ["", `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4mm">
    ${homo("a", "avait", "Il <b>a</b> un chien.", "à", "avait ✗", "Il va <b>à</b> Paris.")}
    ${homo("est", "était", "Le ciel <b>est</b> bleu.", "et", "et puis ✓", "Tom <b>et</b> Léa")}
    ${homo("ont", "avaient", "Ils <b>ont</b> faim.", "on", "il ✓", "<b>On</b> joue.")}
    ${homo("sont", "étaient", "Ils <b>sont</b> là.", "son", "mon ✓", "<b>son</b> vélo")}</div>`],
]);

// ---------------------------------------------------------------- 18
L_[18] = L("Résoudre des problèmes (2)", [
  "Quand la <b>même quantité se répète</b>, je multiplie.",
  "Dans un problème à étapes, je cherche d'abord <b>ce qu'il me manque</b>.",
], [
  ["4 paquets de 25 cartes", `<div style="display:flex;gap:6mm;align-items:center">${bars({ top: "?", parts: [{ label: "25", w: 26 }, { label: "25", w: 26 }, { label: "25", w: 26 }, { label: "25", w: 26 }] })}<div class="big"><b>4 × 25 = 100</b></div></div>`],
  ["Un problème à étapes", `<div class="sm" style="margin-bottom:2mm">6 boîtes de 25 crayons. On en distribue 120. Combien en reste-t-il ?</div>
    ${row([card(`<div class="xs mut">Étape 1 : achetés</div><span class="big">6 × 25 = 150</span>`), `<div style="align-self:center;font-size:20pt;color:var(--c)">→</div>`, card(`<div class="xs mut">Étape 2 : reste</div><span class="big">150 − 120 = <b>30</b></span>`)], 3)}`],
  ["Lire un tableau", `<div style="display:flex;gap:6mm;align-items:center"><div style="width:62mm">${table(["Piscine", "Prix"], [["Enfant", "3 €"], ["Adulte", "5 €"]])}</div><div class="big">2 adultes + 3 enfants :<br>(2 × 5) + (3 × 3) = <b>19 €</b></div></div>`],
]);

// ---------------------------------------------------------------- 19
const imp = (cap, rad) => conjT(cap, P6.map((p, i) => [cap === "être" && i === 0 ? "j'" : cap === "avoir" && i === 0 ? "j'" : p, rad + tm(["ai", "ai", "ai", "i", "i", "ai"][i]) + `<span class="mt2">${["s", "s", "t", "ons", "ez", "ent"][i]}</span>`]));
L_[19] = L("L'imparfait", [
  "L'imparfait est un temps du <b>passé</b> : il décrit ou raconte des habitudes.",
  "Je prends le radical de <b>nous</b> au présent et j'ajoute <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.",
], [
  ["", `<div class="big" style="font-family:Lexend">nous <b>chant</b>ons → je <b>chant</b>ais &nbsp;·&nbsp; nous <b>finiss</b>ons → je <b>finiss</b>ais</div>`],
  ["", conjGrid([imp("chanter", "chant"), imp("finir", "finiss"), imp("être", "ét"), imp("avoir", "av")], 2)],
  ["Attention", row([card(`<span class="big">j'<b>ét</b>ais</span>`), card(`<span class="big">je commen<b>ç</b>ais</span>`), card(`<span class="big">je man<b>ge</b>ais</span>`)], 4)],
]);

// ---------------------------------------------------------------- 20
const quad = (svg, name, prop) => card(`${svg}<div style="font-family:Lexend;font-weight:600">${name}</div><div class="xs">${prop}</div>`, "width:52mm");
L_[20] = L("Droites parallèles et quadrilatères", [
  "Deux droites <b>parallèles</b> ne se coupent jamais : l'écart reste le même.",
  "Le carré, le rectangle et le losange ont leurs côtés opposés parallèles.",
], [
  ["(d) // (e)", `<svg width="160mm" height="30mm" viewBox="0 0 160 30">${Ln(4, 8, 156, 2)}${Ln(4, 26, 156, 20)}${T(5, 5, "(d)")}${T(5, 23.2, "(e)")}
    <path d="M45 7 v16" stroke="var(--c)" stroke-width=".4"/><path d="M115 4.5 v16" stroke="var(--c)" stroke-width=".4"/>${T(47, 16.5, "même écart", 'font-size="3.4" fill="var(--c)"')}${T(117, 14, "même écart", 'font-size="3.4" fill="var(--c)"')}</svg>`],
  ["", row([
    quad(`<svg width="34mm" height="30mm" viewBox="0 0 34 30"><rect x="5" y="3" width="24" height="24" fill="var(--tint)" stroke="#222" stroke-width=".45"/><g stroke="var(--c)" stroke-width=".4" fill="none"><path d="M5 6 h3 v-3"/><path d="M26 3 v3 h3"/><path d="M29 24 h-3 v3"/><path d="M8 27 v-3 h-3"/></g><g stroke="var(--c)" stroke-width=".5"><path d="M17 1.8 v2.4"/><path d="M17 25.8 v2.4"/><path d="M3.8 15 h2.4"/><path d="M27.8 15 h2.4"/></g></svg>`, "le carré", "4 côtés égaux · 4 angles droits"),
    quad(`<svg width="44mm" height="30mm" viewBox="0 0 44 30"><rect x="3" y="7" width="38" height="17" fill="var(--tint)" stroke="#222" stroke-width=".45"/><g stroke="var(--c)" stroke-width=".4" fill="none"><path d="M3 10 h3 v-3"/><path d="M38 7 v3 h3"/><path d="M41 21 h-3 v3"/><path d="M6 24 v-3 h-3"/></g></svg>`, "le rectangle", "4 angles droits"),
    quad(`<svg width="34mm" height="30mm" viewBox="0 0 34 30"><polygon points="17,2 26,15 17,28 8,15" fill="var(--tint)" stroke="#222" stroke-width=".45"/><g stroke="var(--c)" stroke-width=".5"><path d="M20.6 7.6 l1.6 -1.1"/><path d="M20.6 22.4 l1.6 1.1"/><path d="M13.4 7.6 l-1.6 -1.1"/><path d="M13.4 22.4 l-1.6 1.1"/></g></svg>`, "le losange", "4 côtés égaux"),
  ], 4)],
]);

// ---------------------------------------------------------------- 21
const cdp = (t) => `<span style="border:.45mm dashed var(--c);border-radius:1.5mm;padding:.6mm 2.2mm">${t}</span>`;
const cdv = (t) => `<span style="border:.45mm solid #222;border-radius:1.5mm;padding:.6mm 2.2mm">${t}</span>`;
L_[21] = L("Compléments de phrase et compléments du verbe", [
  "Le <b>complément de phrase</b> (où ? quand ? comment ?) se <b>déplace</b> et se <b>supprime</b>.",
  "Le <b>complément du verbe</b> reste <b>après le verbe</b>.",
], [
  ["", `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:2.5mm;font-size:16pt;align-items:center">${cdp("Ce matin,")}<span class="u">Tom</span><b>prend</b>${cdv("son vélo")}${cdp("dans le garage.")}</div>
    <div class="sm" style="margin-top:2.5mm">${cdp("pointillés")} complément de phrase &nbsp;&nbsp; ${cdv("trait plein")} complément du verbe</div>`],
  ["Mes deux tests", row([
    card(`<div class="xs mut">je déplace</div><span class="big">${cdp("Dans le garage,")} Tom prend son vélo. ✓</span>`, "width:80mm"),
    card(`<div class="xs mut">je supprime</div><span class="big">Tom prend son vélo. ✓</span><br><span class="big">Tom prend <s>son vélo</s>. ✗</span>`, "width:70mm"),
  ], 4)],
]);

// ---------------------------------------------------------------- 22
L_[22] = L("La division", [
  "17 : 5 → <b>quotient 3</b>, <b>reste 2</b>, car (5 × 3) + 2 = 17.",
  "Le reste est toujours <b>plus petit que le diviseur</b>.",
], [
  ["17 billes partagées en paquets de 5", `<svg width="120mm" height="18mm" viewBox="0 0 120 18">${[0, 1, 2].map((g) => `<rect x="${g * 32 + 0.5}" y="0.5" width="29" height="15" rx="2" fill="var(--tint)" stroke="#222" stroke-width=".3"/>` + Array.from({ length: 5 }, (_, i) => `<circle cx="${g * 32 + 5 + i * 5}" cy="8" r="2" fill="#222"/>`).join("")).join("")}<circle cx="104" cy="8" r="2" fill="var(--c)"/><circle cx="110" cy="8" r="2" fill="var(--c)"/>${T(101, 17, "reste", 'font-size="3.4" fill="var(--c)"')}</svg>`],
  ["Je pose : 857 : 4", `<div style="display:flex;gap:8mm;align-items:center"><table style="border-collapse:collapse;font-family:Lexend;font-size:15pt">
    ${[["", "8", "5", "7", "4"], ["−", "8", "", "", "214"], ["", "0", "5", "", ""], ["−", "", "4", "", ""], ["", "", "1", "7", ""], ["−", "", "1", "6", ""], ["", "", "", "1", ""]].map((r, i) => `<tr>${r.map((c, j) => `<td style="width:${j === 4 ? 22 : 7.5}mm;height:7.5mm;text-align:${j === 4 ? "left" : "center"};${j === 4 ? "border-left:.45mm solid #222;padding-left:3mm;" : ""}${j === 4 && i === 0 ? "border-bottom:.45mm solid #222;" : ""}${[1, 3, 5].includes(i) && j > 0 && j < 4 && c ? "border-bottom:.35mm solid #222;" : ""}${i === 1 && j === 4 ? "color:var(--c);font-weight:700;" : ""}">${c}</td>`).join("")}</tr>`).join("")}</table>
    <div class="card big">quotient <b>214</b>, reste <b>1</b><br><span class="sm">(4 × 214) + 1 = 857 ✓</span></div></div>`],
]);

// ---------------------------------------------------------------- 23
L_[23] = L("Le groupe nominal et ses accords", [
  "Dans le groupe nominal, le <b>nom</b> est le chef.",
  "Le déterminant et les adjectifs s'accordent avec lui en <b>genre</b> et en <b>nombre</b>.",
], [
  ["", `<div style="display:flex;justify-content:center;gap:4mm;font-size:18pt">${[["les", "dét."], ["petites", "adj."], ["souris", "NOM"], ["grises", "adj."]].map(([w, t], i) => `<div style="display:flex;flex-direction:column;align-items:center"><span style="${i === 2 ? "border:.5mm solid var(--c);border-radius:1.5mm;padding:0 2mm;font-weight:700" : ""}">${w}</span><span style="font-family:Lexend;font-size:10pt;color:var(--c)">${t}</span></div>`).join("")}</div><div class="sm mut">féminin pluriel partout</div>`],
  ["Le pluriel", table(null, [
    ["+ <b>s</b>", "un ami → des ami<b>s</b>"], ["-s, -x, -z : rien", "une souris → des souris"], ["-eau, -au, -eu : + <b>x</b>", "des bateau<b>x</b>, des cheveu<b>x</b>"],
    ["-al → <b>-aux</b>", "un cheval → des chev<b>aux</b>"], ["-ou → + s, sauf 7 en <b>-oux</b>", "bijoux, cailloux, choux, genoux, hiboux, joujoux, poux"],
  ], { widths: ["38%", "62%"] })],
  ["Le féminin des adjectifs", table(null, [
    ["grand → grand<b>e</b>", "rouge → rouge", "léger → lég<b>ère</b>"], ["heureux → heur<b>euse</b>", "sportif → spor<b>tive</b>", "bon → bo<b>nne</b>"],
  ])],
]);

// ---------------------------------------------------------------- 24
const doseur = (level) => {
  const H = 44, top = 4, y = (v) => top + H - (v / 500) * H;
  let s = `<path d="M8 2 V${top + H} H32 V2" fill="none" stroke="#222" stroke-width=".45"/><rect x="8.3" y="${y(level)}" width="23.4" height="${top + H - y(level)}" fill="var(--soft)"/>`;
  for (let v = 0; v <= 500; v += 50) {
    const big = v % 100 === 0;
    s += `<line x1="32" y1="${y(v)}" x2="${big ? 26 : 28.5}" y2="${y(v)}" stroke="#222" stroke-width=".3"/>`;
    if (big) s += T(34, y(v) + 1.3, v, 'font-size="3.4"');
  }
  return `<svg width="48mm" height="${H + 7}mm" viewBox="0 0 48 ${H + 7}">${s}${T(34, 1.8, "mL", 'font-size="3.2"')}</svg>`;
};
L_[24] = L("Les masses et les contenances", [
  "Masse : <b>1 kg = 1 000 g</b> · <b>1 t = 1 000 kg</b>.",
  "Contenance : <b>1 L = 10 dL = 100 cL = 1 000 mL</b>.",
], [
  ["Les masses", `<table class="t" style="font-family:Lexend;font-size:13pt;width:150mm"><tr><th style="background:var(--soft)">kg</th><th>hg</th><th>dag</th><th style="background:var(--soft)">g</th><th>dg</th><th>cg</th><th>mg</th></tr><tr><td>2</td><td>3</td><td>0</td><td>0</td><td></td><td></td><td></td></tr></table><div class="sm" style="margin-top:1mm">2 kg 300 g = 2 300 g</div>`],
  ["Les contenances", `<table class="t" style="font-family:Lexend;font-size:13pt;width:90mm"><tr><th style="background:var(--soft)">L</th><th>dL</th><th>cL</th><th>mL</th></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>`],
  ["Lire une graduation", `<div style="display:flex;gap:6mm;align-items:center">${doseur(300)}<div class="card big">1 petit trait = <b>50 mL</b><br>niveau : <b>300 mL</b></div></div>`],
]);

// ---------------------------------------------------------------- 25
L_[25] = L("Le futur", [
  "Le futur dit ce qui se passera <b>plus tard</b>.",
  "On entend toujours un <b>r</b> avant la terminaison : <b>-ai, -as, -a, -ons, -ez, -ont</b>.",
], [
  ["", conjGrid([
    conjT("chanter", P6.map((p, i) => [p, "chanter" + tm(["ai", "as", "a", "ons", "ez", "ont"][i])])),
    conjT("finir", P6.map((p, i) => [p, "finir" + tm(["ai", "as", "a", "ons", "ez", "ont"][i])])),
    conjT("être", P6.map((p, i) => [p, "ser" + tm(["ai", "as", "a", "ons", "ez", "ont"][i])])),
    conjT("avoir", P6.map((p, i) => [i === 0 ? "j'" : p, "aur" + tm(["ai", "as", "a", "ons", "ez", "ont"][i])])),
  ], 2)],
  ["Le radical change", table(null, [
    ["aller → j'<b>ir</b>ai", "faire → je <b>fer</b>ai", "dire → je <b>dir</b>ai", "prendre → je <b>prendr</b>ai"],
    ["venir → je <b>viendr</b>ai", "pouvoir → je <b>pourr</b>ai", "voir → je <b>verr</b>ai", "vouloir → je <b>voudr</b>ai"],
  ])],
  ["Attention", row([card(`<span class="big">je jou<b>e</b>rai</span>`), card(`<span class="big">tu cri<b>e</b>ras</span>`)], 4)],
]);

// ---------------------------------------------------------------- 26
const grid100 = (k, size = 30) => {
  const c = size / 10;
  let s = "";
  for (let i = 0; i < 100; i++) s += `<rect x="${(i % 10) * c}" y="${Math.floor(i / 10) * c}" width="${c}" height="${c}" fill="${i < k ? "var(--soft)" : "#fff"}" stroke="#555" stroke-width="0.15"/>`;
  return `<svg width="${size + 1}mm" height="${size + 1}mm" viewBox="-0.5 -0.5 ${size + 1} ${size + 1}">${s}</svg>`;
};
L_[26] = L("Fractions décimales et nombres décimaux", [
  "<b>10 dixièmes = 1 unité</b> · <b>100 centièmes = 1 unité</b>.",
  "La <b>virgule</b> sépare la partie entière et la partie décimale.",
], [
  ["", row([`<div class="c">${fracBar(10, 3, 70, 10)}<div class="big">${frac(3, 10)} = <b>0,3</b></div></div>`, `<div style="display:flex;gap:4mm;align-items:center">${grid100(25, 30)}<div class="big">${frac(25, 100)} = <b>0,25</b></div></div>`], 14)],
  ["Le tableau", `<table class="t" style="font-family:Lexend;font-size:14pt;width:auto"><tr><th>unités</th><th style="width:9mm">,</th><th>dixièmes</th><th>centièmes</th></tr>
    <tr><td>3</td><td><b>,</b></td><td>4</td><td></td></tr><tr><td>1</td><td><b>,</b></td><td>2</td><td>5</td></tr></table>
    <div class="sm" style="margin-top:1mm">3 + ${frac(4, 10)} = 3,4 &nbsp;·&nbsp; 1 + ${frac(25, 100)} = 1,25 &nbsp;·&nbsp; 2,35 € = 2 € et 35 centimes</div>`],
  ["La droite graduée en dixièmes", numberLine({ a: 0, b: 2, step: 0.1, width: 170, labels: { 0: "0", 1: "1", 2: "2" }, marks: { 0.3: "0,3", 1.4: "1,4" }, height: 18 })],
]);

// ---------------------------------------------------------------- 27
L_[27] = L("Construire et choisir ses mots", [
  "Les mots d'une même <b>famille</b> ont le même radical.",
  "Un <b>préfixe</b> se place avant le radical, un <b>suffixe</b> après.",
  "Synonymes : sens <b>proche</b>. Antonymes : sens <b>contraire</b>.",
], [
  ["", `<svg width="150mm" height="22mm" viewBox="0 0 150 22">
    <rect x="16" y="2" width="24" height="12" rx="1.5" fill="#fff" stroke="#222" stroke-width=".35"/>${T(28, 10.4, "dé", 'font-size="6" text-anchor="middle"')}
    <rect x="40" y="2" width="34" height="12" rx="1.5" fill="var(--soft)" stroke="#222" stroke-width=".35"/>${T(57, 10.4, "color", 'font-size="6" text-anchor="middle" font-weight="700"')}
    <rect x="74" y="2" width="28" height="12" rx="1.5" fill="#fff" stroke="#222" stroke-width=".35"/>${T(88, 10.4, "ation", 'font-size="6" text-anchor="middle"')}
    <g font-size="3.6" font-family="Lexend" text-anchor="middle" fill="var(--c)"><text x="28" y="19.5">préfixe</text><text x="57" y="19.5">radical</text><text x="88" y="19.5">suffixe</text></g></svg>`],
  ["", row([
    `<div style="width:84mm">${table(["Préfixe", "Sens", "Exemple"], [["re-", "à nouveau", "refaire"], ["dé-", "le contraire", "défaire"], ["in-, im-", "le contraire", "impossible"], ["pré-", "avant", "préhistoire"]])}</div>`,
    `<div style="width:84mm">${table(["Suffixe", "Sens", "Exemple"], [["-ette", "petit", "fillette"], ["-able", "qu'on peut…", "lavable"], ["-eur", "celui qui…", "nageur"], ["-age", "l'action de…", "lavage"]])}</div>`,
  ], 4)],
  ["", row([card(`<span class="big">content ≈ joyeux ≈ ravi</span><div class="xs mut">synonymes</div>`), card(`<span class="big">grand ≠ petit</span><div class="xs mut">antonymes</div>`)], 6)],
]);

// ---------------------------------------------------------------- 28
const frise = (labels, jumps) => {
  const W = 150, step = W / (labels.length - 1);
  let s = `<line x1="0" y1="14" x2="${W}" y2="14" stroke="#222" stroke-width=".4"/>`;
  labels.forEach((l, i) => { s += `<line x1="${i * step}" y1="12" x2="${i * step}" y2="16" stroke="#222" stroke-width=".4"/>${T(i * step, 21.5, l, 'text-anchor="middle"')}`; });
  jumps.forEach((j, i) => { const x1 = i * step, x2 = (i + 1) * step; s += `<path d="M${x1 + 1} 11 Q ${(x1 + x2) / 2} 2 ${x2 - 1} 11" fill="none" stroke="var(--c)" stroke-width=".45"/><text x="${(x1 + x2) / 2}" y="5" font-size="4" text-anchor="middle" font-family="Lexend" font-weight="600" fill="var(--c)">${j}</text>`; });
  return `<svg width="${W + 20}mm" height="24mm" viewBox="-10 0 ${W + 20} 24">${s}</svg>`;
};
const clock = (min, lab) => {
  const a = (min / 60) * 2 * Math.PI, x = 12 + 10 * Math.sin(a), y = 12 - 10 * Math.cos(a);
  return `<div class="c"><svg width="26mm" height="26mm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#222" stroke-width=".4"/><path d="M12 12 L12 2 A10 10 0 ${min > 30 ? 1 : 0} 1 ${x} ${y} Z" fill="var(--soft)"/><circle cx="12" cy="12" r="10" fill="none" stroke="#222" stroke-width=".4"/></svg><div class="sm"><b>${lab}</b></div></div>`;
};
L_[28] = L("Les durées", [
  "<b>1 h = 60 min</b> · <b>1 min = 60 s</b> · 1 jour = 24 h.",
  "Pour calculer une durée, je fais des <b>sauts</b> jusqu'aux heures pile.",
], [
  ["De 9 h 45 à 11 h 20 : 1 h 35 min", frise(["9 h 45", "10 h", "11 h", "11 h 20"], ["15 min", "1 h", "20 min"])],
  ["", row([clock(15, "un quart d'heure = 15 min"), clock(30, "une demi-heure = 30 min"), clock(60 - 0.001, "une heure = 60 min")], 10)],
  ["Convertir", row([card(`<span class="big">1 h 30 min = 60 + 30 = <b>90 min</b></span>`), card(`<span class="big">150 min = <b>2 h 30 min</b></span>`)], 4)],
]);

// ---------------------------------------------------------------- 29
const aux = (a, pp) => `<span class="tm">${a}</span> <span class="mt2">${pp}</span>`;
L_[29] = L("Le passé composé", [
  "Passé composé = auxiliaire <b>avoir</b> ou <b>être</b> au présent + <b>participe passé</b>.",
  "Avec <b>être</b>, le participe passé s'accorde avec le sujet : <i>elle est partie</i>.",
], [
  ["", conjGrid([
    conjT("chanter (avoir)", [["j'", aux("ai", "chanté")], ["tu", aux("as", "chanté")], ["il, elle", aux("a", "chanté")], ["nous", aux("avons", "chanté")], ["vous", aux("avez", "chanté")], ["ils, elles", aux("ont", "chanté")]]),
    conjT("aller (être)", [["je", aux("suis", "allé(e)")], ["tu", aux("es", "allé(e)")], ["il / elle", aux("est", "allé / allée")], ["nous", aux("sommes", "allé(e)s")], ["vous", aux("êtes", "allé(e)s")], ["ils / elles", aux("sont", "allés / allées")]]),
  ])],
  ["Participes passés", table(null, [["chant<b>é</b>, jou<b>é</b>", "fin<b>i</b>, grand<b>i</b>", "pris, dit, fait, vu, pu, voulu, venu"]])],
  ["Avec être", row([card("aller, venir, partir, arriver, entrer, sortir, rester, tomber…"), card(`<span class="big">Je <b>n'</b>ai <b>pas</b> mangé.</span>`)], 4)],
]);

// ---------------------------------------------------------------- 30
L_[30] = L("La symétrie axiale", [
  "Si je plie une figure le long de son <b>axe de symétrie</b>, les deux parties se superposent.",
  "Pour compléter une figure, je compte les carreaux jusqu'à l'axe et je reporte la <b>même distance</b> de l'autre côté.",
], [
  ["", row([
    card(`<svg width="40mm" height="30mm" viewBox="0 0 40 30">${poly("20,3 33,12 28,27 12,27 7,12")}${dash(20, 0, 20, 30)}</svg><div class="sm">1 axe ✓</div>`),
    card(`<svg width="40mm" height="30mm" viewBox="0 0 40 30">${poly("6,6 34,6 34,24 6,24")}${dash(20, 1, 20, 29)}${dash(2, 15, 38, 15)}</svg><div class="sm">2 axes ✓</div>`),
    card(`<svg width="40mm" height="30mm" viewBox="0 0 40 30">${poly("6,24 22,24 34,6 18,6")}${dash(20, 1, 20, 29)}</svg><div class="sm">pas un axe ✗</div>`),
  ], 5)],
  ["Sur un quadrillage", grid(14, 7, `<line x1="7" y1="0" x2="7" y2="7" stroke="var(--c)" stroke-width="0.1" stroke-dasharray="0.35 0.22"/>
    <polygon points="2,2 5,2 5,6 3,6" fill="var(--soft)" stroke="#222" stroke-width="0.09"/><polygon points="12,2 9,2 9,6 11,6" fill="#fff" stroke="#222" stroke-width="0.09"/>
    <path d="M2 1.2 H6.9 M7.1 1.2 H12" stroke="var(--c)" stroke-width="0.08"/>
    <text x="4.5" y="0.85" font-size="0.62" text-anchor="middle" font-family="Andika" fill="var(--c)">5 carreaux</text><text x="9.5" y="0.85" font-size="0.62" text-anchor="middle" font-family="Andika" fill="var(--c)">5 carreaux</text>`, 6)],
]);

export default L_;
