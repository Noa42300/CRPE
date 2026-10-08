import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, posed, bars, emptyRow } from "../lib.mjs";

// Mot + case pour écrire une étiquette dessous (exercice « D N A V P »).
const tagWords = (label, words) =>
  `<div style="display:flex;flex-wrap:wrap;gap:1mm 2.5mm;align-items:flex-start"><span style="margin-right:1mm">${label}</span>${words
    .map((w) => `<div style="display:flex;flex-direction:column;align-items:center"><span>${w}</span><span style="display:inline-block;width:7mm;height:6mm;border:0.3mm solid #8f97a3;border-radius:1mm;margin-top:0.5mm"></span></div>`)
    .join("")}</div>`;

const sub = (t) => `<sup style="font-size:8pt;color:var(--c);font-weight:700">${t}</sup>`;
const sb = (t) => `<sub style="font-size:8pt;color:var(--c);font-weight:700">${t}</sub>`;

export default [
  // ---------------------------------------------------------------- 03
  {
    n: 3, disc: "fr", domaine: "Conjugaison", titre: "Le verbe : infinitif, groupes, radical et terminaison", titreCourt: "Le verbe : infinitif et groupes",
    exos: () => `
${lvl(1)}
${ex("Souligne le verbe conjugué dans chaque phrase.", `<div class="col2">
  <div>a. Les oiseaux construisent un nid.</div><div>b. Demain, nous visiterons le musée.</div>
  <div>c. Mon cousin habite à Lyon.</div><div>d. Vous parlez trop fort !</div></div>`)}
${ex("Relie chaque verbe conjugué à son infinitif.", `<div class="row"><div>${relier(["ils prennent", "nous faisons", "tu vas"], ["aller", "faire", "prendre"], 22)}</div><div>${relier(["elle peut", "je finis", "vous dites"], ["dire", "pouvoir", "finir"], 22)}</div></div>`)}
${ex("Sépare le radical et la terminaison par un trait.", `<div class="col3" style="font-size:13pt"><div>jouer</div><div>parlons</div><div>dessinez</div><div>grandir</div><div>il mange</div><div>tu sautes</div></div>`, { eg: "chant|er &nbsp;&nbsp; nous chant|ons" })}
${lvl(2)}
${ex("Classe ces verbes selon leur groupe.", `<div class="chips mb"><span>sauter</span><span>choisir</span><span>venir</span><span>aller</span><span>réussir</span><span>courir</span><span>crier</span><span>partir</span></div>
${table(["1<sup>er</sup> groupe", "2<sup>e</sup> groupe", "3<sup>e</sup> groupe"], [emptyRow(3, 17)])}
<div class="hint">Aide : pour un verbe en -ir, essaie « nous …issons ».</div>`)}
${ex("Entoure l'intrus dans chaque liste. Puis explique ton choix pour la liste b.", `
  <div>a. chanter – danser – aller – jouer</div>
  <div>b. finir – rougir – courir – grandir</div>
  <div>c. il mange – la mangeoire – nous mangeons – tu manges</div>
  <div class="mt">Liste b : ${blank(140)}</div>`)}
${lvl(3)}
${ex("Le même mot peut être un nom ou un verbe. Souligne le mot en gras <b>seulement</b> quand c'est un verbe.", `<div class="col2">
  <div>a. Je <b>porte</b> un gros sac.</div><div>b. Ferme la <b>porte</b>, s'il te plaît.</div>
  <div>c. La <b>marche</b> est très haute.</div><div>d. Le bébé <b>marche</b> déjà.</div>
  <div>e. Les élèves sont en <b>rang</b>.</div><div>f. Lucas <b>range</b> sa chambre.</div></div>
  <div class="hint">Aide : essaie de mettre « ne… pas » autour du mot.</div>`)}
${ex("Écris deux phrases avec le verbe <b>glisser</b> : une avec « je », une avec « nous ».", lines(2))}
`,
    corrige: `<p><b>1</b> a. construisent b. visiterons c. habite d. parlez</p>
<p><b>2</b> ils prennent → prendre ; nous faisons → faire ; tu vas → aller ; elle peut → pouvoir ; je finis → finir ; vous dites → dire.</p>
<p><b>3</b> jou|er, parl|ons, dessin|ez, grand|ir, mang|e, saut|es.</p>
<p><b>4</b> 1<sup>er</sup> : sauter, crier. 2<sup>e</sup> : choisir, réussir. 3<sup>e</sup> : venir, aller, courir, partir.</p>
<p><b>5</b> a. aller (3<sup>e</sup> groupe) b. courir : c'est un verbe du 3<sup>e</sup> groupe (nous courons), les autres sont du 2<sup>e</sup> (nous finissons, rougissons, grandissons). c. la mangeoire (c'est un nom).</p>
<p><b>6</b> Verbes : a. porte, d. marche, f. range. (b, c, e : noms.)</p>
<p><b>7</b> Ex. : Je glisse sur la glace. Nous glissons sur le toboggan.</p>`,
  },
  // ---------------------------------------------------------------- 04
  {
    n: 4, disc: "ma", domaine: "Calcul", titre: "Addition et soustraction", titreCourt: "Addition et soustraction",
    exos: () => `
${lvl(1)}
${ex("Calcule dans ta tête. Écris seulement le résultat.", `<div class="col2">
  <div>a. 70 + ${blank(14)} = 100</div><div>b. 350 + ${blank(14)} = 1 000</div>
  <div>c. 820 + ${blank(14)} = 1 000</div><div>d. 4 600 + ${blank(14)} = 10 000</div></div>`)}
${ex("Calcule en ligne avec une astuce.", `<div class="col2">
  <div>a. 458 + 99 = ${blank(22)}</div><div>b. 1 250 + 199 = ${blank(22)}</div>
  <div>c. 736 − 99 = ${blank(22)}</div><div>d. 2 400 − 198 = ${blank(22)}</div></div>`, { eg: "345 + 99 = 345 + 100 − 1 = 444" })}
${ex("Pose et calcule.", `<div style="display:flex;justify-content:space-around">
  ${posed(["4586", "3727"], { sign: "+", carry: " ", cols: 6, size: 14 })}
  ${posed(["7040", "2386"], { sign: "−", carry: " ", cols: 6, size: 14 })}
  ${posed(["25609", "8794"], { sign: "+", carry: " ", cols: 6, size: 14 })}</div>`)}
${lvl(2)}
${ex("Léo a fait une erreur. Explique-la, puis écris le bon résultat.", `<div style="display:flex;gap:8mm;align-items:center">
  <div style="flex:0 0 auto">${posed(["6405", "2718"], { sign: "−", result: "4313", size: 13 })}</div>
  <div style="flex:1">Son erreur : ${lines(2)}<div class="mt">Le bon résultat : ${blank(30)}</div></div></div>`)}
${ex("Sans poser l'opération, coche le résultat le plus proche.", qcm([
  ["a. 3 980 + 2 030 ≈", ["5 000", "6 000", "7 000"]],
  ["b. 9 120 − 4 950 ≈", ["3 000", "4 000", "5 000"]],
  ["c. 49 800 + 20 300 ≈", ["60 000", "70 000", "80 000"]],
]))}
${lvl(3)}
<div class="row" style="gap:5mm">
<div>${ex("Chaque brique est la somme des deux briques en dessous. Complète.", `
<svg width="84mm" height="34mm" viewBox="0 0 84 34" style="margin-top:1mm">
  <g stroke="#222" stroke-width=".35" fill="#fff" font-family="Lexend" font-size="4.2" text-anchor="middle">
    <rect x="28" y="1" width="28" height="10"/>
    <rect x="14" y="11" width="28" height="10"/><rect x="42" y="11" width="28" height="10"/>
    <rect x="0" y="21" width="28" height="10"/><rect x="28" y="21" width="28" height="10"/><rect x="56" y="21" width="28" height="10"/>
  </g>
  <g font-family="Lexend" font-size="4.4" text-anchor="middle">
    <text x="56" y="17.6">4 000</text><text x="14" y="27.6">1 250</text><text x="42" y="27.6">2 375</text>
  </g>
</svg>`)}</div>
<div>${ex("Trouve les chiffres cachés.", `<div style="display:flex;justify-content:center">${posed(["3647", "2□78"], { sign: "+", result: "61□□", size: 14 })}</div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> a. 30 b. 650 c. 180 d. 5 400</p>
<p><b>2</b> a. 557 b. 1 449 c. 637 d. 2 202</p>
<p><b>3</b> 8 313 ; 4 654 ; 34 403</p>
<p><b>4</b> Léo a enlevé le petit chiffre du grand dans chaque colonne (8 − 5, 1 − 0, 7 − 4) au lieu de faire 15 − 8, etc. avec les retenues. Bon résultat : 3 687 (vérif. 3 687 + 2 718 = 6 405).</p>
<p><b>5</b> a. 6 000 b. 4 000 c. 70 000</p>
<p><b>6</b> brique manquante en bas : 4 000 − 2 375 = 1 625 ; au milieu : 1 250 + 2 375 = 3 625 ; en haut : 3 625 + 4 000 = 7 625.</p>
<p><b>7</b> 3 647 + 2 <b>4</b>78 = 6 1<b>25</b> (unités 7 + 8 = 15 ; dizaines 4 + 7 + 1 = 12 ; centaines 6 + ? + 1 doit donner 11 → 4).</p>`,
  },
  // ---------------------------------------------------------------- 05
  {
    n: 5, disc: "fr", domaine: "Grammaire", titre: "Les classes de mots", titreCourt: "Les classes de mots",
    exos: () => `
${lvl(1)}
${ex("Classe ces mots dans le tableau.", `<div class="chips mb"><span>forêt</span><span>chantons</span><span>rapide</span><span>ces</span><span>elles</span><span>Lucas</span><span>brillante</span><span>une</span><span>nous</span><span>grandit</span></div>
${table(["noms", "déterminants", "adjectifs", "verbes", "pronoms"], [emptyRow(5, 13)])}`)}
${ex("Écris la bonne lettre sous chaque mot : <b>D</b>, <b>N</b>, <b>A</b>, <b>V</b> ou <b>P</b>.", `
  <div class="mb">${tagWords("a.", ["La", "petite", "souris", "grignote", "un", "fromage."])}</div>
  <div class="mb">${tagWords("b.", ["Nous", "adorons", "les", "longues", "histoires."])}</div>
  <div>${tagWords("c.", ["Ce", "vieux", "pirate", "cache", "son", "trésor."])}</div>`)}
${ex("Entoure l'intrus : le mot qui n'est pas de la même classe que les autres.", `<div class="col2">
  <div>a. table – maison – joli – vélo</div><div>b. mes – cette – des – il</div>
  <div>c. courir – sautent – grand – mangeons</div><div>d. froid – gentille – rouge – soleil</div></div>`)}
${lvl(2)}
${ex("Quelle est la classe du mot en gras ? Coche.", qcm([
  ["a. Le bébé <b>marche</b> déjà.", ["nom", "verbe"]],
  ["b. Cette <b>marche</b> est glissante.", ["nom", "verbe"]],
  ["c. Il <b>ferme</b> la fenêtre.", ["nom", "verbe"]],
  ["d. Les vaches vivent à la <b>ferme</b>.", ["nom", "verbe"]],
], { gap: 6 }))}
${ex("Complète avec un mot de la classe demandée.", `
  <div>a. Le chat ${blank(28)} sur le mur. <span class="mut">(verbe)</span></div>
  <div class="mt">b. J'ai acheté une robe ${blank(28)}. <span class="mut">(adjectif)</span></div>
  <div class="mt">c. ${blank(20)} enfants jouent au ballon. <span class="mut">(déterminant)</span></div>
  <div class="mt">d. ${blank(20)} partirons en vacances demain. <span class="mut">(pronom)</span></div>`)}
${lvl(3)}
${ex("Écris une phrase qui contient exactement <b>2 déterminants</b>, <b>2 noms</b>, <b>1 adjectif</b> et <b>1 verbe</b>. Écris D, N, A, V sous les mots.", lines(2, 10))}
`,
    corrige: `<p><b>1</b> noms : forêt, Lucas · déterminants : ces, une · adjectifs : rapide, brillante · verbes : chantons, grandit · pronoms : elles, nous.</p>
<p><b>2</b> a. D A N V D N b. P V D A N c. D A N V D N</p>
<p><b>3</b> a. joli (adjectif) b. il (pronom) c. grand (adjectif) d. soleil (nom)</p>
<p><b>4</b> a. verbe b. nom c. verbe d. nom</p>
<p><b>5</b> Ex. : a. dort / saute b. rouge / longue c. Les / Des / Ces / Mes d. Nous (seule réponse).</p>
<p><b>6</b> Ex. : Le chien noir mange un os. (D A N V D N) — accepter tout ordre correct.</p>`,
  },
  // ---------------------------------------------------------------- 06
  {
    n: 6, disc: "ma", domaine: "Problèmes", titre: "Résoudre des problèmes (1) : addition et soustraction", titreCourt: "Problèmes (1) : + et −",
    exos: () => `
${lvl(1)}
${ex("Une bibliothèque a <b>2 450</b> livres. Elle en achète <b>380</b>. Combien de livres a-t-elle maintenant ?<br><span style='font-weight:400'>Coche le bon schéma, puis calcule.</span>", `<div style="display:flex;gap:10mm;align-items:center;margin-bottom:1mm">
  <div>${cb()} <b>A</b> ${bars({ top: "?", parts: [{ label: "2 450", w: 48 }, { label: "380", w: 16, shade: true }] })}</div>
  <div>${cb()} <b>B</b> ${bars({ top: "2 450", parts: [{ label: "380", w: 16, shade: true }, { label: "?", w: 48 }] })}</div></div>
  <div>Calcul : ${blank(60)} &nbsp; Réponse : ${blank(62)}</div>`)}
${ex("Dans un train, à la première gare, <b>125</b> personnes montent. Il y a maintenant <b>610</b> voyageurs. Combien de voyageurs y avait-il au départ ?", work(11))}
${ex("Le mont Blanc mesure <b>4 806 m</b>. Le Kilimandjaro mesure <b>5 895 m</b>. Quelle est la différence de hauteur entre ces deux montagnes ?", work(11))}
${lvl(2)}
${ex("Barre l'information inutile, puis résous le problème.", `<div class="text" style="border-left-color:#d0d5dc"><p style="text-indent:0">Un fermier a 386 poules et 24 vaches. Il vend 95 poules au marché. Combien de poules lui reste-t-il ?</p></div>${work(11)}`)}
${ex("Invente une question pour ce problème, puis réponds-y.", `<div class="text" style="border-left-color:#d0d5dc"><p style="text-indent:0">Lina a 1 200 cartes. Elle en donne 350 à son frère.</p></div>
<div>Ma question : ${blank(145)}</div><div class="mt">Calcul et réponse : ${blank(132)}</div>`)}
${lvl(3)}
<div class="row" style="gap:6mm">
<div style="flex:1.5">${ex("Un magasin reçoit <b>2 500</b> bouteilles. Lundi, il en vend <b>875</b>. Mardi, il en vend <b>640 de plus</b> que lundi. Combien de bouteilles reste-t-il mardi soir ?", work(18, false) + `<div>Réponse : ${blank(85)}</div>`)}</div>
<div style="flex:1">${ex("Trouve deux nombres : leur somme est <b>1 000</b> et leur différence est <b>200</b>.", `<div style="height:12mm"></div><div>${blank(18)} et ${blank(18)}</div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> Schéma A. 2 450 + 380 = 2 830. Elle a 2 830 livres.</p>
<p><b>2</b> On cherche le début : 610 − 125 = 485. Il y avait 485 voyageurs au départ.</p>
<p><b>3</b> 5 895 − 4 806 = 1 089. Le Kilimandjaro est plus haut de 1 089 m.</p>
<p><b>4</b> Inutile : « 24 vaches ». 386 − 95 = 291. Il lui reste 291 poules.</p>
<p><b>5</b> Ex. : Combien de cartes lui reste-t-il ? 1 200 − 350 = 850. (Accepter toute question cohérente.)</p>
<p><b>6</b> Mardi : 875 + 640 = 1 515. Vendu en tout : 875 + 1 515 = 2 390. Reste : 2 500 − 2 390 = 110 bouteilles.</p>
<p><b>7</b> 600 et 400 (600 + 400 = 1 000 ; 600 − 400 = 200).</p>`,
  },
];
