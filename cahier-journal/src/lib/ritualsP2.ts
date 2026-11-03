/**
 * Données des rituels du matin — Période 2 (lundis & mardis, 3 nov → 15 déc 2026).
 * Chaque jour : une phrase du jour (type de phrase) et un problème (surtout
 * multiplication, parfois addition, et comparaison « de plus / de moins / il
 * reste »). Partagé par la vue projetable (RituelsMatinP2) et la fiche à
 * imprimer (RituelsSerie).
 */
export type ProblemeP2 = { enonce: string; question: string; reponse: string };
export type JourP2 = {
  date: string; // AAAA-MM-JJ
  label: string;
  phrase: string;
  type: "déclarative" | "interrogative" | "exclamative" | "impérative";
  point: "." | "?" | "!";
  probleme: ProblemeP2;
};

export const JOURS_P2: JourP2[] = [
  { date: "2026-11-02", label: "Lundi 2 nov.", phrase: "Le chien court dans le jardin", type: "déclarative", point: ".",
    probleme: { enonce: "Dans la classe, il y a 5 tables de 4 élèves.", question: "Combien d'élèves en tout ?", reponse: "5 × 4 = 20 élèves" } },
  { date: "2026-11-03", label: "Mardi 3 nov.", phrase: "Où est passé mon stylo", type: "interrogative", point: "?",
    probleme: { enonce: "J'ai 3 paquets de 6 gâteaux.", question: "Combien de gâteaux ?", reponse: "3 × 6 = 18 gâteaux" } },
  { date: "2026-11-09", label: "Lundi 9 nov.", phrase: "Comme il fait froid ce matin", type: "exclamative", point: "!",
    probleme: { enonce: "Léo a 24 billes. Il en gagne 13.", question: "Combien de billes a-t-il maintenant ?", reponse: "24 + 13 = 37 billes" } },
  { date: "2026-11-10", label: "Mardi 10 nov.", phrase: "Range ton cartable", type: "impérative", point: ".",
    probleme: { enonce: "Il y a 4 boîtes de 5 crayons.", question: "Combien de crayons ?", reponse: "4 × 5 = 20 crayons" } },
  { date: "2026-11-16", label: "Lundi 16 nov.", phrase: "Les élèves lisent en silence", type: "déclarative", point: ".",
    probleme: { enonce: "Tom a 12 images. Léa a 8 images.", question: "Combien Tom a-t-il d'images de plus que Léa ?", reponse: "12 − 8 = 4 images de plus" } },
  { date: "2026-11-17", label: "Mardi 17 nov.", phrase: "As-tu pris ton goûter", type: "interrogative", point: "?",
    probleme: { enonce: "Le jardinier plante 4 rangées de 5 fleurs.", question: "Combien de fleurs ?", reponse: "4 × 5 = 20 fleurs" } },
  { date: "2026-11-23", label: "Lundi 23 nov.", phrase: "Quelle belle récréation", type: "exclamative", point: "!",
    probleme: { enonce: "6 enfants ont chacun 2 billes.", question: "Combien de billes en tout ?", reponse: "6 × 2 = 12 billes" } },
  { date: "2026-11-24", label: "Mardi 24 nov.", phrase: "Ferme la fenêtre, s'il te plaît", type: "impérative", point: ".",
    probleme: { enonce: "Dans le car, il y a 18 enfants. 7 enfants montent encore.", question: "Combien d'enfants dans le car ?", reponse: "18 + 7 = 25 enfants" } },
  { date: "2026-11-30", label: "Lundi 30 nov.", phrase: "Nous partons à la cantine", type: "déclarative", point: ".",
    probleme: { enonce: "Dans 3 cages, il y a 4 oiseaux dans chacune.", question: "Combien d'oiseaux ?", reponse: "3 × 4 = 12 oiseaux" } },
  { date: "2026-12-01", label: "Mardi 1er déc.", phrase: "Est-ce que tu as compris", type: "interrogative", point: "?",
    probleme: { enonce: "Il y a 13 CE1 et 10 CE2 dans la classe.", question: "Combien y a-t-il de CE1 de plus que de CE2 ?", reponse: "13 − 10 = 3 CE1 de plus" } },
  { date: "2026-12-07", label: "Lundi 7 déc.", phrase: "Quel beau dessin tu as fait", type: "exclamative", point: "!",
    probleme: { enonce: "7 sachets contiennent chacun 2 bonbons.", question: "Combien de bonbons ?", reponse: "7 × 2 = 14 bonbons" } },
  { date: "2026-12-08", label: "Mardi 8 déc.", phrase: "Écoute bien la consigne", type: "impérative", point: ".",
    probleme: { enonce: "2 étagères portent 8 livres chacune.", question: "Combien de livres ?", reponse: "2 × 8 = 16 livres" } },
  { date: "2026-12-14", label: "Lundi 14 déc.", phrase: "Le facteur apporte le courrier", type: "déclarative", point: ".",
    probleme: { enonce: "J'ai lu 15 pages hier et 12 pages aujourd'hui.", question: "Combien de pages en tout ?", reponse: "15 + 12 = 27 pages" } },
  { date: "2026-12-15", label: "Mardi 15 déc.", phrase: "Veux-tu jouer avec moi", type: "interrogative", point: "?",
    probleme: { enonce: "Paul a 25 cartes. Il en donne 9.", question: "Combien de cartes lui reste-t-il ?", reponse: "25 − 9 = 16 cartes" } },
];

/** Index du jour correspondant à une date ISO (AAAA-MM-JJ) : correspondance
 *  exacte, sinon le dernier jour <= la date (jour « courant » de la semaine),
 *  sinon 0. */
export function indexForDate(iso: string): number {
  const exact = JOURS_P2.findIndex((j) => j.date === iso);
  if (exact >= 0) return exact;
  let last = -1;
  for (let i = 0; i < JOURS_P2.length; i++) if (JOURS_P2[i].date <= iso) last = i;
  return last >= 0 ? last : 0;
}

export function todayISO(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
