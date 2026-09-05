/**
 * Registre des supports élèves « fournis » (à imprimer / projeter) associés à
 * une séance. Clé = identifiant de l'activité. Contenus illustrés CE1-CE2
 * (pictogrammes maison), leçons en écriture cursive, fiches A4 complètes.
 */
import type { ReactNode } from "react";
import { FleurDuNombreSupport } from "./FleurDuNombreSupport";
import { ficheNode, type FicheData } from "./FichePedagogiqueA4";
import { AnglaisDiaporama } from "./AnglaisDiaporama";

export interface SupportFourni {
  key: string;
  label: string;
  node: ReactNode;
}

/* ============================ FRANÇAIS — Le verbe ============================ */

const VERBE_AFFICHE: FicheData = {
  entete: "Affichage (TBI)", titre: "Le verbe", niveau: "CE1-CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "def", picto: "saut", titre: "C'est quoi un verbe ?", contenu: "Le verbe est le mot qui dit ce que l'on FAIT (une action) ou ce que l'on EST. Il change avec le temps (hier, aujourd'hui, demain) et la personne." },
    { kind: "pictos", titre: "Des verbes en images", items: [
      { name: "saut", label: "sauter" }, { name: "oreille", label: "écouter" }, { name: "casserole", label: "cuisiner" },
      { name: "oiseau", label: "chanter" }, { name: "chien", label: "courir" }, { name: "pomme", label: "manger" },
    ] },
    { kind: "puces", titre: "Pour le trouver", points: [
      "Je dis la phrase à un autre moment : « Hier, … » → le mot qui change, c'est le verbe.",
      "Je peux l'encadrer par ne … pas.",
      "Son nom est l'infinitif : sauter, manger, être.",
    ] },
  ],
};

const VERBE_LECON: FicheData = {
  entete: "Leçon à coller", titre: "Le verbe", niveau: "CE1-CE2", discipline: "Français — Grammaire", cursive: true,
  blocs: [
    { kind: "def", picto: "saut", contenu: "Le verbe est un mot très important de la phrase. Il dit ce que l'on fait ou ce que l'on est. Il change avec le temps : hier, aujourd'hui, demain." },
    { kind: "pictos", items: [
      { name: "chien", label: "courir" }, { name: "pomme", label: "manger" }, { name: "oiseau", label: "chanter" }, { name: "oreille", label: "écouter" },
    ] },
    { kind: "puces", titre: "Je trouve le verbe", points: [
      "Je change le moment : « Hier, je… ».",
      "Le mot qui change, c'est le verbe.",
      "Son nom est l'infinitif : chanter, courir, être.",
    ] },
  ],
};

const VERBE_CE1: FicheData = {
  entete: "Exercices", titre: "Le verbe", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "chien", consigne: "Entoure le verbe (l'action) dans chaque phrase.", items: [
      "Le chien court dans le jardin.", "Papa prépare le repas.", "Les élèves écoutent la maîtresse.",
      "Je saute très haut.", "La fleur pousse au soleil.", "L'oiseau chante dans l'arbre.",
    ] },
    { kind: "exercice", picto: "oreille", aide: "un verbe = une action", consigne: "Colorie la case ▢ seulement si le mot est un verbe.", items: [
      "manger ▢     table ▢     courir ▢", "chat ▢     dormir ▢     porte ▢",
    ] },
    { kind: "exercice", picto: "saut", consigne: "Complète chaque phrase avec un verbe qui va bien.", items: [
      "Je __________ à la corde.", "Le chat __________ sur le canapé.", "Nous __________ une belle chanson.",
    ] },
    { kind: "exercice", picto: "fleur", consigne: "Dessine une action que tu aimes faire, puis écris le verbe.", lignes: 3 },
  ],
};

const VERBE_CE2: FicheData = {
  entete: "Exercices", titre: "Le verbe", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "oiseau", consigne: "Souligne le verbe et écris son infinitif.", items: [
      "Les oiseaux chantent. → ____________", "Nous partons en voyage. → ____________",
      "Tu ranges ton cartable. → ____________", "Le boulanger vend du pain. → ____________",
      "Elles finissent leur travail. → ____________",
    ] },
    { kind: "exercice", picto: "valise", consigne: "Récris la phrase en commençant par « Hier ». Entoure le verbe qui change.", items: [
      "Aujourd'hui, je mange à la cantine.", "Aujourd'hui, nous jouons dans la cour.",
    ], lignes: 2 },
    { kind: "exercice", picto: "casserole", aide: "un verbe se conjugue", consigne: "Trouve l'intrus (le mot qui n'est PAS un verbe).", items: [
      "courir – manger – table – dormir", "chanter – porte – lire – écrire", "sauter – rouge – ranger – finir",
    ] },
    { kind: "exercice", picto: "cartable", consigne: "Invente une phrase avec le verbe « jouer », puis donne son infinitif.", lignes: 3 },
  ],
};

/* ============================ MATHS ============================ */

const MATHS_CE1_LECON: FicheData = {
  entete: "Leçon", titre: "Dénombrer une collection jusqu'à 99", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "def", titre: "Pour compter beaucoup d'objets", contenu: "Je fais des paquets de 10. Un paquet de 10, c'est une dizaine (une barre orange). Ce qui reste tout seul, ce sont les unités (des cubes verts)." },
    { kind: "base10", dizaines: 4, unites: 6, legende: "4 barres de 10 et 6 cubes" },
    { kind: "puces", titre: "J'écris le nombre", points: ["Il y a 4 dizaines et 6 unités.", "J'écris 46 : le 4 dit les dizaines, le 6 dit les unités.", "Je lis : quarante-six."] },
    { kind: "base10", dizaines: 3, unites: 5, legende: "3 barres de 10 et 5 cubes" },
    { kind: "exemples", titre: "À retenir", points: ["Je groupe toujours par paquets de 10.", "Chiffre de gauche = dizaines ; chiffre de droite = unités."] },
  ],
};

const MATHS_CE2_AUTO: FicheData = {
  entete: "Fichier autonomie", titre: "Dénombrer une collection jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "def", titre: "Rappel", contenu: "Je groupe par 100 (plaques bleues), par 10 (barres oranges) et je compte les unités (cubes verts). 100 = 10 dizaines." },
    { kind: "base10", centaines: 3, dizaines: 5, unites: 2, legende: "3 plaques, 5 barres, 2 cubes" },
    { kind: "exercice", aide: "c · d · u", consigne: "Écris le nombre représenté (comme au-dessus).", items: [
      "3 centaines, 5 dizaines, 2 unités = ____", "6 centaines, 0 dizaine, 4 unités = ____",
      "2 centaines, 8 dizaines, 9 unités = ____", "4 centaines, 4 dizaines, 4 unités = ____",
    ] },
    { kind: "exercice", aide: "347 = 300 + 40 + 7", consigne: "Décompose chaque nombre.", items: [
      "582 = ______________", "706 = ______________", "250 = ______________", "419 = ______________",
    ] },
    { kind: "exercice", consigne: "Complète.", items: [
      "Dans 100, il y a ___ dizaines.", "Dans 1 000, il y a ___ centaines.",
      "453 = ___ c ___ d ___ u.", "608 = ___ c ___ d ___ u.",
    ] },
    { kind: "exercice", consigne: "Range chaque liste du plus petit au plus grand.", items: [
      "903 – 309 – 930 – 390 → ____________________", "540 – 405 – 450 – 504 → ____________________",
    ] },
    { kind: "exercice", aide: "attention aux retenues !", consigne: "Écris le nombre qui vient juste après.", items: [
      "199 → ____", "709 → ____", "890 → ____", "999 → ____",
    ] },
  ],
};

/* ============================ HISTOIRE — Le temps ============================ */

const HIST_SUPPORT: FicheData = {
  entete: "Affichage (TBI)", titre: "Objets d'hier et d'aujourd'hui", niveau: "CE1-CE2", discipline: "Questionner le monde — Le temps",
  blocs: [
    { kind: "def", picto: "caverne", titre: "Comment sait-on qu'une chose est du passé ?", contenu: "Certains objets viennent d'autrefois, d'autres d'aujourd'hui. On observe les indices : la matière, la forme, la façon dont ça marche." },
    { kind: "paires", titre: "Autrefois → Aujourd'hui", paires: [
      { avant: { name: "telCadran", label: "le téléphone à cadran" }, apres: { name: "smartphone", label: "le smartphone" } },
      { avant: { name: "lampeHuile", label: "la lampe à huile" }, apres: { name: "ampoule", label: "l'ampoule" } },
      { avant: { name: "plume", label: "la plume et l'encre" }, apres: { name: "stylo", label: "le stylo" } },
    ] },
    { kind: "timeline", titre: "La frise du temps", steps: [
      { name: "caverne", label: "il y a très longtemps" }, { name: "plume", label: "autrefois" }, { name: "smartphone", label: "aujourd'hui" },
    ] },
  ],
};

const HIST_CE1: FicheData = {
  entete: "Trace écrite", titre: "Reconnaître le passé", niveau: "CE1", discipline: "Questionner le monde — Le temps", cursive: true,
  blocs: [
    { kind: "def", picto: "fleche", contenu: "Il y a le passé (avant, autrefois) et le présent (aujourd'hui). Les objets nous donnent des indices." },
    { kind: "paires", titre: "Autrefois → Aujourd'hui", paires: [
      { avant: { name: "telCadran", label: "autrefois" }, apres: { name: "smartphone", label: "aujourd'hui" } },
      { avant: { name: "lampeHuile", label: "autrefois" }, apres: { name: "ampoule", label: "aujourd'hui" } },
    ] },
    { kind: "puces", titre: "Les mots du temps", points: ["autrefois = le passé", "aujourd'hui = le présent", "le passé proche : il y a peu de temps", "le passé lointain : il y a très longtemps"] },
    { kind: "lignes", n: 2 },
  ],
};

const HIST_CE2: FicheData = {
  entete: "Trace écrite", titre: "Reconnaître le passé", niveau: "CE2", discipline: "Questionner le monde — Le temps", cursive: true,
  blocs: [
    { kind: "def", picto: "caverne", contenu: "On reconnaît le passé grâce à des indices (objets, vêtements, photos anciennes). Le temps se mesure : le jour, l'année, le siècle." },
    { kind: "timeline", titre: "La frise du temps", steps: [
      { name: "caverne", label: "il y a très longtemps" }, { name: "plume", label: "autrefois" }, { name: "smartphone", label: "aujourd'hui" },
    ] },
    { kind: "puces", titre: "À retenir", points: ["le passé proche / le passé lointain", "on mesure une durée : hier, il y a 10 ans, il y a 100 ans", "mon histoire (ma naissance…) n'est pas l'histoire de tous (l'histoire collective)"] },
    { kind: "lignes", n: 3 },
  ],
};

/* ============================ ANGLAIS ============================ */

const ANGLAIS_LECON: FicheData = {
  entete: "Leçon à coller", titre: "L'anglais : les mots transparents", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais", cursive: true,
  blocs: [
    { kind: "def", picto: "liberte", contenu: "Certains mots anglais ressemblent beaucoup au français : on peut les deviner ! Ce sont les mots transparents. On les entend aux États-Unis (USA)." },
    { kind: "pictos", titre: "Je devine (anglais → français)", items: [
      { name: "taxi", label: "a taxi = un taxi" }, { name: "pizza", label: "a pizza = une pizza" }, { name: "burger", label: "a hamburger" },
      { name: "banane", label: "a banana = une banane" }, { name: "tomate", label: "a tomato = une tomate" }, { name: "smartphone", label: "a telephone" },
    ] },
    { kind: "puces", titre: "Aux États-Unis (USA)", points: ["New York et la statue de la Liberté", "les grands taxis jaunes, le base-ball"] },
    { kind: "def", picto: "chien", titre: "Attention !", contenu: "Tous les mots ne se ressemblent pas ! Beaucoup de mots anglais ne ressemblent pas du tout au français : il faut les apprendre." },
    { kind: "pictos", titre: "Ces mots sont différents", items: [
      { name: "chien", label: "a dog = un chien" }, { name: "chat", label: "a cat = un chat" }, { name: "maison", label: "a house = une maison" },
      { name: "pomme", label: "an apple = une pomme" }, { name: "goutte", label: "water = de l'eau" }, { name: "livre", label: "a book = un livre" },
    ] },
  ],
};

const ANGLAIS_FEUILLE: FicheData = {
  entete: "Exercices", titre: "Devine les mots — voyage aux USA", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais",
  blocs: [
    { kind: "exercice", picto: "taxi", consigne: "Écris ce que veut dire chaque mot anglais.", items: [
      "a taxi → ____________", "a pizza → ____________", "a hamburger → ____________",
      "a banana → ____________", "a tomato → ____________", "a telephone → ____________",
    ] },
    { kind: "exercice", picto: "chien", aide: "transparent = ressemble au français", consigne: "Entoure les mots transparents (faciles à deviner). Souligne ceux qui sont différents.", items: [
      "taxi – dog – pizza – house", "banana – cat – tomato – book",
    ] },
    { kind: "exercice", picto: "liberte", consigne: "Colorie en vert les mots que tu as devinés tout seul." },
    { kind: "exercice", picto: "pizza", consigne: "Écris deux autres mots anglais que tu connais déjà.", lignes: 2 },
  ],
};

export function supportsForActivity(activityId: string): SupportFourni[] {
  switch (activityId) {
    case "ah":
      return [
        { key: "fleur-ce1", label: "Fleur du nombre — CE1 (23)", node: <FleurDuNombreSupport niveau="CE1" /> },
        { key: "fleur-ce2", label: "Fleur du nombre — CE2 (23)", node: <FleurDuNombreSupport niveau="CE2" /> },
        { key: "fleur-corr", label: "Fleur du nombre — Correction (23)", node: <FleurDuNombreSupport niveau="CE2" correction /> },
      ];
    case "l8verbe":
      return [
        { key: "verbe-aff", label: "Le verbe — Affichage (TBI)", node: ficheNode(VERBE_AFFICHE) },
        { key: "verbe-lecon", label: "Le verbe — Leçon à coller (cursive)", node: ficheNode(VERBE_LECON) },
        { key: "verbe-ce1", label: "Le verbe — Exercices CE1 (A4)", node: ficheNode(VERBE_CE1) },
        { key: "verbe-ce2", label: "Le verbe — Exercices CE2 (A4)", node: ficheNode(VERBE_CE2) },
      ];
    case "l8mce1":
      return [
        { key: "m-ce1-lecon", label: "Dénombrer jusqu'à 99 — Leçon illustrée CE1", node: ficheNode(MATHS_CE1_LECON) },
      ];
    case "l8mce2":
      return [
        { key: "m-ce2-auto", label: "Dénombrer jusqu'à 1 000 — Fichier autonomie CE2 (illustré)", node: ficheNode(MATHS_CE2_AUTO) },
      ];
    case "l8hist":
      return [
        { key: "hist-aff", label: "Objets d'hier et d'aujourd'hui — Affichage", node: ficheNode(HIST_SUPPORT) },
        { key: "hist-ce1", label: "Reconnaître le passé — Trace écrite CE1", node: ficheNode(HIST_CE1) },
        { key: "hist-ce2", label: "Reconnaître le passé — Trace écrite CE2", node: ficheNode(HIST_CE2) },
      ];
    case "l8ang":
      return [
        { key: "usa-diapo", label: "Let's discover the USA! — Diaporama à projeter", node: <AnglaisDiaporama /> },
        { key: "ang-lecon", label: "Les mots transparents — Leçon à coller", node: ficheNode(ANGLAIS_LECON) },
        { key: "ang-feuille", label: "Devine les mots (USA) — Feuille à distribuer", node: ficheNode(ANGLAIS_FEUILLE) },
      ];
    default:
      return [];
  }
}
