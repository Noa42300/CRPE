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
    lecon: `
<h1 class="lt">Le verbe<small>infinitif · trois groupes · radical et terminaison</small></h1>
${box("À retenir", `<p>Le <b>verbe</b> dit ce que fait le sujet (une action) ou comment il est (un état).</p>
<p>Le verbe <b>se conjugue</b> : il change selon la <b>personne</b> (je, tu, il…) et selon le <b>temps</b> (passé, présent, futur).</p>
<p>Quand il n'est pas conjugué, il est à l'<b>infinitif</b> : c'est ainsi qu'on le trouve dans le dictionnaire.</p>`)}
${st("Comment trouver le verbe ?")}
${exs(["Je change le temps de la phrase : le mot qui change est le verbe.<br><i>Aujourd'hui, je <b>joue</b>. → Hier, je <b>jouais</b>. → Demain, je <b>jouerai</b>.</i>",
  "Je l'encadre avec <b>ne… pas</b> : <i>Je <b>ne</b> joue <b>pas</b>.</i>"])}
${st("Comment trouver l'infinitif ?")}
<p style="margin:0 0 1mm">Je dis <b>« il faut… »</b> devant le verbe : <i>nous finissons</i> → il faut <b>finir</b> ; <i>ils prennent</i> → il faut <b>prendre</b>.</p>
${st("Les trois groupes")}
${table(["1<sup>er</sup> groupe", "2<sup>e</sup> groupe", "3<sup>e</sup> groupe"], [
  ["infinitif en <b>-er</b>", "infinitif en <b>-ir</b><br>et <b>nous …issons</b>", "<b>tous les autres</b> verbes"],
  ["chant<b>er</b>, jou<b>er</b>, mang<b>er</b>", "fin<b>ir</b> → nous fin<b>issons</b><br>grand<b>ir</b> → nous grand<b>issons</b>", "aller, venir, faire, prendre,<br>voir, pouvoir, courir, partir…"],
])}
${box("Attention !", `<p><b>aller</b> finit par <b>-er</b>, mais il est du <b>3<sup>e</sup> groupe</b>.</p><p><b>courir</b> → nous cour<b>ons</b> (pas « courissons ») : il est du <b>3<sup>e</sup> groupe</b>.</p>`, { warn: true, tint: false })}
${st("Radical et terminaison")}
<div class="row" style="align-items:center">
<div>
<svg width="80mm" height="25mm" viewBox="0 0 80 25">
  <text x="2" y="12" font-family="Andika" font-size="8">nous</text>
  <rect x="23" y="4" width="21" height="11" rx="1.5" fill="#fff" stroke="#222" stroke-width=".4"/><text x="33" y="12" font-family="Andika" font-size="8" text-anchor="middle">chant</text>
  <rect x="44" y="4" width="14" height="11" rx="1.5" fill="var(--soft)" stroke="var(--c)" stroke-width=".5"/><text x="51" y="12" font-family="Andika" font-size="8" font-weight="700" text-anchor="middle">ons</text>
  <text x="33" y="22" font-family="Lexend" font-size="3.6" text-anchor="middle">radical</text>
  <text x="51" y="22" font-family="Lexend" font-size="3.6" text-anchor="middle" fill="var(--c)">terminaison</text>
</svg></div>
<div>${exs(["Le <b>radical</b> porte le sens du verbe. Il change peu.", "La <b>terminaison</b> change selon la personne et le temps."])}</div>
</div>
<p class="sm" style="margin:0">chant|<b>er</b> &nbsp; je chant|<b>e</b> &nbsp; vous chant|<b>ez</b> &nbsp; — &nbsp; fin|<b>ir</b> &nbsp; je fin|<b>is</b> &nbsp; nous finiss|<b>ons</b></p>
`,
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
    lecon: `
<h1 class="lt">Addition et soustraction<small>calcul mental · calcul en ligne · calcul posé</small></h1>
${box("À retenir", `<p>Le résultat d'une <b>addition</b> s'appelle la <b>somme</b>. Le résultat d'une <b>soustraction</b> s'appelle la <b>différence</b>.</p>
<p>Avant de poser une opération, je cherche si je peux la calculer <b>dans ma tête</b> ou <b>en ligne</b>.</p>`)}
${st("Des astuces de calcul")}
${table(["Je veux calculer…", "Je pense…", "Résultat"], [
  ["456 + 99", "456 + 100 − 1", "555"],
  ["732 − 198", "732 − 200 + 2", "534"],
  ["640 + ? = 1 000", "640 + 60 = 700, puis 700 + 300 = 1 000", "360"],
], { widths: ["28%", "52%", "20%"] })}
${st("Poser une addition, puis une soustraction")}
<div class="row" style="align-items:flex-start;gap:6mm">
  <div style="flex:0 0 auto">${posed(["3487", "2659"], { sign: "+", result: "6146", carry: "111 " })}</div>
  <div class="sm">${exs(["J'aligne les <b>unités sous les unités</b>, les dizaines sous les dizaines…", "Je commence <b>par la droite</b> : 7 + 9 = 16. J'écris 6 et je retiens <b>1</b> dizaine.", "Je n'oublie pas d'ajouter les retenues."])}</div>
</div>
<div class="row" style="align-items:flex-start;gap:6mm;margin-top:2mm">
  <div style="flex:0 0 auto">
  <table style="border-collapse:collapse;font-family:Lexend;font-size:15pt">
    <tr>${["", "5", sub(1) + "3", sub(1) + "0", sub(1) + "2"].map((c) => `<td style="width:9mm;height:8mm;text-align:center">${c}</td>`).join("")}</tr>
    <tr>${["−", "1" + sb("+1"), "7" + sb("+1"), "6" + sb("+1"), "8"].map((c) => `<td style="width:9mm;height:8mm;text-align:center;border-bottom:.45mm solid #222">${c}</td>`).join("")}</tr>
    <tr>${["", "3", "5", "3", "4"].map((c) => `<td style="width:9mm;height:8mm;text-align:center">${c}</td>`).join("")}</tr>
  </table></div>
  <div class="sm">${exs(["Unités : 2 − 8, c'est impossible. Je fais <b>12 − 8 = 4</b> (j'ajoute 10 en haut)…", "… et j'ajoute <b>1</b> au chiffre des dizaines <b>du bas</b> : 6 + 1 = 7.", "Dizaines : 10 − 7 = 3, et je recommence de la même façon."])}</div>
</div>
${box("Je vérifie toujours", `<p><b>L'ordre de grandeur</b> : 3 487 + 2 659, c'est environ 3 500 + 2 700 = 6 200. Mon résultat 6 146 est proche : il est plausible.</p>
<p><b>La soustraction se vérifie par une addition</b> : 3 534 + 1 768 = 5 302. ✓</p>`, { warn: true, tint: false })}
<p class="hint" style="margin:1mm 0 0">Si tu as appris une autre méthode de soustraction en classe, tu peux la garder.</p>
`,
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
    lecon: `
<h1 class="lt">Les classes de mots<small>nom · déterminant · adjectif · verbe · pronom</small></h1>
${box("À retenir", `<p>Chaque mot d'une phrase appartient à une <b>classe</b> (on dit aussi sa <b>nature</b>).</p>
<p>Connaître la classe d'un mot aide à bien l'<b>écrire</b> : on n'accorde pas un nom comme on conjugue un verbe !</p>`)}
${table(["Classe", "À quoi sert-elle ?", "Exemples"], [
  [{ v: "<b>nom commun</b>", cls: "l" }, { v: "désigne une personne, un animal, une chose, une idée", cls: "l" }, { v: "un garçon, la forêt, la peur", cls: "l" }],
  [{ v: "<b>nom propre</b>", cls: "l" }, { v: "désigne un nom précis ; il a une <b>majuscule</b>", cls: "l" }, { v: "Lina, Paris, la Loire", cls: "l" }],
  [{ v: "<b>déterminant</b>", cls: "l" }, { v: "se place <b>devant le nom</b> ; il montre son genre et son nombre", cls: "l" }, { v: "le, la, les, un, une, des, mon, ta, ses, ce, cette, ces", cls: "l" }],
  [{ v: "<b>adjectif</b>", cls: "l" }, { v: "précise <b>comment est</b> le nom", cls: "l" }, { v: "un chat <i>noir</i>, une <i>grande</i> maison", cls: "l" }],
  [{ v: "<b>verbe</b>", cls: "l" }, { v: "dit ce que fait le sujet ; il <b>se conjugue</b>", cls: "l" }, { v: "il court, nous chantons", cls: "l" }],
  [{ v: "<b>pronom personnel</b>", cls: "l" }, { v: "<b>remplace</b> un nom ou un groupe nominal", cls: "l" }, { v: "je, tu, il, elle, nous, vous, ils, elles", cls: "l" }],
], { widths: ["24%", "44%", "32%"] })}
${st("Un exemple")}
<div style="display:flex;justify-content:center;gap:3mm;font-size:14pt;margin:1mm 0 1mm">
${[["Mon", "D"], ["petit", "A"], ["frère", "N"], ["dessine", "V"], ["un", "D"], ["dragon", "N"], ["vert.", "A"]].map(([w, t]) => `<div style="display:flex;flex-direction:column;align-items:center"><span>${w}</span><span style="font-family:Lexend;font-size:9.5pt;font-weight:600;color:var(--c);border-top:.4mm solid var(--c);padding:0 1.5mm">${t}</span></div>`).join("")}
</div>
<p class="sm c mut" style="margin:0 0 2mm">D = déterminant · N = nom · A = adjectif · V = verbe · P = pronom</p>
${st("Mes tests pour trouver la classe")}
${exs(["Je peux mettre <b>un, une, le, la</b> devant ? → c'est sans doute un <b>nom</b>.", "Je peux mettre <b>très</b> devant ? (très <i>petit</i>) → c'est sans doute un <b>adjectif</b>.", "Je peux changer le temps ou mettre <b>ne… pas</b> autour ? → c'est un <b>verbe</b>."])}
${box("Attention !", `<p>Un même mot peut changer de classe selon la phrase : <i>Il <b>marche</b> vite</i> (verbe) — <i>la <b>marche</b> est haute</i> (nom).</p>`, { warn: true, tint: false })}
`,
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
    lecon: `
<h1 class="lt">Résoudre des problèmes (1)<small>addition, soustraction et schémas en barres</small></h1>
${box("À retenir", `<p><b>1.</b> Je lis tout le problème <b>deux fois</b>. &nbsp;<b>2.</b> Je cherche <b>la question</b>. &nbsp;<b>3.</b> Je repère les <b>données utiles</b>.</p>
<p><b>4.</b> Je fais un <b>schéma</b>. &nbsp;<b>5.</b> Je <b>calcule</b>. &nbsp;<b>6.</b> Je réponds par une <b>phrase</b>.</p>`)}
${st("Le tout et les parties")}
<div class="row" style="align-items:center">
  <div style="flex:0 0 auto">${bars({ top: "le tout", parts: [{ label: "partie 1", w: 52 }, { label: "partie 2", w: 32, shade: true }] })}</div>
  <div class="sm">${exs(["Je connais <b>les deux parties</b> → j'<b>additionne</b>.", "Je connais <b>le tout</b> et <b>une partie</b> → je <b>soustrais</b>."])}</div>
</div>
${box("Exemple", `<p>Dans un car, il y a <b>52</b> places. <b>37</b> places sont occupées. Combien de places sont libres ?</p>
<div class="row" style="align-items:center"><div style="flex:0 0 auto">${bars({ top: "52 places", parts: [{ label: "37 occupées", w: 56 }, { label: "?", w: 24, shade: true }] })}</div>
<div><p>Je connais le tout et une partie : <b>52 − 37 = 15</b>.</p><p><i>Il y a 15 places libres.</i></p></div></div>`, { tint: false })}
${st("Comparer deux quantités")}
<div class="row" style="align-items:center">
<div style="flex:0 0 auto">
<svg width="92mm" height="24mm" viewBox="0 0 92 24">
  <text x="0" y="6" font-family="Andika" font-size="3.8">Léa</text>
  <rect x="12" y="1" width="46" height="7.5" fill="#fff" stroke="#222" stroke-width=".35"/><text x="35" y="6.3" font-family="Andika" font-size="3.6" text-anchor="middle">345</text>
  <text x="0" y="17" font-family="Andika" font-size="3.8">Tom</text>
  <rect x="12" y="12" width="46" height="7.5" fill="#fff" stroke="#222" stroke-width=".35"/><text x="35" y="17.3" font-family="Andika" font-size="3.6" text-anchor="middle">345</text>
  <rect x="58" y="12" width="24" height="7.5" fill="var(--soft)" stroke="#222" stroke-width=".35"/><text x="70" y="17.3" font-family="Andika" font-size="3.4" text-anchor="middle">120 de plus</text>
</svg></div>
<div class="sm"><p style="margin:0 0 1mm">Léa a 345 billes. Tom en a <b>120 de plus</b> que Léa.</p><p style="margin:0">Tom a donc 345 + 120 = <b>465</b> billes. L'<b>écart</b> entre eux est 120.</p></div>
</div>
${box("Attention !", `<p>« De plus » ne veut pas toujours dire « + ». <i>Tom a 120 billes. Il en a <b>30 de plus</b> que Léa.</i> C'est Léa qui en a <b>moins</b> : 120 − 30 = 90.</p><p>Le schéma m'évite ce piège.</p>`, { warn: true, tint: false })}
`,
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
