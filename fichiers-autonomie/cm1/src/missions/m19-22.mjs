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
<div class="col2"><div>se lève → ${blank(40)}</div><div>prend → ${blank(40)}</div><div>écoute → ${blank(40)}</div><div>allons → ${blank(40)}</div></div>`)}
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
${ex("Le groupe en gras est-il un complément de <b>phrase</b> (P) ou un complément du <b>verbe</b> (V) ? Écris P ou V.", `<div style="display:grid;grid-template-columns:1.25fr 1fr;column-gap:6mm;row-gap:1.3mm">
  <div>a. Lina prépare <b>un gâteau</b>. ${blank(8)}</div><div>c. <b>À midi</b>, nous mangeons. ${blank(8)}</div>
  <div>b. Lina prépare un gâteau <b>dans la cuisine</b>. ${blank(8)}</div><div>d. Le facteur apporte <b>une lettre</b>. ${blank(8)}</div></div>`)}
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
