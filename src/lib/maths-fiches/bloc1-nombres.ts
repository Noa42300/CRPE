/**
 * BLOC 1 — Nombres & Calculs (6 fiches)
 */
import type { MathFiche } from "./types";

export const BLOC1_NOMBRES: MathFiche[] = [
  {
    slug: "ensembles-de-nombres",
    bloc: "nombres",
    numero: 1,
    titre: "Les ensembles de nombres",
    intro:
      "Les nombres se rangent dans des « familles » emboîtées les unes dans les autres. Savoir les reconnaître est la base de tout le programme.",
    schema: "ensembles",
    definition:
      "Les ensembles de nombres sont des catégories qui regroupent les nombres selon leurs propriétés. Ils s'emboîtent : **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ**.",
    comprendre: [
      "Chaque ensemble **contient** le précédent et lui ajoute de nouveaux nombres.",
      "On agrandit à chaque fois : d'abord les entiers positifs, puis les négatifs, puis les fractions, puis les nombres « impossibles à écrire en fraction ».",
      "Un nombre appartient toujours à **plusieurs** ensembles à la fois (3 est dans ℕ, ℤ, ℚ et ℝ).",
    ],
    points: [
      "**ℕ** (naturels) : 0, 1, 2, 3… → entiers positifs.",
      "**ℤ** (relatifs) : …, −2, −1, 0, 1, 2… → on ajoute les négatifs.",
      "**ℚ** (rationnels) : tout nombre qui s'écrit en fraction (½ ; −3/4 ; 0,25).",
      "**ℝ** (réels) : tous les nombres, y compris les irrationnels (π ; √2).",
    ],
    formules: [{ label: "Inclusion", expr: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ" }],
    methode: [
      "Regarder si le nombre est **entier** ou non.",
      "S'il est entier : positif → ℕ, négatif → ℤ.",
      "S'il n'est pas entier : peut-il s'écrire en **fraction** ? Oui → ℚ.",
      "Sinon (π, √2…) → il est seulement dans **ℝ**.",
    ],
    exemple: {
      enonce: "À quels ensembles appartient le nombre −5 ? Et le nombre √2 ?",
      lignes: [
        { calcul: "−5 est un entier négatif", note: "donc −5 ∈ ℤ" },
        { calcul: "−5 = −5/1", note: "il s'écrit en fraction → −5 ∈ ℚ" },
        { calcul: "−5 ∈ ℤ ⊂ ℚ ⊂ ℝ", note: "mais −5 ∉ ℕ (il est négatif)" },
        { calcul: "√2 ≈ 1,414… (jamais exact)", note: "impossible en fraction" },
        { calcul: "√2 ∈ ℝ seulement", note: "c'est un nombre irrationnel" },
      ],
    },
    pieges: [
      {
        erreur: "Croire que √2 ou π sont des nombres rationnels.",
        pourquoi: "Ils ne peuvent PAS s'écrire sous forme de fraction : ils sont irrationnels, donc uniquement dans ℝ.",
      },
      {
        erreur: "Penser que 0 n'est pas un nombre naturel.",
        pourquoi: "En France, 0 appartient bien à ℕ.",
      },
    ],
    astuce:
      "Retiens la phrase **« N Z Q R »** dans l'ordre croissant de taille : chaque lettre « avale » la précédente. Les flèches ⊂ pointent toujours vers le plus grand ensemble.",
    retenir: [
      "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ (du plus petit au plus grand).",
      "ℕ = positifs entiers ; ℤ = + les négatifs.",
      "ℚ = tout ce qui s'écrit en fraction.",
      "ℝ = tout, y compris π et √2.",
      "√2 et π sont irrationnels : ℝ uniquement.",
    ],
    quiz: [
      { question: "À quels ensembles appartient −3 ?", correction: "−3 ∈ ℤ, ℚ et ℝ (mais pas ℕ car il est négatif)." },
      { question: "Le nombre 0,75 est-il rationnel ?", correction: "Oui : 0,75 = 3/4, il s'écrit en fraction, donc 0,75 ∈ ℚ." },
      { question: "π appartient-il à ℚ ?", correction: "Non. π est irrationnel : il appartient seulement à ℝ." },
    ],
  },

  {
    slug: "les-fractions",
    bloc: "nombres",
    numero: 2,
    titre: "Les fractions",
    intro:
      "Une fraction, c'est simplement une division qui n'est pas encore terminée. Maîtriser les 4 opérations est indispensable au CRPE.",
    schema: "fraction",
    definition:
      "Une fraction **a/b** représente la division a ÷ b. **a** est le numérateur (ce qu'on prend), **b** le dénominateur (en combien de parts on partage, b ≠ 0).",
    comprendre: [
      "Le dénominateur indique la **taille des parts**, le numérateur **combien** on en prend.",
      "Pour additionner des parts, il faut qu'elles aient la **même taille** : d'où le dénominateur commun.",
      "Simplifier ne change pas la valeur : 2/4 et 1/2, c'est la même quantité.",
    ],
    points: [
      "**Simplifier** : diviser numérateur ET dénominateur par le même nombre.",
      "**Addition / soustraction** : même dénominateur obligatoire.",
      "**Multiplication** : numérateurs entre eux, dénominateurs entre eux.",
      "**Division** : multiplier par l'**inverse** de la 2ᵉ fraction.",
    ],
    formules: [
      { label: "Multiplication", expr: "a/b × c/d = (a×c)/(b×d)" },
      { label: "Division", expr: "a/b ÷ c/d = a/b × d/c" },
    ],
    methode: [
      "Pour additionner : chercher un **dénominateur commun**.",
      "Convertir chaque fraction avec ce dénominateur.",
      "Additionner (ou soustraire) **les numérateurs seulement**.",
      "**Simplifier** le résultat si possible.",
    ],
    exemple: {
      enonce: "Calculer 2/3 + 1/6.",
      lignes: [
        { calcul: "Dénominateur commun de 3 et 6 : 6", note: "car 6 = 3 × 2" },
        { calcul: "2/3 = 4/6", note: "on multiplie haut et bas par 2" },
        { calcul: "4/6 + 1/6 = 5/6", note: "on additionne les numérateurs" },
        { calcul: "5/6", note: "déjà simplifié (5 et 6 n'ont pas de diviseur commun)" },
      ],
    },
    pieges: [
      {
        erreur: "Additionner les dénominateurs : 2/3 + 1/3 = 3/6.",
        pourquoi: "Faux ! On garde le dénominateur commun : 2/3 + 1/3 = 3/3 = 1.",
      },
      {
        erreur: "Oublier de simplifier le résultat final.",
        pourquoi: "Au CRPE, une fraction non simplifiée peut coûter des points.",
      },
    ],
    astuce:
      "Pour **diviser**, pense : « diviser, c'est multiplier par l'inverse ». On retourne la 2ᵉ fraction, et on multiplie.",
    retenir: [
      "a/b = a ÷ b (dénominateur ≠ 0).",
      "Addition/soustraction → même dénominateur.",
      "Multiplication → haut × haut, bas × bas.",
      "Division → × l'inverse.",
      "Toujours simplifier à la fin.",
    ],
    quiz: [
      { question: "Calculer 3/4 + 1/4.", correction: "3/4 + 1/4 = 4/4 = 1 (même dénominateur, on additionne les numérateurs)." },
      { question: "Calculer 2/3 × 3/5.", correction: "(2×3)/(3×5) = 6/15 = 2/5 après simplification par 3." },
      { question: "Calculer 1/2 ÷ 1/4.", correction: "1/2 × 4/1 = 4/2 = 2 (on multiplie par l'inverse)." },
    ],
  },

  {
    slug: "la-proportionnalite",
    bloc: "nombres",
    numero: 3,
    titre: "La proportionnalité",
    intro:
      "La proportionnalité est LA notion reine du CRPE : recettes, vitesses, échelles, pourcentages… tout en découle.",
    definition:
      "Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant **toujours par le même nombre**, appelé coefficient de proportionnalité.",
    comprendre: [
      "« Proportionnel » = on multiplie (jamais on ajoute).",
      "Si je double une grandeur, l'autre double aussi ; si je triple, l'autre triple.",
      "Le coefficient **k** est le même pour toutes les colonnes du tableau.",
    ],
    points: [
      "**Tableau de proportionnalité** : on multiplie (ou divise) toujours par le même nombre.",
      "**Règle de 3** : passer par la valeur pour 1 unité.",
      "**Coefficient** : k = y ÷ x.",
      "Graphiquement : une droite qui **passe par l'origine**.",
    ],
    formules: [{ label: "Coefficient", expr: "k = y ÷ x" }],
    tableau: {
      titre: "Exemple : prix de pommes (proportionnel)",
      entetes: ["Masse (kg)", "2", "4", "6"],
      lignes: [["Prix (€)", "6", "12", "18"]],
    },
    methode: [
      "Vérifier que la situation est bien **proportionnelle**.",
      "Calculer le **coefficient** k = y ÷ x sur une colonne connue.",
      "Pour une valeur inconnue : **multiplier** par k (ou utiliser la règle de 3).",
      "Vérifier la cohérence du résultat.",
    ],
    exemple: {
      enonce: "2 kg de pommes coûtent 6 €. Combien coûtent 5 kg ?",
      lignes: [
        { calcul: "k = 6 ÷ 2 = 3", note: "prix pour 1 kg = coefficient" },
        { calcul: "5 × 3 = 15", note: "on multiplie la masse par k" },
        { calcul: "5 kg coûtent 15 €", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre proportionnalité et addition : « +2 kg donc +2 € ».",
        pourquoi: "La proportionnalité est une MULTIPLICATION par un coefficient constant, pas une addition.",
      },
      {
        erreur: "Croire que toute situation est proportionnelle.",
        pourquoi: "Un abonnement avec frais fixes n'est pas proportionnel (la droite ne passe pas par l'origine).",
      },
    ],
    astuce:
      "Un tableau est proportionnel **si et seulement si** tous les quotients y ÷ x sont égaux. Teste deux colonnes : si k change, ce n'est pas proportionnel.",
    retenir: [
      "Proportionnel = × un même coefficient k.",
      "k = y ÷ x.",
      "Règle de 3 : passer par 1 unité.",
      "Graphe = droite passant par l'origine.",
      "Multiplier, jamais additionner.",
    ],
    quiz: [
      { question: "3 stylos coûtent 4,50 €. Combien coûtent 7 stylos ?", correction: "k = 4,50 ÷ 3 = 1,50 €/stylo. 7 × 1,50 = 10,50 €." },
      { question: "Le tableau (2 → 5) et (4 → 9) est-il proportionnel ?", correction: "Non : 5 ÷ 2 = 2,5 mais 9 ÷ 4 = 2,25. Les coefficients diffèrent." },
    ],
  },

  {
    slug: "les-pourcentages",
    bloc: "nombres",
    numero: 4,
    titre: "Les pourcentages",
    intro:
      "Un pourcentage n'est qu'une fraction de dénominateur 100. Le transformer en coefficient rend tous les calculs simples.",
    definition:
      "Un pourcentage **p %** est une proportion sur 100 : p % = p/100. Prendre p % d'un nombre, c'est le multiplier par p/100.",
    comprendre: [
      "« Pour cent » signifie littéralement « sur 100 ».",
      "Tout pourcentage se transforme en **coefficient multiplicateur** (20 % = 0,20).",
      "Augmenter ou diminuer se fait en **une seule multiplication**.",
    ],
    points: [
      "**Prendre** p % : × p/100.",
      "**Augmenter** de p % : × (1 + p/100).",
      "**Diminuer** de p % : × (1 − p/100).",
      "Deux hausses/baisses successives se **multiplient** (elles ne s'additionnent pas).",
    ],
    formules: [
      { label: "Prendre p %", expr: "valeur × p/100" },
      { label: "Augmenter", expr: "valeur × (1 + p/100)" },
      { label: "Diminuer", expr: "valeur × (1 − p/100)" },
    ],
    methode: [
      "Transformer le pourcentage en **coefficient** (÷ 100).",
      "Identifier l'opération : prendre, augmenter ou diminuer.",
      "**Multiplier** la valeur par le coefficient adapté.",
      "Vérifier avec un ordre de grandeur.",
    ],
    exemple: {
      enonce: "Un article à 50 € augmente de 20 %. Quel est le nouveau prix ?",
      lignes: [
        { calcul: "20 % = 20/100 = 0,20", note: "coefficient" },
        { calcul: "coefficient d'augmentation = 1 + 0,20 = 1,20", note: "" },
        { calcul: "50 × 1,20 = 60", note: "nouveau prix" },
        { calcul: "Nouveau prix : 60 €", note: "vérif : +20 % de 50 = +10 €" },
      ],
    },
    pieges: [
      {
        erreur: "Après +20 % puis −20 %, revenir au prix de départ.",
        pourquoi: "×1,20 puis ×0,80 = ×0,96 : on perd 4 %. Les pourcentages successifs se multiplient.",
      },
      {
        erreur: "Ajouter le pourcentage au lieu de multiplier.",
        pourquoi: "Toujours convertir en coefficient multiplicateur avant de calculer.",
      },
    ],
    astuce:
      "Astuce du coefficient : **+p % → ×(1 + p/100)** et **−p % → ×(1 − p/100)**. Une seule multiplication, aucune erreur.",
    retenir: [
      "p % = p/100.",
      "Prendre p % : × p/100.",
      "Augmenter : ×(1 + p/100).",
      "Diminuer : ×(1 − p/100).",
      "Hausses successives : on multiplie les coefficients.",
    ],
    quiz: [
      { question: "Calculer 15 % de 80.", correction: "80 × 0,15 = 12." },
      { question: "Un jean à 40 € est soldé à −30 %. Prix soldé ?", correction: "40 × (1 − 0,30) = 40 × 0,70 = 28 €." },
      { question: "Un prix augmente de 10 % puis de 10 %. Hausse totale ?", correction: "×1,10 × 1,10 = ×1,21, soit +21 % (et non +20 %)." },
    ],
  },

  {
    slug: "les-puissances",
    bloc: "nombres",
    numero: 5,
    titre: "Les puissances",
    intro:
      "Une puissance est un raccourci pour écrire une multiplication répétée. Les puissances de 10 sont particulièrement utiles.",
    definition:
      "Une puissance **aⁿ** est le produit de a par lui-même n fois : aⁿ = a × a × … × a (n facteurs). a est la base, n l'exposant.",
    comprendre: [
      "L'exposant compte **combien de fois** on multiplie la base par elle-même.",
      "Les règles de calcul évitent d'écrire toute la multiplication.",
      "10ⁿ = 1 suivi de n zéros : c'est la base de la numération.",
    ],
    points: [
      "**aᵐ × aⁿ = aᵐ⁺ⁿ** (même base : on additionne les exposants).",
      "**aᵐ ÷ aⁿ = aᵐ⁻ⁿ** (on soustrait les exposants).",
      "**(aᵐ)ⁿ = aᵐˣⁿ** (on multiplie les exposants).",
      "**a⁰ = 1** (tout nombre non nul à la puissance 0).",
    ],
    formules: [
      { label: "Produit", expr: "aᵐ × aⁿ = aᵐ⁺ⁿ" },
      { label: "Quotient", expr: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ" },
      { label: "Puissance de 10", expr: "10ⁿ = 1 suivi de n zéros" },
    ],
    methode: [
      "Repérer si les **bases sont identiques**.",
      "Appliquer la règle : produit → +, quotient → −, puissance de puissance → ×.",
      "Calculer l'exposant final.",
      "Écrire le résultat (ou sa valeur décimale).",
    ],
    exemple: {
      enonce: "Calculer 10³ × 10² puis donner la valeur.",
      lignes: [
        { calcul: "10³ × 10² = 10³⁺²", note: "même base 10 → on additionne" },
        { calcul: "= 10⁵", note: "" },
        { calcul: "= 100 000", note: "1 suivi de 5 zéros" },
      ],
    },
    pieges: [
      {
        erreur: "Écrire a⁰ = 0.",
        pourquoi: "Faux : a⁰ = 1 pour tout a ≠ 0.",
      },
      {
        erreur: "Multiplier les exposants lors d'un produit : 10³ × 10² = 10⁶.",
        pourquoi: "Dans un produit de même base, on ADDITIONNE les exposants : 10³⁺² = 10⁵.",
      },
    ],
    astuce:
      "Pour 10ⁿ, il suffit de compter les zéros : 10³ = 1 000 (3 zéros). Pratique pour les grands nombres et les conversions.",
    retenir: [
      "aⁿ = a × a × … (n fois).",
      "Produit même base → on additionne les exposants.",
      "Quotient même base → on soustrait.",
      "(aᵐ)ⁿ → on multiplie.",
      "a⁰ = 1 ; 10ⁿ = 1 puis n zéros.",
    ],
    quiz: [
      { question: "Calculer 2³.", correction: "2 × 2 × 2 = 8." },
      { question: "Simplifier 5⁷ ÷ 5⁴.", correction: "5⁷⁻⁴ = 5³ = 125." },
      { question: "Combien vaut 10⁰ ?", correction: "10⁰ = 1." },
    ],
  },

  {
    slug: "decomposition-facteurs-premiers",
    bloc: "nombres",
    numero: 6,
    titre: "La décomposition en facteurs premiers",
    intro:
      "Décomposer un nombre en facteurs premiers, c'est trouver ses « briques de base ». Un outil clé pour simplifier fractions, PGCD et PPCM.",
    definition:
      "Décomposer un nombre, c'est l'écrire comme un **produit de nombres premiers** (nombres qui n'ont que 1 et eux-mêmes comme diviseurs : 2, 3, 5, 7, 11…).",
    comprendre: [
      "Un nombre premier ne se divise que par 1 et lui-même.",
      "Tout entier > 1 se décompose de façon **unique** en facteurs premiers.",
      "Cette décomposition sert à simplifier et à comparer les nombres.",
    ],
    points: [
      "Nombres premiers utiles : **2, 3, 5, 7, 11, 13…**",
      "On divise successivement par les nombres premiers, du plus petit au plus grand.",
      "On regroupe les facteurs identiques en **puissances**.",
      "Utilité : simplifier des fractions, calculer **PGCD** et **PPCM**.",
    ],
    methode: [
      "Diviser le nombre par **2** tant que c'est possible.",
      "Passer à **3**, puis **5**, **7**… (les nombres premiers).",
      "Continuer jusqu'à obtenir **1**.",
      "Écrire le produit des diviseurs, en puissances.",
    ],
    exemple: {
      enonce: "Décomposer 60 en facteurs premiers.",
      lignes: [
        { calcul: "60 ÷ 2 = 30", note: "on divise par 2" },
        { calcul: "30 ÷ 2 = 15", note: "encore par 2" },
        { calcul: "15 ÷ 3 = 5", note: "2 ne marche plus, on passe à 3" },
        { calcul: "5 ÷ 5 = 1", note: "on termine par 5" },
        { calcul: "60 = 2² × 3 × 5", note: "on regroupe les 2 en 2²" },
      ],
    },
    pieges: [
      {
        erreur: "Utiliser des facteurs non premiers, comme 60 = 6 × 10.",
        pourquoi: "6 et 10 ne sont pas premiers ! Il faut continuer jusqu'à n'avoir que des nombres premiers.",
      },
      {
        erreur: "Oublier de tester 2 en premier.",
        pourquoi: "On commence toujours par le plus petit premier (2), puis on monte.",
      },
    ],
    astuce:
      "Astuce de reconnaissance : divisible par 2 si le nombre est pair ; par 3 si la **somme des chiffres** est un multiple de 3 ; par 5 s'il finit par 0 ou 5.",
    retenir: [
      "Facteurs premiers = 2, 3, 5, 7, 11…",
      "On divise du plus petit au plus grand premier.",
      "On s'arrête à 1.",
      "On regroupe en puissances (60 = 2² × 3 × 5).",
      "Sert au PGCD, au PPCM et à simplifier.",
    ],
    quiz: [
      { question: "Décomposer 12.", correction: "12 = 2 × 2 × 3 = 2² × 3." },
      { question: "Décomposer 45.", correction: "45 = 3 × 15 = 3 × 3 × 5 = 3² × 5." },
      { question: "18 est-il premier ?", correction: "Non : 18 = 2 × 3², il a plusieurs diviseurs." },
    ],
  },
];
