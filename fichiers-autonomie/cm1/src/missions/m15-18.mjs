import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, bars, frac, fracBar, numberLine, emptyRow, fillLine } from "../lib.mjs";

const conjFull = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const t = (s) => `<span class="tm">${s}</span>`;

export default [
  // ---------------------------------------------------------------- 15
  {
    n: 15, disc: "fr", domaine: "Conjugaison", titre: "Le présent de venir, pouvoir, voir, vouloir + bilan", titreCourt: "Présent : venir, pouvoir, voir, vouloir",
    exos: () => `
${lvl(1)}
${ex("Complète le tableau.", table(["", "venir", "pouvoir", "voir", "vouloir"], [
  ["je", "viens", "", "", ""], ["tu", "", "peux", "", ""], ["il, elle", "", "", "voit", ""], ["nous", "", "", "", "voulons"], ["vous", "venez", "", "", ""], ["ils, elles", "", "", "", ""],
], { widths: ["16%", "21%", "21%", "21%", "21%"] }))}
${ex("Coche la forme correcte.", `<div class="col2">${qcm([["a. je", ["peux", "peut"]], ["b. ils", ["voient", "voyent"]], ["c. nous", ["voyons", "voions"]]])}${qcm([["d. tu", ["veux", "veus"]], ["e. ils", ["viennent", "venent"]], ["f. il", ["peut", "peux"]]])}</div>`)}
${ex("Classe ces formes selon la terminaison de « je ».", `<div class="chips mb"><span>je peux</span><span>je viens</span><span>je chante</span><span>je veux</span><span>je finis</span><span>je prends</span><span>je joue</span><span>je vois</span></div>
${table(["je …e", "je …s", "je …x"], [emptyRow(3, 10)])}`)}
${lvl(2)}
${ex("Corrige le verbe s'il est mal écrit. Sinon, écris <b>correct</b>.", `<div class="col2">
  <div>a. Je veus partir. → ${blank(30)}</div><div>b. Ils peuvent venir. → ${blank(30)}</div>
  <div>c. Nous voions la mer. → ${blank(28)}</div><div>d. Elles vienent demain. → ${blank(26)}</div></div>`)}
${ex("Réécris ce texte en remplaçant <b>je</b> par <b>nous</b>.", `<div class="text"><p style="text-indent:0">Je viens à l'école à vélo. Je vois mes amis. Je veux jouer avec eux, mais je ne peux pas : la cloche sonne !</p></div>${lines(2)}`)}
${lvl(3)}
${ex("Conjugue les verbes au présent dans ce dialogue.", `<div class="text" style="line-height:1.85"><p style="text-indent:0">
– Vous <span class="mut">(venir)</span> ${blank(24)} avec nous au cirque ?<br>
– Nous <span class="mut">(vouloir)</span> ${blank(24)} bien, mais nous ne <span class="mut">(pouvoir)</span> ${blank(24)} pas.<br>
– Dommage ! Tu <span class="mut">(voir)</span> ${blank(20)}, Léo ? Ils ne <span class="mut">(vouloir)</span> ${blank(24)} jamais sortir !</p></div>`)}
`,
    corrige: `<p><b>1</b> venir : viens, viens, vient, venons, venez, viennent · pouvoir : peux, peux, peut, pouvons, pouvez, peuvent · voir : vois, vois, voit, voyons, voyez, voient · vouloir : veux, veux, veut, voulons, voulez, veulent.</p>
<p><b>2</b> a. peux b. voient c. voyons d. veux e. viennent f. peut</p>
<p><b>3</b> -e : chante, joue · -s : viens, finis, prends, vois · -x : peux, veux.</p>
<p><b>4</b> a. veux b. correct c. voyons d. viennent</p>
<p><b>5</b> Nous venons à l'école à vélo. Nous voyons nos amis. Nous voulons jouer avec eux, mais nous ne pouvons pas : la cloche sonne !</p>
<p><b>6</b> venez ; voulons ; pouvons ; vois ; veulent.</p>`,
  },
  // ---------------------------------------------------------------- 16
  {
    n: 16, disc: "ma", domaine: "Fractions", titre: "Les fractions simples", titreCourt: "Les fractions simples",
    exos: () => `
${lvl(1)}
${ex("Écris la fraction coloriée.", `<div style="display:flex;justify-content:space-between;align-items:center">
  <div class="c">${fracBar(4, 3, 36)}${blank(14)}</div><div class="c">${fracBar(5, 2, 36)}${blank(14)}</div><div class="c">${fracBar(8, 5, 36)}${blank(14)}</div><div class="c">${fracBar(3, 1, 36)}${blank(14)}</div></div>`)}
${ex("Colorie la fraction demandée.", `<div style="display:flex;justify-content:space-between;align-items:center">
  <div style="display:flex;gap:2mm;align-items:center">${frac(2, 3)} ${fracBar(3, 0, 42)}</div><div style="display:flex;gap:2mm;align-items:center">${frac(7, 10)} ${fracBar(10, 0, 50)}</div><div style="display:flex;gap:2mm;align-items:center">${frac(3, 6)} ${fracBar(6, 0, 42)}</div></div>`)}
${ex("Relie chaque fraction à son écriture en lettres.", relier([frac(1, 4), frac(3, 10), frac(2, 3), frac(5, 2)], ["deux tiers", "cinq demis", "un quart", "trois dixièmes"], 30))}
${lvl(2)}
${ex(`L'unité est partagée en 3. Écris la fraction de chaque lettre. Puis place ${frac(5, 3)} avec une flèche.`, `<div class="fig">${numberLine({ a: 0, b: 2, step: 1 / 3, width: 160, labels: { 0: "0", 1: "1", 2: "2" }, marks: { "0.333333": "A", "0.666667": "B", "1.333333": "C" }, height: 18 })}</div>
<div>A = ${blank(14)} &nbsp;&nbsp; B = ${blank(14)} &nbsp;&nbsp; C = ${blank(14)}</div>`)}
${ex("Vrai ou faux ? Aide-toi des bandes de la leçon.", vf([`a. ${frac(1, 2)} = ${frac(2, 4)}`, `b. ${frac(3, 3)} = 1`, `c. ${frac(5, 4)} est plus petit que 1.`, `d. ${frac(1, 3)} est plus grand que ${frac(1, 2)}.`], { cols: 2 }))}
${lvl(3)}
<div class="row" style="gap:6mm">
<div>${ex(`Lou a 24 billes. Elle donne le quart (${frac(1, 4)}) de ses billes à son frère. Combien en donne-t-elle ? Combien lui en reste-t-il ?`, work(16))}</div>
<div>${ex(`Une tablette a 12 carreaux. Zoé mange ${frac(1, 3)} de la tablette et Max ${frac(1, 4)}. Qui a mangé le plus ? Combien de carreaux reste-t-il ?`, fracBar(12, 0, 72, 7) + `<div style="height:5mm"></div>` + fillLine("Réponse :"))}</div>
</div>
`,
    corrige: `<p><b>1</b> 3/4 ; 2/5 ; 5/8 ; 1/3</p>
<p><b>2</b> 2 parts sur 3 ; 7 parts sur 10 ; 3 parts sur 6 coloriées.</p>
<p><b>3</b> 1/4 → un quart ; 3/10 → trois dixièmes ; 2/3 → deux tiers ; 5/2 → cinq demis.</p>
<p><b>4</b> A = 1/3 ; B = 2/3 ; C = 4/3 ; 5/3 : 2<sup>e</sup> graduation après 1 (juste avant 2).</p>
<p><b>5</b> a. V b. V c. F (5/4 &gt; 1) d. F (partager en 3 donne des parts plus petites qu'en 2)</p>
<p><b>6</b> 24 partagé en 4 → 6 billes données ; il lui en reste 24 − 6 = 18.</p>
<p><b>7</b> 1/3 de 12 = 4 (Zoé) ; 1/4 de 12 = 3 (Max). Zoé a mangé le plus. Reste : 12 − 4 − 3 = 5 carreaux.</p>`,
  },
  // ---------------------------------------------------------------- 17
  {
    n: 17, disc: "fr", domaine: "Orthographe", titre: "Les homophones a/à, et/est, on/ont, son/sont", titreCourt: "Homophones a/à, et/est, on/ont, son/sont",
    exos: () => `
${lvl(1)}
${ex("Complète avec <b>a</b> ou <b>à</b>.", `<div class="col2">
  <div>a. Mon frère ${blank(10)} un vélo rouge.</div><div>b. Nous allons ${blank(10)} la plage.</div>
  <div>c. Elle ${blank(10)} peur du noir.</div><div>d. Il pense ${blank(10)} ses vacances.</div></div>`)}
${ex("Complète avec <b>et</b> ou <b>est</b>.", `<div class="col2">
  <div>a. Le ciel ${blank(10)} tout bleu.</div><div>b. Tom ${blank(10)} Léa sont amis.</div></div>
  <div class="mt">c. Ma grand-mère ${blank(10)} très gentille ${blank(10)} très drôle.</div>`)}
${ex("Coche le bon mot.", `<div class="col2">
  <div>a. ${cb()}On ${cb()}Ont va au parc.</div><div>b. Les enfants ${cb()}on ${cb()}ont fini leur travail.</div>
  <div>c. ${cb()}On ${cb()}Ont mange à midi.</div><div>d. Mes voisins ${cb()}on ${cb()}ont deux chats.</div></div>`)}
${lvl(2)}
${ex("Complète avec <b>son</b> ou <b>sont</b>.", `
  <div>a. ${blank(12)} chien et ${blank(12)} chat ${blank(12)} dans le jardin.</div>
  <div class="mt">b. Ses parents ${blank(12)} en vacances. &nbsp;&nbsp; c. Il range ${blank(12)} cartable.</div>`)}
${ex("Ce texte contient <b>5 erreurs</b>. Entoure-les, puis écris les mots corrigés.", `<div class="text"><p style="text-indent:0">Léo et sa sœur on un chien. Il s'appelle Filou et il et très joueur. Sa sœur à peur des gros chiens, mais pas de Filou. Le matin, Léo va a l'école. Le soir, Léo et son chien son contents de se retrouver.</p></div>
<div style="display:flex;gap:4mm">${[1, 2, 3, 4, 5].map(() => blank(26)).join("")}</div>`)}
${ex("Explique comment tu sais qu'il faut écrire <b>ont</b> dans : « Ils <b>ont</b> faim. »", lines(1))}
${lvl(3)}
${ex("Écris une phrase (ou deux) qui contient <b>a</b>, <b>à</b>, <b>et</b> et <b>est</b>.", lines(2))}
`,
    corrige: `<p><b>1</b> a. a b. à c. a d. à</p>
<p><b>2</b> a. est b. et c. est … et</p>
<p><b>3</b> a. On b. ont c. On d. ont</p>
<p><b>4</b> a. Son … son … sont b. sont c. son</p>
<p><b>5</b> on → ont ; et → est (il est très joueur) ; à → a (Sa sœur a peur) ; a → à (va à l'école) ; son → sont (sont contents).</p>
<p><b>6</b> Je peux remplacer par « avaient » : Ils avaient faim. C'est le verbe avoir.</p>
<p><b>7</b> Ex. : Ma sœur a un livre et elle est partie à la bibliothèque. Vérifier chaque homophone par remplacement.</p>`,
  },
  // ---------------------------------------------------------------- 18
  {
    n: 18, disc: "ma", domaine: "Problèmes", titre: "Résoudre des problèmes (2) : multiplication et étapes", titreCourt: "Problèmes (2) : × et étapes",
    exos: () => `
${lvl(1)}
${ex("Un carton contient 36 bouteilles. Combien de bouteilles y a-t-il dans 7 cartons ?", work(11))}
${ex("Lis le tableau, puis réponds.", `<div class="row" style="align-items:flex-start;gap:5mm"><div style="flex:0 0 74mm">${table(["Musée", "Prix"], [["Enfant", "4 €"], ["Adulte", "9 €"], ["Famille (2 adultes + 2 enfants)", "22 €"]], { widths: ["70%", "30%"] })}</div>
<div><div>a. Combien paient 2 adultes ? ${blank(22)}</div><div class="mt">b. 2 adultes et 2 enfants : vaut-il mieux prendre le billet « Famille » ? Combien économisent-ils ?</div>${lines(1)}</div></div>`)}
${lvl(2)}
${ex("Peut-on répondre ? Coche. Si non, écris ce qu'il manque.", `
  <div>a. Emma achète 3 cahiers. Combien paie-t-elle ?</div><div style="display:flex;gap:3mm">${cb()}oui ${cb()}non <span style="flex:1">${fillLine("Il manque :")}</span></div>
  <div class="mt">b. Un bus transporte 48 élèves par voyage. Il fait 3 voyages. Combien d'élèves a-t-il transportés ?</div><div style="display:flex;gap:3mm">${cb()}oui ${cb()}non <span style="flex:1">${fillLine("Il manque :")}</span></div>
  <div class="mt">c. Un fermier a des poules. Il en vend 25. Combien lui en reste-t-il ?</div><div style="display:flex;gap:3mm">${cb()}oui ${cb()}non <span style="flex:1">${fillLine("Il manque :")}</span></div>`)}
${ex("Écris l'opération qui permet de répondre (+, −, ×). Ne calcule pas.", `
  <div>a. Une boîte contient 12 œufs. Combien d'œufs dans 5 boîtes ? → ${blank(30)}</div>
  <div class="mt">b. J'ai 50 €. J'achète un jeu à 32 €. Combien me reste-t-il ? → ${blank(30)}</div>
  <div class="mt">c. Il y a 14 filles et 13 garçons. Combien d'élèves en tout ? → ${blank(30)}</div>`)}
${lvl(3)}
${ex("Pour la fête de l'école, on installe 15 tables de 8 chaises et 6 tables de 10 chaises. 170 invités sont attendus. Y a-t-il assez de chaises ? Combien en manque-t-il ou en reste-t-il ?", work(16))}
<div class="row" style="gap:6mm">
<div>${ex("Au self, on choisit 1 entrée parmi 3 et 1 dessert parmi 4. Combien de menus différents peut-on composer ?", `<div style="height:15mm"></div>${fillLine("Réponse :")}`)}</div>
<div>${ex("Dans une ferme, il y a des poules et des lapins. On compte 8 têtes et 22 pattes. Combien de poules ? Combien de lapins ?", `<div style="height:15mm"></div>${fillLine("Réponse :")}`)}</div>
</div>
`,
    corrige: `<p><b>1</b> 36 × 7 = 252 bouteilles.</p>
<p><b>2</b> a. 2 × 9 = 18 €. b. Séparément : 18 + 8 = 26 € ; famille : 22 €. Oui, ils économisent 4 €.</p>
<p><b>3</b> a. non : il manque le prix d'un cahier. b. oui : 48 × 3 = 144 élèves. c. non : il manque le nombre de poules au départ.</p>
<p><b>4</b> a. 12 × 5 b. 50 − 32 c. 14 + 13</p>
<p><b>5</b> 15 × 8 = 120 ; 6 × 10 = 60 ; 120 + 60 = 180 chaises. 180 − 170 = 10 : il y a assez de chaises, il en reste 10.</p>
<p><b>6</b> 3 × 4 = 12 menus (arbre ou tableau accepté).</p>
<p><b>7</b> 5 poules et 3 lapins (5 × 2 + 3 × 4 = 10 + 12 = 22 pattes). Méthode par essais accepté.</p>`,
  },
];
