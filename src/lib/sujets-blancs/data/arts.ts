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
];
