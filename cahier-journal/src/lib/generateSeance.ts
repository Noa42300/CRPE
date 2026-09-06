/**
 * Générateur de séances (« Idées séances »)
 * -----------------------------------------
 * Assemble une fiche de séance COMPLÈTE et conforme (objectifs, compétences,
 * déroulement en étapes rédigées à la 1re personne, différenciation CE1/CE2,
 * erreurs & remédiation, correction, matériel) à partir d'une notion et d'une
 * discipline. Contenu ancré sur la structure « maison » (voir CLAUDE.md) et les
 * repères des programmes 2020 (cycle 2). C'est un SQUELETTE éditable, à relire
 * et enrichir — pas une génération libre par IA.
 *
 * 100 % local, aucun réseau : construction déterministe à partir de modèles.
 */
import type { Activity } from "./types";
import { uid } from "./dates";
import { emptyActivity } from "./factory";

export interface GenParams {
  disciplineId: string;
  disciplineLabel: string;
  niveau: "CE1" | "CE2" | "classe";
  periode: string;
  notion: string;
  domaine?: string;
  seance?: string;
}

type Step = { id: string; label: string; note: string };
const step = (label: string, note: string): Step => ({ id: uid(), label, note });

/** Famille pédagogique d'une discipline (détermine le canevas de déroulement). */
function famille(id: string): "maths" | "francais" | "anglais" | "eps" | "emc" | "qlm" | "arts" | "general" {
  if (id === "maths") return "maths";
  if (id === "francais" || id === "sol") return "francais";
  if (id === "anglais") return "anglais";
  if (id === "eps") return "eps";
  if (id === "emc") return "emc";
  if (id === "qlm") return "qlm";
  if (id === "arts") return "arts";
  return "general";
}

const N = (s: string) => s.trim() || "la notion du jour";

/**
 * Référence aux programmes EN VIGUEUR (dernières versions) :
 *  - Français & Mathématiques cycle 2 : programmes du BO du 31 octobre 2024,
 *    applicables à la rentrée 2025 (CP-CE1-CE2).
 *  - EMC : programme rénové (2024).
 *  - Autres domaines (Questionner le monde, LVE, EPS, arts) : programmes 2020.
 * Toujours vérifier la formulation exacte sur eduscol.education.fr.
 */
function refBO(disciplineId: string, disciplineLabel: string): string {
  if (disciplineId === "francais")
    return "Programme de français, cycle 2 — BO du 31 octobre 2024 (en vigueur rentrée 2025). À vérifier sur eduscol.education.fr.";
  if (disciplineId === "maths")
    return "Programme de mathématiques, cycle 2 — BO du 31 octobre 2024 (en vigueur rentrée 2025). À vérifier sur eduscol.education.fr.";
  if (disciplineId === "emc")
    return "Programme d'enseignement moral et civique, cycle 2 (version rénovée 2024, en vigueur). À vérifier sur eduscol.education.fr.";
  return `Programmes cycle 2 (2020, en vigueur) — ${disciplineLabel}. À vérifier sur eduscol.education.fr.`;
}

/** Déroulement type selon la famille, à la 1re personne (5-6 tirets/étape). */
function deroulementPour(fam: ReturnType<typeof famille>, notion: string): Step[] {
  const n = N(notion);
  if (fam === "maths") {
    return [
      step("Calcul mental / rappel (10 min)", `- « On commence par notre rituel de calcul mental, ardoise prête. »\n- « Je dicte, vous écrivez le résultat, puis on lève l'ardoise ensemble. »\n- « On rappelle ce qu'on a vu la dernière fois sur ${n}. »\n- « Qui peut redire la règle avec ses mots ? »\n- « Aujourd'hui, on va aller un peu plus loin. »`),
      step("Découverte — situation problème (12 min)", `- « Aujourd'hui, on apprend : ${n}. Voici une situation à résoudre. »\n- « Lisez bien : de quoi parle-t-on ? qu'est-ce qu'on cherche ? »\n- « Vous essayez d'abord tout seuls sur l'ardoise / le cahier de recherche. »\n- « Vous pouvez utiliser le matériel (base 10, jetons) pour vous aider. »\n- « Je passe voir vos procédures, je ne donne pas la réponse tout de suite. »`),
      step("Mise en commun & institutionnalisation (13 min)", `- « On s'arrête, on regarde plusieurs façons de faire. »\n- « Qui a fait autrement ? Est-ce que ça marche aussi ? »\n- « On garde la méthode la plus sûre : je l'écris au tableau. »\n- « On lit ensemble la leçon, puis chacun la colle dans le cahier (rouge = maths). »\n- « On refait un exemple tous ensemble pour vérifier qu'on a compris. »`),
      step("Entraînement différencié (18 min)", `- « Maintenant, vous vous entraînez : on fait le premier ensemble. »\n- « Les CE1 : les exercices ★. Les CE2 : les exercices ★★. »\n- « Si tu bloques, reprends le matériel ou relis la leçon. »\n- « Ceux qui ont fini vérifient avec la correction, puis passent au défi. »\n- (Je prends un petit groupe de besoin en atelier dirigé.)`),
      step("Bilan (5 min)", `- « Qu'est-ce qu'on a appris aujourd'hui ? »\n- « Redites-moi la règle importante. »\n- « Dans quelle situation ça peut servir ? »\n- « Qu'est-ce qui était difficile ? »\n- « La prochaine fois, on s'entraînera encore. »`),
    ];
  }
  if (fam === "francais") {
    return [
      step("Rappel & objectif (8 min)", `- « On rappelle ce qu'on sait déjà sur ${n}. »\n- « Aujourd'hui, notre objectif, c'est de… »\n- « Écoutez / regardez cet exemple au tableau. »\n- « Qu'est-ce que vous remarquez ? »\n- « On va chercher ensemble comment ça marche. »`),
      step("Découverte / observation (12 min)", `- « Je vous montre un corpus (des phrases, un petit texte). »\n- « Lisez, puis dites-moi ce qui change / ce qui se répète. »\n- « On classe, on souligne, on entoure ensemble. »\n- « À votre avis, quelle est la règle ? »\n- « On vérifie avec d'autres exemples. »`),
      step("Institutionnalisation (10 min)", `- « On formule la règle ensemble, avec nos mots. »\n- « Je l'écris proprement au tableau. »\n- « Chacun colle la leçon dans le cahier bleu (leçons de français). »\n- « On surligne les mots importants de la leçon. »\n- « On redit la règle à voix haute. »`),
      step("Entraînement différencié (18 min)", `- « On fait le premier exercice ensemble, puis vous continuez seuls. »\n- « Les CE1 : consigne simplifiée / modèle surligné. Les CE2 : on va plus loin. »\n- « Si tu hésites, utilise la leçon et l'astuce qu'on a vue. »\n- « Ceux qui ont fini relisent et se corrigent en vert. »\n- (Atelier dirigé avec le groupe de besoin.)`),
      step("Bilan (5 min)", `- « Qu'a-t-on appris sur ${n} ? »\n- « Quelqu'un peut redonner la règle ? »\n- « Un exemple pour montrer que vous avez compris ? »\n- « Qu'est-ce qui reste difficile ? »\n- « On réutilisera ça dans nos textes et nos dictées. »`),
    ];
  }
  if (fam === "anglais") {
    return [
      step("Warm-up / ritual (5 min)", `- « Hello everyone! On commence par notre rituel : Hello, how are you? »\n- « On réécoute la chanson rituelle. »\n- « On revoit rapidement les mots de la dernière fois. »\n- « Today, a new topic: ${n}. »\n- « Ouvrez bien les oreilles. »`),
      step("Découverte du lexique (10 min)", `- « Je montre les flashcards une par une : écoutez et répétez. »\n- « I say, you repeat: … »\n- « On associe chaque image au mot anglais. »\n- « On répète en chœur, puis par rangée, puis quelques élèves. »\n- « On fait bien attention à la prononciation. »`),
      step("Appropriation — jeux (10 min)", `- « On joue pour mémoriser : je montre, vous devinez. »\n- « Jeu de la balle : celui qui l'attrape répond puis relance. »\n- « What's this? … Yes! Very good! »\n- « On se corrige gentiment, on encourage. »\n- « CE1 : un mot suffit. CE2 : une phrase complète. »`),
      step("Trace & clôture (5 min)", `- « On garde une trace : on colle la fiche dans le cahier violet (anglais). »\n- « On redit les mots nouveaux tous ensemble. »\n- « Goodbye song / on se dit au revoir en anglais. »\n- « Next time, we'll continue. »\n- « Well done everybody! »`),
    ];
  }
  if (fam === "eps") {
    return [
      step("Mise en train (10 min)", `- « On réveille le corps : trottiner, mobiliser les articulations. »\n- « On revoit le signal d'arrêt : au signal, tout le monde s'arrête net. »\n- « On installe / on rappelle les règles de sécurité. »\n- « Aujourd'hui, on travaille : ${n}. »\n- « On échauffe la partie du corps sollicitée. »`),
      step("Situation de référence / rappel (10 min)", `- « On se rappelle ce qu'on a fait la dernière fois. »\n- « Je montre / un élève montre ce qu'on attend. »\n- « Quel est le but ? Comment réussir ? »\n- « On forme les équipes / binômes mixtes CE1-CE2. »\n- « Chacun connaît son rôle (coureur, observateur, arbitre). »`),
      step("Situation d'apprentissage (20 min)", `- « On lance l'activité : chacun essaie plusieurs fois. »\n- « Ton binôme t'observe et te donne un conseil. »\n- « On cherche à progresser sur un point précis. »\n- « Je régule : je félicite, je corrige un geste, je sécurise. »\n- « On adapte le défi à son niveau (plus facile / plus difficile). »`),
      step("Retour au calme & bilan (5 min)", `- « On marche pour récupérer, on respire calmement. »\n- « Qu'est-ce qui a aidé à réussir ? »\n- « Qu'est-ce que je dois encore travailler ? »\n- « On range le matériel tous ensemble. »\n- « La prochaine séance, on continuera cette progression. »`),
    ];
  }
  if (fam === "emc") {
    return [
      step("Situation déclenchante (10 min)", `- « Aujourd'hui, on réfléchit ensemble à : ${n}. »\n- « Je vous lis une petite histoire / je montre une image. »\n- « Qu'est-ce qui se passe ? Qu'en pensez-vous ? »\n- « Est-ce que ça vous est déjà arrivé ? »\n- « On lève la main, on s'écoute. »`),
      step("Débat réglé (15 min)", `- « On donne son avis avec le bâton de parole. »\n- « On respecte celui qui parle, on ne se moque pas. »\n- « Es-tu d'accord avec… ? Pourquoi ? »\n- « On cherche ensemble ce qui est juste. »\n- « Je note vos idées au tableau. »`),
      step("Trace & engagement (10 min)", `- « On garde une trace de ce qu'on a compris. »\n- « Chacun choisit un geste concret à faire. »\n- « On l'écrit ou on le dessine. »\n- « On affichera nos engagements dans la classe. »\n- « Merci pour vos idées : on en reparlera. »`),
    ];
  }
  if (fam === "qlm") {
    return [
      step("Recueil des représentations (10 min)", `- « Aujourd'hui, on cherche à comprendre : ${n}. »\n- « À votre avis, comment ça marche / pourquoi ? »\n- « Je note vos idées au tableau, même différentes. »\n- « On va vérifier tout ça ensemble. »\n- « On observe / on manipule pour se faire une idée. »`),
      step("Investigation / observation (15 min)", `- « On observe le document / on fait l'expérience. »\n- « Qu'est-ce qu'on voit ? Qu'est-ce qui change ? »\n- « Vous notez / dessinez ce que vous observez. »\n- « On compare avec ce qu'on pensait au début. »\n- « Je circule et je relance par des questions. »`),
      step("Structuration — trace écrite (12 min)", `- « On met en commun : qu'a-t-on découvert ? »\n- « On formule ensemble ce qu'il faut retenir. »\n- « On colle la trace dans le classeur de Questionner le monde. »\n- « CE1 : trace guidée (mots à compléter). CE2 : + une phrase. »\n- « On relit la trace ensemble. »`),
      step("Bilan (5 min)", `- « Qu'est-ce qu'on a appris aujourd'hui ? »\n- « Redites-moi l'essentiel avec vos mots. »\n- « À quoi ça sert dans la vraie vie ? »\n- « Qu'est-ce qu'on aimerait encore savoir ? »\n- « La prochaine fois, on continuera. »`),
    ];
  }
  if (fam === "arts") {
    return [
      step("Découverte / inducteur (10 min)", `- « Aujourd'hui, en arts, on travaille : ${n}. »\n- « Je vous montre une œuvre / une image de référence. »\n- « Qu'est-ce que vous voyez ? Que ressentez-vous ? »\n- « On décrit les couleurs, les formes, les matières. »\n- « On va s'en inspirer pour créer. »`),
      step("Production (25 min)", `- « Voici la consigne et le matériel. »\n- « Vous essayez d'abord, il n'y a pas de faute en arts. »\n- « Prenez votre temps, soignez le geste. »\n- « Je passe vous encourager et vous conseiller. »\n- « Pensez à bien remplir votre feuille / respecter la contrainte. »`),
      step("Mise en valeur & bilan (10 min)", `- « On affiche les productions, on regarde en silence. »\n- « Qu'est-ce qui te plaît dans le travail d'un camarade ? »\n- « Qu'as-tu réussi ? Qu'est-ce qui était difficile ? »\n- « On range le matériel proprement. »\n- « Bravo à tous pour vos créations. »`),
    ];
  }
  return [
    step("Découverte (10 min)", `- « Aujourd'hui, on travaille : ${n}. »\n- « Voici ce qu'on va apprendre et pourquoi. »\n- « On observe / on écoute d'abord. »\n- « Qu'est-ce que vous remarquez ? »\n- « On cherche ensemble. »`),
    step("Recherche & mise en commun (20 min)", `- « Vous essayez, seuls puis à deux. »\n- « Je circule et je vous aide. »\n- « On regarde plusieurs réponses. »\n- « On garde la bonne méthode. »\n- « On garde une trace. »`),
    step("Entraînement & bilan (15 min)", `- « On s'entraîne : CE1 / CE2 différenciés. »\n- « On se corrige. »\n- « Qu'a-t-on appris ? »\n- « Qu'est-ce qui était difficile ? »\n- « On réutilisera ça bientôt. »`),
  ];
}

function differenciationPour(fam: ReturnType<typeof famille>, notion: string): string {
  const n = N(notion);
  const base =
    "CE1 : objectif allégé, consigne fractionnée, modèle ou support surligné, plus de manipulation. " +
    "CE2 : on va plus loin (transfert, justification, tâche plus complexe). " +
    "Pour un élève à besoins attentionnels : une consigne à la fois, minuteur visuel, place au calme. " +
    "Pour un élève TSA : anticiper le déroulé, supports visuels, espace de retour au calme.";
  if (fam === "eps") return "Équipes mixtes CE1/CE2 ; différenciation par le rôle et par le défi personnel (distance/durée adaptées). " + base;
  return `Différenciation sur « ${n} ». ` + base;
}

function obstaclesPour(fam: ReturnType<typeof famille>): string {
  const gen =
    "Erreurs fréquentes :\n- L'élève ne comprend pas la consigne (obstacle de langage plus que de notion).\n- Il applique une procédure mécaniquement sans comprendre.\n- Il se décourage face à la difficulté (« je n'y arrive pas »).\nRemédiation rapide :\n- Faire reformuler la consigne par l'élève avec ses mots ; donner un exemple fait.\n- Revenir au matériel / à un cas plus simple, puis remonter progressivement.\n- Fractionner la tâche (une étape à la fois), valoriser chaque réussite intermédiaire.";
  if (fam === "maths")
    return "Erreurs fréquentes :\n- Procédure appliquée sans sens (l'élève « récite » sans comprendre).\n- Erreur de numération (valeur des chiffres) ou de lecture de consigne.\n- Blocage devant le nombre / la taille du problème.\nRemédiation rapide :\n- Revenir à la manipulation (base 10, jetons) puis au dessin, puis au chiffre.\n- Réduire les nombres / simplifier le problème, puis complexifier.\n- Faire verbaliser la procédure à voix haute.";
  if (fam === "francais")
    return "Erreurs fréquentes :\n- L'élève confond des notions proches (nature/fonction, sons proches).\n- Il applique la règle sans repérer les indices dans la phrase.\n- Difficulté de copie / d'encodage qui masque la compréhension.\nRemédiation rapide :\n- Revenir au corpus : entourer/souligner les indices ensemble.\n- Donner une astuce mémorisable (manipulation : remplacer, encadrer par ne…pas).\n- Alléger la quantité d'écrit, accepter l'oral pour vérifier la compréhension.";
  if (fam === "anglais")
    return "Erreurs fréquentes :\n- L'élève répond en français ou reste muet.\n- Prononciation approximative ; confusion entre deux structures.\nRemédiation rapide :\n- Modèle systématique (je dis → chœur → binôme) ; associer un geste à chaque mot.\n- Accepter un mot isolé au CE1, valoriser toute prise de parole.";
  if (fam === "eps")
    return "Erreurs fréquentes :\n- L'élève ne respecte pas la règle / la sécurité dans le feu de l'action.\n- Il n'ose pas ou se met en difficulté (effort mal dosé).\nRemédiation rapide :\n- Re-expliquer la règle en situation, rôle d'arbitre pour se recentrer.\n- Adapter le défi (distance, durée), rappeler le droit à l'essai et à l'erreur.";
  if (fam === "emc")
    return "Erreurs fréquentes :\n- L'élève reste sur un avis unique, coupe la parole.\n- Il confond ressenti et règle commune.\nRemédiation rapide :\n- Cadre du débat (bâton de parole), reformuler l'avis d'un autre avant de répondre.\n- Rejouer une situation concrète pour incarner la règle.";
  return gen;
}

/** Construit la fiche de séance complète. */
export function genererSeance(p: GenParams): Activity {
  const fam = famille(p.disciplineId);
  const n = N(p.notion);
  const niveaux = p.niveau === "classe" ? ["classe"] : [p.niveau];
  const a = emptyActivity(niveaux);
  return {
    ...a,
    id: uid(),
    title: `${p.disciplineLabel} — ${n}`,
    objectif: `À la fin de la séance, l'élève sait : ${n.toLowerCase()} (comprendre, appliquer et expliquer).`,
    competence: `${p.disciplineLabel} — ${p.domaine ? p.domaine + " : " : ""}${n}.`,
    competenceRef: refBO(p.disciplineId, p.disciplineLabel),
    progPeriode: p.periode,
    progDomaine: p.domaine ?? "",
    progSequence: n,
    progSeance: p.seance ?? "1",
    organisation: fam === "eps" ? ["collectif", "groupe"] : ["collectif", "individuel"],
    roleEnseignant: ["étayage", "différenciation"],
    deroulement: deroulementPour(fam, n),
    materiel: "À compléter : supports, affichage/TBI, fiches d'exercices, matériel de manipulation. (Ajouter une vidéo courte si disponible.)",
    differenciation: differenciationPour(fam, n),
    depassement: "Pour les élèves rapides : tâche de transfert, défi, tutorat d'un camarade, création d'un exemple.",
    correction: "À compléter : réponses attendues / production visée (pour la correction collective et la fiche de prép).",
    obstacles: obstaclesPour(fam),
    notesProchaine: "Séance générée (squelette) : à relire et personnaliser avant la classe.",
  };
}
