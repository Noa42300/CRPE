import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf, work, grid, fillLine, frac } from "../lib.mjs";

const conjFull = (caption, rows) =>
  `<table><caption>${caption}</caption>${rows.map(([p, f]) => `<tr><td class="p">${p}</td><td>${f}</td></tr>`).join("")}</table>`;
const aux = (a, pp) => `<span class="tm">${a}</span> <span class="mt2">${pp}</span>`;

const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--c)" stroke-width=".45" stroke-dasharray="1.6 1.1"/>`;
const shape = (pts) => `<polygon points="${pts}" fill="none" stroke="#222" stroke-width=".45"/>`;
const gaxis = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--c)" stroke-width="0.1" stroke-dasharray="0.35 0.22"/>`;
const gpoly = (pts, fill = "var(--soft)") => `<polygon points="${pts}" fill="${fill}" stroke="#222" stroke-width="0.09"/>`;
const gline = (pts) => `<polyline points="${pts}" fill="none" stroke="#222" stroke-width="0.09"/>`;

// Frise des durées : sauts entre des heures.
const frise = (labels, jumps) => {
  const W = 150, n = labels.length, step = W / (n - 1);
  let s = `<line x1="0" y1="14" x2="${W}" y2="14" stroke="#222" stroke-width=".4"/>`;
  labels.forEach((l, i) => { s += `<line x1="${i * step}" y1="12" x2="${i * step}" y2="16" stroke="#222" stroke-width=".4"/><text x="${i * step}" y="21" font-size="3.6" text-anchor="middle" font-family="Andika">${l}</text>`; });
  jumps.forEach((j, i) => { const x1 = i * step, x2 = (i + 1) * step; s += `<path d="M${x1 + 1} 11 Q ${(x1 + x2) / 2} 2 ${x2 - 1} 11" fill="none" stroke="var(--c)" stroke-width=".45"/><text x="${(x1 + x2) / 2}" y="5" font-size="3.6" text-anchor="middle" font-family="Lexend" font-weight="600" fill="var(--c)">${j}</text>`; });
  return `<svg width="${W + 10}mm" height="23mm" viewBox="-5 0 ${W + 10} 23">${s}</svg>`;
};

export default [
  // ---------------------------------------------------------------- 27
  {
    n: 27, disc: "fr", domaine: "Vocabulaire", titre: "Familles de mots, préfixes, suffixes, synonymes, antonymes", titreCourt: "Familles, préfixes, suffixes, synonymes",
    lecon: `
<h1 class="lt">Construire et choisir ses mots<small>familles · préfixes · suffixes · synonymes · antonymes</small></h1>
${box("À retenir", `<p>Les mots d'une même <b>famille</b> sont construits à partir du même <b>radical</b> et ont un lien de sens : <i><b>terr</b>e, <b>terr</b>ain, en<b>terr</b>er, sou<b>terr</b>ain</i>.</p>
<p>On peut ajouter un <b>préfixe</b> avant le radical et un <b>suffixe</b> après : ils changent le sens du mot.</p>`)}
<div class="fig" style="margin:1mm 0 2mm"><svg width="150mm" height="20mm" viewBox="0 0 150 20">
  <rect x="20" y="3" width="22" height="10" rx="1.5" fill="#fff" stroke="#222" stroke-width=".35"/><text x="31" y="10" font-size="5" text-anchor="middle" font-family="Andika">dé</text>
  <rect x="42" y="3" width="30" height="10" rx="1.5" fill="var(--soft)" stroke="#222" stroke-width=".35"/><text x="57" y="10" font-size="5" text-anchor="middle" font-family="Andika" font-weight="700">color</text>
  <rect x="72" y="3" width="26" height="10" rx="1.5" fill="#fff" stroke="#222" stroke-width=".35"/><text x="85" y="10" font-size="5" text-anchor="middle" font-family="Andika">ation</text>
  <g font-size="3.5" font-family="Lexend" text-anchor="middle" fill="var(--c)"><text x="31" y="18">préfixe</text><text x="57" y="18">radical</text><text x="85" y="18">suffixe</text></g>
  <text x="104" y="10" font-size="4.5" font-family="Andika">→ décoloration</text></svg></div>
<div class="row">
<div>${table(["Préfixe", "Sens", "Exemple"], [["re-", "à nouveau", "refaire"], ["dé-, dés-", "le contraire", "défaire"], ["in-, im-, il-, ir-", "le contraire", "impossible"], ["pré-", "avant", "préhistoire"]])}</div>
<div>${table(["Suffixe", "Sens", "Exemple"], [["-ette", "petit", "fillette"], ["-able", "qu'on peut…", "lavable"], ["-eur, -euse", "celui qui…", "nageur"], ["-age", "l'action de…", "lavage"]])}</div>
</div>
${st("Synonymes et antonymes")}
${exs(["Les <b>synonymes</b> ont un sens <b>proche</b> : <i>content, joyeux, ravi</i>. Ils permettent d'éviter les répétitions. Attention aux nuances : <i>ravi</i> est plus fort que <i>content</i>.", "Les <b>antonymes</b> ont un sens <b>contraire</b> : <i>grand / petit</i>, <i>possible / impossible</i>."])}
${box("Attention !", `<p>Deux mots qui se ressemblent ne sont pas toujours de la même famille : <i>chant</i> et <i>chantier</i> n'ont aucun lien de sens.</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Entoure l'intrus dans chaque famille de mots.", `<div class="col2"><div>a. jardin – jardinier – jardinage – jarre</div><div>b. mer – marin – mercredi – amerrir</div><div>c. chant – chanteur – chantier – chanson</div></div>`)}
${ex("Ajoute un préfixe pour écrire le contraire.", `<div class="col3">
  <div>a. faire → ${blank(26)}</div><div>b. possible → ${blank(26)}</div><div>c. coller → ${blank(26)}</div>
  <div>d. connu → ${blank(26)}</div><div>e. visible → ${blank(26)}</div><div>f. content → ${blank(26)}</div></div>`)}
${ex("Relie chaque mot à sa définition.", relier(["une maisonnette", "lavable", "un nageur", "le lavage"], ["l'action de laver", "une petite maison", "celui qui nage", "qu'on peut laver"], 30))}
${lvl(2)}
${ex("Coche le synonyme du mot en gras.", qcm([["a. Ce film est très <b>drôle</b>.", ["amusant", "triste", "long"]], ["b. Il <b>observe</b> la mer.", ["regarde", "écoute", "sent"]], ["c. Une <b>énorme</b> vague arrive.", ["minuscule", "gigantesque", "calme"]]]))}
${ex("Écris le contraire (antonyme).", `<div class="col3">
  <div>a. ouvrir → ${blank(24)}</div><div>b. rapide → ${blank(24)}</div><div>c. le début → ${blank(22)}</div>
  <div>d. propre → ${blank(24)}</div><div>e. heureux → ${blank(24)}</div><div>f. toujours → ${blank(22)}</div></div>`)}
${ex("Remplace le verbe <b>faire</b> par un verbe plus précis.", `<div class="col2"><div>a. Papa ${blank(26)} un gâteau.</div><div>b. Ma sœur ${blank(26)} un dessin.</div><div>c. Je ${blank(26)} un château de sable.</div></div>`)}
${lvl(3)}
${ex("Trouve le plus possible de mots de la famille de <b>terre</b> (au moins 5).", lines(2))}
`,
    corrige: `<p><b>1</b> a. jarre b. mercredi c. chantier</p>
<p><b>2</b> a. défaire b. impossible c. décoller d. inconnu e. invisible f. mécontent</p>
<p><b>3</b> maisonnette → une petite maison ; lavable → qu'on peut laver ; nageur → celui qui nage ; lavage → l'action de laver.</p>
<p><b>4</b> a. amusant b. regarde c. gigantesque</p>
<p><b>5</b> a. fermer b. lent c. la fin d. sale e. malheureux / triste f. jamais</p>
<p><b>6</b> Ex. : a. prépare b. dessine / réalise c. construis</p>
<p><b>7</b> terrain, terrestre, enterrer, déterrer, souterrain, terrier, atterrir, territoire, terrasse…</p>`,
  },
  // ---------------------------------------------------------------- 28
  {
    n: 28, disc: "ma", domaine: "Grandeurs et mesures", titre: "Les durées", titreCourt: "Les durées",
    lecon: `
<h1 class="lt">Les durées<small>convertir · calculer une durée · trouver une heure</small></h1>
${box("À retenir", `<p><b>1 h = 60 min</b> &nbsp;·&nbsp; <b>1 min = 60 s</b> &nbsp;·&nbsp; 1 jour = 24 h &nbsp;·&nbsp; 1 semaine = 7 jours</p>
<p>1 an = 12 mois = 365 jours (366 les années bissextiles) &nbsp;·&nbsp; 1 siècle = 100 ans</p>
<p>Une demi-heure = <b>30 min</b> &nbsp;·&nbsp; un quart d'heure = <b>15 min</b></p>`)}
${st("Convertir")}
${exs(["1 h 30 min = 60 min + 30 min = <b>90 min</b>", "150 min = 120 min + 30 min = <b>2 h 30 min</b> &nbsp;<span class='sm mut'>(120 min = 2 h)</span>"])}
${st("Calculer une durée avec une frise")}
<p style="margin:0 0 1mm">Un cours commence à <b>9 h 45</b> et finit à <b>11 h 20</b>. Combien de temps dure-t-il ?</p>
<div class="fig">${frise(["9 h 45", "10 h", "11 h", "11 h 20"], ["15 min", "1 h", "20 min"])}</div>
<p style="margin:0 0 1mm">Je fais des sauts jusqu'aux <b>heures pile</b> : 15 min + 1 h + 20 min = <b>1 h 35 min</b>.</p>
${st("Trouver l'heure de fin")}
<p style="margin:0 0 1mm">Un film commence à <b>14 h 50</b> et dure <b>1 h 25 min</b>.</p>
${exs(["14 h 50 + 1 h = 15 h 50", "15 h 50 + 10 min = 16 h, puis 16 h + 15 min = <b>16 h 15</b>"])}
${box("Attention !", `<p>On ne calcule pas les heures comme les nombres habituels : <b>1 h = 60 min</b>, pas 100 min ! &nbsp; 1 h 30 min n'est pas « 130 min ».</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Convertis.", `<div class="col3" style="grid-template-columns:1fr 1.15fr 1fr">
  <div>a. 2 h = ${blank(16)} min</div><div>b. 3 min = ${blank(16)} s</div><div>c. 1 h 15 min = ${blank(14)} min</div>
  <div>d. 90 min = ${blank(7)} h ${blank(9)} min</div><div>e. 2 jours = ${blank(14)} h</div><div>f. 1 siècle = ${blank(14)} ans</div></div>`)}
${ex("Vrai ou faux ?", vf(["a. 1 h 30 min = 130 min", "b. 1 jour = 24 h", "c. Une demi-heure = 30 min", "d. Un quart d'heure = 25 min"], { cols: 2 }))}
${ex("Calcule chaque durée. Tu peux dessiner une frise.", `
  <div>a. de 8 h 30 à 9 h 15 : ${blank(30)} &nbsp;&nbsp; b. de 13 h 40 à 15 h 10 : ${blank(30)}</div>
  <div class="mt">c. de 10 h 50 à 12 h 05 : ${blank(30)}</div>
  <div class="mt"><svg width="170mm" height="9mm" viewBox="0 0 170 9"><line x1="2" y1="6" x2="168" y2="6" stroke="#b8c0ca" stroke-width=".4"/></svg></div>`)}
${lvl(2)}
${ex("Voici l'horaire d'un bus. Réponds.", `<div class="row" style="gap:5mm;align-items:flex-start"><div style="flex:0 0 66mm">${table(["Arrêt", "Heure"], [["École", "7 h 52"], ["Mairie", "8 h 05"], ["Piscine", "8 h 21"], ["Gare", "8 h 40"]])}</div>
<div><div>a. Combien de temps dure le trajet de l'École à la Gare ? ${blank(24)}</div>
<div class="mt">b. Combien de temps entre la Mairie et la Piscine ? ${blank(24)}</div>
<div class="mt">c. Léo arrive à l'arrêt Mairie à 8 h 10. Peut-il prendre ce bus ? Pourquoi ?</div>${lines(1)}</div></div>`)}
${ex("Un film commence à 20 h 45 et dure 1 h 50 min. À quelle heure se termine-t-il ?", work(10))}
${lvl(3)}
<div class="row" style="gap:6mm">
<div style="flex:1.4">${ex("Mia joue du piano 25 min par jour du lundi au vendredi, et 1 h le samedi. Combien de temps joue-t-elle par semaine (en h et min) ?", `<div style="height:12mm"></div>${fillLine("Réponse :")}`)}</div>
<div style="flex:1">${ex("Il est 10 h 40.", `<div>Dans 2 h 35 min, il sera ${blank(22)}</div><div class="mt">Il y a 1 h 50 min, il était ${blank(20)}</div>`)}</div>
</div>
`,
    corrige: `<p><b>1</b> a. 120 b. 180 c. 75 d. 1 h 30 min e. 48 f. 100</p>
<p><b>2</b> a. F (90 min) b. V c. V d. F (15 min)</p>
<p><b>3</b> a. 45 min b. 1 h 30 min c. 1 h 15 min</p>
<p><b>4</b> a. 48 min (7 h 52 → 8 h : 8 min ; 8 h → 8 h 40 : 40 min) b. 16 min c. Non, le bus est passé à 8 h 05 : il est en retard de 5 min.</p>
<p><b>5</b> 20 h 45 + 1 h = 21 h 45 ; + 50 min → 22 h 35.</p>
<p><b>6</b> 5 × 25 = 125 min ; 125 + 60 = 185 min = 3 h 05 min.</p>
<p><b>7</b> 13 h 15 ; 8 h 50.</p>`,
  },
  // ---------------------------------------------------------------- 29
  {
    n: 29, disc: "fr", domaine: "Conjugaison", titre: "Le passé composé", titreCourt: "Le passé composé",
    lecon: `
<h1 class="lt">Le passé composé</h1>
${box("À retenir", `<p>Le <b>passé composé</b> raconte une action <b>terminée</b> dans le passé : <i>Hier, j'<b>ai mangé</b> une pomme.</i></p>
<p>Il est formé de <b>deux mots</b> : l'<span class="hl">auxiliaire <b>avoir</b> ou <b>être</b></span> conjugué au <b>présent</b> + le <span class="u"><b>participe passé</b></span> du verbe.</p>`)}
<div class="conj" style="grid-template-columns:1fr 1fr;gap:3mm 8mm">
${conjFull("chanter (avec avoir)", [["j'", aux("ai", "chanté")], ["tu", aux("as", "chanté")], ["il, elle, on", aux("a", "chanté")], ["nous", aux("avons", "chanté")], ["vous", aux("avez", "chanté")], ["ils, elles", aux("ont", "chanté")]])}
${conjFull("aller (avec être)", [["je", aux("suis", "allé(e)")], ["tu", aux("es", "allé(e)")], ["il / elle", aux("est", "allé / allée")], ["nous", aux("sommes", "allés / allées")], ["vous", aux("êtes", "allé(e)s")], ["ils / elles", aux("sont", "allés / allées")]])}
</div>
${st("Le participe passé")}
${table(["1<sup>er</sup> groupe", "2<sup>e</sup> groupe", "3<sup>e</sup> groupe et autres"], [["-é : chant<b>é</b>, jou<b>é</b>", "-i : fin<b>i</b>, grand<b>i</b>", "pris, dit, fait, vu, pu, voulu, venu, allé, été, eu"]])}
${box("Avec être, on accorde", `<p>Avec <b>être</b>, le participe passé s'accorde avec le sujet, comme un adjectif : <i>Elle est part<b>ie</b>. Ils sont ven<b>us</b>. Elles sont arriv<b>ées</b>.</i></p>
<p>Les verbes avec être : <b>aller, venir, partir, arriver, entrer, sortir, rester, tomber, monter, descendre, naître, mourir</b>…</p>`, { tint: false })}
${box("Attention !", `<p>À la forme négative, <b>ne… pas</b> encadre l'<b>auxiliaire</b> : <i>Je <b>n'</b>ai <b>pas</b> mangé. Il <b>n'</b>est <b>pas</b> venu.</i></p>
<p>Pour trouver l'infinitif, je pense à « il faut… » : <i>j'ai pris</i> → il faut <b>prendre</b>.</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("Souligne l'auxiliaire et entoure le participe passé.", `<div class="col2">
  <div>a. Nous avons joué au ballon.</div><div>b. Elle est partie tôt.</div>
  <div>c. Tu as fini ton dessin.</div><div>d. Ils sont arrivés hier.</div></div>`)}
${ex("Retrouve l'infinitif.", `<div class="col3">
  <div>j'ai pris → ${blank(22)}</div><div>il a fait → ${blank(22)}</div><div>nous avons vu → ${blank(18)}</div>
  <div>elle a pu → ${blank(22)}</div><div>ils ont dit → ${blank(22)}</div><div>tu es venu → ${blank(20)}</div></div>`)}
${ex("Coche le bon auxiliaire.", `<div style="display:grid;grid-template-columns:1fr 1.1fr;column-gap:5mm;row-gap:1.3mm">
  <div>a. Hier, je ${cb()}ai ${cb()}suis allé au cinéma.</div><div>b. Nous ${cb()}avons ${cb()}sommes mangé des crêpes.</div>
  <div>c. Elle ${cb()}a ${cb()}est tombée.</div><div>d. Tu ${cb()}as ${cb()}es fini ton travail.</div></div>`)}
${lvl(2)}
${ex("Écris ces phrases au passé composé.", `
  <div>${fillLine("a. Nous finissons nos devoirs. →")}</div>
  <div class="mt">${fillLine("b. Elle arrive à l'heure. →")}</div>
  <div class="mt">${fillLine("c. Ils prennent le train. →")}</div>
  <div class="mt">${fillLine("d. Tu fais un gâteau. →")}</div>`, { eg: "Je chante. → J'<b>ai chanté</b>." })}
${ex("Écris ces phrases à la forme négative.", `
  <div>${fillLine("a. J'ai vu ce film. →")}</div>
  <div class="mt">${fillLine("b. Elles sont venues. →")}</div>`)}
${lvl(3)}
${ex("Raconte en 3 phrases ce que tu as fait dimanche dernier. Utilise le passé composé, avec au moins un verbe conjugué avec <b>être</b>.", lines(3))}
`,
    corrige: `<p><b>1</b> a. avons / joué b. est / partie c. as / fini d. sont / arrivés</p>
<p><b>2</b> prendre ; faire ; voir ; pouvoir ; dire ; venir</p>
<p><b>3</b> a. suis b. avons c. est d. as</p>
<p><b>4</b> a. Nous avons fini nos devoirs. b. Elle est arrivée à l'heure. c. Ils ont pris le train. d. Tu as fait un gâteau.</p>
<p><b>5</b> a. Je n'ai pas vu ce film. b. Elles ne sont pas venues.</p>
<p><b>6</b> Production libre : vérifier auxiliaire + participe, et l'accord avec être.</p>`,
  },
  // ---------------------------------------------------------------- 30
  {
    n: 30, disc: "ma", domaine: "Géométrie", titre: "La symétrie axiale", titreCourt: "La symétrie axiale + défi final",
    lecon: `
<h1 class="lt">La symétrie axiale</h1>
${box("À retenir", `<p>Une droite est un <b>axe de symétrie</b> d'une figure si, quand on <b>plie</b> la figure le long de cette droite, les deux parties se <b>superposent exactement</b>.</p>
<p>Le <b>symétrique</b> d'une figure, c'est comme son <b>reflet dans un miroir</b> posé sur l'axe.</p>`)}
<div style="display:flex;justify-content:space-around;align-items:center;margin:1mm 0 2mm">
<div class="c"><svg width="40mm" height="30mm" viewBox="0 0 40 30">${shape("20,3 33,12 28,27 12,27 7,12")}${dash(20, 0, 20, 30)}</svg><div class="sm">1 axe ✓</div></div>
<div class="c"><svg width="40mm" height="30mm" viewBox="0 0 40 30">${shape("6,6 34,6 34,24 6,24")}${dash(20, 1, 20, 29)}${dash(2, 15, 38, 15)}</svg><div class="sm">rectangle : 2 axes</div></div>
<div class="c"><svg width="40mm" height="30mm" viewBox="0 0 40 30">${shape("6,24 22,24 34,6 18,6")}${dash(20, 1, 20, 29)}</svg><div class="sm">pas un axe ✗</div></div>
</div>
${st("Compléter une figure sur un quadrillage")}
<div class="row" style="align-items:center">
<div style="flex:0 0 auto">${grid(12, 7, `${gaxis(6, 0, 6, 7)}${gpoly("2,2 5,2 5,6 3,6")}${gpoly("10,2 7,2 7,6 9,6", "#fff")}<circle cx="2" cy="2" r="0.18" fill="#222"/><text x="1.1" y="2.8" font-size="0.7" font-family="Andika">A</text><circle cx="10" cy="2" r="0.18" fill="#222"/><text x="10.3" y="2.8" font-size="0.7" font-family="Andika">A'</text><path d="M2 1.2 H5.9 M6.1 1.2 H10" stroke="var(--c)" stroke-width="0.08"/><text x="4" y="0.85" font-size="0.62" text-anchor="middle" font-family="Andika" fill="var(--c)">4 carreaux</text><text x="8" y="0.85" font-size="0.62" text-anchor="middle" font-family="Andika" fill="var(--c)">4 carreaux</text>`, 5)}</div>
<div class="sm">${exs(["Pour chaque <b>sommet</b>, je compte les carreaux jusqu'à l'axe.", "Je reporte <b>la même distance</b> de l'autre côté de l'axe.", "Je relie les points dans le même ordre.", "Je vérifie en pliant (ou en imaginant le pliage)."])}</div>
</div>
${box("Attention !", `<p>Le symétrique a la <b>même forme</b> et la <b>même taille</b>, mais il est <b>retourné</b> (comme dans un miroir).</p>`, { warn: true, tint: false })}
`,
    exos: () => `
${lvl(1)}
${ex("La droite en pointillés est-elle un axe de symétrie de la figure ? Coche.", `<div style="display:flex;justify-content:space-between">
<div class="c"><svg width="30mm" height="26mm" viewBox="0 0 30 26">${shape("15,2 26,24 4,24")}${dash(15, 0, 15, 26)}</svg>${cb()}oui ${cb()}non</div>
<div class="c"><svg width="32mm" height="26mm" viewBox="0 0 32 26">${shape("3,6 29,6 29,20 3,20")}${dash(3, 6, 29, 20)}</svg>${cb()}oui ${cb()}non</div>
<div class="c"><svg width="30mm" height="26mm" viewBox="0 0 30 26">${shape("5,24 5,10 15,2 25,10 25,24")}${dash(15, 0, 15, 26)}</svg>${cb()}oui ${cb()}non</div>
<div class="c"><svg width="30mm" height="26mm" viewBox="0 0 30 26">${shape("4,22 20,22 26,6 10,6")}${dash(15, 0, 15, 26)}</svg>${cb()}oui ${cb()}non</div></div>`)}
${ex("Trace tous les axes de symétrie de chaque figure. Écris combien il y en a.", `<div style="display:flex;justify-content:space-around;align-items:flex-end">
<div class="c"><svg width="28mm" height="26mm" viewBox="0 0 28 26">${shape("4,3 24,3 24,23 4,23")}</svg>${blank(12)} axes</div>
<div class="c"><svg width="36mm" height="26mm" viewBox="0 0 36 26">${shape("3,6 33,6 33,20 3,20")}</svg>${blank(12)} axes</div>
<div class="c"><svg width="30mm" height="26mm" viewBox="0 0 30 26">${shape("15,2 27,22.78 3,22.78")}</svg>${blank(12)} axes</div></div>`)}
${ex("Entoure les lettres qui ont au moins un axe de symétrie.", `<div style="display:flex;justify-content:space-between;font-family:Lexend;font-size:22pt;padding:0 6mm">${"A B F G H L N S T X".split(" ").map((l) => `<span>${l}</span>`).join("")}</div>`)}
${lvl(2)}
${ex("Vrai ou faux ?", vf(["a. Le symétrique d'une figure a la même forme et la même taille.", "b. Un carré a 2 axes de symétrie.", "c. Un point situé sur l'axe ne bouge pas.", "d. Le symétrique est retourné, comme dans un miroir."], { cols: 2 }))}
${ex("Complète chaque figure par symétrie.", `<div style="display:flex;justify-content:space-around">
${grid(12, 8, `${gaxis(6, 0, 6, 8)}${gline("6,1 3,1 2,3 4,4 2,6 5,7 6,7")}`, 5)}
${grid(12, 8, `${gaxis(0, 4, 12, 4)}${gline("2,4 2,1 5,2 7,1 9,3 10,4")}`, 5)}</div>`)}
${lvl(3)}
${ex("Le grand défi : pour la kermesse, la classe a préparé 12 plaques de gâteau de 24 parts chacune. Une part est vendue 2 €. À la fin de la journée, il reste le quart (" + frac(1, 4) + ") des parts. Combien d'argent la classe a-t-elle gagné ?", work(18))}
`,
    corrige: `<p><b>1</b> triangle : oui ; rectangle coupé par la diagonale : non ; « maison » : oui ; parallélogramme : non.</p>
<p><b>2</b> carré : 4 axes ; rectangle : 2 axes ; triangle équilatéral : 3 axes.</p>
<p><b>3</b> A, B, H, T, X (F, G, L, N, S n'en ont pas).</p>
<p><b>4</b> a. V b. F (4 axes) c. V d. V</p>
<p><b>5</b> Figure 1 (axe vertical) : points symétriques (9,1), (10,3), (8,4), (10,6), (7,7) — en (colonne, ligne), comptées depuis le coin en haut à gauche. Figure 2 (axe horizontal) : (2,7), (5,6), (7,7), (9,5), (10,4).</p>
<p><b>6</b> 12 × 24 = 288 parts. Le quart : 288 : 4 = 72 parts restent. Vendues : 288 − 72 = 216 parts. 216 × 2 = <b>432 €</b>.</p>`,
  },
];
