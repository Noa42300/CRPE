/**
 * BLOC 2 — Algèbre (5 fiches)
 */
import type { MathFiche } from "./types";

export const BLOC2_ALGEBRE: MathFiche[] = [
  {
    slug: "le-developpement",
    bloc: "algebre",
    numero: 7,
    titre: "Le développement",
    intro:
      "Développer, c'est faire « sauter » les parenthèses en distribuant. C'est l'un des deux gestes de base du calcul littéral.",
    definition:
      "Développer une expression, c'est **supprimer les parenthèses** en distribuant chaque facteur extérieur sur tous les termes qu'elles contiennent.",
    comprendre: [
      "La multiplication est **distributive** sur l'addition : a(b + c) = ab + ac.",
      "On transforme un **produit** (avec parenthèses) en une **somme** (sans parenthèses).",
      "Développer, c'est l'opération **inverse** de factoriser.",
    ],
    points: [
      "**Distributivité simple** : a(b + c) = ab + ac.",
      "**Double distributivité** : (a + b)(c + d) = ac + ad + bc + bd.",
      "On termine toujours en **réduisant** les termes semblables.",
    ],
    formules: [
      { label: "Simple", expr: "a(b + c) = ab + ac" },
      { label: "Double", expr: "(a + b)(c + d) = ac + ad + bc + bd" },
    ],
    methode: [
      "Repérer le(s) facteur(s) extérieur(s) à la parenthèse.",
      "Multiplier **chaque** terme de la parenthèse.",
      "Faire attention aux **signes** (− × − = +).",
      "Réduire les termes semblables (regrouper les x, les x²…).",
    ],
    exemple: {
      enonce: "Développer (x + 2)(x + 4).",
      lignes: [
        { calcul: "(x + 2)(x + 4)", note: "double distributivité" },
        { calcul: "= x×x + x×4 + 2×x + 2×4", note: "chaque terme × chaque terme" },
        { calcul: "= x² + 4x + 2x + 8", note: "" },
        { calcul: "= x² + 6x + 8", note: "on réduit 4x + 2x" },
      ],
    },
    pieges: [
      {
        erreur: "Oublier de multiplier un des termes de la parenthèse.",
        pourquoi: "Chaque terme extérieur doit multiplier TOUS les termes intérieurs, sans exception.",
      },
      {
        erreur: "Se tromper de signe : −2(x − 3) = −2x − 6.",
        pourquoi: "−2 × (−3) = +6, donc −2(x − 3) = −2x + 6.",
      },
    ],
    astuce:
      "Pour la double distributivité, pense à la méthode **« chaque terme serre la main de chaque terme »** : 4 produits pour (a + b)(c + d).",
    retenir: [
      "Développer : produit → somme.",
      "a(b + c) = ab + ac.",
      "(a + b)(c + d) = ac + ad + bc + bd.",
      "Attention aux signes.",
      "Toujours réduire à la fin.",
    ],
    quiz: [
      { question: "Développer 3(x + 5).", correction: "3x + 15." },
      { question: "Développer (x + 1)(x + 3).", correction: "x² + 3x + x + 3 = x² + 4x + 3." },
      { question: "Développer −2(x − 4).", correction: "−2x + 8 (attention : −2 × −4 = +8)." },
    ],
  },

  {
    slug: "la-factorisation",
    bloc: "algebre",
    numero: 8,
    titre: "La factorisation",
    intro:
      "Factoriser, c'est le geste inverse du développement : transformer une somme en produit. Indispensable pour résoudre des équations.",
    definition:
      "Factoriser une expression, c'est la transformer en un **produit** de facteurs. C'est l'opération **inverse** du développement.",
    comprendre: [
      "On repère un **facteur commun** présent dans tous les termes, et on le met en évidence.",
      "Un produit est plus pratique qu'une somme pour résoudre une équation (un produit est nul si un facteur est nul).",
      "Parfois, on factorise grâce aux **identités remarquables**.",
    ],
    points: [
      "**Facteur commun** : ab + ac = a(b + c).",
      "**Identités remarquables** : reconnaître a² − b², a² + 2ab + b²…",
      "Utilité : simplifier, **résoudre une équation**, étudier un signe.",
    ],
    formules: [{ label: "Facteur commun", expr: "ab + ac = a(b + c)" }],
    methode: [
      "Chercher le **plus grand facteur commun** à tous les termes.",
      "Le mettre devant la parenthèse.",
      "Écrire dans la parenthèse ce qui reste après division.",
      "Vérifier en redéveloppant.",
    ],
    exemple: {
      enonce: "Factoriser 5x + 15.",
      lignes: [
        { calcul: "5x + 15", note: "facteur commun : 5" },
        { calcul: "= 5 × x + 5 × 3", note: "on fait apparaître le 5" },
        { calcul: "= 5(x + 3)", note: "on met 5 en facteur" },
        { calcul: "Vérif : 5(x + 3) = 5x + 15 ✔", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Ne mettre en facteur qu'une partie du facteur commun.",
        pourquoi: "Il faut toujours sortir le PLUS GRAND facteur commun (ex : 6x + 9 = 3(2x + 3), pas 3x(…)).",
      },
      {
        erreur: "Confondre factoriser et développer.",
        pourquoi: "Développer va vers une somme ; factoriser va vers un produit.",
      },
    ],
    astuce:
      "Moyen mnémotechnique : **Développer → somme**, **Factoriser → produit**. Après factorisation, vérifie toujours en redéveloppant.",
    retenir: [
      "Factoriser : somme → produit.",
      "ab + ac = a(b + c).",
      "Chercher le plus grand facteur commun.",
      "Utile pour résoudre les équations.",
      "Vérifier en redéveloppant.",
    ],
    quiz: [
      { question: "Factoriser 7x + 21.", correction: "7(x + 3)." },
      { question: "Factoriser 6x + 9.", correction: "3(2x + 3) — on sort le plus grand facteur commun, 3." },
      { question: "Factoriser x² + x.", correction: "x(x + 1)." },
    ],
  },

  {
    slug: "les-identites-remarquables",
    bloc: "algebre",
    numero: 9,
    titre: "Les identités remarquables",
    intro:
      "Trois formules à connaître par cœur qui accélèrent développements et factorisations. Un grand classique du CRPE.",
    definition:
      "Les identités remarquables sont trois **égalités à mémoriser** qui donnent directement le développement (ou la factorisation) de certaines expressions.",
    comprendre: [
      "Ce ne sont que des doubles distributivités… que l'on apprend par cœur pour aller plus vite.",
      "Elles fonctionnent dans les **deux sens** : pour développer ET pour factoriser.",
      "Le terme central **2ab** est la clé (et la source des erreurs).",
    ],
    points: [
      "**Carré d'une somme** : (a + b)² = a² + 2ab + b².",
      "**Carré d'une différence** : (a − b)² = a² − 2ab + b².",
      "**Différence de deux carrés** : (a + b)(a − b) = a² − b².",
    ],
    formules: [
      { label: "Somme", expr: "(a + b)² = a² + 2ab + b²" },
      { label: "Différence", expr: "(a − b)² = a² − 2ab + b²" },
      { label: "Produit conjugué", expr: "(a + b)(a − b) = a² − b²" },
    ],
    methode: [
      "Identifier **a** et **b** dans l'expression.",
      "Choisir la bonne identité selon le signe et la forme.",
      "Remplacer a et b dans la formule.",
      "Ne pas oublier le double produit **2ab**.",
    ],
    exemple: {
      enonce: "Développer (x + 3)².",
      lignes: [
        { calcul: "(x + 3)²", note: "forme (a + b)² avec a = x, b = 3" },
        { calcul: "= x² + 2×x×3 + 3²", note: "on applique a² + 2ab + b²" },
        { calcul: "= x² + 6x + 9", note: "le 2ab = 6x est essentiel" },
      ],
    },
    pieges: [
      {
        erreur: "Écrire (a + b)² = a² + b².",
        pourquoi: "On oublie le double produit ! (a + b)² = a² + 2ab + b².",
      },
      {
        erreur: "Se tromper de signe dans (a − b)².",
        pourquoi: "Le terme du milieu est négatif : (a − b)² = a² − 2ab + b².",
      },
    ],
    astuce:
      "Le piège nº 1 du CRPE est le terme **2ab** oublié. Répète : « carré du 1er, DOUBLE PRODUIT, carré du 2ᵉ ».",
    retenir: [
      "(a + b)² = a² + 2ab + b².",
      "(a − b)² = a² − 2ab + b².",
      "(a + b)(a − b) = a² − b².",
      "Ne jamais oublier le 2ab.",
      "Valables dans les deux sens.",
    ],
    quiz: [
      { question: "Développer (x + 5)².", correction: "x² + 10x + 25." },
      { question: "Développer (x − 4)².", correction: "x² − 8x + 16." },
      { question: "Factoriser x² − 9.", correction: "(x + 3)(x − 3) — différence de deux carrés." },
    ],
  },

  {
    slug: "les-inequations",
    bloc: "algebre",
    numero: 10,
    titre: "Les inéquations",
    intro:
      "Une inéquation, c'est comme une équation… mais avec un signe d'inégalité. Une seule règle change tout : la multiplication par un négatif.",
    definition:
      "Une inéquation compare deux expressions avec un signe **<, ≤, > ou ≥**. La résoudre, c'est trouver **toutes les valeurs** qui vérifient l'inégalité.",
    comprendre: [
      "On manipule une inéquation presque comme une équation.",
      "**Exception fondamentale** : multiplier ou diviser par un nombre négatif **inverse** le sens de l'inégalité.",
      "La solution est un **intervalle** de valeurs, pas un seul nombre.",
    ],
    points: [
      "Ajouter/soustraire un nombre : le sens **ne change pas**.",
      "Multiplier/diviser par un **positif** : le sens **ne change pas**.",
      "Multiplier/diviser par un **négatif** : on **inverse** le sens.",
      "Pour un quotient : faire un **tableau de signes**.",
    ],
    methode: [
      "Isoler les termes en x d'un côté, les nombres de l'autre.",
      "Simplifier chaque côté.",
      "Diviser par le coefficient de x.",
      "**Si ce coefficient est négatif : inverser le signe** de l'inégalité.",
    ],
    exemple: {
      enonce: "Résoudre 2x + 3 > 11.",
      lignes: [
        { calcul: "2x + 3 > 11", note: "" },
        { calcul: "2x > 11 − 3", note: "on soustrait 3 (sens inchangé)" },
        { calcul: "2x > 8", note: "" },
        { calcul: "x > 4", note: "on divise par 2 (positif → sens inchangé)" },
      ],
    },
    pieges: [
      {
        erreur: "Oublier d'inverser le signe : −2x > 8 ⟹ x > −4.",
        pourquoi: "On divise par −2 (négatif) : il faut inverser ! −2x > 8 ⟹ x < −4.",
      },
      {
        erreur: "Donner une seule valeur comme solution.",
        pourquoi: "La solution d'une inéquation est un ensemble de valeurs (un intervalle).",
      },
    ],
    astuce:
      "Le seul réflexe à ne jamais oublier : **× ou ÷ par un négatif → j'inverse le signe** (< devient >). Entoure le signe négatif pour t'en souvenir.",
    retenir: [
      "Inéquation : signe <, ≤, >, ≥.",
      "+ / − : sens inchangé.",
      "× / ÷ positif : sens inchangé.",
      "× / ÷ négatif : on INVERSE le sens.",
      "Solution = un intervalle.",
    ],
    quiz: [
      { question: "Résoudre x + 5 < 9.", correction: "x < 4." },
      { question: "Résoudre 3x ≥ 12.", correction: "x ≥ 4 (division par 3 positif)." },
      { question: "Résoudre −x > 2.", correction: "x < −2 (on inverse : division par −1)." },
    ],
  },

  {
    slug: "les-fonctions-maths",
    bloc: "algebre",
    numero: 11,
    titre: "Les fonctions",
    intro:
      "Une fonction est une machine qui transforme un nombre en un autre selon une règle. Lecture graphique et fonctions affines sont au cœur du CRPE.",
    definition:
      "Une fonction **f** associe à chaque nombre x **une unique image** f(x). On note x l'antécédent et f(x) son image.",
    comprendre: [
      "On donne un nombre (l'antécédent), la fonction renvoie un résultat (l'image).",
      "**Linéaire** f(x) = ax : représente une situation de proportionnalité (droite par l'origine).",
      "**Affine** f(x) = ax + b : une droite qui ne passe pas forcément par l'origine.",
      "Le signe de **a** donne le sens de variation.",
    ],
    points: [
      "**x** → antécédent ; **f(x)** → image.",
      "**Fonction linéaire** : f(x) = ax (passe par l'origine).",
      "**Fonction affine** : f(x) = ax + b.",
      "**a > 0** → croissante ; **a < 0** → décroissante.",
    ],
    formules: [
      { label: "Affine", expr: "f(x) = ax + b" },
      { label: "Linéaire", expr: "f(x) = ax" },
    ],
    methode: [
      "Pour une **image** : remplacer x par sa valeur dans f(x).",
      "Pour un **antécédent** : résoudre l'équation f(x) = valeur.",
      "Sur un graphique : lire verticalement (image) ou horizontalement (antécédent).",
      "Déterminer le sens de variation grâce au signe de a.",
    ],
    exemple: {
      enonce: "Soit f(x) = 2x + 3. Calculer l'image de 4.",
      lignes: [
        { calcul: "f(x) = 2x + 3", note: "" },
        { calcul: "f(4) = 2 × 4 + 3", note: "on remplace x par 4" },
        { calcul: "f(4) = 8 + 3 = 11", note: "l'image de 4 est 11" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre image et antécédent.",
        pourquoi: "L'image se calcule (on donne x) ; l'antécédent se cherche (on connaît f(x) et on résout).",
      },
      {
        erreur: "Croire que toute fonction affine passe par l'origine.",
        pourquoi: "Seule la fonction linéaire (b = 0) passe par l'origine.",
      },
    ],
    astuce:
      "Pour ne plus confondre : **image = ce qui sort** (on a mis x dedans), **antécédent = ce qu'on avait mis**. « anté » = avant.",
    retenir: [
      "f associe à x une unique image f(x).",
      "x = antécédent, f(x) = image.",
      "Linéaire : f(x) = ax (par l'origine).",
      "Affine : f(x) = ax + b.",
      "a > 0 croissante, a < 0 décroissante.",
    ],
    quiz: [
      { question: "f(x) = 3x − 1. Calculer f(2).", correction: "f(2) = 3×2 − 1 = 5." },
      { question: "f(x) = 2x. Quel est l'antécédent de 10 ?", correction: "2x = 10 donc x = 5." },
      { question: "f(x) = −4x + 1 est-elle croissante ?", correction: "Non : a = −4 < 0, donc décroissante." },
    ],
  },
];
