/**
 * Registre des supports élèves « fournis » (à imprimer / projeter) associés à
 * une séance. Clé = identifiant de l'activité. Contenus illustrés CE1-CE2
 * (pictogrammes maison), leçons en écriture cursive, fiches A4 complètes.
 */
import type { ReactNode } from "react";
import { FleurDuNombreSupport } from "./FleurDuNombreSupport";
import { ficheNode, type FicheData } from "./FichePedagogiqueA4";
import { AnglaisDiaporama, AnglaisActionVerbsDiapo, AnglaisVerbsLecon, AnglaisVerbsCartes } from "./AnglaisDiaporama";
import { LireFriseDiapo, SolidesProprietesDiapo, LireFriseLecon, SolidesLecon } from "./QlmDiapos";
import { SeRepererDiapo, SymetrieDiapo } from "./GeoDiapos";
import { EpsTerrainSupport, type EpsFiche } from "./EpsTerrainSupport";
import { ColoriageMagique } from "./ColoriageMagique";
import { MesurerTempsDiapo, FriseUnitesTemps, MesurerTempsLecon } from "./MesurerTempsDiapo";
import { PoesieCopie } from "./PoesieCopie";
import { EpsSeanceFiche, EPS_COURIR_VITE_S3, EPS_COURIR_CARRES_L21, EPS_COURIR_CARRES_M22 } from "./EpsSeanceFiche";
import { ComparerDiapo, SolideLiquideDiapo, SolideLiquideLecon, DeterminantsLecon, DeterminantsDemoPossDiapo, DeterminantsDemoPossLecon, LeNomLecon } from "./MardiSupports";
import { MotsAApprendre, dicteeById, ProgDicteesAnnee } from "./DicteeMaison";

export interface SupportFourni {
  key: string;
  label: string;
  node: ReactNode;
}

/* ============================ FRANÇAIS — Le verbe ============================ */

const VERBE_AFFICHE: FicheData = {
  entete: "Affichage (TBI)", titre: "Le verbe", niveau: "CE1-CE2", discipline: "Français — Grammaire", cursive: true,
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
  competences: ["reconnaître le verbe dans une phrase", "repérer un verbe (une action)", "compléter avec un verbe", "écrire une action"],
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
  competences: ["souligner le verbe et donner l'infinitif", "changer le temps d'une phrase", "trouver l'intrus (le mot qui n'est pas un verbe)", "écrire une phrase avec un verbe"],
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
  entete: "Leçon", titre: "Dénombrer une collection jusqu'à 99", niveau: "CE1", discipline: "Mathématiques — Nombres", cursive: true,
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
  competences: ["écrire un nombre en chiffres", "décomposer un nombre", "compter les dizaines et les centaines", "ranger des nombres", "trouver le nombre suivant"],
  blocs: [
    { kind: "def", titre: "Rappel", contenu: "Je groupe par 100 (plaques bleues), par 10 (barres oranges) et je compte les unités (cubes verts). 100 = 10 dizaines." },
    { kind: "base10", centaines: 3, dizaines: 5, unites: 2, legende: "3 plaques, 5 barres, 2 cubes" },
    { kind: "exercice", aide: "c · d · u", consigne: "Écris le nombre représenté (comme au-dessus).", items: [
      "3 centaines, 5 dizaines, 2 unités = ____", "6 centaines, 0 dizaine, 4 unités = ____",
      "2 centaines, 8 dizaines, 9 unités = ____", "4 centaines, 4 dizaines, 4 unités = ____",
    ] },
    { kind: "exercice", exemple: "347 = 300 + 40 + 7", consigne: "Décompose chaque nombre.", items: [
      "582 = ______________", "706 = ______________", "250 = ______________", "419 = ______________",
    ] },
    { kind: "exercice", exemple: "245 = 2 c 4 d 5 u", consigne: "Complète.", items: [
      "Dans 100, il y a ___ dizaines.", "Dans 1 000, il y a ___ centaines.",
      "453 = ___ c ___ d ___ u.", "608 = ___ c ___ d ___ u.",
    ] },
    { kind: "exercice", exemple: "230 – 203 – 320 → 203 < 230 < 320", consigne: "Range chaque liste du plus petit au plus grand.", items: [
      "903 – 309 – 930 – 390 → ____________________", "540 – 405 – 450 – 504 → ____________________",
    ] },
    { kind: "exercice", aide: "attention aux retenues !", exemple: "349 → 350", consigne: "Écris le nombre qui vient juste après.", items: [
      "199 → ____", "709 → ____", "890 → ____", "999 → ____",
    ] },
  ],
};

/* ============================ HISTOIRE — Le temps ============================ */

const HIST_SUPPORT: FicheData = {
  entete: "Affichage (TBI)", titre: "Objets d'hier et d'aujourd'hui", niveau: "CE1-CE2", discipline: "Questionner le monde — Le temps", cursive: true,
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

const EPS_TOURS: FicheData = {
  entete: "Fiche binôme (à deux)", titre: "Course longue — je compte les tours de mon binôme", niveau: "CE1-CE2", discipline: "EPS — courir longtemps",
  blocs: [
    { kind: "champs", items: ["Prénom élève A", "Prénom élève B"] },
    { kind: "def", picto: "saut", contenu: "On court chacun son tour. Quand ton camarade termine un tour, tu entoures un trait sur SA ligne. À la fin, on compte les traits entourés : c'est son nombre de tours. Ensuite, on échange les rôles." },
    { kind: "champs", items: ["1) Élève A court — élève B compte"] },
    { kind: "traits", n: 40 },
    { kind: "champs", items: ["Total des tours de l'élève A"] },
    { kind: "champs", items: ["2) On échange : élève B court — élève A compte"] },
    { kind: "traits", n: 40 },
    { kind: "champs", items: ["Total des tours de l'élève B"] },
  ],
};

/* ===================== MATHS — Comparer les nombres ===================== */

const COMP_CE1_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "Comparer les nombres", niveau: "CE1", discipline: "Mathématiques — Nombres", cursive: true,
  blocs: [
    { kind: "def", contenu: "Comparer, c'est dire quel nombre est le plus grand. La bouche s'ouvre toujours vers le plus grand : < (plus petit que), > (plus grand que), = (égal)." },
    { kind: "wiki", title: "Crocodile", alt: "un crocodile", height: "24mm", legende: "La bouche du crocodile s'ouvre toujours vers le plus GRAND nombre : 3 < 8." },
    { kind: "comparer", a: 47, b: 52, signe: "<" },
    { kind: "puces", titre: "Ma méthode", points: [
      "Je compare d'abord les dizaines.",
      "Si elles sont égales, je compare les unités.",
    ] },
  ],
};

const COMP_CE2_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "Comparer les nombres jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres", cursive: true,
  blocs: [
    { kind: "def", contenu: "Je compare rang par rang : les centaines, puis les dizaines, puis les unités. La bouche s'ouvre vers le plus grand : <, >, =." },
    { kind: "wiki", title: "Crocodile", alt: "un crocodile", height: "24mm", legende: "La bouche s'ouvre vers le plus GRAND : 246 < 254." },
    { kind: "comparer", a: 246, b: 254, signe: "<", cdu: true },
    { kind: "puces", titre: "Je sais aussi", points: [
      "ranger : 309 < 390 < 903 ;",
      "encadrer : 340 < 347 < 350.",
    ] },
  ],
};

const COMP_EX_CE1: FicheData = {
  entete: "Exercices", titre: "Comparer les nombres", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "wiki", title: "Crocodile", alt: "un crocodile", height: "22mm", legende: "Rappel : la bouche du crocodile s'ouvre vers le plus GRAND nombre." },
    { kind: "exercice", exemple: "24 < 42", aide: "la bouche vers le plus grand", consigne: "Compare avec < ou >.", items: [
      "37 ____ 73", "58 ____ 52", "90 ____ 19", "46 ____ 64", "81 ____ 78", "25 ____ 30",
    ] },
    { kind: "exercice", exemple: "45 < ___ → 45 < 50", consigne: "Complète avec un nombre qui convient.", items: [
      "32 < ______", "67 > ______", "______ < 80", "______ > 54",
    ] },
    { kind: "exercice", exemple: "23 – 32 – 13 → 13 < 23 < 32", consigne: "Range du plus petit au plus grand.", items: [
      "45 – 54 – 15 → ______________", "70 – 17 – 71 → ______________",
    ] },
  ],
};

const COMP_CE2_AUTO: FicheData = {
  entete: "Fichier autonomie", titre: "Comparer les nombres jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres (Tandem)",
  blocs: [
    { kind: "wiki", title: "Crocodile", alt: "un crocodile", height: "20mm", legende: "Rappel : la bouche s'ouvre vers le plus GRAND ; je compare rang par rang." },
    { kind: "exercice", exemple: "426 < 462", aide: "centaines, puis dizaines, puis unités", consigne: "Compare avec le bon signe : < ou >.", items: [
      "703 ____ 307", "289 ____ 156", "98 ____ 201", "471 ____ 198", "777 ____ 707", "931 ____ 899",
    ] },
    { kind: "exercice", picto: "fleche", exemple: "125 < ___ → 125 < 130", consigne: "Complète avec un nombre qui convient.", items: [
      "142 < ______", "317 > ______", "______ < 590", "______ > 898",
    ] },
    { kind: "exercice", exemple: "309 – 390 – 903 → 309 < 390 < 903", consigne: "Range du plus petit au plus grand.", items: [
      "540 – 405 – 450 – 504 → ____________________",
      "812 – 128 – 281 – 218 → ____________________",
    ] },
    { kind: "exercice", exemple: "340 < 347 < 350", aide: "la dizaine avant / après", consigne: "Encadre chaque nombre.", items: [
      "______ < 508 < ______", "______ < 690 < ______",
    ] },
  ],
};

/* ===================== FRANÇAIS — Dictées (Graphémo) ===================== */

const DICTEE_DIAG: FicheData = {
  entete: "Dictée diagnostique — à lire", titre: "Dictée diagnostique — Thème 1", niveau: "CE1-CE2", discipline: "Français — Orthographe (Graphémo)",
  blocs: [
    { kind: "def", picto: "plume", contenu: "Semaine 1 de Graphémo : la dictée diagnostique me sert à situer chaque élève. On la refera en semaine 7 pour mesurer les progrès. Je dicte lentement, deux fois ; je ne corrige pas devant eux (c'est un repère pour moi)." },
    { kind: "puces", titre: "Le texte à dicter (Thème 1)", points: [
      "La classe des enfants est très belle.",
      "Les garçons racontent des blagues dans la cour de l'école.",
      "Les élèves travaillent avec de beaux cahiers neufs et des trousses bien remplies.",
    ] },
    { kind: "exemples", titre: "Ce que j'observe (points évalués)", points: [
      "Mots fréquents : la classe, un enfant, très, la cour, l'école, bien.",
      "Valeurs des lettres c, g et s.",
      "Graphèmes complexes : belle, raconter, travailler, rempli, neuf.",
      "Accords dans le groupe nominal : les garçons, des blagues, de beaux cahiers neufs, des trousses remplies.",
      "Accord sujet-verbe : la classe est ; les garçons racontent ; les élèves travaillent.",
    ] },
  ],
};

const DICTEE_MONDE1: FicheData = {
  entete: "Dictée — à lire", titre: "Dictée n°1 — Autour du monde : l'Italie", niveau: "CE1-CE2", discipline: "Français — Orthographe (projet Autour du monde)",
  blocs: [
    { kind: "def", picto: "valise", contenu: "Chaque semaine, une petite dictée sur notre voyage. Aujourd'hui : l'Italie ! Je prépare d'abord les mots avec les élèves, puis je dicte lentement." },
    { kind: "puces", titre: "Les mots à préparer ensemble", points: ["l'Italie", "Rome", "un monument", "le Colisée", "des pâtes", "un voyage"] },
    { kind: "puces", titre: "La dictée (CE1 : les 2 premières phrases · CE2 : tout)", points: [
      "Nous partons en voyage en Italie.",
      "À Rome, nous visitons un grand monument : le Colisée.",
      "Le soir, nous mangeons de bonnes pâtes.",
    ] },
  ],
};

/* Lundi 21 — Première dictée « maison », différenciée CE1/CE2 (côté enseignant). */
const DICTEE_L21_LIRE: FicheData = {
  entete: "Dictée du lundi — à lire (côté enseignant)", titre: "Première dictée — CE1 & CE2", niveau: "CE1-CE2", discipline: "Français — Orthographe (dictée maison)",
  blocs: [
    { kind: "def", picto: "plume", contenu: "On révise d'abord les mots ensemble (je lis, on épelle les pièges), puis je dicte lentement, deux fois. CE1 et CE2 ont une dictée différente. Les phrases restent de mon côté (pas sur la feuille élève)." },
    { kind: "puces", titre: "Mots à réviser ensemble", points: [
      "CE1 : la rentrée · la classe · un copain · l'école · la maîtresse · content",
      "CE2 en plus : le cartable · apprendre · ensemble",
    ] },
    { kind: "puces", titre: "Dictée CE1 (mots + 1 phrase)", points: [
      "Les mots : la classe, un copain, l'école.",
      "C'est la rentrée à l'école.",
      "Je suis content dans ma classe.",
    ] },
    { kind: "puces", titre: "Dictée CE2 (2 phrases)", points: [
      "À la rentrée, la maîtresse et les copains apprennent ensemble.",
      "Je range mon cartable dans la classe.",
    ] },
  ],
};

/* Anglais — Leçon « Action verbs » (à coller, cahier violet). */
/* ===================== QLM — Histoire « Lire une frise » & Sciences « Les solides » ===================== */

const SOLIDES_OBS: FicheData = {
  entete: "Fiche d'expérience", titre: "J'observe et je compare des solides", niveau: "CE1-CE2", discipline: "Questionner le monde — Sciences",
  blocs: [
    { kind: "def", picto: "ampoule", contenu: "Je touche chaque objet et je coche ou j'écris ce que j'observe. Un solide garde sa forme : je vérifie s'il est dur ou mou, lisse ou rugueux, lourd ou léger." },
    { kind: "tableau", titre: "Mon tableau d'observation", entetes: ["Objet", "dur / mou", "lisse / rugueux", "lourd / léger"], lignes: [
      ["une éponge", "", "", ""],
      ["le bois", "", "", ""],
      ["la pâte à modeler", "", "", ""],
      ["une pierre", "", "", ""],
      ["le métal", "", "", ""],
    ] },
    { kind: "exercice", exemple: "La pierre est dure et lourde.", consigne: "Écris une phrase pour comparer deux objets.", lignes: 3 },
  ],
};

/* ===================== ANGLAIS — Se présenter (fiche récap) ===================== */
const ANGLAIS_PRESENT_RECAP: FicheData = {
  entete: "Fiche récapitulative (à coller — cahier violet)", titre: "Se présenter et être poli en anglais", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais", cursive: true,
  blocs: [
    { kind: "def", picto: "main", contenu: "En anglais, on se salue, on se présente et on reste poli avec de petites phrases. Voici les phrases utiles et leur traduction." },
    { kind: "pictos", titre: "Se saluer et se présenter", items: [
      { name: "main", label: "Hello! / Hi! = Bonjour ! / Salut !" },
      { name: "oreille", label: "What's your name? = Comment tu t'appelles ?" },
      { name: "plume", label: "My name is… = Je m'appelle…" },
      { name: "coeur", label: "Nice to meet you! = Enchanté(e) !" },
      { name: "sourire", label: "How are you? = Comment ça va ?" },
      { name: "pomme", label: "I'm fine, thank you! = Ça va bien, merci !" },
      { name: "valise", label: "Goodbye! / Bye! = Au revoir !" },
    ] },
    { kind: "pictos", titre: "Les mots de politesse (magic words)", items: [
      { name: "coeur", label: "Please = S'il te plaît" },
      { name: "sourire", label: "Thank you! = Merci !" },
      { name: "main", label: "You're welcome = De rien" },
      { name: "oreille", label: "Sorry = Pardon / Désolé" },
      { name: "plume", label: "Excuse me = Excuse-moi" },
      { name: "pomme", label: "Yes / No = Oui / Non" },
    ] },
    { kind: "puces", titre: "Je m'entraîne à deux (I ask, you answer)", points: [
      "— Hello! What's your name?",
      "— My name is … . Nice to meet you!",
      "— How are you? — I'm fine, thank you!",
      "— Goodbye! — Bye!",
    ] },
    { kind: "exemples", titre: "À écouter (chanson)", points: ["The Beatles — « Hello, Goodbye » : on repère hello et goodbye."] },
  ],
};

/* ===================== ANGLAIS — Dialogue à projeter ===================== */

const ANGLAIS_DIALOGUE: FicheData = {
  entete: "À projeter au tableau", titre: "On se parle en anglais !", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais", cursive: true,
  blocs: [
    { kind: "def", picto: "main", contenu: "On se met par deux. L'un pose la question (A), l'autre répond (B) — à l'oral, sans lire si possible. Puis on échange les rôles. On essaie, ce n'est pas grave si on se trompe !" },
    { kind: "tableau", titre: "Le dialogue (A ↔ B)", entetes: ["A demande", "B répond"], lignes: [
      ["Hello! What's your name?", "Hello! My name is …"],
      ["How are you?", "I'm fine, thank you! And you?"],
      ["Nice to meet you!", "Nice to meet you too!"],
      ["Goodbye!", "Bye! See you!"],
    ] },
    { kind: "puces", titre: "Pour bien faire (good job!)", points: [
      "Je regarde mon camarade dans les yeux.",
      "Je parle fort et lentement.",
      "Je n'oublie pas « please » et « thank you ».",
    ] },
  ],
};

/* ===================== ANGLAIS — « Hello, Goodbye » (Beatles) ===================== */

const ANGLAIS_HELLO_GOODBYE: FicheData = {
  entete: "Anglais — chanson des Beatles (à coller — cahier violet)",
  titre: "« Hello, Goodbye » — The Beatles",
  niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais",
  blocs: [
    { kind: "def", picto: "sourire", contenu: "Les Beatles sont un célèbre groupe anglais. Dans « Hello, Goodbye », ils chantent des mots contraires : bonjour / au revoir, oui / non. On écoute la chanson, on repère les mots, puis on chante le refrain ensemble." },
    { kind: "pictos", titre: "Les mots à connaître (anglais = français)", items: [
      { name: "sourire", label: "Hello = Bonjour" },
      { name: "valise", label: "Goodbye = Au revoir" },
      { name: "pomme", label: "Yes = Oui" },
      { name: "chien", label: "No = Non" },
    ] },
    { kind: "tableau", titre: "Un extrait du refrain (anglais → français)", entetes: ["Anglais", "Français"], lignes: [
      ["You say yes, I say no.", "Tu dis oui, moi je dis non."],
      ["You say stop and I say go.", "Tu dis stop et moi je dis vas-y."],
      ["You say goodbye and I say hello.", "Tu dis au revoir et moi je dis bonjour."],
    ] },
    { kind: "puces", titre: "Les contraires de la chanson", points: [
      "yes (oui) ↔ no (non)",
      "stop (stop) ↔ go (vas-y)",
      "goodbye (au revoir) ↔ hello (bonjour)",
      "high (en haut) ↔ low (en bas)",
    ] },
    { kind: "def", picto: "plume", titre: "Je recopie en anglais", contenu: "You say goodbye and I say hello." },
    { kind: "lignes", n: 3 },
  ],
};

/* ============ FRANÇAIS — Les articles et les déterminants (1,2,3 ÉdL) ============ */

const ARTDET_AFFICHE: FicheData = {
  entete: "Leçon (à projeter)", titre: "Les articles et les déterminants", niveau: "CE1-CE2", discipline: "Français — Grammaire", cursive: true,
  blocs: [
    { kind: "def", picto: "livre", contenu: "Le déterminant est un petit mot placé DEVANT le nom. Il a le même genre (masculin ou féminin) et le même nombre (singulier ou pluriel) que le nom qu'il accompagne. Ex. : le lapin, la voiture, les enfants." },
    { kind: "pictos", titre: "Le déterminant + le nom (exemples)", items: [
      { name: "chat", label: "le chat" },
      { name: "maison", label: "la maison" },
      { name: "oiseau", label: "les oiseaux" },
      { name: "pomme", label: "une pomme" },
    ] },
    { kind: "tableau", titre: "Les articles", entetes: ["", "Masculin singulier", "Féminin singulier", "Pluriel"], lignes: [
      ["Article défini", "le, l'", "la, l'", "les"],
      ["Article indéfini", "un", "une", "des"],
    ] },
    { kind: "puces", titre: "Défini ou indéfini ?", points: [
      "Article défini (le, la, les) : on sait DE QUI ou DE QUOI on parle (on en a déjà parlé). Ex. : le chien de Léa.",
      "Article indéfini (un, une, des) : on ne sait pas encore précisément. Ex. : j'ai vu un chien.",
      "Devant une voyelle ou un h muet, l'article s'élide : l'aigle, l'école, l'horloge.",
    ] },
    { kind: "tableau", titre: "Les autres déterminants", entetes: ["", "Masculin", "Féminin", "Pluriel"], lignes: [
      ["Démonstratifs (je montre)", "ce, cet", "cette", "ces"],
      ["Possessifs (à qui c'est)", "mon, ton, son", "ma, ta, sa", "mes, tes, ses…"],
    ] },
    { kind: "def", picto: "ampoule", titre: "Mon astuce", contenu: "Pour savoir si un mot est un déterminant, j'essaie de le mettre devant un nom : « le … » marche → c'est un article ; « de … » tout seul → ce n'est pas un article." },
  ],
};

const ARTDET_LECON: FicheData = {
  entete: "Leçon à coller (cahier bleu)", titre: "Les articles et les déterminants", niveau: "CE1-CE2", discipline: "Français — Grammaire", cursive: true,
  blocs: [
    { kind: "def", picto: "livre", contenu: "Le déterminant est un petit mot placé devant le nom. Il s'accorde en genre et en nombre avec le nom : le chat, la souris, les oiseaux." },
    { kind: "tableau", entetes: ["", "Masc.", "Fém.", "Pluriel"], lignes: [
      ["défini", "le, l'", "la, l'", "les"],
      ["indéfini", "un", "une", "des"],
      ["autres", "ce, mon…", "cette, ma…", "ces, mes…"],
    ] },
    { kind: "puces", titre: "Je retiens", points: [
      "défini (le, la, les) = on sait de quoi on parle ;",
      "indéfini (un, une, des) = on ne sait pas encore ;",
      "devant une voyelle : l' (l'école).",
    ] },
  ],
};

/* Déterminants — nouvelles feuilles d'entraînement (modèle authentique) */
const DET_ENTRAINE_CE1: FicheData = {
  entete: "Exercices", titre: "Les déterminants", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "chat", exemple: "le chat → j'entoure le", consigne: "Entoure le déterminant dans chaque groupe.", items: [
      "une maison", "les oiseaux", "ma trousse", "des fleurs", "cette voiture", "un ballon",
    ] },
    { kind: "exercice", picto: "pomme", exemple: "___ soleil → le soleil", consigne: "Complète avec le ou la.", items: [
      "___ lune", "___ maîtresse", "___ cartable", "___ pomme", "___ tableau", "___ récréation",
    ] },
    { kind: "exercice", picto: "oiseau", exemple: "le chien → les chiens", consigne: "Récris au pluriel.", items: [
      "une fleur → ______________", "la table → ______________", "un ami → ______________",
    ] },
    { kind: "exercice", picto: "maison", exemple: "____ école → mon école (ou : l'école)", consigne: "Complète chaque nom avec un déterminant qui convient.", items: [
      "______ vélo", "______ amis", "______ image", "______ cahier",
    ] },
  ],
};

const DET_ENTRAINE_CE2: FicheData = {
  entete: "Exercices", titre: "Les déterminants", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "livre", exemple: "Le renard traverse la forêt. → dét. : Le, la ; noms : renard, forêt", consigne: "Souligne le déterminant et entoure le nom.", items: [
      "Une abeille butine des fleurs.", "Mes amis rangent leurs cahiers.", "Cette histoire raconte un voyage.",
    ] },
    { kind: "exercice", exemple: "les élèves → D (défini)", aide: "défini : le/la/les — indéfini : un/une/des", consigne: "Classe : article défini (D) ou indéfini (I) ?", items: [
      "une pomme ___", "le maître ___", "des livres ___", "l'école ___", "un cartable ___",
    ] },
    { kind: "exercice", picto: "cartable", exemple: "le cheval → les chevaux", aide: "il s'accorde avec le nom", consigne: "Récris au pluriel (attention au déterminant).", items: [
      "cette fleur → ______________", "mon crayon → ______________", "un oiseau → ______________",
    ] },
    { kind: "exercice", exemple: "le chien de Léa → ce chien / mon chien", aide: "garde le même sens", consigne: "Remplace le déterminant en gras par un autre qui convient.", items: [
      "**une** voiture rouge → ______________", "**des** oiseaux → ______________", "**la** maison → ______________",
    ] },
    { kind: "exercice", picto: "ampoule", exemple: "______ matin → Ce matin", consigne: "Complète avec un déterminant démonstratif (ce, cet, cette, ces) ou possessif (mon, ma, mes…).", items: [
      "Range ______ affaires.", "Regarde ______ étoile !", "______ enfants jouent dehors.",
    ] },
  ],
};

/* Déterminants — séance 3 : démonstratifs & possessifs */
const DET_DEMOPOS_CE1: FicheData = {
  entete: "Exercices", titre: "Ce, cette, mon, ma…", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "chat", exemple: "___ chat → ce chat", consigne: "Complète avec ce ou cette.", items: [
      "___ chien", "___ maison", "___ fleur", "___ ballon", "___ image", "___ cartable",
    ] },
    { kind: "exercice", picto: "cartable", exemple: "___ trousse (à moi) → ma trousse", consigne: "Complète avec mon, ma ou mes.", items: [
      "___ vélo", "___ affaires", "___ cahier", "___ règle", "___ crayons",
    ] },
    { kind: "exercice", picto: "oiseau", exemple: "Regarde ce chien ! → démonstratif", consigne: "Entoure le déterminant démonstratif (ce, cette, ces).", items: [
      "Ces oiseaux chantent.", "Mon frère joue.", "Cette pomme est rouge.", "Ce livre est grand.",
    ] },
  ],
};

const DET_DEMOPOS_CE2: FicheData = {
  entete: "Exercices", titre: "Démonstratifs & possessifs", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", exemple: "cette fleur → démonstratif ; ma fleur → possessif", consigne: "Classe : démonstratif (D) ou possessif (P) ?", items: [
      "mon sac ___", "ces arbres ___", "ta règle ___", "cette rue ___", "ses amis ___", "cet enfant ___",
    ] },
    { kind: "exercice", picto: "ampoule", exemple: "___ homme → cet homme (devant une voyelle)", consigne: "Complète avec ce ou cet.", items: [
      "___ garçon", "___ arbre", "___ oiseau", "___ chien", "___ éléphant",
    ] },
    { kind: "exercice", picto: "cartable", exemple: "mon crayon → ses crayons (à lui)", consigne: "Récris avec le possessif « à lui/elle » (son, sa, ses).", items: [
      "ma trousse → ______________", "mes livres → ______________", "ton vélo → ______________",
    ] },
    { kind: "exercice", exemple: "… voiture est belle → Cette voiture est belle.", consigne: "Complète chaque phrase avec un démonstratif ou un possessif qui convient.", items: [
      "______ matin, je me lève tôt.", "Range ______ affaires (à toi).", "Regarde ______ étoile !", "______ élèves travaillent bien.",
    ] },
  ],
};

const DET_EVAL: FicheData = {
  entete: "Évaluation", titre: "Les déterminants — Évaluation", niveau: "CE1-CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", exemple: "Le chat dort. → j'entoure Le", consigne: "Entoure tous les déterminants.", items: [
      "Une abeille butine des fleurs.", "Mon frère range ses jouets.", "Cette histoire est belle.",
    ] },
    { kind: "exercice", exemple: "les élèves → défini", consigne: "Article défini (D) ou indéfini (I) ?", items: [
      "un livre ___", "la maîtresse ___", "des crayons ___", "les tables ___",
    ] },
    { kind: "exercice", exemple: "le chien → les chiens", consigne: "Récris au pluriel.", items: [
      "une fleur → ______________", "cette pomme → ______________", "mon cahier → ______________",
    ] },
    { kind: "exercice", exemple: "… chat est noir → Ce chat est noir.", consigne: "Complète avec le déterminant qui convient.", items: [
      "______ école est grande.", "Range ______ affaires (à toi).", "Regarde ______ oiseaux !",
    ] },
  ],
};

/* ===================== MATHS — Nombres (Période 1, suite) ===================== */
// S1 — Construire 100 / 1000
const NB1_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "Construire 100 et 1000", niveau: "CE1-CE2", discipline: "Mathématiques — Nombres (Tandem)", cursive: true,
  blocs: [
    { kind: "def", contenu: "Avec 10 dizaines, je construis 1 centaine : 100. Avec 10 centaines, je construis 1 millier : 1 000." },
    { kind: "base10", dizaines: 10, unites: 0, legende: "10 dizaines = 1 centaine = 100" },
    { kind: "puces", titre: "Je retiens", points: ["100 = 10 dizaines", "1 000 = 10 centaines", "1 000 = 100 dizaines"] },
  ],
};
const NB1_CE1: FicheData = {
  entete: "Exercices", titre: "Construire 100", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "90 + 10 = 100", consigne: "Complète pour arriver à 100.", items: [
      "80 + ___ = 100", "70 + ___ = 100", "___ + 40 = 100", "50 + ___ = 100",
    ] },
    { kind: "exercice", exemple: "10 dizaines = 100", consigne: "Complète.", items: [
      "___ dizaines = 100", "9 dizaines et ___ dizaine = 100", "100 = ___ dizaines",
    ] },
  ],
};
const NB1_CE2: FicheData = {
  entete: "Exercices", titre: "Construire 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "900 + 100 = 1 000", consigne: "Complète pour arriver à 1 000.", items: [
      "800 + ___ = 1 000", "___ + 300 = 1 000", "500 + ___ = 1 000", "990 + ___ = 1 000",
    ] },
    { kind: "exercice", exemple: "10 centaines = 1 000", consigne: "Complète.", items: [
      "___ centaines = 1 000", "1 000 = ___ dizaines", "9 centaines et ___ centaine = 1 000",
    ] },
  ],
};
// S2 — Les nombres en lettres
const NB2_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "Écrire les nombres en lettres", niveau: "CE1-CE2", discipline: "Mathématiques — Nombres (Tandem)", cursive: true,
  blocs: [
    { kind: "tableau", titre: "Les mots à connaître", entetes: ["Nombre", "En lettres"], lignes: [
      ["20", "vingt"], ["60", "soixante"], ["70", "soixante-dix"], ["80", "quatre-vingts"], ["90", "quatre-vingt-dix"], ["100", "cent"],
    ] },
    { kind: "puces", titre: "Je retiens", points: ["71 = soixante et onze", "80 = quatre-vingts (un s) mais 81 = quatre-vingt-un (sans s)", "200 = deux cents ; 203 = deux cent trois"] },
  ],
};
const NB2_CE1: FicheData = {
  entete: "Exercices", titre: "Les nombres en lettres", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "34 → trente-quatre", consigne: "Écris en lettres.", items: ["26 → ______________", "48 → ______________", "72 → ______________", "90 → ______________"] },
    { kind: "exercice", exemple: "cinquante-six → 56", consigne: "Écris en chiffres.", items: ["quarante-trois → ____", "soixante-quinze → ____", "quatre-vingt-un → ____"] },
  ],
};
const NB2_CE2: FicheData = {
  entete: "Exercices", titre: "Les nombres en lettres", niveau: "CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "347 → trois cent quarante-sept", consigne: "Écris en lettres.", items: ["206 → ______________", "480 → ______________", "715 → ______________", "999 → ______________"] },
    { kind: "exercice", exemple: "cinq cent douze → 512", consigne: "Écris en chiffres.", items: ["huit cent quatre → ____", "mille → ____", "deux cent quatre-vingts → ____"] },
  ],
};
// S3 — La suite des nombres jusqu'à 200 / 2000
const NB3_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "La suite des nombres", niveau: "CE1-CE2", discipline: "Mathématiques — Nombres (Tandem)", cursive: true,
  blocs: [
    { kind: "def", contenu: "Je sais dire, lire et écrire la suite des nombres : de 1 en 1, de 10 en 10, de 100 en 100. Chaque nombre a un précédent (juste avant) et un suivant (juste après)." },
    { kind: "puces", titre: "Attention aux passages", points: ["…98, 99, 100, 101…", "…109, 110, 111…", "CE2 : …199, 200, 201… et …1 999, 2 000, 2 001…"] },
  ],
};
const NB3_CE1: FicheData = {
  entete: "Exercices", titre: "La suite jusqu'à 200", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "98 – 99 – 100 – 101", consigne: "Complète la suite (de 1 en 1).", items: ["108 – ___ – ___ – 111", "___ – 150 – ___ – 152", "197 – ___ – ___ – 200"] },
    { kind: "exercice", exemple: "avant 100 : 99 · après 100 : 101", consigne: "Écris le nombre avant et après.", items: ["___ / 130 / ___", "___ / 189 / ___", "___ / 200 / ___"] },
    { kind: "exercice", exemple: "10 – 20 – 30", consigne: "Compte de 10 en 10.", items: ["40 – ___ – ___ – ___", "120 – ___ – ___ – 150"] },
  ],
};
const NB3_CE2: FicheData = {
  entete: "Exercices", titre: "La suite jusqu'à 2 000", niveau: "CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "998 – 999 – 1 000 – 1 001", consigne: "Complète la suite (de 1 en 1).", items: ["1 098 – ___ – ___ – 1 101", "1 998 – ___ – ___ – 2 001", "___ – 1 500 – ___ – 1 502"] },
    { kind: "exercice", exemple: "avant 1 000 : 999 · après : 1 001", consigne: "Écris le nombre avant et après.", items: ["___ / 1 300 / ___", "___ / 1 890 / ___", "___ / 2 000 / ___"] },
    { kind: "exercice", exemple: "100 – 200 – 300", consigne: "Compte de 100 en 100.", items: ["400 – ___ – ___ – ___", "1 200 – ___ – ___ – 1 500"] },
  ],
};
const NB_EVAL: FicheData = {
  entete: "Évaluation", titre: "Nombres — Évaluation (Période 1)", niveau: "CE1-CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "exercice", exemple: "70 + 30 = 100", consigne: "Complète (CE1 : à 100 · CE2 : à 1 000).", items: ["60 + ___ = 100", "___ + 40 = 100", "700 + ___ = 1 000 (CE2)", "___ + 300 = 1 000 (CE2)"] },
    { kind: "exercice", exemple: "48 → quarante-huit", consigne: "Écris en lettres.", items: ["76 → ______________", "90 → ______________", "305 → ______________ (CE2)"] },
    { kind: "exercice", exemple: "98 – 99 – 100 – 101", consigne: "Complète la suite.", items: ["108 – ___ – ___ – 111", "198 – ___ – ___ – 201", "1 998 – ___ – ___ – 2 001 (CE2)"] },
    { kind: "exercice", exemple: "avant/après 130 : 129 / 131", consigne: "Écris le nombre juste avant et juste après.", items: ["___ / 100 / ___", "___ / 200 / ___", "___ / 1 000 / ___ (CE2)"] },
  ],
};

/* ===================== MATHS — Espace & Géométrie (Période 1) ===================== */
// CE1 = se repérer / se déplacer · CE2 = la symétrie (tandem)
const GEO1_LECON: FicheData = {
  entete: "Leçon (à coller)", titre: "Se repérer · La symétrie", niveau: "CE1-CE2", discipline: "Mathématiques — Espace & Géométrie", cursive: true,
  blocs: [
    { kind: "def", titre: "CE1 — se repérer", contenu: "Pour dire où se trouve un objet, j'utilise les mots de l'espace : à gauche, à droite, devant, derrière, au-dessus, en dessous, entre, à côté de. Le plan, c'est la vue de dessus." },
    { kind: "wiki", title: "Rose des vents", alt: "une rose des vents (les directions)", height: "24mm", legende: "Je me repère avec les mots de l'espace : gauche/droite, devant/derrière." },
    { kind: "def", titre: "CE2 — la symétrie", contenu: "Deux parties sont symétriques quand elles sont pareilles de chaque côté d'un trait : l'axe de symétrie. Comme dans un miroir, ou en pliant la feuille sur l'axe. Une figure peut avoir plusieurs axes." },
    { kind: "wiki", title: "Papillon", alt: "un papillon symétrique", height: "26mm", legende: "Le papillon est symétrique : en pliant sur l'axe, les deux ailes se superposent." },
  ],
};
const GEO1_CE1: FicheData = {
  entete: "Exercices", titre: "Se repérer dans l'école", niveau: "CE1", discipline: "Mathématiques — Espace",
  blocs: [
    { kind: "exercice", exemple: "Le tableau est DEVANT moi.", consigne: "Complète avec un mot de l'espace (à gauche, à droite, devant, derrière…).", items: [
      "La porte est ______________ de la classe.", "Mon cahier est ______________ ma table.", "La cour est ______________ l'école.",
    ] },
    { kind: "exercice", consigne: "Dessine le plan de ta table : place ta trousse, ton cahier et ton crayon (écris à gauche / à droite).", lignes: 6 },
  ],
};
const GEO1_CE2: FicheData = {
  entete: "Exercices", titre: "La symétrie", niveau: "CE2", discipline: "Mathématiques — Géométrie",
  blocs: [
    { kind: "def", contenu: "Sur du quadrillage, je complète l'autre moitié en comptant les carreaux de chaque côté de l'axe (comme dans un miroir)." },
    { kind: "exercice", exemple: "Je compte : 3 carreaux à gauche → 3 carreaux à droite.", consigne: "Colorie « oui » si le trait est un axe de symétrie, « non » sinon.", items: [
      "un cœur plié en deux → oui / non", "la lettre A → oui / non", "la lettre F → oui / non", "un papillon → oui / non",
    ] },
    { kind: "exercice", consigne: "Sur ton cahier de quadrillage, trace l'axe puis complète la figure symétrique (donnée par le maître).", lignes: 4 },
  ],
};
const GEO2_CE1: FicheData = {
  entete: "Exercices", titre: "Se repérer dans le quartier", niveau: "CE1", discipline: "Mathématiques — Espace",
  blocs: [
    { kind: "exercice", exemple: "Pour aller à l'école, je tourne à droite après la boulangerie.", consigne: "Complète le trajet avec à gauche / à droite / tout droit.", items: [
      "Je sors, je vais ______________.", "Au feu, je tourne ______________.", "L'école est ______________ le parc.",
    ] },
    { kind: "exercice", consigne: "Dessine le trajet de ta maison à l'école (les rues, les repères).", lignes: 6 },
  ],
};
const GEO2_CE2: FicheData = {
  entete: "Exercices", titre: "Compléter par symétrie (1)", niveau: "CE2", discipline: "Mathématiques — Géométrie",
  blocs: [
    { kind: "exercice", exemple: "Point à 2 carreaux à gauche de l'axe → point à 2 carreaux à droite.", consigne: "Sur quadrillage, complète chaque figure par symétrie (axe vertical).", lignes: 6 },
    { kind: "exercice", exemple: "Je vérifie en pliant sur l'axe.", consigne: "Coche : ma figure est-elle bien symétrique ? Explique.", lignes: 3 },
  ],
};
const GEO3_CE1: FicheData = {
  entete: "Exercices", titre: "Se déplacer sur un plan", niveau: "CE1", discipline: "Mathématiques — Espace",
  blocs: [
    { kind: "exercice", exemple: "Case A1 → je vais à droite jusqu'à B1.", consigne: "Sur le quadrillage-plan, suis le déplacement (droite/gauche/haut/bas).", lignes: 6 },
    { kind: "exercice", consigne: "Écris le chemin pour aller de la maison à l'école (en cases).", lignes: 3 },
  ],
};
const GEO3_CE2: FicheData = {
  entete: "Exercices", titre: "Compléter par symétrie (2)", niveau: "CE2", discipline: "Mathématiques — Géométrie",
  blocs: [
    { kind: "exercice", exemple: "Axe horizontal : je descends autant que je monte.", consigne: "Complète les figures par symétrie (axe horizontal, puis oblique).", lignes: 6 },
    { kind: "exercice", consigne: "Invente une figure et son symétrique sur le quadrillage.", lignes: 3 },
  ],
};
const GEO_EVAL: FicheData = {
  entete: "Évaluation", titre: "Espace & Géométrie — Évaluation (P1)", niveau: "CE1-CE2", discipline: "Mathématiques — Espace & Géométrie",
  blocs: [
    { kind: "exercice", exemple: "Le crayon est À GAUCHE du cahier.", consigne: "CE1 — Complète avec un mot de l'espace.", items: ["La règle est ______________ la trousse.", "Le tableau est ______________ moi."] },
    { kind: "exercice", consigne: "CE1 — Suis le déplacement sur le quadrillage-plan (donné par le maître).", lignes: 3 },
    { kind: "exercice", exemple: "Je compte les carreaux de chaque côté de l'axe.", consigne: "CE2 — Complète la figure par symétrie (axe vertical).", lignes: 5 },
    { kind: "exercice", consigne: "CE2 — Le trait est-il un axe de symétrie ? Justifie.", lignes: 3 },
  ],
};

/* ===================== FRANÇAIS — Le nom (séquence) ===================== */
const NOM_S1_CE1: FicheData = {
  entete: "Exercices", titre: "Le nom", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "chat", exemple: "Le chat dort. → j'entoure chat", consigne: "Entoure le nom dans chaque phrase.", items: [
      "La maîtresse écrit.", "Un oiseau chante.", "Léa mange une pomme.", "Le vélo roule vite.",
    ] },
    { kind: "exercice", picto: "maison", exemple: "un animal → un chien", consigne: "Écris un nom pour chaque dessin (ou idée).", items: [
      "une personne → ______________", "un animal → ______________", "une chose → ______________", "un lieu → ______________",
    ] },
    { kind: "exercice", picto: "pomme", exemple: "Je range mon ___ → cartable", consigne: "Complète chaque phrase avec un nom.", items: [
      "Je mange une ______________.", "Le ______________ aboie.", "Nous allons à l'______________.",
    ] },
  ],
};
const NOM_S1_CE2: FicheData = {
  entete: "Exercices", titre: "Le nom", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "livre", exemple: "Le chien de Léa. → chien (commun), Léa (propre)", consigne: "Souligne les noms et écris C (commun) ou P (propre).", items: [
      "Médor court dans le jardin.", "Ma sœur habite à Lyon.", "Les élèves lisent un livre.",
    ] },
    { kind: "exercice", exemple: "un animal : le chat, le lapin", consigne: "Trouve 2 noms pour chaque famille.", items: [
      "une personne : ______________", "un animal : ______________", "un lieu : ______________", "une chose : ______________",
    ] },
    { kind: "exercice", picto: "cartable", exemple: "Le maître écrit. → Le boulanger écrit.", consigne: "Remplace le nom souligné par un autre nom.", items: [
      "Le _chat_ dort.", "Nous visitons _Paris_.", "Je lis un _livre_.",
    ] },
  ],
};
const NOM_S2_CE1: FicheData = {
  entete: "Exercices", titre: "Le nom propre (la majuscule)", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", picto: "maison", exemple: "léa habite à paris → Léa habite à Paris", consigne: "Récris en mettant la majuscule aux noms propres.", items: [
      "médor est un chien.", "je vais à lyon.", "mon amie s'appelle jade.",
    ] },
    { kind: "exercice", picto: "oiseau", exemple: "un chat / Léa → j'entoure Léa", consigne: "Entoure seulement les noms propres.", items: [
      "chien · Médor · maison", "Paris · ville · école", "Jade · fille · Lucas",
    ] },
  ],
};
const NOM_S2_CE2: FicheData = {
  entete: "Exercices", titre: "Nom commun / nom propre", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", exemple: "la ville → commun ; Paris → propre", consigne: "Classe : nom commun (C) ou nom propre (P) ?", items: [
      "un chien ___", "Médor ___", "la France ___", "une école ___", "Saint-Étienne ___",
    ] },
    { kind: "exercice", exemple: "lucas joue au foot. → Lucas joue au foot.", consigne: "Corrige : ajoute les majuscules oubliées.", items: [
      "la maîtresse s'appelle madame durand.", "nous partons en italie.", "le fleuve loire traverse la ville.",
    ] },
    { kind: "exercice", exemple: "une ville → Lyon", consigne: "Écris un nom propre pour chaque.", items: [
      "un prénom → ______________", "une ville → ______________", "un pays → ______________",
    ] },
  ],
};
const NOM_S3: FicheData = {
  entete: "Exercices", titre: "Le nom : genre & nombre", niveau: "CE1-CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", exemple: "___ table → une table (féminin)", consigne: "Complète avec un ou une, puis écris (m.) ou (f.).", items: [
      "___ chat", "___ maison", "___ soleil", "___ école", "___ ballon", "___ fleur",
    ] },
    { kind: "exercice", exemple: "un chat → des chats", consigne: "Écris chaque nom au pluriel.", items: [
      "une fleur → ______________", "le livre → ______________", "un ami → ______________", "la table → ______________",
    ] },
    { kind: "exercice", exemple: "un cheval → des chevaux (CE2)", consigne: "CE2 : écris au pluriel (attention !).", items: [
      "un animal → ______________", "un journal → ______________", "un jeu → ______________",
    ] },
  ],
};
const NOM_EVAL: FicheData = {
  entete: "Évaluation", titre: "Le nom — Évaluation", niveau: "CE1-CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", exemple: "Le chat dort. → j'entoure chat", consigne: "Entoure tous les noms.", items: [
      "Léa range ses livres.", "Le chien court dans le jardin.", "Nous visitons Paris.",
    ] },
    { kind: "exercice", exemple: "la ville → C ; Paris → P", consigne: "Nom commun (C) ou nom propre (P) ?", items: [
      "un arbre ___", "Médor ___", "la France ___", "une école ___",
    ] },
    { kind: "exercice", exemple: "jade habite à nice → Jade habite à Nice", consigne: "Ajoute les majuscules oubliées.", items: [
      "mon ami lucas vient de lyon.",
    ] },
    { kind: "exercice", exemple: "un chat → des chats", consigne: "Écris au pluriel.", items: [
      "une fleur → ______________", "le cheval → ______________", "un jeu → ______________",
    ] },
  ],
};

/* ===================== EMC — La solidarité ===================== */

const EMC_SOLIDARITE: FicheData = {
  entete: "Séance (affichage + trace)", titre: "La solidarité", niveau: "CE1-CE2", discipline: "EMC — la sensibilité (soi et les autres)", cursive: true,
  blocs: [
    { kind: "def", picto: "coeur", contenu: "Être solidaire, c'est s'entraider : quand un camarade a besoin d'aide, je l'aide ; quand j'ai un problème, les autres m'aident." },
    { kind: "pictos", titre: "Des gestes solidaires", items: [
      { name: "pomme", label: "partager" },
      { name: "oreille", label: "écouter" },
      { name: "main", label: "prêter, aider" },
      { name: "coeur", label: "consoler" },
      { name: "livre", label: "expliquer" },
      { name: "fleur", label: "inviter à jouer" },
    ] },
    { kind: "puces", titre: "Dans notre classe, je suis solidaire quand…", points: [
      "j'aide sans faire à la place de l'autre ;",
      "je prête mon matériel et je console un camarade triste ;",
      "je ne me moque jamais et j'invite celui qui est seul.",
    ] },
    { kind: "def", picto: "fleur", titre: "Ma trace", contenu: "Je dessine ou j'écris un geste solidaire que je ferai cette semaine." },
    { kind: "lignes", n: 2 },
  ],
};

/* ===================== EPS — Séquence athlétisme P1 (fiches terrain) ===================== */

const SEC_RUN = {
  active: ["Échauffement progressif (trottiner, mobiliser les articulations).", "Signal d'arrêt unique (bras levé), testé avant de commencer.", "Allure adaptée ; lacets serrés, gourde d'eau."],
  passive: ["Terrain plat, dégagé, sans obstacle ni flaque.", "Plots bien visibles, couloirs délimités.", "Sens de course unique ; trousse de secours à portée."],
  affective: ["Pas de classement : chacun contre son propre défi.", "Droit de ralentir / marcher sans être jugé.", "Binôme bienveillant : on encourage, on ne se moque pas."],
};
const SEC_THROW = {
  active: ["Échauffement des épaules et des bras.", "On lance TOUS au signal, on ramasse TOUS au signal.", "Geste maîtrisé, on ne lance jamais vers quelqu'un."],
  passive: ["Zone de lancer dégagée et interdite pendant les lancers.", "Personne devant la ligne de lancer.", "Engins souples (vortex, balles lestées)."],
  affective: ["Chacun vise à battre SON record.", "On félicite les progrès, pas seulement la distance.", "Rôles tournants : lanceur, juge, ramasseur."],
};

// Cour en BÉTON : pas de saut avec réception (dangereux). La séquence P1 se
// concentre sur COURIR et LANCER (compatibles béton), en découverte →
// consolidation → évaluation. Le saut sera travaillé plus tard (tapis / herbe / salle).
const SEC_SPRINT_ACTIVE = ["Échauffement + montées de genoux, talons-fesses.", "Départs au signal seulement (pas de faux départ dangereux).", "On ralentit APRÈS la ligne d'arrivée (plot 2 m après)."];

const EPS_SEQ: Record<string, EpsFiche> = {
  epsp1s1: {
    variant: "courseLongue", titre: "EPS — Découverte : courir longtemps", sousTitre: "Athlétisme · P1 · S1 (découverte) · lun. 7 sept.",
    dispositif: ["Boucle balisée ≈ 100 m, un plot tous les 25 m.", "Jeu du contrat : courir sans s'arrêter (4 à 8 min).", "Binômes : l'un court, l'autre compte les tours puis on échange.", "Matériel : plots, chronomètre, fiche binôme."],
    ...SEC_RUN,
  },
  epsp1s2: {
    variant: "courseLongue", titre: "EPS — Consolidation : courir longtemps (allure)", sousTitre: "Athlétisme · P1 · S2 (consolidation) · mar. 8 sept.",
    dispositif: ["Même boucle qu'en S1.", "But : tenir une allure RÉGULIÈRE et battre son contrat de S1.", "Zone de marche pour récupérer sans cesser de jouer.", "Matériel : plots, chronomètre, fiche binôme."],
    ...SEC_RUN,
  },
  epsp1s3: {
    variant: "vitesse", titre: "EPS — Découverte : courir vite", sousTitre: "Athlétisme · P1 · S3 (découverte) · lun. 14 sept.",
    dispositif: ["3-4 couloirs parallèles de ≈ 25 m.", "Jeux de réaction : « les sorciers », départs variés (assis, dos tourné) au signal.", "Un starter, un juge d'arrivée ; on court par vagues de 3-4.", "Matériel : plots de départ/arrivée, sifflet ou cartons de couleur."],
    active: SEC_SPRINT_ACTIVE, passive: SEC_RUN.passive, affective: SEC_RUN.affective,
  },
  epsp1s4: {
    variant: "relais", titre: "EPS — Consolidation : relais (vitesse & coopération)", sousTitre: "Athlétisme · P1 · S4 (consolidation) · mar. 15 sept.",
    dispositif: ["Relais navette par équipes mixtes CE1-CE2.", "Le témoin se passe dans la ZONE jaune (main tendue).", "Relais-défi entre 2-3 équipes.", "Matériel : témoins (foulards), plots de virage."],
    active: ["Échauffement + passages de témoin à l'arrêt puis en marchant.", "On regarde devant en courant, on tend la main en arrière.", "Pas de bousculade dans la zone de passage."],
    passive: SEC_RUN.passive, affective: ["Toute l'équipe gagne ensemble : on s'encourage.", "On accepte de gagner ou de perdre, on se félicite.", "Rôles équilibrés dans l'équipe."],
  },
  epsp1s5: {
    variant: "lancer", titre: "EPS — Découverte : lancer loin", sousTitre: "Athlétisme · P1 · S5 (découverte) · lun. 21 sept.",
    dispositif: ["Zone d'élan derrière la ligne de lancer + arcs de distance 1-2-3.", "On découvre plusieurs engins (vortex, balle lestée, anneau).", "On lance TOUS au signal, on ramasse TOUS au signal.", "Matériel : vortex, balles lestées, plots, cordes de zones."],
    ...SEC_THROW,
  },
  epsp1s6: {
    variant: "lancer", titre: "EPS — Consolidation : lancer loin (technique)", sousTitre: "Athlétisme · P1 · S6 (consolidation) · mar. 22 sept.",
    dispositif: ["Ligne de lancer + zones 1-2-3.", "Geste « bras cassé », lancer haut et loin ; on vise sa meilleure zone.", "Rôles tournants : lanceur, juge de zone, ramasseur.", "Matériel : vortex, balles lestées, plots, cordes de zones."],
    ...SEC_THROW,
  },
  epsp1s7: {
    variant: "ateliers", titre: "EPS — Évaluation : rencontre athlétique", sousTitre: "Athlétisme · P1 · S7 (évaluation) · lun. 28 sept.",
    dispositif: ["3 ateliers en équipes : ① vitesse (sprint chronométré), ② endurance (contrat de course), ③ lancer (distance mesurée).", "Chacun note son meilleur essai à chaque atelier (fiche perso).", "Rotation des équipes au signal ; rôles de juge tournants.", "Matériel : plots, chronomètre, vortex/balles, fiche résultats."],
    active: ["Échauffement complet avant la rencontre.", "Règles de sécurité rappelées à chaque atelier (lancer : au signal).", "On respecte le signal de rotation."],
    passive: ["Ateliers bien séparés dans l'espace.", "Zone de lancer isolée et surveillée.", "Sol dégagé, plots visibles."],
    affective: ["On évalue les PROGRÈS de chacun (par rapport à soi).", "On encourage toutes les équipes.", "On valorise l'effort, l'entraide et le respect des règles."],
  },
};

/* ============ QLM — Histoire séance 2 : mesurer le temps ============ */
/* La leçon et la frise sont dans MesurerTempsDiapo.tsx (mise en page soignée,
   frise réelle + chiffres romains IV/XIX), plus le diaporama à projeter. */

/* ============ MATHS — Fichier autonomie CE2 : dénombrer jusqu'à 1000 (2 pages) ============ */

const DENOMBRE_CE2_2P: FicheData = {
  entete: "Fichier autonomie (2 pages)", titre: "Dénombrer les collections jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres (Tandem)",
  competences: [
    "grouper par centaines, dizaines, unités", "écrire le nombre représenté", "décomposer un nombre",
    "compléter c / d / u", "comparer avec < et >", "ranger des nombres", "encadrer un nombre", "trouver le nombre juste après",
  ],
  blocs: [
    { kind: "def", titre: "Je me rappelle", contenu: "Je groupe par 100 (plaques), par 10 (barres) et je compte les unités (cubes). 100 = 10 dizaines ; 1000 = 10 centaines." },
    { kind: "base10", centaines: 3, dizaines: 5, unites: 2, legende: "3 plaques, 5 barres, 2 cubes" },
    { kind: "exercice", aide: "c · d · u", exemple: "2 centaines, 1 dizaine, 3 unités = 213", consigne: "Écris le nombre représenté.", items: [
      "3 centaines, 5 dizaines, 2 unités = ____", "6 centaines, 0 dizaine, 4 unités = ____",
      "2 centaines, 8 dizaines, 9 unités = ____", "4 centaines, 4 dizaines, 4 unités = ____",
    ] },
    { kind: "exercice", aide: "347 = 300 + 40 + 7", consigne: "Décompose chaque nombre.", items: [
      "582 = ______________", "706 = ______________", "250 = ______________", "419 = ______________",
    ] },
    { kind: "base10", centaines: 2, dizaines: 3, unites: 6, legende: "combien de cubes en tout ?" },
    { kind: "exercice", consigne: "Complète.", items: [
      "Dans 100, il y a ___ dizaines.", "Dans 1 000, il y a ___ centaines.",
      "453 = ___ c ___ d ___ u.", "608 = ___ c ___ d ___ u.",
    ] },
    { kind: "pagebreak", label: "PAGE 2" },
    { kind: "exercice", aide: "je compare rang par rang", exemple: "318 < 381", consigne: "Compare avec < ou >.", items: [
      "426 ____ 462", "703 ____ 307", "289 ____ 156", "540 ____ 504",
    ] },
    { kind: "exercice", consigne: "Range chaque liste du plus petit au plus grand.", items: [
      "903 – 309 – 930 – 390 → ____________________", "540 – 405 – 450 – 504 → ____________________",
    ] },
    { kind: "exercice", aide: "la centaine avant / après", exemple: "200 < 254 < 300", consigne: "Encadre chaque nombre entre deux centaines.", items: [
      "____ < 347 < ____", "____ < 508 < ____", "____ < 690 < ____",
    ] },
    { kind: "exercice", aide: "attention aux retenues !", consigne: "Écris le nombre qui vient juste après.", items: [
      "199 → ____", "709 → ____", "890 → ____", "999 → ____",
    ] },
  ],
};

/* ============ MATHS — Coloriage magique CE1 (calcul → couleur) ============ */


export function supportsForActivity(activityId: string): SupportFourni[] {
  if (activityId in EPS_SEQ) {
    const f = EPS_SEQ[activityId];
    const list: SupportFourni[] = [
      { key: activityId + "-terrain", label: "Fiche de mise en place (terrain, matériel, sécurité)", node: EpsTerrainSupport(f) },
    ];
    if (f.variant === "courseLongue")
      list.push({ key: activityId + "-binome", label: "Fiche binôme — compter les tours (élève A puis B)", node: ficheNode(EPS_TOURS) });
    return list;
  }
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
    case "l8eps":
      return [
        { key: "eps-tours", label: "Course — fiche binôme (compter les tours)", node: ficheNode(EPS_TOURS) },
      ];
    case "m2comp":
      return [
        { key: "comp-ce1-lecon", label: "Comparer les nombres — Leçon CE1 (à projeter)", node: ficheNode(COMP_CE1_LECON) },
        { key: "comp-ce2-lecon", label: "Comparer les nombres — Leçon CE2 (va plus loin)", node: ficheNode(COMP_CE2_LECON) },
        { key: "comp-ce2-auto", label: "Comparer les nombres — Fichier autonomie CE2", node: ficheNode(COMP_CE2_AUTO) },
      ];
    case "dictdiag":
      return [
        { key: "dictee-diag", label: "Dictée diagnostique Graphémo — Thème 1 (à lire)", node: ficheNode(DICTEE_DIAG) },
      ];
    case "dictmonde":
      return [
        { key: "dictee-monde1", label: "Dictée n°1 Autour du monde — Italie (à lire)", node: ficheNode(DICTEE_MONDE1) },
      ];
    case "epsathle2":
      return [
        { key: "eps-terrain-s2", label: "Courir longtemps (séance 2) — schéma du terrain & sécurité", node: EpsTerrainSupport() },
        { key: "eps-tours", label: "Fiche binôme — compter les tours (élève A puis B)", node: ficheNode(EPS_TOURS) },
      ];
    case "l14eps":
    case "m15eps":
      return [
        { key: "eps-s3-seance", label: "Séance « courir vite » — la séance mise en page (à lire d'un coup d'œil)", node: <EpsSeanceFiche data={EPS_COURIR_VITE_S3} /> },
        { key: "eps-s3-terrain", label: "Séance « courir vite » — schéma du terrain & sécurité", node: EpsTerrainSupport(EPS_SEQ.epsp1s3) },
      ];
    case "l21eps":
      return [
        { key: "eps-carres-l21", label: "Séance « les petits carrés » — la séance mise en page (à lire d'un coup d'œil)", node: <EpsSeanceFiche data={EPS_COURIR_CARRES_L21} /> },
        { key: "eps-carres-l21-terrain", label: "Courir longtemps — schéma de la boucle & sécurité", node: EpsTerrainSupport(EPS_SEQ.epsp1s1) },
      ];
    case "m22eps":
      return [
        { key: "eps-carres-m22", label: "Séance « je bats mon record » — la séance mise en page", node: <EpsSeanceFiche data={EPS_COURIR_CARRES_M22} /> },
        { key: "eps-carres-m22-terrain", label: "Courir longtemps — schéma de la boucle & sécurité", node: EpsTerrainSupport(EPS_SEQ.epsp1s1) },
      ];
    case "detS1":
      return [
        { key: "det-s1-lecon", label: "Séance 1 — Leçon : qu'est-ce qu'un déterminant ?", node: <DeterminantsLecon /> },
        { key: "det-s1-ce1", label: "Séance 1 — Exercices CE1", node: ficheNode(DET_ENTRAINE_CE1) },
        { key: "det-s1-ce2", label: "Séance 1 — Exercices CE2", node: ficheNode(DET_ENTRAINE_CE2) },
      ];
    case "detS2":
      return [
        { key: "det-s2-lecon", label: "Séance 2 — Leçon : les articles (le/la/les · un/une/des)", node: ficheNode(ARTDET_LECON) },
        { key: "det-s2-ce1", label: "Séance 2 — Exercices CE1 (articles)", node: ficheNode(DET_ENTRAINE_CE1) },
        { key: "det-s2-ce2", label: "Séance 2 — Exercices CE2 (défini/indéfini)", node: ficheNode(DET_ENTRAINE_CE2) },
      ];
    case "detS3":
      return [
        { key: "det-s3-diapo", label: "Séance 3 — Diaporama à projeter (démonstratifs & possessifs)", node: <DeterminantsDemoPossDiapo /> },
        { key: "det-s3-lecon", label: "Séance 3 — Leçon : démonstratifs & possessifs", node: <DeterminantsDemoPossLecon /> },
        { key: "det-s3-ce1", label: "Séance 3 — Exercices CE1", node: ficheNode(DET_DEMOPOS_CE1) },
        { key: "det-s3-ce2", label: "Séance 3 — Exercices CE2", node: ficheNode(DET_DEMOPOS_CE2) },
      ];
    case "detS4":
      return [
        { key: "det-s4-eval", label: "Séance 4 — Évaluation : les déterminants", node: ficheNode(DET_EVAL) },
        { key: "det-s4-ce1", label: "Séance 4 — Sinon, entraînement CE1", node: ficheNode(DET_ENTRAINE_CE1) },
        { key: "det-s4-ce2", label: "Séance 4 — Sinon, entraînement CE2", node: ficheNode(DET_ENTRAINE_CE2) },
      ];
    case "mots1": case "dictee1": {
      const dd = dicteeById("dict-animaux");
      return dd ? [{ key: "mots-animaux", label: `Mots à apprendre — ${dd.theme} (à donner mardi)`, node: <MotsAApprendre d={dd} /> }] : [];
    }
    case "mots2": case "dictee2": {
      const dd = dicteeById("dict-maison");
      return dd ? [{ key: "mots-maison", label: `Mots à apprendre — ${dd.theme} (à donner mardi)`, node: <MotsAApprendre d={dd} /> }] : [];
    }
    case "mots3": case "dictee3": {
      const dd = dicteeById("dict-automne");
      return dd ? [{ key: "mots-automne", label: `Mots à apprendre — ${dd.theme} (à donner mardi)`, node: <MotsAApprendre d={dd} /> }] : [];
    }
    case "l21fr": {
      const dict0 = dicteeById("dict0");
      const suivante = dicteeById("dict-animaux");
      return [
        ...(dict0 ? [{ key: "l21-mots", label: "Mots à réviser — CE1 / CE2 (feuille élève)", node: <MotsAApprendre d={dict0} /> }] : []),
        { key: "l21-dictee", label: "Première dictée — CE1 & CE2 (à lire, enseignant)", node: ficheNode(DICTEE_L21_LIRE) },
        ...(suivante ? [{ key: "l21-mots-suivante", label: `Liste pour la semaine d'après — ${suivante.theme} (à donner)`, node: <MotsAApprendre d={suivante} /> }] : []),
        { key: "l21-prog-dictees", label: "Programmation des dictées de l'année (thèmes)", node: <ProgDicteesAnnee /> },
      ];
    }
    case "nbS1":
      return [
        { key: "nb1-lecon", label: "Séance 1 — Leçon : construire 100 / 1000", node: ficheNode(NB1_LECON) },
        { key: "nb1-ce1", label: "Séance 1 — Exercices CE1 (100)", node: ficheNode(NB1_CE1) },
        { key: "nb1-ce2", label: "Séance 1 — Exercices CE2 (1000)", node: ficheNode(NB1_CE2) },
      ];
    case "nbS2":
      return [
        { key: "nb2-lecon", label: "Séance 2 — Leçon : les nombres en lettres", node: ficheNode(NB2_LECON) },
        { key: "nb2-ce1", label: "Séance 2 — Exercices CE1", node: ficheNode(NB2_CE1) },
        { key: "nb2-ce2", label: "Séance 2 — Exercices CE2", node: ficheNode(NB2_CE2) },
      ];
    case "nbS3":
      return [
        { key: "nb3-lecon", label: "Séance 3 — Leçon : la suite des nombres", node: ficheNode(NB3_LECON) },
        { key: "nb3-ce1", label: "Séance 3 — Exercices CE1 (jusqu'à 200)", node: ficheNode(NB3_CE1) },
        { key: "nb3-ce2", label: "Séance 3 — Exercices CE2 (jusqu'à 2000)", node: ficheNode(NB3_CE2) },
      ];
    case "nbS4":
      return [
        { key: "nb-eval", label: "Séance 4 — Évaluation : les nombres", node: ficheNode(NB_EVAL) },
        { key: "nb-ent-ce1", label: "Séance 4 — Sinon, entraînement CE1", node: ficheNode(NB3_CE1) },
        { key: "nb-ent-ce2", label: "Séance 4 — Sinon, entraînement CE2", node: ficheNode(NB3_CE2) },
      ];
    case "geoS1":
      return [
        { key: "geo1-diapo-ce1", label: "Séance 1 — Diaporama CE1 : se repérer dans l'espace (à projeter)", node: <SeRepererDiapo /> },
        { key: "geo1-diapo-ce2", label: "Séance 1 — Diaporama CE2 : la symétrie (à projeter)", node: <SymetrieDiapo /> },
        { key: "geo1-lecon", label: "Séance 1 — Leçon illustrée : se repérer / la symétrie", node: ficheNode(GEO1_LECON) },
        { key: "geo1-ce1", label: "Séance 1 — CE1 : se repérer dans l'école", node: ficheNode(GEO1_CE1) },
        { key: "geo1-ce2", label: "Séance 1 — CE2 : la symétrie", node: ficheNode(GEO1_CE2) },
      ];
    case "geoS2":
      return [
        { key: "geo2-ce1", label: "Séance 2 — CE1 : se repérer dans le quartier", node: ficheNode(GEO2_CE1) },
        { key: "geo2-ce2", label: "Séance 2 — CE2 : compléter par symétrie (1)", node: ficheNode(GEO2_CE2) },
      ];
    case "geoS3":
      return [
        { key: "geo3-ce1", label: "Séance 3 — CE1 : se déplacer sur un plan", node: ficheNode(GEO3_CE1) },
        { key: "geo3-ce2", label: "Séance 3 — CE2 : compléter par symétrie (2)", node: ficheNode(GEO3_CE2) },
      ];
    case "geoS4":
      return [
        { key: "geo-eval", label: "Séance 4 — Évaluation : espace & géométrie", node: ficheNode(GEO_EVAL) },
        { key: "geo-ent-ce1", label: "Séance 4 — Sinon, entraînement CE1", node: ficheNode(GEO3_CE1) },
        { key: "geo-ent-ce2", label: "Séance 4 — Sinon, entraînement CE2", node: ficheNode(GEO3_CE2) },
      ];
    case "nomEDL":
      return [
        { key: "nom-edl-lecon", label: "Le nom — Leçon à revoir (avant les exercices)", node: <LeNomLecon /> },
        { key: "nom-edl-ce1", label: "Le nom — Exercices CE1 (en dépannage)", node: ficheNode(NOM_S1_CE1) },
        { key: "nom-edl-ce2", label: "Le nom — Exercices CE2 (en dépannage)", node: ficheNode(NOM_S1_CE2) },
      ];
    case "nomS1":
      return [
        { key: "nom-s1-lecon", label: "Séance 1 — Leçon : le nom (commun & propre)", node: <LeNomLecon /> },        { key: "nom-s1-ce1", label: "Séance 1 — Exercices CE1", node: ficheNode(NOM_S1_CE1) },
        { key: "nom-s1-ce2", label: "Séance 1 — Exercices CE2", node: ficheNode(NOM_S1_CE2) },
      ];
    case "nomS2":
      return [
        { key: "nom-s2-lecon", label: "Séance 2 — Leçon : le nom (rappel)", node: <LeNomLecon /> },
        { key: "nom-s2-ce1", label: "Séance 2 — Exercices CE1 (nom propre, majuscule)", node: ficheNode(NOM_S2_CE1) },
        { key: "nom-s2-ce2", label: "Séance 2 — Exercices CE2 (commun/propre, majuscules)", node: ficheNode(NOM_S2_CE2) },
      ];
    case "nomS3":
      return [
        { key: "nom-s3-exos", label: "Séance 3 — Exercices : genre & nombre du nom", node: ficheNode(NOM_S3) },
      ];
    case "nomS4":
      return [
        { key: "nom-s4-eval", label: "Séance 4 — Évaluation : le nom", node: ficheNode(NOM_EVAL) },
        { key: "nom-s4-ce1", label: "Séance 4 — Sinon, entraînement CE1", node: ficheNode(NOM_S1_CE1) },
        { key: "nom-s4-ce2", label: "Séance 4 — Sinon, entraînement CE2", node: ficheNode(NOM_S1_CE2) },
      ];
    case "m15det":
      return [
        { key: "det-lecon", label: "Les déterminants — Leçon à coller (à projeter aussi)", node: <DeterminantsLecon /> },
        { key: "det-ce1", label: "Les déterminants — Exercices CE1 (A4)", node: ficheNode(DET_ENTRAINE_CE1) },
        { key: "det-ce2", label: "Les déterminants — Exercices CE2 (A4)", node: ficheNode(DET_ENTRAINE_CE2) },
      ];
    case "m15comp":
    case "l21comp":
    case "m22comp":
      return [
        { key: "comp-diapo", label: "Comparer les nombres — Diaporama à projeter (les signes < > =)", node: <ComparerDiapo /> },
        { key: "comp-ce1-lecon", label: "Comparer les nombres — Leçon CE1 (à coller)", node: ficheNode(COMP_CE1_LECON) },
        { key: "comp-ce2-lecon", label: "Comparer les nombres — Leçon CE2 (à coller)", node: ficheNode(COMP_CE2_LECON) },
        { key: "comp-ex-ce1", label: "Comparer les nombres — Exercices CE1 (A4)", node: ficheNode(COMP_EX_CE1) },
        { key: "comp-ce2-auto", label: "Comparer les nombres — Exercices CE2 / fichier autonomie (tandem)", node: ficheNode(COMP_CE2_AUTO) },
      ];
    case "m15sci":
      return [
        { key: "sci-diapo", label: "Solide ou liquide ? — Diaporama à projeter (photos réelles)", node: <SolideLiquideDiapo /> },
        { key: "sci-lecon", label: "Solide ou liquide ? — Leçon à coller (enfantine)", node: <SolideLiquideLecon /> },
      ];
    case "l14poesie":
      return [
        { key: "poesie-ponctuation", label: "« La ponctuation » (Maurice Carême) — fiche copie & illustration (A4)", node: <PoesieCopie /> },
      ];
    case "l14hist":
      return [
        { key: "hist-mesurer-diapo", label: "Comment mesure-t-on le temps ? — Diaporama à projeter (photos réelles)", node: <MesurerTempsDiapo /> },
        { key: "hist-mesurer-lecon", label: "Comment mesure-t-on le temps ? — Leçon à coller (frise + chiffres romains IV, XIX)", node: <MesurerTempsLecon /> },
        { key: "hist-mesurer-frise", label: "La frise des unités de temps — 3 exemplaires à découper & coller (A4)", node: <FriseUnitesTemps print /> },
      ];
    case "l14auto":
      return [
        { key: "denombre-ce2-2p", label: "Dénombrer jusqu'à 1 000 — Fichier autonomie CE2 (2 pages)", node: ficheNode(DENOMBRE_CE2_2P) },
      ];
    case "l14colo":
      return [
        { key: "coloriage-ce1", label: "Coloriage magique — additions (CE1)", node: <ColoriageMagique /> },
      ];
    case "m9ang":
      return [
        { key: "ang-dialogue", label: "On se parle en anglais ! — Dialogue à projeter (A ↔ B)", node: ficheNode(ANGLAIS_DIALOGUE) },
        { key: "ang-present-recap", label: "Se présenter et être poli — Fiche récap (EN = FR)", node: ficheNode(ANGLAIS_PRESENT_RECAP) },
        { key: "ang-hello-goodbye", label: "« Hello, Goodbye » (Beatles) — Traduction & trace à recopier", node: ficheNode(ANGLAIS_HELLO_GOODBYE) },
      ];
    case "emcsolid":
      return [
        { key: "emc-solidarite", label: "La solidarité — Séance (affichage + trace)", node: ficheNode(EMC_SOLIDARITE) },
      ];
    case "angVerbs":
      return [
        { key: "ang-verbs-diapo", label: "Action verbs — Diaporama à projeter (vraies photos, jeu du mime)", node: <AnglaisActionVerbsDiapo /> },
        { key: "ang-verbs-lecon", label: "Action verbs — Leçon illustrée à coller (cursive + photos)", node: <AnglaisVerbsLecon /> },
        { key: "ang-verbs-cartes", label: "Action verbs — Cartes à découper (image + « I run »)", node: <AnglaisVerbsCartes /> },
      ];
    case "histS3":
      return [
        { key: "hist-frise-diapo", label: "Lire une frise — Diaporama à projeter (sens du temps, 5 périodes)", node: <LireFriseDiapo /> },
        { key: "hist-frise-lecon", label: "Lire une frise — Leçon illustrée à coller (frise intégrée)", node: <LireFriseLecon /> },
      ];
    case "sciS3":
      return [
        { key: "sci-solides-diapo", label: "Les solides — Diaporama à projeter (vraies photos)", node: <SolidesProprietesDiapo /> },
        { key: "sci-solides-lecon", label: "Les solides — Leçon illustrée à coller (photos libres de droits)", node: <SolidesLecon /> },
        { key: "sci-solides-obs", label: "Les solides — Fiche d'expérience (tableau à remplir)", node: ficheNode(SOLIDES_OBS) },
      ];
    case "artdet":
      return [
        { key: "artdet-affiche", label: "Les articles et déterminants — Leçon à projeter", node: ficheNode(ARTDET_AFFICHE) },
        { key: "artdet-lecon", label: "Les articles et déterminants — Leçon à coller (cursive)", node: ficheNode(ARTDET_LECON) },
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
