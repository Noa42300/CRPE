/**
 * Registre des supports élèves « fournis » (à imprimer) associés à une séance.
 * Clé = identifiant de l'activité (stable pour le contenu de rentrée fourni).
 * Chaque support est une fiche A4 imprimable et téléchargeable en PDF.
 */
import type { ReactNode } from "react";
import { FleurDuNombreSupport } from "./FleurDuNombreSupport";
import { ficheNode, type FicheData } from "./FichePedagogiqueA4";

export interface SupportFourni {
  key: string;
  label: string;
  node: ReactNode;
}

// ---- Supports du lundi 8 septembre (données pédagogiques originales) ----

const VERBE_AFFICHE: FicheData = {
  entete: "Affichage", titre: "Le verbe", niveau: "CE1-CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "def", titre: "C'est quoi un verbe ?", contenu: "Le verbe est le mot qui dit ce que l'on fait (une action) ou ce que l'on est (un état). Il change quand on change le moment (hier, aujourd'hui, demain) ou la personne (je, tu, il…)." },
    { kind: "puces", titre: "Pour le trouver", points: ["Je dis la phrase à un autre moment : « Hier, je… » → le mot qui change, c'est le verbe.", "Je peux encadrer le verbe par « ne … pas ».", "L'infinitif, c'est le nom du verbe : manger, courir, être."] },
    { kind: "exemples", titre: "Exemples", points: ["Le chat dort. → dormir", "Nous mangeons une pomme. → manger", "Elle est contente. → être"] },
  ],
};
const VERBE_CE1: FicheData = {
  entete: "Exercices", titre: "Le verbe", niveau: "CE1", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", consigne: "Entoure le verbe (l'action) dans chaque phrase.", items: ["Le chien court dans le jardin.", "Papa prépare le repas.", "Les élèves écoutent la maîtresse.", "Je saute très haut.", "La fleur pousse au soleil."] },
    { kind: "exercice", consigne: "Écris une action que tu fais le matin, puis entoure le verbe.", lignes: 2 },
  ],
};
const VERBE_CE2: FicheData = {
  entete: "Exercices", titre: "Le verbe", niveau: "CE2", discipline: "Français — Grammaire",
  blocs: [
    { kind: "exercice", consigne: "Souligne le verbe et écris son infinitif à côté.", items: ["Les oiseaux chantent. → ______", "Nous partons en voyage. → ______", "Tu ranges ton cartable. → ______", "Le boulanger vend du pain. → ______"] },
    { kind: "exercice", consigne: "Récris en commençant par « Hier, ». Entoure le mot qui change. Phrase : « Aujourd'hui, je mange à la cantine. »", lignes: 2 },
    { kind: "exercice", consigne: "Invente une phrase avec le verbe « jouer », puis donne son infinitif.", lignes: 2 },
  ],
};

const MATHS_CE1_LECON: FicheData = {
  entete: "Leçon", titre: "Dénombrer une collection jusqu'à 99", niveau: "CE1", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "def", titre: "Pour compter beaucoup d'objets", contenu: "Je fais des paquets de 10. Un paquet de 10, c'est une dizaine (une barre orange). Ce qui reste tout seul, ce sont les unités (des cubes verts)." },
    { kind: "base10", dizaines: 4, unites: 6, legende: "4 barres de 10 et 6 cubes" },
    { kind: "puces", titre: "J'écris le nombre", points: ["Il y a 4 dizaines et 6 unités.", "J'écris 46 : le 4 dit les dizaines, le 6 dit les unités.", "Je lis : quarante-six."] },
    { kind: "def", titre: "Un autre exemple", contenu: "Je compte, je regroupe par 10, puis j'écris le nombre." },
    { kind: "base10", dizaines: 3, unites: 5, legende: "3 barres de 10 et 5 cubes" },
    { kind: "exemples", titre: "À retenir", points: ["Je groupe toujours par paquets de 10.", "Le chiffre de gauche = les dizaines ; le chiffre de droite = les unités."] },
  ],
};
const MATHS_CE2_AUTO: FicheData = {
  entete: "Fichier autonomie", titre: "Dénombrer une collection jusqu'à 1 000", niveau: "CE2", discipline: "Mathématiques — Nombres",
  blocs: [
    { kind: "def", titre: "Rappel", contenu: "Je groupe par 100 (des plaques), par 10 (des barres) et je compte les unités (des cubes). 100 = 10 dizaines." },
    { kind: "exercice", consigne: "Écris le nombre représenté.", items: ["3 centaines, 5 dizaines, 2 unités = ____", "6 centaines, 0 dizaine, 4 unités = ____", "2 centaines, 8 dizaines, 9 unités = ____"] },
    { kind: "exercice", consigne: "Décompose comme dans l'exemple : 347 = 300 + 40 + 7.", items: ["582 = __________", "706 = __________", "250 = __________"] },
    { kind: "exercice", consigne: "Complète.", items: ["Dans 100, il y a ___ dizaines.", "Dans 1 000, il y a ___ centaines.", "453, c'est ___ centaines, ___ dizaines et ___ unités."] },
    { kind: "exercice", consigne: "Range du plus petit au plus grand : 903 – 309 – 930 – 390.", lignes: 1 },
  ],
};

const HIST_CE1: FicheData = {
  entete: "Trace écrite", titre: "Reconnaître le passé", niveau: "CE1", discipline: "Questionner le monde — Le temps",
  blocs: [
    { kind: "def", contenu: "Certains objets viennent d'autrefois (le passé), d'autres sont d'aujourd'hui (le présent)." },
    { kind: "puces", titre: "Les mots du temps", points: ["Avant / autrefois → le passé", "Maintenant / aujourd'hui → le présent", "Le passé proche : il y a peu de temps", "Le passé lointain : il y a très longtemps"] },
    { kind: "lignes", n: 2 },
  ],
};
const HIST_CE2: FicheData = {
  entete: "Trace écrite", titre: "Reconnaître le passé", niveau: "CE2", discipline: "Questionner le monde — Le temps",
  blocs: [
    { kind: "def", contenu: "On reconnaît qu'une chose appartient au passé grâce à des indices (objets, vêtements, photos anciennes). Le temps peut se mesurer (jour, année, siècle)." },
    { kind: "puces", titre: "À retenir", points: ["Passé proche / passé lointain", "On peut mesurer une durée (hier, il y a 10 ans, il y a 100 ans)", "Mon histoire personnelle (ma naissance…) n'est pas l'histoire collective (tous ensemble)."] },
    { kind: "lignes", n: 3 },
  ],
};

const ANGLAIS_LECON: FicheData = {
  entete: "Leçon", titre: "L'anglais : les mots transparents", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais",
  blocs: [
    { kind: "def", titre: "Une nouvelle langue : l'anglais", contenu: "L'anglais se parle dans beaucoup de pays, comme aux États-Unis (USA). Bonne nouvelle : certains mots anglais ressemblent beaucoup au français ! Ce sont des mots transparents : on peut deviner ce qu'ils veulent dire." },
    { kind: "puces", titre: "Je devine (anglais → français)", points: ["a taxi → un taxi", "a pizza → une pizza", "a hamburger → un hamburger", "a restaurant → un restaurant", "a telephone → un téléphone", "a banana → une banane", "chocolate → du chocolat", "a tomato → une tomate"] },
    { kind: "puces", titre: "Aux États-Unis (USA)", points: ["New York et la statue de la Liberté", "les grands taxis jaunes", "le base-ball, Hollywood et le cinéma"] },
    { kind: "exemples", titre: "Attention", points: ["Ça s'écrit parfois un peu différemment (telephone / téléphone).", "On les prononce autrement : on écoute bien le maître ou la maîtresse."] },
  ],
};
const ANGLAIS_FEUILLE: FicheData = {
  entete: "Exercices", titre: "Devine les mots — voyage aux USA", niveau: "CE1-CE2", discipline: "Langues vivantes — Anglais",
  blocs: [
    { kind: "exercice", consigne: "Lis le mot anglais et écris ce que ça veut dire en français.", items: ["a taxi → ____________", "a pizza → ____________", "a hamburger → ____________", "a telephone → ____________", "a banana → ____________", "a tomato → ____________"] },
    { kind: "exercice", consigne: "Colorie en vert les mots que tu as devinés tout seul.", },
    { kind: "exercice", consigne: "Écris deux mots anglais que tu connais déjà.", lignes: 2 },
  ],
};

export function supportsForActivity(activityId: string): SupportFourni[] {
  switch (activityId) {
    case "ah": // Fiche 2 — Le nombre du jour (fleur du nombre)
      return [
        { key: "fleur-ce1", label: "Fleur du nombre — CE1 (23)", node: <FleurDuNombreSupport niveau="CE1" /> },
        { key: "fleur-ce2", label: "Fleur du nombre — CE2 (23)", node: <FleurDuNombreSupport niveau="CE2" /> },
        { key: "fleur-corr", label: "Fleur du nombre — Correction (23)", node: <FleurDuNombreSupport niveau="CE2" correction /> },
      ];
    case "l8verbe": // Lundi 8 sept — Grammaire : le verbe
      return [
        { key: "verbe-aff", label: "Le verbe — Affichage (TBI)", node: ficheNode(VERBE_AFFICHE) },
        { key: "verbe-ce1", label: "Le verbe — Exercices CE1", node: ficheNode(VERBE_CE1) },
        { key: "verbe-ce2", label: "Le verbe — Exercices CE2", node: ficheNode(VERBE_CE2) },
      ];
    case "l8mce1": // Lundi 8 sept — Maths CE1 : leçon illustrée (base 10)
      return [
        { key: "m-ce1-lecon", label: "Dénombrer jusqu'à 99 — Leçon illustrée CE1", node: ficheNode(MATHS_CE1_LECON) },
      ];
    case "l8ang": // Lundi 8 sept — Anglais : mots transparents (USA)
      return [
        { key: "ang-lecon", label: "Les mots transparents — Leçon à coller", node: ficheNode(ANGLAIS_LECON) },
        { key: "ang-feuille", label: "Devine les mots (USA) — Feuille à distribuer", node: ficheNode(ANGLAIS_FEUILLE) },
      ];
    case "l8mce2": // Lundi 8 sept — Maths CE2 (autonomie jusqu'à 1000)
      return [
        { key: "m-ce2-auto", label: "Dénombrer jusqu'à 1 000 — Fichier autonomie CE2", node: ficheNode(MATHS_CE2_AUTO) },
      ];
    case "l8hist": // Lundi 8 sept — Histoire : reconnaître le passé
      return [
        { key: "hist-ce1", label: "Reconnaître le passé — Trace écrite CE1", node: ficheNode(HIST_CE1) },
        { key: "hist-ce2", label: "Reconnaître le passé — Trace écrite CE2", node: ficheNode(HIST_CE2) },
      ];
    default:
      return [];
  }
}
