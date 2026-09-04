/**
 * Programmations annuelles OFFICIELLES de la classe (référence permanente)
 * -----------------------------------------------------------------------
 * Données 100 % pédagogiques (aucune donnée élève), transcrites depuis les
 * documents de l'enseignant·e : sommaire « 1,2,3 Étude de la langue », dictées
 * Graphémo, répartition annuelle de français, et programmations de maths
 * (CE1 et CE2, par période et par domaine). Servent de socle pour préparer et
 * pré-remplir les programmations/progressions du cahier journal.
 */

export type PeriodeKey = "P1" | "P2" | "P3" | "P4" | "P5";
export const PERIODES: PeriodeKey[] = ["P1", "P2", "P3", "P4", "P5"];

/** Sommaire « 1,2,3… Étude de la langue » (EDL), par domaine. */
export const EDL_SOMMAIRE: Record<string, string[]> = {
  Orthographe: [
    "1. Les consonnes doubles",
    "2. Les valeurs de la lettre g",
    "3. Les valeurs de la lettre s",
    "4. Les valeurs de la lettre c",
    "5. La lettre m devant m, b, p",
    "6. Les mots en -ail, -eil, -euil, -ouil",
    "7. Les accents é, è, ê",
    "8. Les graphies proches : ien/ein, ian/ain, ion/oin",
    "9. Le genre des noms et des adjectifs",
    "10. Le nombre des noms et des adjectifs",
  ],
  Grammaire: [
    "11. Les articles et autres déterminants",
    "12. Le nom",
    "13. L'adjectif",
    "14. Les pronoms personnels sujets",
    "15. Les mots invariables",
    "16. Le groupe nominal : construction et accord",
    "17. Identifier les classes grammaticales (révisions)",
    "18. Le sujet",
    "19. Le verbe : nature, fonction, infinitif",
    "20. Les compléments",
    "21. Les types de phrases",
    "22. Les formes de phrases",
  ],
  Conjugaison: [
    "23. Le présent",
    "24. L'imparfait",
    "25. Le futur",
    "26. Présent, imparfait, futur : les régularités",
    "27. Passé, présent, futur",
    "28. Le passé composé",
  ],
  Vocabulaire: [
    "29. Le dictionnaire",
    "30. Le lexique : champs lexicaux, synonymes et antonymes, familles de mots, niveaux de langue (Thèmes : L'école, La vie quotidienne, Les émotions)",
  ],
};

/** Dictées Graphémo, par période puis par semaine (S1 → S7). */
export const GRAPHEMO: Record<PeriodeKey, string[]> = {
  P1: [
    "S1 — Dictée diagnostique",
    "S2 — 1. L'alphabet",
    "S3 — 2. La combinaison des lettres",
    "S4 — 3. Les lettres finales muettes",
    "S5 — 4. La lettre r",
    "S6 — 5. La lettre t",
    "S7 — Notions : Le nom, Le verbe, Le sujet, Le présent",
  ],
  P2: [
    "S1 — 6. La lettre d",
    "S2 — 7. La lettre p",
    "S3 — 8. La lettre a",
    "S4 — 9. La lettre e",
    "S5 — 10. Les accents",
    "S6 — 11. La lettre s",
    "S7 — Notions : Articles et déterminants, Les mots invariables, Les adjectifs",
  ],
  P3: [
    "S1 — 12. La lettre o",
    "S2 — 13. La lettre h",
    "S3 — 14. La lettre m",
    "S4 — 15. La lettre c",
    "S5 — 16. Les consonnes doubles",
    "S6 — 17. La lettre g",
    "S7 — Notions : Les pronoms personnels sujets, L'imparfait",
  ],
  P4: [
    "S1 — 18. La lettre i",
    "S2 — 19. La lettre i (suite)",
    "S3 — 20. Les graphies proches",
    "S4 — 21. Le e final dans les noms féminins",
    "S5 — 22. Le féminin des mots en -er et en -ier",
    "S6 — 23. Le féminin des adjectifs",
    "S7 — Notions : Le genre des noms et adjectifs, Le groupe nominal, Les compléments, Le futur",
  ],
  P5: [
    "S1 — 24. Le nombre des noms",
    "S2 — 25. Le nombre des adjectifs",
    "S3 — 27. La lettre x",
    "S4 — 28. Les mots dérivés",
    "S5 — 29. Les accords dans le groupe nominal",
    "S6 — 30. L'accord sujet-verbe",
    "S7 — Dictée diagnostique finale. Notions : Le passé composé, Les régularités",
  ],
};

/** Répartition annuelle de français, par période et par domaine (CE1-CE2). */
export const REPART_FRANCAIS: Record<PeriodeKey, Record<string, string[]>> = {
  P1: {
    Grammaire: ["Les articles et les autres déterminants", "Le nom"],
    Conjugaison: ["Le présent de l'indicatif"],
    Orthographe: ["L'alphabet", "La combinaison des lettres", "Les lettres finales muettes", "La lettre R", "La lettre T"],
    Vocabulaire: ["Le dictionnaire"],
  },
  P2: {
    Grammaire: ["L'adjectif", "Les pronoms personnels sujets"],
    Conjugaison: ["L'imparfait"],
    Orthographe: ["La lettre D", "La lettre P", "La lettre A", "La lettre E", "Les accents", "La lettre S"],
    Vocabulaire: [],
  },
  P3: {
    Grammaire: ["Les mots invariables", "Le groupe nominal : construction et accord"],
    Conjugaison: ["Le futur simple"],
    Orthographe: ["La lettre O", "La lettre H", "La lettre M", "La lettre C", "Les consonnes doubles"],
    Vocabulaire: ["Les synonymes et antonymes, les familles de mots, les niveaux de langue"],
  },
  P4: {
    Grammaire: ["Identifier les classes grammaticales", "Le sujet"],
    Conjugaison: ["Présent, imparfait, futur : les régularités"],
    Orthographe: ["La lettre G", "La lettre I", "La lettre I (bis)", "Les graphies proches", "Le E final dans les noms féminins"],
    Vocabulaire: [],
  },
  P5: {
    Grammaire: ["Le verbe : nature, fonction, infinitif", "Les compléments", "Les types de phrases", "Les formes de phrases"],
    Conjugaison: ["Passé, présent, futur : les temps simples et composés (CE2)", "Le passé composé"],
    Orthographe: ["Le féminin des mots en -ER et -IER", "Le féminin des adjectifs", "Le genre des noms et adjectifs", "Le nombre des noms", "Le nombre des adjectifs", "La lettre X", "Les mots dérivés", "Les accords dans le groupe nominal", "L'accord sujet-verbe"],
    Vocabulaire: [],
  },
};

/** Programmation de mathématiques (méthode Tandem), par niveau/période/domaine. */
export type MathsNiveau = "CE1" | "CE2";
export const PROG_MATHS: Record<MathsNiveau, Record<PeriodeKey, Record<string, string[]>>> = {
  CE1: {
    P1: {
      Nombres: ["Dénombrer et représenter une collection jusqu'à 99", "Comparer des nombres", "Construire et représenter le nombre 100", "Nommer et écrire les nombres en lettres", "Connaître la suite des nombres jusqu'à 200"],
      Calcul: ["Décomposer pour additionner (1)", "Décomposer pour additionner (2)", "Poser une addition (1)", "Décomposer pour soustraire"],
      "Espace & Géométrie": ["Se repérer dans l'espace de l'école", "Se repérer dans le quartier et la ville", "Se déplacer sur un plan de la ville"],
      "Résolution de problèmes": ["Problèmes de comparaison"],
      "Grandeurs & Mesures": ["Manipuler les centimes d'euro", "Comparer et mesurer des longueurs", "Graduer des segments pour les comparer"],
    },
    P2: {
      Nombres: ["Manipuler les centaines, dizaines et unités", "Encadrer un nombre", "Connaître les centaines entières jusqu'à 1000", "Ranger des nombres", "Connaître la suite des nombres jusqu'à 1000"],
      Fractions: ["Construire et manipuler des fractions (1)"],
      Calcul: ["Ajouter un nombre inférieur à 9", "Soustraire un nombre inférieur à 9", "Décomposer pour additionner (3)", "Poser une addition (2)"],
      "Résolution de problèmes": ["Problèmes de transformation"],
      "Grandeurs & Mesures": ["Construire des relations entre unités de longueur", "Estimer et mesurer en cm et m", "Construire le km"],
    },
    P3: {
      Nombres: ["Les nombres pairs et impairs", "Décomposer un nombre", "Les doubles et les moitiés", "Les différentes écritures d'un nombre", "Connaître et utiliser les nombres ordinaux"],
      Fractions: ["Construire et manipuler des fractions (2)"],
      Calcul: ["Le sens de la multiplication (1)", "Le sens de la multiplication (2)", "Poser une soustraction (1)", "Poser une soustraction (2)"],
      "Espace & Géométrie": ["Construire un assemblage de solides", "Reconnaître et nommer un solide", "Décrire un solide", "Construire un solide"],
      "Résolution de problèmes": ["Problèmes additifs à étapes"],
      "Grandeurs & Mesures": ["Découvrir une nouvelle écriture des prix"],
    },
    P4: {
      Nombres: ["Manipuler les centaines, dizaines et unités (2)", "Comparer, ranger, encadrer et intercaler des nombres", "Comprendre les suites répétitives", "Décomposer un nombre autrement", "Comprendre les suites"],
      Fractions: ["Comparer des fractions", "Calculer avec des fractions"],
      Calcul: ["Ajouter 9, 19, 29", "Retirer 9", "Calculer la moitié d'un nombre pair", "Ajouter ou soustraire un nombre entier de dizaines, de centaines"],
      "Espace & Géométrie": ["Reconnaître et nommer une figure plane", "Utiliser l'équerre pour reconnaître les angles", "Utiliser la règle : alignements et milieu"],
      "Résolution de problèmes": ["Problèmes multiplicatifs"],
      "Grandeurs & Mesures": ["Comparer et ranger des masses", "Construire des relations entre unités de masse", "Estimer et mesurer des masses en g et kg", "Résoudre des problèmes de prix"],
    },
    P5: {
      Calcul: ["Poser une soustraction (3)", "Décomposer pour multiplier", "Utiliser les tables de multiplication", "Pour diviser (1)", "Utiliser les tables de multiplication pour diviser (2)"],
      "Espace & Géométrie": ["Tracer un rectangle, un carré", "Tracer un triangle rectangle", "Utiliser un compas", "Construire un assemblage de figures"],
      "Résolution de problèmes": ["Problèmes mixtes à étapes"],
      "Grandeurs & Mesures": ["Lire et indiquer l'heure", "Utiliser les unités de durée", "Résoudre des problèmes de durée"],
    },
  },
  CE2: {
    P1: {
      Nombres: ["Dénombrer et représenter une collection jusqu'à 1000", "Comparer des nombres", "Construire et représenter le nombre 1000", "Nommer et écrire les nombres en lettres", "Connaître la suite des nombres jusqu'à 2000"],
      Calcul: ["Décomposer pour additionner (1)", "Décomposer pour additionner (2)", "Poser une addition (1)", "Décomposer pour soustraire"],
      "Espace & Géométrie": ["Identifier la symétrie", "Compléter une figure par symétrie (1)", "Compléter une figure par symétrie (2)"],
      "Résolution de problèmes": ["Problèmes de comparaison additifs et multiplicatifs"],
      "Grandeurs & Mesures": ["Rendre la monnaie en euros et en centimes", "Comparer des périmètres", "Construire des relations entre unités de longueur"],
    },
    P2: {
      Nombres: ["Manipuler les milliers, centaines, dizaines et unités", "Encadrer un nombre", "Connaître les centaines entières jusqu'à 10 000", "Ranger des nombres", "Connaître la suite des nombres jusqu'à 10 000"],
      Fractions: ["Établir des égalités de fractions"],
      Calcul: ["Ajouter un nombre inférieur à 19", "Soustraire un nombre inférieur à 19", "Poser une soustraction (1)", "Ajouter 8, 9, 18, 19, 28, 29, 38, 39… à un nombre"],
      "Résolution de problèmes": ["Problèmes de transformation"],
      "Grandeurs & Mesures": ["Estimer et mesurer des longueurs en mm, cm, dm, m et km", "Mesurer des périmètres", "Poser une addition avec des centimes d'euro"],
    },
    P3: {
      Nombres: ["Distinguer chiffre des et nombre de", "Décomposer un nombre", "Manipuler les milliers, les dizaines : nombre de dizaines, nombre de centaines…", "Repérer précisément les nombres sur la droite graduée"],
      Fractions: ["Mesurer avec une unité de longueur partagée en fractions"],
      Calcul: ["Multiplier par un nombre entier de dizaines", "Décomposer pour multiplier", "Poser une multiplication (1)", "Poser une multiplication (2)"],
      "Espace & Géométrie": ["Construire un cercle", "Reconnaître et nommer un solide", "Construire un cube, un pavé et une pyramide", "Construire un cube et un patron de cube"],
      "Résolution de problèmes": ["Problèmes additifs à étapes"],
      "Grandeurs & Mesures": ["Comparer des contenus et des contenances"],
    },
    P4: {
      Nombres: ["Manipuler les milliers, centaines, dizaines et unités", "Comparer, ranger, encadrer jusqu'à 10 000", "Reconnaître les multiples de 100, 50 et 25", "Décomposer les grands nombres autrement", "Les suites évolutives"],
      Fractions: ["Comparer des fractions", "Calculer avec des fractions"],
      Calcul: ["Soustraire 9, 19, 29, 39 à un nombre", "Le sens de la division", "Utiliser les tables de multiplication pour diviser", "Poser une addition (2)"],
      "Espace & Géométrie": ["Connaître et nommer une figure plane", "Connaître les propriétés du losange et du carré", "Coder le milieu"],
      "Résolution de problèmes": ["Problèmes multiplicatifs et produits cartésiens"],
      "Grandeurs & Mesures": ["Des unités arbitraires aux unités ordinaires", "Estimer et mesurer en cl, dl et L", "Revoir les unités de masse g et kg", "Estimer et mesurer en tonne", "Poser une soustraction avec des centimes d'euro"],
    },
    P5: {
      Calcul: ["Poser une soustraction (2)", "Multiplier par 4, par 8", "Poser une multiplication (3)", "Diviser par essais-ajustements"],
      "Espace & Géométrie": ["Construire un rectangle, un carré", "Construire un triangle rectangle", "Construire des polygones", "Construire un assemblage de figures"],
      "Résolution de problèmes": ["Problèmes mixtes à étapes"],
      "Grandeurs & Mesures": ["Lire et indiquer l'heure", "Résoudre des problèmes de durée"],
    },
  },
};

/**
 * Construit le texte pré-rempli d'une zone de programmation pour une période.
 * @param discipline id de discipline ("francais" | "maths")
 * @param periode    P1…P5
 * @param niveau     CE1 | CE2 (utile surtout pour les maths)
 */
export function programmationTexte(
  discipline: string,
  periode: PeriodeKey,
  niveau: MathsNiveau,
): string {
  if (discipline === "maths") {
    const dom = PROG_MATHS[niveau][periode];
    return Object.entries(dom)
      .map(([d, items]) => `${d} :\n- ${items.join("\n- ")}`)
      .join("\n\n");
  }
  if (discipline === "francais") {
    const dom = REPART_FRANCAIS[periode];
    const bloc = Object.entries(dom)
      .filter(([, items]) => items.length > 0)
      .map(([d, items]) => `${d} :\n- ${items.join("\n- ")}`)
      .join("\n\n");
    const dictees = `Dictées (Graphémo) :\n- ${GRAPHEMO[periode].join("\n- ")}`;
    return `${bloc}\n\n${dictees}`;
  }
  return "";
}
