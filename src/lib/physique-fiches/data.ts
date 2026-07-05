/**
 * Fiches de PHYSIQUE-CHIMIE (33 fiches, CRPE)
 */
import type { PhysFiche } from "./types";

export const PHYS_FICHES: PhysFiche[] = [
  // ============== BLOC 1 — MATIÈRE ET TRANSFORMATIONS ==============
  {
    slug: "les-etats-de-la-matiere",
    bloc: "matiere",
    numero: 1,
    titre: "Les états de la matière",
    intro: "Solide, liquide, gaz : la matière change d'apparence selon la température et la pression.",
    schema: "etats-matiere",
    definition: "La matière existe sous trois états principaux : **solide, liquide et gazeux**.",
    explication: [
      "Ce qui change, c'est l'organisation des particules (serrées ou dispersées).",
      "Les états dépendent de la **température** et de la **pression**.",
      "Un gaz, même invisible (l'air), est bien de la matière.",
    ],
    points: [
      { points: [
        "**Solide** : forme propre + volume propre.",
        "**Liquide** : volume propre, pas de forme propre.",
        "**Gaz** : ni forme ni volume propres.",
      ] },
    ],
    exemple: "L'eau peut être glace (solide), eau liquide, ou vapeur d'eau (gaz).",
    pieges: [
      { erreur: "Penser que l'air n'est pas de la matière.", pourquoi: "L'air est une matière, même s'il est invisible : il a une masse et occupe un volume." },
    ],
    astuce: "Retiens : **Solide** = tout est fixé ; **Liquide** = volume fixé mais forme libre ; **Gaz** = tout est libre.",
    retenir: [
      "3 états : solide, liquide, gaz.",
      "Solide : forme + volume propres.",
      "Liquide : volume propre seulement.",
      "Gaz : ni forme ni volume propres.",
      "Dépend de la température et de la pression.",
    ],
    quiz: [
      { question: "Quel état a un volume propre mais pas de forme propre ?", correction: "L'état liquide." },
      { question: "L'air est-il de la matière ?", correction: "Oui : il a une masse et occupe un volume, même invisible." },
    ],
  },
  {
    slug: "les-changements-d-etat",
    bloc: "matiere",
    numero: 2,
    titre: "Les changements d'état",
    intro: "Passer de la glace à l'eau puis à la vapeur : la matière change d'état sans changer de nature.",
    schema: "changements-etat",
    definition: "Un changement d'état est le passage d'un état physique à un autre **sans modifier la nature** de la matière.",
    explication: [
      "Seule l'organisation des particules change, pas la substance.",
      "Chaque changement porte un nom précis.",
      "C'est une transformation **physique**.",
    ],
    points: [
      { points: [
        "**Fusion** : solide → liquide.",
        "**Solidification** : liquide → solide.",
        "**Vaporisation** : liquide → gaz.",
        "**Liquéfaction (condensation)** : gaz → liquide.",
        "**Sublimation** : solide → gaz.",
      ] },
    ],
    exemple: "Un glaçon qui fond subit une fusion : la glace devient de l'eau liquide (toujours de l'eau).",
    pieges: [
      { erreur: "Croire que la matière change de nature en changeant d'état.", pourquoi: "Lors d'un changement d'état, la matière **reste la même** (l'eau reste de l'eau)." },
    ],
    astuce: "**Fusion = Fondre** (solide → liquide). Ne confonds pas avec vaporisation (liquide → gaz).",
    retenir: [
      "Changement d'état = transformation physique.",
      "Fusion, solidification, vaporisation, liquéfaction, sublimation.",
      "La nature de la matière ne change pas.",
    ],
    quiz: [
      { question: "Comment s'appelle le passage solide → liquide ?", correction: "La fusion." },
      { question: "Le passage gaz → liquide ?", correction: "La liquéfaction (ou condensation)." },
    ],
  },
  {
    slug: "les-melanges",
    bloc: "matiere",
    numero: 3,
    titre: "Les mélanges",
    intro: "Homogène ou hétérogène : tout dépend de si l'on distingue, ou non, les constituants.",
    definition: "Un mélange est constitué de **plusieurs substances**.",
    explication: [
      "Si on ne voit qu'une seule phase → homogène.",
      "Si on distingue les constituants → hétérogène.",
    ],
    points: [
      { titre: "Mélange homogène", points: ["Une seule phase visible.", "Exemple : eau salée."] },
      { titre: "Mélange hétérogène", points: ["Plusieurs constituants visibles.", "Exemple : eau + huile."] },
    ],
    exemple: "Le sirop dans l'eau forme un mélange homogène : la boisson paraît uniforme.",
    pieges: [
      { erreur: "Croire qu'un liquide transparent est un corps pur.", pourquoi: "L'eau salée est transparente mais reste un mélange (homogène)." },
    ],
    astuce: "**Homo**gène = **un** aspect uniforme ; **hétéro**gène = **plusieurs** parties visibles.",
    retenir: [
      "Mélange = plusieurs substances.",
      "Homogène : une seule phase (eau salée).",
      "Hétérogène : plusieurs constituants (eau + huile).",
    ],
    quiz: [
      { question: "L'eau + huile est un mélange…", correction: "Hétérogène (on distingue deux phases)." },
      { question: "Un mélange homogène paraît comment ?", correction: "Uniforme, une seule phase visible." },
    ],
  },
  {
    slug: "les-solutions",
    bloc: "matiere",
    numero: 4,
    titre: "Les solutions",
    intro: "Quand une substance se dissout complètement dans un liquide, on obtient une solution.",
    definition: "Une solution est un **mélange homogène** obtenu après **dissolution** d'un soluté dans un solvant.",
    explication: [
      "Le solvant est le liquide qui dissout.",
      "Le soluté est la substance dissoute.",
      "Le soluté ne disparaît pas : il est réparti dans le solvant.",
    ],
    points: [
      { points: ["**Solvant** : liquide qui dissout (souvent l'eau).", "**Soluté** : substance dissoute.", "Résultat : toujours **homogène**."] },
    ],
    exemple: "Eau + sucre : l'eau est le solvant, le sucre est le soluté.",
    pieges: [
      { erreur: "Penser que le sucre dissous a disparu.", pourquoi: "Le sucre ne disparaît pas : il est **dissous** (on le retrouve en évaporant l'eau)." },
    ],
    astuce: "**Solvant dissout, soluté est dissous.** Une solution est toujours un mélange homogène.",
    retenir: [
      "Solution = mélange homogène après dissolution.",
      "Solvant = dissout ; soluté = dissous.",
      "Le soluté ne disparaît pas.",
    ],
    quiz: [
      { question: "Dans l'eau sucrée, quel est le solvant ?", correction: "L'eau." },
      { question: "Une solution est-elle homogène ou hétérogène ?", correction: "Toujours homogène." },
    ],
  },
  {
    slug: "la-masse-volumique",
    bloc: "matiere",
    numero: 5,
    titre: "La masse volumique",
    intro: "Pourquoi l'huile flotte-t-elle sur l'eau ? Grâce à sa masse volumique, une grandeur propre à chaque substance.",
    definition: "La masse volumique indique la **masse contenue dans un certain volume**.",
    explication: [
      "Elle se calcule en divisant la masse par le volume.",
      "Chaque substance a sa propre masse volumique.",
      "Un corps flotte s'il est moins dense que le liquide.",
    ],
    points: [
      { points: ["ρ (rhô) = masse volumique.", "m = masse ; V = volume.", "Unité fréquente : g/cm³ ou kg/m³."] },
    ],
    formules: [{ label: "Masse volumique", expr: "ρ = m / V" }],
    exemple: "L'huile flotte sur l'eau car sa masse volumique est **plus faible** que celle de l'eau.",
    pieges: [
      { erreur: "Confondre masse et poids.", pourquoi: "La masse (en kg) est une quantité de matière ; le poids (en N) est une force. Ce sont deux grandeurs différentes." },
    ],
    astuce: "Un objet **flotte** si sa masse volumique est **inférieure** à celle du liquide, sinon il coule.",
    retenir: [
      "ρ = m / V.",
      "Propre à chaque substance.",
      "Moins dense que l'eau → flotte.",
      "Masse ≠ poids.",
    ],
    quiz: [
      { question: "Quelle est la formule de la masse volumique ?", correction: "ρ = m / V (masse divisée par volume)." },
      { question: "Pourquoi l'huile flotte-t-elle sur l'eau ?", correction: "Sa masse volumique est plus faible que celle de l'eau." },
    ],
  },
  {
    slug: "les-transformations-physiques",
    bloc: "matiere",
    numero: 6,
    titre: "Les transformations physiques",
    intro: "Couper, fondre, évaporer : l'aspect change, mais la substance reste la même.",
    definition: "Une transformation physique modifie l'**aspect** de la matière **sans changer sa composition**.",
    explication: [
      "Aucune nouvelle substance n'apparaît.",
      "La transformation est souvent réversible.",
    ],
    points: [
      { points: ["Fusion.", "Évaporation.", "Découpage.", "Broyage."] },
    ],
    exemple: "La glace fond mais reste de l'eau : c'est une transformation physique.",
    pieges: [
      { erreur: "Croire qu'un changement d'aspect crée une nouvelle matière.", pourquoi: "Dans une transformation physique, la composition ne change pas : aucune nouvelle substance." },
    ],
    astuce: "Physique = **même substance**, autre aspect. Chimique = **nouvelle substance**.",
    retenir: [
      "Transformation physique = changement d'aspect.",
      "Aucune nouvelle substance créée.",
      "Ex : fusion, évaporation, découpage.",
    ],
    quiz: [
      { question: "Faire fondre de la glace est une transformation…", correction: "Physique (ça reste de l'eau)." },
      { question: "Une nouvelle substance apparaît-elle ?", correction: "Non, dans une transformation physique." },
    ],
  },
  {
    slug: "les-transformations-chimiques",
    bloc: "matiere",
    numero: 7,
    titre: "Les transformations chimiques",
    intro: "Quand la matière se transforme en nouvelles substances : c'est une réaction chimique.",
    schema: "combustion",
    definition: "Une transformation chimique **produit une ou plusieurs nouvelles substances**.",
    explication: [
      "Les substances de départ (réactifs) disparaissent au profit de produits.",
      "Plusieurs indices permettent de la repérer.",
      "Une combustion est une transformation chimique.",
    ],
    points: [
      { titre: "Indices d'une réaction chimique", points: [
        "Changement de couleur.",
        "Apparition d'un gaz.",
        "Formation d'un précipité (solide).",
        "Dégagement de chaleur.",
      ] },
    ],
    exemple: "Le bois brûle et produit des cendres et des gaz : ce sont de **nouvelles substances**.",
    pieges: [
      { erreur: "Classer une combustion comme transformation physique.", pourquoi: "Une combustion crée de nouvelles substances : c'est une transformation **chimique**." },
    ],
    astuce: "4 indices à repérer : **couleur, gaz, précipité, chaleur**. Si l'un apparaît, c'est souvent chimique.",
    retenir: [
      "Transformation chimique = nouvelles substances.",
      "Indices : couleur, gaz, précipité, chaleur.",
      "La combustion est chimique.",
    ],
    quiz: [
      { question: "Cite deux indices d'une transformation chimique.", correction: "Par exemple : changement de couleur, apparition d'un gaz, précipité, dégagement de chaleur." },
      { question: "Le bois qui brûle : physique ou chimique ?", correction: "Chimique (cendres et gaz sont de nouvelles substances)." },
    ],
  },
  {
    slug: "les-atomes",
    bloc: "matiere",
    numero: 8,
    titre: "Les atomes",
    intro: "La brique élémentaire de toute la matière : minuscule, mais essentielle.",
    schema: "atome",
    definition: "L'atome est la **plus petite partie d'un élément chimique**.",
    explication: [
      "Il est composé d'un noyau entouré d'électrons.",
      "Chaque élément (oxygène, carbone…) a son propre type d'atome.",
      "Les atomes sont extrêmement petits.",
    ],
    points: [
      { points: ["Un **noyau** central.", "Des **électrons** qui l'entourent."] },
    ],
    exemple: "L'atome d'oxygène est différent de l'atome de carbone : ce ne sont pas les mêmes éléments.",
    pieges: [
      { erreur: "Se représenter les atomes comme visibles.", pourquoi: "Les atomes sont extrêmement petits : invisibles à l'œil et même au microscope classique." },
    ],
    astuce: "Emboîtement : la **matière** est faite d'**atomes**, qui s'assemblent en **molécules**.",
    retenir: [
      "Atome = plus petite partie d'un élément.",
      "Noyau + électrons.",
      "Toute matière est constituée d'atomes.",
    ],
    quiz: [
      { question: "De quoi est composé un atome ?", correction: "D'un noyau entouré d'électrons." },
      { question: "L'atome d'oxygène et de carbone sont-ils identiques ?", correction: "Non, ce sont des éléments différents." },
    ],
  },
  {
    slug: "les-molecules",
    bloc: "matiere",
    numero: 9,
    titre: "Les molécules",
    intro: "En s'assemblant, les atomes forment des molécules — comme l'eau, H₂O.",
    schema: "molecule-eau",
    definition: "Une molécule est un **assemblage de plusieurs atomes** liés entre eux.",
    explication: [
      "Les atomes peuvent être identiques ou différents.",
      "La formule indique les atomes et leur nombre.",
    ],
    points: [
      { titre: "Exemples", points: ["Eau : **H₂O**.", "Dioxyde de carbone : **CO₂**.", "Dioxygène : **O₂**."] },
    ],
    exemple: "Une molécule d'eau (H₂O) contient deux atomes d'hydrogène et un atome d'oxygène.",
    pieges: [
      { erreur: "Croire qu'une molécule contient forcément des atomes différents.", pourquoi: "Une molécule peut être faite d'atomes **identiques** (O₂) ou **différents** (H₂O)." },
    ],
    astuce: "Dans une formule, le petit chiffre indique le **nombre d'atomes** : H₂O = 2 H + 1 O.",
    retenir: [
      "Molécule = assemblage d'atomes.",
      "Atomes identiques (O₂) ou différents (H₂O).",
      "La formule donne le nombre d'atomes.",
    ],
    quiz: [
      { question: "Combien d'atomes dans une molécule d'eau ?", correction: "Trois : 2 hydrogène + 1 oxygène." },
      { question: "O₂ est-elle une molécule ?", correction: "Oui, faite de deux atomes d'oxygène identiques." },
    ],
  },

  // ==================== BLOC 2 — ÉNERGIE ====================
  {
    slug: "les-formes-d-energie",
    bloc: "energie",
    numero: 10,
    titre: "Les différentes formes d'énergie",
    intro: "Mouvement, chaleur, lumière… l'énergie prend de nombreuses formes qui peuvent se transformer.",
    definition: "L'énergie est la **capacité d'un système à produire un effet** : mouvement, chaleur, lumière…",
    explication: [
      "Il existe plusieurs formes d'énergie.",
      "Elles peuvent se convertir les unes dans les autres.",
      "L'énergie ne se crée pas : elle se transforme.",
    ],
    points: [
      { points: [
        "**Cinétique** (mouvement).",
        "**Thermique** (chaleur).",
        "**Lumineuse** (lumière).",
        "**Chimique** (réactions chimiques).",
        "**Électrique** (courant).",
        "**Nucléaire** (noyaux des atomes).",
      ] },
    ],
    exemple: "Une lampe transforme l'énergie électrique en énergie lumineuse et thermique.",
    pieges: [
      { erreur: "Penser que l'énergie se crée ou disparaît.", pourquoi: "L'énergie ne se crée pas et ne se détruit pas : elle se **transforme** d'une forme à une autre." },
    ],
    astuce: "Principe clé : l'énergie se **conserve**, elle change seulement de forme.",
    retenir: [
      "Énergie = capacité à produire un effet.",
      "Formes : cinétique, thermique, lumineuse, chimique, électrique, nucléaire.",
      "Elle se transforme, ne se crée pas.",
    ],
    quiz: [
      { question: "En quoi une lampe transforme-t-elle l'énergie électrique ?", correction: "En énergie lumineuse et thermique." },
      { question: "L'énergie peut-elle être créée ?", correction: "Non, elle se transforme seulement." },
    ],
  },
  {
    slug: "les-conversions-d-energie",
    bloc: "energie",
    numero: 11,
    titre: "Les conversions d'énergie",
    intro: "Passer d'une forme à une autre : c'est ce que font tous nos appareils, avec des pertes inévitables.",
    schema: "chaine-energetique",
    definition: "Une conversion d'énergie est un **changement de forme** d'énergie.",
    explication: [
      "Un appareil convertit une énergie d'entrée en énergie utile.",
      "Une partie est toujours perdue, souvent en chaleur.",
    ],
    points: [
      { titre: "Exemples de conversions", points: [
        "Panneau solaire : lumineuse → électrique.",
        "Voiture : chimique → mécanique.",
        "Ampoule : électrique → lumière + chaleur.",
      ] },
    ],
    exemple: "Un vélo transforme l'énergie chimique du cycliste en énergie mécanique.",
    pieges: [
      { erreur: "Croire que toute l'énergie est convertie en énergie utile.", pourquoi: "Une partie est toujours **dissipée** sous forme de chaleur : c'est une perte." },
    ],
    astuce: "Dessine une **chaîne énergétique** : source → convertisseur → énergie utile (+ pertes en chaleur).",
    retenir: [
      "Conversion = changement de forme d'énergie.",
      "Toujours des pertes (chaleur).",
      "Ex : solaire → électrique, chimique → mécanique.",
    ],
    quiz: [
      { question: "Un panneau solaire convertit quelle énergie en quelle énergie ?", correction: "Lumineuse → électrique." },
      { question: "Sous quelle forme sont les pertes d'énergie ?", correction: "Sous forme de chaleur." },
    ],
  },
  {
    slug: "les-sources-d-energie",
    bloc: "energie",
    numero: 12,
    titre: "Les sources d'énergie",
    intro: "Renouvelables ou non : d'où vient l'énergie que nous utilisons chaque jour ?",
    definition: "Une source d'énergie est un élément permettant de **produire de l'énergie utilisable**.",
    explication: [
      "On distingue les sources renouvelables et non renouvelables.",
      "Les renouvelables se régénèrent naturellement.",
      "Les fossiles sont limitées dans le temps.",
    ],
    points: [
      { titre: "Renouvelables", points: ["Soleil, vent, eau.", "Biomasse, géothermie."] },
      { titre: "Non renouvelables", points: ["Pétrole, charbon, gaz naturel.", "Uranium."] },
    ],
    exemple: "Une centrale thermique utilise du charbon (source non renouvelable) pour produire de l'électricité.",
    pieges: [
      { erreur: "Penser que les énergies fossiles sont inépuisables.", pourquoi: "Le pétrole, le charbon et le gaz sont en **quantité limitée** : ils finiront par s'épuiser." },
    ],
    astuce: "Renouvelable = se **reconstitue** à l'échelle humaine (soleil, vent). Fossile = stock **limité**.",
    retenir: [
      "Renouvelables : soleil, vent, eau, biomasse, géothermie.",
      "Non renouvelables : pétrole, charbon, gaz, uranium.",
      "Les fossiles sont limitées.",
    ],
    quiz: [
      { question: "Cite deux sources renouvelables.", correction: "Par exemple : soleil, vent, eau, biomasse, géothermie." },
      { question: "Le charbon est-il renouvelable ?", correction: "Non, c'est une énergie fossile limitée." },
    ],
  },
  {
    slug: "les-energies-renouvelables",
    bloc: "energie",
    numero: 13,
    titre: "Les énergies renouvelables",
    intro: "Le soleil, le vent, l'eau : des sources qui se reconstituent et polluent moins.",
    definition: "Les énergies renouvelables sont des énergies qui **se reconstituent naturellement**.",
    explication: [
      "Elles ne s'épuisent pas à l'échelle humaine.",
      "Elles sont privilégiées pour réduire la pollution.",
      "Elles ont tout de même un impact environnemental.",
    ],
    points: [
      { points: ["Énergie **solaire**.", "Énergie **éolienne** (vent).", "Énergie **hydraulique** (eau).", "**Biomasse**."] },
    ],
    exemple: "Une éolienne transforme l'énergie du vent en électricité.",
    pieges: [
      { erreur: "Croire que renouvelable = zéro impact.", pourquoi: "Renouvelable ne veut pas dire **sans impact environnemental** (fabrication, matériaux, occupation des sols)." },
    ],
    astuce: "Renouvelable = **inépuisable** à notre échelle, mais pas totalement « propre » pour autant.",
    retenir: [
      "Renouvelables : solaire, éolien, hydraulique, biomasse.",
      "Se reconstituent naturellement.",
      "Privilégiées contre la pollution, mais pas sans impact.",
    ],
    quiz: [
      { question: "Que transforme une éolienne ?", correction: "L'énergie du vent en électricité." },
      { question: "Renouvelable signifie-t-il sans impact ?", correction: "Non : il existe toujours un impact environnemental." },
    ],
  },
  {
    slug: "les-combustions",
    bloc: "energie",
    numero: 14,
    titre: "Les combustions",
    intro: "Brûler du bois ou du gaz : une réaction chimique qui libère de l'énergie.",
    schema: "combustion",
    definition: "Une combustion est une **réaction chimique** entre un **combustible** et un **comburant** (souvent le dioxygène).",
    explication: [
      "Le combustible brûle, le comburant (O₂) permet la combustion.",
      "Elle libère de l'énergie (chaleur, lumière).",
      "C'est une transformation chimique.",
    ],
    points: [
      { points: ["**Combustible** : ce qui brûle (bois, gaz…).", "**Comburant** : le dioxygène (O₂).", "Produit de l'énergie."] },
    ],
    formules: [{ label: "Combustion du bois", expr: "bois + dioxygène → dioxyde de carbone + eau + énergie" }],
    exemple: "Une bougie qui brûle réalise une combustion : la cire est le combustible, l'air apporte l'O₂.",
    pieges: [
      { erreur: "Considérer la combustion comme une transformation physique.", pourquoi: "La combustion crée de nouvelles substances : c'est une transformation **chimique**." },
    ],
    astuce: "Pour brûler, il faut **3 ingrédients** : combustible + comburant (O₂) + une source de chaleur (le triangle du feu).",
    retenir: [
      "Combustion = combustible + comburant (O₂).",
      "Réaction chimique.",
      "Libère de l'énergie (chaleur, lumière).",
    ],
    quiz: [
      { question: "Quel est le comburant d'une combustion ?", correction: "Le dioxygène (O₂)." },
      { question: "Une combustion est-elle physique ou chimique ?", correction: "Chimique." },
    ],
  },
  {
    slug: "puissance-et-energie",
    bloc: "energie",
    numero: 15,
    titre: "Puissance et énergie",
    intro: "Deux notions à ne pas confondre : l'énergie est une quantité, la puissance sa vitesse de transfert.",
    definition: "L'**énergie** est une quantité (en joules) ; la **puissance** est la **vitesse** à laquelle l'énergie est transférée (en watts).",
    explication: [
      "Plus la puissance est élevée, plus l'énergie est consommée vite.",
      "La puissance se calcule en divisant l'énergie par le temps.",
    ],
    points: [
      { points: ["P : puissance (watt, W).", "E : énergie (joule, J).", "t : temps (seconde, s)."] },
    ],
    formules: [{ label: "Puissance", expr: "P = E / t" }],
    exemple: "Une ampoule de 60 W consomme l'énergie plus vite qu'une ampoule de 40 W.",
    pieges: [
      { erreur: "Confondre énergie consommée et puissance.", pourquoi: "Deux appareils peuvent consommer la **même énergie** mais pas à la même **vitesse** (puissance différente)." },
    ],
    astuce: "Pense à l'eau : l'**énergie** = la quantité d'eau ; la **puissance** = le débit du robinet.",
    retenir: [
      "P = E / t.",
      "Énergie en joules, puissance en watts.",
      "La puissance = rapidité de consommation.",
    ],
    quiz: [
      { question: "Quelle est la formule reliant puissance, énergie et temps ?", correction: "P = E / t." },
      { question: "Quelle unité pour la puissance ?", correction: "Le watt (W)." },
    ],
  },
  {
    slug: "les-economies-d-energie",
    bloc: "energie",
    numero: 16,
    titre: "Les économies d'énergie",
    intro: "Réduire sa consommation pour protéger l'environnement — sans sacrifier son confort.",
    definition: "Les économies d'énergie consistent à **réduire la consommation énergétique**.",
    explication: [
      "De petits gestes réduisent la consommation.",
      "Cela permet de limiter la pollution.",
      "Économiser n'impose pas de supprimer son confort.",
    ],
    points: [
      { points: [
        "Éteindre les lumières inutiles.",
        "Utiliser des appareils basse consommation.",
        "Isoler les logements.",
        "Limiter chauffage et climatisation.",
      ] },
    ],
    exemple: "Une ampoule LED consomme beaucoup moins d'énergie qu'une ampoule classique.",
    pieges: [
      { erreur: "Croire qu'économiser l'énergie signifie renoncer au confort.", pourquoi: "On peut réduire la consommation (isolation, LED) tout en gardant le même confort." },
    ],
    astuce: "Le meilleur geste : **l'isolation** du logement, qui réduit durablement le chauffage.",
    retenir: [
      "Économie d'énergie = réduire la consommation.",
      "Gestes : LED, isolation, extinction, chauffage maîtrisé.",
      "Protège l'environnement.",
    ],
    quiz: [
      { question: "Cite deux façons d'économiser l'énergie.", correction: "Par exemple : ampoules LED, isolation, éteindre les lumières, limiter le chauffage." },
      { question: "Économiser l'énergie oblige-t-il à supprimer le confort ?", correction: "Non." },
    ],
  },

  // ==================== BLOC 3 — ÉLECTRICITÉ ====================
  {
    slug: "le-courant-electrique",
    bloc: "electricite",
    numero: 17,
    titre: "Le courant électrique",
    intro: "Un déplacement d'électrons… à condition que le circuit soit fermé.",
    schema: "circuit-simple",
    definition: "Le courant électrique correspond à un **déplacement d'électrons** dans un **circuit fermé**.",
    explication: [
      "Les électrons circulent dans les fils conducteurs.",
      "Le circuit doit être fermé pour que le courant passe.",
      "Un interrupteur ouvert coupe le courant.",
    ],
    points: [
      { points: ["Le courant = déplacement d'électrons.", "Nécessite un **circuit fermé**."] },
    ],
    exemple: "Une lampe ne s'allume que si le circuit est fermé.",
    pieges: [
      { erreur: "Penser que le courant passe dans un circuit ouvert.", pourquoi: "Un circuit **ouvert** empêche totalement le passage du courant." },
    ],
    astuce: "Retiens : **circuit fermé = courant** ; circuit ouvert = pas de courant.",
    retenir: [
      "Courant = déplacement d'électrons.",
      "Circule uniquement dans un circuit fermé.",
      "Circuit ouvert = pas de courant.",
    ],
    quiz: [
      { question: "Quelle condition pour que le courant circule ?", correction: "Le circuit doit être fermé." },
      { question: "Qu'est-ce que le courant électrique ?", correction: "Un déplacement d'électrons." },
    ],
  },
  {
    slug: "la-tension-electrique",
    bloc: "electricite",
    numero: 18,
    titre: "La tension électrique",
    intro: "La « force » qui pousse le courant à circuler, mesurée en volts.",
    definition: "La tension est une sorte de **« force électrique »** qui permet de faire circuler le courant. Elle se mesure en **volts (V)**.",
    explication: [
      "La tension est la cause du courant.",
      "Elle se mesure entre deux points d'un circuit.",
      "Plus la tension est élevée, plus elle peut faire circuler de courant.",
    ],
    points: [
      { points: ["Unité : le **volt (V)**.", "Se mesure **entre deux points** (avec un voltmètre)."] },
    ],
    exemple: "Une pile de 9 V fournit une tension plus élevée qu'une pile de 1,5 V.",
    pieges: [
      { erreur: "Dire que la tension « se consomme ».", pourquoi: "La tension ne se consomme pas : elle se **mesure entre deux points**." },
    ],
    astuce: "La tension est la **cause**, le courant est la **conséquence**. Voltmètre = branché **en dérivation**.",
    retenir: [
      "Tension = force qui fait circuler le courant.",
      "Unité : le volt (V).",
      "Se mesure entre deux points.",
    ],
    quiz: [
      { question: "Quelle est l'unité de la tension ?", correction: "Le volt (V)." },
      { question: "La tension est-elle la cause ou la conséquence du courant ?", correction: "La cause." },
    ],
  },
  {
    slug: "l-intensite-du-courant",
    bloc: "electricite",
    numero: 19,
    titre: "L'intensité du courant",
    intro: "Le « débit » du courant électrique, mesuré en ampères.",
    definition: "L'intensité mesure la **quantité de courant** qui circule dans un circuit. Elle se mesure en **ampères (A)**.",
    explication: [
      "C'est le « débit » d'électrons.",
      "En série, l'intensité est la même partout.",
      "Plus un appareil est puissant, plus l'intensité est élevée.",
    ],
    points: [
      { points: ["Unité : l'**ampère (A)**.", "En série : **même intensité** en tout point."] },
    ],
    exemple: "Plus une lampe est puissante, plus l'intensité du courant qui la traverse est élevée.",
    pieges: [
      { erreur: "Croire que l'intensité diminue après chaque lampe en série.", pourquoi: "En série, l'intensité est la **même en tout point** du circuit." },
    ],
    astuce: "L'intensité = le **débit** ; l'ampèremètre se branche **en série** (dans le circuit).",
    retenir: [
      "Intensité = quantité (débit) de courant.",
      "Unité : l'ampère (A).",
      "Même intensité partout en série.",
    ],
    quiz: [
      { question: "Quelle est l'unité de l'intensité ?", correction: "L'ampère (A)." },
      { question: "En série, l'intensité est-elle la même partout ?", correction: "Oui." },
    ],
  },
  {
    slug: "les-circuits-electriques",
    bloc: "electricite",
    numero: 20,
    titre: "Les circuits électriques",
    intro: "Une pile, des fils, une lampe : les ingrédients de base d'un circuit.",
    schema: "circuit-simple",
    definition: "Un circuit électrique est un **ensemble de composants reliés** permettant le passage du courant.",
    explication: [
      "Le générateur fournit l'énergie.",
      "Les récepteurs l'utilisent (lampe, moteur).",
      "Le circuit doit être fermé pour fonctionner.",
    ],
    points: [
      { titre: "Éléments d'un circuit", points: [
        "**Générateur** (pile).",
        "**Récepteurs** (lampe, moteur).",
        "**Interrupteur**.",
        "**Fils conducteurs**.",
      ] },
    ],
    exemple: "Une pile reliée à une ampoule par des fils forme un circuit simple.",
    pieges: [
      { erreur: "Oublier que le circuit doit être fermé.", pourquoi: "Un circuit doit **toujours être fermé** pour fonctionner." },
    ],
    astuce: "Le **générateur** produit, les **récepteurs** consomment. Sans boucle fermée, rien ne fonctionne.",
    retenir: [
      "Circuit = composants reliés.",
      "Générateur, récepteurs, interrupteur, fils.",
      "Doit être fermé pour fonctionner.",
    ],
    quiz: [
      { question: "Quel composant fournit l'énergie ?", correction: "Le générateur (la pile)." },
      { question: "Cite deux récepteurs.", correction: "Par exemple : une lampe, un moteur." },
    ],
  },
  {
    slug: "serie-et-derivation",
    bloc: "electricite",
    numero: 21,
    titre: "Série et dérivation",
    intro: "Deux façons de brancher les composants, avec des conséquences opposées en cas de panne.",
    schema: "circuit-serie",
    definition: "Il existe deux types de montages électriques : **en série** et **en dérivation** (parallèle).",
    explication: [
      "En série, tout est sur une seule boucle.",
      "En dérivation, les appareils sont sur des branches séparées.",
      "La panne d'un élément a des effets très différents selon le montage.",
    ],
    points: [
      { titre: "Montage en série", points: ["Composants les uns à la suite des autres.", "Même courant partout.", "Si un élément grille, **tout s'arrête**."] },
      { titre: "Montage en dérivation", points: ["Composants sur plusieurs branches.", "Chaque appareil fonctionne **indépendamment**."] },
    ],
    exemple: "Dans une maison, les prises et lampes sont branchées **en dérivation** : couper une pièce n'éteint pas les autres.",
    pieges: [
      { erreur: "Croire qu'en série une lampe grillée n'affecte pas les autres.", pourquoi: "En série, si une lampe grille, **tout le circuit s'éteint**." },
    ],
    astuce: "**Série = dépendance** (tout lié) ; **dérivation = indépendance** (chacun sa branche).",
    retenir: [
      "Série : une boucle, même courant, tout dépend de tout.",
      "Dérivation : plusieurs branches indépendantes.",
      "Les maisons sont câblées en dérivation.",
    ],
    quiz: [
      { question: "Dans quel montage une lampe grillée éteint tout ?", correction: "En série." },
      { question: "Comment sont branchées les prises d'une maison ?", correction: "En dérivation." },
    ],
  },
  {
    slug: "conducteurs-et-isolants",
    bloc: "electricite",
    numero: 22,
    titre: "Conducteurs et isolants",
    intro: "Certains matériaux laissent passer le courant, d'autres le bloquent.",
    definition: "Les matériaux ne laissent pas tous passer le courant : les **conducteurs** le laissent passer, les **isolants** l'empêchent.",
    explication: [
      "Les métaux sont généralement conducteurs.",
      "Le plastique, le bois, le verre sont isolants.",
      "L'état de l'eau change tout : pure = isolante, salée = conductrice.",
    ],
    points: [
      { titre: "Conducteurs", points: ["Laissent passer le courant.", "Ex : métaux (cuivre, fer)."] },
      { titre: "Isolants", points: ["Empêchent le passage du courant.", "Ex : plastique, bois, verre."] },
    ],
    exemple: "Les fils électriques sont en cuivre (conducteur) recouverts de plastique (isolant).",
    pieges: [
      { erreur: "Croire que toute l'eau est isolante.", pourquoi: "L'eau **pure** est isolante, mais l'eau **salée** est conductrice (d'où le danger de l'électricité près de l'eau)." },
    ],
    astuce: "Règle simple : **métaux = conducteurs**, plastique/bois/verre = isolants.",
    retenir: [
      "Conducteurs : laissent passer le courant (métaux).",
      "Isolants : bloquent le courant (plastique, bois, verre).",
      "Eau pure isolante, eau salée conductrice.",
    ],
    quiz: [
      { question: "Le cuivre est-il conducteur ou isolant ?", correction: "Conducteur (c'est un métal)." },
      { question: "L'eau salée conduit-elle le courant ?", correction: "Oui, contrairement à l'eau pure." },
    ],
  },
  {
    slug: "les-dangers-de-l-electricite",
    bloc: "electricite",
    numero: 23,
    titre: "Les dangers de l'électricité",
    intro: "Électrocution, brûlures, incendies : l'électricité exige des précautions.",
    definition: "L'électricité peut être **dangereuse pour le corps humain**.",
    explication: [
      "Le courant peut traverser le corps et provoquer de graves accidents.",
      "L'eau augmente fortement le risque.",
      "Des règles simples évitent les accidents.",
    ],
    points: [
      { titre: "Risques", points: ["Électrocution.", "Brûlures.", "Incendies."] },
      { titre: "Prévention", points: ["Ne pas toucher les prises.", "Ne pas utiliser d'appareil mouillé.", "Couper le courant avant d'intervenir."] },
    ],
    exemple: "Toucher une prise avec les mains mouillées est très dangereux (l'eau conduit le courant).",
    pieges: [
      { erreur: "Croire qu'une faible tension est toujours sans danger.", pourquoi: "Même une faible tension peut être dangereuse dans certaines conditions (peau mouillée, durée…)." },
    ],
    astuce: "Réflexe sécurité : **couper le courant** avant toute intervention, et jamais d'électricité près de l'eau.",
    retenir: [
      "Risques : électrocution, brûlures, incendies.",
      "L'eau aggrave le danger.",
      "Couper le courant avant d'intervenir.",
    ],
    quiz: [
      { question: "Cite un geste de prévention électrique.", correction: "Par exemple : couper le courant avant d'intervenir, ne pas utiliser d'appareil mouillé." },
      { question: "Une faible tension est-elle toujours sans danger ?", correction: "Non, elle peut être dangereuse selon les conditions." },
    ],
  },
  {
    slug: "loi-d-ohm",
    bloc: "electricite",
    numero: 24,
    titre: "La loi d'Ohm",
    intro: "La relation clé de l'électricité : elle lie tension, intensité et résistance.",
    definition: "La loi d'Ohm décrit la relation entre la **tension (U)**, l'**intensité (I)** et la **résistance (R)** dans un circuit.",
    explication: [
      "La tension est proportionnelle à l'intensité et à la résistance.",
      "Si la résistance augmente, l'intensité diminue (à tension fixe).",
    ],
    points: [
      { points: ["U : tension (volt, V).", "R : résistance (ohm, Ω).", "I : intensité (ampère, A)."] },
    ],
    formules: [{ label: "Loi d'Ohm", expr: "U = R × I" }],
    exemple: "Si la résistance augmente (à tension constante), l'intensité du courant diminue.",
    pieges: [
      { erreur: "Appliquer la loi d'Ohm partout.", pourquoi: "La loi d'Ohm s'applique aux **résistances** (circuits simples), pas à tous les composants." },
    ],
    astuce: "Le triangle **U / (R × I)** : cache la grandeur cherchée pour retrouver la formule.",
    retenir: [
      "U = R × I.",
      "U en volts, R en ohms, I en ampères.",
      "Plus R est grande, plus I est petite (à U fixe).",
    ],
    quiz: [
      { question: "Écris la loi d'Ohm.", correction: "U = R × I." },
      { question: "Que devient l'intensité si la résistance augmente (à tension fixe) ?", correction: "Elle diminue." },
    ],
  },

  // ============ BLOC 4 — MOUVEMENT, FORCES ET LUMIÈRE ============
  {
    slug: "le-mouvement",
    bloc: "mouvement",
    numero: 25,
    titre: "Le mouvement",
    intro: "Être en mouvement ou immobile… tout dépend du point de vue choisi (le référentiel).",
    definition: "Un objet est en mouvement lorsqu'il **change de position au cours du temps** par rapport à un **référentiel**.",
    explication: [
      "Le référentiel est le point de référence choisi.",
      "Un même objet peut être immobile pour l'un et en mouvement pour l'autre.",
    ],
    points: [
      { points: ["Référentiel = point de référence.", "Souvent : le sol, la Terre, une voiture."] },
    ],
    exemple: "Un passager assis dans un train est immobile dans le train mais en mouvement par rapport au sol.",
    pieges: [
      { erreur: "Parler de mouvement sans préciser le référentiel.", pourquoi: "Le mouvement dépend **toujours** du référentiel choisi." },
    ],
    astuce: "Avant de dire « ça bouge », demande-toi **« par rapport à quoi ? »** (le référentiel).",
    retenir: [
      "Mouvement = changement de position dans le temps.",
      "Toujours par rapport à un référentiel.",
      "Immobile ou en mouvement selon le point de vue.",
    ],
    quiz: [
      { question: "De quoi dépend le mouvement d'un objet ?", correction: "Du référentiel choisi." },
      { question: "Un passager d'un train est-il immobile ?", correction: "Oui par rapport au train, mais en mouvement par rapport au sol." },
    ],
  },
  {
    slug: "la-vitesse",
    bloc: "mouvement",
    numero: 26,
    titre: "La vitesse",
    intro: "Quelle distance parcourue en combien de temps ? C'est toute la question de la vitesse.",
    definition: "La vitesse mesure la **distance parcourue par unité de temps**.",
    explication: [
      "Elle se calcule en divisant la distance par le temps.",
      "Attention aux unités (m/s ou km/h).",
    ],
    points: [
      { points: ["v : vitesse (m/s ou km/h).", "d : distance.", "t : temps."] },
    ],
    formules: [{ label: "Vitesse", expr: "v = d / t" }],
    exemple: "Une voiture qui parcourt 100 km en 2 h roule à 50 km/h.",
    pieges: [
      { erreur: "Mélanger m/s et km/h.", pourquoi: "Les unités doivent être cohérentes : convertis avant de calculer (m/s ≠ km/h)." },
    ],
    astuce: "Le triangle **d / (v × t)** donne les 3 formules : v = d/t, d = v×t, t = d/v.",
    retenir: [
      "v = d / t.",
      "Unités : m/s ou km/h.",
      "Convertir les unités avant de calculer.",
    ],
    quiz: [
      { question: "Formule de la vitesse ?", correction: "v = d / t." },
      { question: "100 km en 2 h, quelle vitesse ?", correction: "50 km/h." },
    ],
  },
  {
    slug: "les-forces",
    bloc: "mouvement",
    numero: 27,
    titre: "Les forces",
    intro: "Pousser, tirer, freiner, déformer : une force agit toujours sur un objet.",
    definition: "Une force est une **action capable de modifier le mouvement ou la forme** d'un objet.",
    explication: [
      "Une force peut mettre en mouvement, arrêter ou dévier un objet.",
      "Elle peut aussi le déformer.",
      "Une force peut exister sans mouvement visible.",
    ],
    points: [
      { titre: "Effets possibles", points: ["Mise en mouvement.", "Arrêt.", "Changement de direction.", "Déformation."] },
    ],
    exemple: "Pousser une porte exerce une force qui la fait bouger.",
    pieges: [
      { erreur: "Croire qu'une force implique toujours un mouvement.", pourquoi: "Une force peut exister **sans mouvement visible** (ex : appuyer sur un mur)." },
    ],
    astuce: "Une force = une **action** sur un objet. Elle change soit son mouvement, soit sa forme.",
    retenir: [
      "Force = action sur un objet.",
      "Effets : mouvement, arrêt, direction, déformation.",
      "Peut exister sans mouvement visible.",
    ],
    quiz: [
      { question: "Cite deux effets possibles d'une force.", correction: "Par exemple : mettre en mouvement, arrêter, dévier, déformer." },
      { question: "Une force provoque-t-elle toujours un mouvement ?", correction: "Non, elle peut exister sans mouvement visible." },
    ],
  },
  {
    slug: "poids-et-masse",
    bloc: "mouvement",
    numero: 28,
    titre: "Le poids et la masse",
    intro: "La confusion la plus fréquente du CRPE : la masse est une quantité de matière, le poids une force.",
    definition: "La **masse** est une quantité de matière (en kg) ; le **poids** est la **force** exercée par la gravité (en newtons).",
    explication: [
      "La masse ne change pas selon le lieu.",
      "Le poids dépend de la planète (de la pesanteur g).",
      "Sur la Lune, même masse mais poids plus faible.",
    ],
    points: [
      { points: ["Masse : en **kg** (constante).", "Poids : en **newton (N)**.", "g : intensité de la pesanteur."] },
    ],
    formules: [{ label: "Poids", expr: "P = m × g" }],
    exemple: "Sur la Lune, ta masse est identique à celle sur Terre, mais ton poids y est environ 6 fois plus faible.",
    pieges: [
      { erreur: "Confondre masse et poids.", pourquoi: "La masse (kg) est une quantité de matière ; le poids (N) est une force qui dépend de la gravité. C'est le piège nº 1 du CRPE." },
    ],
    astuce: "**Masse = kg** (partout pareille) ; **Poids = N** (dépend de la planète). P = m × g.",
    retenir: [
      "Masse en kg, poids en newtons.",
      "P = m × g.",
      "La masse est constante, le poids dépend de la planète.",
    ],
    quiz: [
      { question: "Quelle est l'unité du poids ?", correction: "Le newton (N)." },
      { question: "Sur la Lune, la masse change-t-elle ?", correction: "Non, seule le poids diminue." },
    ],
  },
  {
    slug: "la-gravitation",
    bloc: "mouvement",
    numero: 29,
    titre: "La gravitation",
    intro: "La force invisible qui fait tomber les pommes et tourner les planètes.",
    definition: "La gravitation est une **force d'attraction** entre deux objets ayant une **masse**.",
    explication: [
      "Tous les objets massifs s'attirent.",
      "La Terre attire les objets vers le sol : c'est le poids.",
      "Elle maintient les planètes autour du Soleil.",
    ],
    points: [
      { points: ["La Terre attire les objets vers le sol.", "Les planètes tournent autour du Soleil.", "Tous les objets massifs s'attirent."] },
    ],
    exemple: "Une pomme tombe car elle est attirée par la Terre.",
    pieges: [
      { erreur: "Croire que seule la Terre attire.", pourquoi: "**Tous** les objets ayant une masse s'attirent entre eux (mais l'effet n'est visible que pour les très gros objets)." },
    ],
    astuce: "La gravitation **explique le poids** : c'est l'attraction de la Terre sur les objets.",
    retenir: [
      "Gravitation = attraction entre objets massifs.",
      "Explique le poids et le mouvement des planètes.",
      "Tous les objets massifs s'attirent.",
    ],
    quiz: [
      { question: "Pourquoi une pomme tombe-t-elle ?", correction: "Elle est attirée par la Terre (gravitation)." },
      { question: "Seule la Terre attire-t-elle les objets ?", correction: "Non, tous les objets massifs s'attirent." },
    ],
  },
  {
    slug: "la-lumiere",
    bloc: "mouvement",
    numero: 30,
    titre: "La lumière",
    intro: "Une énergie qui voyage en ligne droite — et ne contourne pas les obstacles.",
    definition: "La lumière est une **forme d'énergie** qui se propage **en ligne droite** dans un milieu transparent.",
    explication: [
      "Elle va très vite.",
      "Elle traverse les milieux transparents, pas les milieux opaques.",
      "Elle se déplace en ligne droite.",
    ],
    points: [
      { points: ["Propagation **rectiligne**.", "Vitesse très élevée.", "Bloquée par les milieux opaques."] },
    ],
    exemple: "Le Soleil éclaire la Terre grâce à la lumière qui voyage en ligne droite.",
    pieges: [
      { erreur: "Croire que la lumière contourne les obstacles.", pourquoi: "La lumière se propage en **ligne droite** : elle ne contourne pas les obstacles (d'où les ombres)." },
    ],
    astuce: "Lumière = **ligne droite**. C'est ce qui explique la formation des ombres.",
    retenir: [
      "Lumière = énergie qui se propage en ligne droite.",
      "Vitesse très élevée.",
      "Ne contourne pas les obstacles.",
    ],
    quiz: [
      { question: "Comment se propage la lumière ?", correction: "En ligne droite (propagation rectiligne)." },
      { question: "La lumière contourne-t-elle les obstacles ?", correction: "Non." },
    ],
  },
  {
    slug: "les-ombres",
    bloc: "mouvement",
    numero: 31,
    titre: "Les ombres",
    intro: "Une ombre apparaît dès qu'un objet bloque la lumière qui voyage en ligne droite.",
    schema: "ombre",
    definition: "Une ombre se forme lorsqu'un objet **empêche la lumière de passer**.",
    explication: [
      "Comme la lumière va tout droit, l'objet laisse une zone sombre derrière lui.",
      "On distingue l'ombre propre (sur l'objet) et l'ombre portée (sur un écran).",
      "La taille de l'ombre dépend de la position de la source.",
    ],
    points: [
      { titre: "Deux types d'ombre", points: ["**Ombre propre** : sur l'objet lui-même.", "**Ombre portée** : projetée sur un écran/le sol."] },
    ],
    exemple: "Une personne au soleil projette une ombre portée sur le sol.",
    pieges: [
      { erreur: "Penser que la taille de l'ombre est fixe.", pourquoi: "Plus la source lumineuse est **proche**, plus l'ombre est **grande**." },
    ],
    astuce: "Source proche = **grande** ombre ; source éloignée = ombre plus petite et nette.",
    retenir: [
      "Ombre = lumière bloquée par un objet.",
      "Ombre propre (sur l'objet) / ombre portée (sur écran).",
      "La taille dépend de la position de la source.",
    ],
    quiz: [
      { question: "Comment se forme une ombre ?", correction: "Quand un objet empêche la lumière (rectiligne) de passer." },
      { question: "Que devient l'ombre si la source se rapproche ?", correction: "Elle devient plus grande." },
    ],
  },
  {
    slug: "les-lentilles",
    bloc: "mouvement",
    numero: 32,
    titre: "Les lentilles",
    intro: "Transparentes, elles dévient la lumière — c'est le principe des lunettes.",
    schema: "lentille-convergente",
    definition: "Une lentille est un objet **transparent** qui **dévie la lumière**.",
    explication: [
      "Une lentille convergente rassemble les rayons.",
      "Une lentille divergente les écarte.",
      "Elle ne crée pas de lumière, elle la dévie.",
    ],
    points: [
      { titre: "Deux types", points: ["**Convergente** : rassemble les rayons (en un foyer).", "**Divergente** : écarte les rayons."] },
    ],
    exemple: "Les lunettes corrigent la vision grâce à des lentilles qui dévient la lumière.",
    pieges: [
      { erreur: "Croire qu'une lentille produit de la lumière.", pourquoi: "Une lentille ne **crée pas** de lumière : elle **dévie** la trajectoire des rayons." },
    ],
    astuce: "**Con**vergente = **con**centre les rayons ; **di**vergente = les **di**sperse.",
    retenir: [
      "Lentille = objet transparent qui dévie la lumière.",
      "Convergente (rassemble) / divergente (écarte).",
      "Ne crée pas de lumière.",
    ],
    quiz: [
      { question: "Que fait une lentille convergente ?", correction: "Elle rassemble les rayons lumineux." },
      { question: "Une lentille crée-t-elle de la lumière ?", correction: "Non, elle la dévie seulement." },
    ],
  },
  {
    slug: "les-couleurs",
    bloc: "mouvement",
    numero: 33,
    titre: "Les couleurs",
    intro: "La couleur d'un objet n'est pas « la sienne » : elle dépend de la lumière qu'il renvoie.",
    definition: "Les couleurs perçues dépendent de la **lumière réfléchie** par les objets.",
    explication: [
      "Un objet renvoie certaines couleurs et absorbe les autres.",
      "La couleur perçue est celle qui est renvoyée à l'œil.",
      "Sans lumière, pas de couleur.",
    ],
    points: [
      { points: [
        "Objet **blanc** : réfléchit toutes les couleurs.",
        "Objet **noir** : absorbe toutes les couleurs.",
        "Objet coloré : absorbe certaines couleurs, renvoie les autres.",
      ] },
    ],
    exemple: "Une pomme rouge absorbe toutes les couleurs de la lumière **sauf le rouge**, qu'elle renvoie.",
    pieges: [
      { erreur: "Croire qu'un objet a « sa propre couleur ».", pourquoi: "La couleur dépend de la **lumière** reçue et réfléchie : un objet n'a pas de couleur « en soi »." },
    ],
    astuce: "L'objet renvoie **sa** couleur et absorbe les autres. Sans lumière, aucune couleur n'est visible.",
    retenir: [
      "Couleur = lumière réfléchie par l'objet.",
      "Blanc réfléchit tout, noir absorbe tout.",
      "La couleur dépend de la lumière.",
    ],
    quiz: [
      { question: "Pourquoi une pomme paraît-elle rouge ?", correction: "Elle réfléchit le rouge et absorbe les autres couleurs." },
      { question: "Un objet a-t-il une couleur sans lumière ?", correction: "Non, la couleur dépend de la lumière reçue." },
    ],
  },
];
