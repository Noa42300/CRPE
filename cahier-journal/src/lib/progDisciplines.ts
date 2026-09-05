/**
 * Programmations de l'enseignant·e — Questionner le monde (Histoire, Géographie,
 * Sciences), Anglais et EMC. Transcrites depuis ses documents.
 *
 * Règles :
 *  - Histoire, Géographie et Sciences entrent toutes dans « Questionner le monde ».
 *  - Chaque séquence a ses séances numérotées de 1 à N (redémarre à 1 par séquence).
 *  - Période 1 : seule l'HISTOIRE est traitée (la séance 1 a déjà été faite).
 * Données 100 % pédagogiques (aucune donnée élève).
 */

export interface ProgSequence {
  titre: string;
  seances: string[]; // numérotées 1..N par leur position
}

/* ----------------------- Questionner le monde ----------------------- */

export const PROG_HISTOIRE: ProgSequence[] = [
  { titre: "Construire le temps historique", seances: [
    "Comment sait-on qu'une chose appartient au passé ?", "Comment mesurer le temps ?", "Lire une frise", "Notre frise historique",
  ] },
  { titre: "Les grandes périodes de l'Histoire", seances: [
    "Les cinq grandes périodes", "Une histoire très longue", "Comment les hommes vivent-ils à différentes époques ?", "Défi chronologique",
  ] },
  { titre: "La Préhistoire", seances: [
    "Qui sont les premiers humains ?", "Le Paléolithique : vivre comme chasseur-cueilleur", "Le Néolithique : devenir agriculteur", "Raconter la Préhistoire",
  ] },
  { titre: "L'Antiquité : Rome et la Gaule romaine", seances: [
    "Qui sont les Romains ?", "Vivre à Rome", "Les Gaulois et les Romains", "La Gaule romaine",
  ] },
  { titre: "La construction du royaume de France", seances: [
    "Après les Romains : les Francs", "Les rois et le royaume", "Le royaume de France au Moyen Âge", "De petits rois à un royaume plus puissant",
  ] },
  { titre: "Construire et raconter une frise historique", seances: [
    "Notre grande frise", "Les trois grandes histoires", "Le grand récit chronologique", "Évaluation",
  ] },
];

export const PROG_GEO: ProgSequence[] = [
  { titre: "Se repérer et représenter notre espace proche", seances: [
    "Où sommes-nous ?", "Comment représenter notre espace ?", "Fabriquer un plan", "Se situer sur une carte",
  ] },
  { titre: "Habiter la ville et la campagne", seances: [
    "Ville ou campagne ?", "Habiter en ville", "Comment se déplace-t-on ?", "Habiter à la campagne",
  ] },
  { titre: "Habiter le bord de mer et la montagne", seances: [
    "Habiter au bord de la mer", "Habiter à la montagne", "Comparer quatre milieux", "Défi : deviner le lieu",
  ] },
  { titre: "Habiter ailleurs : comparer des modes de vie", seances: [
    "Habite-t-on partout comme nous ?", "Comment mange-t-on ailleurs ?", "Un autre milieu, une autre façon d'habiter", "Construire nos critères de comparaison",
  ] },
  { titre: "De notre territoire à la France et au monde", seances: [
    "Où se trouve la France ?", "La France : plusieurs milieux", "Les continents et les océans", "Localiser des grandes villes du monde",
  ] },
  { titre: "Comprendre et représenter les espaces", seances: [
    "Lire différents types de documents", "Construire une carte simple", "Grande enquête géographique", "Évaluation / défi final",
  ] },
];

export const PROG_SCIENCES: ProgSequence[] = [
  { titre: "La matière autour de nous", seances: [
    "Solide, liquide : comment reconnaître la matière ?", "Les liquides prennent-ils la forme du récipient ?", "Les solides ont-ils tous les mêmes propriétés ?", "Mesurer : masse, volume, température",
  ] },
  { titre: "L'eau change d'état", seances: ["Faire fondre et faire geler", "Où trouve-t-on l'eau ?"] },
  { titre: "L'air", seances: ["L'air existe-t-il ?", "Peut-on enfermer l'air ?", "Les trois états de la matière"] },
  { titre: "La santé et le corps", seances: [
    "Comment notre corps grandit-il ?", "Comment notre corps bouge-t-il ?", "Les dents changent-elles ?", "Manger pour grandir et bouger", "Construire un repas équilibré",
  ] },
  { titre: "Alimentation, hygiène et rythmes de vie", seances: [
    "Pourquoi se laver les mains, les dents, le corps ?", "Bouger, se reposer, dormir", "Construire notre charte santé",
  ] },
  { titre: "Les objets techniques", seances: [
    "Objet naturel ou objet technique ?", "À quoi sert cet objet ? Comment fonctionne-t-il ?", "Avec quoi les objets sont-ils fabriqués ?",
  ] },
  { titre: "Électricité et projet technique", seances: [
    "Faire fonctionner une lampe", "Circuit ouvert ou fermé ?", "Conducteurs, isolants et interrupteur", "Défi final : fabriquer et expliquer",
  ] },
];

export const PROG_QLM: { label: string; sequences: ProgSequence[] }[] = [
  { label: "Histoire (traitée en Période 1)", sequences: PROG_HISTOIRE },
  { label: "Géographie", sequences: PROG_GEO },
  { label: "Sciences", sequences: PROG_SCIENCES },
];

/* ----------------------- Anglais ----------------------- */

export const PROG_ANGLAIS: ProgSequence[] = [
  { titre: "Se saluer (Greetings)", seances: ["Good morning, good afternoon", "Consolidation", "Good evening, good night"] },
  { titre: "Entrée dans les langues : les USA (verbes d'action)", seances: ["Des images des USA (mots transparents)", "La chanson rituelle", "Trois verbes d'action", "Consolidation des verbes"] },
  { titre: "Les nombres de 1 à 10", seances: ["One, two, three, four, five", "Réviser 1 à 5", "Six, seven, eight, nine, ten", "Réviser 6 à 10", "Numbers from 1 to 10", "How many…?", "Revoir How many…?"] },
  { titre: "Les couleurs (Colours)", seances: ["Red, blue, green, yellow", "The colour red, blue…", "This is red, blue…", "What colour is this ?", "White, grey, black", "The colour white, grey, black", "This is white, grey, black", "What colour is this ?", "Brown, orange, purple", "The colour brown, orange, purple", "This is brown, orange, purple", "What colour is this ?", "Consolidation", "Révision du module"] },
  { titre: "Les animaux (Animals)", seances: ["A bird, a fish, a gorilla…", "Other animals", "Consolidation (snakes and ladders)"] },
  { titre: "Halloween", seances: ["Halloween, a monster", "Scary monster, spooky…", "Scary witch, spooky…", "A Halloween card"] },
  { titre: "Se présenter (What's your name ?)", seances: ["La nouvelle chanson", "What's your name ?", "Consolidation"] },
  { titre: "Noël (Christmas)", seances: ["Christmas in the UK and USA", "Christmas : lexique", "What do you see ?", "Consolidation", "A Christmas card"] },
  { titre: "La météo (Weather)", seances: ["Cold and rainy, hot and sunny", "It's cold and rainy", "It's warm but cloudy", "How's the weather ?", "Revision", "It's windy, it's snowy"] },
  { titre: "Les vêtements (Clothes)", seances: ["Clothes", "Put on", "Consolidation", "Take off", "Consolidation", "Civilisation : vêtements", "I'm wearing a white hat"] },
  { titre: "Les jours & St Patrick's Day", seances: ["Civilisation : St Patrick's Day", "Monday, Tuesday, Wednesday", "Consolidation", "Thursday, Friday, Saturday, Sunday", "Consolidation", "What day is it today ?", "Révision"] },
  { titre: "La famille (Family)", seances: ["Daddy, mummy, brother, sister", "This is my mummy", "Mother's day, father's day"] },
  { titre: "L'alphabet (facultative)", seances: ["Découverte de l'alphabet", "Épeler", "Jeux de lettres", "Consolidation"] },
];

/* ----------------------- Graphémo (orthographe & dictées) ----------------------- */
/**
 * Programmation Graphémo sur 32 semaines (J. Riou, d'après les correspondances
 * graphèmes/phonèmes et la fréquence des lettres). C'EST la méthode d'orthographe
 * et de dictées de la classe (et NON « 1, 2, 3… Étude de la langue »).
 * Règle de la classe : la dictée hebdomadaire se fait toujours sur le THÈME 1.
 * Semaine 1 = dictée diagnostique ; semaine 7 = dictée diagnostique finale.
 * Transcrit par période (les colonnes du tableau) ; données 100 % pédagogiques.
 */
export const PROG_GRAPHEMO: { periode: string; notions: string[] }[] = [
  { periode: "P1", notions: ["Dictée diagnostique", "L'alphabet", "La combinaison des lettres", "Les lettres finales muettes", "La lettre r", "La lettre t"] },
  { periode: "P2", notions: ["La lettre d", "La lettre p", "La lettre e", "La lettre e (c / ç)", "Les accents", "La lettre s"] },
  { periode: "P3", notions: ["La lettre o", "La lettre h", "La lettre m", "La lettre c", "Les consonnes doubles", "La lettre g"] },
  { periode: "P4", notions: ["La lettre i", "La lettre i (suite)", "Les graphies proches", "Le e final dans les noms féminins", "Le féminin des mots en -er et -ier", "Le féminin des adjectifs"] },
  { periode: "P5", notions: ["Le nombre des noms", "Le nombre des adjectifs", "La lettre x", "Les mots dérivés", "Les accords dans le groupe nominal", "L'accord sujet-verbe", "Le genre des noms et adjectifs", "Dictée diagnostique finale"] },
];

/** Notions grammaticales travaillées en parallèle des dictées (par période). */
export const PROG_GRAPHEMO_GRAMMAIRE: { periode: string; notions: string[] }[] = [
  { periode: "P1", notions: ["Le nom", "Le verbe", "Le sujet", "Le présent"] },
  { periode: "P2", notions: ["Les articles et déterminants", "Les mots invariables", "Les adjectifs"] },
  { periode: "P3", notions: ["Les pronoms personnels sujets", "L'imparfait"] },
  { periode: "P4", notions: ["Le groupe nominal", "Les compléments", "Le futur"] },
  { periode: "P5", notions: ["Le passé composé", "Les régularités"] },
];

/* ----------------------- EMC (par période) ----------------------- */

export const PROG_EMC: { periode: string; themes: string[] }[] = [
  { periode: "P1", themes: ["Respecter les autres", "Élaborer les règles de vie (classe et école)", "Les émotions et les sentiments", "La solidarité"] },
  { periode: "P2", themes: ["Le harcèlement (journée « Non au harcèlement », 6 novembre)", "Vivre ensemble malgré nos différences"] },
  { periode: "P3", themes: ["Respecter les différences (sociales, physiques…)", "Lutter contre les discriminations (racisme, handicap, harcèlement)", "L'égalité"] },
  { periode: "P4", themes: ["Les symboles de la République", "La devise « Liberté, égalité, fraternité »", "La laïcité (charte de la laïcité)"] },
  { periode: "P5", themes: ["Mes droits, mes devoirs", "Les droits de l'enfant", "Le sens des règles (règle, règlement, loi)", "Conseils d'élèves et vote"] },
];
