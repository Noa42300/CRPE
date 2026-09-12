/**
 * Registre des supports élèves « fournis » (à imprimer / projeter) associés à
 * une séance. Clé = identifiant de l'activité. Contenus illustrés CE1-CE2
 * (pictogrammes maison), leçons en écriture cursive, fiches A4 complètes.
 */
import type { ReactNode } from "react";
import { FleurDuNombreSupport } from "./FleurDuNombreSupport";
import { ficheNode, type FicheData } from "./FichePedagogiqueA4";
import { AnglaisDiaporama } from "./AnglaisDiaporama";
import { EpsTerrainSupport, type EpsFiche } from "./EpsTerrainSupport";

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
  entete: "Leçon (à projeter)", titre: "Comparer les nombres", niveau: "CE1", discipline: "Mathématiques — Nombres (Tandem)", cursive: true,
  blocs: [
    { kind: "def", titre: "Comparer, c'est quoi ?", contenu: "Comparer deux nombres, c'est dire lequel est le PLUS GRAND et lequel est le PLUS PETIT. J'utilise les signes < (plus petit que) et > (plus grand que)." },
    { kind: "def", picto: "crocodile", titre: "Le truc du crocodile", contenu: "Le signe est comme la bouche d'un crocodile très gourmand : sa bouche s'ouvre toujours du côté du PLUS GRAND nombre (il veut manger le plus gros !). La pointe montre le plus petit." },
    { kind: "base10", dizaines: 4, unites: 7, legende: "47" },
    { kind: "base10", dizaines: 5, unites: 2, legende: "52" },
    { kind: "comparer", a: 47, b: 52, signe: "<" },
    { kind: "puces", titre: "Ma méthode (nombres à 2 chiffres)", points: [
      "Je compare d'abord les DIZAINES.",
      "Si les dizaines sont égales, je compare les UNITÉS.",
    ] },
    { kind: "comparer", a: 63, b: 61, signe: ">" },
    { kind: "exemples", titre: "À retenir", points: ["< : le plus petit est à gauche.", "> : le plus grand est à gauche.", "Le bec s'ouvre vers le plus grand."] },
  ],
};

const COMP_CE2_LECON: FicheData = {
  entete: "Leçon (à projeter)", titre: "Comparer les nombres jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres (Tandem)", cursive: true,
  blocs: [
    { kind: "def", picto: "crocodile", titre: "Comparer des nombres à 3 chiffres", contenu: "Pour comparer deux nombres, je regarde leurs chiffres rang par rang : les centaines, puis les dizaines, puis les unités. J'utilise les signes <, > et = (égal). Astuce : la bouche du crocodile s'ouvre vers le plus grand nombre." },
    { kind: "puces", titre: "Ma méthode", points: [
      "Je compare d'abord les CENTAINES.",
      "Si les centaines sont égales, je compare les DIZAINES.",
      "Si les dizaines sont égales aussi, je compare les UNITÉS.",
    ] },
    { kind: "comparer", a: 246, b: 254, signe: "<", cdu: true },
    { kind: "comparer", a: 531, b: 528, signe: ">", cdu: true },
    { kind: "def", picto: "fleche", titre: "Pour aller plus loin", contenu: "Je sais aussi RANGER une liste du plus petit au plus grand, et ENCADRER un nombre entre la dizaine juste avant et la dizaine juste après." },
    { kind: "exemples", titre: "Exemples", points: ["Ranger : 309 < 390 < 903 < 930.", "Encadrer : 340 < 347 < 350.", "Égalité : 300 + 40 + 7 = 347."] },
  ],
};

const COMP_CE2_AUTO: FicheData = {
  entete: "Fichier autonomie", titre: "Comparer les nombres jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres (Tandem)",
  competences: ["comparer avec < et >", "compléter avec un nombre qui convient", "ranger du plus petit au plus grand", "encadrer un nombre", "résoudre un problème"],
  blocs: [
    { kind: "exercice", aide: "centaines, puis dizaines, puis unités", consigne: "Compare avec le bon signe : < ou >.", items: [
      "426 ____ 462", "703 ____ 307", "289 ____ 156", "98 ____ 201",
      "200 ____ 300", "471 ____ 198", "777 ____ 707", "123 ____ 321", "931 ____ 899",
    ] },
    { kind: "exercice", picto: "fleche", consigne: "Complète avec un nombre qui convient.", items: [
      "125 < ______", "142 < ______", "317 > ______", "______ < 590", "______ > 898", "267 > ______",
    ] },
    { kind: "exercice", consigne: "Range chaque liste du plus petit au plus grand.", items: [
      "309 – 390 – 903 – 930 → ____________________",
      "540 – 405 – 450 – 504 → ____________________",
    ] },
    { kind: "exercice", aide: "la dizaine avant / la dizaine après", consigne: "Encadre chaque nombre.", items: [
      "______ < 347 < ______", "______ < 508 < ______", "______ < 690 < ______",
    ] },
    { kind: "exercice", picto: "valise", consigne: "Problème. Simon a 4 billets de 100 € et 4 billets de 20 €. Alexandra a 5 billets de 100 € et 2 billets de 10 €. Qui a le moins d'argent ?", lignes: 3 },
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
