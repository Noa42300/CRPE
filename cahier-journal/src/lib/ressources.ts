/**
 * Ressources pédagogiques CE1-CE2 — annuaire de sources fiables.
 * --------------------------------------------------------------
 * On tape un mot-clé (une notion) et on lance la recherche sur une source de
 * confiance : la source ouvre ses séances / vidéos / fiches toutes faites.
 * On passe par une recherche ciblée (`site:` quand le domaine est connu) pour
 * éviter les liens morts : la source reste stable, la requête s'adapte.
 *
 * Donnée 100 % pédagogique (aucune donnée élève).
 */
export interface Ressource {
  nom: string;
  /** Domaine pour restreindre la recherche (site:). Vide → recherche web simple. */
  domaine?: string;
  /** Termes ajoutés à la requête pour cadrer (niveau, type…). */
  cadre?: string;
  description: string;
  matieres: string[]; // "français","maths","qlm","anglais","eps","emc","arts","poésie","transversal"
  type: "séances" | "vidéos" | "fiches" | "officiel" | "outil";
}

export const RESSOURCES: Ressource[] = [
  { nom: "Éduscol", domaine: "eduscol.education.fr", cadre: "cycle 2", type: "officiel",
    description: "Programmes, attendus de fin d'année et ressources officielles du ministère.",
    matieres: ["transversal", "français", "maths", "qlm", "emc", "eps", "anglais", "arts"] },
  { nom: "Réseau Canopé", domaine: "reseau-canope.fr", cadre: "cycle 2 CE1 CE2", type: "séances",
    description: "Séances, dossiers et ressources créées par l'Éducation nationale.",
    matieres: ["transversal", "français", "maths", "qlm", "emc", "arts"] },
  { nom: "Les Fondamentaux (Canopé)", domaine: "lesfondamentaux.reseau-canope.fr", cadre: "", type: "vidéos",
    description: "Films d'animation courts pour expliquer une notion (français, maths, sciences, EMC).",
    matieres: ["français", "maths", "qlm", "emc"] },
  { nom: "Lumni Enseignants", domaine: "enseignants.lumni.fr", cadre: "cycle 2", type: "vidéos",
    description: "Vidéos et séquences prêtes à l'emploi, toutes matières.",
    matieres: ["transversal", "français", "maths", "qlm", "emc", "anglais", "arts"] },
  { nom: "M@ths en-vie", domaine: "mathsenvie.fr", cadre: "CE1 CE2", type: "séances",
    description: "Résolution de problèmes à partir de photos du quotidien.",
    matieres: ["maths"] },
  { nom: "Calcul@TICE", domaine: "calculatice.ac-lille.fr", cadre: "", type: "outil",
    description: "Exercices interactifs de calcul mental, par niveau.",
    matieres: ["maths"] },
  { nom: "La main à la pâte", domaine: "fondation-lamap.org", cadre: "cycle 2", type: "séances",
    description: "Séquences et activités de sciences clés en main (démarche d'investigation), Fondation La main à la pâte.",
    matieres: ["qlm"] },
  { nom: "Billes de Sciences", domaine: "youtube.com", cadre: "Billes de Sciences", type: "vidéos",
    description: "Chaîne vidéo de La main à la pâte : notions de sciences expliquées simplement (à projeter).",
    matieres: ["qlm"] },
  { nom: "EPS 42 (DSDEN Loire)", cadre: "EPS 42 cycle 2", type: "séances",
    description: "Situations et modules d'EPS 1er degré (athlétisme, jeux, etc.).",
    matieres: ["eps"] },
  { nom: "La Classe de Mallory", domaine: "laclassedemallory.net", cadre: "CE1 CE2", type: "fiches",
    description: "Séances et fiches clés en main pour le cycle 2.",
    matieres: ["transversal", "français", "maths", "qlm", "emc"] },
  { nom: "Lutin Bazar", domaine: "lutinbazar.fr", cadre: "CE1 CE2", type: "fiches",
    description: "Français, questionner le monde, rituels — beaucoup de CE1-CE2.",
    matieres: ["français", "qlm", "emc"] },
  { nom: "Bout de Gomme", domaine: "boutdegomme.fr", cadre: "CE1 CE2", type: "fiches",
    description: "Fiches, affichages et exercices illustrés pour le cycle 2.",
    matieres: ["français", "maths", "qlm"] },
  { nom: "Charivari à l'école", domaine: "charivarialecole.fr", cadre: "CE1 CE2", type: "fiches",
    description: "Idées, rituels et fiches pratiques de classe.",
    matieres: ["transversal", "français", "maths", "emc"] },
  { nom: "Pass-Education", domaine: "pass-education.fr", cadre: "CE1 CE2 cycle 2", type: "fiches",
    description: "Leçons, exercices et évaluations à imprimer (PDF) pour le cycle 2, par matière.",
    matieres: ["transversal", "français", "maths", "qlm", "emc"] },
  { nom: "Edumoov (LSU & suivi)", domaine: "edumoov.com", cadre: "", type: "outil",
    description: "Fiches de suivi, évaluation par compétences (radar/« toile d'araignée ») et génération du LSU (Livret Scolaire Unique).",
    matieres: ["transversal"] },
  { nom: "Poésies cycle 2", cadre: "poésie CE1 CE2 à imprimer", type: "fiches",
    description: "Recueils de poésies à imprimer, illustrer et réciter (CE1-CE2).",
    matieres: ["poésie", "français"] },
];

export const MATIERES_RESSOURCE: { id: string; label: string }[] = [
  { id: "transversal", label: "Tout" },
  { id: "français", label: "Français" },
  { id: "maths", label: "Maths" },
  { id: "qlm", label: "Quest. le monde" },
  { id: "anglais", label: "Anglais" },
  { id: "eps", label: "EPS" },
  { id: "emc", label: "EMC" },
  { id: "poésie", label: "Poésie" },
  { id: "arts", label: "Arts" },
];

/** Construit l'URL de recherche pour une ressource et un mot-clé. */
export function ressourceUrl(r: Ressource, motCle: string): string {
  const parts = [motCle.trim(), r.cadre?.trim() || ""].filter(Boolean);
  if (r.domaine) parts.push(`site:${r.domaine}`);
  const q = parts.join(" ").trim() || (r.domaine ? `site:${r.domaine}` : r.nom);
  return `https://duckduckgo.com/?q=${encodeURIComponent(q)}`;
}
