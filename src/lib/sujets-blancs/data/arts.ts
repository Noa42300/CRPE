/**
 * SUJETS BLANCS — ARTS (catégorie unifiée : arts plastiques + éducation musicale)
 * -----------------------------------------------------------------------------
 * À la manière du concours, un même dossier « Arts » réunit une partie arts
 * plastiques ET une partie éducation musicale. Les œuvres support sont libres
 * de droits et l'image est intégrée à la page (voir illustrations.ts).
 *
 * Les anciens sujets séparés (data/arts-plastiques.ts et data/musique.ts) sont
 * conservés dans le dépôt mais ne sont plus affichés : ils pourront être
 * convertis à ce format combiné ultérieurement.
 */
import type { SujetBlanc } from "../types";

export const ARTS_SUJETS: SujetBlanc[] = [
  {
    slug: "arts-1-ressemblance-et-paysage",
    matiere: "arts",
    niveau: "crpe",
    titre: "Sujet blanc n°1 — La ressemblance et le paysage (arts plastiques & éducation musicale)",
    description:
      "Un dossier « Arts » complet à la manière du concours : arts plastiques (Arcimboldo, L'Été) et éducation musicale (Beethoven, Pastorale), en lien avec le programme 2027. Analyse d'œuvre, mise en relation et transposition pédagogique. Niveau CRPE.",
    epreuve: "Épreuve écrite de polyvalence — Domaine des arts (arts plastiques & éducation musicale)",
    duree: "1 h conseillée",
    totalPoints: 20,
    consignes: [
      "Le sujet comporte deux parties indépendantes : arts plastiques (10 points) et éducation musicale (10 points).",
      "Répondre à chaque question par un développement structuré et argumenté, appuyé sur les documents et sur des connaissances précises.",
      "On valorise la culture artistique, la maîtrise du vocabulaire spécifique et la cohérence des propositions pédagogiques. Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Partie A — Arts plastiques : questionner la ressemblance",
        points: 10,
        intro:
          "En lien avec les questionnements « Questionner la ressemblance » et « La représentation de l'être humain ».",
        blocks: [
          {
            type: "figure",
            illustration: "arcimboldo-ete",
            titre: "Document 1 — Giuseppe Arcimboldo, L'Été (1573)",
            legende:
              "Giuseppe Arcimboldo, L'Été, 1573, huile sur toile, 76 × 64 cm, musée du Louvre (œuvre du domaine public).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "D'après la série des Quatre Saisons de Giuseppe Arcimboldo.",
            lines: [
              "L'œuvre représente, de profil, une tête et un buste humains. Mais en s'approchant, on découvre que ce visage est entièrement composé de fruits et de légumes d'été : une pêche forme la joue, une poire le nez, des cerises la bouche, un épi de blé le sourcil, un concombre l'oreille ; l'épaule est faite d'un habit tressé de paille où se lisent le nom du peintre et la date. L'ensemble constitue à la fois une nature morte et un portrait : selon la distance, on voit un empilement de végétaux ou un être humain.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi cette œuvre « questionne-t-elle la ressemblance » ? Analysez les procédés par lesquels Arcimboldo obtient l'illusion d'un visage, et ce que cette double lecture révèle du rapport entre représentation et réel.",
                points: 4,
              },
              {
                num: "b.",
                text: "En vous appuyant sur vos connaissances (histoire des arts), situez cette manière de représenter l'être humain par rapport au portrait « ressemblant » traditionnel. Citez au moins un autre exemple d'œuvre ou de démarche qui interroge, elle aussi, la ressemblance du visage.",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 3, une séquence d'arts plastiques inspirée de cette œuvre. Précisez l'objectif, une situation de pratique et l'articulation avec la rencontre des œuvres et le langage.",
                points: 3,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale : le paysage en musique",
        points: 10,
        intro:
          "En lien avec le questionnement « Le paysage en musique ».",
        blocks: [
          {
            type: "document",
            titre: "Document 2 — Une symphonie qui peint la nature",
            source:
              "Ludwig van Beethoven, Symphonie n°6 « Pastorale », op. 68 (1808). Titres donnés par le compositeur aux mouvements.",
            lines: [
              "1. « Éveil d'impressions joyeuses à l'arrivée à la campagne ».",
              "2. « Scène au bord du ruisseau » (on y entend le rossignol, la caille et le coucou évoqués par la flûte, le hautbois et la clarinette).",
              "3. « Joyeuse assemblée de paysans » — 4. « L'orage » — 5. « Chant pastoral : sentiments de reconnaissance après l'orage ».",
              "Beethoven précisait que l'œuvre est « plus l'expression du sentiment que la peinture ».",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Comment la musique peut-elle évoquer un paysage ? À partir du document, décrivez les procédés musicaux mobilisés (imitation, timbres, motifs, nuances, forme) et discutez la remarque de Beethoven (« expression du sentiment » plutôt que « peinture »).",
                points: 4,
              },
              {
                num: "b.",
                text: "Mettez cette œuvre en relation avec le programme 2027 « Le paysage en musique » (Vivaldi, L'Été ; Smetana, La Moldau ; Nougaro, Toulouse). Quelles manières différentes de « représenter » un paysage en musique repérez-vous ?",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 2 ou 3, une activité d'écoute active et/ou de création autour du « paysage sonore ». Précisez l'œuvre écoutée, la consigne d'écoute et une production possible des élèves.",
                points: 3,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Question", "Compétences évaluées", "Points"],
      lignes: [
        ["A — Arts pl.", "a.", "Analyse de l'œuvre : ressemblance, double lecture, procédés", "4"],
        ["A", "b.", "Histoire des arts : représentation de l'être humain, mise en relation", "3"],
        ["A", "c.", "Transposition pédagogique (pratique + œuvres + langage)", "3"],
        ["B — Musique", "a.", "Procédés du « paysage en musique », lecture du document", "4"],
        ["B", "b.", "Mise en relation avec les œuvres au programme 2027", "3"],
        ["B", "c.", "Écoute active / création d'un paysage sonore", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On n'attend pas une érudition exhaustive mais une analyse précise appuyée sur les documents, un vocabulaire spécifique juste (plastique et musical) et des propositions pédagogiques réalistes reliant rencontre des œuvres, pratique et langage.",
    correction: [
      {
        titre: "Partie A — Arts plastiques",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "En quoi l'œuvre questionne-t-elle la ressemblance ?",
            reponse: [
              "Arcimboldo obtient l'illusion d'un visage par **analogie de formes et de couleurs** : chaque fruit ou légume est choisi parce que sa forme évoque une partie du visage (la rondeur d'une pêche pour la joue, une poire pour le nez…). C'est l'**assemblage** et la **composition** (le profil, le cadrage) qui font surgir la figure, non l'imitation fidèle d'un modèle.",
              "L'œuvre repose sur une **double lecture** : de loin, un portrait ; de près, une **nature morte**. La ressemblance n'est donc pas donnée mais **construite** par le regard du spectateur.",
              "Elle interroge ainsi le rapport entre **représentation et réel** : ressembler, ce n'est pas copier, c'est produire des signes que l'œil interprète. On peut évoquer le **maniérisme**, le goût de la prouesse et de l'allégorie (le prince régnant sur les saisons et la nature).",
            ],
            attendu:
              "Nommer les procédés (analogie de formes, assemblage, composition, double lecture) et en tirer une réflexion sur la ressemblance comme construction, non comme simple copie.",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Situer cette représentation de l'être humain (histoire des arts).",
            reponse: [
              "Le portrait traditionnel vise la **ressemblance mimétique** (reconnaître les traits d'un modèle, souvent son statut). Arcimboldo s'en écarte : il représente l'humain par **détour et métaphore**, ce qui en fait un portrait **allégorique** plus qu'un portrait « d'après nature ».",
              "Mise en relation possible : le **cubisme** (Picasso décompose et recompose le visage), le **portrait photographique** (qui pose autrement la question de la ressemblance), ou encore les **portraits composés / photomontages** du XXᵉ siècle. Tous montrent que « représenter l'être humain » ne se réduit pas à l'imiter.",
            ],
            attendu:
              "Opposer ressemblance mimétique et représentation détournée, et citer au moins un exemple pertinent et exact.",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Séquence d'arts plastiques (cycle 3).",
            reponse: [
              "Objectif : comprendre que l'on peut **représenter un visage sans le copier**, en composant avec d'autres images ou objets (questionner la ressemblance).",
              "Pratique : réaliser une **tête composée « à la manière d'Arcimboldo »** — par collage / photomontage d'images de fruits, d'objets ou d'éléments naturels, ou en assemblant de vrais objets photographiés. On travaille la **composition** (profil, proportions) et le choix des analogies de formes.",
              "Articulation : **rencontre des œuvres** (Arcimboldo et un artiste contemporain), **pratique**, puis **langage** — les élèves décrivent et justifient leurs choix ; on garde une trace (cahier, exposition).",
            ],
            attendu:
              "Un objectif clair, une pratique réaliste liée à l'œuvre, et l'articulation rencontre/pratique/langage.",
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "Comment la musique évoque-t-elle un paysage ?",
            reponse: [
              "Procédés repérables : le **figuralisme / l'imitation** (chants d'oiseaux confiés à la flûte, au hautbois et à la clarinette ; grondement de l'orage) ; le **timbre** des instruments (couleur pastorale des bois) ; des **motifs** et des ostinatos évoquant l'eau qui coule ; les **nuances** et le **crescendo** pour l'orage ; la **forme** à programme (mouvements titrés qui racontent une promenade).",
              "La remarque de Beethoven (« plus l'expression du sentiment que la peinture ») invite à nuancer : la musique **suggère et fait ressentir** un paysage plutôt qu'elle ne le « photographie ». Elle agit sur l'**émotion** et l'imagination de l'auditeur, au-delà de la simple imitation des bruits.",
            ],
            attendu:
              "Citer des procédés précis (imitation, timbre, motif, nuance, forme) ET discuter le rapport imitation / évocation-sentiment.",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Mise en relation avec les œuvres du programme 2027.",
            reponse: [
              "**Vivaldi, L'Été** (Les Quatre Saisons, 1725) : musique baroque descriptive, guidée par un sonnet ; imitation directe (chaleur, mouches, orage). Comme chez Beethoven, la nature est « peinte », mais de façon plus littérale.",
              "**Smetana, La Moldau** (1874) : poème symphonique romantique qui suit le **cours d'une rivière** (sources, forêt, noce, rapides, Prague) : le paysage devient un **récit** musical.",
              "**Nougaro, Toulouse** (1967) : une **chanson** où le paysage est surtout **urbain et affectif**, évoqué par le texte autant que par la musique.",
              "On dégage ainsi plusieurs manières de « représenter » un paysage en musique : imitation (Vivaldi), évocation-sentiment (Beethoven), récit-programme (Smetana), texte et mémoire d'un lieu (Nougaro).",
            ],
            attendu:
              "Comparer au moins deux œuvres du programme et distinguer des procédés différents (imitation, récit, texte, évocation).",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Écoute active / création d'un paysage sonore.",
            reponse: [
              "Écoute active : faire écouter la « Scène au bord du ruisseau » et « L'orage » de la Pastorale ; consigne : **repérer et nommer** ce que la musique évoque (oiseaux, eau, orage), lever une image ou un geste quand on l'entend, puis **décrire** avec un vocabulaire construit (timbre, nuance, tempo).",
              "Création : réaliser un **paysage sonore** évoquant un lieu (forêt, mer, ville) avec la voix, le corps, des objets sonores et des percussions ; travailler l'organisation (début / montée / apaisement) et l'écoute mutuelle.",
              "On relie **écouter, décrire et produire**, conformément aux programmes d'éducation musicale.",
            ],
            attendu:
              "Une œuvre précise, une consigne d'écoute active (pas seulement « écouter ») et une production réaliste des élèves.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Traiter un dossier « Arts »",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Analyser une œuvre (plastique ou musicale)",
            lines: [
              "Décrire d'abord (ce que je vois / ce que j'entends), puis interpréter (ce que cela produit), enfin relier (contexte, autres œuvres).",
              "Employer un vocabulaire spécifique : en arts plastiques (composition, cadrage, couleur, matière) ; en musique (timbre, hauteur, nuance, tempo, forme).",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            titre: "Réussir la question pédagogique",
            lines: [
              "Toujours articuler rencontre des œuvres + pratique + langage (décrire, justifier ses choix).",
              "Proposer une situation réaliste, adaptée au cycle, avec un objectif clair et une trace.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "**Se limiter à décrire** l'œuvre sans l'interpréter ni la relier à la notion (ressemblance, paysage).",
              "**Confondre imitation et évocation** en musique : tout n'est pas « bruitage », la musique exprime aussi un sentiment.",
              "**Réduire la pédagogie à « faire écouter » ou « faire dessiner »** sans objectif, sans consigne précise ni verbalisation.",
              "**Citer une œuvre ou une date de façon inexacte** : mieux vaut un exemple sûr et bien exploité.",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "arts-2-portrait-et-mer",
    matiere: "arts",
    niveau: "crpe",
    titre: "Sujet blanc n°2 — Le portrait et la mer (arts plastiques & éducation musicale)",
    description:
      "Un dossier « Arts » : arts plastiques (Vermeer, La Jeune Fille à la perle) et éducation musicale (Debussy, La Mer), en lien avec le programme 2027. Analyse d'œuvre, mise en relation et transposition pédagogique. Niveau CRPE.",
    epreuve: "Épreuve écrite de polyvalence — Domaine des arts (arts plastiques & éducation musicale)",
    duree: "1 h conseillée",
    totalPoints: 20,
    consignes: [
      "Le sujet comporte deux parties indépendantes : arts plastiques (10 points) et éducation musicale (10 points).",
      "Répondre à chaque question par un développement structuré et argumenté, appuyé sur les documents et sur des connaissances précises.",
      "On valorise la culture artistique, la maîtrise du vocabulaire spécifique et la cohérence des propositions pédagogiques. Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Partie A — Arts plastiques : questionner la ressemblance",
        points: 10,
        intro:
          "En lien avec les questionnements « Questionner la ressemblance » et « La représentation de l'être humain ».",
        blocks: [
          {
            type: "figure",
            illustration: "vermeer-jeune-fille",
            titre: "Document 1 — Johannes Vermeer, La Jeune Fille à la perle (v.1665)",
            legende:
              "Johannes Vermeer, La Jeune Fille à la perle, v.1665, huile sur toile, 44,5 × 39 cm, Mauritshuis, La Haye (œuvre du domaine public).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "D'après Johannes Vermeer, peintre du Siècle d'or néerlandais.",
            lines: [
              "Sur un fond sombre et neutre, une jeune fille tourne la tête vers le spectateur, comme surprise, les lèvres légèrement entrouvertes. Elle porte un turban bleu et jaune et une grande perle à l'oreille. La lumière, douce, glisse sur le visage et fait briller la perle. On ne sait pas qui elle est : l'œuvre n'est pas le portrait d'une personne identifiée, mais une « tronie », c'est-à-dire une étude de visage et d'expression.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi cette œuvre invite-t-elle à « questionner la ressemblance » ? Analysez les moyens plastiques (lumière, cadrage, regard, fond, la perle) et expliquez ce que change le fait qu'il s'agisse d'une « tronie » plutôt que d'un portrait.",
                points: 4,
              },
              {
                num: "b.",
                text: "En vous appuyant sur vos connaissances (histoire des arts), situez cette manière de représenter l'être humain. Comparez-la à un portrait « ressemblant » d'une personne identifiée, et citez au moins un autre exemple pertinent.",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 3, une séquence d'arts plastiques inspirée de cette œuvre. Précisez l'objectif, une situation de pratique et l'articulation avec la rencontre des œuvres et le langage.",
                points: 3,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale : le paysage en musique",
        points: 10,
        intro: "En lien avec le questionnement « Le paysage en musique ».",
        blocks: [
          {
            type: "document",
            titre: "Document 2 — La mer mise en musique",
            source:
              "Claude Debussy, La Mer, trois esquisses symphoniques pour orchestre (1905).",
            lines: [
              "L'œuvre comporte trois parties : 1. « De l'aube à midi sur la mer » ; 2. « Jeux de vagues » ; 3. « Dialogue du vent et de la mer ».",
              "Debussy ne raconte pas une histoire et n'imite pas des bruits : par les timbres, les couleurs de l'orchestre, les nuances et des motifs mouvants, il évoque la lumière et le mouvement de l'eau — une musique souvent qualifiée d'« impressionniste ».",
              "Fait notable : la couverture de la première édition (1905) reproduisait une célèbre estampe japonaise, La Grande Vague de Kanagawa d'Hokusai — un paysage marin peint.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Comment la musique évoque-t-elle ici un paysage marin ? Décrivez les procédés musicaux (timbres, nuances, motifs, forme) et expliquez la différence entre « imiter » des bruits et « évoquer » une impression.",
                points: 4,
              },
              {
                num: "b.",
                text: "Mettez cette œuvre en relation avec le programme 2027 « Le paysage en musique » (Vivaldi, L'Été ; Smetana, La Moldau ; Nougaro, Toulouse). Quelles manières différentes de représenter un paysage en musique repérez-vous ?",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 2 ou 3, une activité d'écoute active et/ou de création autour du « paysage sonore » marin. Vous pouvez exploiter le lien avec l'estampe d'Hokusai. Précisez l'œuvre écoutée, la consigne d'écoute et une production possible.",
                points: 3,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Question", "Compétences évaluées", "Points"],
      lignes: [
        ["A — Arts pl.", "a.", "Analyse : ressemblance, « tronie », moyens plastiques", "4"],
        ["A", "b.", "Histoire des arts : représentation de l'être humain, mise en relation", "3"],
        ["A", "c.", "Transposition pédagogique (pratique + œuvres + langage)", "3"],
        ["B — Musique", "a.", "Procédés du « paysage en musique », imitation vs évocation", "4"],
        ["B", "b.", "Mise en relation avec les œuvres au programme 2027", "3"],
        ["B", "c.", "Écoute active / création d'un paysage sonore", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une analyse précise appuyée sur les documents, un vocabulaire spécifique juste (plastique et musical) et des propositions pédagogiques réalistes reliant rencontre des œuvres, pratique et langage.",
    correction: [
      {
        titre: "Partie A — Arts plastiques",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "En quoi l'œuvre questionne-t-elle la ressemblance ?",
            reponse: [
              "Vermeer construit une **présence** plus qu'une identité : le **fond sombre et neutre** isole la figure, le **cadrage serré** (buste, gros plan) concentre le regard sur le visage, et la **lumière douce** modèle la joue et fait vivre l'expression. Le **regard tourné vers le spectateur** et les **lèvres entrouvertes** créent un instant, une adresse.",
              "La fameuse **perle** est un trompe-l'œil : de près, ce ne sont que **quelques touches de blanc** ; la « ressemblance » est donc une **illusion** produite par la peinture et interprétée par l'œil.",
              "Surtout, l'œuvre est une **« tronie »** : elle ne représente pas une personne identifiée mais un **type**, une étude d'expression et de costume. Un visage peut donc être saisissant de vérité sans être le portrait « ressemblant » de quelqu'un de précis.",
            ],
            attendu:
              "Nommer les moyens plastiques (fond, cadrage, lumière, regard) ET exploiter la notion de tronie (ressemblance ≠ portrait d'un modèle identifié).",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Situer cette représentation de l'être humain (histoire des arts).",
            reponse: [
              "Le **portrait** au sens strict vise la ressemblance d'une **personne identifiée** (souvent le commanditaire, avec son statut). La **tronie** cherche l'**expression** et la **virtuosité** (rendu des étoffes, de la lumière), sans identité précise.",
              "Mise en relation possible : les **autoportraits de Rembrandt** (même époque, intériorité), un **portrait d'apparat** classique (montrer un statut), ou, à l'inverse, les **portraits du XXᵉ siècle** qui déforment le visage (Modigliani) et poussent plus loin la question de la ressemblance.",
            ],
            attendu:
              "Distinguer portrait (personne identifiée) et tronie/expression, avec un exemple pertinent et exact.",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Séquence d'arts plastiques (cycle 3).",
            reponse: [
              "Objectif : comprendre qu'un visage peut exprimer une **présence et une émotion** sans viser la ressemblance exacte d'une personne.",
              "Pratique : réaliser un **« visage expressif »** (dessin, peinture ou **photographie**) en travaillant la **lumière** (source latérale douce), le **cadrage** (gros plan) et le **regard** ; on peut ajouter un **détail brillant** (comme la perle) obtenu d'une simple touche claire.",
              "Articulation : **rencontre des œuvres** (Vermeer + un portrait ou une photo contemporaine), **pratique**, puis **langage** (décrire et justifier ses choix, verbaliser l'effet produit).",
            ],
            attendu:
              "Objectif clair, pratique réaliste liée à l'œuvre, articulation rencontre/pratique/langage.",
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "Comment la musique évoque-t-elle un paysage marin ?",
            reponse: [
              "Procédés : la **couleur orchestrale** et les **timbres** (cordes divisées, harpes, bois, cuivres) suggèrent l'eau et la lumière ; des **motifs courts et mouvants** et des **ostinatos** imitent le balancement des vagues ; les **nuances** et les **crescendos/decrescendos** figurent la houle qui enfle puis retombe ; la **forme fluide** (sans thèmes « carrés ») évoque le mouvement continu de la mer.",
              "Différence **imiter / évoquer** : Debussy ne « bruite » pas la mer ; il en donne une **impression**, une atmosphère, qui agit sur la **sensation** et l'imagination de l'auditeur. C'est le principe de l'**impressionnisme** musical.",
            ],
            attendu:
              "Citer des procédés précis (timbre, motif, nuance, forme) ET opposer imitation littérale et évocation impressionniste.",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Mise en relation avec les œuvres du programme 2027.",
            reponse: [
              "**Vivaldi, L'Été** (1725) : baroque descriptif, imitation directe guidée par un sonnet (orage, chaleur).",
              "**Smetana, La Moldau** (1874) : poème symphonique qui **raconte** le cours d'une rivière (récit-programme).",
              "**Nougaro, Toulouse** (1967) : une **chanson**, paysage urbain porté par le texte.",
              "**Debussy, La Mer** : ni récit ni imitation littérale, mais **évocation impressionniste** (couleur, lumière, mouvement). On dégage ainsi plusieurs manières de représenter un paysage : imitation, récit, texte, impression.",
            ],
            attendu:
              "Comparer au moins deux œuvres du programme et distinguer des procédés différents (imitation, récit, texte, évocation).",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Écoute active / création d'un paysage sonore marin.",
            reponse: [
              "Écoute active : faire écouter « Jeux de vagues » ou « De l'aube à midi sur la mer » ; consigne : **repérer** les moments où la mer est calme puis agitée, **décrire** avec un vocabulaire construit (timbre, nuance, tempo), lever un geste ou une image quand la houle enfle.",
              "Lien arts visuels : mettre en regard **La Grande Vague d'Hokusai** (couverture de la partition) pour comparer paysage peint et paysage sonore.",
              "Création : réaliser un **paysage sonore marin** (voix, souffles, objets, percussions douces) avec une progression (calme → tempête → retour au calme) ; travailler l'écoute mutuelle.",
            ],
            attendu:
              "Une œuvre précise, une consigne d'écoute active (pas seulement « écouter ») et une production réaliste ; le lien avec Hokusai est valorisé.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Traiter un dossier « Arts »",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Analyser une œuvre (plastique ou musicale)",
            lines: [
              "Décrire d'abord (ce que je vois / ce que j'entends), puis interpréter (ce que cela produit), enfin relier (contexte, autres œuvres).",
              "Employer un vocabulaire spécifique : en arts plastiques (composition, cadrage, lumière, matière) ; en musique (timbre, nuance, tempo, forme).",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            titre: "Réussir la question pédagogique",
            lines: [
              "Toujours articuler rencontre des œuvres + pratique + langage (décrire, justifier ses choix).",
              "Proposer une situation réaliste, adaptée au cycle, avec un objectif clair et une trace.",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "**Prendre La Jeune Fille à la perle pour le portrait d'une personne réelle** : c'est une « tronie », une étude d'expression.",
              "**Confondre imitation et évocation** en musique : Debussy suggère la mer, il ne la « bruite » pas.",
              "**Réduire la pédagogie à « faire écouter » ou « faire dessiner »** sans objectif ni verbalisation.",
              "**Citer une œuvre ou une date de façon inexacte** : mieux vaut un exemple sûr et bien exploité.",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "arts-3-action-et-recit",
    matiere: "arts",
    niveau: "crpe",
    titre: "Sujet blanc n°3 — Représenter l'action : l'événement et le récit (arts plastiques & éducation musicale)",
    description:
      "Un dossier « Arts » : arts plastiques (Delacroix, La Liberté guidant le peuple) et éducation musicale (Dukas, L'Apprenti sorcier), en lien avec le programme 2027. Analyse d'œuvre, mise en relation et transposition pédagogique. Niveau CRPE.",
    epreuve: "Épreuve écrite de polyvalence — Domaine des arts (arts plastiques & éducation musicale)",
    duree: "1 h conseillée",
    totalPoints: 20,
    consignes: [
      "Le sujet comporte deux parties indépendantes : arts plastiques (10 points) et éducation musicale (10 points).",
      "Répondre à chaque question par un développement structuré et argumenté, appuyé sur les documents et sur des connaissances précises.",
      "On valorise la culture artistique, la maîtrise du vocabulaire spécifique et la cohérence des propositions pédagogiques. Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Partie A — Arts plastiques : représenter un événement, le mouvement et l'action",
        points: 10,
        intro:
          "En lien avec les questionnements « L'art et le récit » (représenter un événement) et « La représentation de l'être humain » (la figure allégorique).",
        blocks: [
          {
            type: "figure",
            illustration: "delacroix-liberte",
            titre: "Document 1 — Eugène Delacroix, La Liberté guidant le peuple (1830)",
            legende:
              "Eugène Delacroix, La Liberté guidant le peuple, 1830, huile sur toile, 260 × 325 cm, musée du Louvre (œuvre du domaine public).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "D'après Eugène Delacroix, peintre romantique français.",
            lines: [
              "L'œuvre commémore les « Trois Glorieuses », les journées révolutionnaires des 27, 28 et 29 juillet 1830 qui renversent le roi Charles X. Au centre, une femme au bonnet phrygien avance en brandissant le drapeau tricolore d'une main et un fusil de l'autre : ce n'est pas une combattante réelle mais une allégorie, la Liberté personnifiée. Elle enjambe une barricade et des corps, entraînant une foule mêlée : un bourgeois en haut-de-forme armé d'un fusil, un gamin (dit « gavroche ») brandissant deux pistolets, des ouvriers. La composition, en pyramide et en diagonale, pousse tout le groupe vers l'avant, dans la fumée des combats ; au loin, dans la brume, on devine les tours de Notre-Dame de Paris.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Comment Delacroix fait-il « entrer » le spectateur dans l'action ? Analysez les procédés plastiques (composition, lignes de force, mouvement, lumière et couleur, place du drapeau) qui donnent à la scène sa force dramatique.",
                points: 4,
              },
              {
                num: "b.",
                text: "L'œuvre mêle un événement réel et une figure allégorique (la Liberté). Expliquez ce que cette allégorie apporte au tableau, et situez cette manière de représenter l'être humain par rapport à un portrait « ressemblant ». Citez au moins un autre exemple d'œuvre qui représente un événement ou une idée.",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 3, une séquence d'arts plastiques autour de « représenter un événement / mettre en mouvement une image ». Précisez l'objectif, une situation de pratique et l'articulation avec la rencontre des œuvres et le langage. Un lien avec l'EMC (symboles de la République, liberté) peut être exploité.",
                points: 3,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale : raconter une histoire en musique",
        points: 10,
        intro:
          "En lien avec le questionnement « La musique et le récit » (la musique à programme, le poème symphonique).",
        blocks: [
          {
            type: "document",
            titre: "Document 2 — Une musique qui raconte une histoire",
            source:
              "Paul Dukas, L'Apprenti sorcier, scherzo symphonique (1897), d'après la ballade de Goethe (1797).",
            lines: [
              "L'œuvre suit pas à pas une histoire : en l'absence de son maître, l'apprenti sorcier ensorcelle un balai pour qu'il aille chercher l'eau à sa place. Mais il ne sait pas arrêter le sortilège : l'eau envahit tout. Il fend le balai d'un coup de hache… et chaque morceau devient un nouveau balai porteur d'eau. Le vieux sorcier revient enfin et rompt l'enchantement.",
              "Dukas confie au basson un thème sautillant et têtu qui « incarne » le balai ; l'orchestre grossit par vagues et par crescendos pour figurer l'eau qui monte ; les cuivres marquent le retour du sorcier. La forme de la musique épouse ainsi le récit.",
              "Cette œuvre est un « poème symphonique » (ou musique à programme) : une pièce d'orchestre sans paroles, mais construite pour raconter. Elle est devenue très célèbre grâce au dessin animé Fantasia (1940), où Mickey joue l'apprenti.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Comment la musique peut-elle « raconter » une histoire sans paroles ? À partir du document, décrivez les procédés (thème récurrent, timbres, rythme, nuances et crescendo, forme) qui permettent de suivre le récit du balai et de l'eau qui monte.",
                points: 4,
              },
              {
                num: "b.",
                text: "Mettez cette œuvre en relation avec d'autres musiques qui racontent (par exemple Prokofiev, Pierre et le Loup ; Saint-Saëns, Le Carnaval des animaux ; Moussorgski, Une nuit sur le mont Chauve). Quelles manières différentes de « raconter » ou de « représenter » un personnage en musique repérez-vous ?",
                points: 3,
              },
              {
                num: "c.",
                text: "Proposez, pour un cycle 2 ou 3, une activité d'écoute active et/ou de création autour de « la musique qui raconte ». Précisez l'œuvre écoutée, la consigne d'écoute (repérer le thème du balai, les moments-clés du récit) et une production possible des élèves.",
                points: 3,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Question", "Compétences évaluées", "Points"],
      lignes: [
        ["A — Arts pl.", "a.", "Analyse : composition, mouvement, force dramatique de la scène", "4"],
        ["A", "b.", "Événement réel + allégorie ; représentation de l'être humain ; mise en relation", "3"],
        ["A", "c.", "Transposition pédagogique (pratique + œuvres + langage), lien EMC", "3"],
        ["B — Musique", "a.", "Procédés du récit en musique (thème, timbre, rythme, forme)", "4"],
        ["B", "b.", "Mise en relation avec d'autres œuvres narratives", "3"],
        ["B", "c.", "Écoute active / création autour d'une musique qui raconte", "3"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une analyse précise appuyée sur les documents, un vocabulaire spécifique juste (plastique et musical) et des propositions pédagogiques réalistes reliant rencontre des œuvres, pratique et langage.",
    correction: [
      {
        titre: "Partie A — Arts plastiques",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "Comment Delacroix fait-il entrer le spectateur dans l'action ?",
            reponse: [
              "La **composition pyramidale** culmine sur la Liberté et le drapeau, tandis que de fortes **diagonales** (les fusils, les bras, la pente de la barricade) et le **mouvement d'avancée** de tout le groupe **vers le spectateur** donnent l'impression que la scène « sort » du tableau.",
              "La **lumière** et la **couleur** concentrent le regard : le corps éclairé de la Liberté se détache sur la fumée sombre, et le **rouge-blanc-bleu** du drapeau est **repris en écho** dans les vêtements des personnages, unifiant la foule autour de l'emblème. Les **corps au premier plan** rappellent le coût du combat et ancrent la scène dans le réel.",
              "Delacroix mêle ainsi un **souffle romantique** (dramatisation, énergie, contraste) et une organisation très construite : la force de l'œuvre naît de cette tension entre désordre apparent de la mêlée et rigueur de la composition.",
            ],
            attendu:
              "Nommer des procédés précis (composition pyramidale, diagonales, mouvement vers le spectateur, rôle de la couleur du drapeau) et les relier à l'effet dramatique.",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Événement réel et figure allégorique ; représentation de l'être humain.",
            reponse: [
              "La Liberté n'est **pas une combattante réelle** mais une **allégorie** : une idée (la liberté) prend la forme d'une femme au **bonnet phrygien**, symbole républicain. L'allégorie **donne un sens universel** à un événement daté (juillet 1830) : le tableau ne montre pas seulement une émeute, il **célèbre une idée**.",
              "Par rapport au **portrait ressemblant** (représenter une personne identifiée), on a ici une **figure-symbole** : elle vaut pour ce qu'elle **signifie**, non pour qui elle est. Les autres personnages, eux, sont **typés** (le bourgeois, le gamin, l'ouvrier) pour représenter « le peuple ».",
              "Mise en relation possible : Géricault, **Le Radeau de la Méduse** (représenter un événement dramatique), Picasso, **Guernica** (dénoncer par l'image), ou une **Marianne** (l'allégorie de la République). Tous montrent qu'une image peut **raconter un événement ou porter une idée**.",
            ],
            attendu:
              "Expliquer la fonction de l'allégorie (donner un sens universel à un événement réel), l'opposer au portrait, et citer un exemple pertinent et exact.",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Séquence d'arts plastiques (cycle 3).",
            reponse: [
              "Objectif : comprendre qu'une image peut **raconter un événement et suggérer le mouvement**, et qu'un symbole peut porter une idée.",
              "Pratique : réaliser une image (dessin, collage, **photomontage** ou mise en scène photographiée) qui **met en mouvement** un groupe autour d'un **symbole** (un drapeau, un objet). On travaille la **composition** (lignes de force, point culminant) et la manière de **suggérer l'action** (gestes, diagonales).",
              "Articulation : **rencontre des œuvres** (Delacroix + une œuvre engagée plus récente), **pratique**, puis **langage** (décrire, justifier). Lien **EMC** : les **symboles de la République** (drapeau, Marianne, devise « Liberté, Égalité, Fraternité »).",
            ],
            attendu:
              "Objectif clair, pratique réaliste liée à l'œuvre, articulation rencontre/pratique/langage ; le lien EMC est valorisé.",
          },
        ],
      },
      {
        titre: "Partie B — Éducation musicale",
        points: 10,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 4,
            question: "Comment la musique raconte-t-elle une histoire sans paroles ?",
            reponse: [
              "Le récit est porté par un **thème récurrent** (le motif sautillant du **basson**) qui **incarne le balai** : quand il revient, on « reconnaît » le personnage — c'est le principe du **leitmotiv**. Le **timbre** comique du basson caractérise l'objet ensorcelé.",
              "Le **rythme** régulier et têtu (ostinato) évoque la **marche mécanique** du balai ; les **nuances** et surtout un long **crescendo** (l'orchestre qui enfle) figurent l'**eau qui monte** ; les **cuivres** marquent le **retour du sorcier** et la rupture du sortilège.",
              "La **forme** de la pièce **épouse le déroulé de l'histoire** (mise en marche → emballement → catastrophe → retour à l'ordre). C'est une **musique à programme** : sans paroles, elle **suggère et fait suivre** un récit.",
            ],
            attendu:
              "Citer des procédés précis (thème/leitmotiv, timbre du basson, ostinato rythmique, crescendo, forme narrative) et les relier aux étapes de l'histoire.",
          },
          {
            type: "qa",
            num: "b.",
            points: 3,
            question: "Mise en relation avec d'autres musiques narratives.",
            reponse: [
              "**Prokofiev, Pierre et le Loup** (1936) : chaque personnage a un **instrument-timbre** et un **thème** (l'oiseau = flûte, le loup = cors…) ; un récitant guide l'histoire.",
              "**Saint-Saëns, Le Carnaval des animaux** (1886) : des pièces courtes **caractérisent** des animaux par le timbre, le tempo, le registre (l'éléphant à la contrebasse, le cygne au violoncelle).",
              "**Moussorgski, Une nuit sur le mont Chauve** (1867) : un poème symphonique qui **évoque** une nuit de sabbat par des couleurs orchestrales sombres.",
              "On dégage ainsi plusieurs manières de « raconter » : par un **thème/leitmotiv** (Dukas, Prokofiev), par la **caractérisation d'un timbre** (Saint-Saëns), par l'**atmosphère** (Moussorgski).",
            ],
            attendu:
              "Comparer au moins deux œuvres et distinguer des procédés différents (leitmotiv, timbre caractérisant, atmosphère).",
          },
          {
            type: "qa",
            num: "c.",
            points: 3,
            question: "Écoute active / création autour d'une musique qui raconte.",
            reponse: [
              "Écoute active : faire écouter des extraits de L'Apprenti sorcier ; consigne : **repérer le thème du balai** (lever la main quand il revient), puis **remettre dans l'ordre** des étapes de l'histoire (le balai part, l'eau monte, la hache, le retour du sorcier), et **décrire** avec un vocabulaire construit (timbre, nuance, tempo).",
              "Création : **sonoriser une petite histoire** (voix, corps, objets sonores, percussions) en donnant à un personnage un **motif** ou un **instrument** reconnaissable, et en organisant une **progression** (calme → emballement → fin).",
              "On relie **écouter, décrire et produire**, conformément aux programmes d'éducation musicale.",
            ],
            attendu:
              "Une œuvre précise, une consigne d'écoute active (repérer le thème, suivre le récit) et une production réaliste des élèves.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Traiter un dossier « Arts »",
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Analyser une œuvre (plastique ou musicale)",
            lines: [
              "Décrire d'abord (ce que je vois / ce que j'entends), puis interpréter (ce que cela produit), enfin relier (contexte, autres œuvres).",
              "Employer un vocabulaire spécifique : en arts plastiques (composition, lignes de force, mouvement, couleur) ; en musique (thème, timbre, rythme, nuance, forme).",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            titre: "Réussir la question pédagogique",
            lines: [
              "Toujours articuler rencontre des œuvres + pratique + langage (décrire, justifier ses choix).",
              "Proposer une situation réaliste, adaptée au cycle, avec un objectif clair et une trace ; exploiter les liens interdisciplinaires (ici, EMC).",
            ],
          },
        ],
      },
    ],
    erreursFrequentes: [
      {
        titre: "Erreurs fréquentes à éviter",
        blocks: [
          {
            type: "note",
            variant: "attention",
            titre: "Pièges classiques",
            lines: [
              "**Prendre la Liberté pour une combattante réelle** : c'est une allégorie, une figure-symbole.",
              "**Se limiter à raconter le sujet du tableau** sans analyser les procédés plastiques (composition, mouvement, couleur).",
              "**Croire qu'une musique sans paroles ne peut pas raconter** : le poème symphonique suit bel et bien un récit (thème, timbres, crescendo, forme).",
              "**Réduire la pédagogie à « faire écouter » ou « faire dessiner »** sans objectif, sans consigne précise ni verbalisation.",
              "**Citer une œuvre ou une date de façon inexacte** : mieux vaut un exemple sûr et bien exploité.",
            ],
          },
        ],
      },
    ],
  },
];
