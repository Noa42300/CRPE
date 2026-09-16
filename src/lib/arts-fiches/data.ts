/**
 * Fiches d'ARTS (CRPE — domaine des arts, épreuve de polyvalence)
 * ---------------------------------------------------------------
 * Thèmes : Thématiques & questionnements 2027 · Vocabulaire & définitions ·
 * Œuvres au programme (« Le paysage en musique »).
 *
 * Contenus vérifiés à partir du programme complémentaire (limitatif) du
 * domaine des arts applicable aux sessions 2027, 2028 et 2029 du CRPE
 * (Bulletin officiel — Éducation nationale).
 */
import type { ArtsFiche } from "./types";

export const ARTS_FICHES: ArtsFiche[] = [
  // ================= THÈME 1 — THÉMATIQUES & QUESTIONNEMENTS =================
  {
    slug: "programme-arts-crpe-2027",
    theme: "thematiques",
    numero: 1,
    titre: "Le programme d'arts au CRPE (2027-2029)",
    intro:
      "Pour l'épreuve de polyvalence, un programme complémentaire limitatif fixe trois questionnements, un par domaine artistique.",
    definition:
      "Le **programme complémentaire d'arts** applicable aux sessions **2027, 2028 et 2029** repose sur **trois questionnements**, un par domaine : **arts plastiques**, **éducation musicale** et **histoire des arts**. Chacun sert de fil conducteur pour analyser des œuvres et construire des situations d'enseignement.",
    sections: [
      {
        titre: "Les trois questionnements",
        groupes: [
          {
            points: [
              "**Arts plastiques** : « **Questionner la ressemblance** » (peinture, sculpture, photographie).",
              "**Éducation musicale** : « **Le paysage en musique** » — trois œuvres de référence (Vivaldi, Smetana, Nougaro).",
              "**Histoire des arts** : « **La représentation de l'être humain** ».",
            ],
          },
        ],
      },
      {
        titre: "Ce que l'épreuve attend",
        groupes: [
          {
            titre: "Trois compétences croisées",
            points: [
              "**Analyser une œuvre** : décrire, interpréter, relier (contexte, autres œuvres).",
              "Mobiliser une **culture artistique** et un **vocabulaire spécifique** juste.",
              "Proposer une **transposition pédagogique** réaliste (rencontre des œuvres + pratique + langage).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Un dossier peut réunir une partie arts plastiques ET une partie éducation musicale (comme dans les sujets blancs du site).",
      "L'histoire des arts irrigue les deux autres domaines : elle situe les œuvres dans le temps et les cultures.",
    ],
    vocabulaire: [
      { terme: "Questionnement", sens: "problématique qui guide l'étude d'un domaine artistique (ex. « questionner la ressemblance »)." },
      { terme: "Programme limitatif", sens: "liste fermée d'œuvres et de notions à connaître pour une session donnée." },
      { terme: "Polyvalence", sens: "épreuve écrite du CRPE couvrant plusieurs domaines, dont les arts." },
    ],
    pieges: [
      {
        erreur: "Réviser « les arts » en général, sans cibler les trois questionnements.",
        pourquoi: "Le programme est limitatif : c'est sur ces trois entrées précises que porte l'épreuve.",
      },
      {
        erreur: "Oublier la transposition pédagogique.",
        pourquoi: "On n'évalue pas seulement la culture, mais aussi la capacité à enseigner (cycle, objectif, pratique).",
      },
    ],
    retenir: [
      "Trois questionnements : ressemblance (arts pla.), paysage en musique (éd. mus.), représentation de l'être humain (histoire des arts).",
      "Programme valable pour 2027, 2028 et 2029.",
      "Analyser + culture/vocabulaire + transposition pédagogique.",
    ],
  },
  {
    slug: "questionner-la-ressemblance",
    theme: "thematiques",
    numero: 2,
    titre: "Questionner la ressemblance (arts plastiques)",
    intro:
      "Une image « ressemble » à ce qu'elle représente… mais jusqu'à quel point ? Et par quels moyens ?",
    definition:
      "**Questionner la ressemblance**, c'est interroger le **rapport entre une image et ce qu'elle représente** (son référent, le réel). La ressemblance n'est pas donnée : elle est **construite** par des procédés plastiques et **interprétée** par le regard.",
    sections: [
      {
        titre: "Des degrés de ressemblance",
        groupes: [
          {
            points: [
              "**Ressemblance mimétique** : l'image imite fidèlement le modèle (portrait « d'après nature »).",
              "**Ressemblance construite** : le visage surgit d'un assemblage (Arcimboldo) ou de quelques touches (la perle de Vermeer).",
              "**Écart et déformation** : le cubisme décompose le visage ; la caricature exagère.",
              "**Abstraction** : l'image ne cherche plus à ressembler à un objet du monde.",
            ],
          },
        ],
      },
      {
        titre: "La photographie, un cas particulier",
        groupes: [
          {
            points: [
              "La photo est une **empreinte** du réel (une trace lumineuse) : elle semble « ressembler » par nature.",
              "Mais le **cadrage**, la **lumière**, le **noir et blanc** ou la retouche **construisent** aussi l'image.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Arcimboldo, L'Été (1573) : un visage composé de fruits et légumes — la ressemblance naît de l'assemblage.",
      "Vermeer, La Jeune Fille à la perle (v.1665) : une « tronie » (étude d'expression), pas le portrait d'une personne identifiée.",
      "Picasso : le portrait cubiste montre plusieurs points de vue à la fois.",
    ],
    vocabulaire: [
      { terme: "Mimésis", sens: "imitation du réel par l'art." },
      { terme: "Référent", sens: "ce que l'image représente (l'objet ou l'être réel)." },
      { terme: "Portrait", sens: "représentation d'une personne identifiée." },
      { terme: "Tronie", sens: "étude de visage et d'expression, sans identité précise (peinture néerlandaise)." },
      { terme: "Figuration / Abstraction", sens: "représenter des choses reconnaissables / ne rien représenter d'identifiable." },
    ],
    pieges: [
      {
        erreur: "Croire que « ressembler » = « copier le réel ».",
        pourquoi: "La ressemblance est un effet produit par des choix plastiques, pas une simple copie.",
      },
      {
        erreur: "Prendre une tronie pour un portrait.",
        pourquoi: "La Jeune Fille à la perle ne représente pas une personne connue : c'est une étude d'expression.",
      },
    ],
    retenir: [
      "La ressemblance se construit (assemblage, lumière, cadrage) et s'interprète.",
      "Du mimétique à l'abstraction, en passant par la déformation.",
      "La photographie « ressemble » mais est aussi construite.",
    ],
  },
  {
    slug: "representation-etre-humain",
    theme: "thematiques",
    numero: 3,
    titre: "La représentation de l'être humain (histoire des arts)",
    intro:
      "Comment les artistes ont-ils figuré le corps et le visage humains, de l'Antiquité à aujourd'hui ?",
    definition:
      "La **représentation de l'être humain** traverse toute l'histoire des arts : chaque époque invente ses **canons** (règles de proportion) et ses manières de figurer le corps, le visage et les émotions — pour imiter, idéaliser, raconter ou exprimer.",
    sections: [
      {
        titre: "Grandes étapes",
        groupes: [
          {
            points: [
              "**Antiquité grecque** : recherche de l'**idéal** et de proportions harmonieuses (le canon ; Polyclète, Praxitèle).",
              "**Moyen Âge** : figure souvent **symbolique et hiératique**, hiérarchie des tailles selon l'importance.",
              "**Renaissance** : **perspective**, étude de l'**anatomie** et du mouvement (Léonard de Vinci, Michel-Ange).",
              "**XIXᵉ siècle** : de l'**académisme** au **réalisme** (représenter les gens ordinaires).",
              "**XXᵉ–XXIᵉ siècles** : **déformation** et expression (Picasso, Modigliani, Bacon), **photographie**, performance et **body art**.",
            ],
          },
        ],
      },
      {
        titre: "Pourquoi représenter l'humain ?",
        groupes: [
          {
            points: [
              "**Honorer / montrer un statut** (portrait d'apparat, sculpture de commande).",
              "**Idéaliser** un corps parfait (Antiquité, Renaissance).",
              "**Exprimer** une émotion, une intériorité (autoportraits de Rembrandt).",
              "**Interroger** l'identité et le corps (art contemporain).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Le Doryphore de Polyclète : le canon des proportions du corps grec.",
      "Léonard de Vinci, L'Homme de Vitruve : le corps inscrit dans le cercle et le carré.",
      "Picasso, Les Demoiselles d'Avignon (1907) : rupture avec la représentation classique.",
    ],
    vocabulaire: [
      { terme: "Canon", sens: "ensemble de règles de proportions idéales du corps." },
      { terme: "Hiératique", sens: "figure rigide, solennelle, peu naturaliste (art médiéval)." },
      { terme: "Anatomie", sens: "étude de la structure du corps, utile au dessin d'après nature." },
      { terme: "Idéalisation", sens: "représenter un corps plus parfait que le réel." },
      { terme: "Autoportrait", sens: "portrait que l'artiste fait de lui-même." },
    ],
    pieges: [
      {
        erreur: "Penser que l'art a toujours cherché le réalisme.",
        pourquoi: "Beaucoup d'époques visent l'idéal, le symbole ou l'expression, pas l'exactitude.",
      },
    ],
    retenir: [
      "Chaque époque a ses canons et ses buts (idéal, symbole, expression).",
      "Antiquité (idéal) → Renaissance (anatomie, perspective) → XXᵉ (déformation, photo).",
      "Représenter l'humain : honorer, idéaliser, exprimer, interroger.",
    ],
  },
  {
    slug: "le-paysage-en-musique",
    theme: "thematiques",
    numero: 4,
    titre: "Le paysage en musique (éducation musicale)",
    intro:
      "Sans images ni paroles obligatoires, la musique parvient pourtant à « peindre » un lieu ou une nature.",
    definition:
      "« **Le paysage en musique** » désigne la manière dont une œuvre **évoque un lieu ou une nature** par des moyens sonores. La musique peut **imiter** (bruits, éléments), **raconter** (parcours, récit) ou **suggérer** une atmosphère et un sentiment.",
    sections: [
      {
        titre: "Comment la musique évoque un paysage",
        groupes: [
          {
            titre: "Des procédés variés",
            points: [
              "**Imitation / figuralisme** : chants d'oiseaux, orage, eau qui coule.",
              "**Timbres** : la couleur des instruments suggère un climat (bois = pastoral, cordes = fluidité).",
              "**Motifs et ostinatos** : une cellule répétée figure le mouvement (vagues, courant).",
              "**Nuances et tempo** : crescendo pour l'orage, calme pour l'aube.",
              "**Forme** : la musique à programme suit un déroulé (une promenade, un cours d'eau).",
            ],
          },
        ],
      },
      {
        titre: "Trois œuvres au programme (2027-2029)",
        groupes: [
          {
            points: [
              "**Vivaldi**, L'Été (1725) : un orage d'été **imité** (baroque).",
              "**Smetana**, La Moldau (1874) : une rivière **racontée** de la source à Prague (romantique).",
              "**Nougaro**, Toulouse (1967) : un paysage **urbain et affectif** porté par le texte (chanson).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Imiter : le tonnerre chez Vivaldi. Raconter : le parcours de la Moldau. Suggérer : l'impression marine chez Debussy (La Mer).",
      "Un même thème, trois époques et trois styles (baroque, romantique, chanson).",
    ],
    vocabulaire: [
      { terme: "Musique à programme", sens: "musique instrumentale qui suit une idée, une histoire ou une image." },
      { terme: "Poème symphonique", sens: "pièce d'orchestre en un mouvement, construite pour raconter ou évoquer." },
      { terme: "Figuralisme", sens: "procédé par lequel la musique imite un bruit ou un mouvement." },
      { terme: "Ostinato", sens: "motif court répété obstinément." },
      { terme: "Nuance", sens: "degré d'intensité sonore (piano, forte, crescendo…)." },
    ],
    pieges: [
      {
        erreur: "Croire que la musique ne fait qu'« imiter des bruits ».",
        pourquoi: "Elle suggère aussi une atmosphère et un sentiment (évocation), au-delà de l'imitation.",
      },
    ],
    retenir: [
      "Trois manières : imiter, raconter, suggérer.",
      "Procédés : imitation, timbre, motif/ostinato, nuance, forme.",
      "Œuvres : Vivaldi (imiter), Smetana (raconter), Nougaro (chanson, texte).",
    ],
  },

  // ===================== THÈME 2 — VOCABULAIRE & DÉFINITIONS =====================
  {
    slug: "vocabulaire-arts-plastiques",
    theme: "vocabulaire",
    numero: 1,
    titre: "Vocabulaire des arts plastiques",
    intro:
      "Les mots justes pour décrire et analyser une image, une peinture ou une sculpture.",
    definition:
      "Analyser une œuvre plastique suppose un **vocabulaire spécifique** : on décrit d'abord ce que l'on voit (composition, couleur, matière…), puis on interprète les effets produits.",
    sections: [
      {
        titre: "Composer et cadrer",
        groupes: [
          {
            points: [
              "**Composition** : organisation des éléments dans l'espace de l'œuvre.",
              "**Cadrage** : ce qui est montré et ce qui est coupé (gros plan, plan large).",
              "**Format** : dimensions et orientation (portrait / paysage) du support.",
              "**Lignes de force** : directions qui guident le regard (diagonales, verticales).",
              "**Premier plan / arrière-plan** : profondeur, souvent créée par la **perspective**.",
            ],
          },
        ],
      },
      {
        titre: "Couleur, lumière, matière",
        groupes: [
          {
            points: [
              "**Couleurs primaires** (rouge, jaune, bleu) / **secondaires** (orange, vert, violet).",
              "**Valeur** : degré de clair ou de sombre d'une couleur.",
              "**Contraste** et **camaïeu** (nuances d'une même couleur).",
              "**Clair-obscur** : forts contrasts d'ombre et de lumière.",
              "**Matière** et **touche** : aspect de la surface, trace du geste ; **médium** (huile, aquarelle…) et **support** (toile, papier).",
            ],
          },
        ],
      },
      {
        titre: "Techniques et genres",
        groupes: [
          {
            points: [
              "**Techniques** : dessin, peinture, collage, photomontage, sculpture, gravure, modelage.",
              "**Genres** : portrait, autoportrait, paysage, nature morte, scène de genre.",
              "**Figuration / abstraction** : représenter des choses reconnaissables ou non.",
            ],
          },
        ],
      },
    ],
    vocabulaire: [
      { terme: "Composition", sens: "manière d'organiser les éléments dans l'œuvre." },
      { terme: "Valeur", sens: "degré de clair/sombre d'une couleur." },
      { terme: "Clair-obscur", sens: "opposition marquée entre zones éclairées et zones d'ombre." },
      { terme: "Médium", sens: "matériau ou technique employé (huile, gouache, fusain…)." },
      { terme: "Support", sens: "surface sur laquelle on travaille (toile, papier, bois)." },
      { terme: "Nature morte", sens: "représentation d'objets inanimés (fruits, vaisselle…)." },
    ],
    pieges: [
      {
        erreur: "Confondre teinte et valeur.",
        pourquoi: "La teinte est la couleur (rouge, bleu…) ; la valeur est son degré de clair/sombre.",
      },
      {
        erreur: "Décrire sans interpréter.",
        pourquoi: "Le vocabulaire sert à expliquer un effet (le clair-obscur crée du drame), pas seulement à nommer.",
      },
    ],
    retenir: [
      "Composer/cadrer : composition, cadrage, format, lignes de force.",
      "Couleur : primaires/secondaires, valeur, contraste, clair-obscur.",
      "Matière : touche, médium, support ; genres : portrait, paysage, nature morte.",
    ],
  },
  {
    slug: "vocabulaire-education-musicale",
    theme: "vocabulaire",
    numero: 2,
    titre: "Vocabulaire de l'éducation musicale",
    intro:
      "Les paramètres du son et les mots pour décrire une écoute avec précision.",
    definition:
      "Décrire une musique, c'est mobiliser les **paramètres du son** (hauteur, durée, intensité, timbre) et le vocabulaire de l'organisation musicale (rythme, mélodie, tempo, nuance, forme).",
    sections: [
      {
        titre: "Les quatre paramètres du son",
        groupes: [
          {
            points: [
              "**Hauteur** : grave ou aigu (les notes).",
              "**Durée** : longueur des sons (courts / longs), à la base du **rythme**.",
              "**Intensité** : fort ou doux (les **nuances**).",
              "**Timbre** : la « couleur » du son, propre à chaque instrument ou voix.",
            ],
          },
        ],
      },
      {
        titre: "Organiser les sons",
        groupes: [
          {
            points: [
              "**Mélodie** : succession de notes formant une ligne reconnaissable.",
              "**Rythme** et **pulsation** ; **tempo** : vitesse (lent, modéré, rapide).",
              "**Harmonie** : sons joués ensemble (accords).",
              "**Nuances** : piano (doux), forte (fort), crescendo (de plus en plus fort).",
              "**Forme** : plan de l'œuvre (couplet-refrain, thème et variations, mouvements).",
            ],
          },
        ],
      },
      {
        titre: "Voix et instruments",
        groupes: [
          {
            points: [
              "**Familles d'instruments** : cordes, bois, cuivres, percussions.",
              "**Voix** : de l'aigu au grave (soprano, alto, ténor, basse).",
              "**A cappella** : chant sans accompagnement ; **orchestre** : grand ensemble instrumental.",
            ],
          },
        ],
      },
    ],
    vocabulaire: [
      { terme: "Hauteur", sens: "caractère grave ou aigu d'un son." },
      { terme: "Timbre", sens: "couleur sonore qui distingue les instruments et les voix." },
      { terme: "Tempo", sens: "vitesse d'exécution de la musique." },
      { terme: "Nuance", sens: "degré d'intensité (piano, forte, crescendo…)." },
      { terme: "Ostinato", sens: "motif court répété." },
      { terme: "A cappella", sens: "chant sans accompagnement instrumental." },
    ],
    pieges: [
      {
        erreur: "Confondre rythme et tempo.",
        pourquoi: "Le rythme est l'organisation des durées ; le tempo est la vitesse générale.",
      },
      {
        erreur: "Confondre hauteur et intensité.",
        pourquoi: "Aigu/grave ≠ fort/doux : un son grave peut être fort, un son aigu peut être doux.",
      },
    ],
    retenir: [
      "Quatre paramètres : hauteur, durée, intensité, timbre.",
      "Organisation : mélodie, rythme, tempo, harmonie, nuances, forme.",
      "Familles : cordes, bois, cuivres, percussions ; voix de l'aigu au grave.",
    ],
  },

  // ===================== THÈME 3 — ŒUVRES AU PROGRAMME =====================
  {
    slug: "vivaldi-lete-quatre-saisons",
    theme: "oeuvres",
    numero: 1,
    titre: "Vivaldi — L'Été (Les Quatre Saisons, 1725)",
    intro:
      "Un orage d'été « peint » par la musique baroque, guidé par un poème.",
    definition:
      "L'Été est le **deuxième concerto** des **Quatre Saisons** d'Antonio **Vivaldi** (publiées en **1725**). Chaque concerto est accompagné d'un **sonnet** : la musique **illustre** le texte. Le **3ᵉ mouvement** (Presto) dépeint un violent **orage d'été**.",
    sections: [
      {
        titre: "Repères",
        groupes: [
          {
            points: [
              "**Compositeur** : Antonio Vivaldi (Venise, baroque).",
              "**Œuvre** : L'Été (« L'estate »), Concerto en sol mineur, RV 315, 3ᵉ mouvement.",
              "**Effectif** : **violon solo** + orchestre à cordes et **basse continue**.",
              "**Forme** : le **concerto** oppose le soliste et l'orchestre (forme à **ritournelle**).",
            ],
          },
        ],
      },
      {
        titre: "Comment la musique peint l'orage",
        groupes: [
          {
            points: [
              "**Figuralisme** : traits rapides et répétés pour la pluie, roulements pour le tonnerre.",
              "**Tempo** vif (Presto) et **nuances** contrastées : la tension monte.",
              "Le **violon solo** représente les éléments déchaînés face à l'orchestre.",
              "La musique suit le **sonnet** : c'est déjà une musique **à programme**.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "À rapprocher de « L'orage » de la Symphonie Pastorale de Beethoven : deux façons de figurer une tempête.",
      "En classe : repérer les moments de calme et de tempête, lever la main quand l'orage éclate.",
    ],
    vocabulaire: [
      { terme: "Concerto", sens: "œuvre opposant un soliste (ici le violon) à l'orchestre." },
      { terme: "Basse continue", sens: "accompagnement grave et harmonique typique du baroque." },
      { terme: "Ritournelle", sens: "thème d'orchestre qui revient entre les passages du soliste." },
      { terme: "Presto", sens: "tempo très rapide." },
    ],
    pieges: [
      {
        erreur: "Croire que « Les Quatre Saisons » est une seule pièce.",
        pourquoi: "Ce sont quatre concertos distincts ; au programme, c'est L'Été (3ᵉ mouvement).",
      },
    ],
    retenir: [
      "Vivaldi, L'Été (1725), baroque : violon solo + cordes + basse continue.",
      "Le 3ᵉ mouvement imite un orage d'été (figuralisme).",
      "Musique à programme guidée par un sonnet.",
    ],
  },
  {
    slug: "smetana-la-moldau",
    theme: "oeuvres",
    numero: 2,
    titre: "Smetana — La Moldau (1874)",
    intro:
      "Un poème symphonique qui suit une rivière, de sa source jusqu'à Prague.",
    definition:
      "La Moldau (Vltava) est un **poème symphonique** de Bedřich **Smetana** (**1874**), 2ᵉ des six poèmes du cycle Ma patrie (Má vlast). La musique **raconte le parcours** de la rivière Moldau à travers les paysages de **Bohême**.",
    sections: [
      {
        titre: "Repères",
        groupes: [
          {
            points: [
              "**Compositeur** : Bedřich Smetana (Bohême, romantisme, musique **nationale** tchèque).",
              "**Œuvre** : La Moldau, extrait de Ma patrie (cycle de 6 poèmes symphoniques).",
              "**Genre** : **poème symphonique** (orchestre, musique à programme).",
            ],
          },
        ],
      },
      {
        titre: "Un voyage raconté en musique",
        groupes: [
          {
            titre: "Les étapes du parcours",
            points: [
              "Les **deux sources** (flûtes puis clarinettes) qui se rejoignent.",
              "Le **grand thème** de la rivière, mélodie ample et reconnaissable.",
              "Une **chasse** en forêt (cors), une **noce paysanne** (danse).",
              "Le **clair de lune** (nymphes des eaux), puis les **rapides** de Saint-Jean.",
              "La rivière **élargie** passe fièrement devant Prague (thème triomphal).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Le thème de la Moldau revient transformé : c'est un fil conducteur (comme un personnage).",
      "En classe : suivre le « voyage » et associer chaque épisode à un moment de la rivière.",
    ],
    vocabulaire: [
      { terme: "Poème symphonique", sens: "pièce d'orchestre en un mouvement qui raconte ou évoque." },
      { terme: "Thème", sens: "mélodie principale, reconnaissable et souvent réutilisée." },
      { terme: "Musique nationale", sens: "musique qui met en valeur l'identité d'un pays (ici la Bohême)." },
    ],
    pieges: [
      {
        erreur: "Dire que la Moldau « imite » seulement des bruits.",
        pourquoi: "Elle raconte surtout un parcours : c'est un récit musical, pas un simple bruitage.",
      },
    ],
    retenir: [
      "Smetana, La Moldau (1874), poème symphonique romantique.",
      "La musique raconte le cours d'une rivière, de la source à Prague.",
      "Un grand thème récurrent guide l'auditeur.",
    ],
  },
  {
    slug: "nougaro-toulouse",
    theme: "oeuvres",
    numero: 3,
    titre: "Nougaro — Toulouse (1967)",
    intro:
      "Une chanson-hommage où un paysage urbain naît des mots et de la musique.",
    definition:
      "Toulouse est une **chanson** de Claude **Nougaro** (**1967**). L'artiste y dresse le **portrait sensible de sa ville natale** : le paysage est ici **urbain et affectif**, évoqué autant par le **texte** que par la musique.",
    sections: [
      {
        titre: "Repères",
        groupes: [
          {
            points: [
              "**Auteur-interprète** : Claude Nougaro, né à Toulouse.",
              "**Genre** : **chanson française** (voix soliste + orchestre).",
              "**Thème** : l'attachement à une ville (« la ville rose »), la mémoire et l'enfance.",
            ],
          },
        ],
      },
      {
        titre: "Un paysage par les mots et la musique",
        groupes: [
          {
            points: [
              "Le **texte** (les paroles) décrit et fait ressentir la ville : c'est le cœur de l'évocation.",
              "La **voix** de Nougaro, proche du parlé-chanté, porte l'émotion.",
              "L'**orchestration** soutient le récit et crée l'atmosphère.",
              "Le paysage est **affectif** : la ville est liée à des souvenirs.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "À comparer avec Vivaldi et Smetana : ici, pas de nature « imitée », mais un lieu porté par le texte.",
      "En classe : repérer les mots qui « peignent » la ville, puis écrire un court texte sur son propre lieu.",
    ],
    vocabulaire: [
      { terme: "Chanson", sens: "œuvre brève mêlant un texte chanté et une musique." },
      { terme: "Parlé-chanté", sens: "manière d'interpréter entre la parole et le chant." },
      { terme: "Paysage urbain", sens: "paysage d'une ville (par opposition au paysage naturel)." },
    ],
    pieges: [
      {
        erreur: "Chercher une « imitation » sonore de la ville.",
        pourquoi: "Ici le paysage passe surtout par les paroles et l'émotion, pas par le figuralisme.",
      },
    ],
    retenir: [
      "Nougaro, Toulouse (1967), chanson française.",
      "Un paysage urbain et affectif, porté par le texte.",
      "Contraste avec Vivaldi (imiter) et Smetana (raconter).",
    ],
  },
];
