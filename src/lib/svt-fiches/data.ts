/**
 * Fiches de SVT (25 fiches, CRPE)
 */
import type { SvtFiche } from "./types";

export const SVT_FICHES: SvtFiche[] = [
  // ==================== THÈME 1 — LE VIVANT ====================
  {
    slug: "caracteristiques-du-vivant",
    theme: "vivant",
    numero: 1,
    titre: "Les caractéristiques du vivant",
    intro:
      "Qu'est-ce qui distingue un être vivant d'un objet ? Quelques critères simples permettent de trancher à coup sûr.",
    definition:
      "Le vivant regroupe tous les êtres capables de **naître, grandir, se reproduire et mourir**.",
    explication: [
      "Un être vivant réalise plusieurs fonctions : il se nourrit, respire, grandit et se reproduit.",
      "Bouger ne suffit pas : une voiture bouge sans être vivante.",
      "Tout être vivant est fait d'au moins une **cellule**.",
    ],
    points: [
      {
        points: [
          "Constitué de **cellules**.",
          "Se nourrit et respire.",
          "Grandit (croissance).",
          "Se reproduit.",
          "Réagit à son environnement.",
        ],
      },
    ],
    exemple:
      "Une plante pousse, produit des fleurs puis des graines : elle naît, grandit et se reproduit — elle est vivante.",
    pieges: [
      {
        erreur: "Croire qu'un objet qui bouge est vivant.",
        pourquoi: "Une voiture bouge mais ne se nourrit pas et ne se reproduit pas : elle n'est pas vivante.",
      },
    ],
    astuce:
      "Retiens les fonctions du vivant avec **« Naître, se Nourrir, Respirer, Grandir, se Reproduire, Mourir »**. Si un critère manque totalement, ce n'est pas un être vivant.",
    retenir: [
      "Le vivant : naît, grandit, se reproduit, meurt.",
      "Il se nourrit, respire et réagit.",
      "Tout être vivant est constitué d'au moins **une cellule**.",
    ],
    quiz: [
      { question: "Une voiture est-elle vivante ? Pourquoi ?", correction: "Non : elle bouge mais ne se nourrit pas et ne se reproduit pas." },
      { question: "Quel est le point commun à tous les êtres vivants ?", correction: "Ils sont tous constitués d'au moins une cellule." },
    ],
  },
  {
    slug: "la-cellule",
    theme: "vivant",
    numero: 2,
    titre: "La cellule",
    intro:
      "C'est la brique de base de tout ce qui vit : la comprendre, c'est comprendre l'organisation du vivant.",
    schema: "cellule",
    definition: "La cellule est la **plus petite unité du vivant**.",
    explication: [
      "Tous les êtres vivants sont faits de cellules : une seule (bactérie) ou des milliards (humain).",
      "La cellule est délimitée par une membrane et contient un liquide, le cytoplasme.",
      "Les cellules **eucaryotes** possèdent un noyau qui renferme l'ADN.",
    ],
    points: [
      {
        titre: "Éléments communs",
        points: ["**Membrane** cellulaire.", "**Cytoplasme**.", "**Noyau** (cellules eucaryotes)."],
      },
      {
        titre: "En plus chez les végétaux",
        points: ["Une **paroi** rigide.", "Des **chloroplastes** (photosynthèse)."],
      },
    ],
    exemple: "Le corps humain est composé de milliards de cellules spécialisées (musculaires, nerveuses…).",
    pieges: [
      {
        erreur: "Penser qu'un être vivant est forcément fait de nombreuses cellules.",
        pourquoi: "Les bactéries sont **unicellulaires** : une seule cellule suffit à vivre.",
      },
    ],
    astuce:
      "Cellule **animale** : membrane + cytoplasme + noyau. Cellule **végétale** : les mêmes + paroi + chloroplastes. « Le végétal a un mur (paroi) et des panneaux solaires (chloroplastes) ».",
    retenir: [
      "La cellule = **unité de base** du vivant.",
      "Membrane, cytoplasme, noyau (eucaryotes).",
      "Végétaux : en plus, paroi et chloroplastes.",
    ],
    quiz: [
      { question: "Quels éléments possède une cellule végétale en plus d'une cellule animale ?", correction: "Une paroi et des chloroplastes." },
      { question: "Combien de cellules compose une bactérie ?", correction: "Une seule : elle est unicellulaire." },
    ],
  },
  {
    slug: "niveaux-d-organisation",
    theme: "vivant",
    numero: 3,
    titre: "Les niveaux d'organisation du vivant",
    intro:
      "Des cellules à l'organisme entier : le vivant s'emboîte comme des poupées russes.",
    schema: "niveaux-organisation",
    definition: "Les cellules s'organisent progressivement pour former un **organisme** complet.",
    explication: [
      "Des cellules identiques forment un tissu ; plusieurs tissus forment un organe.",
      "Les organes s'assemblent en appareils, qui constituent l'organisme.",
      "Chaque niveau **dépend du précédent**.",
    ],
    points: [
      {
        points: ["**Cellule** → **Tissu** → **Organe** → **Appareil** → **Organisme**."],
      },
    ],
    exemple: "Cellule musculaire → muscle → appareil locomoteur → être humain.",
    pieges: [
      {
        erreur: "Confondre organe et appareil.",
        pourquoi: "Un organe (le cœur) fait partie d'un appareil (l'appareil circulatoire) qui regroupe plusieurs organes.",
      },
    ],
    astuce:
      "Mémorise l'ordre croissant : **Ce Tissu Organise Alors l'Organisme** (Cellule, Tissu, Organe, Appareil, Organisme).",
    retenir: [
      "Cellule → Tissu → Organe → Appareil → Organisme.",
      "Du plus petit au plus grand.",
      "Chaque niveau dépend du précédent.",
    ],
    quiz: [
      { question: "Range dans l'ordre : organe, cellule, organisme, tissu, appareil.", correction: "Cellule → Tissu → Organe → Appareil → Organisme." },
      { question: "Le cœur est-il un organe ou un appareil ?", correction: "Un organe, qui appartient à l'appareil circulatoire." },
    ],
  },
  {
    slug: "la-biodiversite",
    theme: "vivant",
    numero: 4,
    titre: "La biodiversité",
    intro:
      "La richesse du vivant se mesure à trois niveaux — et elle est aujourd'hui menacée.",
    definition:
      "La biodiversité désigne la **diversité des êtres vivants**, des écosystèmes et des patrimoines génétiques.",
    explication: [
      "Elle se décline en trois niveaux emboîtés (espèces, gènes, écosystèmes).",
      "Elle est indispensable à l'équilibre des milieux et à l'humain (alimentation, médecine).",
      "Elle est menacée par les activités humaines.",
    ],
    points: [
      {
        titre: "Les trois niveaux",
        points: ["Diversité des **espèces**.", "Diversité **génétique**.", "Diversité des **écosystèmes**."],
      },
      {
        titre: "Son importance",
        points: ["Équilibre des milieux.", "Alimentation et médecine.", "Ressources naturelles."],
      },
      {
        titre: "Les menaces",
        points: ["Pollution.", "Déforestation.", "Réchauffement climatique.", "Disparition d'espèces."],
      },
    ],
    exemple: "Une forêt tropicale abrite des milliers d'espèces différentes : c'est un point chaud de biodiversité.",
    pieges: [
      {
        erreur: "Réduire la biodiversité au simple nombre d'espèces.",
        pourquoi: "Elle comprend aussi la diversité génétique (au sein d'une espèce) et celle des écosystèmes.",
      },
    ],
    astuce:
      "Pense **« 3 É »** : diversité des **E**spèces, des gènes (patrimoine génétique) et des **É**cosystèmes.",
    retenir: [
      "Biodiversité = diversité du vivant à 3 niveaux.",
      "Espèces, gènes, écosystèmes.",
      "Indispensable mais menacée par l'humain.",
    ],
    quiz: [
      { question: "Cite les trois niveaux de biodiversité.", correction: "Diversité des espèces, diversité génétique, diversité des écosystèmes." },
      { question: "Cite deux menaces sur la biodiversité.", correction: "Par exemple : pollution, déforestation, réchauffement climatique." },
    ],
  },
  {
    slug: "les-ecosystemes",
    theme: "vivant",
    numero: 5,
    titre: "Les écosystèmes",
    intro:
      "Un milieu + les êtres qui y vivent + leurs relations : voilà un écosystème.",
    definition:
      "Un écosystème est constitué d'un **milieu de vie** et de l'**ensemble des êtres vivants** qui y vivent et interagissent.",
    explication: [
      "Le milieu apporte les conditions (eau, sol, climat).",
      "Les êtres vivants (faune, flore, micro-organismes) y sont interdépendants.",
      "Un changement dans un élément affecte tout l'écosystème.",
    ],
    points: [
      {
        titre: "Composition",
        points: ["Le **milieu** (eau, sol, climat…).", "La **faune** (animaux).", "La **flore** (végétaux).", "Les **micro-organismes**."],
      },
    ],
    exemple: "Une forêt, une mare ou une prairie constituent chacune un écosystème.",
    pieges: [
      {
        erreur: "Oublier le milieu physique dans la définition.",
        pourquoi: "Un écosystème n'est pas seulement les êtres vivants : il inclut leur milieu (eau, sol, climat).",
      },
    ],
    astuce:
      "Écosystème = **biotope** (le milieu) + **biocénose** (les êtres vivants). En clair : « le décor + les acteurs ».",
    retenir: [
      "Écosystème = milieu + êtres vivants.",
      "Faune, flore, micro-organismes.",
      "Tous les êtres y sont **interdépendants**.",
    ],
    quiz: [
      { question: "De quoi est composé un écosystème ?", correction: "D'un milieu de vie et des êtres vivants (faune, flore, micro-organismes) qui y vivent." },
      { question: "Une forêt est-elle un écosystème ?", correction: "Oui : elle associe un milieu et des êtres vivants interdépendants." },
    ],
  },
  {
    slug: "les-chaines-alimentaires",
    theme: "vivant",
    numero: 6,
    titre: "Les chaînes alimentaires",
    intro:
      "Qui mange qui ? La chaîne alimentaire montre comment la matière et l'énergie passent d'un être vivant à l'autre.",
    schema: "chaine-alimentaire",
    definition:
      "Une chaîne alimentaire représente le **transfert de matière et d'énergie** entre les êtres vivants (qui mange qui).",
    explication: [
      "Elle commence toujours par un **producteur** (un végétal).",
      "Les flèches signifient « **est mangé par** ».",
      "L'énergie circule du producteur vers les consommateurs, puis les décomposeurs.",
    ],
    points: [
      {
        points: [
          "**Producteur** (végétal) → **Consommateur primaire** → **Consommateur secondaire** → **Décomposeurs**.",
          "La flèche → se lit « est mangé par ».",
        ],
      },
    ],
    exemple: "Herbe → Lapin → Renard → Champignons (décomposeurs).",
    pieges: [
      {
        erreur: "Placer un animal au début de la chaîne.",
        pourquoi: "Les **végétaux** sont toujours les producteurs : ils démarrent la chaîne.",
      },
    ],
    astuce:
      "La flèche pointe vers **celui qui mange**. Le premier maillon est **toujours** un végétal (le seul à fabriquer sa matière).",
    retenir: [
      "Producteur → Consommateurs → Décomposeurs.",
      "Le végétal est toujours le producteur.",
      "L'énergie circule du producteur vers les consommateurs.",
    ],
    quiz: [
      { question: "Que signifie la flèche dans une chaîne alimentaire ?", correction: "« Est mangé par »." },
      { question: "Par quel type d'être vivant commence toujours une chaîne alimentaire ?", correction: "Par un producteur (un végétal)." },
    ],
  },
  {
    slug: "les-reseaux-alimentaires",
    theme: "vivant",
    numero: 7,
    titre: "Les réseaux alimentaires",
    intro:
      "Dans la nature, tout est relié : plusieurs chaînes s'entrecroisent pour former un réseau.",
    definition:
      "Plusieurs chaînes alimentaires reliées entre elles forment un **réseau alimentaire**.",
    explication: [
      "Une même espèce peut avoir plusieurs proies et plusieurs prédateurs.",
      "Le réseau montre les relations réelles, plus complexes qu'une chaîne isolée.",
      "Si une espèce disparaît, tout le réseau est perturbé.",
    ],
    points: [
      {
        points: [
          "Un réseau = **plusieurs chaînes** interconnectées.",
          "Une espèce peut avoir **plusieurs proies** ou **plusieurs prédateurs**.",
        ],
      },
    ],
    exemple:
      "Le renard mange le lapin ET la souris ; le lapin est aussi mangé par le rapace : les chaînes se croisent.",
    pieges: [
      {
        erreur: "Croire qu'un animal n'a qu'une seule proie.",
        pourquoi: "Dans un réseau, un prédateur a souvent plusieurs proies possibles.",
      },
    ],
    astuce:
      "Chaîne = une ligne. Réseau = une **toile**. Dans la nature, les chaînes isolées sont rares.",
    retenir: [
      "Réseau = plusieurs chaînes reliées.",
      "Une espèce a souvent plusieurs proies/prédateurs.",
      "La disparition d'une espèce perturbe tout le réseau.",
    ],
    quiz: [
      { question: "Quelle est la différence entre chaîne et réseau alimentaire ?", correction: "La chaîne est une seule suite ; le réseau relie plusieurs chaînes entre elles." },
      { question: "Un prédateur n'a-t-il qu'une seule proie possible ?", correction: "Non : dans un réseau, il peut en avoir plusieurs." },
    ],
  },
  {
    slug: "la-photosynthese",
    theme: "vivant",
    numero: 8,
    titre: "La photosynthèse",
    intro:
      "Comment les plantes fabriquent-elles leur nourriture… et l'oxygène que nous respirons ? Grâce à la lumière.",
    schema: "photosynthese",
    definition:
      "La photosynthèse est le processus par lequel les végétaux **fabriquent leur matière organique** (glucose) grâce à la **lumière**.",
    explication: [
      "Elle se déroule dans les **chloroplastes** des feuilles.",
      "Les plantes captent lumière, eau et CO₂ pour produire glucose et O₂.",
      "C'est la source de l'oxygène de l'atmosphère.",
    ],
    points: [
      {
        titre: "Éléments nécessaires",
        points: ["**Lumière**.", "**Eau**.", "**Dioxyde de carbone (CO₂)**."],
      },
      {
        titre: "Produits obtenus",
        points: ["**Glucose** (matière organique).", "**Dioxygène (O₂)**."],
      },
    ],
    exemple: "Les feuilles vertes réalisent la photosynthèse grâce à la chlorophylle des chloroplastes.",
    pieges: [
      {
        erreur: "Penser que la photosynthèse a lieu en permanence.",
        pourquoi: "Elle n'a lieu **qu'en présence de lumière** : pas de photosynthèse la nuit.",
      },
    ],
    astuce:
      "Entrées = **L E C** (Lumière, Eau, CO₂) ; sorties = **glucose + O₂**. « La plante mange du CO₂ et rejette de l'oxygène », l'inverse de nous.",
    retenir: [
      "Photosynthèse = fabrication de glucose avec la lumière.",
      "Nécessite lumière + eau + CO₂.",
      "Produit glucose + **O₂**.",
      "Uniquement en présence de lumière.",
    ],
    quiz: [
      { question: "De quoi la plante a-t-elle besoin pour la photosynthèse ?", correction: "De lumière, d'eau et de dioxyde de carbone (CO₂)." },
      { question: "Que produit la photosynthèse ?", correction: "Du glucose et du dioxygène (O₂)." },
    ],
  },
  {
    slug: "la-respiration-cellulaire",
    theme: "vivant",
    numero: 9,
    titre: "La respiration cellulaire",
    intro:
      "Toutes les cellules ont besoin d'énergie : elles la produisent en « brûlant » du glucose avec de l'oxygène.",
    schema: "respiration-cellulaire",
    definition:
      "La respiration cellulaire permet aux cellules de **produire l'énergie** nécessaire à leur fonctionnement.",
    explication: [
      "Elle utilise du glucose et du dioxygène.",
      "Elle libère de l'énergie, de l'eau et du CO₂.",
      "Elle a lieu dans **toutes** les cellules vivantes.",
    ],
    points: [
      {
        points: ["Réaction : **glucose + dioxygène → énergie + eau + dioxyde de carbone**."],
      },
    ],
    exemple: "Pendant un effort, les muscles consomment plus de glucose et d'O₂ pour produire de l'énergie.",
    pieges: [
      {
        erreur: "Confondre respiration cellulaire et respiration des poumons.",
        pourquoi: "Les **poumons apportent** le dioxygène ; les **cellules l'utilisent** pour produire de l'énergie.",
      },
    ],
    astuce:
      "La respiration cellulaire est **l'inverse** de la photosynthèse : ici on consomme O₂ et glucose, on rejette CO₂.",
    retenir: [
      "Respiration cellulaire = production d'énergie.",
      "Glucose + O₂ → énergie + eau + CO₂.",
      "Se déroule dans toutes les cellules.",
      "≠ respiration pulmonaire (qui apporte l'O₂).",
    ],
    quiz: [
      { question: "Quels sont les réactifs de la respiration cellulaire ?", correction: "Le glucose et le dioxygène." },
      { question: "Quelle est la différence avec la respiration des poumons ?", correction: "Les poumons apportent l'O₂ ; les cellules l'utilisent pour fabriquer de l'énergie." },
    ],
  },

  // ==================== THÈME 2 — LE CORPS HUMAIN ====================
  {
    slug: "les-appareils-du-corps-humain",
    theme: "corps",
    numero: 10,
    titre: "Les appareils du corps humain",
    intro:
      "Le corps est une équipe : chaque appareil a un rôle précis, mais aucun ne travaille seul.",
    definition:
      "Le corps humain est constitué de plusieurs **appareils** qui travaillent ensemble pour assurer le fonctionnement de l'organisme.",
    explication: [
      "Chaque appareil regroupe des organes qui remplissent une même fonction.",
      "Les appareils sont **interdépendants** : ils coopèrent en permanence.",
    ],
    points: [
      {
        points: [
          "🫁 **Respiratoire** : apporte l'O₂, élimine le CO₂.",
          "❤️ **Circulatoire** : transporte le sang.",
          "🍽️ **Digestif** : transforme les aliments en nutriments.",
          "🦴 **Locomoteur** : permet les mouvements.",
          "🚽 **Urinaire** : élimine les déchets.",
          "👶 **Reproducteur** : permet la reproduction.",
        ],
      },
    ],
    exemple:
      "Lors d'une course : les poumons apportent plus d'oxygène, le cœur bat plus vite, les muscles utilisent plus d'énergie.",
    pieges: [
      {
        erreur: "Étudier un appareil comme s'il fonctionnait seul.",
        pourquoi: "Les appareils sont interdépendants : le circulatoire distribue l'O₂ apporté par le respiratoire.",
      },
    ],
    astuce:
      "Associe chaque appareil à **un verbe** : respirer, faire circuler, digérer, bouger, éliminer, reproduire.",
    retenir: [
      "Le corps = plusieurs appareils spécialisés.",
      "Chaque appareil a une fonction précise.",
      "Tous **collaborent** (interdépendance).",
    ],
    quiz: [
      { question: "Quel appareil transforme les aliments en nutriments ?", correction: "L'appareil digestif." },
      { question: "Les appareils fonctionnent-ils indépendamment ?", correction: "Non : ils sont interdépendants et coopèrent." },
    ],
  },
  {
    slug: "la-digestion",
    theme: "corps",
    numero: 11,
    titre: "La digestion",
    intro:
      "Comment un morceau de pain devient-il de l'énergie utilisable ? En suivant un long trajet de transformation.",
    schema: "digestion",
    definition:
      "La digestion transforme les **aliments en nutriments** utilisables par l'organisme.",
    explication: [
      "Les aliments suivent un trajet dans le tube digestif.",
      "Ils sont broyés (mécanique) puis transformés (chimique).",
      "Les nutriments passent dans le sang au niveau de l'intestin grêle.",
    ],
    points: [
      {
        titre: "Le trajet",
        points: ["Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin → Rectum → Anus."],
      },
      {
        titre: "Les étapes clés",
        points: [
          "**Bouche** : mastication + salive.",
          "**Estomac** : brassage + digestion chimique.",
          "**Intestin grêle** : **absorption** des nutriments.",
          "**Gros intestin** : récupération de l'eau.",
        ],
      },
    ],
    exemple: "Un morceau de pain est progressivement transformé en glucose, absorbé par l'intestin grêle.",
    pieges: [
      {
        erreur: "Croire que l'absorption se fait dans l'estomac.",
        pourquoi: "Les nutriments passent dans le sang **au niveau de l'intestin grêle**, pas de l'estomac.",
      },
    ],
    astuce:
      "Le lieu clé à retenir : l'**intestin grêle**, c'est là que les nutriments passent dans le sang.",
    retenir: [
      "Digestion = aliments → nutriments.",
      "Trajet : bouche → … → anus.",
      "Absorption dans l'**intestin grêle**.",
      "Fournit l'énergie au corps.",
    ],
    quiz: [
      { question: "Où les nutriments passent-ils dans le sang ?", correction: "Dans l'intestin grêle." },
      { question: "Que se passe-t-il dans la bouche ?", correction: "La mastication et l'action de la salive commencent la digestion." },
    ],
  },
  {
    slug: "la-respiration",
    theme: "corps",
    numero: 12,
    titre: "La respiration",
    intro:
      "Respirer, c'est apporter l'oxygène vital aux cellules et évacuer le CO₂. Attention à ne pas confondre les mots.",
    definition:
      "La respiration permet d'apporter le **dioxygène (O₂)** indispensable aux cellules et d'**éliminer le dioxyde de carbone (CO₂)**.",
    explication: [
      "L'air circule par le nez, la trachée, les bronches jusqu'aux poumons.",
      "L'inspiration fait entrer l'air, l'expiration le fait sortir.",
      "La ventilation (mouvements d'air) est différente de la respiration cellulaire.",
    ],
    points: [
      {
        titre: "Les organes",
        points: ["Nez.", "Trachée.", "Bronches.", "Poumons."],
      },
      {
        titre: "Les mouvements respiratoires",
        points: ["**Inspiration** → entrée d'air.", "**Expiration** → sortie d'air."],
      },
    ],
    exemple: "Lors d'un effort, la fréquence respiratoire augmente pour apporter plus d'O₂.",
    pieges: [
      {
        erreur: "Confondre ventilation et respiration cellulaire.",
        pourquoi: "La **ventilation** = mouvements de l'air ; la **respiration cellulaire** = utilisation de l'O₂ dans les cellules.",
      },
    ],
    astuce:
      "Distingue trois mots : **ventilation** (l'air entre/sort), **échanges gazeux** (dans les alvéoles), **respiration cellulaire** (dans les cellules).",
    retenir: [
      "Respiration = apport d'O₂, rejet de CO₂.",
      "Organes : nez, trachée, bronches, poumons.",
      "Inspiration / expiration.",
      "Le dioxygène est indispensable à l'énergie.",
    ],
    quiz: [
      { question: "Quels sont les deux mouvements respiratoires ?", correction: "L'inspiration (entrée d'air) et l'expiration (sortie d'air)." },
      { question: "Ventilation et respiration cellulaire, est-ce pareil ?", correction: "Non : la ventilation déplace l'air, la respiration cellulaire utilise l'O₂ dans les cellules." },
    ],
  },
  {
    slug: "la-circulation-sanguine",
    theme: "corps",
    numero: 13,
    titre: "La circulation sanguine",
    intro:
      "Le sang est un livreur : il apporte l'oxygène et les nutriments partout, et récupère les déchets.",
    schema: "circulation-double",
    definition:
      "Le sang transporte les **gaz respiratoires, les nutriments et les déchets** dans tout l'organisme.",
    explication: [
      "Le cœur est la pompe qui met le sang en mouvement.",
      "Le sang circule dans les artères, les veines et les capillaires.",
      "Il existe **deux circulations** : vers les poumons et vers les organes.",
    ],
    points: [
      {
        titre: "Les éléments",
        points: ["**Cœur** (pompe).", "**Artères**.", "**Veines**.", "**Capillaires**."],
      },
      {
        titre: "Les deux circulations",
        points: [
          "**Petite circulation** : cœur → poumons → cœur.",
          "**Grande circulation** : cœur → organes → cœur.",
        ],
      },
    ],
    exemple: "Pendant un effort, le sang apporte davantage de dioxygène aux muscles.",
    pieges: [
      {
        erreur: "Croire que les artères transportent toujours du sang riche en O₂.",
        pourquoi: "L'**artère pulmonaire** transporte du sang **pauvre** en O₂ vers les poumons.",
      },
    ],
    astuce:
      "Retiens la fonction, pas la couleur : une **artère** part du cœur, une **veine** y revient — peu importe la richesse en O₂.",
    retenir: [
      "Le sang transporte gaz, nutriments et déchets.",
      "Cœur = pompe ; artères, veines, capillaires.",
      "Petite circulation (poumons) + grande (organes).",
      "Artère = part du cœur (pas toujours riche en O₂).",
    ],
    quiz: [
      { question: "Quelles sont les deux circulations ?", correction: "La petite (cœur-poumons-cœur) et la grande (cœur-organes-cœur)." },
      { question: "Une artère transporte-t-elle toujours du sang riche en O₂ ?", correction: "Non : l'artère pulmonaire transporte du sang pauvre en O₂." },
    ],
  },
  {
    slug: "le-coeur",
    theme: "corps",
    numero: 14,
    titre: "Le cœur",
    intro:
      "Un muscle infatigable qui bat toute la vie : le cœur propulse le sang à chaque battement.",
    schema: "coeur",
    definition: "Le cœur est un **muscle** qui assure la circulation du sang.",
    explication: [
      "Il possède quatre cavités : deux oreillettes (haut) et deux ventricules (bas).",
      "Il alterne contraction et relâchement pour pomper le sang.",
      "Il ne s'arrête jamais.",
    ],
    points: [
      {
        titre: "Structure",
        points: ["4 cavités : **2 oreillettes** (haut) et **2 ventricules** (bas)."],
      },
      {
        titre: "Fonctionnement",
        points: ["**Systole** = contraction (éjection du sang).", "**Diastole** = relâchement (remplissage)."],
      },
    ],
    exemple: "Au repos, le cœur d'un adulte bat environ 60 à 80 fois par minute.",
    pieges: [
      {
        erreur: "Penser que le cœur peut se reposer complètement.",
        pourquoi: "Le cœur ne s'arrête **jamais** : il alterne seulement contraction et relâchement.",
      },
    ],
    astuce:
      "**Systole = Serrer** (contraction), **Diastole = Détente** (relâchement). Oreillettes en haut, ventricules en bas.",
    retenir: [
      "Le cœur est un muscle-pompe.",
      "4 cavités : 2 oreillettes, 2 ventricules.",
      "Systole (contraction) / diastole (relâchement).",
      "Chaque battement propulse le sang.",
    ],
    quiz: [
      { question: "Combien de cavités possède le cœur ?", correction: "Quatre : deux oreillettes et deux ventricules." },
      { question: "Qu'est-ce que la systole ?", correction: "La contraction du cœur, qui éjecte le sang." },
    ],
  },
  {
    slug: "les-echanges-gazeux",
    theme: "corps",
    numero: 15,
    titre: "Les échanges gazeux",
    intro:
      "C'est au fond des poumons, dans de minuscules sacs, que l'oxygène passe dans le sang.",
    schema: "echanges-gazeux",
    definition:
      "Les échanges gazeux permettent le **passage du dioxygène dans le sang** et du **dioxyde de carbone vers les poumons**.",
    explication: [
      "Ils ont lieu dans les **alvéoles pulmonaires**.",
      "L'O₂ de l'air passe dans le sang ; le CO₂ du sang passe dans l'air.",
      "La grande surface des alvéoles favorise ces échanges.",
    ],
    points: [
      {
        points: [
          "Lieu : les **alvéoles pulmonaires**.",
          "O₂ : air → sang.",
          "CO₂ : sang → air (puis expiré).",
        ],
      },
    ],
    exemple: "Les millions d'alvéoles offrent une surface d'échange équivalente à un terrain de tennis.",
    pieges: [
      {
        erreur: "Croire que les échanges se font dans les bronches.",
        pourquoi: "Les échanges gazeux se produisent dans les **alvéoles**, pas dans les bronches (qui ne font que conduire l'air).",
      },
    ],
    astuce:
      "Les **alvéoles** sont le lieu de l'échange : grande surface + fines parois = passage facile des gaz.",
    retenir: [
      "Échanges dans les **alvéoles pulmonaires**.",
      "O₂ : air → sang ; CO₂ : sang → air.",
      "Grande surface = échanges efficaces.",
    ],
    quiz: [
      { question: "Où se font les échanges gazeux ?", correction: "Dans les alvéoles pulmonaires." },
      { question: "Dans quel sens circule le dioxygène ?", correction: "De l'air (alvéoles) vers le sang." },
    ],
  },
  {
    slug: "l-appareil-locomoteur",
    theme: "corps",
    numero: 16,
    titre: "L'appareil locomoteur",
    intro:
      "Bouger un bras met en jeu une belle mécanique : os, muscles, tendons et articulations travaillent ensemble.",
    definition: "L'appareil locomoteur permet les **mouvements** du corps.",
    explication: [
      "Le muscle se contracte et tire, via le tendon, sur l'os.",
      "L'articulation permet à l'os de pivoter.",
      "Les muscles fonctionnent souvent par paires (un se contracte, l'autre se relâche).",
    ],
    points: [
      {
        points: ["🦴 Les **os**.", "💪 Les **muscles**.", "🔗 Les **articulations**.", "🧵 Les **tendons**."],
      },
    ],
    fonctionnement: [
      "Le **muscle se contracte**.",
      "Le **tendon tire sur l'os**.",
      "L'**articulation permet le mouvement**.",
    ],
    exemple: "Pour plier le bras, le biceps se contracte pendant que le triceps se relâche.",
    pieges: [
      {
        erreur: "Penser qu'un muscle peut pousser un os.",
        pourquoi: "Les muscles **tirent** sur les os, ils ne les poussent jamais. D'où le travail par paires.",
      },
    ],
    astuce:
      "Un muscle ne fait que **tirer**. Pour un mouvement dans les deux sens, il faut deux muscles opposés (biceps / triceps).",
    retenir: [
      "Os, muscles, tendons, articulations.",
      "Muscle contracté → tendon tire sur l'os → mouvement.",
      "Les muscles **tirent** (jamais pousser).",
      "Ils travaillent par paires opposées.",
    ],
    quiz: [
      { question: "Que fait le triceps quand le biceps se contracte pour plier le bras ?", correction: "Il se relâche (les muscles travaillent par paires opposées)." },
      { question: "Un muscle pousse-t-il sur l'os ?", correction: "Non, il tire toujours sur l'os." },
    ],
  },

  // ============== THÈME 3 — REPRODUCTION & GÉNÉTIQUE ==============
  {
    slug: "la-reproduction-humaine",
    theme: "genetique",
    numero: 17,
    titre: "La reproduction humaine",
    intro:
      "Un nouvel individu naît de la rencontre de deux cellules : un gamète masculin et un gamète féminin.",
    definition:
      "La reproduction humaine permet la naissance d'un nouvel individu grâce à l'**union d'un gamète masculin et d'un gamète féminin**.",
    explication: [
      "L'homme produit les spermatozoïdes, la femme les ovules.",
      "La rencontre des gamètes forme une cellule-œuf.",
      "La fécondation a lieu dans une trompe de Fallope.",
    ],
    points: [
      {
        titre: "Chez l'homme",
        points: ["Testicules, épididymes, canaux déférents, pénis.", "→ Production des **spermatozoïdes**."],
      },
      {
        titre: "Chez la femme",
        points: ["Ovaires, trompes de Fallope, utérus, vagin.", "→ Production des **ovules** et développement du futur bébé."],
      },
    ],
    exemple: "Une grossesse ne débute qu'après une fécondation réussie.",
    pieges: [
      {
        erreur: "Situer la fécondation dans l'utérus.",
        pourquoi: "La fécondation se déroule dans une **trompe de Fallope** ; l'œuf migre ensuite vers l'utérus.",
      },
    ],
    astuce:
      "Deux gamètes obligatoires : **spermatozoïde + ovule**. Lieu de la rencontre = la **trompe**, pas l'utérus.",
    retenir: [
      "Reproduction = union de 2 gamètes.",
      "Spermatozoïde (homme) + ovule (femme).",
      "Fécondation dans une **trompe de Fallope**.",
    ],
    quiz: [
      { question: "Où a lieu la fécondation ?", correction: "Dans une trompe de Fallope." },
      { question: "Quels sont les deux gamètes nécessaires ?", correction: "Le spermatozoïde et l'ovule." },
    ],
  },
  {
    slug: "la-puberte",
    theme: "genetique",
    numero: 18,
    titre: "La puberté",
    intro:
      "C'est la période de transformation du corps, sous l'effet des hormones, qui rend la reproduction possible.",
    definition: "La puberté est la période où le corps devient **capable de se reproduire**.",
    explication: [
      "Elle est déclenchée par la production d'**hormones sexuelles**.",
      "Le corps change et les organes reproducteurs deviennent fonctionnels.",
      "Son âge de début varie d'un individu à l'autre.",
    ],
    points: [
      {
        titre: "Chez les filles",
        points: ["Développement des seins.", "Apparition des règles.", "Croissance rapide, pilosité."],
      },
      {
        titre: "Chez les garçons",
        points: ["Mue de la voix.", "Développement musculaire, pilosité.", "Production de spermatozoïdes."],
      },
    ],
    exemple: "La puberté commence généralement entre 10 et 15 ans.",
    pieges: [
      {
        erreur: "Fixer un âge unique pour la puberté.",
        pourquoi: "L'âge de la puberté **varie** selon les individus : il n'y a pas de norme unique.",
      },
    ],
    astuce:
      "Le déclencheur commun aux deux sexes : les **hormones sexuelles**. Elles pilotent tous les changements.",
    retenir: [
      "Puberté = le corps devient capable de se reproduire.",
      "Déclenchée par les hormones sexuelles.",
      "Maturation des organes reproducteurs.",
      "L'âge varie selon les individus.",
    ],
    quiz: [
      { question: "Qu'est-ce qui déclenche la puberté ?", correction: "La production d'hormones sexuelles." },
      { question: "La puberté commence-t-elle au même âge pour tout le monde ?", correction: "Non, l'âge varie selon les individus." },
    ],
  },
  {
    slug: "la-fecondation",
    theme: "genetique",
    numero: 19,
    titre: "La fécondation",
    intro:
      "L'instant fondateur : un spermatozoïde et un ovule fusionnent pour créer la toute première cellule d'un nouvel être.",
    schema: "fecondation",
    definition:
      "La fécondation correspond à la **rencontre et la fusion** d'un spermatozoïde et d'un ovule.",
    explication: [
      "Après l'ovulation, l'ovule est capté par une trompe.",
      "Un seul spermatozoïde féconde l'ovule.",
      "La fusion forme la cellule-œuf, à l'origine de tout l'organisme.",
    ],
    points: [
      {
        titre: "Les étapes",
        points: ["Ovulation.", "Rencontre dans une trompe.", "Fusion des deux cellules.", "Formation de la **cellule-œuf**."],
      },
    ],
    exemple: "Une seule cellule-œuf est à l'origine de tout l'organisme d'un être humain.",
    pieges: [
      {
        erreur: "Croire que plusieurs spermatozoïdes fécondent l'ovule.",
        pourquoi: "Normalement, **un seul** spermatozoïde féconde l'ovule ; l'ovule se ferme ensuite aux autres.",
      },
    ],
    astuce:
      "Résultat de la fécondation : une **cellule-œuf** unique, qui possède le patrimoine génétique **des deux parents**.",
    retenir: [
      "Fécondation = fusion spermatozoïde + ovule.",
      "Un seul spermatozoïde féconde l'ovule.",
      "Résultat : la cellule-œuf.",
      "Début d'un nouvel être humain.",
    ],
    quiz: [
      { question: "Combien de spermatozoïdes fécondent normalement un ovule ?", correction: "Un seul." },
      { question: "Que forme la fécondation ?", correction: "Une cellule-œuf." },
    ],
  },
  {
    slug: "developpement-embryon-foetus",
    theme: "genetique",
    numero: 20,
    titre: "Le développement de l'embryon et du fœtus",
    intro:
      "De la cellule-œuf au bébé : neuf mois de divisions et de croissance, nourris par le placenta.",
    schema: "developpement-embryon",
    definition:
      "Après la fécondation, la cellule-œuf se **divise** et forme un **embryon** puis un **fœtus**.",
    explication: [
      "La cellule-œuf se divise en de nombreuses cellules.",
      "L'embryon devient un fœtus, qui grandit jusqu'à la naissance.",
      "Le fœtus est nourri par le placenta et le cordon ombilical.",
    ],
    points: [
      {
        titre: "Les étapes",
        points: ["Cellule-œuf → Embryon → Fœtus → Naissance."],
      },
      {
        titre: "La nutrition",
        points: ["Le fœtus reçoit nutriments et O₂ grâce au **placenta** et au **cordon ombilical**."],
      },
    ],
    exemple: "La grossesse dure environ 9 mois.",
    pieges: [
      {
        erreur: "Attribuer le placenta uniquement à la mère ou au bébé.",
        pourquoi: "Le placenta est un organe **temporaire d'échanges** entre la mère et le fœtus.",
      },
    ],
    astuce:
      "Le placenta est le **lieu d'échange** (nutriments, O₂, déchets) entre la mère et le fœtus, relié par le cordon ombilical.",
    retenir: [
      "Cellule-œuf → embryon → fœtus → naissance.",
      "Développement continu (~9 mois).",
      "Nutrition via placenta + cordon ombilical.",
    ],
    quiz: [
      { question: "Quel organe nourrit le fœtus ?", correction: "Le placenta (relié par le cordon ombilical)." },
      { question: "Combien de temps dure environ la grossesse ?", correction: "Environ 9 mois." },
    ],
  },
  {
    slug: "les-chromosomes",
    theme: "genetique",
    numero: 21,
    titre: "Les chromosomes",
    intro:
      "Rangés dans le noyau, les chromosomes portent toute l'information génétique — et déterminent même le sexe.",
    schema: "chromosomes",
    definition:
      "Les chromosomes sont des structures présentes dans le **noyau** des cellules ; ils portent l'**information génétique**.",
    explication: [
      "L'humain possède 46 chromosomes, soit 23 paires.",
      "Une paire détermine le sexe (XX ou XY).",
      "Les gamètes n'en possèdent que 23.",
    ],
    points: [
      {
        titre: "Chez l'humain",
        points: ["**46 chromosomes**, soit **23 paires**."],
      },
      {
        titre: "Les chromosomes sexuels",
        points: ["**XX** → femme.", "**XY** → homme."],
      },
    ],
    exemple: "Chaque parent transmet 23 chromosomes à son enfant, qui en a donc 46.",
    pieges: [
      {
        erreur: "Croire que les gamètes ont 46 chromosomes.",
        pourquoi: "Les gamètes n'ont que **23 chromosomes** : c'est leur union qui rétablit les 46.",
      },
    ],
    astuce:
      "**46 = 23 + 23** : la moitié vient de chaque parent. Les gamètes sont les seuls à n'en avoir que 23.",
    retenir: [
      "46 chromosomes (23 paires) chez l'humain.",
      "XX = femme, XY = homme.",
      "Les gamètes n'en ont que 23.",
      "Les chromosomes portent les gènes.",
    ],
    quiz: [
      { question: "Combien de chromosomes possède une cellule humaine ?", correction: "46, soit 23 paires." },
      { question: "Quels chromosomes sexuels a un homme ?", correction: "XY." },
    ],
  },
  {
    slug: "l-adn",
    theme: "genetique",
    numero: 22,
    titre: "L'ADN",
    intro:
      "La molécule qui contient le mode d'emploi de tout être vivant, enroulée en une célèbre double hélice.",
    schema: "adn",
    definition:
      "L'ADN (Acide DésoxyriboNucléique) est la molécule qui **contient l'information génétique**.",
    explication: [
      "Il a la forme d'une **double hélice**.",
      "Il est composé de petites unités, les nucléotides.",
      "Il porte toutes les informations de fonctionnement de l'organisme.",
    ],
    points: [
      {
        titre: "Structure",
        points: ["Une **double hélice**.", "Composée de **nucléotides**."],
      },
      {
        titre: "Rôle",
        points: ["Contient toutes les informations nécessaires à l'organisme."],
      },
    ],
    exemple: "La couleur des yeux dépend d'informations inscrites dans l'ADN.",
    pieges: [
      {
        erreur: "Croire que chaque cellule a un ADN différent.",
        pourquoi: "Toutes les cellules d'un individu ont le **même ADN** (sauf les gamètes, qui n'en ont que la moitié).",
      },
    ],
    astuce:
      "Emboîtement à connaître : **ADN → gène → chromosome**. L'ADN est la molécule ; le chromosome, sa forme compactée.",
    retenir: [
      "ADN = support de l'information génétique.",
      "Forme : double hélice de nucléotides.",
      "Même ADN dans toutes les cellules du corps.",
    ],
    quiz: [
      { question: "Quelle est la forme de l'ADN ?", correction: "Une double hélice." },
      { question: "Toutes les cellules d'un individu ont-elles le même ADN ?", correction: "Oui, sauf les gamètes qui n'en ont que la moitié." },
    ],
  },
  {
    slug: "les-genes",
    theme: "genetique",
    numero: 23,
    titre: "Les gènes",
    intro:
      "Un gène, c'est un petit morceau d'ADN qui code un caractère : couleur des yeux, groupe sanguin…",
    definition:
      "Un gène est une **portion d'ADN** contenant une information héréditaire.",
    explication: [
      "Chaque gène est situé sur un chromosome.",
      "Les gènes déterminent de nombreux caractères.",
      "On reçoit une copie de chaque gène de chaque parent.",
    ],
    points: [
      {
        titre: "Ce que déterminent les gènes",
        points: ["Couleur des yeux.", "Groupe sanguin.", "Certaines maladies génétiques."],
      },
      {
        titre: "Transmission",
        points: ["Une copie de chaque gène vient de **chaque parent**."],
      },
    ],
    exemple: "Un enfant peut avoir les yeux bleus comme son grand-père.",
    pieges: [
      {
        erreur: "Associer systématiquement un caractère à un seul gène.",
        pourquoi: "Un caractère dépend **parfois de plusieurs gènes** (ex : la taille, la couleur de la peau).",
      },
    ],
    astuce:
      "Un **gène** est un morceau d'**ADN** situé sur un **chromosome** : garde bien cet emboîtement en tête.",
    retenir: [
      "Gène = portion d'ADN = information héréditaire.",
      "Situé sur un chromosome.",
      "Une copie de chaque parent.",
      "Un caractère peut dépendre de plusieurs gènes.",
    ],
    quiz: [
      { question: "Où sont situés les gènes ?", correction: "Sur les chromosomes (ce sont des portions d'ADN)." },
      { question: "Un caractère dépend-il toujours d'un seul gène ?", correction: "Non, il peut dépendre de plusieurs gènes." },
    ],
  },
  {
    slug: "l-heredite",
    theme: "genetique",
    numero: 24,
    titre: "L'hérédité",
    intro:
      "Pourquoi ressemble-t-on à ses parents ? Parce que les caractères se transmettent de génération en génération.",
    definition:
      "L'hérédité correspond à la **transmission des caractères génétiques** des parents à leurs enfants.",
    explication: [
      "Les caractères héréditaires sont transmis par les gènes, via les gamètes.",
      "Chaque enfant reçoit la moitié de son patrimoine de chaque parent.",
      "Certains caractères ne sont pas héréditaires (ex : une cicatrice).",
    ],
    points: [
      {
        titre: "La transmission",
        points: ["Parents → gamètes → enfant."],
      },
      {
        titre: "Exemples de caractères héréditaires",
        points: ["Couleur des yeux.", "Groupe sanguin.", "Certaines caractéristiques physiques."],
      },
    ],
    exemple: "Un enfant hérite de la moitié de son patrimoine génétique de chaque parent.",
    pieges: [
      {
        erreur: "Croire que tous les caractères sont héréditaires.",
        pourquoi: "Un caractère **acquis** (comme une cicatrice ou un bronzage) n'est **pas** transmis aux enfants.",
      },
    ],
    astuce:
      "Distingue **héréditaire** (transmis par les gènes) et **acquis** (obtenu au cours de la vie, non transmis).",
    retenir: [
      "Hérédité = transmission des caractères par les gènes.",
      "Parents → gamètes → enfant.",
      "La moitié du patrimoine vient de chaque parent.",
      "Les caractères acquis ne sont pas transmis.",
    ],
    quiz: [
      { question: "Une cicatrice est-elle transmise aux enfants ?", correction: "Non : c'est un caractère acquis, non héréditaire." },
      { question: "Quelle proportion du patrimoine génétique vient de chaque parent ?", correction: "La moitié." },
    ],
  },
  {
    slug: "les-mutations",
    theme: "genetique",
    numero: 25,
    titre: "Les mutations",
    intro:
      "Une petite « faute de frappe » dans l'ADN : la mutation peut être neutre, utile ou nuisible.",
    definition: "Une mutation est une **modification de la séquence de l'ADN**.",
    explication: [
      "Elle peut survenir par erreur de copie ou sous l'effet de l'environnement.",
      "Ses conséquences sont variables.",
      "Elle est une source de diversité génétique et d'évolution.",
    ],
    points: [
      {
        titre: "Causes",
        points: ["Erreur lors de la copie de l'ADN.", "Rayonnements.", "Certaines substances chimiques."],
      },
      {
        titre: "Conséquences possibles",
        points: ["Sans effet (neutre).", "Bénéfique.", "Défavorable."],
      },
    ],
    exemple: "Certaines mutations sont responsables de maladies génétiques ; d'autres n'ont aucun effet.",
    pieges: [
      {
        erreur: "Penser qu'une mutation est toujours une maladie.",
        pourquoi: "Beaucoup de mutations sont **neutres**, et certaines sont même **bénéfiques**.",
      },
    ],
    astuce:
      "Trois issues possibles pour une mutation : **neutre, bénéfique ou défavorable**. Elle nourrit la diversité du vivant.",
    retenir: [
      "Mutation = modification de l'ADN.",
      "Causes : erreurs, rayonnements, produits chimiques.",
      "Effet neutre, bénéfique ou défavorable.",
      "Source de **diversité génétique**.",
    ],
    quiz: [
      { question: "Une mutation provoque-t-elle toujours une maladie ?", correction: "Non : elle peut être neutre ou même bénéfique." },
      { question: "Cite une cause de mutation.", correction: "Erreur de copie de l'ADN, rayonnements ou substances chimiques." },
    ],
  },
];
