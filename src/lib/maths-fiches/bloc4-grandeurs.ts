/**
 * BLOC 4 — Grandeurs & Mesures (11 fiches)
 */
import type { MathFiche } from "./types";

export const BLOC4_GRANDEURS: MathFiche[] = [
  {
    slug: "les-unites-de-longueur",
    bloc: "grandeurs",
    numero: 22,
    titre: "Les unités de longueur",
    intro:
      "Le mètre et ses multiples : convertir une longueur revient à se déplacer dans un tableau, une colonne à la fois.",
    schema: "escalier-longueur",
    definition:
      "Les unités de longueur mesurent une distance. Chaque changement de colonne dans le tableau correspond à un **facteur 10**.",
    comprendre: [
      "Le système est décimal : on multiplie ou divise par 10 à chaque colonne.",
      "Vers la droite (unité plus petite) → on multiplie ; vers la gauche → on divise.",
      "Placer correctement le chiffre des unités est la clé.",
    ],
    points: [
      "Ordre : **km, hm, dam, m, dm, cm, mm**.",
      "Vers la droite → **×10** par colonne.",
      "Vers la gauche → **÷10** par colonne.",
    ],
    tableau: {
      entetes: ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      lignes: [["×10 à chaque colonne vers la droite →", "", "", "", "", "", ""]],
    },
    methode: [
      "Repérer l'unité de départ et l'unité d'arrivée.",
      "Compter le **nombre de colonnes** à traverser.",
      "Multiplier par 10 pour chaque colonne vers la droite (÷10 vers la gauche).",
      "Vérifier avec l'unité demandée.",
    ],
    exemple: {
      enonce: "Convertir 3,5 m en cm.",
      lignes: [
        { calcul: "De m à cm : 2 colonnes vers la droite", note: "m → dm → cm" },
        { calcul: "3,5 × 10 × 10 = 3,5 × 100", note: "" },
        { calcul: "= 350", note: "3,5 m = 350 cm" },
      ],
    },
    pieges: [
      {
        erreur: "Calculer sans vérifier l'unité demandée.",
        pourquoi: "Une réponse en mètres alors qu'on demande des cm est comptée fausse : lis bien l'énoncé.",
      },
      {
        erreur: "Se tromper de sens (× au lieu de ÷).",
        pourquoi: "Vers une unité plus petite (droite) on multiplie ; vers une plus grande (gauche) on divise.",
      },
    ],
    astuce:
      "Longueurs = **facteur 10**. Dessine le tableau km→mm et déplace la virgule d'un rang par colonne.",
    retenir: [
      "km hm dam m dm cm mm.",
      "1 colonne = ×10 ou ÷10.",
      "Droite → ×10 ; gauche → ÷10.",
      "Longueurs → facteur 10.",
      "Toujours vérifier l'unité demandée.",
    ],
    quiz: [
      { question: "Convertir 2 km en m.", correction: "2 km = 2 000 m (3 colonnes : ×1000)." },
      { question: "Convertir 45 cm en m.", correction: "45 ÷ 100 = 0,45 m." },
    ],
  },

  {
    slug: "les-unites-d-aire",
    bloc: "grandeurs",
    numero: 23,
    titre: "Les unités d'aire",
    intro:
      "Attention, les aires ne se convertissent pas comme les longueurs : ici, chaque colonne vaut un facteur 100.",
    schema: "escalier-aire",
    definition:
      "L'aire mesure la surface d'une figure. Chaque changement d'unité correspond à un **facteur 100** (×100 ou ÷100).",
    comprendre: [
      "Une aire, c'est une longueur × une longueur : le facteur 10 est donc élevé au carré → 100.",
      "Chaque colonne du tableau des aires « pèse » deux rangs de chiffres.",
      "C'est la source d'erreur la plus fréquente au CRPE.",
    ],
    points: [
      "Ordre : **km², hm², dam², m², dm², cm², mm²**.",
      "Chaque colonne = **×100** ou **÷100**.",
      "1 m² = 10 000 cm².",
    ],
    tableau: {
      entetes: ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"],
      lignes: [["×100 à chaque colonne vers la droite →", "", "", "", "", "", ""]],
    },
    methode: [
      "Repérer les unités de départ et d'arrivée.",
      "Compter les colonnes à traverser.",
      "Multiplier (ou diviser) par **100** à chaque colonne.",
      "Écrire le résultat avec la bonne unité.",
    ],
    exemple: {
      enonce: "Convertir 1 m² en cm².",
      lignes: [
        { calcul: "De m² à cm² : 2 colonnes", note: "m² → dm² → cm²" },
        { calcul: "1 × 100 × 100 = 10 000", note: "×100 par colonne" },
        { calcul: "1 m² = 10 000 cm²", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Utiliser ×10 comme pour les longueurs.",
        pourquoi: "Pour une aire, chaque colonne vaut ×100 (car c'est une longueur au carré).",
      },
      {
        erreur: "Oublier de compter toutes les colonnes.",
        pourquoi: "Chaque colonne compte : m² → cm² = ×100 × 100 = 10 000.",
      },
    ],
    astuce:
      "Aires = **facteur 100**. Retiens : « une aire, c'est du carré, donc 10² = 100 » à chaque colonne.",
    retenir: [
      "km²…mm².",
      "1 colonne = ×100 ou ÷100.",
      "1 m² = 10 000 cm².",
      "Aires → facteur 100.",
      "Ne pas confondre avec les longueurs (×10).",
    ],
    quiz: [
      { question: "Convertir 1 dm² en cm².", correction: "1 dm² = 100 cm² (1 colonne : ×100)." },
      { question: "Convertir 30 000 cm² en m².", correction: "30 000 ÷ 10 000 = 3 m²." },
    ],
  },

  {
    slug: "les-unites-de-volume",
    bloc: "grandeurs",
    numero: 24,
    titre: "Les unités de volume",
    intro:
      "Pour les volumes, le facteur grimpe encore : chaque colonne vaut désormais 1000.",
    schema: "escalier-volume",
    definition:
      "Le volume mesure l'espace occupé par un solide. Chaque changement d'unité correspond à un **facteur 1000** (×1000 ou ÷1000).",
    comprendre: [
      "Un volume, c'est longueur × longueur × longueur : le facteur 10 est au cube → 1000.",
      "Chaque colonne du tableau des volumes « pèse » trois rangs de chiffres.",
      "Longueur ×10, aire ×100, volume ×1000 : logique du carré et du cube.",
    ],
    points: [
      "Ordre : **km³, hm³, dam³, m³, dm³, cm³, mm³**.",
      "Chaque colonne = **×1000** ou **÷1000**.",
      "1 m³ = 1000 dm³.",
    ],
    tableau: {
      entetes: ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"],
      lignes: [["×1000 à chaque colonne vers la droite →", "", "", "", "", "", ""]],
    },
    methode: [
      "Repérer les unités de départ et d'arrivée.",
      "Compter le nombre de colonnes.",
      "Multiplier (ou diviser) par **1000** à chaque colonne.",
      "Donner le résultat avec la bonne unité.",
    ],
    exemple: {
      enonce: "Convertir 1 m³ en dm³.",
      lignes: [
        { calcul: "De m³ à dm³ : 1 colonne", note: "" },
        { calcul: "1 × 1000 = 1000", note: "×1000 par colonne" },
        { calcul: "1 m³ = 1000 dm³", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Utiliser ×100 pour un volume.",
        pourquoi: "Un volume est au cube : chaque colonne vaut ×1000, pas ×100.",
      },
      {
        erreur: "Mélanger les facteurs des trois grandeurs.",
        pourquoi: "Longueur = ×10, aire = ×100, volume = ×1000. À ne pas confondre.",
      },
    ],
    astuce:
      "Volumes = **facteur 1000**. Mémo : **10 (longueur) → 100 (aire) → 1000 (volume)**, on ajoute un zéro à chaque « dimension ».",
    retenir: [
      "km³…mm³.",
      "1 colonne = ×1000 ou ÷1000.",
      "1 m³ = 1000 dm³.",
      "Volumes → facteur 1000.",
      "10, 100, 1000 : longueur, aire, volume.",
    ],
    quiz: [
      { question: "Convertir 2 m³ en dm³.", correction: "2 × 1000 = 2 000 dm³." },
      { question: "Convertir 5 000 cm³ en dm³.", correction: "5 000 ÷ 1000 = 5 dm³." },
    ],
  },

  {
    slug: "conversion-litres-metres-cubes",
    bloc: "grandeurs",
    numero: 25,
    titre: "Conversion litres ↔ mètres cubes",
    intro:
      "Le pont entre les capacités (litres) et les volumes (m³). Une seule correspondance à retenir débloque tout.",
    definition:
      "Les capacités (litres) et les volumes sont liés : **1 dm³ = 1 L**. À partir de là, toutes les conversions se déduisent.",
    comprendre: [
      "Un litre occupe exactement le volume d'un cube de 1 dm de côté.",
      "En passant par le dm³, on relie facilement litres et mètres cubes.",
      "Les capacités suivent aussi un facteur 10 par colonne (kL…mL).",
    ],
    points: [
      "**1 dm³ = 1 L**.",
      "**1 cm³ = 1 mL**.",
      "**1 m³ = 1000 L**.",
    ],
    formules: [
      { label: "Base", expr: "1 dm³ = 1 L" },
      { label: "Grand volume", expr: "1 m³ = 1000 L" },
    ],
    methode: [
      "Convertir d'abord le volume en **dm³** si nécessaire.",
      "Appliquer 1 dm³ = 1 L.",
      "Ajuster ensuite vers L, mL ou m³.",
      "Vérifier la cohérence de l'ordre de grandeur.",
    ],
    exemple: {
      enonce: "Convertir 2500 L en m³.",
      lignes: [
        { calcul: "1 m³ = 1000 L", note: "correspondance clé" },
        { calcul: "2500 ÷ 1000 = 2,5", note: "" },
        { calcul: "2500 L = 2,5 m³", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre litre et m² (surface).",
        pourquoi: "Le litre est une capacité (volume), pas une aire : 1 L = 1 dm³.",
      },
      {
        erreur: "Oublier de passer par le dm³.",
        pourquoi: "Le dm³ est le pivot : 1 dm³ = 1 L simplifie toutes les conversions.",
      },
    ],
    astuce:
      "Retiens la chaîne : **1 L = 1 dm³** et **1000 L = 1 m³**. Le dm³ est le pont entre capacités et volumes.",
    retenir: [
      "1 dm³ = 1 L.",
      "1 cm³ = 1 mL.",
      "1 m³ = 1000 L.",
      "Passer par le dm³.",
      "Litre = capacité, pas surface.",
    ],
    quiz: [
      { question: "Convertir 3 m³ en litres.", correction: "3 × 1000 = 3 000 L." },
      { question: "Convertir 250 mL en cm³.", correction: "250 mL = 250 cm³ (1 mL = 1 cm³)." },
    ],
  },

  {
    slug: "les-perimetres",
    bloc: "grandeurs",
    numero: 26,
    titre: "Les périmètres",
    intro:
      "Le périmètre, c'est la longueur du tour d'une figure. Quelques formules à connaître, dont celle du cercle.",
    schema: "cercle",
    definition:
      "Le périmètre est la **longueur du contour** d'une figure (le « tour » complet).",
    comprendre: [
      "On additionne toutes les longueurs du bord de la figure.",
      "Pour les polygones réguliers, une multiplication remplace l'addition.",
      "Pour le cercle, on utilise π (≈ 3,14).",
    ],
    points: [
      "**Carré** : P = 4 × côté.",
      "**Rectangle** : P = 2 × (L + l).",
      "**Triangle** : P = somme des 3 côtés.",
      "**Cercle** : P = 2 × π × r = π × D.",
    ],
    formules: [
      { label: "Rectangle", expr: "P = 2 × (L + l)" },
      { label: "Cercle", expr: "P = 2 × π × r = π × D" },
    ],
    methode: [
      "Identifier la figure.",
      "Choisir la formule adaptée.",
      "Remplacer les longueurs (même unité !).",
      "Calculer (utiliser π ≈ 3,14 pour le cercle).",
    ],
    exemple: {
      enonce: "Périmètre d'un rectangle de longueur 8 cm et largeur 3 cm.",
      lignes: [
        { calcul: "P = 2 × (L + l)", note: "" },
        { calcul: "P = 2 × (8 + 3)", note: "" },
        { calcul: "P = 2 × 11 = 22 cm", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Confondre périmètre et aire.",
        pourquoi: "Le périmètre est une longueur (le tour) ; l'aire est une surface (l'intérieur).",
      },
      {
        erreur: "Mélanger rayon et diamètre pour le cercle.",
        pourquoi: "P = 2πr avec le rayon, ou πD avec le diamètre (D = 2r).",
      },
    ],
    astuce:
      "Pour le cercle, deux écritures équivalentes : **2πr** (avec le rayon) ou **πD** (avec le diamètre). Choisis selon la donnée fournie.",
    retenir: [
      "Périmètre = tour de la figure.",
      "Carré : 4 × côté.",
      "Rectangle : 2(L + l).",
      "Cercle : 2πr = πD.",
      "≠ aire.",
    ],
    quiz: [
      { question: "Périmètre d'un carré de côté 5 cm ?", correction: "4 × 5 = 20 cm." },
      { question: "Périmètre d'un cercle de rayon 10 cm ? (π ≈ 3,14)", correction: "2 × 3,14 × 10 ≈ 62,8 cm." },
    ],
  },

  {
    slug: "les-aires",
    bloc: "grandeurs",
    numero: 27,
    titre: "Les aires",
    intro:
      "L'aire mesure la surface intérieure d'une figure. Chaque forme a sa formule : un incontournable du CRPE.",
    definition:
      "L'aire représente la **surface intérieure** d'une figure. Elle s'exprime en unités carrées (cm², m²…).",
    comprendre: [
      "L'aire compte « combien de carrés » remplissent la figure.",
      "Beaucoup de formules utilisent une **hauteur perpendiculaire** à la base.",
      "Pour le disque, on utilise π × r².",
    ],
    points: [
      "**Carré** : A = côté².",
      "**Rectangle** : A = L × l.",
      "**Triangle** : A = (base × hauteur) ÷ 2.",
      "**Parallélogramme** : A = base × hauteur.",
      "**Disque** : A = π × r².",
    ],
    formules: [
      { label: "Triangle", expr: "A = (base × hauteur) ÷ 2" },
      { label: "Losange", expr: "A = (D × d) ÷ 2" },
      { label: "Trapèze", expr: "A = ((B + b) × h) ÷ 2" },
      { label: "Disque", expr: "A = π × r²" },
    ],
    methode: [
      "Identifier la figure.",
      "Choisir la formule d'aire correspondante.",
      "Repérer la **hauteur perpendiculaire** si nécessaire.",
      "Remplacer et calculer (même unité).",
    ],
    exemple: {
      enonce: "Aire d'un triangle de base 6 cm et hauteur 4 cm.",
      lignes: [
        { calcul: "A = (base × hauteur) ÷ 2", note: "" },
        { calcul: "A = (6 × 4) ÷ 2", note: "" },
        { calcul: "A = 24 ÷ 2 = 12 cm²", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Utiliser un côté oblique comme hauteur.",
        pourquoi: "La hauteur doit être PERPENDICULAIRE à la base, pas un côté incliné.",
      },
      {
        erreur: "Oublier de diviser par 2 pour le triangle.",
        pourquoi: "L'aire du triangle est la moitié de celle du rectangle correspondant.",
      },
    ],
    astuce:
      "Le triangle est la **moitié** d'un rectangle : d'où le ÷ 2. Pour le disque, ne confonds pas 2πr (périmètre) et πr² (aire).",
    retenir: [
      "Rectangle : L × l.",
      "Triangle : (b × h) ÷ 2.",
      "Parallélogramme : b × h.",
      "Disque : π × r².",
      "Hauteur toujours perpendiculaire.",
    ],
    quiz: [
      { question: "Aire d'un rectangle 7 × 5 ?", correction: "7 × 5 = 35 unités²." },
      { question: "Aire d'un disque de rayon 3 cm ? (π ≈ 3,14)", correction: "3,14 × 3² = 3,14 × 9 ≈ 28,3 cm²." },
    ],
  },

  {
    slug: "les-volumes",
    bloc: "grandeurs",
    numero: 28,
    titre: "Les volumes",
    intro:
      "Le volume mesure l'espace occupé par un solide. Attention au fameux « ÷ 3 » du cône et de la pyramide.",
    definition:
      "Le volume mesure l'**espace occupé** par un solide. Il s'exprime en unités cubes (cm³, m³…).",
    comprendre: [
      "Pour les solides « droits », le volume = aire de la base × hauteur.",
      "Le cône et la pyramide valent le **tiers** du solide droit correspondant.",
      "La sphère a une formule à part : (4/3)πr³.",
    ],
    points: [
      "**Cube** : V = côté³.",
      "**Pavé droit** : V = L × l × h.",
      "**Cylindre** : V = π × r² × h.",
      "**Cône / pyramide** : V = (aire base × h) ÷ 3.",
      "**Sphère** : V = (4/3) × π × r³.",
    ],
    formules: [
      { label: "Pavé droit", expr: "V = L × l × h" },
      { label: "Cylindre", expr: "V = π × r² × h" },
      { label: "Cône", expr: "V = (π × r² × h) ÷ 3" },
      { label: "Sphère", expr: "V = (4/3) × π × r³" },
    ],
    methode: [
      "Identifier le solide.",
      "Choisir la formule de volume.",
      "Pour cône/pyramide : ne pas oublier le **÷ 3**.",
      "Remplacer et calculer (unités cohérentes).",
    ],
    exemple: {
      enonce: "Volume d'un pavé droit 5 × 3 × 2 (cm).",
      lignes: [
        { calcul: "V = L × l × h", note: "" },
        { calcul: "V = 5 × 3 × 2", note: "" },
        { calcul: "V = 30 cm³", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Oublier le ÷ 3 pour le cône et la pyramide.",
        pourquoi: "Un cône vaut le tiers du cylindre de même base et même hauteur.",
      },
      {
        erreur: "Confondre les unités (cm et m dans le même calcul).",
        pourquoi: "Toutes les longueurs doivent être dans la même unité avant de multiplier.",
      },
    ],
    astuce:
      "Mémo : **« pointu = ÷ 3 »**. Les solides qui se terminent en pointe (cône, pyramide) valent un tiers du solide droit.",
    retenir: [
      "Pavé : L × l × h.",
      "Cylindre : π r² h.",
      "Cône/pyramide : ÷ 3.",
      "Sphère : (4/3)πr³.",
      "Unités cohérentes.",
    ],
    quiz: [
      { question: "Volume d'un cube de côté 4 cm ?", correction: "4³ = 64 cm³." },
      { question: "Volume d'un cône de base 30 cm² et hauteur 9 cm ?", correction: "(30 × 9) ÷ 3 = 90 cm³." },
    ],
  },

  {
    slug: "vitesse-distance-temps",
    bloc: "grandeurs",
    numero: 29,
    titre: "Vitesse, distance et temps",
    intro:
      "Trois grandeurs liées par une seule relation. Le vrai piège est ailleurs : la conversion des unités de temps.",
    definition:
      "La vitesse, la distance et le temps sont liés : **V = D ÷ T**. On en déduit D = V × T et T = D ÷ V.",
    comprendre: [
      "La vitesse indique la distance parcourue par unité de temps.",
      "À partir d'une seule formule, on retrouve les deux autres.",
      "Les unités doivent être cohérentes (km/h avec des heures).",
    ],
    points: [
      "**V = D ÷ T** (vitesse).",
      "**D = V × T** (distance).",
      "**T = D ÷ V** (temps).",
    ],
    formules: [
      { label: "Vitesse", expr: "V = D ÷ T" },
      { label: "Distance", expr: "D = V × T" },
      { label: "Temps", expr: "T = D ÷ V" },
    ],
    methode: [
      "Repérer les deux grandeurs connues.",
      "Choisir la formule qui donne l'inconnue.",
      "**Convertir les unités de temps** (min → h si besoin).",
      "Calculer et vérifier la cohérence.",
    ],
    exemple: {
      enonce: "Un train roule à 60 km/h pendant 2 h. Quelle distance ?",
      lignes: [
        { calcul: "D = V × T", note: "on cherche la distance" },
        { calcul: "D = 60 × 2", note: "" },
        { calcul: "D = 120 km", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Mélanger minutes et heures dans le calcul.",
        pourquoi: "30 min = 0,5 h. Avec une vitesse en km/h, le temps doit être en heures.",
      },
      {
        erreur: "Se tromper de formule.",
        pourquoi: "Retrouve la bonne à partir de V = D/T (triangle D, V, T).",
      },
    ],
    astuce:
      "Le triangle **D / (V × T)** : cache la grandeur cherchée, la position des deux autres donne la formule. Convertis TOUJOURS le temps avant.",
    retenir: [
      "V = D ÷ T.",
      "D = V × T.",
      "T = D ÷ V.",
      "Convertir les minutes en heures.",
      "Unités cohérentes.",
    ],
    quiz: [
      { question: "Distance en 3 h à 80 km/h ?", correction: "D = 80 × 3 = 240 km." },
      { question: "Temps pour 150 km à 50 km/h ?", correction: "T = 150 ÷ 50 = 3 h." },
    ],
  },

  {
    slug: "les-echelles",
    bloc: "grandeurs",
    numero: 30,
    titre: "Les échelles",
    intro:
      "Cartes, plans, maquettes : l'échelle relie une distance sur le papier à la distance réelle. C'est de la proportionnalité.",
    definition:
      "Une échelle est le **rapport** entre une distance sur un document et la distance réelle correspondante : Échelle = distance plan ÷ distance réelle.",
    comprendre: [
      "L'échelle est un coefficient de proportionnalité entre plan et réalité.",
      "1 : 100 signifie 1 unité sur le plan pour 100 unités réelles.",
      "Les deux distances doivent être dans la **même unité**.",
    ],
    points: [
      "**Échelle = distance sur le plan ÷ distance réelle**.",
      "Notation **1 : n** → 1 sur le plan pour n en réalité.",
      "Applications : cartes, plans, maquettes.",
    ],
    formules: [{ label: "Échelle", expr: "e = distance plan ÷ distance réelle" }],
    methode: [
      "Convertir les deux distances dans la **même unité**.",
      "Écrire le rapport plan / réel.",
      "Simplifier pour obtenir 1 : n.",
      "Utiliser la proportionnalité pour trouver une distance manquante.",
    ],
    exemple: {
      enonce: "Sur un plan à l'échelle 1 : 100, un mur mesure 5 cm. Longueur réelle ?",
      lignes: [
        { calcul: "1 cm plan → 100 cm réels", note: "échelle 1 : 100" },
        { calcul: "5 × 100 = 500 cm", note: "" },
        { calcul: "= 5 m", note: "le mur réel mesure 5 m" },
      ],
    },
    pieges: [
      {
        erreur: "Comparer des longueurs d'unités différentes.",
        pourquoi: "L'échelle exige que plan et réel soient dans la même unité avant le calcul.",
      },
      {
        erreur: "Inverser plan et réel.",
        pourquoi: "Échelle = plan ÷ réel : le plan est plus petit, donc l'échelle est inférieure à 1.",
      },
    ],
    astuce:
      "Une échelle est une proportionnalité : dresse un **tableau plan / réel** et applique le coefficient. 1 : n → on multiplie par n pour aller vers le réel.",
    retenir: [
      "Échelle = plan ÷ réel.",
      "1 : n → 1 sur plan, n en réel.",
      "Même unité obligatoire.",
      "C'est de la proportionnalité.",
      "Plan → réel : × n.",
    ],
    quiz: [
      { question: "Échelle 1 : 200, 3 cm sur le plan. Distance réelle ?", correction: "3 × 200 = 600 cm = 6 m." },
      { question: "Une échelle 1 : 50 agrandit-elle ou réduit-elle ?", correction: "Elle réduit : le plan est 50 fois plus petit que la réalité." },
    ],
  },

  {
    slug: "arrondis-et-valeurs-approchees",
    bloc: "grandeurs",
    numero: 31,
    titre: "Arrondis et valeurs approchées",
    intro:
      "Arrondir, c'est remplacer un nombre par une valeur proche et plus simple. Tout se joue sur le chiffre suivant.",
    definition:
      "Arrondir consiste à remplacer un nombre par une **valeur proche** au rang demandé. On regarde le chiffre **juste après** le rang à conserver.",
    comprendre: [
      "On simplifie un nombre tout en restant proche de sa valeur.",
      "La règle dépend du chiffre suivant le rang choisi.",
      "0 à 4 : on garde ; 5 à 9 : on augmente d'une unité.",
    ],
    points: [
      "Regarder le chiffre **juste après** le rang à garder.",
      "**0 à 4** → on garde le chiffre.",
      "**5 à 9** → on augmente d'une unité.",
    ],
    methode: [
      "Repérer le rang demandé (dixième, centième…).",
      "Regarder le chiffre juste après.",
      "Appliquer la règle (0-4 garde / 5-9 augmente).",
      "Supprimer les chiffres suivants.",
    ],
    exemple: {
      enonce: "Arrondir 3,146 au centième.",
      lignes: [
        { calcul: "Rang du centième : le 4 (3,14|6)", note: "" },
        { calcul: "Chiffre suivant : 6", note: "6 est entre 5 et 9" },
        { calcul: "On augmente : 4 → 5", note: "" },
        { calcul: "3,146 ≈ 3,15", note: "" },
      ],
    },
    pieges: [
      {
        erreur: "Supprimer simplement les chiffres sans regarder le suivant.",
        pourquoi: "3,146 au centième n'est pas 3,14 : le 6 impose d'arrondir à 3,15.",
      },
      {
        erreur: "Arrondir au mauvais rang.",
        pourquoi: "Bien distinguer dixième (1 décimale), centième (2), millième (3).",
      },
    ],
    astuce:
      "Le seul chiffre qui décide est **celui juste après** le rang. « 5 ou plus, je monte ; 4 ou moins, je reste. »",
    retenir: [
      "Arrondir = valeur proche.",
      "Regarder le chiffre suivant le rang.",
      "0-4 : on garde.",
      "5-9 : on augmente.",
      "Ne pas juste couper les chiffres.",
    ],
    quiz: [
      { question: "Arrondir 7,83 au dixième.", correction: "Chiffre suivant : 3 (0-4) → on garde : 7,8." },
      { question: "Arrondir 12,5 à l'unité.", correction: "Chiffre suivant : 5 → on monte : 13." },
    ],
  },

  {
    slug: "ordres-de-grandeur",
    bloc: "grandeurs",
    numero: 32,
    titre: "Les ordres de grandeur",
    intro:
      "Estimer rapidement un résultat pour vérifier un calcul : un réflexe précieux et très valorisé au CRPE.",
    definition:
      "Un ordre de grandeur est une **estimation rapide** d'un résultat, obtenue en arrondissant les nombres, pour vérifier la cohérence d'un calcul.",
    comprendre: [
      "On remplace les nombres par des valeurs rondes faciles à calculer de tête.",
      "Le but n'est pas la précision, mais la **vérification**.",
      "Un résultat très éloigné de l'ordre de grandeur signale une erreur.",
    ],
    points: [
      "Arrondir chaque nombre à une valeur simple.",
      "Calculer mentalement l'estimation.",
      "Comparer au résultat exact pour détecter une erreur.",
    ],
    methode: [
      "Arrondir chaque nombre du calcul.",
      "Effectuer l'opération avec ces valeurs rondes.",
      "Obtenir une estimation.",
      "Comparer : le résultat exact doit être proche.",
    ],
    exemple: {
      enonce: "Estimer 198 × 51.",
      lignes: [
        { calcul: "198 ≈ 200 et 51 ≈ 50", note: "on arrondit" },
        { calcul: "200 × 50 = 10 000", note: "" },
        { calcul: "Ordre de grandeur ≈ 10 000", note: "le résultat exact (10 098) est proche" },
      ],
    },
    pieges: [
      {
        erreur: "Prendre l'ordre de grandeur pour un résultat exact.",
        pourquoi: "C'est une estimation : elle sert à vérifier, pas à remplacer le calcul précis.",
      },
      {
        erreur: "Arrondir de façon trop grossière.",
        pourquoi: "Des arrondis trop larges faussent l'estimation : reste proche des valeurs réelles.",
      },
    ],
    astuce:
      "Avant de valider un calcul, fais toujours un ordre de grandeur : si ton résultat exact en est très loin, cherche l'erreur.",
    retenir: [
      "Estimation rapide avec des nombres ronds.",
      "Sert à vérifier un calcul.",
      "Détecte les grosses erreurs.",
      "Jamais une valeur exacte.",
      "Arrondir sans exagérer.",
    ],
    quiz: [
      { question: "Ordre de grandeur de 402 × 19 ?", correction: "≈ 400 × 20 = 8 000." },
      { question: "Ordre de grandeur de 6 040 ÷ 29 ?", correction: "≈ 6 000 ÷ 30 = 200." },
    ],
  },
];
