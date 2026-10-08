import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, conj, grid, numberLine, emptyRow } from "../lib.mjs";

const pt = (x, y, l, dx = 1.6, dy = -1.6) =>
  `<path d="M${x - 1.2} ${y - 1.2} L${x + 1.2} ${y + 1.2} M${x - 1.2} ${y + 1.2} L${x + 1.2} ${y - 1.2}" stroke="#222" stroke-width="0.35"/>${l ? `<text x="${x + dx}" y="${y + dy}" font-size="3.6" font-family="Andika">${l}</text>` : ""}`;

export default [
  // ---------------------------------------------------------------- 07
  {
    n: 7, disc: "fr", domaine: "Conjugaison", titre: "Le présent des verbes du 1er et du 2e groupe", titreCourt: "Présent : 1er et 2e groupes",
    exos: () => `
${lvl(1)}
${ex("Relie chaque pronom à la bonne forme du verbe <b>regarder</b>.", relier(["nous", "ils", "tu", "vous", "je"], ["regardez", "regarde", "regardons", "regardes", "regardent"], 30))}
${ex("Complète avec la bonne terminaison.", `<div class="col3" style="font-size:13pt">
  <div>a. Tu parl${blank(12)}</div><div>b. Ils dans${blank(12)}</div><div>c. Vous rempl${blank(16)}</div>
  <div>d. Je chois${blank(12)}</div><div>e. Elle obé${blank(12)}</div><div>f. Nous grand${blank(18)}</div></div>`, { eg: "Nous jou<b>ons</b>." })}
${ex("Coche la forme correcte.", `<div class="col2">${qcm([["a.", ["nous mangons", "nous mangeons"]], ["b.", ["nous commençons", "nous commencons"]]])}${qcm([["c.", ["ils finissent", "ils finent"]], ["d.", ["tu cries", "tu cri"]]])}</div>`)}
${lvl(2)}
${ex("Corrige le verbe s'il est mal écrit. Si la phrase est juste, écris <b>correct</b>.", `
  <div>a. Les enfants joue dans la cour. → ${blank(55)}</div>
  <div class="mt">b. Tu rougit quand tu es gêné. → ${blank(55)}</div>
  <div class="mt">c. Nous plaçons les verres sur la table. → ${blank(45)}</div>
  <div class="mt">d. Vous bâtisez une cabane. → ${blank(55)}</div>`)}
${ex("Mets le sujet au pluriel et accorde le verbe.", `
  <div>a. Je réfléchis. → Nous ${blank(60)}</div>
  <div class="mt">b. Tu ranges les livres. → Vous ${blank(60)}</div>
  <div class="mt">c. L'oiseau choisit une branche. → Les oiseaux ${blank(50)}</div>`, { eg: "Il saute. → Ils saut<b>ent</b>." })}
${lvl(3)}
${ex("Conjugue les verbes entre parenthèses au présent.", `<div class="text" style="line-height:2.05;border-left-color:#d0d5dc"><p style="text-indent:0">
Chaque samedi, Mila et son frère <span class="mut">(aider)</span> ${blank(24)} leurs grands-parents au jardin. Mila <span class="mut">(arroser)</span> ${blank(24)} les tomates. Son frère <span class="mut">(remplir)</span> ${blank(24)} les seaux. À midi, ils <span class="mut">(manger)</span> ${blank(24)} tous ensemble. Le grand-père <span class="mut">(lancer)</span> ${blank(22)} : « Aujourd'hui, nous <span class="mut">(commencer)</span> ${blank(28)} par le dessert ! » Les enfants <span class="mut">(applaudir)</span> ${blank(28)}.</p></div>`)}
`,
    corrige: `<p><b>1</b> nous regardons ; ils regardent ; tu regardes ; vous regardez ; je regarde.</p>
<p><b>2</b> a. parles b. dansent c. remplissez d. choisis e. obéit f. grandissons</p>
<p><b>3</b> a. nous mangeons b. nous commençons c. ils finissent d. tu cries</p>
<p><b>4</b> a. jouent b. rougis c. correct d. bâtissez</p>
<p><b>5</b> a. Nous réfléchissons. b. Vous rangez les livres. c. Les oiseaux choisissent une branche.</p>
<p><b>6</b> aident, arrose, remplit, mangent, lance, commençons, applaudissent.</p>`,
  },
  // ---------------------------------------------------------------- 08
  {
    n: 8, disc: "ma", domaine: "Géométrie", titre: "Droites, segments et droites perpendiculaires", titreCourt: "Droites et perpendiculaires",
    exos: () => `
${lvl(1)}
${ex("Écris sous chaque dessin : <i>droite</i>, <i>segment</i>, <i>points alignés</i> ou <i>points non alignés</i>.", `<div style="display:flex;justify-content:space-between">
<div><svg width="40mm" height="18mm" viewBox="0 0 40 18"><line x1="0" y1="14" x2="40" y2="4" stroke="#222" stroke-width=".45"/>${pt(12, 11, "")}${pt(28, 7, "")}</svg>${blank(38)}</div>
<div><svg width="40mm" height="18mm" viewBox="0 0 40 18">${pt(6, 4, "")}${pt(20, 15, "")}${pt(34, 6, "")}</svg>${blank(38)}</div>
<div><svg width="40mm" height="18mm" viewBox="0 0 40 18"><line x1="5" y1="13" x2="35" y2="5" stroke="#222" stroke-width=".45"/><line x1="4.4" y1="10.7" x2="5.6" y2="15.3" stroke="#222" stroke-width=".45"/><line x1="34.4" y1="2.7" x2="35.6" y2="7.3" stroke="#222" stroke-width=".45"/></svg>${blank(38)}</div>
<div><svg width="40mm" height="18mm" viewBox="0 0 40 18">${pt(4, 15, "")}${pt(20, 9.5, "")}${pt(36, 4, "")}</svg>${blank(38)}</div>
</div>`)}
${ex("Avec ta règle, vérifie si les points sont alignés. Coche.", `<div style="display:flex;justify-content:space-around;align-items:center">
<div><svg width="66mm" height="21mm" viewBox="0 0 66 21">${pt(5, 18, "A")}${pt(30, 12, "B")}${pt(60, 4.8, "C")}</svg><div>A, B, C : ${cb()}alignés ${cb()}non alignés</div></div>
<div><svg width="66mm" height="21mm" viewBox="0 0 66 21">${pt(5, 4, "D")}${pt(32, 13.2, "E")}${pt(60, 18, "F")}</svg><div>D, E, F : ${cb()}alignés ${cb()}non alignés</div></div>
</div>`)}
${ex("Avec ton équerre, cherche les angles droits de cette figure. Marque-les d'un petit carré.", `<div style="display:flex;gap:10mm;align-items:center">
<svg width="52mm" height="36mm" viewBox="0 0 52 36"><polygon points="4,32 42.4,32 42.4,12.8 28,3.2 4,3.2" fill="none" stroke="#222" stroke-width=".5"/>
<g font-size="3.6" font-family="Andika"><text x="0" y="35.5">A</text><text x="43.5" y="35.5">B</text><text x="44" y="13">C</text><text x="27" y="2.4">D</text><text x="0" y="3.5">E</text></g></svg>
<div>Les angles droits sont en : ${blank(40)}<div class="mt">Nombre d'angles droits : ${blank(14)}</div></div></div>`)}
${lvl(2)}
${ex("Trace la droite perpendiculaire à (d) passant par A, puis la perpendiculaire à (e) passant par B.", `<div style="display:flex;justify-content:space-between;align-items:center">
${grid(16, 8, `<line x1="0" y1="8" x2="8" y2="0" stroke="#222" stroke-width="0.09"/><text x="7.3" y="1.9" font-size="0.75" font-family="Andika">(d)</text><path d="M9.75 5.75 L10.25 6.25 M9.75 6.25 L10.25 5.75" stroke="#222" stroke-width="0.07"/><text x="10.35" y="5.75" font-size="0.75" font-family="Andika">A</text>`)}
<svg width="86mm" height="40mm" viewBox="0 0 86 40"><rect x=".2" y=".2" width="85.6" height="39.6" fill="none" stroke="#b8c0ca" stroke-width=".3" rx="2"/><line x1="4" y1="36" x2="82" y2="12" stroke="#222" stroke-width=".45"/><text x="76" y="11" font-size="3.6" font-family="Andika">(e)</text>${pt(28, 10, "B")}</svg>
</div>`)}
${ex("Vrai ou faux ?", vf(["a. Un segment a deux extrémités.", "b. Une droite s'arrête à ses deux extrémités.", "c. Deux droites perpendiculaires forment quatre angles droits.", "d. Pour vérifier un angle droit, j'utilise ma règle."], { cols: 2 }))}
${lvl(3)}
${ex("Reproduis cette figure sur le quadrillage de droite. Le point de départ est déjà placé.", `<div style="display:flex;justify-content:space-around;align-items:center">
${grid(9, 6, `<polygon points="1,5 1,1 4,1 6,3 4,5" fill="var(--soft)" stroke="#222" stroke-width="0.09"/><polyline points="2,5 2,3 3,3 3,5" fill="none" stroke="#222" stroke-width="0.09"/>`)}
<span style="font-size:20pt;color:var(--muted)">→</span>
${grid(9, 6, `<circle cx="1" cy="5" r="0.18" fill="var(--c)"/>`)}
</div>`)}
`,
    corrige: `<p><b>1</b> droite ; points non alignés ; segment ; points alignés.</p>
<p><b>2</b> A, B, C : alignés. D, E, F : non alignés (E est légèrement au-dessus).</p>
<p><b>3</b> 3 angles droits : en A, en B et en E (les angles en C et D ne sont pas droits).</p>
<p><b>4</b> (d) : la perpendiculaire passe par A et suit la diagonale des carreaux dans l'autre sens ; elle coupe (d) au nœud situé 4 carreaux à gauche et 4 carreaux au-dessus de A. (e) : vérifier à l'équerre (angle droit marqué).</p>
<p><b>5</b> a. V b. F c. V d. F (l'équerre)</p>
<p><b>6</b> Figure identique (une « maison » couchée avec une porte) : mêmes longueurs en carreaux, 2 côtés en diagonale des carreaux.</p>`,
  },
  // ---------------------------------------------------------------- 09
  {
    n: 9, disc: "fr", domaine: "Grammaire et orthographe", titre: "Le sujet et l'accord du verbe", titreCourt: "Le sujet et l'accord du verbe",
    exos: () => `
${lvl(1)}
${ex("Souligne le sujet et entoure le verbe.", `<div class="col2">
  <div>a. Le facteur apporte une lettre.</div><div>b. Mes cousins arrivent demain.</div>
  <div>c. Chaque matin, nous prenons le bus.</div><div>d. Lou et sa sœur dessinent.</div></div>`)}
${ex("Remplace le sujet par un pronom.", `
  <div>a. Mon père répare le vélo. → ${blank(16)} répare le vélo. &nbsp;&nbsp; b. Lucas et moi jouons. → ${blank(16)} jouons.</div>
  <div class="mt">c. Ta sœur et toi partez. → ${blank(16)} partez. &nbsp;&nbsp; d. Les chevaux galopent. → ${blank(16)} galopent.</div>`, { eg: "Les filles chantent. → <b>Elles</b> chantent." })}
${ex("Relie chaque sujet au verbe qui convient.", relier(["Le chat", "Les chiens", "Vous", "Tu"], ["courez", "miaule", "aboient", "danses"], 30))}
${lvl(2)}
${ex("Ce texte contient <b>2 erreurs</b> d'accord. Entoure-les, puis écris les verbes corrigés.", `<div class="text"><p style="text-indent:0">Les élèves de la classe prépare un spectacle. Leïla et Noé chante une chanson. Le maître les aide et la directrice les regarde. Dans la salle attendent les parents.</p></div>
<div>Verbes corrigés : ${blank(45)} &nbsp; ${blank(45)}</div>`)}
${ex("Lis le texte, puis réponds.", `<div class="text"><p>Ce matin-là, la ferme était calme. Soudain, les poules se mirent à crier. Le fermier courut jusqu'au poulailler. La porte était ouverte et des plumes traînaient dans l'herbe. Au loin, une queue rousse disparaissait derrière la haie.</p></div>
<div>a. Qui courut jusqu'au poulailler ? ${blank(70)}</div>
<div class="mt">b. Quel animal est sans doute venu ? Écris deux indices du texte.</div>${lines(1)}`)}
${lvl(3)}
${ex("Attention, le sujet est placé <b>après</b> le verbe. Souligne-le. Puis complète la dernière phrase.", `
  <div>a. Dans la mare nagent des canards. &nbsp;&nbsp; b. « Où vas-tu ? » demande la maîtresse.</div>
  <div class="mt">c. Au loin brillent les lumières du village.</div>
  <div class="mt">d. Sur la branche <span class="mut">(chanter, présent)</span> ${blank(30)} deux petits oiseaux.</div>`)}
`,
    corrige: `<p><b>1</b> Sujets : a. Le facteur b. Mes cousins c. nous d. Lou et sa sœur. Verbes : apporte, arrivent, prenons, dessinent.</p>
<p><b>2</b> a. Il b. Nous c. Vous d. Ils</p>
<p><b>3</b> Le chat miaule ; Les chiens aboient ; Vous courez ; Tu danses.</p>
<p><b>4</b> prépare → préparent ; chante → chantent. (« les aide », « les regarde » et « attendent les parents » sont justes.)</p>
<p><b>5</b> a. Le fermier. b. Un renard : la queue rousse, les plumes dans l'herbe, les poules qui crient, la porte ouverte.</p>
<p><b>6</b> a. des canards b. la maîtresse c. les lumières du village d. chantent</p>`,
  },
  // ---------------------------------------------------------------- 10
  {
    n: 10, disc: "ma", domaine: "Nombres", titre: "Comparer, ranger, encadrer jusqu'à 999 999", titreCourt: "Comparer, ranger, encadrer",
    exos: () => `
${lvl(1)}
${ex("Écris le signe <b>&lt;</b>, <b>&gt;</b> ou <b>=</b>.", `<div class="col3">
  <div>a. 9 870 ${blank(8)} 10 200</div><div>b. 45 670 ${blank(8)} 45 076</div><div>c. 300 000 ${blank(8)} 299 999</div>
  <div>d. 81 005 ${blank(8)} 81 050</div><div>e. 120 000 ${blank(8)} 12 000</div><div>f. 70 007 ${blank(8)} 70 007</div></div>`)}
${ex("Range ces nombres du plus petit au plus grand.", `<div class="chips mb" style="font-family:Lexend"><span>52 300</span><span>25 300</span><span>53 200</span><span>5 320</span><span>532 000</span></div>
<div>${blank(26)} &lt; ${blank(26)} &lt; ${blank(26)} &lt; ${blank(26)} &lt; ${blank(26)}</div>`)}
${ex("Encadre chaque nombre.", `
  <div>a. au millier près : ${blank(24)} &lt; 47 650 &lt; ${blank(24)}</div>
  <div class="mt">b. au millier près : ${blank(24)} &lt; 309 120 &lt; ${blank(24)}</div>
  <div class="mt">c. à la dizaine de mille près : ${blank(24)} &lt; 86 400 &lt; ${blank(24)}</div>`)}
${lvl(2)}
${ex("Écris les nombres qui correspondent aux lettres A, B, C. Puis place 63 000 et 69 500 avec une flèche.", `<div class="fig">${numberLine({ a: 60000, b: 70000, step: 1000, width: 176, labels: { 60000: "60 000", 70000: "70 000" }, marks: { 61000: "A", 65000: "B", 68000: "C" }, height: 20 })}</div>
<div>A = ${blank(26)} &nbsp;&nbsp; B = ${blank(26)} &nbsp;&nbsp; C = ${blank(26)}</div>`)}
${ex("Vrai ou faux ?", vf(["a. 100 000 s'écrit avec six chiffres.", "b. 98 999 + 1 = 100 000", "c. Dans 405 260, le chiffre des centaines de mille est 4.", "d. 45 382 est plus proche de 46 000 que de 45 000."], { cols: 2 }))}
${lvl(3)}
<div class="row" style="gap:6mm">
<div>${ex("Qui suis-je ?", `<div class="sm">Je suis compris entre 340 000 et 350 000. Mon chiffre des unités de mille est 7. Mon chiffre des centaines est le même. Mes deux derniers chiffres sont des 0.</div><div class="mt">Je suis ${blank(32)}</div>`)}</div>
<div>${ex("Range les parcs du <b>plus visité</b> au <b>moins visité</b>.", `${table(["Parc", "Visiteurs en un an"], [["A", "254 300"], ["B", "245 030"], ["C", "254 030"], ["D", "425 300"]])}<div class="mt">${blank(12)} → ${blank(12)} → ${blank(12)} → ${blank(12)}</div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> a. &lt; b. &gt; c. &gt; d. &lt; e. &gt; f. =</p>
<p><b>2</b> 5 320 &lt; 25 300 &lt; 52 300 &lt; 53 200 &lt; 532 000</p>
<p><b>3</b> a. 47 000 &lt; 47 650 &lt; 48 000 b. 309 000 &lt; 309 120 &lt; 310 000 c. 80 000 &lt; 86 400 &lt; 90 000</p>
<p><b>4</b> A = 61 000 ; B = 65 000 ; C = 68 000 ; 63 000 sur le 3<sup>e</sup> trait ; 69 500 au milieu entre 69 000 et 70 000.</p>
<p><b>5</b> a. V b. F (99 000) c. V d. F (plus proche de 45 000)</p>
<p><b>6</b> 347 700</p>
<p><b>7</b> D (425 300) → A (254 300) → C (254 030) → B (245 030)</p>`,
  },
];
