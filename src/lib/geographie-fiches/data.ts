/**
 * Fiches de GÉOGRAPHIE (12 fiches, CRPE — notions jusqu'au cycle 4)
 * ----------------------------------------------------------------
 * Thèmes : Habiter & se déplacer · La France & ses territoires ·
 * Mondialisation & échanges · Environnement & développement durable.
 * Contenus vérifiés (repères et données conformes aux programmes).
 */
import type { GeoFiche } from "./types";

export const GEO_FICHES: GeoFiche[] = [
  // ============ THÈME 1 — HABITER & SE DÉPLACER ============
  {
    slug: "la-metropolisation",
    theme: "habiter",
    numero: 1,
    titre: "La métropolisation",
    intro:
      "Partout dans le monde, les grandes villes concentrent de plus en plus d'habitants, d'activités et de pouvoirs.",
    definition:
      "La métropolisation est le processus de **concentration** des populations, des activités économiques et des fonctions de commandement dans les grandes villes, appelées **métropoles**.",
    sections: [
      {
        titre: "Comment se manifeste-t-elle ?",
        groupes: [
          {
            points: [
              "Concentration des **habitants**, des emplois qualifiés et des services.",
              "**Fonctions de commandement** : sièges d'entreprises, universités, pouvoirs politiques.",
              "**Étalement urbain** : la ville s'étend sur ses périphéries.",
              "Connexion aux **réseaux mondiaux** (transports, numérique).",
            ],
          },
        ],
      },
      {
        titre: "Des espaces urbains organisés",
        groupes: [
          {
            points: [
              "**Centre-ville** : commerces, services, patrimoine.",
              "**Banlieues** et périphéries : logements, zones d'activités.",
              "**Espaces périurbains** : entre ville et campagne (pavillons, navettes).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Paris, première métropole française, concentre les sièges sociaux et les grandes institutions.",
      "Lyon, Marseille, Lille, Bordeaux : des métropoles régionales attractives.",
      "À l'échelle mondiale, Tokyo, New York et Londres sont des **villes mondiales**.",
    ],
    vocabulaire: [
      { terme: "Métropole", sens: "grande ville concentrant population et fonctions de commandement." },
      { terme: "Aire urbaine (ou aire d'attraction)", sens: "ville + espaces dont les habitants travaillent dans la ville." },
      { terme: "Périurbain", sens: "espace autour de la ville, entre l'urbain et le rural." },
      { terme: "Étalement urbain", sens: "extension de la ville sur les espaces voisins." },
    ],
    retenir: [
      "Métropolisation = concentration dans les grandes villes.",
      "Les métropoles commandent l'économie et sont reliées au monde.",
      "La ville s'étend : centre, banlieues, espace périurbain.",
      "Paris domine, mais les métropoles régionales se renforcent.",
    ],
  },
  {
    slug: "les-espaces-ruraux",
    theme: "habiter",
    numero: 2,
    titre: "Les espaces ruraux et périurbains",
    intro:
      "Les campagnes ne sont pas figées : elles se transforment, notamment sous l'influence des villes.",
    definition:
      "Les **espaces ruraux** sont les campagnes, caractérisées par une **faible densité** de population ; ils se transforment sous l'influence des villes (**périurbanisation**).",
    sections: [
      {
        titre: "Des campagnes variées",
        groupes: [
          {
            points: [
              "**Espaces agricoles** productifs (grandes cultures, élevage).",
              "**Campagnes touristiques** (montagne, littoral, patrimoine).",
              "**Espaces ruraux isolés**, parfois en déclin (dépeuplement, services éloignés).",
            ],
          },
        ],
      },
      {
        titre: "Sous l'influence des villes",
        groupes: [
          {
            points: [
              "**Périurbanisation** : des citadins s'installent dans les campagnes proches.",
              "**Mobilités pendulaires** : navettes quotidiennes domicile-travail.",
              "Cohabitation entre agriculteurs, néo-ruraux et résidents secondaires.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Les villages proches des métropoles gagnent des habitants (maisons individuelles).",
      "Certaines zones de montagne ou du centre de la France perdent des habitants.",
      "L'agriculture française reste l'une des premières d'Europe.",
    ],
    vocabulaire: [
      { terme: "Densité", sens: "nombre d'habitants par km²." },
      { terme: "Périurbanisation", sens: "installation d'urbains dans les campagnes proches." },
      { terme: "Mobilités pendulaires", sens: "déplacements réguliers domicile-travail." },
      { terme: "Néo-ruraux", sens: "nouveaux habitants venus de la ville." },
    ],
    retenir: [
      "Les espaces ruraux sont variés (agricoles, touristiques, isolés).",
      "La périurbanisation rapproche ville et campagne.",
      "Les mobilités pendulaires structurent le quotidien.",
      "Certaines campagnes se dépeuplent, d'autres attirent des habitants.",
    ],
  },
  {
    slug: "se-deplacer-mobilites-et-reseaux",
    theme: "habiter",
    numero: 3,
    titre: "Se déplacer : mobilités et réseaux",
    intro:
      "Se déplacer est un besoin quotidien : les réseaux de transport relient les territoires et organisent l'espace.",
    definition:
      "Les **mobilités** sont les déplacements des personnes. Les **réseaux de transport** (routes, voies ferrées, lignes aériennes) relient les lieux et structurent le territoire.",
    sections: [
      {
        titre: "Des mobilités multiples",
        groupes: [
          {
            points: [
              "Mobilités **quotidiennes** (travail, école, achats).",
              "Mobilités de **loisirs** et de **tourisme**.",
              "**Migrations** : changer de lieu de vie.",
            ],
          },
        ],
      },
      {
        titre: "Des réseaux hiérarchisés",
        groupes: [
          {
            points: [
              "**Routes** et autoroutes : majoritaires en France.",
              "**Trains** (TGV) reliant les grandes métropoles.",
              "**Aéroports** et **ports** pour les échanges longue distance.",
              "Enjeux : **désenclaver** les territoires et **limiter la pollution**.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Le réseau TGV met Lyon à environ 2 h de Paris.",
      "Les embouteillages quotidiens autour des métropoles.",
      "Le développement du vélo et des transports en commun en ville.",
    ],
    vocabulaire: [
      { terme: "Réseau", sens: "ensemble de lignes reliant des lieux." },
      { terme: "Nœud (hub)", sens: "point de connexion majeur (gare, aéroport)." },
      { terme: "Désenclavement", sens: "fait de mieux relier un territoire isolé." },
      { terme: "Mobilité", sens: "déplacement des personnes." },
    ],
    retenir: [
      "Se déplacer = besoin quotidien et enjeu majeur.",
      "Les réseaux relient et hiérarchisent les territoires.",
      "La route domine ; le TGV relie les métropoles.",
      "Enjeux : désenclaver et réduire la pollution.",
    ],
  },

  // ============ THÈME 2 — LA FRANCE & SES TERRITOIRES ============
  {
    slug: "l-amenagement-du-territoire",
    theme: "france",
    numero: 4,
    titre: "L'aménagement du territoire français",
    intro:
      "Comment organiser l'espace pour que tous les territoires soient attractifs et bien reliés ?",
    definition:
      "L'**aménagement du territoire** regroupe les actions de l'État et des collectivités pour **organiser l'espace** et **réduire les inégalités** entre les territoires.",
    sections: [
      {
        titre: "Pourquoi aménager ?",
        groupes: [
          {
            points: [
              "Réduire les **inégalités** (villes/campagnes, centres/périphéries).",
              "Rendre les territoires **attractifs** (emplois, services).",
              "Améliorer les **transports** et l'accès aux services publics.",
            ],
          },
        ],
      },
      {
        titre: "Qui aménage ?",
        groupes: [
          {
            points: [
              "L'**État** : grandes infrastructures, politiques nationales.",
              "Les **collectivités territoriales** : communes, départements, régions.",
              "L'**Union européenne** : fonds pour soutenir les régions.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "La construction de lignes TGV pour relier les régions.",
      "Les aides aux zones rurales ou aux quartiers en difficulté.",
      "Les métropoles concentrent les moyens : la question de l'équilibre se pose.",
    ],
    vocabulaire: [
      { terme: "Aménagement", sens: "organiser et équiper un territoire." },
      { terme: "Collectivités territoriales", sens: "commune, département, région." },
      { terme: "Inégalités territoriales", sens: "différences de richesse ou de services entre territoires." },
    ],
    retenir: [
      "Aménager = organiser l'espace et réduire les inégalités.",
      "Acteurs : État, collectivités, Union européenne.",
      "Objectif : des territoires attractifs et mieux reliés.",
      "Un enjeu : l'équilibre entre les métropoles et les autres territoires.",
    ],
  },
  {
    slug: "la-france-ultramarine",
    theme: "france",
    numero: 5,
    titre: "La France ultramarine (les Outre-mer)",
    intro:
      "La France ne se limite pas à l'Hexagone : elle est présente dans plusieurs océans du globe.",
    definition:
      "La **France ultramarine** (ou Outre-mer) regroupe les territoires français situés **hors du continent européen**, répartis dans plusieurs océans.",
    sections: [
      {
        titre: "Des territoires lointains et divers",
        groupes: [
          {
            points: [
              "Les **5 DROM** : **Guadeloupe, Martinique, Guyane, La Réunion, Mayotte**.",
              "D'autres territoires (COM) : Polynésie française, Nouvelle-Calédonie…",
              "Des milieux souvent **tropicaux** et **insulaires**.",
            ],
          },
        ],
      },
      {
        titre: "Atouts et contraintes",
        groupes: [
          {
            titre: "Des atouts",
            points: [
              "Biodiversité, tourisme, vaste **domaine maritime** (ZEE).",
              "Une population souvent jeune.",
            ],
          },
          {
            titre: "Des contraintes",
            points: [
              "**Éloignement** de la métropole.",
              "Risques naturels (cyclones, volcans), coût de la vie élevé.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "La Guyane accueille le centre spatial de Kourou.",
      "La Réunion et la Martinique vivent notamment du tourisme.",
      "Grâce aux Outre-mer, la France possède la 2ᵉ **ZEE** du monde.",
    ],
    vocabulaire: [
      { terme: "DROM", sens: "département et région d'outre-mer." },
      { terme: "ZEE", sens: "zone économique exclusive : espace maritime d'un État." },
      { terme: "Insulaire", sens: "situé sur une île." },
      { terme: "Ultramarin", sens: "d'outre-mer." },
    ],
    retenir: [
      "5 DROM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte.",
      "Des territoires lointains, souvent insulaires et tropicaux.",
      "Atouts : biodiversité, tourisme, immense domaine maritime.",
      "Contraintes : éloignement, risques, cherté de la vie.",
    ],
  },
  {
    slug: "la-france-dans-l-union-europeenne",
    theme: "france",
    numero: 6,
    titre: "La France dans l'Union européenne",
    intro:
      "La France est un pays central de la construction européenne, dont elle est membre depuis l'origine.",
    definition:
      "La France est l'un des **membres fondateurs** de la construction européenne et un pays central de l'**Union européenne (UE)**.",
    sections: [
      {
        titre: "La France, un membre moteur",
        groupes: [
          {
            points: [
              "Membre **fondateur** (CECA 1951, CEE 1957).",
              "Utilise l'**euro**, la monnaie unique.",
              "Située dans l'espace **Schengen** (libre circulation).",
            ],
          },
        ],
      },
      {
        titre: "L'Union européenne aujourd'hui",
        groupes: [
          {
            points: [
              "**27 États membres** (après le départ du Royaume-Uni en 2020).",
              "Un **marché unique** et des politiques communes.",
              "Des frontières ouvertes entre la plupart des pays membres.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "On circule sans contrôle entre la France et l'Allemagne (Schengen).",
      "On paie en euros dans une vingtaine de pays de l'UE.",
      "L'UE finance des projets dans les régions françaises.",
    ],
    vocabulaire: [
      { terme: "Union européenne", sens: "association de 27 États européens." },
      { terme: "Euro", sens: "monnaie commune à une partie des pays de l'UE." },
      { terme: "Espace Schengen", sens: "zone de libre circulation des personnes." },
      { terme: "Marché unique", sens: "libre circulation des biens, services, capitaux et personnes." },
    ],
    retenir: [
      "La France est membre fondateur de l'UE.",
      "L'UE compte 27 États depuis le Brexit (2020).",
      "Euro + Schengen + marché unique.",
      "La France est un pays central de l'Union.",
    ],
  },

  // ============ THÈME 3 — MONDIALISATION & ÉCHANGES ============
  {
    slug: "la-mondialisation",
    theme: "mondialisation",
    numero: 7,
    titre: "La mondialisation : flux et acteurs",
    intro:
      "Le monde est de plus en plus connecté : marchandises, informations et personnes circulent partout.",
    definition:
      "La **mondialisation** est la mise en relation des différentes parties du monde par des **flux** (marchandises, capitaux, informations, personnes) de plus en plus intenses.",
    sections: [
      {
        titre: "Des flux nombreux",
        groupes: [
          {
            points: [
              "Flux de **marchandises** (commerce mondial, conteneurs).",
              "Flux de **capitaux** (investissements, argent).",
              "Flux d'**informations** (Internet).",
              "Flux de **personnes** (migrations, tourisme).",
            ],
          },
        ],
      },
      {
        titre: "Des acteurs variés",
        groupes: [
          {
            points: [
              "Les **firmes transnationales (FTN)**, présentes dans plusieurs pays.",
              "Les **États** et les organisations internationales.",
              "Les grandes **métropoles** et les grands **ports** mondiaux.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Un smartphone est conçu, fabriqué et assemblé dans plusieurs pays.",
      "Les grands ports (Shanghai, Rotterdam) font transiter les marchandises.",
      "Internet permet des échanges instantanés à l'échelle mondiale.",
    ],
    vocabulaire: [
      { terme: "Mondialisation", sens: "mise en relation des territoires du monde." },
      { terme: "Flux", sens: "circulation (de marchandises, personnes, informations…)." },
      { terme: "FTN", sens: "firme transnationale, présente dans plusieurs pays." },
      { terme: "Conteneur", sens: "caisse standardisée pour transporter les marchandises." },
    ],
    retenir: [
      "Mondialisation = monde de plus en plus connecté.",
      "4 grands flux : marchandises, capitaux, informations, personnes.",
      "Acteurs : FTN, États, métropoles et ports.",
      "Elle rapproche les territoires mais crée des inégalités.",
    ],
  },
  {
    slug: "les-inegalites-de-developpement",
    theme: "mondialisation",
    numero: 8,
    titre: "Les inégalités de développement",
    intro:
      "Tous les pays ne se développent pas au même rythme : le monde reste très inégal.",
    definition:
      "Le **développement** mesure la capacité d'un pays à satisfaire les besoins de sa population. Il est **très inégal** dans le monde.",
    sections: [
      {
        titre: "Mesurer le développement",
        groupes: [
          {
            points: [
              "Le **PIB** mesure la richesse produite dans un pays.",
              "L'**IDH** combine **richesse, santé et éducation**.",
              "L'IDH varie de 0 à 1 : plus il est proche de 1, plus le pays est développé.",
            ],
          },
        ],
      },
      {
        titre: "Un monde inégal",
        groupes: [
          {
            points: [
              "Des pays **développés** (« Nord ») et des pays **en développement** (« Sud »).",
              "Des inégalités **entre** les pays et **à l'intérieur** de chaque pays.",
              "Des **pays émergents** (Chine, Inde, Brésil) en forte croissance.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "La Norvège a l'un des IDH les plus élevés ; certains pays d'Afrique, parmi les plus faibles.",
      "La Chine est devenue une grande puissance économique.",
      "Dans une même ville, quartiers riches et pauvres peuvent coexister.",
    ],
    vocabulaire: [
      { terme: "Développement", sens: "capacité à satisfaire les besoins de la population." },
      { terme: "IDH", sens: "indice de développement humain (richesse, santé, éducation)." },
      { terme: "PIB", sens: "richesse produite dans un pays." },
      { terme: "Pays émergent", sens: "pays à forte croissance, en cours de développement." },
    ],
    retenir: [
      "Le développement est inégal dans le monde.",
      "IDH = richesse + santé + éducation (de 0 à 1).",
      "Opposition « Nord » (développé) / « Sud » (en développement).",
      "Les pays émergents bouleversent la hiérarchie mondiale.",
    ],
  },

  // ======= THÈME 4 — ENVIRONNEMENT & DÉVELOPPEMENT DURABLE =======
  {
    slug: "le-developpement-durable",
    theme: "environnement",
    numero: 9,
    titre: "Le développement durable",
    intro:
      "Comment se développer aujourd'hui sans compromettre l'avenir de la planète et des générations futures ?",
    definition:
      "Le **développement durable** est un développement qui **répond aux besoins du présent sans compromettre** ceux des générations futures.",
    sections: [
      {
        titre: "Trois piliers à concilier",
        groupes: [
          {
            points: [
              "**Économique** : produire et créer des richesses.",
              "**Social** : répondre aux besoins de tous (santé, éducation, égalité).",
              "**Environnemental** : protéger la planète et les ressources.",
            ],
          },
        ],
      },
      {
        titre: "Agir à toutes les échelles",
        groupes: [
          {
            points: [
              "À l'échelle **mondiale** : les 17 **Objectifs de développement durable (ODD)** de l'ONU (2015).",
              "À l'échelle **locale** : tri des déchets, transports doux, énergies renouvelables.",
              "Chacun peut agir par ses **gestes quotidiens**.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Trier ses déchets et limiter le gaspillage.",
      "Construire des bâtiments économes en énergie.",
      "Développer les énergies renouvelables (solaire, éolien).",
    ],
    vocabulaire: [
      { terme: "Développement durable", sens: "concilier économie, société et environnement." },
      { terme: "Générations futures", sens: "celles qui vivront après nous." },
      { terme: "ODD", sens: "17 objectifs de développement durable de l'ONU (2015)." },
      { terme: "Ressource renouvelable", sens: "ressource qui se reconstitue naturellement." },
    ],
    retenir: [
      "DD = besoins du présent sans nuire aux générations futures.",
      "3 piliers : économique, social, environnemental.",
      "17 ODD de l'ONU (2015).",
      "On agit à toutes les échelles, du mondial au quotidien.",
    ],
  },
  {
    slug: "les-risques-majeurs",
    theme: "environnement",
    numero: 10,
    titre: "Les risques majeurs",
    intro:
      "Séismes, inondations, accidents industriels… les sociétés doivent apprendre à vivre avec les risques.",
    definition:
      "Un **risque** est la possibilité qu'un **aléa** (phénomène dangereux) touche des populations ou des biens (les **enjeux**).",
    sections: [
      {
        titre: "Deux grands types de risques",
        groupes: [
          {
            points: [
              "**Risques naturels** : séismes, éruptions, inondations, cyclones, tempêtes.",
              "**Risques technologiques** : accidents industriels ou nucléaires, transport de matières dangereuses.",
            ],
          },
        ],
      },
      {
        titre: "Prévenir et se protéger",
        groupes: [
          {
            points: [
              "**Prévention** : informer, surveiller, construire des ouvrages.",
              "**Protection** : plans de secours, exercices, systèmes d'alerte.",
              "La **vulnérabilité** dépend aussi du niveau de développement.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Les cyclones touchent régulièrement les Antilles françaises.",
      "L'inondation est le premier risque naturel en France.",
      "Le Japon, très exposé aux séismes, est particulièrement préparé.",
    ],
    vocabulaire: [
      { terme: "Aléa", sens: "phénomène dangereux (séisme, crue…)." },
      { terme: "Enjeu", sens: "ce qui peut être touché (population, biens)." },
      { terme: "Risque", sens: "aléa + enjeux exposés." },
      { terme: "Vulnérabilité", sens: "fragilité face à un aléa." },
    ],
    retenir: [
      "Risque = aléa + enjeux exposés.",
      "Deux types : naturels et technologiques.",
      "On agit par la prévention et la protection.",
      "La vulnérabilité dépend du niveau de développement.",
    ],
  },
  {
    slug: "le-changement-climatique",
    theme: "environnement",
    numero: 11,
    titre: "Le changement climatique",
    intro:
      "Le climat de la Terre se réchauffe rapidement, principalement à cause des activités humaines.",
    definition:
      "Le **changement climatique** est le **réchauffement global** du climat de la Terre, largement dû aux **activités humaines** qui émettent des gaz à effet de serre.",
    sections: [
      {
        titre: "Causes et mécanismes",
        groupes: [
          {
            points: [
              "Émission de **gaz à effet de serre** (CO₂, méthane) par les énergies fossiles, l'industrie et les transports.",
              "Renforcement de l'**effet de serre** → hausse des températures.",
            ],
          },
        ],
      },
      {
        titre: "Des conséquences mondiales",
        groupes: [
          {
            points: [
              "Fonte des **glaciers** et de la banquise, hausse du **niveau des mers**.",
              "Événements extrêmes plus fréquents (canicules, sécheresses, tempêtes).",
              "Menaces sur la biodiversité et sur certaines populations.",
            ],
          },
        ],
      },
    ],
    exemples: [
      "La fonte des glaciers de montagne est visible en quelques décennies.",
      "L'**accord de Paris** (2015) vise à limiter le réchauffement.",
      "Réduire ses trajets en voiture ou en avion diminue les émissions.",
    ],
    vocabulaire: [
      { terme: "Gaz à effet de serre", sens: "gaz qui retiennent la chaleur (CO₂, méthane…)." },
      { terme: "Effet de serre", sens: "phénomène naturel réchauffant la Terre, amplifié par l'homme." },
      { terme: "Énergie fossile", sens: "charbon, pétrole, gaz (émettent du CO₂)." },
      { terme: "Accord de Paris", sens: "accord mondial de 2015 sur le climat." },
    ],
    retenir: [
      "Le climat se réchauffe à cause des activités humaines.",
      "Cause : gaz à effet de serre (énergies fossiles).",
      "Conséquences : fonte des glaces, montée des mers, extrêmes.",
      "Agir : réduire les émissions (accord de Paris, 2015).",
    ],
  },
  {
    slug: "gerer-les-ressources",
    theme: "environnement",
    numero: 12,
    titre: "Gérer les ressources (eau, énergie)",
    intro:
      "L'eau et l'énergie sont indispensables mais inégalement réparties et parfois limitées.",
    definition:
      "Les **ressources** (eau, énergies, matières premières) sont **inégalement réparties** et parfois **limitées** : il faut les gérer durablement.",
    sections: [
      {
        titre: "L'eau, une ressource vitale",
        groupes: [
          {
            points: [
              "Ressource **inégalement répartie** et parfois rare (**stress hydrique**).",
              "Usages : boisson, **agriculture** (le plus gros consommateur), industrie.",
              "Enjeux : **économiser** et **partager** l'eau.",
            ],
          },
        ],
      },
      {
        titre: "L'énergie",
        groupes: [
          {
            points: [
              "Énergies **fossiles** (limitées, polluantes) vs **renouvelables**.",
              "Enjeu : la **transition énergétique** vers des énergies propres.",
              "Réduire la consommation (**sobriété**, efficacité).",
            ],
          },
        ],
      },
    ],
    exemples: [
      "Certaines régions manquent d'eau une partie de l'année.",
      "Le développement de l'éolien et du solaire en France.",
      "Les gestes d'économie d'eau et d'énergie au quotidien.",
    ],
    vocabulaire: [
      { terme: "Ressource", sens: "élément utile prélevé dans la nature." },
      { terme: "Stress hydrique", sens: "manque d'eau par rapport aux besoins." },
      { terme: "Transition énergétique", sens: "passage vers des énergies renouvelables." },
      { terme: "Sobriété", sens: "réduire sa consommation." },
    ],
    retenir: [
      "Les ressources sont inégalement réparties et limitées.",
      "L'eau est vitale : l'agriculture en consomme le plus.",
      "Passer des fossiles aux renouvelables (transition).",
      "Économiser et partager : une gestion durable.",
    ],
  },
];
