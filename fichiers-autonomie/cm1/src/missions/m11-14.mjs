import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, posed, emptyRow } from "../lib.mjs";

// Tableau de conjugaison « formes entières » : rows = [pronom, forme]
const conjFull = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const irr = (t) => `<span class="tm">${t}</span>`;

const seg = (len, label) =>
  `<div style="display:flex;align-items:center;gap:3mm"><span style="width:12mm">${label}</span><svg width="${len + 4}mm" height="6mm" viewBox="-2 -3 ${len + 4} 6"><line x1="0" y1="0" x2="${len}" y2="0" stroke="#222" stroke-width=".45"/><line x1="0" y1="-2" x2="0" y2="2" stroke="#222" stroke-width=".45"/><line x1="${len}" y1="-2" x2="${len}" y2="2" stroke="#222" stroke-width=".45"/></svg></div>`;

export default [
  // ---------------------------------------------------------------- 11
  {
    n: 11, disc: "fr", domaine: "Conjugaison", titre: "Le présent de être, avoir, aller, faire, dire, prendre", titreCourt: "Présent : être, avoir, aller, faire, dire, prendre",
    exos: () => `
${lvl(1)}
${ex("Complète le tableau.", table(["", "avoir", "aller", "faire"], [
  ["je / j'", "ai", "", ""], ["tu", "", "vas", ""], ["il, elle", "", "", "fait"], ["nous", "avons", "", ""], ["vous", "", "", ""], ["ils, elles", "", "vont", ""],
], { widths: ["22%", "26%", "26%", "26%"] }))}
${ex("Coche la forme correcte.", `<div class="col3">${qcm([["a. vous", ["faisez", "faites"]], ["b. ils", ["font", "faisent"]]])}${qcm([["c. vous", ["dites", "disez"]], ["d. ils", ["prenent", "prennent"]]])}${qcm([["e. nous", ["sommes", "somme"]], ["f. il", ["prend", "prent"]]])}</div>`)}
${ex("Relie chaque sujet à la bonne forme.", relier(["Je", "Elles", "Vous", "Tu", "Nous"], ["allons", "êtes", "as", "suis", "ont"], 30))}
${lvl(2)}
${ex("Complète avec <b>sont</b> (verbe être) ou <b>ont</b> (verbe avoir).", `<div class="col2">
  <div>a. Les élèves ${blank(16)} contents.</div><div>b. Les élèves ${blank(16)} un cahier rouge.</div>
  <div>c. Elles ${blank(16)} dans le jardin.</div><div>d. Ils ${blank(16)} très faim.</div></div>`)}
${ex("Change le sujet et réécris la phrase.", `
  <div>a. Je dis la vérité. → Vous ${blank(70)}</div>
  <div class="mt">b. Tu prends le train. → Ils ${blank(70)}</div>
  <div class="mt">c. Il va à la piscine. → Nous ${blank(70)}</div>
  <div class="mt">d. Je suis prêt. → Nous ${blank(70)}</div>`, { eg: "Je fais mes devoirs. → Vous <b>faites</b> vos devoirs." })}
${lvl(3)}
${ex("Raconte ton mercredi en 3 phrases au présent. Utilise au moins <b>trois</b> verbes de la leçon et souligne-les.", lines(3))}
`,
    corrige: `<p><b>1</b> avoir : ai, as, a, avons, avez, ont · aller : vais, vas, va, allons, allez, vont · faire : fais, fais, fait, faisons, faites, font.</p>
<p><b>2</b> a. faites b. font c. dites d. prennent e. sommes f. prend</p>
<p><b>3</b> Je suis ; Elles ont ; Vous êtes ; Tu as ; Nous allons.</p>
<p><b>4</b> a. sont b. ont c. sont d. ont</p>
<p><b>5</b> a. Vous dites la vérité. b. Ils prennent le train. c. Nous allons à la piscine. d. Nous sommes prêts.</p>
<p><b>6</b> Production libre : vérifier les formes des verbes soulignés.</p>`,
  },
  // ---------------------------------------------------------------- 12
  {
    n: 12, disc: "ma", domaine: "Calcul", titre: "La multiplication", titreCourt: "La multiplication",
    exos: () => `
${lvl(1)}
${ex("Calcule le plus vite possible.", `<div class="col4">
  <div>7 × 8 = ${blank(12)}</div><div>6 × 9 = ${blank(12)}</div><div>8 × 4 = ${blank(12)}</div><div>9 × 7 = ${blank(12)}</div>
  <div>6 × 7 = ${blank(12)}</div><div>8 × 8 = ${blank(12)}</div><div>9 × 9 = ${blank(12)}</div><div>7 × 4 = ${blank(12)}</div></div>`)}
${ex("Calcule.", `<div class="col3">
  <div>a. 45 × 10 = ${blank(18)}</div><div>b. 45 × 100 = ${blank(18)}</div><div>c. 306 × 10 = ${blank(18)}</div>
  <div>d. 12 × 1 000 = ${blank(18)}</div><div>e. 30 × 7 = ${blank(18)}</div><div>f. 400 × 6 = ${blank(18)}</div></div>`)}
${ex("Décompose pour calculer.", `
  <div>a. 32 × 3 = (${blank(10)} × 3) + (${blank(8)} × 3) = ${blank(10)} + ${blank(10)} = ${blank(14)}</div>
  <div class="mt">b. 45 × 4 = (${blank(10)} × 4) + (${blank(8)} × 4) = ${blank(10)} + ${blank(10)} = ${blank(14)}</div>`, { eg: "23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92" })}
${ex("Pose et calcule.", `<div style="display:flex;justify-content:space-around;align-items:flex-start">
  ${posed(["538", "7"], { sign: "×", carry: " ", cols: 6, size: 14 })}
  ${posed(["1206", "8"], { sign: "×", carry: " ", cols: 6, size: 14 })}
  ${posed(["64", "23"], { sign: "×", carry: " ", cols: 6, size: 14, partials: 2 })}</div>`)}
${lvl(2)}
${ex("Sam a calculé 52 × 34. Son résultat est faux. Trouve son erreur, puis corrige.", `<div style="display:flex;gap:8mm;align-items:center">
  <div style="flex:0 0 auto">${posed(["52", "34"], { sign: "×", partials: 2, partialVals: ["208", "156"], result: "364", size: 13 })}</div>
  <div style="flex:1">Son erreur : ${lines(2)}<div class="mt">Le bon résultat : ${blank(30)}</div></div></div>`)}
${lvl(3)}
<div class="row" style="gap:6mm">
<div style="flex:2">${ex("Un cinéma a 24 rangées de 18 fauteuils. Ce soir, 375 fauteuils sont occupés. Combien de fauteuils sont libres ?", work(20))}</div>
<div style="flex:1">${ex("Trouve le chiffre caché.", `<div style="font-family:Lexend;font-size:14pt;line-height:2.2;white-space:nowrap">${blank(7)}7 × 6 = 282<br>3${blank(7)} × 4 = 136</div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> 56 ; 54 ; 32 ; 63 ; 42 ; 64 ; 81 ; 28</p>
<p><b>2</b> a. 450 b. 4 500 c. 3 060 d. 12 000 e. 210 f. 2 400</p>
<p><b>3</b> a. (30 × 3) + (2 × 3) = 90 + 6 = 96 b. (40 × 4) + (5 × 4) = 160 + 20 = 180</p>
<p><b>4</b> 538 × 7 = 3 766 ; 1 206 × 8 = 9 648 ; 64 × 23 = 192 + 1 280 = 1 472</p>
<p><b>5</b> Sam a oublié le 0 de la 2<sup>e</sup> ligne : 52 × 30 = 1 560 (et non 156). 208 + 1 560 = <b>1 768</b>.</p>
<p><b>6</b> 24 × 18 = 432 fauteuils ; 432 − 375 = 57 fauteuils libres.</p>
<p><b>7</b> 47 × 6 = 282 ; 34 × 4 = 136</p>`,
  },
  // ---------------------------------------------------------------- 13
  {
    n: 13, disc: "fr", domaine: "Vocabulaire", titre: "Le dictionnaire et le sens des mots", titreCourt: "Le dictionnaire et le sens des mots",
    exos: () => `
${lvl(1)}
${ex("Range ces mots dans l'ordre alphabétique.", `
  <div>a. tortue – lion – zèbre – girafe – aigle</div><div>→ ${blank(150)}</div>
  <div class="mt">b. parapluie – papillon – panier – parc – patin</div><div>→ ${blank(150)}</div>`)}
${ex("Les mots-repères d'une page sont <b>mouche</b> et <b>moulin</b>. Coche les mots qui sont sur cette page.", `<div class="chips">${["mouette", "moto", "mousse", "moufle", "mouiller", "mouton"].map((w) => `<span style="border:none">${cb()}${w}</span>`).join("")}</div>`)}
${ex("Lis cet article, puis réponds.", `<div style="border:.35mm solid #8f97a3;border-radius:2mm;padding:1.5mm 3mm;margin-bottom:1.5mm"><b style="font-family:Lexend">plume</b> <i>n. f.</i> <b>1.</b> Chacun des éléments qui couvrent le corps des oiseaux. <i>Le paon a de belles plumes.</i> <b>2.</b> Ancien outil pour écrire, que l'on trempait dans l'encre. <i>Autrefois, les élèves écrivaient à la plume.</i></div>
<div>a. De quelle classe est ce mot ? ${blank(40)} &nbsp; b. Combien de sens a-t-il ? ${blank(12)}</div>
<div class="mt">c. « Grand-père a retrouvé une vieille plume et un encrier. » Quel sens ? ${blank(12)}</div>`)}
${lvl(2)}
${ex("Relie chaque phrase au sens du mot <b>feuille</b>.", relier(["La feuille du chêne est tombée.", "Écris ton nom sur la feuille.", "Le pâtissier étale une feuille de pâte."], ["une couche fine et plate", "une partie d'une plante", "un morceau de papier"], 24))}
${ex("Le mot en gras est-il au sens <b>propre</b> (P) ou au sens <b>figuré</b> (F) ? Écris P ou F.", `<div class="col2">
  <div>a. Le lion a <b>dévoré</b> la gazelle. ${blank(8)}</div><div>b. Il pleut des <b>cordes</b>. ${blank(8)}</div>
  <div>c. La <b>corde</b> du puits est usée. ${blank(8)}</div><div>d. Mon frère a un <b>cœur</b> d'or. ${blank(8)}</div>
  <div>e. Le médecin écoute mon <b>cœur</b>. ${blank(8)}</div><div>f. Ce film m'a <b>glacé</b> le sang. ${blank(8)}</div></div>`)}
${lvl(3)}
${ex("Sans dictionnaire, explique le mot en gras. Puis recopie les mots du texte qui t'ont aidé.", `<div class="text"><p style="text-indent:0">Après trois heures de marche sous le soleil, les randonneurs étaient <b>exténués</b> : ils se sont assis sans dire un mot, incapables de faire un pas de plus.</p></div>
<div>exténués veut dire : ${blank(120)}</div><div class="mt">Les mots qui m'ont aidé : ${blank(108)}</div>`)}
`,
    corrige: `<p><b>1</b> a. aigle, girafe, lion, tortue, zèbre b. panier, papillon, parapluie, parc, patin</p>
<p><b>2</b> mouette, moufle, mouiller (moto est avant mouche ; mousse et mouton sont après moulin).</p>
<p><b>3</b> a. nom féminin b. 2 sens c. le sens 2</p>
<p><b>4</b> chêne → partie d'une plante ; nom → morceau de papier ; pâte → couche fine et plate.</p>
<p><b>5</b> a. P b. F c. P d. F e. P f. F</p>
<p><b>6</b> très fatigués, épuisés. Indices : « trois heures de marche », « sous le soleil », « sans dire un mot », « incapables de faire un pas de plus ».</p>`,
  },
  // ---------------------------------------------------------------- 14
  {
    n: 14, disc: "ma", domaine: "Grandeurs et mesures", titre: "Les longueurs et le périmètre", titreCourt: "Longueurs et périmètre",
    exos: () => `
${lvl(1)}
${ex("Coche l'unité qui convient.", qcm([
  ["a. La longueur d'un stylo : 14", ["mm", "cm", "m"]],
  ["b. La hauteur d'une porte : 2", ["cm", "m", "km"]],
  ["c. L'épaisseur d'un livre : 25", ["mm", "m", "km"]],
  ["d. La distance Paris – Lyon : 465", ["m", "km", "cm"]],
]))}
${ex("Convertis.", `<div class="col3">
  <div>a. 3 m = ${blank(16)} cm</div><div>b. 5 km = ${blank(16)} m</div><div>c. 70 mm = ${blank(14)} cm</div>
  <div>d. 2 m 35 cm = ${blank(14)} cm</div><div>e. 6 cm 4 mm = ${blank(14)} mm</div><div></div></div>
  <div class="mt">f. 4 500 m = ${blank(12)} km ${blank(14)} m</div>`)}
${ex("Mesure chaque segment avec ta règle. Écris sa longueur en mm.", `<div class="row" style="align-items:center"><div style="flex:2">${seg(47, "[AB]")}${seg(82, "[CD]")}${seg(25, "[EF]")}</div>
<div style="flex:1;line-height:2">AB = ${blank(14)} mm<br>CD = ${blank(14)} mm<br>EF = ${blank(14)} mm</div></div>`)}
${lvl(2)}
${ex("Range ces longueurs de la plus courte à la plus longue.", `<div class="chips mb"><span>1 km</span><span>950 m</span><span>1 200 m</span><span>1 km 50 m</span></div><div>${blank(30)} &lt; ${blank(30)} &lt; ${blank(30)} &lt; ${blank(30)}</div>`)}
${ex("Calcule le périmètre de chaque figure. <span style='font-weight:400' class='mut'>(Les dessins ne sont pas en taille réelle.)</span>", `<div style="display:flex;justify-content:space-between;align-items:flex-end">
<div class="c"><svg width="52mm" height="26mm" viewBox="0 0 52 26"><rect x="6" y="5" width="34" height="14" fill="var(--tint)" stroke="#222" stroke-width=".45"/><g font-family="Andika" font-size="3.6" text-anchor="middle"><text x="23" y="3.6">12 cm</text><text x="41" y="13" text-anchor="start">5 cm</text></g></svg>${blank(30)} cm</div>
<div class="c"><svg width="30mm" height="26mm" viewBox="0 0 30 26"><rect x="5" y="3" width="18" height="18" fill="var(--tint)" stroke="#222" stroke-width=".45"/><text x="14" y="25" font-family="Andika" font-size="3.6" text-anchor="middle">carré de 9 cm</text></svg>${blank(24)} cm</div>
<div class="c"><svg width="44mm" height="26mm" viewBox="0 0 44 26"><polygon points="6,22 34,22 34,1" fill="var(--tint)" stroke="#222" stroke-width=".45"/><g font-family="Andika" font-size="3.6" text-anchor="middle"><text x="20" y="25.5">8 cm</text><text x="38.5" y="13">6 cm</text><text x="15" y="10">10 cm</text></g></svg>${blank(30)} cm</div>
</div>`)}
${lvl(3)}
<div class="row" style="gap:6mm">
<div style="flex:1.5">${ex("M. Martin veut clôturer son jardin rectangulaire de 25 m de long et 14 m de large. Il laisse un portail de 3 m sans grillage. Combien de mètres de grillage doit-il acheter ?", work(20))}</div>
<div style="flex:1">${ex("Un rectangle a un périmètre de 24 cm. Ses côtés mesurent un nombre entier de cm. Trouve toutes les possibilités.", lines(3, 8))}</div>
</div>
`,
    corrige: `<p><b>1</b> a. cm b. m c. mm d. km</p>
<p><b>2</b> a. 300 b. 5 000 c. 7 d. 235 e. 64 f. 4 km 500 m</p>
<p><b>3</b> AB = 47 mm ; CD = 82 mm ; EF = 25 mm (si le PDF est imprimé à 100 %, sans « ajuster à la page »).</p>
<p><b>4</b> 950 m &lt; 1 km &lt; 1 km 50 m &lt; 1 200 m</p>
<p><b>5</b> rectangle : (12 + 5) × 2 = 34 cm ; carré : 9 × 4 = 36 cm ; triangle : 8 + 6 + 10 = 24 cm.</p>
<p><b>6</b> (25 + 14) × 2 = 78 m ; 78 − 3 = 75 m de grillage.</p>
<p><b>7</b> longueur + largeur = 12 : 11 et 1 ; 10 et 2 ; 9 et 3 ; 8 et 4 ; 7 et 5 ; 6 et 6 (un carré est un rectangle particulier).</p>`,
  },
];
