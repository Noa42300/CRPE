/**
 * SUJETS BLANCS — ARTS PLASTIQUES (Seconde épreuve, Domaine 2)
 * -----------------------------------------------------------
 * Analyse d'œuvres et réflexion (réponses courtes, ~15 lignes). Les œuvres
 * citées sont décrites dans le sujet (le candidat n'a pas besoin de la
 * reproduction pour raisonner). On évalue la culture artistique et la
 * capacité à articuler connaissances et analyse. Contenus originaux.
 */
import type { SujetBlanc } from "../types";

export const ARTS_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — Le portrait
  // ======================================================================
  {
    slug: "arts-1-le-portrait-et-le-regard",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°1 — Le portrait et le regard",
    description:
      "Questionner ce qu'un portrait donne à voir : ressemblance, intériorité, mise en scène. Deux questions d'analyse courtes autour de l'autoportrait et du portrait peint.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre à chaque question par une réponse courte, structurée (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Portrait et intériorité",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "portrait-clair-obscur",
            titre: "Document — Portrait en clair-obscur",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère un autoportrait peint : l'artiste se représente de trois-quarts, le regard tourné vers le spectateur. Le visage émerge d'un fond sombre, éclairé par une lumière latérale qui accentue les traits et laisse une partie du visage dans l'ombre. Les vêtements sont sobres ; rien ne détourne l'attention du visage et surtout des yeux, qui semblent fixer celui qui regarde.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Un portrait cherche-t-il seulement à ressembler au modèle, ou peut-il exprimer autre chose ? Développez à partir de la description proposée.",
                points: 10,
              },
              {
                num: "b.",
                text: "Quels moyens plastiques (lumière, cadrage, regard, fond) l'artiste utilise-t-il pour donner de la présence et de la profondeur au personnage ? Comment ces choix pourraient-ils être exploités dans une séquence d'arts plastiques au cycle 3 ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Analyse : ressemblance vs expression, culture artistique", "10"],
        ["b.", "Lecture des moyens plastiques + transposition pédagogique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On n'attend pas une érudition encyclopédique mais une lecture sensible et argumentée, appuyée sur des notions plastiques précises (cadrage, lumière, composition) et, pour la question b, un lien réaliste avec la classe.",
    correction: [
      {
        titre: "Arts plastiques — Portrait et intériorité",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Ressemblance ou expression ?",
            reponse: [
              "Un portrait vise d'abord une **ressemblance** : reconnaître le modèle, ses traits. Mais il ne s'y réduit pas : il cherche aussi à révéler un **caractère, une intériorité, une émotion**.",
              "Dans la description, le fond sombre et la lumière latérale isolent le visage et concentrent l'attention sur le regard : l'artiste ne montre pas seulement « à quoi ressemble » la personne, il suggère sa présence psychologique, une pensée, une gravité.",
              "On peut mobiliser la distinction entre portrait « d'apparat » (montrer un statut) et portrait « psychologique » (montrer une âme), et rappeler que l'autoportrait est aussi une interrogation de l'artiste sur lui-même.",
            ],
            attendu:
              "Dépasser l'idée de simple copie : montrer que le portrait construit du sens (intériorité, statut, émotion) par des choix plastiques.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Moyens plastiques et transposition en classe.",
            reponse: [
              "Moyens plastiques : la **lumière** (clair-obscur latéral) modèle le visage et crée du volume et du mystère ; le **cadrage** serré centre sur l'essentiel ; le **fond sombre et neutre** fait ressortir la figure ; le **regard frontal** crée un lien avec le spectateur (adresse directe).",
              "En classe (cycle 3) : proposer une séquence « faire un portrait qui exprime une émotion » — travail sur la lumière (source unique, ombres), sur le cadrage (gros plan), sur l'expression du visage. Support : photographies, peintures de référence, puis production plastique (dessin, peinture, photo) et verbalisation.",
              "On articule ainsi **rencontre avec les œuvres**, **pratique** et **langage** (décrire ses choix), conformément aux programmes d'arts plastiques.",
            ],
            attendu:
              "Nommer précisément les moyens plastiques ET proposer une exploitation pédagogique cohérente (pratique + rencontre d'œuvres + verbalisation).",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — Paysage et point de vue
  // ======================================================================
  {
    slug: "arts-2-paysage-et-point-de-vue",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°2 — Le paysage et le point de vue",
    description:
      "Le paysage n'est jamais une simple copie du réel : cadrage, lumière et composition traduisent un regard. Analyse d'une œuvre paysagère et réflexion sur la représentation.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Représenter un paysage",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "paysage-plans",
            titre: "Document — Paysage en plans successifs",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère un paysage peint : au premier plan, quelques arbres sombres encadrent la scène ; au second plan, une rivière serpente vers un village ; à l'arrière-plan, des collines s'estompent dans une brume bleutée. Le ciel occupe la moitié supérieure du tableau, traversé d'une lumière dorée de fin de journée. Les touches sont plus nettes au premier plan, plus floues au loin.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi un paysage peint est-il une interprétation du réel plutôt qu'une simple reproduction ? Appuyez-vous sur la description.",
                points: 10,
              },
              {
                num: "b.",
                text: "Comment l'artiste crée-t-il une impression de profondeur ? Quels procédés pourraient être découverts par des élèves lors d'une séance sur « représenter l'espace » ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Représentation vs réel, subjectivité du regard", "10"],
        ["b.", "Procédés de profondeur + transposition pédagogique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "L'enjeu est de montrer que le paysage est une construction (choix de cadrage, de lumière) et de nommer les procédés de représentation de l'espace, mobilisables avec des élèves.",
    correction: [
      {
        titre: "Arts plastiques — Représenter un paysage",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "Interprétation ou reproduction ?",
            reponse: [
              "Le peintre **choisit** un point de vue, un cadrage, un moment (« lumière dorée de fin de journée ») : autant de décisions qui orientent la perception. Le paysage n'est pas neutre, il traduit une **sensation, une atmosphère**.",
              "La lumière dorée, la brume, l'organisation en plans successifs construisent une ambiance mélancolique ou paisible : l'artiste exprime un regard, une émotion, et non un relevé topographique.",
              "On peut évoquer la différence entre le paysage « fenêtre sur le monde » et le paysage comme « état d'âme » (romantisme, impressionnisme), et rappeler que même la photographie suppose des choix.",
            ],
            attendu:
              "Montrer que les choix plastiques (cadrage, lumière, moment) font du paysage une interprétation subjective.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Procédés de profondeur et séance de classe.",
            reponse: [
              "Procédés : l'**étagement des plans** (premier plan / arrière-plan), la **superposition**, la **diminution des tailles**, l'**atténuation des couleurs et des contrastes au loin** (perspective atmosphérique : le lointain devient bleuté et flou), la **netteté décroissante** des touches.",
              "En classe : faire observer ces procédés sur des œuvres, puis proposer une production « représenter un paysage profond » où les élèves expérimentent l'étagement des plans, le chevauchement, le dégradé du lointain. Verbalisation des solutions trouvées.",
              "On relie rencontre d'œuvres, expérimentation plastique et acquisition d'un vocabulaire (plan, horizon, perspective).",
            ],
            attendu:
              "Nommer plusieurs procédés (étagement, superposition, perspective atmosphérique) et les transformer en situation d'apprentissage.",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — La couleur et l'abstraction
  // ======================================================================
  {
    slug: "arts-3-couleur-et-abstraction",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°3 — La couleur et l'abstraction",
    description:
      "Quand l'art se libère de la ressemblance : formes, couleurs et émotions. Analyse d'une œuvre abstraite et réflexion sur ce que « comprendre » une œuvre veut dire.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre par des réponses courtes et structurées (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — Quand la forme se libère du réel",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "composition-abstraite",
            titre: "Document — Composition abstraite géométrique",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "document",
            titre: "Description de l'œuvre",
            source: "Support de réflexion.",
            lines: [
              "On considère une composition abstraite : de grands aplats de couleurs vives (rouge, jaune, bleu) s'organisent en formes géométriques séparées par des lignes noires épaisses. Aucun objet reconnaissable n'est représenté. L'équilibre naît du rapport entre les surfaces colorées et les vides blancs.",
            ],
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Une œuvre abstraite, sans sujet reconnaissable, peut-elle « vouloir dire » quelque chose ? Argumentez à partir de la description.",
                points: 10,
              },
              {
                num: "b.",
                text: "Comment aborder une telle œuvre avec des élèves qui disent souvent « c'est facile » ou « ça ne représente rien » ? Proposez une démarche et une activité plastique.",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Sens de l'abstraction, rôle de la couleur et de la composition", "10"],
        ["b.", "Médiation des conceptions d'élèves + activité plastique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une réflexion qui prenne au sérieux l'abstraction (la couleur et la forme comme langage) et, pour la question b, une réponse qui déconstruise le préjugé « c'est facile / ça ne représente rien ».",
    correction: [
      {
        titre: "Arts plastiques — Quand la forme se libère du réel",
        points: 20,
        blocks: [
          {
            type: "qa",
            num: "a.",
            points: 10,
            question: "L'abstraction peut-elle faire sens ?",
            reponse: [
              "Une œuvre abstraite ne représente pas d'objet, mais elle **agit par ses moyens propres** : la couleur, la forme, la ligne, le rythme, l'équilibre. Ces éléments produisent des sensations et des émotions (dynamisme, calme, tension).",
              "Dans la description, les couleurs primaires vives et les lignes noires créent un **équilibre construit** entre pleins et vides : l'œuvre parle d'ordre, d'harmonie, de rapport entre les couleurs, et non d'un récit. Le sens est dans la relation des formes, pas dans un sujet.",
              "On peut rappeler que l'abstraction, née au début du XXᵉ siècle, revendique l'autonomie des moyens plastiques : la peinture n'a plus à imiter le monde pour exister.",
            ],
            attendu:
              "Défendre l'idée que couleur/forme/composition constituent un langage porteur de sens et d'émotion.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Aborder l'abstraction avec des élèves.",
            reponse: [
              "Prendre au sérieux la réaction (« ça ne représente rien ») pour la déplacer : faire **décrire** précisément ce que l'on voit (couleurs, formes, équilibre), verbaliser les émotions ressenties, montrer les **choix** de l'artiste (pourquoi ce rouge ici ? cette ligne ?).",
              "Contre l'idée que « c'est facile », proposer une activité : composer une œuvre abstraite exprimant une émotion (la joie, la colère) uniquement avec des couleurs et des formes, puis confronter les productions — les élèves découvrent que les choix sont difficiles et signifiants.",
              "Démarche : rencontre de l'œuvre → verbalisation → pratique → retour réflexif. On développe le regard et le vocabulaire plastique.",
            ],
            attendu:
              "Transformer le préjugé en objet de travail ; proposer une activité plastique où les élèves éprouvent que l'abstraction suppose des choix.",
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 4 — La sculpture et le corps
  // ======================================================================
  {
    slug: "arts-4-la-sculpture-et-le-corps",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°4 — La sculpture : donner vie à la matière",
    description:
      "Comment la sculpture fait-elle surgir la vie et l'émotion d'un bloc de pierre ? Analyse d'un buste sculpté et réflexion sur le volume, la lumière et le geste.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre à chaque question par une réponse courte et structurée (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — La sculpture et le corps",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "sculpture-buste",
            titre: "Document — Un buste sculpté",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "En quoi une sculpture ne se contente-t-elle pas de reproduire un corps, mais cherche à lui donner une présence et une vie ? Appuyez-vous sur la description.",
                points: 10,
              },
              {
                num: "b.",
                text: "Quels moyens propres à la sculpture (volume, matière, lumière, échelle) l'artiste met-il en jeu ? Comment aborder la sculpture avec des élèves par une pratique en volume ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Analyse : la sculpture comme mise en vie du corps", "10"],
        ["b.", "Moyens propres à la sculpture + pratique en volume", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une lecture sensible mobilisant le vocabulaire propre à la sculpture (volume, ronde-bosse, matière, lumière) et, pour la question b, une activité réaliste de pratique en trois dimensions.",
    correction: [
      {
        titre: "Arts plastiques — La sculpture et le corps",
        points: 20,
        blocks: [
          {
            type: "p",
            text: "**a. La sculpture, entre ressemblance et présence.**",
          },
          {
            type: "intro",
            citation: "L'art ne reproduit pas le visible, il rend visible.",
            auteur: "Paul Klee (1879-1940), Credo du créateur",
            paragraphs: [
              "Le peintre Paul Klee rappelle que l'art ne se réduit pas à copier la réalité : il révèle quelque chose qui, sans lui, resterait invisible.",
              "Appliquée à la sculpture, cette idée invite à dépasser la simple ressemblance du buste pour interroger la présence, l'émotion et la vie qu'il dégage.",
            ],
          },
          {
            type: "p",
            text: "La sculpture représente un corps, mais elle en fait surtout surgir une **présence** : le buste décrit émerge de l'ombre, son relief modelé et son regard lui donnent une intériorité. La matière (la pierre) semble animée. La sculpture ne dit pas seulement « à quoi ressemble » un être, elle lui confère une existence dans l'espace, que le spectateur peut tourner autour et éprouver.",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Moyens de la sculpture et pratique en classe.",
            reponse: [
              "Moyens propres : le **volume** (œuvre en trois dimensions, ronde-bosse que l'on voit sous tous les angles) ; la **matière** (pierre, terre, bronze — chacune a sa texture et sa lumière) ; le jeu de la **lumière** sur les reliefs (creux et bosses créent des ombres) ; l'**échelle** (un buste, une statue monumentale n'ont pas le même effet).",
              "En classe : proposer une pratique en volume — modelage en argile ou en pâte, assemblage de matériaux de récupération, sculpture sur savon — pour « faire un visage qui exprime une émotion ». Les élèves manipulent la matière, tournent autour de leur production, observent l'effet de la lumière.",
              "On articule **rencontre d'œuvres** (bustes, statues), **pratique** en trois dimensions et **verbalisation** (décrire volumes et sensations).",
            ],
            attendu:
              "Nommer les moyens spécifiques de la sculpture (volume, matière, lumière) ET proposer une réelle pratique en 3D (et non un dessin).",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Analyser une œuvre en arts plastiques",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Décrire avant d'interpréter** : ce que l'on voit (sujet, matière, lumière, format), puis ce que cela produit (émotion, sens).",
              "**Employer le vocabulaire spécifique** au médium (pour la sculpture : volume, ronde-bosse, relief, matière, socle).",
              "**Pour la question rédigée**, une courte introduction bien amenée (éventuelle citation d'artiste pertinente) est valorisée.",
              "**Pour la transposition pédagogique**, proposer une vraie pratique adaptée au cycle, reliée à la rencontre d'œuvres et à la verbalisation.",
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
              "**Réduire la sculpture à la ressemblance** : on attend une réflexion sur la présence, le volume, la matière.",
              "**Proposer un dessin** comme activité de sculpture : la pratique doit être en trois dimensions.",
              "**Oublier le vocabulaire plastique** (volume, relief, lumière) au profit d'un commentaire vague.",
              "**Plaquer une citation** sans l'expliquer ni la relier au sujet.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 5 — L'art dans la ville (street art)
  // ======================================================================
  {
    slug: "arts-5-l-art-dans-la-ville",
    matiere: "arts-plastiques",
    titre: "Sujet blanc n°5 — L'art dans la ville",
    description:
      "Le street art est-il un art à part entière ? Analyse d'une fresque urbaine et réflexion sur l'art dans l'espace public et son intérêt pédagogique.",
    epreuve: "Seconde épreuve d'admissibilité — Domaine 2 (Arts plastiques)",
    duree: "40 min conseillées",
    totalPoints: 20,
    consignes: [
      "Répondre à chaque question par une réponse courte et structurée (15 lignes maximum).",
      "Barème indicatif, sur 20 points.",
    ],
    sujet: [
      {
        titre: "Arts plastiques — L'art dans l'espace public",
        points: 20,
        blocks: [
          {
            type: "figure",
            illustration: "art-urbain",
            titre: "Document — Une fresque murale",
            legende:
              "Illustration schématique originale (support de réflexion, ne reproduit aucune œuvre existante).",
          },
          {
            type: "questions",
            items: [
              {
                num: "a.",
                text: "Le street art (art urbain) peut-il être considéré comme un art à part entière ? Argumentez à partir de la description et de vos connaissances.",
                points: 10,
              },
              {
                num: "b.",
                text: "En quoi l'art présent dans l'espace public change-t-il le rapport du spectateur à l'œuvre ? Comment exploiter cette question avec une classe (par exemple lors d'une sortie) ?",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Question", "Compétences évaluées", "Points"],
      lignes: [
        ["a.", "Statut du street art, arguments, culture artistique", "10"],
        ["b.", "Art et espace public + exploitation pédagogique", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une réflexion nuancée sur le statut de l'art urbain (arguments pour, objections, dépassement) et, pour la question b, une exploitation concrète (sortie, observation, pratique).",
    correction: [
      {
        titre: "Arts plastiques — L'art dans l'espace public",
        points: 20,
        blocks: [
          {
            type: "p",
            text: "**a. Le street art est-il un art à part entière ?**",
          },
          {
            type: "intro",
            citation: "L'art est fait pour troubler, la science rassure.",
            auteur: "Georges Braque (1882-1963), Le Jour et la Nuit",
            paragraphs: [
              "Le peintre Georges Braque souligne que l'art n'a pas pour fonction de conforter, mais d'interroger, de déranger nos habitudes de regard.",
              "Cette idée éclaire le débat sur le street art : longtemps jugé illégitime, il bouscule les frontières de l'art. La question est donc de savoir à quelles conditions il peut être reconnu comme un art à part entière.",
            ],
          },
          {
            type: "p",
            text: "**Arguments en faveur :** le street art suppose des choix plastiques (composition, couleurs, formes, techniques comme le pochoir ou la fresque), porte un message et s'adresse à un public ; certains artistes sont aujourd'hui exposés en musée. **Objection :** son caractère parfois illégal, éphémère ou commercial a fait douter de son statut. **Dépassement :** ce qui fait l'art n'est pas le lieu (rue ou musée) mais l'intention créatrice et la puissance de l'œuvre. Le street art peut donc pleinement être un art, tout en gardant sa spécificité (lien au lieu, à l'éphémère).",
          },
          {
            type: "qa",
            num: "b.",
            points: 10,
            question: "Art dans l'espace public et exploitation en classe.",
            reponse: [
              "Dans l'espace public, l'œuvre s'impose à tous, gratuitement, hors du cadre du musée : le spectateur la rencontre par hasard, dans son quotidien. Elle dialogue avec le lieu (le mur, la ville), peut être monumentale, et n'est pas « protégée » (elle vieillit, disparaît). Le rapport devient plus direct, parfois participatif.",
              "En classe : organiser une **sortie** pour observer des œuvres de la commune (fresques, sculptures, monuments), faire décrire et photographier, puis proposer une pratique (concevoir une fresque collective sur un thème, sur grand format). On relie observation du réel, culture artistique et pratique.",
            ],
            attendu:
              "Montrer la spécificité de l'art public (accessibilité, lien au lieu, éphémère) ET proposer une sortie/pratique concrète.",
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Construire une réponse nuancée",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Problématiser** une question de type « est-ce un art ? » : arguments pour, objections, puis dépassement (ne pas se contenter d'un avis tranché).",
              "**Appuyer chaque idée** sur la description fournie et sur des connaissances (techniques, exemples de pratiques).",
              "**Introduire** brièvement avant de développer (une citation d'artiste bien choisie enrichit).",
              "**Ancrer la pédagogie dans le réel** : sortie, observation du patrimoine local, pratique en lien.",
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
              "**Donner un avis tranché sans nuance** (« oui/non ») au lieu d'argumenter et de dépasser la question.",
              "**Confondre street art et simple dégradation** : l'analyse doit porter sur les choix plastiques et l'intention.",
              "**Proposer une sortie sans exploitation** (observer sans décrire, sans pratique de retour).",
              "**Citer un artiste de façon inexacte** ou sans lien avec le propos.",
            ],
          },
        ],
      },
    ],
  },
];
