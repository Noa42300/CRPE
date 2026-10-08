import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, bars, frac, fracBar, numberLine, emptyRow, fillLine } from "../lib.mjs";

const conjFull = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const t = (s) => `<span class="tm">${s}</span>`;

export default [
  // ---------------------------------------------------------------- 15
  {
    n: 15, disc: "fr", domaine: "Conjugaison", titre: "Le présent de venir, pouvoir, voir, vouloir + bilan", titreCourt: "Présent : venir, pouvoir, voir, vouloir",
    lecon: `
<h1 class="lt">Le présent : venir, pouvoir, voir, vouloir<small>et le bilan des terminaisons du présent</small></h1>
${box("À retenir", `<p>Ces quatre verbes du 3<sup>e</sup> groupe sont très utilisés. Leur <b>radical change</b> selon la personne : <i>je <b>vien</b>s, nous <b>ven</b>ons, ils <b>vienn</b>ent</i>.</p>`)}
<div class="conj" style="grid-template-columns:1fr 1fr;gap:3mm 8mm">
${conjFull("venir", [["je", "vien" + t("s")], ["tu", "vien" + t("s")], ["il, elle, on", "vien" + t("t")], ["nous", "ven" + t("ons")], ["vous", "ven" + t("ez")], ["ils, elles", "vienn" + t("ent")]])}
${conjFull("pouvoir", [["je", "peu" + t("x")], ["tu", "peu" + t("x")], ["il, elle, on", "peu" + t("t")], ["nous", "pouv" + t("ons")], ["vous", "pouv" + t("ez")], ["ils, elles", "peuv" + t("ent")]])}
${conjFull("voir", [["je", "voi" + t("s")], ["tu", "voi" + t("s")], ["il, elle, on", "voi" + t("t")], ["nous", "voy" + t("ons")], ["vous", "voy" + t("ez")], ["ils, elles", "voi" + t("ent")]])}
${conjFull("vouloir", [["je", "veu" + t("x")], ["tu", "veu" + t("x")], ["il, elle, on", "veu" + t("t")], ["nous", "voul" + t("ons")], ["vous", "voul" + t("ez")], ["ils, elles", "veul" + t("ent")]])}
</div>
${box("Attention !", `<p><b>je peux, tu peux, je veux, tu veux</b> : avec un <b>x</b>. &nbsp; <b>nous voyons</b> (y) mais <b>ils voient</b> (i).</p>`, { warn: true, tint: false, style: "margin-top:4.5mm" })}
${st("Bilan : les marques de personne au présent")}
${table(["", "le plus souvent", "parfois"], [
  [{ v: "<b>je</b>", cls: "l" }, { v: "-e (je chante) · -s (je finis, je viens)", cls: "l" }, { v: "-x (je peux, je veux) · j'ai", cls: "l" }],
  [{ v: "<b>tu</b>", cls: "l" }, { v: "<b>-s</b> (tu chantes, tu viens)", cls: "l" }, { v: "-x (tu peux, tu veux)", cls: "l" }],
  [{ v: "<b>il, elle, on</b>", cls: "l" }, { v: "-e (il chante) · -t (il finit, il voit)", cls: "l" }, { v: "-d (il prend) · il a, il va", cls: "l" }],
  [{ v: "<b>nous</b>", cls: "l" }, { v: "<b>-ons</b>", cls: "l" }, { v: "nous sommes", cls: "l" }],
  [{ v: "<b>vous</b>", cls: "l" }, { v: "<b>-ez</b>", cls: "l" }, { v: "vous êtes, faites, dites", cls: "l" }],
  [{ v: "<b>ils, elles</b>", cls: "l" }, { v: "<b>-ent</b>", cls: "l" }, { v: "-ont (ils ont, sont, vont, font)", cls: "l" }],
], { widths: ["20%", "45%", "35%"] })}
`,
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
    lecon: `
<h1 class="lt">Les fractions simples</h1>
${box("À retenir", `<p>Une <b>fraction</b> sert à parler d'une partie d'une unité partagée en <b>parts égales</b>.</p>
<div style="display:flex;align-items:center;gap:6mm;margin-top:1mm"><div style="flex:0 0 auto">${fracBar(4, 3, 56, 10)}</div>
<div style="flex:0 0 auto">${frac(3, 4, "18pt")}</div>
<div class="sm"><div><b>3</b> = le <b>numérateur</b> : le nombre de parts prises.</div><div><b>4</b> = le <b>dénominateur</b> : le nombre de parts égales de l'unité.</div></div></div>`)}
${st("Lire une fraction")}
${table(null, [[frac(1, 2), frac(1, 3), frac(1, 4), frac(3, 5), frac(7, 10), frac(5, 8)], ["un demi", "un tiers", "un quart", "trois cinquièmes", "sept dixièmes", "cinq huitièmes"]])}
${st("Comparer une fraction à 1")}
<div style="display:grid;grid-template-columns:auto 1fr;gap:1.6mm 4mm;align-items:center">
  ${fracBar(4, 4, 44)}<div>${frac(4, 4)} = 1 : toutes les parts sont prises.</div>
  ${fracBar(4, 3, 44)}<div>${frac(3, 4)} &lt; 1 : il manque une part pour faire 1.</div>
  <div style="display:flex;gap:2mm">${fracBar(4, 4, 44)}${fracBar(4, 1, 44)}</div><div>${frac(5, 4)} &gt; 1 : c'est 1 + ${frac(1, 4)}.</div>
</div>
${st("Sur une droite graduée")}
<div class="fig">${numberLine({ a: 0, b: 2, step: 0.25, width: 150, labels: { 0: "0", 1: "1", 2: "2", 0.25: "¼", 0.5: "½", 0.75: "¾", 1.25: "5/4", 1.5: "6/4", 1.75: "7/4" }, height: 18 })}</div>
<p class="sm" style="margin:0">L'unité (de 0 à 1) est partagée en <b>4</b> : chaque graduation vaut un quart.</p>
${box("Une fraction d'une quantité", `<p><b>${frac(1, 4)} de 20</b> : je partage 20 en 4 parts égales → 5. &nbsp;&nbsp; <b>${frac(3, 4)} de 20</b> : 3 parts de 5 → 15.</p>
<p>Deux fractions peuvent être égales : ${frac(1, 2)} = ${frac(2, 4)} (même longueur de bande).</p>`, { warn: true, tint: false })}
`,
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
    lecon: `
<h1 class="lt">Les homophones grammaticaux<small>a / à · et / est · on / ont · son / sont</small></h1>
${box("À retenir", `<p>Des <b>homophones</b> sont des mots qui se prononcent pareil mais qui s'écrivent différemment et n'ont pas le même sens.</p>
<p>Pour choisir, j'essaie de <b>remplacer</b> le mot par un autre : si ça marche, j'ai trouvé !</p>`)}
${table(["J'hésite entre…", "Je remplace par…", "Exemple"], [
  [{ v: "<b>a</b> (verbe avoir)", cls: "l" }, { v: "<b>avait</b> ✓", cls: "l" }, { v: "Il <b>a</b> un chien. → Il <i>avait</i> un chien.", cls: "l" }],
  [{ v: "<b>à</b> (petit mot invariable)", cls: "l" }, { v: "avait ✗ (ça ne marche pas)", cls: "l" }, { v: "Il va <b>à</b> Paris.", cls: "l" }],
  [{ v: "<b>est</b> (verbe être)", cls: "l" }, { v: "<b>était</b> ✓", cls: "l" }, { v: "Le ciel <b>est</b> bleu. → Le ciel <i>était</i> bleu.", cls: "l" }],
  [{ v: "<b>et</b> (mot de liaison)", cls: "l" }, { v: "<b>et puis</b> ✓", cls: "l" }, { v: "Tom <b>et</b> Léa → Tom <i>et puis</i> Léa", cls: "l" }],
  [{ v: "<b>ont</b> (verbe avoir)", cls: "l" }, { v: "<b>avaient</b> ✓", cls: "l" }, { v: "Ils <b>ont</b> faim. → Ils <i>avaient</i> faim.", cls: "l" }],
  [{ v: "<b>on</b> (pronom)", cls: "l" }, { v: "<b>il</b> ✓", cls: "l" }, { v: "<b>On</b> joue. → <i>Il</i> joue.", cls: "l" }],
  [{ v: "<b>sont</b> (verbe être)", cls: "l" }, { v: "<b>étaient</b> ✓", cls: "l" }, { v: "Ils <b>sont</b> là. → Ils <i>étaient</i> là.", cls: "l" }],
  [{ v: "<b>son</b> (déterminant)", cls: "l" }, { v: "<b>mon</b> ✓", cls: "l" }, { v: "<b>son</b> vélo → <i>mon</i> vélo", cls: "l" }],
], { widths: ["30%", "26%", "44%"] })}
${box("Attention !", `<p><b>à</b> prend toujours un <b>accent grave</b>.</p>
<p><b>on</b> est singulier, comme <i>il</i> : <i>On jou<b>e</b></i> (et non « on jouent »).</p>
<p>Devant un nom, c'est souvent <b>son</b> (son chat) ; après un sujet pluriel, c'est souvent <b>sont</b> (ils sont).</p>`, { warn: true, tint: false, style: "margin-top:5mm" })}
`,
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
    lecon: `
<h1 class="lt">Résoudre des problèmes (2)<small>multiplication · problèmes à étapes · tableaux · données manquantes</small></h1>
${box("À retenir", `<p>Quand une <b>même quantité se répète</b> plusieurs fois, je peux utiliser une <b>multiplication</b>.</p>`)}
<div class="row" style="align-items:center">
<div style="flex:0 0 auto">${bars({ top: "4 × 25 = 100", parts: [{ label: "25", w: 20 }, { label: "25", w: 20 }, { label: "25", w: 20 }, { label: "25", w: 20 }] })}</div>
<div class="sm">4 paquets de 25 cartes : 25 + 25 + 25 + 25 = 4 × 25 = <b>100</b> cartes.</div>
</div>
${st("Les problèmes à étapes")}
${box("Exemple", `<p>Une école achète <b>6</b> boîtes de <b>25</b> crayons. Elle en distribue <b>120</b>. Combien de crayons reste-t-il ?</p>
<p><b>Étape 1</b> — Je cherche d'abord le nombre de crayons achetés : 6 × 25 = 150.</p>
<p><b>Étape 2</b> — Je cherche ce qui reste : 150 − 120 = 30. &nbsp; <i>Il reste 30 crayons.</i></p>`, { tint: false })}
<p class="sm" style="margin:0">Je me demande : <b>« Qu'est-ce que je dois savoir avant de répondre à la question ? »</b></p>
${st("Lire un tableau")}
<div class="row" style="align-items:center">
<div style="flex:0 0 70mm">${table(["Piscine", "Prix"], [["Enfant", "3 €"], ["Adulte", "5 €"]])}</div>
<div class="sm">2 adultes et 3 enfants : (2 × 5) + (3 × 3) = 10 + 9 = <b>19 €</b>.<br>Je cherche la <b>bonne ligne</b> et la <b>bonne colonne</b>.</div>
</div>
${box("Attention !", `<p>Parfois, il <b>manque une information</b> et on ne peut pas répondre. <i>Paul achète des stylos à 2 €. Combien paie-t-il ?</i> → On ne sait pas <b>combien</b> de stylos il achète.</p>
<p>Parfois, il y a des informations <b>inutiles</b> : je ne les utilise pas.</p>`, { warn: true, tint: false })}
`,
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
