/**
 * Rituels du matin — Période 2, au FORMAT COMPLET de la Période 1 (mêmes
 * modules : nombre du jour, calcul mental, phrase du jour, problème) + un
 * MINI-QUIZ « Quelle opération ? » (vocabulaire : en plus, en moins, fois,
 * trois fois plus, tables de 3/4…). Suit les apprentissages du moment :
 * français = types de phrases, maths = multiplication.
 */
import type { RitualDay, QA, QuizItem } from "./ritualsP1";
import { JOURS_P2 } from "./ritualsP2";

/* ---- phrases par type (pour « la phrase du jour » = plusieurs phrases) ---- */
const DECL = ["Le chien court dans le jardin", "Les élèves lisent en silence", "Nous partons à la cantine", "Le facteur apporte le courrier", "Le soleil brille ce matin", "Papa prépare le goûter", "La maîtresse écrit au tableau"];
const INTER = ["Où est passé mon stylo", "As-tu pris ton goûter", "Est-ce que tu as compris", "Veux-tu jouer avec moi", "Quand partons-nous en sortie", "Qui a gagné la partie", "Pourquoi pleures-tu"];
const EXCL = ["Comme il fait froid ce matin", "Quelle belle récréation", "Quel beau dessin tu as fait", "Comme c'est amusant", "Quelle chance nous avons", "Quel joli cadeau", "Comme tu cours vite"];
const IMPER = ["Range ton cartable", "Ferme la fenêtre", "Écoute bien la consigne", "Lève le doigt pour parler", "Prends ton cahier rouge", "Colle ton étiquette", "Tourne la page"];

/* ---- nombres du jour ---- */
const NB1 = [26, 34, 48, 52, 67, 73, 85, 91, 60, 39, 77, 88, 95, 42];
const NB2 = [146, 205, 312, 428, 530, 617, 704, 256, 389, 471, 583, 630, 742, 815];

function decomp(n: number): string {
  if (n < 100) return `${Math.floor(n / 10)} dizaine(s) et ${n % 10} unité(s)`;
  return `${Math.floor(n / 100)} centaine(s), ${Math.floor((n % 100) / 10)} dizaine(s) et ${n % 10} unité(s)`;
}

/* ---- calcul mental : un thème par jour, 4 calculs CE1 + 4 CE2 ---- */
const CM_THEMES: { t: string; but: string; ce1: QA[]; ce2: QA[] }[] = [
  { t: "Les doubles", but: "Mémoriser les doubles.", ce1: [["double de 4", "8"], ["double de 5", "10"], ["double de 3", "6"], ["double de 10", "20"]], ce2: [["double de 12", "24"], ["double de 15", "30"], ["double de 20", "40"], ["double de 25", "50"]] },
  { t: "La table de 2", but: "Installer la table de 2.", ce1: [["2 × 3", "6"], ["2 × 5", "10"], ["2 × 4", "8"], ["2 × 2", "4"]], ce2: [["2 × 6", "12"], ["2 × 8", "16"], ["2 × 9", "18"], ["2 × 7", "14"]] },
  { t: "Ajouter 10", but: "Ajouter 10 sans compter.", ce1: [["24 + 10", "34"], ["36 + 10", "46"], ["50 + 10", "60"], ["18 + 10", "28"]], ce2: [["145 + 10", "155"], ["230 + 10", "240"], ["308 + 10", "318"], ["199 + 10", "209"]] },
  { t: "La table de 5", but: "Installer la table de 5.", ce1: [["5 × 2", "10"], ["5 × 3", "15"], ["5 × 4", "20"], ["5 × 5", "25"]], ce2: [["5 × 6", "30"], ["5 × 7", "35"], ["5 × 8", "40"], ["5 × 10", "50"]] },
  { t: "Les compléments à 10", but: "Compléter à 10.", ce1: [["7 + ? = 10", "3"], ["4 + ? = 10", "6"], ["8 + ? = 10", "2"], ["5 + ? = 10", "5"]], ce2: [["70 + ? = 100", "30"], ["40 + ? = 100", "60"], ["90 + ? = 100", "10"], ["25 + ? = 100", "75"]] },
  { t: "Retirer 10", but: "Retirer 10 sans compter.", ce1: [["34 − 10", "24"], ["50 − 10", "40"], ["28 − 10", "18"], ["46 − 10", "36"]], ce2: [["155 − 10", "145"], ["240 − 10", "230"], ["308 − 10", "298"], ["100 − 10", "90"]] },
  { t: "La table de 3", but: "Découvrir la table de 3.", ce1: [["3 × 2", "6"], ["3 × 3", "9"], ["3 × 4", "12"], ["3 × 5", "15"]], ce2: [["3 × 6", "18"], ["3 × 7", "21"], ["3 × 8", "24"], ["3 × 9", "27"]] },
];

/* ---- mini-quiz : réserve de problèmes (opération + mot-indice) ---- */
const QUIZ_POOL: QuizItem[] = [
  { enonce: "24 élèves et 3 parents vont au musée. Combien de personnes en tout ?", op: "addition", indice: "en tout", rep: "24 + 3 = 27" },
  { enonce: "Il y a 23 élèves, 4 sont absents. Combien d'élèves présents ?", op: "soustraction", indice: "absents (en moins)", rep: "23 − 4 = 19" },
  { enonce: "Dans la salle, il y a 6 tables de 4 personnes. Combien de personnes ?", op: "multiplication", indice: "… tables de …", rep: "6 × 4 = 24" },
  { enonce: "Tom a 3 billes. Léa en a 3 fois plus. Combien Léa a-t-elle de billes ?", op: "multiplication", indice: "3 fois plus", rep: "3 × 3 = 9" },
  { enonce: "Léa a 15 images, Tom en a 9. Combien Léa en a-t-elle de plus ?", op: "soustraction", indice: "de plus (on compare)", rep: "15 − 9 = 6" },
  { enonce: "Le marchand range 5 paquets de 3 pommes. Combien de pommes ?", op: "multiplication", indice: "… paquets de …", rep: "5 × 3 = 15" },
  { enonce: "J'ai 18 billes, j'en gagne 7. Combien en ai-je maintenant ?", op: "addition", indice: "je gagne (en plus)", rep: "18 + 7 = 25" },
  { enonce: "4 rangées de 4 chaises (la table de 4). Combien de chaises ?", op: "multiplication", indice: "table de 4", rep: "4 × 4 = 16" },
  { enonce: "Paul a 20 cartes, il en donne 8. Combien lui en reste-t-il ?", op: "soustraction", indice: "il reste (en moins)", rep: "20 − 8 = 12" },
];

function build(i: number): RitualDay {
  const src = JOURS_P2[i];
  const [jour, dateCourt] = src.label.split(" ").length >= 2
    ? [src.label.split(" ")[0], src.label.slice(src.label.indexOf(" ") + 1)]
    : [src.label, ""];
  const n1 = NB1[i], n2 = NB2[i];
  const cm = CM_THEMES[i % CM_THEMES.length];

  // La phrase du jour = 4 phrases (une de chaque type) → on travaille le TYPE.
  const p1 = DECL[i % DECL.length], p2 = INTER[i % INTER.length], p3 = EXCL[i % EXCL.length], p4 = IMPER[i % IMPER.length];
  const texte = `1) ${p1}.\n2) ${p2} ?\n3) ${p3} !\n4) ${p4}.`;

  // 3 problèmes de quiz, tournants
  const quiz: QuizItem[] = [QUIZ_POOL[(i * 3) % QUIZ_POOL.length], QUIZ_POOL[(i * 3 + 1) % QUIZ_POOL.length], QUIZ_POOL[(i * 3 + 2) % QUIZ_POOL.length]];

  return {
    n: i + 1, j: jour, d: src.date, c: dateCourt || src.label, phase: "Période 2", date: src.date,
    dt: { ce1: [], ce2: [] },
    nb: {
      nce1: n1, nce2: n2,
      ce1: [["Combien de dizaines et d'unités ?", decomp(n1)], ["Quel est le nombre juste après ?", String(n1 + 1)], ["Écris-le en lettres (sur l'ardoise).", ""]],
      ce2: [["Décompose en c, d, u.", decomp(n2)], ["Quel est le nombre juste avant ?", String(n2 - 1)], ["Range : plus grand ou plus petit que 500 ?", n2 > 500 ? "plus grand" : "plus petit"]],
    },
    cm: { t: cm.t, but: cm.but, ce1: cm.ce1, ce2: cm.ce2 },
    ph: {
      t: texte,
      f: "Reconnaître les types de phrases (déclarative, interrogative, exclamative, impérative) et le bon point.",
      ce1: [["Phrase 1 : quel type ?", "déclarative (.)"], ["Phrase 2 : quel type ?", "interrogative (?)"], ["Phrase 3 : quel type ?", "exclamative (!)"], ["Phrase 4 : quel type ?", "impérative (ordre)"]],
      ce2: [["Mets le bon point à chaque phrase.", ". ? ! ."], ["Transforme la phrase 1 en question.", "ex. : Est-ce que le chien court dans le jardin ?"], ["Écris une phrase impérative de ton choix.", ""]],
    },
    pb: {
      t: src.probleme.enonce + " " + src.probleme.question,
      aide: "Je fais reformuler l'histoire, puis dessiner les groupes au tableau. « … tables de … » ou « … paquets de … » → multiplication.",
      rep: src.probleme.reponse,
      ce1: [["Quel calcul je fais ?", src.probleme.reponse], ["J'écris la phrase réponse.", ""]],
      ce2: [["J'écris le calcul et la phrase réponse.", src.probleme.reponse]],
    },
    bo: null,
    quiz,
  };
}

export const JOURS_P2_FULL: RitualDay[] = JOURS_P2.map((_, i) => build(i));
