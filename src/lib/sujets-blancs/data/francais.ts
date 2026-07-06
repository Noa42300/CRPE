/**
 * SUJETS BLANCS — FRANÇAIS (Première épreuve d'admissibilité, Partie A)
 * --------------------------------------------------------------------
 * Structure calquée sur l'épreuve officielle :
 *   A.1 étude de la langue (6 pts) · A.2 lexique (4 pts) · A.3 rédaction (10 pts)
 * Les textes support sont des pastiches ORIGINAUX (style XIXe/XXe siècle),
 * rédigés spécialement pour ces sujets blancs : aucun emprunt aux sujets
 * officiels.
 */
import type { SujetBlanc } from "../types";

export const FRANCAIS_SUJETS: SujetBlanc[] = [
  // ======================================================================
  // SUJET 1 — Le portrait de la grand-mère
  // ======================================================================
  {
    slug: "francais-1-la-lampe-du-soir",
    matiere: "francais",
    titre: "Sujet blanc n°1 — La lampe du soir",
    description:
      "Étude de la langue, lexique et rédaction autour d'un portrait touchant. Un sujet complet de français dans les conditions de la première épreuve.",
    epreuve: "Première épreuve d'admissibilité — Partie A (Français)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "Cette partie est indépendante de la partie mathématiques.",
      "Le barème est indicatif et établi sur 20 points.",
      "Il sera tenu compte de la correction de la langue et de la clarté de la rédaction.",
    ],
    sujet: [
      {
        titre: "Texte support",
        blocks: [
          {
            type: "document",
            titre: "Texte (378 mots)",
            source: "Texte original, composé pour ce sujet blanc.",
            lines: [
              "Quand le soir tombait sur la maison, ma grand-mère allumait la lampe à pétrole qu'elle posait au milieu de la table, et aussitôt la cuisine entière semblait se resserrer autour de cette petite flamme tremblante. Elle s'asseyait, prenait son ouvrage, et ses mains, que le travail avait rendues rugueuses, se remettaient à courir sur la laine avec une adresse que je regardais sans me lasser.",
              "Elle ne parlait guère. Mais lorsqu'elle levait les yeux vers moi, je comprenais qu'elle m'avait deviné, que rien de mes chagrins d'enfant ne lui échappait, et qu'elle attendait seulement que je vinsse les lui confier. « Approche-toi donc, disait-elle enfin, tu vois bien que tu meurs d'envie de parler. » Alors je m'asseyais contre elle, et je lui racontais tout ce qui, la veille encore, m'avait paru si grave.",
              "Elle écoutait sans m'interrompre, hochant la tête de temps en temps, et quand j'avais fini, elle trouvait toujours la parole juste, celle qui apaise et qui console. Il me semblait qu'aucune peine ne pouvait résister à sa voix tranquille. Je ne savais pas encore que les vieilles personnes, si patientes avec les enfants, portent souvent en elles des tristesses qu'elles taisent.",
              "Un soir, comme la pluie battait les vitres, je lui demandai si elle avait eu peur, autrefois, lorsqu'elle était petite. Elle sourit, reposa son tricot, et regarda longtemps la flamme. « J'ai eu peur bien des fois, me répondit-elle ; mais on apprend à ne plus le montrer, et c'est peut-être cela, grandir. » Je n'osai rien ajouter. Dehors, le vent redoublait, et la lampe, par instants, vacillait comme si elle allait s'éteindre.",
              "Aujourd'hui que la maison est vendue et que la lampe dort au fond d'un grenier, il me suffit de fermer les yeux pour revoir ce visage penché sur l'ouvrage, et pour entendre, dans le silence, cette voix qui savait tout guérir.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Réécrivez la première phrase du texte (« Quand le soir tombait… je regardais sans me lasser. ») en remplaçant « ma grand-mère » par « mes grands-mères ». Effectuez toutes les modifications nécessaires.",
                points: 2,
              },
              {
                num: "2.",
                text: "Dans la phrase « Alors je m'asseyais contre elle, et je lui racontais tout ce qui m'avait paru si grave », donnez la nature (classe grammaticale) et la fonction des mots soulignés : **elle**, **lui**, **ce qui**.",
                points: 2,
              },
              {
                num: "3.a.",
                text: "Relevez, dans le quatrième paragraphe (« Un soir… allait s'éteindre »), une proposition subordonnée circonstancielle et précisez la circonstance qu'elle exprime.",
                points: 1,
              },
              {
                num: "3.b.",
                text: "Analysez la proposition « comme si elle allait s'éteindre » : nature et fonction.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.a.",
                text: "Analysez la formation du mot « rugueuses » (2ᵉ paragraphe) : identifiez le radical et le suffixe, et donnez le sens apporté par ce suffixe.",
                points: 1.5,
              },
              {
                num: "1.b.",
                text: "Donnez deux mots de la même famille que « consoler » (verbe « console », 3ᵉ paragraphe), en précisant leur classe grammaticale.",
                points: 1,
              },
              {
                num: "2.",
                text: "Étudiez le champ lexical qui caractérise la grand-mère dans l'ensemble du texte. Relevez au moins quatre termes et montrez quelle image du personnage ils construisent.",
                points: 1.5,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Consigne de rédaction",
            lines: [
              "En quoi ce souvenir d'enfance montre-t-il que la transmission entre générations ne passe pas seulement par les mots, mais aussi par des gestes et des présences ?",
              "Votre réponse prendra la forme d'un développement structuré et argumenté d'une trentaine de lignes, prenant appui sur le texte et sur votre culture personnelle.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["A.1", "Réécriture, classes et fonctions, analyse de la phrase complexe", "6"],
        ["A.2", "Formation des mots, familles lexicales, champ lexical", "4"],
        ["A.3", "Réflexion argumentée, structure, langue et orthographe", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une maîtrise sûre de la langue (terminologie grammaticale exacte, justifications) et, pour la rédaction, un raisonnement organisé qui s'appuie sur des relevés précis plutôt qu'une paraphrase du texte.",
    correction: [
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Réécriture au pluriel (« ma grand-mère » → « mes grands-mères »).",
            reponse: [
              "**« Quand le soir tombait sur la maison, mes grands-mères allumaient la lampe à pétrole qu'elles posaient au milieu de la table, et aussitôt la cuisine entière semblait se resserrer autour de cette petite flamme tremblante. Elles s'asseyaient, prenaient leur ouvrage, et leurs mains, que le travail avait rendues rugueuses, se remettaient à courir sur la laine avec une adresse que je regardais sans me lasser. »**",
              "Modifications attendues : les verbes dont le sujet est le groupe « grands-mères » passent au pluriel (allumaient, posaient, s'asseyaient, prenaient, se remettaient) ; les pronoms et déterminants qui les reprennent s'accordent (elles, leur ouvrage, leurs mains). Attention : « semblait » a pour sujet « la cuisine » (singulier) et ne change pas ; « le travail avait rendues » garde son sujet singulier.",
            ],
            attendu:
              "L'accord de « rendues » (participe passé avec avoir, COD « mains » placé avant) reste au féminin pluriel dans les deux versions : ce n'est pas un point à modifier, mais toute erreur y est sanctionnée.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Nature et fonction de « elle », « lui », « ce qui ».",
            reponse: [
              "**elle** : pronom personnel (3ᵉ pers. du singulier, féminin), ici complément introduit par la préposition « contre » → complément circonstanciel de lieu du verbe « m'asseyais » (ou complément de « contre »).",
              "**lui** : pronom personnel (3ᵉ pers. du singulier), fonction complément d'objet second (COS) du verbe « racontais » (je racontais quelque chose à elle).",
              "**ce qui** : pronom relatif composé, il introduit la proposition subordonnée relative « qui m'avait paru si grave » et reprend l'antécédent indéfini « tout » ; « ce qui » est sujet du verbe « avait paru ».",
            ],
            attendu:
              "On valorise la distinction COD/COS et l'identification de « ce qui » comme relatif (et non interrogatif), en lien avec son antécédent.",
          },
          {
            type: "qa",
            num: "3.a.",
            points: 1,
            question: "Une subordonnée circonstancielle du 4ᵉ paragraphe.",
            reponse: [
              "« comme la pluie battait les vitres » est une proposition subordonnée conjonctive circonstancielle de temps (introduite par « comme » au sens de « alors que »), complément circonstanciel de la phrase.",
              "On accepte aussi « lorsqu'elle était petite » (circonstancielle de temps).",
            ],
          },
          {
            type: "qa",
            num: "3.b.",
            points: 1,
            question: "Analyse de « comme si elle allait s'éteindre ».",
            reponse: [
              "Nature : proposition subordonnée conjonctive circonstancielle de comparaison (locution « comme si »), exprimant une hypothèse comparative.",
              "Fonction : complément circonstanciel de manière/comparaison se rapportant au verbe « vacillait ».",
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.a.",
            points: 1.5,
            question: "Formation de « rugueuses ».",
            reponse: [
              "Radical : « rugu- » (du latin *ruga*, « ride, pli »), présent dans « rugueux, rugosité ».",
              "Suffixe : « -eux / -euse » (adjectival), qui indique la possession d'une qualité, le fait d'« être pourvu de » : ce qui présente des aspérités.",
              "Sens construit : « rugueuses » qualifie des mains rendues rêches, dures par le travail — le suffixe transforme la propriété en adjectif qualificatif.",
            ],
          },
          {
            type: "qa",
            num: "1.b.",
            points: 1,
            question: "Deux mots de la famille de « consoler ».",
            reponse: [
              "Exemples attendus : « consolation » (nom commun), « consolateur / consolatrice » (nom ou adjectif), « inconsolable » (adjectif, avec préfixe privatif *in-*).",
              "Deux réponses correctes, avec la classe grammaticale précisée, suffisent.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Champ lexical caractérisant la grand-mère.",
            reponse: [
              "Relevés possibles : « adresse », « patientes », « voix tranquille », « la parole juste », « qui apaise et qui console », « ce visage penché sur l'ouvrage », « cette voix qui savait tout guérir ».",
              "Ces termes construisent l'image d'un personnage à la fois habile de ses mains, silencieux mais profondément attentif, et rassurant : la grand-mère est associée au calme, à l'écoute et à la consolation. Le lexique du soin et de la douceur oppose sa sérénité aux « chagrins » et « tristesses » évoqués.",
            ],
            attendu:
              "Un champ lexical doit être nommé (soin / douceur / apaisement) ET justifié par des relevés : la simple liste de mots sans interprétation ne suffit pas.",
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Démarche attendue",
            lines: [
              "Introduction : reformuler la question et annoncer un fil directeur (la transmission passe par les gestes, la présence et l'exemple autant que par la parole).",
              "Développement structuré (2 à 3 idées), chacune appuyée sur le texte ET sur un exemple personnel ou culturel.",
              "Conclusion : bilan nuancé, éventuellement ouverture.",
            ],
          },
          {
            type: "list",
            ordered: false,
            items: [
              "**Idée 1 — Les gestes comme langage.** L'allumage de la lampe, le tricot, les mains qui « courent sur la laine » installent un rituel rassurant : l'enfant apprend par imitation et par la régularité d'une présence, avant même les mots.",
              "**Idée 2 — La présence silencieuse et l'écoute.** La grand-mère « ne parlait guère » mais « devinait » l'enfant : la transmission passe par une disponibilité, un regard, une patience. Le savoir transmis (« on apprend à ne plus le montrer… c'est peut-être cela, grandir ») naît d'un échange incarné, non d'une leçon.",
              "**Idée 3 — La mémoire et l'héritage affectif.** Le dernier paragraphe montre que ce qui reste, une fois la lampe rangée, c'est une empreinte sensible : la transmission se prolonge dans le souvenir. On peut élargir à la transmission des savoir-faire, des langues, des traditions familiales.",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème indicatif : organisation et présence d'une thèse (3 pts) ; exploitation précise du texte (3 pts) ; culture personnelle / exemples (2 pts) ; langue, orthographe et syntaxe (2 pts).",
              "On sanctionne la paraphrase pure et l'absence de plan ; on valorise une écriture personnelle correcte et nuancée.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 2 — L'arrivée en ville
  // ======================================================================
  {
    slug: "francais-2-l-arrivee-en-ville",
    matiere: "francais",
    titre: "Sujet blanc n°2 — L'arrivée en ville",
    description:
      "Un texte descriptif sur le choc de la grande ville au XIXᵉ siècle. Étude de la langue exigeante, travail sur le lexique de la perception et rédaction argumentée.",
    epreuve: "Première épreuve d'admissibilité — Partie A (Français)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "Cette partie est indépendante de la partie mathématiques.",
      "Le barème est indicatif et établi sur 20 points.",
      "La qualité de la langue est prise en compte dans toutes les réponses.",
    ],
    sujet: [
      {
        titre: "Texte support",
        blocks: [
          {
            type: "document",
            titre: "Texte (392 mots)",
            source: "Texte original, composé pour ce sujet blanc (pastiche réaliste).",
            lines: [
              "Lorsque la diligence eut franchi les dernières collines, la ville apparut tout entière au fond de la vallée, et le jeune homme, qui n'avait jamais quitté son village, sentit son cœur battre plus vite. Des milliers de toits se pressaient les uns contre les autres ; des fumées montaient de partout, droites d'abord, puis courbées par le vent ; et un bruit sourd, continu, pareil à celui d'une eau lointaine, s'élevait de cette masse confuse.",
              "À mesure que la voiture descendait, ce murmure devenait un vacarme. Des voitures se croisaient, des marchands criaient leurs denrées, des ouvriers passaient en bandes, et le pavé, sous les roues, rendait un fracas assourdissant. Le voyageur, étourdi, ne savait plus où poser les yeux ; tout l'appelait à la fois, tout le repoussait.",
              "Il descendit devant une auberge sombre, sa malle à la main. Autour de lui, personne ne le regardait ; chacun allait à ses affaires, pressé, indifférent, comme si ce nouveau venu n'existait pas. Jamais il ne s'était senti si seul qu'au milieu de cette foule. Dans son village, on connaissait chaque visage ; ici, mille figures inconnues glissaient devant lui sans qu'une seule s'arrêtât.",
              "Il songea un instant à repartir. Mais il pensa à sa mère, qui l'avait embrassé le matin même en lui recommandant le courage, et il serra les dents. « Puisque je suis venu chercher fortune, se dit-il, je resterai, quoi qu'il m'en coûte. » Il poussa la porte de l'auberge, où une odeur de soupe et de fumée le prit à la gorge.",
              "Le lendemain, quand il sortit dans les rues, la ville lui parut moins effrayante. Il commençait déjà, sans le savoir, à devenir l'un de ces passants pressés qu'il avait, la veille, trouvés si durs.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Réécrivez le passage « Il descendit devant une auberge sombre, sa malle à la main. Autour de lui, personne ne le regardait » en mettant les verbes au présent de l'indicatif et en remplaçant « Il » par « Elles ».",
                points: 2,
              },
              {
                num: "2.",
                text: "Dans la phrase « Jamais il ne s'était senti si seul qu'au milieu de cette foule », identifiez et analysez la construction de la comparaison : sur quels mots repose-t-elle ?",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Donnez la nature et la fonction des propositions introduites par « qui » : « qui n'avait jamais quitté son village » (§1) et « qui l'avait embrassé le matin même » (§4).",
                points: 1.5,
              },
              {
                num: "4.",
                text: "« quoi qu'il m'en coûte » : justifiez l'orthographe de « quoi qu' » (en deux mots) et expliquez le sens de la locution.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "« assourdissant » (§2) : analysez la formation du mot (préfixe, radical, suffixe) et donnez le sens de chaque élément.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Relevez le champ lexical du bruit dans les deux premiers paragraphes (au moins quatre termes) et montrez comment il traduit le ressenti du personnage.",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Expliquez le sens de l'expression « chercher fortune » (§4) et proposez une expression synonyme.",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Consigne de rédaction",
            lines: [
              "Ce texte oppose la solitude de l'individu à l'anonymat de la grande ville. En quoi cette expérience du « nouveau venu » garde-t-elle une résonance aujourd'hui, notamment pour un élève qui change d'école ou de pays ?",
              "Rédigez un développement structuré et argumenté d'une trentaine de lignes, appuyé sur le texte et sur votre réflexion personnelle.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["A.1", "Réécriture (temps + accord), comparaison, relatives, orthographe grammaticale", "6"],
        ["A.2", "Dérivation, champ lexical, expression figée", "4"],
        ["A.3", "Argumentation structurée, appui sur le texte, ouverture", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "Sujet plus exigeant : la réécriture combine changement de temps et changement de personne (donc double vigilance sur les accords). On attend en A.3 un vrai transfert (l'expérience de l'exil / du changement d'école) et non un résumé du texte.",
    correction: [
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Réécriture au présent + « Il » → « Elles ».",
            reponse: [
              "**« Elles descendent devant une auberge sombre, leur malle à la main. Autour d'elles, personne ne les regarde. »**",
              "Points de vigilance : « descendit » → « descendent » (3ᵉ pers. pluriel du présent) ; « sa malle » → « leur malle » ; « Autour de lui » → « Autour d'elles » ; « le regardait » → « les regarde » (pronom COD au pluriel + verbe au présent).",
            ],
            attendu:
              "On vérifie à la fois la conjugaison au présent ET la cohérence des reprises pronominales et des déterminants possessifs.",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Construction de la comparaison.",
            reponse: [
              "La comparaison d'inégalité (ici de supériorité dans l'intensité) repose sur le couple corrélatif « si … que » : l'adverbe d'intensité « si » porte sur l'adjectif « seul », et « que » introduit le second terme comparé (« qu'au milieu de cette foule »).",
              "L'adverbe « Jamais » renforce l'idée d'un degré extrême, jamais atteint auparavant. La comparaison souligne le paradoxe : c'est entouré (la foule) que le personnage se sent le plus isolé.",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Propositions relatives en « qui ».",
            reponse: [
              "Les deux propositions sont des propositions subordonnées relatives, introduites par le pronom relatif « qui » (sujet du verbe de la subordonnée).",
              "« qui n'avait jamais quitté son village » : antécédent « le jeune homme » ; fonction : complète (épithète) l'antécédent, apporte une information explicative.",
              "« qui l'avait embrassé le matin même » : antécédent « sa mère » ; même fonction (subordonnée relative complément de l'antécédent).",
            ],
          },
          {
            type: "qa",
            num: "4.",
            points: 1,
            question: "Orthographe et sens de « quoi qu'il m'en coûte ».",
            reponse: [
              "On écrit « quoi que » en deux mots car il s'agit de la locution concessive signifiant « quelle que soit la chose qui » : « quoi qu'il m'en coûte » = « quel que soit le prix que cela me coûtera ».",
              "À distinguer de « quoique » en un mot (= « bien que »). Ici, le sens de concession sur une chose (« la chose qu'il m'en coûtera ») impose la graphie en deux mots.",
            ],
            attendu:
              "La justification doit reposer sur le sens (« quelle que soit la chose que… ») et sur l'opposition avec « quoique » = bien que.",
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Formation de « assourdissant ».",
            reponse: [
              "Préfixe « a- » (variante de *ad-*, valeur de mise en état, « rendre ») ; radical « -sourd- » (de l'adjectif « sourd ») ; suffixes « -iss- » (marque du verbe « assourdir », 2ᵉ groupe) et « -ant » (suffixe du participe présent employé comme adjectif).",
              "Sens : « qui rend comme sourd », c'est-à-dire un bruit si fort qu'il empêche d'entendre. Le mot est construit sur le verbe « assourdir ».",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Champ lexical du bruit.",
            reponse: [
              "Relevés : « un bruit sourd, continu », « ce murmure », « un vacarme », « criaient », « un fracas assourdissant », comparaison « pareil à celui d'une eau lointaine ».",
              "La gradation est expressive : on passe du « murmure » lointain au « vacarme » puis au « fracas », ce qui traduit l'agression sonore ressentie par le personnage à mesure qu'il approche. Le bruit devient la métaphore de la ville envahissante et hostile.",
            ],
            attendu:
              "Valoriser l'observation de la gradation (murmure → vacarme → fracas) reliée au ressenti du personnage.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Sens de « chercher fortune ».",
            reponse: [
              "« Chercher fortune » signifie partir tenter sa chance, chercher à réussir socialement et matériellement, souvent loin de chez soi.",
              "Synonymes acceptés : « tenter sa chance », « faire son chemin », « aller gagner sa vie ».",
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "methode",
            titre: "Pistes de développement",
            lines: [
              "Thèse possible : l'anonymat des grands ensembles (ville, école nouvelle, pays étranger) crée une solitude paradoxale que l'on peut, comme le personnage, apprendre à surmonter.",
            ],
          },
          {
            type: "list",
            items: [
              "**Le choc de l'inconnu.** Comme le voyageur « étourdi » qui « ne sait plus où poser les yeux », l'élève qui change d'école affronte des repères perdus, une langue ou des codes nouveaux : parallèle possible avec l'accueil des élèves allophones.",
              "**La solitude au milieu des autres.** « Jamais il ne s'était senti si seul qu'au milieu de cette foule » : on peut développer l'importance du regard d'autrui, du besoin d'être reconnu, et le rôle de l'école dans l'inclusion.",
              "**L'adaptation et l'intégration.** Le dernier paragraphe (« la ville lui parut moins effrayante ») montre que l'accoutumance est possible : évoquer le rôle du temps, de l'entraide, du tutorat entre élèves, pour transformer l'étranger en membre du groupe.",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : thèse et structure (3) ; appui précis sur le texte (3) ; transfert personnel pertinent — exil, changement d'école, accueil (2) ; langue (2).",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 3 — La lettre retrouvée
  // ======================================================================
  {
    slug: "francais-3-la-lettre-retrouvee",
    matiere: "francais",
    titre: "Sujet blanc n°3 — La lettre retrouvée",
    description:
      "Un récit à la première personne mêlant émotion et suspense. Réécriture au passé, analyse du discours rapporté et réflexion sur la mémoire et l'écrit.",
    epreuve: "Première épreuve d'admissibilité — Partie A (Français)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "Cette partie est indépendante de la partie mathématiques.",
      "Le barème est indicatif et établi sur 20 points.",
      "Il sera tenu compte de la clarté et de la correction de la langue.",
    ],
    sujet: [
      {
        titre: "Texte support",
        blocks: [
          {
            type: "document",
            titre: "Texte (369 mots)",
            source: "Texte original, composé pour ce sujet blanc.",
            lines: [
              "Je range rarement le grenier, et c'est peut-être pour cela que j'y fais toujours des découvertes. Ce jour-là, en déplaçant une vieille malle, je vois glisser une enveloppe jaunie qui tombe à mes pieds. Je la ramasse, intrigué. L'adresse, tracée d'une écriture penchée, est celle de la maison de mon enfance ; le timbre remonte à plus de quarante ans.",
              "Je m'assois sur une caisse et j'ouvre la lettre avec précaution, car le papier est si fragile qu'il menace de se déchirer. « Mon cher fils, lis-je, si tu reçois un jour ces lignes, c'est que je n'aurai pas eu le courage de te les dire moi-même. » Je m'arrête, le cœur serré : c'est l'écriture de mon père, mort lorsque j'étais encore un enfant.",
              "Il racontait sa jeunesse, ses regrets, l'amour qu'il n'avait jamais su exprimer. « J'ai toujours pensé, écrivait-il, que j'aurais le temps ; on croit toujours qu'on aura le temps. » Chaque phrase me rapprochait de cet homme que je connaissais si mal, et dont je découvrais soudain la tendresse maladroite.",
              "Quand j'eus fini de lire, il faisait presque nuit. Je restai longtemps immobile, la lettre à la main, écoutant le silence du grenier. Je comprenais enfin que les mots, même écrits trop tard, peuvent encore réparer quelque chose ; que rien de ce qui est dit avec le cœur ne se perd tout à fait.",
              "Je redescendis lentement l'escalier, serrant contre moi ce trésor de papier. Ce soir-là, je pris une feuille et j'écrivis à mon tour, pour mes propres enfants, la lettre que j'aurais voulu recevoir.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Réécrivez le premier paragraphe (« Je range rarement… quarante ans. ») en transposant le récit au passé : imparfait et passé simple selon les cas.",
                points: 2,
              },
              {
                num: "2.",
                text: "Relevez dans le texte un exemple de discours direct et un exemple de discours narrativisé (ou indirect). Justifiez votre classement.",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Dans la phrase « le papier est si fragile qu'il menace de se déchirer », analysez la nature et la fonction de la proposition « qu'il menace de se déchirer ».",
                points: 1.5,
              },
              {
                num: "4.",
                text: "Justifiez l'accord du participe passé dans « Quand j'eus fini de lire ».",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "« maladroite » (§3) : décomposez le mot (préfixe, radical) et expliquez le sens apporté par le préfixe.",
                points: 1.5,
              },
              {
                num: "2.",
                text: "Le mot « trésor » est employé au §5 pour désigner la lettre. Expliquez cet emploi : de quelle figure de style s'agit-il et quel effet produit-elle ?",
                points: 1.5,
              },
              {
                num: "3.",
                text: "Donnez un synonyme et un antonyme de l'adjectif « fragile » (§2).",
                points: 1,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Consigne de rédaction",
            lines: [
              "« Les mots, même écrits trop tard, peuvent encore réparer quelque chose. » En quoi l'écrit garde-t-il un pouvoir particulier que la parole n'a pas toujours ?",
              "Vous répondrez par un développement organisé et argumenté d'une trentaine de lignes, en vous appuyant sur le texte et sur des exemples personnels ou culturels.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["A.1", "Transposition imparfait/passé simple, discours rapporté, subordonnée consécutive, accord", "6"],
        ["A.2", "Dérivation, figure de style, synonyme/antonyme", "4"],
        ["A.3", "Réflexion argumentée sur le pouvoir de l'écrit", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "L'enjeu grammatical central est la distinction imparfait / passé simple (arrière-plan vs premier plan du récit) et l'identification des formes du discours rapporté. La rédaction doit dépasser l'anecdote pour interroger le statut de l'écrit.",
    correction: [
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Transposition du §1 au passé.",
            reponse: [
              "**« Je rangeais rarement le grenier, et c'était peut-être pour cela que j'y faisais toujours des découvertes. Ce jour-là, en déplaçant une vieille malle, je vis glisser une enveloppe jaunie qui tomba à mes pieds. Je la ramassai, intrigué. L'adresse, tracée d'une écriture penchée, était celle de la maison de mon enfance ; le timbre remontait à plus de quarante ans. »**",
              "Justification : les actions ponctuelles de premier plan passent au passé simple (je vis, tomba, je ramassai) ; les descriptions, habitudes et états d'arrière-plan passent à l'imparfait (je rangeais, c'était, je faisais, était, remontait).",
            ],
            attendu:
              "L'essentiel est la cohérence du système imparfait/passé simple, pas seulement des formes justes isolées.",
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Discours direct vs narrativisé.",
            reponse: [
              "Discours direct : « Mon cher fils, lis-je, si tu reçois un jour ces lignes… » (ou « J'ai toujours pensé… ») — reconnaissable aux guillemets, à l'incise (« lis-je », « écrivait-il ») et à la citation littérale des paroles.",
              "Discours narrativisé : « Il racontait sa jeunesse, ses regrets, l'amour qu'il n'avait jamais su exprimer » — les paroles sont résumées, intégrées au récit, sans guillemets ni proposition introductrice de type « que ».",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 1.5,
            question: "Analyse de « qu'il menace de se déchirer ».",
            reponse: [
              "Nature : proposition subordonnée conjonctive circonstancielle de conséquence, introduite par « que » en corrélation avec l'adverbe d'intensité « si » (structure « si … que »).",
              "Fonction : complément circonstanciel de conséquence, se rapportant à l'ensemble « est si fragile ».",
            ],
          },
          {
            type: "qa",
            num: "4.",
            points: 1,
            question: "Accord dans « j'eus fini ».",
            reponse: [
              "« eus fini » est un passé antérieur (auxiliaire « avoir » au passé simple + participe passé « fini »). Le participe passé employé avec « avoir » ne s'accorde pas avec le sujet ; il n'y a pas ici de COD placé avant. « fini » reste donc invariable.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Décomposition de « maladroite ».",
            reponse: [
              "Préfixe « mal- » (valeur négative / défavorable) ; radical « adroit » (lui-même formé de *à* + *droit*, « habile de sa main droite »).",
              "Sens : « maladroit » = qui manque d'adresse, d'aisance. Appliqué à « tendresse maladroite », l'adjectif exprime un amour sincère mais qui ne sait pas bien se montrer.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Le mot « trésor » appliqué à la lettre.",
            reponse: [
              "Il s'agit d'une métaphore : la lettre, objet matériellement modeste (« ce trésor de papier »), est assimilée à un bien précieux.",
              "Effet : la métaphore souligne la valeur affective et non marchande de la lettre ; elle traduit l'émotion du narrateur et confère à cet objet ordinaire une dimension quasi sacrée.",
            ],
            attendu:
              "Nommer la figure (métaphore) ET expliquer l'effet (valorisation affective) ; l'oxymore apparent « trésor de papier » peut être relevé.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Synonyme et antonyme de « fragile ».",
            reponse: [
              "Synonyme : « friable », « délicat », « cassant » (selon le contexte : « friable » convient pour le papier).",
              "Antonyme : « solide », « résistant », « robuste ».",
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "list",
            items: [
              "**L'écrit traverse le temps.** Contrairement à la parole, qui s'efface, la lettre du père parle « plus de quarante ans » après : l'écrit conserve, diffère, permet de dire par-delà l'absence et la mort (penser aux correspondances, journaux intimes, testaments).",
              "**L'écrit permet de dire ce qu'on n'ose pas.** Le père écrit ce qu'il n'a « jamais su exprimer » : la distance de l'écrit autorise l'aveu, la mise en forme d'une émotion difficile. On peut relier au rôle de l'écriture à l'école (cahier, correspondance scolaire, écrits réflexifs).",
              "**Les limites de l'écrit.** Nuance attendue : l'écrit « trop tard » ne remplace pas l'échange vivant ; la parole a l'avantage de l'immédiateté, du dialogue, du corps. Une bonne copie discute la thèse plutôt que de l'illustrer seulement.",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : problématisation et plan (3) ; exploitation du texte (3) ; exemples personnels/culturels et nuance (2) ; langue (2).",
              "On valorise la copie qui met en tension pouvoir et limites de l'écrit, sans se contenter de paraphraser la citation.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 4 — La bibliothèque du grand-père
  // ======================================================================
  {
    slug: "francais-4-la-bibliotheque-du-grand-pere",
    matiere: "francais",
    titre: "Sujet blanc n°4 — La bibliothèque du grand-père",
    description:
      "Un récit d'enfance sur la découverte de la lecture. Étude de la langue, lexique du livre et rédaction argumentée sur la lecture comme évasion et liberté.",
    epreuve: "Première épreuve d'admissibilité — Partie A (Français)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "Cette partie est indépendante de la partie mathématiques.",
      "Le barème est indicatif et établi sur 20 points.",
      "Il sera tenu compte de la correction de la langue et de la clarté de la rédaction.",
    ],
    sujet: [
      {
        titre: "Texte support",
        blocks: [
          {
            type: "document",
            titre: "Texte (362 mots)",
            source: "Texte original, composé pour ce sujet blanc.",
            lines: [
              "Il y avait, tout au fond de la maison de mon grand-père, une pièce où je n'entrais qu'avec respect. On l'appelait la bibliothèque, et ce seul mot suffisait à m'intimider. Des rayonnages de bois sombre montaient jusqu'au plafond, chargés de livres si nombreux que personne, disait-on, ne les avait jamais tous lus.",
              "Quand la pluie m'empêchait de sortir, je m'y réfugiais. Je choisissais un volume au hasard, je l'ouvrais, et aussitôt le monde extérieur cessait d'exister. Les heures passaient sans que je m'en aperçusse ; ma grand-mère devait venir me chercher pour le repas, car j'avais oublié jusqu'à la faim.",
              "Je ne comprenais pas toujours ce que je lisais. Certains mots m'échappaient, certaines phrases restaient obscures ; mais cela ne me décourageait pas. Il me semblait, au contraire, que ces livres gardaient pour plus tard une part de leur secret, et qu'un jour je serais assez grand pour le percer.",
              "Mon grand-père, lui, ne disait rien. Il me regardait lire par-dessus ses lunettes, et je devinais qu'il était heureux. Un soir, il posa la main sur un vieux livre relié de cuir et me dit doucement : « Prends-en soin, il a plus voyagé que moi. » Je ne compris que bien plus tard ce qu'il voulait dire : qu'un livre est une mémoire, et qu'en le lisant, on continue le voyage de tous ceux qui l'ont tenu avant nous.",
              "Aujourd'hui, la bibliothèque n'existe plus, et les livres se sont dispersés. Mais il m'en reste quelques-uns, et lorsque je les ouvre, je retrouve intacte l'odeur du papier et le silence de cette pièce où, enfant, j'ai appris que lire, c'est voyager sans quitter sa chaise.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Réécrivez le passage « Quand la pluie m'empêchait de sortir, je m'y réfugiais. Je choisissais un volume au hasard, je l'ouvrais » en remplaçant « je » par « nous ».",
                points: 2,
              },
              {
                num: "2.",
                text: "Dans la phrase « Des rayonnages de bois **sombre** montaient jusqu'au plafond, **chargés** de livres que personne ne **les** avait tous lus », donnez la nature et la fonction des trois mots en gras.",
                points: 2,
              },
              {
                num: "3.",
                text: "Analysez (nature et fonction) les deux propositions subordonnées : « où je n'entrais qu'avec respect » et « que personne ne les avait jamais tous lus » (dans « si nombreux que… »).",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Analysez la formation du mot « rayonnages » : radical et suffixe, et sens apporté par le suffixe.", points: 1.5 },
              { num: "2.", text: "Relevez le champ lexical du livre et de la lecture dans le texte (au moins quatre termes) et montrez l'importance qu'il donne à cet univers.", points: 1.5 },
              { num: "3.", text: "Expliquez le sens du verbe « percer » dans « je serais assez grand pour le percer » et proposez un synonyme.", points: 1 },
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Consigne de rédaction",
            lines: [
              "En quoi la lecture peut-elle être à la fois une évasion et une source de liberté ?",
              "Votre réponse prendra la forme d'un développement structuré et argumenté d'une trentaine de lignes, appuyé sur le texte et sur votre culture personnelle.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["A.1", "Réécriture, classes et fonctions, analyse des subordonnées", "6"],
        ["A.2", "Formation des mots, champ lexical, sens en contexte", "4"],
        ["A.3", "Réflexion argumentée, structure, langue", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "On attend une terminologie grammaticale exacte et, pour la rédaction, une introduction construite (amorce, éventuelle citation, problématique) avant un développement appuyé sur des relevés précis.",
    correction: [
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Réécriture avec « nous ».",
            reponse: [
              "**« Quand la pluie nous empêchait de sortir, nous nous y réfugiions. Nous choisissions un volume au hasard, nous l'ouvrions. »**",
              "Points de vigilance : « je m'y réfugiais » → « nous nous y réfugiions » (double « nous » : sujet + pronom réfléchi, imparfait en -iions) ; « je choisissais » → « nous choisissions » ; « je l'ouvrais » → « nous l'ouvrions ».",
            ],
            attendu:
              "Le piège est l'imparfait des verbes en -ier/-yer et le « nous nous » réfléchi : deux i à « réfugiions » et « choisissions » prend bien un seul s… attention à l'orthographe verbale.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Nature et fonction de « sombre », « chargés », « les ».",
            reponse: [
              "**sombre** : adjectif qualificatif ; fonction : épithète du nom « bois ».",
              "**chargés** : participe passé employé comme adjectif ; fonction : épithète détachée (apposée) se rapportant à « rayonnages ».",
              "**les** : pronom personnel (3ᵉ pers. pluriel) ; fonction : COD du verbe « avait lus » (et il commande l'accord du participe : « lus »).",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Analyse des deux subordonnées.",
            reponse: [
              "« où je n'entrais qu'avec respect » : proposition subordonnée **relative** (introduite par le pronom relatif « où »), complément de l'antécédent « pièce ».",
              "« que personne ne les avait jamais tous lus » : proposition subordonnée **conjonctive circonstancielle de conséquence** (corrélation « si nombreux… que »), complément circonstanciel de conséquence.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Formation de « rayonnages ».",
            reponse: [
              "Radical : « rayon » ; suffixe : « -age » (ici valeur collective : un ensemble de rayons formant une étagère).",
              "Le suffixe « -age » forme un nom désignant un ensemble ou le résultat d'une action ; « rayonnage » = l'ensemble des rayons d'une bibliothèque.",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Champ lexical du livre et de la lecture.",
            reponse: [
              "Relevés : « bibliothèque », « rayonnages », « livres », « volume », « lire / lisais », « relié de cuir », « papier ».",
              "Ce champ lexical, très présent, fait de la lecture le cœur du texte : l'univers du livre est associé au respect, au secret et au voyage intérieur.",
            ],
            attendu: "Nommer le champ lexical ET l'interpréter (valorisation de la lecture).",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Sens de « percer ».",
            reponse: [
              "« Percer » un secret signifie, au sens figuré, le **découvrir**, l'élucider, le comprendre enfin.",
              "Synonymes : « découvrir », « élucider », « pénétrer ».",
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "intro",
            citation:
              "Je n'ai jamais eu de chagrin qu'une heure de lecture n'ait dissipé.",
            auteur: "Montesquieu (1689-1755), Mes pensées",
            paragraphs: [
              "Montesquieu, écrivain et philosophe des Lumières, reconnaît ici à la lecture un pouvoir de consolation et d'évasion : elle nous arrache à nos soucis.",
              "Cette expérience rejoint celle du narrateur, pour qui « le monde extérieur cessait d'exister » dès qu'il ouvrait un livre. On peut alors se demander en quoi la lecture est à la fois une évasion — une sortie hors du réel — et, paradoxalement, une source de liberté.",
            ],
          },
          {
            type: "list",
            items: [
              "**La lecture comme évasion.** Le livre transporte ailleurs : le narrateur oublie « jusqu'à la faim ». Lire permet de voyager « sans quitter sa chaise », de vivre d'autres vies, d'autres époques. On peut évoquer le roman d'aventures, l'imaginaire, l'évasion hors du quotidien.",
              "**La lecture comme liberté.** Lire, c'est choisir « un volume au hasard », se former un jugement, accéder à des idées : la lecture émancipe. Elle nourrit l'esprit critique et l'autonomie de pensée ; d'où son rôle à l'école et le combat historique pour l'accès de tous à la lecture.",
              "**Une évasion qui n'est pas une fuite.** Le texte suggère que lire relie aux autres (« on continue le voyage de tous ceux qui l'ont tenu avant nous ») : loin d'isoler, la lecture ouvre au monde et à la culture partagée. L'évasion devient ainsi enrichissement.",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : introduction construite avec problématique — la citation, bien intégrée, est valorisée (2) ; exploitation précise du texte (3) ; culture personnelle et exemples (2) ; organisation (1) ; langue et orthographe (2).",
              "La citation n'est jamais obligatoire : elle ne compte que si elle est authentique, bien attribuée et réellement mise au service du propos.",
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — La rédaction de la partie A.3",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Analyser la question** : repérer les mots-clés (ici « évasion » et « liberté ») et le lien à interroger entre eux.",
              "**Construire une introduction** : une amorce (fait, expérience ou citation pertinente), la reformulation de la question, puis l'annonce d'un fil directeur. Ne jamais commencer par la réponse brute.",
              "**Développer en 2 ou 3 parties**, chacune appuyée sur un relevé précis du texte ET un exemple personnel ou culturel.",
              "**Conclure** par un bilan nuancé, éventuellement une ouverture.",
              "**Soigner la langue** : la correction de l'orthographe et de la syntaxe fait partie de la note.",
            ],
          },
          {
            type: "note",
            variant: "methode",
            titre: "Bien utiliser une citation",
            lines: [
              "Une citation n'a de valeur que si elle est authentique, correctement attribuée et expliquée : on dit qui en est l'auteur, ce qu'elle signifie, et pourquoi elle éclaire le sujet.",
              "Mieux vaut aucune citation qu'une citation approximative ou plaquée artificiellement.",
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
              "**Paraphraser le texte** au lieu de l'analyser : le correcteur attend une réflexion, pas un résumé.",
              "**Commencer directement par « oui, la lecture est une évasion »** sans introduction ni problématique.",
              "**Oublier les accords** dans la réécriture (imparfait en -iions, participe passé avec « avoir » et COD antéposé).",
              "**Confondre subordonnée relative et conjonctive** : « où » introduit une relative ; « si… que » introduit une conséquence.",
              "**Citer de mémoire une phrase inexacte** ou mal attribuée : c'est contre-productif.",
            ],
          },
        ],
      },
    ],
  },

  // ======================================================================
  // SUJET 5 — Les mains du potier
  // ======================================================================
  {
    slug: "francais-5-les-mains-du-potier",
    matiere: "francais",
    titre: "Sujet blanc n°5 — Les mains du potier",
    description:
      "Un portrait d'artisan au travail. Étude de la langue, lexique du geste et rédaction sur la valeur du travail manuel et de la transmission d'un savoir-faire.",
    epreuve: "Première épreuve d'admissibilité — Partie A (Français)",
    duree: "2 h conseillées",
    totalPoints: 20,
    consignes: [
      "Cette partie est indépendante de la partie mathématiques.",
      "Le barème est indicatif et établi sur 20 points.",
      "Il sera tenu compte de la clarté et de la correction de la langue.",
    ],
    sujet: [
      {
        titre: "Texte support",
        blocks: [
          {
            type: "document",
            titre: "Texte (368 mots)",
            source: "Texte original, composé pour ce sujet blanc.",
            lines: [
              "Le vieux potier travaillait sans hâte, dans l'atelier que la lumière du matin traversait de part en part. Devant lui, sur le tour qui tournait avec un ronronnement régulier, une boule d'argile informe attendait de prendre vie. Il y posa ses mains, larges et calleuses, et aussitôt la matière parut lui obéir.",
              "Je le regardais faire, fasciné. Ses doigts pressaient, remontaient, creusaient ; le vase naissait sous mes yeux comme s'il avait toujours existé et qu'il suffisait de le révéler. Pas un geste n'était inutile. On sentait que ces mains avaient répété le même mouvement des milliers de fois, jusqu'à ce qu'il devînt aussi naturel que la respiration.",
              "« Ce n'est pas la force qui compte, me dit-il sans lever les yeux, c'est l'écoute. Il faut sentir ce que la terre veut devenir. » Je ne comprenais pas encore ces paroles, mais je devinais qu'elles contenaient toute la sagesse d'un métier appris auprès de son père, qui l'avait lui-même appris du sien.",
              "Quand le vase fut terminé, il l'examina longuement, puis, d'un geste tranquille, l'écrasa. Je poussai un cri. « Il n'était pas juste, dit-il simplement. On ne garde que ce qui est bien fait. » Et il recommença, avec la même patience, comme si le temps n'avait aucune importance.",
              "Je compris ce jour-là que ce vieil homme ne fabriquait pas seulement des objets : il transmettait, sans le dire, une manière d'être au monde — l'exigence, la patience, le respect de la matière. Aujourd'hui encore, chaque fois que je vois un objet fait à la main, je pense à lui, et à ces mains qui savaient écouter la terre.",
            ],
          },
        ],
      },
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "questions",
            items: [
              {
                num: "1.",
                text: "Réécrivez la phrase « Ses doigts pressaient, remontaient, creusaient ; le vase naissait sous mes yeux » au passé composé.",
                points: 2,
              },
              {
                num: "2.",
                text: "Donnez la nature et la fonction des mots en gras : « Il **y** posa ses mains, **larges** et calleuses, et aussitôt la matière parut **lui** obéir. »",
                points: 2,
              },
              {
                num: "3.",
                text: "Analysez la proposition subordonnée « jusqu'à ce qu'il devînt aussi naturel que la respiration » : nature et fonction. Justifiez le mode employé.",
                points: 2,
              },
            ],
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "questions",
            items: [
              { num: "1.", text: "Analysez la formation de l'adjectif « informe » : préfixe et radical, et sens apporté par le préfixe.", points: 1.5 },
              { num: "2.", text: "Relevez le champ lexical du geste et du travail de la main (au moins quatre termes) et montrez ce qu'il révèle du savoir-faire de l'artisan.", points: 1.5 },
              { num: "3.", text: "Donnez un synonyme et un antonyme de l'adjectif « calleuses ».", points: 1 },
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "note",
            variant: "info",
            titre: "Consigne de rédaction",
            lines: [
              "En quoi le travail manuel et la transmission d'un savoir-faire gardent-ils une valeur essentielle dans notre société ?",
              "Votre réponse prendra la forme d'un développement structuré et argumenté d'une trentaine de lignes, appuyé sur le texte et sur votre réflexion personnelle.",
            ],
          },
        ],
      },
    ],
    bareme: {
      entetes: ["Partie", "Compétences évaluées", "Points"],
      lignes: [
        ["A.1", "Transposition au passé composé, classes et fonctions, subjonctif", "6"],
        ["A.2", "Dérivation (préfixe privatif), champ lexical, synonyme/antonyme", "4"],
        ["A.3", "Réflexion argumentée sur le travail manuel et la transmission", "10"],
      ],
      total: "20 points",
    },
    correctionIntro:
      "L'enjeu grammatical central est l'accord du participe passé au passé composé et la justification du subjonctif. La rédaction doit s'ouvrir par une introduction construite et dépasser l'éloge convenu de l'artisanat.",
    correction: [
      {
        titre: "Partie A.1 — Syntaxe, grammaire, orthographe",
        points: 6,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 2,
            question: "Passage au passé composé.",
            reponse: [
              "**« Ses doigts ont pressé, ont remonté, ont creusé ; le vase est né sous mes yeux. »**",
              "Auxiliaire « avoir » pour presser, remonter, creuser (participes en -é, invariables ici car pas de COD antéposé) ; auxiliaire « être » pour « naître » → « est né » (accord avec le sujet « le vase », masculin singulier).",
            ],
            attendu:
              "Choisir le bon auxiliaire (naître se conjugue avec être) et accorder le participe avec le sujet dans ce cas.",
          },
          {
            type: "qa",
            num: "2.",
            points: 2,
            question: "Nature et fonction de « y », « larges », « lui ».",
            reponse: [
              "**y** : pronom personnel adverbial, mis pour « sur la boule d'argile » ; fonction : complément circonstanciel de lieu de « posa ».",
              "**larges** : adjectif qualificatif ; fonction : épithète (détachée) se rapportant à « mains ».",
              "**lui** : pronom personnel (3ᵉ pers. singulier) ; fonction : complément d'objet second / complément du verbe « obéir » (obéir à quelqu'un).",
            ],
          },
          {
            type: "qa",
            num: "3.",
            points: 2,
            question: "Analyse de « jusqu'à ce qu'il devînt… ».",
            reponse: [
              "Nature : proposition subordonnée conjonctive circonstancielle de temps (locution « jusqu'à ce que »).",
              "Fonction : complément circonstanciel de temps.",
              "Mode : le **subjonctif** (« devînt », subjonctif imparfait) est imposé par la locution « jusqu'à ce que », qui exprime un but/une limite temporelle envisagée, non un fait constaté.",
            ],
            attendu: "« jusqu'à ce que » entraîne toujours le subjonctif.",
          },
        ],
      },
      {
        titre: "Partie A.2 — Lexique",
        points: 4,
        blocks: [
          {
            type: "qa",
            num: "1.",
            points: 1.5,
            question: "Formation de « informe ».",
            reponse: [
              "Préfixe « in- » (valeur privative, « sans ») ; radical « -forme » (du latin *forma*).",
              "« Informe » signifie « qui n'a pas de forme définie ». Le préfixe « in- » nie la qualité exprimée par le radical (comme dans « incapable », « invisible »).",
            ],
          },
          {
            type: "qa",
            num: "2.",
            points: 1.5,
            question: "Champ lexical du geste et de la main.",
            reponse: [
              "Relevés : « mains », « doigts », « pressaient », « remontaient », « creusaient », « geste », « fait à la main ».",
              "Ce champ lexical met en valeur la précision et la maîtrise du geste : chaque mouvement est « utile », répété « des milliers de fois » ; il donne à voir un savoir-faire incarné dans le corps.",
            ],
            attendu: "Relier le champ lexical à l'idée de maîtrise et d'expérience du geste.",
          },
          {
            type: "qa",
            num: "3.",
            points: 1,
            question: "Synonyme et antonyme de « calleuses ».",
            reponse: [
              "Synonyme : « rugueuses », « rêches », « durcies ».",
              "Antonyme : « douces », « lisses ».",
            ],
          },
        ],
      },
      {
        titre: "Partie A.3 — Expression écrite",
        points: 10,
        blocks: [
          {
            type: "intro",
            citation: "La main est l'outil des outils.",
            auteur: "Aristote (384-322 av. J.-C.), De l'âme",
            paragraphs: [
              "Aristote, philosophe grec, voit dans la main l'instrument par excellence, celui qui permet à l'homme de fabriquer tous les autres et de transformer le monde.",
              "Cette idée éclaire le texte, où les mains du potier « savent écouter la terre ». À l'heure des machines et du numérique, on peut se demander en quoi le travail manuel et la transmission d'un savoir-faire conservent une valeur essentielle.",
            ],
          },
          {
            type: "list",
            items: [
              "**Le travail manuel, une forme d'intelligence.** Loin d'être une simple exécution, le geste de l'artisan suppose écoute, patience et jugement (« ce n'est pas la force qui compte, c'est l'écoute »). Il engage le corps et l'esprit : on peut évoquer la valeur retrouvée des métiers d'art et de l'artisanat.",
              "**La transmission d'un savoir-faire.** Le potier a appris « de son père, qui l'avait lui-même appris du sien » : ces savoirs se transmettent par l'exemple et la pratique, non par les seuls livres. Cette transmission relie les générations et préserve un patrimoine (compagnonnage, gestes menacés de disparition).",
              "**Une leçon de vie.** En écrasant le vase imparfait, l'artisan enseigne l'exigence et le respect du travail bien fait. Le travail manuel transmet ainsi des valeurs — patience, rigueur, humilité — utiles bien au-delà de l'atelier, y compris à l'école.",
            ],
          },
          {
            type: "note",
            variant: "attendu",
            lines: [
              "Barème : introduction construite et problématisée, citation valorisée si bien intégrée (2) ; exploitation du texte (3) ; culture personnelle et nuance (2) ; organisation (1) ; langue (2).",
            ],
          },
        ],
      },
    ],
    methodologie: [
      {
        titre: "Méthodologie — Analyser le texte avant de rédiger",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Repérer la thèse implicite du texte** (ici : le travail manuel transmet des valeurs) pour ne pas se contenter de le paraphraser.",
              "**Problématiser** : mettre en tension travail manuel et monde moderne (machines, numérique).",
              "**Structurer** : 2 ou 3 idées, chacune reliée à un relevé du texte ET à un exemple extérieur.",
              "**Ouvrir la conclusion** sur l'école ou la société (ce que l'on peut transmettre aux élèves).",
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
              "**Mauvais auxiliaire au passé composé** : « naître » se conjugue avec être (« est né »), pas avec avoir.",
              "**Oublier le subjonctif** après « jusqu'à ce que ».",
              "**Confondre l'antonyme et le synonyme** demandés, ou proposer un mot d'une autre classe grammaticale.",
              "**Réciter un éloge convenu de l'artisanat** sans problématiser ni s'appuyer sur le texte.",
            ],
          },
        ],
      },
    ],
  },
];
