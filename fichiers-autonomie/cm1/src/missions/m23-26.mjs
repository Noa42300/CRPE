import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, conj, emptyRow, fillLine, frac, fracBar, numberLine } from "../lib.mjs";

const conjFull = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const fut = (rad, ends = ["ai", "as", "a", "ons", "ez", "ont"]) => ends.map((e) => `${rad}<span class="tm">${e}</span>`);
const PR = ["je / j'", "tu", "il, elle, on", "nous", "vous", "ils, elles"];

// Grille de 100 carreaux avec k carreaux coloriés.
const grid100 = (k, size = 30) => {
  const c = size / 10;
  let s = "";
  for (let i = 0; i < 100; i++) s += `<rect x="${(i % 10) * c}" y="${Math.floor(i / 10) * c}" width="${c}" height="${c}" fill="${i < k ? "var(--soft)" : "#fff"}" stroke="#555" stroke-width="0.15"/>`;
  return `<svg width="${size + 1}mm" height="${size + 1}mm" viewBox="-0.5 -0.5 ${size + 1} ${size + 1}">${s}<rect x="0" y="0" width="${size}" height="${size}" fill="none" stroke="#222" stroke-width="0.35"/></svg>`;
};

// Verre doseur gradué de 0 à 500 mL, niveau en mL.
const doseur = (level) => {
  const H = 40, top = 4, y = (v) => top + H - (v / 500) * H;
  let s = `<path d="M8 2 V${top + H} H30 V2" fill="none" stroke="#222" stroke-width=".45"/>`;
  s += `<rect x="8.3" y="${y(level)}" width="21.4" height="${top + H - y(level)}" fill="var(--soft)"/>`;
  for (let v = 0; v <= 500; v += 50) {
    const big = v % 100 === 0;
    s += `<line x1="30" y1="${y(v)}" x2="${big ? 25 : 27}" y2="${y(v)}" stroke="#222" stroke-width=".3"/>`;
    if (big) s += `<text x="32" y="${y(v) + 1.2}" font-size="3.2" font-family="Andika">${v}</text>`;
  }
  s += `<text x="32" y="1.8" font-size="3" font-family="Andika">mL</text>`;
  return `<svg width="44mm" height="${H + 7}mm" viewBox="0 0 44 ${H + 7}">${s}</svg>`;
};

export default [
  // ---------------------------------------------------------------- 23
  {
    n: 23, disc: "fr", domaine: "Orthographe", titre: "Le groupe nominal et ses accords", titreCourt: "Le groupe nominal et ses accords",
    exos: () => `
${lvl(1)}
${ex("Entoure le nom principal (le chef) de chaque groupe nominal.", `<div class="col2">
  <div>a. une jolie maison blanche</div><div>b. les vieux livres de mon père</div>
  <div>c. ce petit chien noir</div><div>d. des fleurs du jardin</div></div>`)}
${ex("Écris ces groupes nominaux au pluriel.", `<div class="col2">
  <div>a. un cheval blanc → ${blank(38)}</div><div>b. un bateau rapide → ${blank(34)}</div>
  <div>c. le caillou gris → ${blank(40)}</div><div>d. une souris curieuse → ${blank(30)}</div></div>`, { eg: "un jeu amusant → des jeu<b>x</b> amusant<b>s</b>" })}
${ex("Accorde l'adjectif entre parenthèses.", `<div class="col3" style="grid-template-columns:1fr 1fr 1fr;column-gap:3mm">
  <div><span class="mut">(grand)</span> une ${blank(18)} maison</div><div><span class="mut">(neuf)</span> des bottes ${blank(18)}</div><div><span class="mut">(heureux)</span> une fin ${blank(18)}</div>
  <div><span class="mut">(sportif)</span> des filles ${blank(16)}</div><div><span class="mut">(bon)</span> une ${blank(18)} idée</div><div><span class="mut">(léger)</span> une plume ${blank(16)}</div></div>`)}
${lvl(2)}
${ex("Corrige les groupes nominaux mal écrits. Si c'est juste, écris <b>correct</b>.", `<div class="col2">
  <div>a. des chevals noirs → ${blank(34)}</div><div>b. une robe bleu → ${blank(38)}</div>
  <div>c. les petit oiseaux → ${blank(34)}</div><div>d. des bijous précieux → ${blank(30)}</div>
  <div>e. des jeux amusants → ${blank(32)}</div></div>`)}
${ex("Classe ces groupes nominaux dans le tableau.", `<div class="chips mb"><span>des pommes rouges</span><span>un vélo neuf</span><span>les grands arbres</span><span>cette belle étoile</span><span>des chats gris</span><span>une mer calme</span></div>
${table(["masculin singulier", "féminin singulier", "masculin pluriel", "féminin pluriel"], [emptyRow(4, 13)])}`)}
${lvl(3)}
${ex("Enrichis chaque groupe nominal avec <b>un adjectif</b> et <b>un complément du nom</b>.", `
  <div>${fillLine("a. une maison →")}</div><div class="mt">${fillLine("b. des chaussures →")}</div>`, { eg: "un chat → un <b>gros</b> chat <b>de gouttière</b>" })}
`,
    corrige: `<p><b>1</b> a. maison b. livres c. chien d. fleurs</p>
<p><b>2</b> a. des chevaux blancs b. des bateaux rapides c. les cailloux gris d. des souris curieuses</p>
<p><b>3</b> a. grande b. neuves c. heureuse d. sportives e. bonne f. légère</p>
<p><b>4</b> a. des chevaux noirs b. une robe bleue c. les petits oiseaux d. des bijoux précieux e. correct</p>
<p><b>5</b> m. s. : un vélo neuf · f. s. : cette belle étoile, une mer calme · m. pl. : les grands arbres, des chats gris · f. pl. : des pommes rouges.</p>
<p><b>6</b> Ex. : une grande maison en bois ; des chaussures neuves de sport.</p>`,
  },
  // ---------------------------------------------------------------- 24
  {
    n: 24, disc: "ma", domaine: "Grandeurs et mesures", titre: "Les masses et les contenances", titreCourt: "Masses et contenances",
    exos: () => `
${lvl(1)}
${ex("Coche l'unité qui convient.", qcm([
  ["a. Un éléphant pèse 5", ["g", "kg", "t"]],
  ["b. Une pomme pèse 150", ["g", "kg", "t"]],
  ["c. Un verre contient 20", ["mL", "cL", "L"]],
  ["d. Un seau contient 10", ["mL", "cL", "L"]],
]))}
${ex("Convertis.", `<div class="col3">
  <div>a. 3 kg = ${blank(16)} g</div><div>b. 5 000 g = ${blank(12)} kg</div><div>c. 2 kg 300 g = ${blank(14)} g</div>
  <div>d. 2 L = ${blank(16)} cL</div><div>e. 50 cL = ${blank(14)} mL</div><div>f. 4 L = ${blank(16)} dL</div></div>`)}
${ex("Lis les graduations.", `<div style="display:flex;align-items:center;gap:8mm">
<div style="display:flex;align-items:center;gap:2mm">${doseur(350)}<div>Il y a<br>${blank(16)} mL</div></div>
<div><div class="sm">Une balance :</div>${numberLine({ a: 0, b: 2000, step: 500, sub: 250, width: 92, labels: { 0: "0 g", 500: "500 g", 1000: "1 kg", 1500: "1 500 g", 2000: "2 kg" }, marks: { 1250: "" }, height: 18 })}<div>La flèche montre ${blank(22)} g.</div></div></div>`)}
${lvl(2)}
${ex("Range du plus léger au plus lourd.", `<div class="chips mb"><span>1 kg 50 g</span><span>1 500 g</span><span>990 g</span><span>1 kg</span></div><div>${blank(28)} &lt; ${blank(28)} &lt; ${blank(28)} &lt; ${blank(28)}</div>`)}
${ex("Pour 4 personnes, une recette de crêpes demande 250 g de farine et 50 cL de lait. Combien faut-il de farine et de lait pour <b>8</b> personnes ? Le paquet de farine pèse 1 kg : combien de grammes restera-t-il ?", work(15))}
${lvl(3)}
<div class="row" style="gap:6mm">
<div>${ex("Un camion pèse 3 t à vide. Il transporte 40 caisses de 25 kg. Combien pèse-t-il chargé, en kg ?", `<div style="height:12mm"></div>${fillLine("Réponse :")}`)}</div>
<div>${ex("Tu as une carafe de 5 L et un seau de 3 L, sans graduation. Comment obtenir exactement 4 L d'eau ?", lines(3, 7))}</div>
</div>
`,
    corrige: `<p><b>1</b> a. t b. g c. cL d. L</p>
<p><b>2</b> a. 3 000 b. 5 c. 2 300 d. 200 e. 500 f. 40</p>
<p><b>3</b> 350 mL ; 1 250 g (1 kg 250 g).</p>
<p><b>4</b> 990 g &lt; 1 kg &lt; 1 kg 50 g &lt; 1 500 g</p>
<p><b>5</b> 2 fois plus : 500 g de farine et 100 cL (= 1 L) de lait. Reste : 1 000 − 500 = 500 g.</p>
<p><b>6</b> 40 × 25 = 1 000 kg ; 3 t = 3 000 kg ; 3 000 + 1 000 = 4 000 kg.</p>
<p><b>7</b> Remplir la carafe (5 L), verser dans le seau → il reste 2 L dans la carafe. Vider le seau, y verser les 2 L. Remplir la carafe, compléter le seau (1 L suffit) → il reste 4 L dans la carafe. (D'autres méthodes existent.)</p>`,
  },
  // ---------------------------------------------------------------- 25
  {
    n: 25, disc: "fr", domaine: "Conjugaison", titre: "Le futur de l'indicatif", titreCourt: "Le futur",
    exos: () => `
${lvl(1)}
${ex("Entoure seulement les verbes conjugués au futur.", `<div class="chips" style="font-size:12.5pt"><span>il chantera</span><span>nous chantons</span><span>vous finirez</span><span>ils finissaient</span><span>tu seras</span><span>j'avais</span><span>elles auront</span><span>je prends</span></div>`)}
${ex("Complète avec la terminaison du futur.", `<div class="col3" style="font-size:13pt">
  <div>a. Je parler${blank(12)}</div><div>b. Tu finir${blank(12)}</div><div>c. Nous jouer${blank(14)}</div>
  <div>d. Ils choisir${blank(12)}</div><div>e. Vous chanter${blank(12)}</div><div>f. Elle grandir${blank(12)}</div></div>`)}
${ex("Relie chaque verbe au radical qu'il a au futur.", `<div class="row"><div>${relier(["aller", "faire", "voir"], ["verr-", "ir-", "fer-"], 22)}</div><div>${relier(["venir", "être", "avoir"], ["aur-", "viendr-", "ser-"], 22)}</div></div>`)}
${lvl(2)}
${ex("Corrige le verbe s'il est mal écrit. Sinon, écris <b>correct</b>.", `<div class="col2">
  <div>a. Demain, je jourai au foot. → ${blank(20)}</div><div>b. Nous allerons à la plage. → ${blank(20)}</div>
  <div>c. Vous fairez un gâteau. → ${blank(24)}</div><div>d. Ils pourront venir. → ${blank(26)}</div></div>`)}
${ex("Réécris chaque phrase en commençant par « Demain ».", `
  <div>a. Aujourd'hui, nous allons au musée.</div>${fillLine("→ Demain,")}
  <div class="mt">b. Aujourd'hui, tu as un contrôle.</div>${fillLine("→ Demain,")}
  <div class="mt">c. Aujourd'hui, ils viennent nous voir.</div>${fillLine("→ Demain,")}`, { eg: "Aujourd'hui, je prends le bus. → Demain, je <b>prendrai</b> le bus." })}
${lvl(3)}
${ex("Dans vingt ans… Imagine ta vie en 3 phrases au futur. Utilise au moins un verbe du 3<sup>e</sup> groupe.", lines(3))}
`,
    corrige: `<p><b>1</b> il chantera, vous finirez, tu seras, elles auront.</p>
<p><b>2</b> a. parlerai b. finiras c. jouerons d. choisiront e. chanterez f. grandira</p>
<p><b>3</b> aller → ir- ; faire → fer- ; voir → verr- ; venir → viendr- ; être → ser- ; avoir → aur-.</p>
<p><b>4</b> a. jouerai b. irons c. ferez d. correct</p>
<p><b>5</b> a. Demain, nous irons au musée. b. Demain, tu auras un contrôle. c. Demain, ils viendront nous voir.</p>
<p><b>6</b> Production libre : vérifier le r du futur et les terminaisons.</p>`,
  },
  // ---------------------------------------------------------------- 26
  {
    n: 26, disc: "ma", domaine: "Nombres décimaux", titre: "Fractions décimales et nombres décimaux", titreCourt: "Fractions décimales et décimaux",
    exos: () => `
${lvl(1)}
${ex("Écris la fraction décimale, puis le nombre décimal.", `<div style="display:flex;justify-content:space-between;align-items:flex-end">
  <div class="c">${fracBar(10, 7, 50, 8)}<div class="mt">${blank(14)} = ${blank(14)}</div></div>
  <div class="c">${grid100(45, 24)}<div class="mt">${blank(14)} = ${blank(14)}</div></div>
  <div class="c"><div style="display:flex;gap:1.5mm">${fracBar(10, 10, 34, 8)}${fracBar(10, 3, 34, 8)}</div><div class="mt">${blank(14)} = ${blank(14)}</div></div></div>`)}
${ex("Relie chaque fraction au nombre décimal égal.", relier([frac(4, 10), frac(4, 100), frac(14, 10), frac(104, 100)], ["1,04", "0,4", "1,4", "0,04"], 30))}
${ex("Complète.", `<div class="col2">
  <div>a. 2,6 = 2 + ${frac(`<span style="display:inline-block;width:8mm;height:5.5mm;border:.35mm solid #6b7280;border-radius:1mm;vertical-align:middle"></span>`, 10)}</div><div>b. 5,07 = 5 + ${frac(`<span style="display:inline-block;width:8mm;height:5.5mm;border:.35mm solid #6b7280;border-radius:1mm;vertical-align:middle"></span>`, 100)}</div>
  <div>c. 3 + ${frac(8, 10)} = ${blank(18)}</div><div>d. 1 + ${frac(25, 100)} = ${blank(18)}</div></div>`)}
${lvl(2)}
${ex("Écris le nombre décimal de chaque lettre. Puis place 1,1 avec une flèche.", `<div class="fig">${numberLine({ a: 0, b: 2, step: 0.1, width: 170, labels: { 0: "0", 1: "1", 2: "2" }, marks: { 0.3: "A", 0.8: "B", 1.5: "C" }, height: 18 })}</div>
<div>A = ${blank(16)} &nbsp;&nbsp; B = ${blank(16)} &nbsp;&nbsp; C = ${blank(16)}</div>`)}
${ex("Complète.", `<div class="col2">
  <div>a. 3 € et 45 centimes = ${blank(18)} €</div><div>b. 12 € et 5 centimes = ${blank(18)} €</div>
  <div>c. 7,80 € = ${blank(10)} € et ${blank(10)} centimes</div><div>d. 250 centimes = ${blank(18)} €</div></div>`)}
${ex("Vrai ou faux ?", vf([`a. 0,5 = ${frac(5, 10)}`, `b. 1,2 = ${frac(12, 10)}`, `c. 0,7 = ${frac(7, 100)}`, "d. 10 dixièmes = 1 unité"], { cols: 2 }))}
${lvl(3)}
${ex("Léa dit : « 0,25 est plus grand que 0,3, car 25 est plus grand que 3. » A-t-elle raison ? Explique (tu peux utiliser le tableau ou un dessin).", lines(2))}
`,
    corrige: `<p><b>1</b> 7/10 = 0,7 ; 45/100 = 0,45 ; 13/10 = 1,3.</p>
<p><b>2</b> 4/10 → 0,4 ; 4/100 → 0,04 ; 14/10 → 1,4 ; 104/100 → 1,04.</p>
<p><b>3</b> a. 6 b. 7 c. 3,8 d. 1,25</p>
<p><b>4</b> A = 0,3 ; B = 0,8 ; C = 1,5 ; 1,1 : 1<sup>re</sup> graduation après 1.</p>
<p><b>5</b> a. 3,45 b. 12,05 c. 7 € et 80 centimes d. 2,50 (ou 2,5)</p>
<p><b>6</b> a. V b. V c. F (7/10) d. V</p>
<p><b>7</b> Non : 0,3 = 3 dixièmes = 30 centièmes, et 0,25 = 25 centièmes. 30 centièmes &gt; 25 centièmes, donc 0,3 &gt; 0,25.</p>`,
  },
];
