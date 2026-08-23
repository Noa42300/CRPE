/**
 * Repères des programmes — Cycle 2 (CP-CE1-CE2)
 * ---------------------------------------------
 * Synthèse des attendus de fin de cycle et repères annuels de progression
 * (d'après les programmes 2020 et les repères annuels éduscol), organisée par
 * discipline pour servir de guide de référence rapide.
 *
 * ⚠️ Il s'agit d'une SYNTHÈSE de travail (mémo), pas du texte officiel intégral.
 * Vérifie la formulation exacte sur eduscol.education.fr / le Bulletin Officiel.
 *
 * Les clés correspondent aux identifiants stables des disciplines.
 */

export interface BODomaine {
  titre: string;
  /** Attendus / compétences. Préfixe « CE1 : » / « CE2 : » quand utile. */
  attendus: string[];
}
export interface BODiscipline {
  intro?: string;
  domaines: BODomaine[];
}

export const BO_SOURCE =
  "Synthèse des programmes 2020 et repères annuels de progression (éduscol), cycle 2. À vérifier sur eduscol.education.fr.";

export const BO: Record<string, BODiscipline> = {
  francais: {
    intro:
      "Cycle 2 : entrée dans la culture de l'écrit, automatisation du décodage, compréhension, production d'écrits et étude de la langue.",
    domaines: [
      {
        titre: "Langage oral",
        attendus: [
          "Conserver une attention soutenue lors de situations d'écoute ou d'échanges ; manifester sa compréhension.",
          "Dire pour être entendu et compris (raconter, décrire, expliquer) ; réciter des textes mémorisés.",
          "Participer à des échanges : questionner, répondre, prendre la parole en respectant les règles.",
          "Adopter une distance critique par rapport au langage produit.",
        ],
      },
      {
        titre: "Lecture et compréhension de l'écrit",
        attendus: [
          "Identifier des mots rapidement : décoder aisément, reconnaître des mots fréquents (voie directe).",
          "CE1 : lire ≈ 50 mots/min ; CE2 : ≈ 70-90 mots/min, à voix haute, un texte adapté.",
          "Comprendre un texte lu seul : mobiliser ses connaissances, repérer personnages/lieux/actions, inférer.",
          "Lire à voix haute avec fluidité ; lire et comprendre des textes documentaires.",
        ],
      },
      {
        titre: "Écriture",
        attendus: [
          "Copier de manière experte (geste sûr, lisible, respect des normes).",
          "Produire des écrits variés en mobilisant lexique et syntaxe ; écrire des phrases puis des textes courts.",
          "Réviser et améliorer son écrit (relecture, corrections orthographiques guidées).",
        ],
      },
      {
        titre: "Étude de la langue — Grammaire",
        attendus: [
          "La phrase : majuscule, point ; identifier la phrase, distinguer phrase/ligne.",
          "Classes de mots : nom, verbe, déterminant, adjectif, pronom personnel sujet.",
          "Le verbe : identifier ; présent, imparfait, futur des verbes fréquents (être, avoir, 1er groupe, aller, faire, dire, venir…).",
          "Accords : dans le groupe nominal (déterminant-nom-adjectif) ; accord sujet-verbe.",
          "CE1 : phrase, GN simple, présent. CE2 : passé/présent/futur, accords dans le GN, compléments.",
        ],
      },
      {
        titre: "Étude de la langue — Orthographe & Lexique",
        attendus: [
          "Orthographier les mots les plus fréquents et les mots invariables mémorisés.",
          "Maîtriser les correspondances graphophonologiques ; valeurs de la lettre (s, c, g…).",
          "Lexique : construire le sens d'un mot (contexte, familles de mots, préfixes/suffixes) ; ordre alphabétique, dictionnaire.",
        ],
      },
    ],
  },
  maths: {
    intro:
      "Cycle 2 : construire le nombre, automatiser le calcul, résoudre des problèmes, découvrir grandeurs et géométrie.",
    domaines: [
      {
        titre: "Nombres et calcul",
        attendus: [
          "CE1 : nombres jusqu'à 1 000. CE2 : nombres jusqu'à 10 000.",
          "Numération de position : unités, dizaines, centaines, milliers ; comparer, ranger, encadrer, décomposer.",
          "Calcul mental : additions, soustractions, doubles/moitiés ; tables de multiplication (2,3,4,5 en CE1 ; jusqu'à 9 en CE2).",
          "Calcul posé : addition (CE1), soustraction, multiplication (CE2) ; sens de la division.",
          "Résoudre des problèmes en une ou plusieurs étapes (additifs, multiplicatifs, de partage).",
        ],
      },
      {
        titre: "Grandeurs et mesures",
        attendus: [
          "Longueurs (m, cm, km), masses (g, kg), contenances (L), durées (h, min ; lire l'heure).",
          "La monnaie (€, c) : rendre la monnaie, constituer une somme.",
          "Comparer, estimer, mesurer ; résoudre des problèmes de mesure.",
          "CE1 : lire l'heure (heures/demi-heures). CE2 : minutes, conversions simples.",
        ],
      },
      {
        titre: "Espace et géométrie",
        attendus: [
          "(Se) repérer et se déplacer ; utiliser/produire des représentations (plans, quadrillages).",
          "Reconnaître, nommer, décrire, reproduire des figures (carré, rectangle, triangle, cercle).",
          "Utiliser la règle, l'équerre ; tracer, reporter des longueurs ; angle droit.",
          "Reconnaître des solides usuels (cube, pavé, boule, cylindre, cône).",
        ],
      },
    ],
  },
  qlm: {
    intro:
      "Questionner le monde : le vivant, la matière et les objets ; l'espace et le temps.",
    domaines: [
      {
        titre: "Le vivant, la matière, les objets",
        attendus: [
          "Connaître les caractéristiques du vivant (naître, grandir, se reproduire) ; besoins des êtres vivants.",
          "Identifier des états et changements d'état de la matière ; propriétés (solide, liquide).",
          "Réaliser des objets techniques simples ; usages du numérique.",
        ],
      },
      {
        titre: "Se situer dans l'espace",
        attendus: [
          "Se repérer dans l'espace proche puis élargi ; lire et produire plans et cartes simples.",
          "Situer des lieux ; comparer des espaces (école, quartier, ville, campagne).",
        ],
      },
      {
        titre: "Se situer dans le temps",
        attendus: [
          "Repérer et situer des événements ; frise, calendrier, semaine, mois, saisons.",
          "Comparer des modes de vie à différentes époques ; évolution des objets.",
        ],
      },
    ],
  },
  emc: {
    intro: "Enseignement moral et civique : la sensibilité, la règle et le droit, le jugement, l'engagement.",
    domaines: [
      {
        titre: "La sensibilité, la règle, le jugement, l'engagement",
        attendus: [
          "Identifier et exprimer ses émotions ; respecter autrui, accepter les différences.",
          "Comprendre les règles de la vie collective ; élaborer et respecter les règles de la classe.",
          "Développer le discernement, argumenter, écouter les autres.",
          "Coopérer, prendre des responsabilités dans la classe et l'école.",
        ],
      },
    ],
  },
  eps: {
    intro: "Éducation physique et sportive : 4 champs d'apprentissage.",
    domaines: [
      {
        titre: "Les 4 champs d'apprentissage",
        attendus: [
          "1. Produire une performance optimale, mesurable (courir, sauter, lancer).",
          "2. Adapter ses déplacements à des environnements variés (nager, s'orienter, escalader).",
          "3. S'exprimer devant les autres par une prestation artistique/acrobatique (danse, gym).",
          "4. Conduire et maîtriser un affrontement individuel ou collectif (jeux d'opposition, collectifs).",
        ],
      },
    ],
  },
  arts: {
    intro: "Arts plastiques & Éducation musicale.",
    domaines: [
      {
        titre: "Arts plastiques",
        attendus: [
          "Expérimenter, produire, créer ; représenter le monde, exprimer des émotions.",
          "Observer, décrire des œuvres ; se repérer dans un musée, un lieu d'art.",
        ],
      },
      {
        titre: "Éducation musicale",
        attendus: [
          "Chanter (répertoire varié) ; explorer, imaginer et produire des sons.",
          "Écouter, comparer, commenter ; échanger sur son ressenti.",
        ],
      },
    ],
  },
  anglais: {
    intro: "Langue vivante : activités langagières orales prioritaires au cycle 2 (niveau A1 visé).",
    domaines: [
      {
        titre: "Activités langagières (A1)",
        attendus: [
          "Écouter et comprendre : consignes de classe, mots familiers, expressions courantes.",
          "Parler en continu : se présenter, réciter comptines, décrire simplement.",
          "Prendre part à une conversation : saluer, répondre à des questions simples.",
          "Repères culturels : fêtes, comptines, environnement de l'enfant du pays.",
        ],
      },
    ],
  },
};
