/**
 * Modèle de données des FICHES MATHS
 * ----------------------------------
 * Chaque fiche suit exactement la même structure (identité visuelle
 * cohérente). Les champs optionnels (?) ne sont affichés que s'ils
 * sont renseignés.
 *
 * Le texte peut contenir du **gras** (rendu par le composant RichText)
 * et des symboles mathématiques Unicode (² ³ √ π × ÷ ≈ ≤ ≥ ⊂ …).
 */

export type MathBloc = "nombres" | "algebre" | "geometrie" | "grandeurs";

/** Une formule mise en évidence (facile à recopier). */
export interface Formule {
  label?: string; // ex : "Aire du disque"
  expr: string; // ex : "A = π × r²"
}

/** Un tableau simple. */
export interface Tableau {
  titre?: string;
  entetes: string[];
  lignes: string[][];
}

/** Une étape corrigée d'un exemple (calcul + explication facultative). */
export interface LigneExemple {
  calcul: string;
  note?: string;
}

/** Une erreur fréquente + son explication. */
export interface Piege {
  erreur: string;
  pourquoi: string;
}

/** Une question de mini-entraînement + sa correction. */
export interface Question {
  question: string;
  correction: string;
}

export interface MathFiche {
  slug: string; // identifiant unique dans l'URL (ex : "theoreme-de-pythagore")
  bloc: MathBloc;
  numero: number; // numéro d'ordre affiché
  titre: string;
  intro: string; // 2-3 lignes d'introduction

  definition: string; // 🟦 Bleu
  comprendre: string[]; // 🧠 la logique de la notion
  points?: string[]; // 📋 points essentiels
  formules?: Formule[]; // formules mises en évidence
  tableau?: Tableau; // tableau optionnel
  methode: string[]; // 🟩 Vert — étapes numérotées
  exemple: { enonce?: string; lignes: LigneExemple[] }; // ✏️ corrigé
  pieges: Piege[]; // 🟥 Rouge
  astuce: string; // 🟨 Jaune
  retenir: string[]; // 🟪 Violet — max 5 points
  quiz: Question[]; // 🎯 mini entraînement
  schema?: string; // clé d'un schéma SVG (voir components/maths/schemas.tsx)
}

/** Libellés et couleurs d'accent de chaque bloc. */
export const MATH_BLOCS: Record<
  MathBloc,
  { label: string; emoji: string; pill: string; swatch: string }
> = {
  nombres: {
    label: "Nombres & Calculs",
    emoji: "🔢",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    swatch: "bg-sky-500",
  },
  algebre: {
    label: "Algèbre",
    emoji: "✳️",
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    swatch: "bg-emerald-500",
  },
  geometrie: {
    label: "Géométrie",
    emoji: "📐",
    pill: "bg-orange-100 text-orange-700 border-orange-200",
    swatch: "bg-orange-500",
  },
  grandeurs: {
    label: "Grandeurs & Mesures",
    emoji: "📏",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    swatch: "bg-violet-500",
  },
};
