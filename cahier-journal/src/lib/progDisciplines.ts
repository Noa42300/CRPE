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
  /** Période de rattachement (facultatif), ex. "P1". */
  periode?: string;
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

/**
 * Programmation d'anglais CE1 transcrite du document de l'enseignant·e
 * (tableau 5 périodes). Séances numérotées 1..N par séquence, dans l'ordre du
 * document. Le rattachement par période (`periode`) est ma meilleure lecture des
 * colonnes du tableau — à confirmer/ajuster ; l'ordre des séquences et des
 * séances, lui, suit fidèlement le document.
 */
export const PROG_ANGLAIS: ProgSequence[] = [
  { periode: "P1", titre: "Entrée dans la langue vivante + USA", seances: [
    "Des images des USA", "La chanson rituelle", "Trois verbes d'action", "Consolidation des verbes d'action",
  ] },
  { periode: "P1", titre: "Greetings", seances: [
    "Good morning, good afternoon", "Consolidation", "Good evening, good night",
  ] },
  { periode: "P1", titre: "Numbers", seances: [
    "One, two, three, four, five", "Réviser one, two, three, four, five", "Six, seven, eight, nine, ten",
    "Réviser six, seven, eight, nine, ten", "Numbers from 1 to 10", "How many…?", "Revoir How many…?",
  ] },
  { periode: "P1", titre: "Happy Halloween", seances: [
    "Halloween, a monster, a vampire", "Scary monster, spooky vampire", "Scary witch, spooky ghost", "A Halloween card",
  ] },
  { periode: "P2", titre: "Colours", seances: [
    "Red, blue, green, yellow", "The colour red, blue, green, yellow", "This is red, blue, green, yellow", "What colour is this ?",
    "White, grey, black", "The colour white, grey, black", "This is white, grey, black", "What colour is this ?",
    "Brown, orange, purple, pink", "The colour brown, orange, purple, pink", "This is brown, orange, purple, pink", "What colour is this ?",
    "Consolidation + civilisation", "Révision du module",
  ] },
  { periode: "P2", titre: "Christmas", seances: [
    "Christmas in the UK and in the USA", "Christmas : lexique", "What do you see ?", "Consolidation", "A Christmas card",
  ] },
  { periode: "P3", titre: "Feelings", seances: [
    "Happy, angry, sleepy, hungry", "I am happy, angry, sleepy, hungry", "How are you, today ?", "Consolidation", "Sad, scared",
  ] },
  { periode: "P3", titre: "Clothes", seances: [
    "Clothes", "Put on", "Consolidation", "Take off", "Consolidation", "Civilisation : vêtements typiques", "I'm wearing a white hat",
  ] },
  { periode: "P3", titre: "Weather", seances: [
    "Cold and rainy, hot and sunny", "It's cold and rainy", "It's warm but cloudy", "How's the weather ?", "Revision", "It's windy, it's snowy",
  ] },
  { periode: "P4", titre: "School supplies", seances: [
    "A pencil, a book, a bag", "Touch your pencil, time's up", "An eraser, a ruler, paper, glue", "Revision",
  ] },
  { periode: "P4", titre: "What's your name ?", seances: [
    "La nouvelle chanson rituelle", "What's your name ?", "Consolidation",
  ] },
  { periode: "P4", titre: "Days of the week", seances: [
    "Civilisation : St Patrick's day", "Monday, Tuesday, Wednesday", "Consolidation", "Thursday, Friday, Saturday",
    "Consolidation", "What day is it, today ? Sunday", "Révision",
  ] },
  { periode: "P5", titre: "Family", seances: [
    "Daddy, mummy, brother, sister", "This is my mummy", "Mother's day, father's day",
  ] },
  { periode: "P5", titre: "Can / Action verbs / animals", seances: [
    "A bird, a fish, a gorilla, a buffalo", "Others animals", "Consolidation",
    "(séquence de 7 séances — séances 4 à 7 non détaillées dans le document)",
  ] },
  { periode: "P5", titre: "Have / Pets", seances: [
    "Pets", "I have a pet", "A brown dog, a black cat + civilisation",
  ] },
  { periode: "P5", titre: "Seasons", seances: [
    "Spring, summer, autumn, winter", "Consolidation + civilisation", "Can you tell me what season it is ?",
  ] },
  { periode: "P5", titre: "Like / Food (Central Park)", seances: [
    "Bread, ham, butter", "Lettuce, tomato, cheese", "Let's make a sandwich !", "Revision + civilisation",
    "Lasagna, milkshakes, avocados", "Do you like ?", "Lollipops, asparagus, cake", "Revision + civilisation",
  ] },
  { periode: "P5", titre: "Alphabet (séquence facultative)", seances: [
    "ABCDEFG", "HIJKLMNOP", "QRSTUV", "WXYZ",
  ] },
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
