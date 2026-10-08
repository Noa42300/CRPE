import { ex, lvl, blank, lines, qcm, relier, table, box, st, exs, cb, vf } from "../lib.mjs";

export default [
  {
    n: 1, disc: "fr", domaine: "Grammaire", titre: "Les types et les formes de phrases", titreCourt: "Types et formes de phrases",
    exos: () => `
${lvl(1)}
${ex("Relie chaque phrase à son type.", relier(
  ["Range ta chambre.", "Comme ce gâteau est bon !", "Où as-tu caché la clé ?", "Le chat dort sur le canapé."],
  ["phrase interrogative", "phrase déclarative", "phrase impérative", "phrase exclamative"], 30))}
${ex("Ajoute le bon signe de ponctuation : <b>.</b> <b>?</b> ou <b>!</b>", `<div class="col2">
  <div>a. Quelle heure est-il ${blank(8)}</div><div>b. Nous partirons demain matin ${blank(8)}</div>
  <div>c. Quelle belle surprise ${blank(8)}</div><div>d. Est-ce que tu as faim ${blank(8)}</div></div>`)}
${ex("Écris chaque phrase à la forme négative avec le mot indiqué.", `
  <div>a. Le bébé dort. <span class="mut">(pas)</span> → ${blank(80)}</div>
  <div class="mt">b. Nous allons au cinéma. <span class="mut">(jamais)</span> → ${blank(66)}</div>
  <div class="mt">c. Elle aime les carottes. <span class="mut">(pas)</span> → ${blank(68)}</div>`, { eg: "Il chante. <span class='mut'>(pas)</span> → Il <b>ne</b> chante <b>pas</b>." })}
${lvl(2)}
${ex("Il manque un mot dans chaque phrase négative. Recopie-la correctement.", `
  <div>a. Je veux pas sortir. → ${blank(90)}</div>
  <div class="mt">b. Il a rien vu. → ${blank(98)}</div>
`)}
${ex("Écris la même question de deux autres façons.", `
  <div>a. Vous partez demain ? → ${blank(55)} / ${blank(42)}</div>
  <div class="mt">b. Tu aimes la musique ? → ${blank(55)} / ${blank(41)}</div>`, { eg: "Tu viens ? → Est-ce que tu viens ? / Viens-tu ?" })}
${ex("Lis le texte, puis réponds.", `
  <div class="text"><p>Tom avance doucement sur son nouveau vélo. Son père court à côté. « Ne lâche pas le guidon ! » crie-t-il. Tom ne répond pas : il regarde la route. Soudain, un chien traverse. Tom freine juste à temps. « Tu as eu peur ? » demande son père. Tom sourit : « Un peu… Est-ce qu'on recommence ? »</p></div>
  <div>a. Recopie la phrase impérative : ${blank(78)}</div>
  <div class="mt">b. Tom sait-il déjà bien faire du vélo ? Écris deux indices du texte.</div>
  ${lines(1)}`)}
${lvl(3)}
${ex("Écris trois phrases sur ton animal préféré : une <b>interrogative</b>, une <b>exclamative</b> et une phrase à la <b>forme négative</b>.", lines(3))}
`,
    corrige: `<p><b>1</b> Range ta chambre. → impérative ; Comme ce gâteau… → exclamative ; Où as-tu… → interrogative ; Le chat dort… → déclarative.</p>
<p><b>2</b> a ? b . c ! d ?</p>
<p><b>3</b> a. Le bébé ne dort pas. b. Nous n'allons jamais au cinéma. c. Elle n'aime pas les carottes.</p>
<p><b>4</b> a. Je ne veux pas sortir. b. Il n'a rien vu.</p>
<p><b>5</b> a. Est-ce que vous partez demain ? / Partez-vous demain ? b. Est-ce que tu aimes la musique ? / Aimes-tu la musique ?</p>
<p><b>6</b> a. « Ne lâche pas le guidon ! » b. Non, il apprend : vélo « nouveau », il avance « doucement », son père « court à côté », il dit qu'il a eu « un peu » peur (2 indices suffisent).</p>
<p><b>7</b> Production libre ; vérifier la ponctuation (? / !) et le « ne… pas » complet.</p>`,
  },
  {
    n: 2, disc: "ma", domaine: "Nombres", titre: "Les nombres jusqu'à 99 999", titreCourt: "Les nombres jusqu'à 99 999",
    exos: () => `
${lvl(1)}
${ex("Écris chaque nombre dans le tableau.", `<div class="row" style="align-items:center">
  <div style="flex:0 0 28mm" class="sm">a. 8 406<br>b. 25 730<br>c. 60 019</div>
  <div>${table(["", "dizaines de mille", "unités de mille", "centaines", "dizaines", "unités"], [["a", "", "", "", "", ""], ["b", "", "", "", "", ""], ["c", "", "", "", "", ""]], { cls: "tall", widths: ["8%", "19%", "19%", "18%", "18%", "18%"] })}</div></div>`)}
${ex("Relie chaque nombre écrit en lettres à son écriture en chiffres.", relier(
  ["douze-mille-cinq-cents", "vingt-mille-cinquante", "deux-mille-cinq-cent-douze", "vingt-mille-cinq-cents"],
  ["20 500", "12 500", "2 512", "20 050"], 30))}
${ex("Écris ces nombres en chiffres.", `
  <div>a. trente-quatre-mille-six-cents → ${blank(30)}</div>
  <div class="mt">b. quatre-vingt-mille-huit → ${blank(30)}</div>
  <div class="mt">c. soixante-dix-mille-deux-cent-quinze → ${blank(30)}</div>`)}
${lvl(2)}
${ex("Observe le nombre <b style='font-family:Lexend'>63 480</b>. Coche <b>V</b> (vrai) ou <b>F</b> (faux).", vf(["a. Le chiffre des centaines est 4.", "b. Le nombre de centaines est 4.", "c. Le nombre de milliers est 63.", "d. Le chiffre des dizaines de mille est 3."], { cols: 2 }))}
${ex("Complète les décompositions.", `
  <div>a. 52 307 = 50 000 + ${blank(18)} + 300 + ${blank(12)}</div>
  <div class="mt">b. 41 090 = (4 × 10 000) + (${blank(8)} × 1 000) + (${blank(8)} × 10)</div>
  <div class="mt">c. 30 000 + 6 000 + 40 = ${blank(26)} &nbsp;&nbsp;&nbsp; d. (7 × 10 000) + (5 × 100) + 3 = ${blank(26)}</div>`)}
${lvl(3)}
${ex("Qui suis-je ?", `<div class="sm">Je suis un nombre de 5 chiffres. Mon chiffre des dizaines de mille est <b>4</b>. Mon chiffre des unités de mille est le <b>double</b> de celui des dizaines de mille. Mon chiffre des centaines est <b>0</b>. Mon chiffre des dizaines vaut <b>1 de moins</b> que mon chiffre des dizaines de mille. Mon chiffre des unités est la <b>moitié</b> de mon chiffre des unités de mille.</div>
<div class="mt">Je suis ${blank(34)}</div>`)}
${ex("Avec ces cinq cartes, utilisées <b>une seule fois</b> chacune, écris :", `
  <div style="display:flex;gap:8mm;align-items:center"><div class="chips" style="font-family:Lexend;font-size:14pt;flex:0 0 auto;width:30mm"><span>3</span><span>0</span><span>7</span><span>5</span><span>1</span></div>
  <div style="display:grid;grid-template-columns:auto auto;column-gap:4mm;row-gap:1.3mm;justify-content:start">
  <div>a. le plus grand nombre possible :</div><div>${blank(30)}</div>
  <div>b. le plus petit nombre de 5 chiffres :</div><div>${blank(30)}</div>
  <div>c. un nombre entre 50 000 et 51 000 :</div><div>${blank(30)}</div>
  <div>d. un nombre pair plus grand que 70 000 :</div><div>${blank(30)}</div></div></div>`)}
`,
    corrige: `<p><b>1</b> a. 8 406 → 0 DM, 8 UM, 4 C, 0 D, 6 U. b. 2 | 5 | 7 | 3 | 0. c. 6 | 0 | 0 | 1 | 9.</p>
<p><b>2</b> douze-mille-cinq-cents → 12 500 ; vingt-mille-cinquante → 20 050 ; deux-mille-cinq-cent-douze → 2 512 ; vingt-mille-cinq-cents → 20 500.</p>
<p><b>3</b> a. 34 600 b. 80 008 c. 70 215</p>
<p><b>4</b> a. vrai b. faux (634 centaines) c. vrai d. faux (6)</p>
<p><b>5</b> a. 2 000 et 7 b. 1 et 9 c. 36 040 d. 70 503</p>
<p><b>6</b> 4 – 8 – 0 – 3 – 4 → <b>48 034</b>.</p>
<p><b>7</b> a. 75 310 b. 10 357 c. 50 137, 50 173, 50 317, 50 371, 50 713 ou 50 731 d. un nombre qui commence par 7 et finit par 0 : 75 310, 73 510, 71 530, 75 130, 73 150, 71 350.</p>`,
  },
];
