import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, grid, emptyRow, fillLine } from "../lib.mjs";

// Imparfait : radical + marque de temps (surlignée) + marque de personne (soulignée)
const imp = (caption, pron, rad, tm, mp) =>
  `<table><caption>${caption}</caption>${pron.map((p, i) => `<tr><td class="p">${p}</td><td>${rad[i] ?? rad[0]}<span class="tm">${tm[i]}</span><span class="mt2">${mp[i]}</span></td></tr>`).join("")}</table>`;
const P = ["je / j'", "tu", "il, elle, on", "nous", "vous", "ils, elles"];
const TM = ["ai", "ai", "ai", "i", "i", "ai"];
const MP = ["s", "s", "t", "ons", "ez", "ent"];

const potence = (dividend, divisor, h = 30) => `<div style="display:inline-grid;grid-template-columns:auto auto;font-family:Lexend;font-size:14pt">
  <div style="padding:0.5mm 3mm 0 0;letter-spacing:1.5mm">${dividend}</div>
  <div style="border-left:.45mm solid #222;border-bottom:.45mm solid #222;padding:0.5mm 3mm;min-width:20mm">${divisor}</div>
  <div style="height:${h}mm"></div><div style="border-left:.45mm solid #222"></div></div>`;

const L = (x1, y1, x2, y2, extra = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#222" stroke-width=".45" ${extra}/>`;
const lab = (x, y, t) => `<text x="${x}" y="${y}" font-size="3.6" font-family="Andika">${t}</text>`;

export default [
  // ---------------------------------------------------------------- 19
  {
    n: 19, disc: "fr", domaine: "Conjugaison", titre: "L'imparfait de l'indicatif", titreCourt: "L'imparfait",
    lecon: `
<h1 class="lt">L'imparfait de l'indicatif</h1>
${box("À retenir", `<p>L'<b>imparfait</b> est un temps du <b>passé</b>. On l'utilise pour <b>décrire</b> (le décor, les personnages) et pour des actions <b>habituelles</b> ou <b>qui durent</b> : <i>Autrefois, les enfants <b>allaient</b> à l'école à pied.</i></p>
<p>Les terminaisons sont <b>les mêmes pour tous les verbes</b> : <b style="white-space:nowrap">-ais, -ais, -ait, -ions, -iez, -aient</b>.</p>`)}
${st("Comment le former ?")}
<p style="margin:0 0 1.5mm">Je prends le radical du verbe conjugué avec <b>nous au présent</b>, puis j'ajoute les terminaisons :</p>
<p style="margin:0 0 2mm;text-align:center">nous <b>chant</b>ons → je <b>chant</b>ais &nbsp;·&nbsp; nous <b>finiss</b>ons → je <b>finiss</b>ais &nbsp;·&nbsp; nous <b>fais</b>ons → je <b>fais</b>ais</p>
<div class="conj" style="grid-template-columns:1fr 1fr;gap:3mm 8mm">
${imp("chanter", P, ["chant"], TM, MP)}
${imp("finir", P, ["finiss"], TM, MP)}
${imp("être (radical : ét-)", ["j'", "tu", "il, elle, on", "nous", "vous", "ils, elles"], ["ét"], TM, MP)}
${imp("avoir", ["j'", "tu", "il, elle, on", "nous", "vous", "ils, elles"], ["av"], TM, MP)}
</div>
<p class="sm" style="margin:2mm 0 1mm">La terminaison a deux parties : la <span class="hl">marque du temps</span> (<b>-ai-</b> ou <b>-i-</b>) puis la <span class="u"><b>marque de la personne</b></span> (s, s, t, ons, ez, ent).</p>
<p class="sm" style="margin:0 0 1mm"><b>Autres verbes :</b> j'allais, je faisais, je disais, je prenais, je venais, je voyais, je pouvais, je voulais.</p>
${box("Attention !", `<p><b>-cer</b> : je commen<b>ç</b>ais, mais nous commen<b>c</b>ions. &nbsp; <b>-ger</b> : je man<b>ge</b>ais, mais nous man<b>g</b>ions.</p>
<p><b>être</b> est le seul verbe dont le radical ne vient pas de « nous » : j'<b>ét</b>ais.</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Sépare le radical, la marque du temps et la marque de la personne par des traits.", `<div class="col3" style="font-size:13pt"><div>il chantait</div><div>nous finissions</div><div>ils regardaient</div><div>vous aviez</div><div>j'étais</div><div>elle mangeait</div></div>`, { eg: "je jou|ai|s" })}
${ex("Complète avec la bonne terminaison de l'imparfait.", `<div class="col3" style="font-size:13pt">
  <div>a. Je regard${blank(14)}</div><div>b. Nous jou${blank(14)}</div><div>c. Ils dans${blank(16)}</div>
  <div>d. Tu finiss${blank(14)}</div><div>e. Vous all${blank(14)}</div><div>f. Elle ét${blank(14)}</div></div>`)}
${ex("Coche la forme correcte.", `<div class="col2">${qcm([["a. je", ["mangeais", "mangais"]], ["b. nous", ["commencions", "commençions"]]])}${qcm([["c. ils", ["avaient", "avait"]], ["d. vous", ["faisiez", "faisez"]]])}</div>`)}
${lvl(2)}
${ex("Complète le tableau.", table(["Verbe à l'imparfait", "Infinitif", "« nous » au présent"], [["nous prenions", "", ""], ["ils voyaient", "", ""], ["je finissais", "", ""]], { cls: "tall", widths: ["36%", "30%", "34%"] }))}
${ex("Réécris les verbes de ce texte à l'imparfait.", `<div class="text"><p style="text-indent:0">Le matin, mon grand-père se <b>lève</b> tôt. Il <b>prend</b> son café et il <b>écoute</b> la radio. Ensuite, nous <b>allons</b> au marché.</p></div>
<div>se lève → ${blank(26)} &nbsp; prend → ${blank(26)} &nbsp; écoute → ${blank(26)} &nbsp; allons → ${blank(26)}</div>`)}
${lvl(3)}
${ex("« Quand j'étais petit(e)… » Écris 3 phrases à l'imparfait sur tes souvenirs.", lines(3))}
`,
    corrige: `<p><b>1</b> chant|ai|t ; finiss|i|ons ; regard|ai|ent ; av|i|ez ; ét|ai|s ; mange|ai|t (le e garde le son [ʒ]).</p>
<p><b>2</b> a. regardais b. jouions c. dansaient d. finissais e. alliez f. était</p>
<p><b>3</b> a. mangeais b. commencions c. avaient d. faisiez</p>
<p><b>4</b> prendre / nous prenons ; voir / nous voyons ; finir / nous finissons.</p>
<p><b>5</b> se levait ; prenait ; écoutait ; allions.</p>
<p><b>6</b> Production libre : vérifier -ais/-ait/-aient et le radical.</p>`,
  },
  // ---------------------------------------------------------------- 20
  {
    n: 20, disc: "ma", domaine: "Géométrie", titre: "Droites parallèles et quadrilatères", titreCourt: "Parallèles et quadrilatères",
    lecon: `
<h1 class="lt">Droites parallèles et quadrilatères</h1>
${box("À retenir", `<p>Deux droites <b>parallèles</b> ne se coupent jamais, même si on les prolonge : l'<b>écart</b> entre elles reste toujours le même. On écrit : (d) // (e).</p>
<p>Pour le vérifier : je trace une perpendiculaire à (d) avec l'équerre ; si elle est aussi perpendiculaire à (e), les droites sont parallèles.</p>`)}
<div class="fig"><svg width="150mm" height="30mm" viewBox="0 0 150 30">
  ${L(4, 8, 146, 2)}${L(4, 26, 146, 20)}${lab(5, 5, "(d)")}${lab(5, 23.2, "(e)")}
  ${L(60.3, 2, 61.8, 29, 'stroke-dasharray="1.2 1"')}
  <path d="M40 9 v14" stroke="var(--c)" stroke-width=".4" marker-start="none"/><path d="M110 6 v14" stroke="var(--c)" stroke-width=".4"/>
  <text x="42" y="17" font-size="3.2" font-family="Andika" fill="var(--c)">même écart</text><text x="112" y="14" font-size="3.2" font-family="Andika" fill="var(--c)">même écart</text>
</svg></div>
${st("Trois quadrilatères à connaître")}
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4mm;text-align:center">
<div><svg width="30mm" height="30mm" viewBox="0 0 30 30"><rect x="4" y="4" width="22" height="22" fill="var(--tint)" stroke="#222" stroke-width=".45"/>
<g stroke="var(--c)" stroke-width=".4" fill="none"><path d="M4 7 h3 v-3"/><path d="M23 4 v3 h3"/><path d="M26 23 h-3 v3"/><path d="M7 26 v-3 h-3"/></g>
<g stroke="var(--c)" stroke-width=".45"><path d="M15 2.8 v2.4"/><path d="M15 24.8 v2.4"/><path d="M2.8 15 h2.4"/><path d="M24.8 15 h2.4"/></g></svg>
<b>le carré</b><div class="sm">4 côtés de même longueur<br>4 angles droits</div></div>
<div><svg width="44mm" height="30mm" viewBox="0 0 44 30"><rect x="4" y="7" width="36" height="18" fill="var(--tint)" stroke="#222" stroke-width=".45"/>
<g stroke="var(--c)" stroke-width=".4" fill="none"><path d="M4 10 h3 v-3"/><path d="M37 7 v3 h3"/><path d="M40 22 h-3 v3"/><path d="M7 25 v-3 h-3"/></g></svg>
<b>le rectangle</b><div class="sm">4 angles droits<br>côtés opposés de même longueur</div></div>
<div><svg width="30mm" height="30mm" viewBox="0 0 30 30"><polygon points="15,2 24,15 15,28 6,15" fill="var(--tint)" stroke="#222" stroke-width=".45"/>
<g stroke="var(--c)" stroke-width=".45"><path d="M18.6 7.6 l1.6 -1.1"/><path d="M18.6 22.4 l1.6 1.1"/><path d="M11.4 7.6 l-1.6 -1.1"/><path d="M11.4 22.4 l-1.6 1.1"/></g></svg>
<b>le losange</b><div class="sm">4 côtés de même longueur<br>(angles pas forcément droits)</div></div>
</div>
<p class="sm" style="margin:2mm 0 0">Dans ces trois figures, les <b>côtés opposés sont parallèles</b>. Les petits traits montrent les côtés de même longueur ; le petit carré montre l'angle droit. Un carré est un rectangle particulier, et aussi un losange particulier.</p>
${box("Un programme de construction", `<p>C'est une liste d'étapes pour tracer une figure. Je lis <b>toute</b> la consigne, puis je trace <b>étape par étape</b>, dans l'ordre, et je nomme les points au fur et à mesure.</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Observe ces droites. Utilise ta règle et ton équerre.", `<div style="display:flex;gap:6mm;align-items:center">
<svg width="100mm" height="44mm" viewBox="0 0 100 44">${L(5, 6, 85, 30)}${L(5, 16, 75, 37)}${L(60, 2, 48, 42)}${L(80, 3, 98, 39)}
${lab(86, 29, "(a)")}${lab(76, 40, "(c)")}${lab(61, 5, "(b)")}${lab(91, 41, "(d)")}</svg>
<div style="flex:1"><div>Deux droites parallèles : ${blank(16)} et ${blank(16)}</div><div class="mt">(b) est perpendiculaire à ${blank(12)} et à ${blank(12)}</div></div></div>`)}
${ex("Vrai ou faux ?", vf(["a. Un carré a 4 angles droits.", "b. Un rectangle a toujours 4 côtés de même longueur.", "c. Un losange a 4 côtés de même longueur.", "d. Les côtés opposés d'un rectangle sont parallèles."], { cols: 2 }))}
${ex("Vérifie avec tes instruments, puis écris le nom de chaque figure : <i>carré</i>, <i>rectangle</i>, <i>losange</i> ou <i>autre</i>.", `<div style="display:flex;justify-content:space-between;align-items:flex-end;text-align:center">
<div><svg width="30mm" height="27mm" viewBox="0 0 30 27"><rect x="5" y="3" width="20" height="20" fill="none" stroke="#222" stroke-width=".45"/></svg>1. ${blank(20)}</div>
<div><svg width="32mm" height="27mm" viewBox="0 0 32 27"><rect x="2" y="7" width="28" height="14" fill="none" stroke="#222" stroke-width=".45"/></svg>2. ${blank(20)}</div>
<div><svg width="30mm" height="27mm" viewBox="0 0 30 27"><polygon points="15,2 23,13 15,24 7,13" fill="none" stroke="#222" stroke-width=".45"/></svg>3. ${blank(20)}</div>
<div><svg width="30mm" height="27mm" viewBox="0 0 30 27"><polygon points="2,22 28,22 22,6 8,4" fill="none" stroke="#222" stroke-width=".45"/></svg>4. ${blank(20)}</div>
<div><svg width="30mm" height="27mm" viewBox="0 0 30 27"><polygon points="3,12 21,6 25,18 7,24" fill="none" stroke="#222" stroke-width=".45"/></svg>5. ${blank(20)}</div>
</div>`)}
${lvl(2)}
${ex("Suis ce programme de construction sur le quadrillage.", `<div style="display:flex;gap:5mm;align-items:center">
<div class="sm" style="flex:1">1. Trace le segment [AB] : B est <b>6 carreaux</b> à droite de A.<br>2. Trace la droite perpendiculaire à [AB] qui passe par B.<br>3. Place C sur cette droite, <b>4 carreaux</b> au-dessus de B.<br>4. Place D pour obtenir le rectangle ABCD. Trace-le.<br>5. Quelle figure obtiendrais-tu si [BC] mesurait 6 carreaux ? ${blank(26)}</div>
${grid(12, 8, `<circle cx="2" cy="7" r="0.16" fill="#222"/><text x="1.2" y="7.85" font-size="0.75" font-family="Andika">A</text>`)}</div>`)}
${lvl(3)}
<div class="row" style="gap:6mm;align-items:flex-start">
<div style="flex:1.6">${ex("Écris un programme de construction pour que quelqu'un puisse tracer cette figure sans la voir.", `<div style="display:flex;gap:3mm;align-items:flex-start">${grid(7, 5, `<rect x="1" y="1" width="5" height="3" fill="none" stroke="#222" stroke-width="0.09"/><line x1="1" y1="4" x2="6" y2="1" stroke="#222" stroke-width="0.09"/>`, 4)}<div style="flex:1">${lines(4, 7.5)}</div></div>`)}</div>
<div style="flex:1">${ex("Combien de rectangles vois-tu ? <span style='font-weight:400' class='sm'>(un carré compte aussi)</span>", `<div style="display:flex;gap:4mm;align-items:center"><svg width="26mm" height="26mm" viewBox="0 0 26 26"><rect x="1" y="1" width="24" height="24" fill="none" stroke="#222" stroke-width=".5"/>${L(13, 1, 13, 25)}${L(1, 13, 25, 13)}</svg><div>${blank(14)}<br>rectangles</div></div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> (a) // (c) ; (b) est perpendiculaire à (a) et à (c). (d) n'est ni parallèle ni perpendiculaire aux autres.</p>
<p><b>2</b> a. V b. F (seulement les côtés opposés) c. V d. V</p>
<p><b>3</b> 1. carré 2. rectangle 3. losange 4. autre 5. rectangle (penché : vérifier les angles droits à l'équerre).</p>
<p><b>4</b> Rectangle de 6 carreaux sur 4. Si [BC] mesurait 6 carreaux : un carré.</p>
<p><b>5</b> Ex. : Trace un rectangle ABCD de 5 carreaux de long et 3 carreaux de large. Trace le segment qui relie le coin en bas à gauche au coin en haut à droite (une diagonale).</p>
<p><b>6</b> 9 rectangles : 4 petits carrés, 2 rectangles horizontaux, 2 verticaux, 1 grand carré.</p>`,
  },
  // ---------------------------------------------------------------- 21
  {
    n: 21, disc: "fr", domaine: "Grammaire", titre: "Compléments de phrase et compléments du verbe", titreCourt: "Compléments de phrase et du verbe",
    lecon: `
<h1 class="lt">Les compléments<small>complément de phrase · complément du verbe</small></h1>
${box("À retenir", `<p>Dans une phrase, on trouve le <b>sujet</b> et le <b>verbe</b>. On peut ajouter des <b>compléments</b>.</p>
<p>Le <b>complément de phrase</b> dit souvent <b>où</b>, <b>quand</b> ou <b>comment</b>. On peut le <b>déplacer</b> et le <b>supprimer</b>.</p>
<p>Le <b>complément du verbe</b> est placé <b>après le verbe</b>. On ne peut <b>pas le déplacer</b>, et souvent pas le supprimer.</p>`)}
${st("Un exemple")}
<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:2mm;font-size:13.5pt;margin:2mm 0">
  <span style="border:.4mm dashed var(--c);border-radius:1.5mm;padding:.5mm 2mm">Ce matin,</span>
  <span class="u">Tom</span><span><b>prend</b></span>
  <span style="border:.4mm solid #222;border-radius:1.5mm;padding:.5mm 2mm">son vélo</span>
  <span style="border:.4mm dashed var(--c);border-radius:1.5mm;padding:.5mm 2mm">dans le garage.</span>
</div>
<p class="sm c" style="margin:0 0 2mm"><span style="border:.35mm dashed var(--c);padding:0 1.5mm;border-radius:1mm">pointillés</span> = compléments de phrase (quand ? où ?) &nbsp;·&nbsp; <span style="border:.35mm solid #222;padding:0 1.5mm;border-radius:1mm">trait plein</span> = complément du verbe (prend quoi ?)</p>
${st("Mes deux tests")}
${table(["Test", "Complément de phrase", "Complément du verbe"], [
  [{ v: "Je le <b>supprime</b>", cls: "l" }, { v: "Tom prend son vélo. ✓<br><span class='sm mut'>(la phrase a encore du sens)</span>", cls: "l" }, { v: "Ce matin, Tom prend dans le garage. ✗", cls: "l" }],
  [{ v: "Je le <b>déplace</b>", cls: "l" }, { v: "Dans le garage, ce matin, Tom prend son vélo. ✓", cls: "l" }, { v: "Son vélo Tom prend… ✗", cls: "l" }],
], { widths: ["22%", "42%", "36%"] })}
${box("Attention !", `<p>Un complément de phrase peut être un groupe de mots (<i>pendant les vacances</i>), un seul mot (<i>hier</i>, <i>doucement</i>) ou commencer la phrase. En tête de phrase, on le fait souvent suivre d'une <b>virgule</b>.</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Souligne les compléments de phrase. Ils répondent à : où ? quand ? comment ?", `<div class="col2">
  <div>a. Le soir, les chouettes chassent.</div><div>b. Mon chat dort sur le canapé.</div>
  <div>c. Les enfants jouent joyeusement dans la neige.</div><div>d. Pendant la récréation, Tom lit un livre.</div></div>`)}
${ex("Réécris la phrase en déplaçant le complément de phrase en gras.", `
  <div>a. Les oiseaux chantent <b>au lever du soleil</b>.</div>${fillLine("→")}
  <div class="mt">b. <b>Chaque été</b>, ma famille campe au bord d'un lac.</div>${fillLine("→")}`)}
${ex("Supprime tous les compléments de phrase. Écris la phrase qui reste.", `<div>Hier soir, sous la pluie, le chien a aboyé longtemps.</div>${fillLine("→")}`)}
${lvl(2)}
${ex("Le groupe en gras est-il un complément de <b>phrase</b> (P) ou un complément du <b>verbe</b> (V) ? Écris P ou V.", `<div class="col2">
  <div>a. Lina prépare <b>un gâteau</b>. ${blank(8)}</div><div>b. Lina prépare un gâteau <b>dans la cuisine</b>. ${blank(8)}</div>
  <div>c. <b>À midi</b>, nous mangeons. ${blank(8)}</div><div>d. Le facteur apporte <b>une lettre</b>. ${blank(8)}</div></div>`)}
${ex("Lis le texte, puis réponds.", `<div class="text"><p>Ce lundi matin, Nina arrive dans sa nouvelle école. Dans la cour, des enfants jouent au ballon. Timidement, elle s'approche d'un banc. Soudain, une fille lui sourit et l'invite à jouer.</p></div>
<div>a. Recopie le complément de phrase qui dit <b>où</b> : ${blank(55)}</div>
<div class="mt">b. Comment se sent Nina au début ? Quel mot le montre ? ${blank(50)}</div>
<div class="mt">c. À ton avis, comment se sent-elle à la fin ? Pourquoi ?</div>${lines(1)}`)}
${lvl(3)}
${ex("Enrichis cette phrase avec un complément qui dit <b>quand</b> et un autre qui dit <b>où</b> : « Le train part. »", lines(1))}
`,
    corrige: `<p><b>1</b> a. Le soir b. sur le canapé c. joyeusement ; dans la neige d. Pendant la récréation</p>
<p><b>2</b> a. Au lever du soleil, les oiseaux chantent. b. Ma famille campe au bord d'un lac chaque été.</p>
<p><b>3</b> Le chien a aboyé.</p>
<p><b>4</b> a. V b. P c. P d. V</p>
<p><b>5</b> a. Dans la cour (aussi : dans sa nouvelle école). b. Elle est timide, inquiète : « Timidement ». c. Rassurée, contente : une fille lui sourit et l'invite à jouer.</p>
<p><b>6</b> Ex. : Ce soir, le train part de la gare de Lyon.</p>`,
  },
  // ---------------------------------------------------------------- 22
  {
    n: 22, disc: "ma", domaine: "Calcul", titre: "La division", titreCourt: "La division",
    lecon: `
<h1 class="lt">La division<small>partager · quotient et reste · division posée</small></h1>
${box("À retenir", `<p>On divise pour <b>partager en parts égales</b> ou pour chercher <b>combien de fois</b> un nombre est contenu dans un autre.</p>
<p>17 : 5 → <b>quotient 3</b>, <b>reste 2</b> car 5 × 3 = 15 et 17 − 15 = 2. On écrit : <b>17 = (5 × 3) + 2</b>.</p>
<p>Le <b>reste</b> est toujours <b>plus petit que le diviseur</b>.</p>`)}
${st("Avec les tables de multiplication")}
<p style="margin:0 0 1mm"><b>45 : 7</b> → je cherche dans la table de 7 : 7 × 6 = 42 ✓ ; 7 × 7 = 49 ✗ (trop grand).</p>
<p style="margin:0 0 1mm">Donc le quotient est <b>6</b> et le reste est 45 − 42 = <b>3</b>. &nbsp; 45 = (7 × 6) + 3</p>
${st("Poser une division")}
<div class="row" style="align-items:flex-start;gap:6mm">
<div style="flex:0 0 auto">
<table style="border-collapse:collapse;font-family:Lexend;font-size:14pt">
  ${[
    ["", "8", "5", "7", "4"],
    ["−", "8", "", "", "214"],
    ["", "0", "5", "", ""],
    ["−", "", "4", "", ""],
    ["", "", "1", "7", ""],
    ["−", "", "1", "6", ""],
    ["", "", "", "1", ""],
  ].map((r, i) => `<tr>${r.map((c, j) => `<td style="width:${j === 4 ? 22 : 7}mm;height:7mm;text-align:${j === 4 ? "left" : "center"};${j === 4 ? "border-left:.45mm solid #222;padding-left:3mm;" : ""}${j === 4 && i === 0 ? "border-bottom:.45mm solid #222;" : ""}${[1, 3, 5].includes(i) && j > 0 && j < 4 && c ? "border-bottom:.35mm solid #222;" : ""}${i === 1 && j === 4 ? "color:var(--c);font-weight:700;" : ""}">${c}</td>`).join("")}</tr>`).join("")}
</table></div>
<div class="sm">${exs(["Dans 8 centaines, combien de fois 4 ? <b>2</b> fois (8). Il reste 0.", "J'abaisse le 5 : dans 5, combien de fois 4 ? <b>1</b> fois (4). Il reste 1.", "J'abaisse le 7 : dans 17, combien de fois 4 ? <b>4</b> fois (16). Il reste <b>1</b>.", "857 : 4 → quotient <b>214</b>, reste <b>1</b>."])}
${box("Je vérifie", `<p>(4 × 214) + 1 = 856 + 1 = 857 ✓</p>`, { warn: true, tint: false })}</div>
</div>
${box("Attention aux problèmes !", `<p>40 personnes partent en excursion dans des minibus de 9 places. 40 : 9 → 4, reste 4. Il faut <b>5</b> minibus, sinon 4 personnes restent à pied ! Je réfléchis toujours au <b>sens du reste</b>.</p>`, { tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("On partage ces 23 billes entre 4 enfants. Entoure les parts, puis complète.", `<div style="display:flex;gap:6mm;align-items:center"><svg width="78mm" height="16mm" viewBox="0 0 78 16">${Array.from({ length: 23 }, (_, i) => `<circle cx="${4 + (i % 12) * 6.3}" cy="${i < 12 ? 4 : 11.5}" r="2.2" fill="var(--soft)" stroke="#222" stroke-width=".3"/>`).join("")}</svg>
<div>Chaque enfant a ${blank(12)} billes. Il en reste ${blank(12)}.</div></div>`)}
${ex("Trouve le quotient et le reste. Puis vérifie.", table(["Division", "Quotient", "Reste", "Je vérifie"], [["38 : 5", "", "", "(5 × … ) + … = 38"], ["50 : 6", "", "", ""], ["29 : 4", "", "", ""], ["63 : 9", "", "", ""]], { widths: ["20%", "18%", "18%", "44%"] }), { eg: "45 : 7 → quotient 6, reste 3 ; (7 × 6) + 3 = 45" })}
${ex("Pose et calcule.", `<div style="display:flex;justify-content:space-around">${potence("684", "3", 26)}${potence("925", "4", 26)}${potence("1275", "5", 26)}</div>`)}
${lvl(2)}
${ex("Vrai ou faux ?", vf(["a. 26 : 4 → quotient 6, reste 2", "b. 30 : 7 → quotient 4, reste 2", "c. 40 : 6 → quotient 6, reste 4", "d. 50 : 8 → quotient 5, reste 10"], { cols: 2 }))}
${lvl(3)}
<div class="row" style="gap:6mm">
<div style="flex:1.5">${ex("Le boulanger a fait 150 croissants. Il les met dans des sachets de 6. Combien de sachets remplit-il ? Il vend chaque sachet 7 €. Combien gagne-t-il s'il vend tout ?", work(16))}</div>
<div style="flex:1">${ex("Je suis un nombre entre 30 et 50. Divisé par 5, mon reste est 3. Divisé par 4, mon reste est 0. Qui suis-je ?", `<div style="height:13mm"></div>${fillLine("Je suis")}`)}</div>
</div>
`,
    corrige: `<p><b>1</b> 5 billes chacun, il en reste 3 (4 × 5 + 3 = 23).</p>
<p><b>2</b> 38 : 5 → 7 r 3 ; 50 : 6 → 8 r 2 ; 29 : 4 → 7 r 1 ; 63 : 9 → 7 r 0.</p>
<p><b>3</b> 684 : 3 = 228 ; 925 : 4 = 231 reste 1 ; 1 275 : 5 = 255.</p>
<p><b>4</b> a. V b. V c. V d. F (le reste doit être plus petit que 8 : quotient 6, reste 2)</p>
<p><b>5</b> 150 : 6 = 25 sachets ; 25 × 7 = 175 €.</p>
<p><b>6</b> Reste 3 en divisant par 5 : 33, 38, 43, 48. Divisible par 4 : <b>48</b>.</p>`,
  },
];
