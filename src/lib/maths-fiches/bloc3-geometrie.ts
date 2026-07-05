/**
 * BLOC 3 — Géométrie (10 fiches)
 */
import type { MathFiche } from "./types";

export const BLOC3_GEOMETRIE: MathFiche[] = [
  {
    slug: "inegalite-triangulaire",
    bloc: "geometrie",
    numero: 12,
    titre: "L'inégalité triangulaire",
    intro:
      "Elle répond à une question simple : avec trois longueurs données, peut-on vraiment construire un triangle ?",
    schema: "inegalite-triangulaire",
    definition:
      "Dans tout triangle, la longueur d'un côté est toujours **strictement inférieure à la somme** des deux autres (et supérieure à leur différence).",
    comprendre: [
      "Pour « fermer » un triangle, les deux petits côtés doivent pouvoir se rejoindre.",
      "Si le plus grand côté est trop long, les deux autres ne se touchent pas : pas de triangle.",
      "On teste donc la somme des deux plus petits contre le plus grand.",
    ],
    points: [
      "Pour un triangle ABC : **AB + AC > BC**, AB + BC > AC, AC + BC > AB.",
      "Il suffit que **la somme des deux plus petits côtés dépasse le plus grand**.",
      "Si l'égalité est atteinte, les points sont alignés (triangle « aplati »).",
    ],
    formules: [{ label: "Condition", expr: "AB + AC > BC (et les 3 inégalités)" }],
    methode: [
      "Identifier les **trois longueurs**.",
      "Repérer le **plus grand** côté.",
      "Additionner les deux autres.",
      "Comparer : si la somme > plus grand côté, le triangle existe.",
    ],
    exemple: {
      enonce: "Peut-on construire un triangle de côtés 3 cm, 4 cm et 5 cm ?",
      lignes: [
        { calcul: "Plus grand côté : 5", note: "" },
        { calcul: "3 + 4 = 7", note: "somme des deux autres" },
        { calcul: "7 > 5 ✔", note: "la condition est vérifiée" },
        { calcul: "Le triangle existe.", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Vérifier une seule inégalité et conclure trop vite.",
        pourquoi: "Il suffit qu'UNE inégalité soit fausse pour que le triangle soit impossible : teste le plus grand côté.",
      },
      {
        erreur: "Confondre inférieur et inférieur ou égal.",
        pourquoi: "L'inégalité est stricte : si somme = plus grand côté, le triangle est aplati (les points sont alignés).",
      },
    ],
    astuce:
      "Raccourci : compare seulement **les deux plus petits côtés au plus grand**. Si leur somme dépasse le grand, c'est bon.",
    retenir: [
      "Chaque côté < somme des deux autres.",
      "Tester : 2 petits côtés vs plus grand.",
      "Somme > grand côté → triangle possible.",
      "Somme = grand côté → points alignés.",
      "Inégalité stricte.",
    ],
    quiz: [
      { question: "Triangle de côtés 2, 3, 8 : possible ?", correction: "Non : 2 + 3 = 5 < 8. Impossible." },
      { question: "Triangle de côtés 6, 8, 10 : possible ?", correction: "Oui : 6 + 8 = 14 > 10." },
    ],
  },

  {
    slug: "triangles-semblables",
    bloc: "geometrie",
    numero: 13,
    titre: "Les triangles semblables",
    intro:
      "Deux triangles semblables ont la même forme mais pas forcément la même taille : l'un est un agrandissement de l'autre.",
    schema: "triangles-semblables",
    definition:
      "Deux triangles sont **semblables** lorsqu'ils ont les **mêmes angles** et des **côtés proportionnels** (même forme, tailles éventuellement différentes).",
    comprendre: [
      "« Semblable » = même forme, comme une photo agrandie ou réduite.",
      "Les angles sont conservés, seules les longueurs changent, toutes dans le même rapport.",
      "Ce rapport constant est le **coefficient d'agrandissement/réduction**.",
    ],
    points: [
      "Les **angles correspondants** sont égaux.",
      "Les **côtés homologues** sont proportionnels.",
      "Applications : calcul de longueurs, agrandissements, réductions.",
    ],
    methode: [
      "Vérifier l'égalité des angles OU la proportionnalité des côtés.",
      "Identifier les **côtés homologues** (qui se correspondent).",
      "Calculer le **coefficient** k = grand côté ÷ petit côté.",
      "Multiplier (ou diviser) par k pour trouver une longueur.",
    ],
    exemple: {
      enonce: "Un triangle 3-4-5 et un triangle 6-8-10 sont-ils semblables ?",
      lignes: [
        { calcul: "6 ÷ 3 = 2", note: "rapport des premiers côtés" },
        { calcul: "8 ÷ 4 = 2", note: "rapport des deuxièmes" },
        { calcul: "10 ÷ 5 = 2", note: "rapport des troisièmes" },
        { calcul: "Même coefficient 2 → semblables.", note: "le second est 2× plus grand" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre triangles semblables et triangles égaux.",
        pourquoi: "Égaux = même taille ET même forme. Semblables = même forme, taille possiblement différente.",
      },
      {
        erreur: "Comparer des côtés qui ne se correspondent pas.",
        pourquoi: "Il faut associer les côtés homologues (opposés aux angles égaux).",
      },
    ],
    astuce:
      "Pense « **photocopie agrandie** » : les angles ne changent pas, toutes les longueurs sont multipliées par le même nombre.",
    retenir: [
      "Semblables = même forme.",
      "Angles égaux, côtés proportionnels.",
      "Coefficient k = rapport des côtés.",
      "≠ triangles égaux (mêmes tailles).",
      "Sert aux agrandissements/réductions.",
    ],
    quiz: [
      { question: "Coefficient entre un triangle 5-12-13 et 10-24-26 ?", correction: "k = 2 (chaque côté est doublé)." },
      { question: "Deux triangles ont les mêmes angles. Sont-ils semblables ?", correction: "Oui, l'égalité des angles suffit." },
    ],
  },

  {
    slug: "theoreme-de-pythagore",
    bloc: "geometrie",
    numero: 14,
    titre: "Le théorème de Pythagore",
    intro:
      "LE théorème du triangle rectangle : il relie les trois côtés et permet de calculer une longueur manquante.",
    schema: "pythagore",
    definition:
      "Dans un triangle **rectangle**, le carré de l'**hypoténuse** (le plus grand côté) est égal à la **somme des carrés** des deux autres côtés.",
    comprendre: [
      "Il ne fonctionne QUE dans un triangle rectangle.",
      "L'hypoténuse est le côté opposé à l'angle droit : c'est toujours le plus long.",
      "Connaissant deux côtés, on trouve le troisième.",
    ],
    points: [
      "Formule : **c² = a² + b²** (c = hypoténuse).",
      "Condition : triangle **rectangle** uniquement.",
      "L'hypoténuse est **toujours le plus grand côté**.",
    ],
    formules: [{ label: "Triangle rectangle", expr: "hypoténuse² = côté² + côté²" }],
    methode: [
      "Vérifier que le triangle est **rectangle**.",
      "Identifier l'**hypoténuse** (côté opposé à l'angle droit).",
      "Appliquer c² = a² + b².",
      "Calculer, puis prendre la **racine carrée** pour une longueur.",
    ],
    exemple: {
      enonce: "Triangle rectangle de côtés 3 cm et 4 cm. Calculer l'hypoténuse.",
      lignes: [
        { calcul: "c² = 3² + 4²", note: "on applique le théorème" },
        { calcul: "c² = 9 + 16 = 25", note: "" },
        { calcul: "c = √25 = 5", note: "on prend la racine carrée" },
        { calcul: "L'hypoténuse mesure 5 cm.", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Appliquer Pythagore sans triangle rectangle.",
        pourquoi: "Le théorème n'est valable que si le triangle possède un angle droit.",
      },
      {
        erreur: "Oublier la racine carrée à la fin.",
        pourquoi: "On calcule c², il faut ensuite prendre √ pour obtenir la longueur c.",
      },
    ],
    astuce:
      "L'hypoténuse est **en face de l'angle droit** et c'est le plus long côté. Écris toujours c² d'un côté, la somme des deux carrés de l'autre.",
    retenir: [
      "Seulement dans un triangle rectangle.",
      "c² = a² + b².",
      "c = hypoténuse = plus grand côté.",
      "Racine carrée pour finir.",
      "Sert à trouver une longueur manquante.",
    ],
    quiz: [
      { question: "Côtés 6 et 8, hypoténuse ?", correction: "√(36 + 64) = √100 = 10." },
      { question: "Hypoténuse 13, un côté 5, l'autre côté ?", correction: "√(13² − 5²) = √(169 − 25) = √144 = 12." },
    ],
  },

  {
    slug: "reciproque-de-pythagore",
    bloc: "geometrie",
    numero: 15,
    titre: "La réciproque de Pythagore",
    intro:
      "L'outil inverse : au lieu de calculer une longueur, il sert à DÉMONTRER qu'un triangle est rectangle.",
    schema: "pythagore",
    definition:
      "Si, dans un triangle, le **carré du plus grand côté** est égal à la **somme des carrés** des deux autres, alors le triangle est **rectangle**.",
    comprendre: [
      "C'est Pythagore « à l'envers » : on part des longueurs pour conclure sur l'angle droit.",
      "On compare deux quantités et on regarde si elles sont **égales**.",
      "Si elles sont égales → rectangle ; sinon → pas rectangle.",
    ],
    points: [
      "Comparer : **(plus grand côté)²** d'un côté.",
      "Et **somme des carrés des deux autres** de l'autre.",
      "Égalité → triangle rectangle (angle droit opposé au plus grand côté).",
    ],
    methode: [
      "Repérer le **plus grand côté**.",
      "Calculer son carré.",
      "Calculer la somme des carrés des deux autres.",
      "Comparer : si égaux → rectangle ; sinon → non rectangle.",
    ],
    exemple: {
      enonce: "Un triangle a pour côtés 3, 4 et 5. Est-il rectangle ?",
      lignes: [
        { calcul: "Plus grand côté : 5 → 5² = 25", note: "" },
        { calcul: "3² + 4² = 9 + 16 = 25", note: "somme des deux autres carrés" },
        { calcul: "25 = 25 ✔", note: "les deux quantités sont égales" },
        { calcul: "Le triangle est rectangle.", note: "l'angle droit est opposé au côté 5" },
      ],
    },
    pieges: [
      {
        erreur: "Ne pas prendre le plus grand côté pour l'hypoténuse.",
        pourquoi: "Le carré à comparer est celui du PLUS GRAND côté, sinon la comparaison est faussée.",
      },
      {
        erreur: "Conclure « rectangle » alors que les valeurs sont proches mais différentes.",
        pourquoi: "Il faut une égalité EXACTE, sinon le triangle n'est pas rectangle.",
      },
    ],
    astuce:
      "Toujours poser le calcul en deux colonnes : à gauche (grand côté)², à droite la somme des deux autres carrés. Égalité = rectangle.",
    retenir: [
      "Sert à prouver qu'un triangle est rectangle.",
      "Comparer (grand côté)² et somme des 2 autres carrés.",
      "Égalité EXACTE → rectangle.",
      "Sinon → non rectangle.",
      "Angle droit opposé au plus grand côté.",
    ],
    quiz: [
      { question: "Côtés 6, 8, 10 : rectangle ?", correction: "10² = 100 et 6² + 8² = 100. Égalité → rectangle." },
      { question: "Côtés 4, 5, 6 : rectangle ?", correction: "6² = 36 et 4² + 5² = 41. 36 ≠ 41 → non rectangle." },
    ],
  },

  {
    slug: "theoreme-de-thales",
    bloc: "geometrie",
    numero: 16,
    titre: "Le théorème de Thalès",
    intro:
      "Avec deux droites parallèles qui coupent deux sécantes, Thalès crée des rapports égaux pour calculer des longueurs.",
    schema: "thales",
    definition:
      "Dans une configuration de triangles emboîtés avec **(MN) parallèle à (BC)**, les longueurs sont proportionnelles : AM/AB = AN/AC = MN/BC.",
    comprendre: [
      "Deux droites parallèles « découpent » les sécantes en morceaux proportionnels.",
      "On obtient une égalité de trois rapports.",
      "Le parallélisme est la condition **indispensable**.",
    ],
    points: [
      "Conditions : **deux droites parallèles** et **deux droites sécantes**.",
      "Égalité : **AM/AB = AN/AC = MN/BC**.",
      "Sert à calculer une longueur inconnue.",
    ],
    formules: [{ label: "Égalité de Thalès", expr: "AM/AB = AN/AC = MN/BC" }],
    methode: [
      "Vérifier que les droites sont **parallèles**.",
      "Identifier les **segments homologues** (qui se correspondent).",
      "Écrire l'égalité des rapports.",
      "Remplacer par les valeurs et résoudre (produit en croix).",
    ],
    exemple: {
      enonce: "AM = 3, AB = 6, AC = 8, avec (MN) ∥ (BC). Calculer AN.",
      lignes: [
        { calcul: "AM/AB = AN/AC", note: "égalité de Thalès" },
        { calcul: "3/6 = AN/8", note: "on remplace" },
        { calcul: "AN = (3 × 8) ÷ 6", note: "produit en croix" },
        { calcul: "AN = 24 ÷ 6 = 4", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Appliquer Thalès sans droites parallèles.",
        pourquoi: "Sans parallélisme, les rapports ne sont pas égaux : le théorème ne s'applique pas.",
      },
      {
        erreur: "Mélanger les segments dans les rapports.",
        pourquoi: "Il faut respecter l'ordre : petit triangle en haut, grand triangle en bas, dans le même sens.",
      },
    ],
    astuce:
      "Écris les rapports **toujours dans le même sens** (sommet commun au numérateur). Le produit en croix fait le reste.",
    retenir: [
      "Besoin de droites parallèles.",
      "AM/AB = AN/AC = MN/BC.",
      "Respecter l'ordre des segments.",
      "Résoudre par produit en croix.",
      "Sert à calculer une longueur.",
    ],
    quiz: [
      { question: "Pourquoi Thalès ne s'applique-t-il pas toujours ?", correction: "Il faut impérativement deux droites parallèles." },
      { question: "AM = 2, AB = 6, MN = 3. Calculer BC.", correction: "AM/AB = MN/BC → 2/6 = 3/BC → BC = 9." },
    ],
  },

  {
    slug: "reciproque-de-thales",
    bloc: "geometrie",
    numero: 17,
    titre: "La réciproque de Thalès",
    intro:
      "La version inverse : elle sert à DÉMONTRER que deux droites sont parallèles en comparant des rapports.",
    schema: "thales",
    definition:
      "Si les rapports **AM/AB et AN/AC sont égaux** (et si les points sont bien placés dans le même ordre), alors les droites (MN) et (BC) sont **parallèles**.",
    comprendre: [
      "On part des longueurs pour conclure sur le parallélisme.",
      "Si les rapports sont égaux, les droites ne peuvent qu'être parallèles.",
      "L'ordre des points sur les droites doit être respecté.",
    ],
    points: [
      "Comparer **AM/AB** et **AN/AC**.",
      "S'ils sont égaux → **(MN) ∥ (BC)**.",
      "Toujours comparer des **segments homologues**.",
    ],
    methode: [
      "Calculer le rapport AM/AB.",
      "Calculer le rapport AN/AC.",
      "Comparer les deux rapports.",
      "S'ils sont égaux → droites parallèles ; sinon → non parallèles.",
    ],
    exemple: {
      enonce: "AM = 2, AB = 6, AN = 3, AC = 9. Les droites (MN) et (BC) sont-elles parallèles ?",
      lignes: [
        { calcul: "AM/AB = 2/6 = 1/3", note: "" },
        { calcul: "AN/AC = 3/9 = 1/3", note: "" },
        { calcul: "1/3 = 1/3 ✔", note: "les rapports sont égaux" },
        { calcul: "(MN) ∥ (BC).", note: "les droites sont parallèles" },
      ],
    },
    pieges: [
      {
        erreur: "Comparer des segments qui ne se correspondent pas.",
        pourquoi: "Il faut toujours comparer des segments homologues (issus du même sommet).",
      },
      {
        erreur: "Oublier de vérifier l'alignement/ordre des points.",
        pourquoi: "La réciproque suppose que les points sont alignés dans le même ordre sur chaque droite.",
      },
    ],
    astuce:
      "Réduis chaque rapport à sa forme la plus simple (comme une fraction) : c'est plus facile de voir s'ils sont égaux.",
    retenir: [
      "Sert à prouver un parallélisme.",
      "Comparer AM/AB et AN/AC.",
      "Rapports égaux → droites parallèles.",
      "Segments homologues obligatoires.",
      "Respecter l'ordre des points.",
    ],
    quiz: [
      { question: "AM/AB = 0,5 et AN/AC = 0,5. Conclusion ?", correction: "Les rapports sont égaux : les droites sont parallèles." },
      { question: "AM/AB = 0,4 et AN/AC = 0,6. Conclusion ?", correction: "Rapports différents : les droites ne sont pas parallèles." },
    ],
  },

  {
    slug: "la-trigonometrie",
    bloc: "geometrie",
    numero: 18,
    titre: "La trigonométrie",
    intro:
      "La trigonométrie relie les angles et les longueurs d'un triangle rectangle grâce à trois rapports : sinus, cosinus, tangente.",
    schema: "trigonometrie",
    definition:
      "Dans un triangle rectangle, **sinus, cosinus et tangente** d'un angle sont des rapports entre les côtés (opposé, adjacent, hypoténuse).",
    comprendre: [
      "Chaque rapport relie un angle à deux côtés du triangle rectangle.",
      "Selon les côtés connus, on choisit sin, cos ou tan.",
      "Cela ne fonctionne que dans un triangle **rectangle**.",
    ],
    points: [
      "**sin** = opposé / hypoténuse.",
      "**cos** = adjacent / hypoténuse.",
      "**tan** = opposé / adjacent.",
      "Le côté « opposé » et « adjacent » dépendent de **l'angle choisi**.",
    ],
    formules: [
      { label: "Sinus", expr: "sin = opposé ÷ hypoténuse" },
      { label: "Cosinus", expr: "cos = adjacent ÷ hypoténuse" },
      { label: "Tangente", expr: "tan = opposé ÷ adjacent" },
    ],
    methode: [
      "Repérer l'**angle** utilisé.",
      "Identifier **opposé, adjacent, hypoténuse** par rapport à cet angle.",
      "Choisir la formule selon les côtés connus.",
      "Calculer (avec la calculatrice pour l'angle).",
    ],
    exemple: {
      enonce: "Angle de 30°, hypoténuse = 10. Calculer le côté opposé.",
      lignes: [
        { calcul: "sin(30°) = opposé / hypoténuse", note: "on connaît l'hypoténuse" },
        { calcul: "opposé = sin(30°) × 10", note: "sin(30°) = 0,5" },
        { calcul: "opposé = 0,5 × 10 = 5", note: "le côté opposé mesure 5" },
      ],
    },
    pieges: [
      {
        erreur: "Utiliser la trigonométrie dans un triangle non rectangle.",
        pourquoi: "Ces formules ne sont valables que dans un triangle rectangle.",
      },
      {
        erreur: "Confondre côté opposé et côté adjacent.",
        pourquoi: "Ils dépendent de l'angle choisi : l'opposé est en face de l'angle, l'adjacent le touche.",
      },
    ],
    astuce:
      "Mémorise **SOH – CAH – TOA** : **S**in = **O**pposé/**H**yp, **C**os = **A**djacent/**H**yp, **T**an = **O**pposé/**A**djacent.",
    retenir: [
      "Seulement en triangle rectangle.",
      "sin = opposé/hypoténuse.",
      "cos = adjacent/hypoténuse.",
      "tan = opposé/adjacent.",
      "SOH-CAH-TOA.",
    ],
    quiz: [
      { question: "Que vaut cos d'un angle ?", correction: "cos = adjacent ÷ hypoténuse." },
      { question: "Angle 60°, adjacent = 4, hypoténuse ? (cos 60° = 0,5)", correction: "cos = adj/hyp → 0,5 = 4/hyp → hyp = 8." },
    ],
  },

  {
    slug: "les-droites-remarquables",
    bloc: "geometrie",
    numero: 19,
    titre: "Les droites remarquables du triangle",
    intro:
      "Médiane, hauteur, médiatrice, bissectrice : quatre droites particulières à ne pas confondre, chacune avec sa définition précise.",
    definition:
      "Les droites remarquables d'un triangle sont quatre droites définies par une propriété géométrique précise : **médiane, hauteur, médiatrice, bissectrice**.",
    comprendre: [
      "Chacune relie ou coupe des éléments du triangle d'une façon spécifique.",
      "Elles se distinguent par ce qu'elles relient : sommet, milieu, angle…",
      "Bien retenir la définition de chacune évite toute confusion.",
    ],
    points: [
      "**Médiane** : relie un sommet au **milieu** du côté opposé.",
      "**Hauteur** : issue d'un sommet, **perpendiculaire** au côté opposé.",
      "**Médiatrice** : perpendiculaire passant par le **milieu** d'un segment.",
      "**Bissectrice** : partage un **angle** en deux angles égaux.",
    ],
    methode: [
      "Repérer l'élément de départ : un sommet, un côté ou un angle.",
      "Médiane → viser le milieu du côté opposé.",
      "Hauteur → tracer la perpendiculaire au côté opposé.",
      "Médiatrice → perpendiculaire au milieu ; bissectrice → couper l'angle en deux.",
    ],
    exemple: {
      enonce: "Quelle droite passe par un sommet et le milieu du côté opposé ?",
      lignes: [
        { calcul: "Elle part d'un sommet…", note: "" },
        { calcul: "…vers le MILIEU du côté opposé.", note: "" },
        { calcul: "C'est la médiane.", note: "à ne pas confondre avec la hauteur" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre médiane (milieu) et hauteur (perpendiculaire).",
        pourquoi: "La médiane vise le milieu ; la hauteur est perpendiculaire au côté opposé.",
      },
      {
        erreur: "Confondre médiane et médiatrice.",
        pourquoi: "La médiane part d'un sommet ; la médiatrice est perpendiculaire au milieu d'un segment (pas forcément par un sommet).",
      },
    ],
    astuce:
      "Astuce mots-clés : **méd**iane → **mi**lieu ; **haut**eur → angle droit ; **médiat**rice → milieu + perpendiculaire ; **bissec**trice → coupe l'angle.",
    retenir: [
      "Médiane → sommet + milieu du côté opposé.",
      "Hauteur → sommet + perpendiculaire.",
      "Médiatrice → milieu + perpendiculaire.",
      "Bissectrice → coupe un angle en deux.",
      "Chacune a sa propriété unique.",
    ],
    quiz: [
      { question: "Quelle droite est perpendiculaire au milieu d'un segment ?", correction: "La médiatrice." },
      { question: "Quelle droite partage un angle en deux angles égaux ?", correction: "La bissectrice." },
    ],
  },

  {
    slug: "le-parallelogramme",
    bloc: "geometrie",
    numero: 20,
    titre: "Le parallélogramme",
    intro:
      "Le quadrilatère de référence : ses propriétés se retrouvent dans le rectangle, le losange et le carré.",
    schema: "parallelogramme",
    definition:
      "Un parallélogramme est un quadrilatère dont les **côtés opposés sont parallèles** (et donc égaux deux à deux).",
    comprendre: [
      "Deux paires de côtés parallèles suffisent à le définir.",
      "Ses propriétés (côtés, angles, diagonales) découlent de ce parallélisme.",
      "Rectangle, losange et carré sont des parallélogrammes **particuliers**.",
    ],
    points: [
      "Côtés opposés **parallèles et égaux**.",
      "Angles opposés **égaux**.",
      "Diagonales qui se coupent en leur **milieu**.",
      "Cas particuliers : **rectangle, losange, carré**.",
    ],
    methode: [
      "Vérifier que les côtés opposés sont parallèles.",
      "En déduire l'égalité des côtés opposés.",
      "Utiliser l'égalité des angles opposés si besoin.",
      "Se servir du point d'intersection des diagonales (milieu commun).",
    ],
    exemple: {
      enonce: "Dans un parallélogramme, que peut-on dire des diagonales ?",
      lignes: [
        { calcul: "Les deux diagonales se croisent…", note: "" },
        { calcul: "…en leur milieu commun.", note: "" },
        { calcul: "Ce point est le centre de symétrie.", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Penser qu'un carré n'est pas un parallélogramme.",
        pourquoi: "Le carré est un parallélogramme particulier : il est à la fois rectangle ET losange.",
      },
      {
        erreur: "Croire que les diagonales sont toujours égales.",
        pourquoi: "Elles se coupent en leur milieu, mais ne sont égales que dans le rectangle (et le carré).",
      },
    ],
    astuce:
      "Retiens la hiérarchie : **carré = rectangle + losange**. Toutes les propriétés du parallélogramme s'appliquent à ses cas particuliers.",
    retenir: [
      "Côtés opposés parallèles et égaux.",
      "Angles opposés égaux.",
      "Diagonales : milieu commun.",
      "Rectangle, losange, carré = cas particuliers.",
      "Le carré est rectangle ET losange.",
    ],
    quiz: [
      { question: "Un losange est-il un parallélogramme ?", correction: "Oui : ses côtés opposés sont parallèles." },
      { question: "Dans quel parallélogramme les diagonales sont-elles égales ?", correction: "Dans le rectangle (et donc le carré)." },
    ],
  },

  {
    slug: "les-transformations-geometriques",
    bloc: "geometrie",
    numero: 21,
    titre: "Les transformations géométriques",
    intro:
      "Translation, rotation, symétries et homothétie : cinq façons de déplacer ou transformer une figure dans le plan.",
    definition:
      "Une transformation géométrique fait correspondre à une figure une nouvelle figure, en la **déplaçant** ou en la **modifiant** selon une règle précise.",
    comprendre: [
      "Certaines transformations conservent les longueurs (translation, rotation, symétries).",
      "L'homothétie, elle, agrandit ou réduit la figure.",
      "Chaque transformation a un « ingrédient » : vecteur, centre, axe ou rapport.",
    ],
    points: [
      "**Translation** : glissement selon un **vecteur** (sans rotation).",
      "**Rotation** : figure tournée autour d'un **centre** et d'un angle.",
      "**Symétrie axiale** : pliage selon un **axe**.",
      "**Symétrie centrale** : demi-tour (180°) autour d'un **point**.",
      "**Homothétie** : agrandissement/réduction selon un **rapport**.",
    ],
    methode: [
      "Identifier la transformation demandée.",
      "Repérer son élément clé : vecteur, centre, axe ou rapport.",
      "Appliquer la règle point par point.",
      "Vérifier que la figure image est cohérente.",
    ],
    exemple: {
      enonce: "Quelle transformation correspond à un demi-tour autour d'un point ?",
      lignes: [
        { calcul: "Rotation de 180° autour d'un point…", note: "" },
        { calcul: "…c'est une symétrie centrale.", note: "" },
        { calcul: "La figure est « retournée » par rapport au centre.", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre symétrie axiale (axe) et symétrie centrale (point).",
        pourquoi: "L'axiale se fait par rapport à une droite (pliage) ; la centrale par rapport à un point (demi-tour).",
      },
      {
        erreur: "Oublier de préciser l'élément de la transformation.",
        pourquoi: "Il faut toujours indiquer le centre, l'axe, le vecteur ou le rapport selon la transformation.",
      },
    ],
    astuce:
      "Associe chaque transformation à son ingrédient : translation → **vecteur**, rotation → **centre + angle**, sym. axiale → **axe**, sym. centrale → **point**, homothétie → **rapport**.",
    retenir: [
      "Translation → vecteur.",
      "Rotation → centre + angle.",
      "Symétrie axiale → axe (pliage).",
      "Symétrie centrale → point (demi-tour).",
      "Homothétie → rapport (agrandit/réduit).",
    ],
    quiz: [
      { question: "Quelle transformation agrandit une figure ?", correction: "L'homothétie (de rapport supérieur à 1)." },
      { question: "Un pliage selon une droite, c'est quelle symétrie ?", correction: "La symétrie axiale." },
    ],
  },
];
