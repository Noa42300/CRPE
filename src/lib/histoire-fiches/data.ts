/**
 * Fiches d'HISTOIRE (18 fiches, niveau 3e / CRPE)
 */
import type { HistoireFiche } from "./types";

export const HISTOIRE_FICHES: HistoireFiche[] = [
  // ================= BLOC 1 — LE MONDE DEPUIS 1945 =================
  {
    slug: "la-guerre-froide",
    bloc: "monde-1945",
    numero: 1,
    titre: "La Guerre froide (1947–1991)",
    intro:
      "Une opposition de plus de 40 ans entre deux superpuissances, sans affrontement militaire direct, mais qui divise le monde en deux blocs.",
    acteurs: ["États-Unis", "URSS", "OTAN", "Pacte de Varsovie"],
    contexte: [
      "Après la Seconde Guerre mondiale, le monde est dominé par **deux superpuissances**.",
      "**États-Unis** → capitalisme et démocratie libérale.",
      "**URSS** → communisme et parti unique.",
    ],
    causes: [
      {
        points: [
          "Désaccords idéologiques (**capitalisme vs communisme**).",
          "Volonté de domination mondiale des deux camps.",
          "Fin de la guerre sans accord durable entre alliés.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Un monde bipolaire",
        points: [
          "**Bloc de l'Ouest** → États-Unis, OTAN.",
          "**Bloc de l'Est** → URSS, Pacte de Varsovie.",
        ],
      },
      {
        titre: "Les crises majeures",
        points: [
          "Berlin : blocus (1948–1949) puis mur de Berlin (1961–1989).",
          "Cuba : crise des missiles (1962), monde au bord de la guerre nucléaire.",
        ],
      },
      {
        titre: "Les formes du conflit",
        points: ["Guerres indirectes (Corée, Vietnam).", "Espionnage et propagande."],
      },
    ],
    consequences: [
      {
        points: [
          "Pas de guerre directe entre USA et URSS.",
          "Course aux armements **nucléaires**.",
          "Tension mondiale permanente.",
        ],
      },
    ],
    flux: {
      causes: ["Idéologies opposées", "Volonté de domination"],
      evenements: ["Monde en 2 blocs", "Berlin, Cuba", "Guerres indirectes"],
      consequences: ["Course aux armements", "Tension permanente"],
    },
    tableau: {
      titre: "Les deux blocs",
      entetes: ["", "Bloc de l'Ouest", "Bloc de l'Est"],
      lignes: [
        ["Chef de file", "États-Unis", "URSS"],
        ["Idéologie", "Capitalisme", "Communisme"],
        ["Alliance militaire", "OTAN", "Pacte de Varsovie"],
      ],
    },
    frise: [
      { date: "1947", label: "Début de la Guerre froide" },
      { date: "1948", label: "Blocus de Berlin" },
      { date: "1961", label: "Construction du mur de Berlin" },
      { date: "1962", label: "Crise des missiles de Cuba" },
      { date: "1989", label: "Chute du mur de Berlin" },
      { date: "1991", label: "Fin de l'URSS" },
    ],
    retenir: [
      "**1947** : début de la Guerre froide.",
      "**1962** : crise de Cuba.",
      "**1989** : chute du mur de Berlin.",
      "**1991** : fin de l'URSS.",
      "Un monde **bipolaire** sans guerre directe.",
    ],
  },
  {
    slug: "onu-maintien-de-la-paix",
    bloc: "monde-1945",
    numero: 2,
    titre: "L'ONU et le maintien de la paix",
    intro:
      "Née des ruines de la Seconde Guerre mondiale, l'Organisation des Nations unies cherche à garantir la paix — avec des moyens réels mais des limites.",
    acteurs: ["ONU", "Conseil de sécurité", "Casques bleus"],
    contexte: ["Créée en **1945**, juste après la Seconde Guerre mondiale."],
    causes: [
      {
        titre: "Objectifs",
        points: [
          "Maintenir la paix dans le monde.",
          "Éviter de nouvelles guerres mondiales.",
          "Défendre les droits humains.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Fonctionnement",
        points: [
          "**Conseil de sécurité** : USA, Russie, Chine, France, Royaume-Uni.",
          "**Casques bleus** : forces de maintien de la paix.",
        ],
      },
    ],
    consequences: [
      {
        titre: "Limites",
        points: [
          "Droit de **veto** des grandes puissances.",
          "Difficultés à intervenir dans certains conflits.",
        ],
      },
    ],
    frise: [{ date: "1945", label: "Création de l'ONU" }],
    retenir: [
      "**1945** : création de l'ONU.",
      "Objectif : la **paix mondiale**.",
      "5 membres permanents avec droit de veto.",
      "Casques bleus = forces de paix.",
    ],
  },
  {
    slug: "la-decolonisation",
    bloc: "monde-1945",
    numero: 3,
    titre: "La décolonisation",
    intro:
      "Après 1945, les peuples colonisés réclament leur indépendance : en quelques décennies, les empires coloniaux européens disparaissent.",
    acteurs: ["Gandhi", "Peuples colonisés", "ONU"],
    contexte: ["Après 1945, les colonies veulent devenir **indépendantes**."],
    causes: [
      {
        points: [
          "Affaiblissement des puissances européennes après la guerre.",
          "Revendications des peuples colonisés.",
          "Soutien de l'ONU au droit des peuples.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Inde",
        points: ["Indépendance en **1947**.", "Rôle de **Gandhi** (non-violence)."],
      },
      {
        titre: "Algérie",
        points: ["Guerre d'indépendance (**1954–1962**).", "Accords d'Évian (1962)."],
      },
      {
        titre: "Afrique",
        points: ["Vagues d'indépendances dans les **années 1960**."],
      },
    ],
    consequences: [
      {
        points: [
          "Naissance de nombreux **nouveaux États**.",
          "Instabilité politique dans certains pays.",
          "Fin des empires coloniaux.",
        ],
      },
    ],
    frise: [
      { date: "1947", label: "Indépendance de l'Inde" },
      { date: "1954", label: "Début de la guerre d'Algérie" },
      { date: "1960", label: "Indépendances africaines" },
      { date: "1962", label: "Indépendance de l'Algérie (accords d'Évian)" },
    ],
    retenir: [
      "**1947** : Inde indépendante.",
      "**1962** : Algérie indépendante.",
      "Années 1960 : indépendances africaines.",
      "Fin des empires coloniaux.",
    ],
  },
  {
    slug: "le-monde-depuis-1991",
    bloc: "monde-1945",
    numero: 4,
    titre: "Le monde depuis 1991",
    intro:
      "La chute de l'URSS met fin à la Guerre froide et ouvre un monde d'abord dominé par les États-Unis, puis plus instable et globalisé.",
    acteurs: ["États-Unis", "Chine", "Inde"],
    contexte: ["Fin de la Guerre froide avec la **chute de l'URSS** (1991)."],
    causes: [
      {
        points: [
          "Crise économique soviétique.",
          "Contestation des régimes communistes.",
          "Chute du mur de Berlin (**1989**).",
        ],
      },
    ],
    evenements: [
      {
        titre: "Un monde qui change",
        points: [
          "Monde **unipolaire** puis **multipolaire**.",
          "Domination des États-Unis (années 1990).",
          "Montée de nouvelles puissances (**Chine, Inde**).",
        ],
      },
      {
        titre: "Nouveaux conflits",
        points: ["Guerres locales.", "Terrorisme international.", "Tensions géopolitiques."],
      },
    ],
    consequences: [
      {
        titre: "Le monde actuel",
        points: [
          "**Mondialisation** et interdépendance des États.",
          "Tensions persistantes.",
        ],
      },
    ],
    frise: [
      { date: "1989", label: "Chute du mur de Berlin" },
      { date: "1991", label: "Fin de l'URSS" },
    ],
    retenir: [
      "**1991** : fin de l'URSS.",
      "Domination américaine dans les années 1990.",
      "Monde plus instable mais **globalisé**.",
      "Montée de la Chine et de l'Inde.",
    ],
  },

  // ================= BLOC 2 — LA FRANCE DEPUIS 1945 =================
  {
    slug: "la-france-en-1945-reconstruction",
    bloc: "france-1945",
    numero: 5,
    titre: "La France en 1945 : la reconstruction",
    intro:
      "Au sortir de la guerre, la France doit tout reconstruire : son économie, ses infrastructures et ses institutions.",
    acteurs: ["Plan Marshall", "Sécurité sociale"],
    contexte: [
      "À la fin de la Seconde Guerre mondiale, la France est :",
      "**détruite**, affaiblie économiquement et politiquement instable.",
    ],
    causes: [
      {
        titre: "Reconstruction économique",
        points: [
          "Reconstruction des villes et des infrastructures.",
          "**Plan Marshall** : aide financière américaine.",
        ],
      },
      {
        titre: "Progrès social",
        points: [
          "Création de la **Sécurité sociale** (1945).",
          "Amélioration des droits sociaux.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Un problème politique",
        points: ["Instabilité gouvernementale.", "Nombreux changements de gouvernements."],
      },
    ],
    consequences: [
      { points: ["Mise en place d'un **nouveau régime politique** (IVe République)."] },
    ],
    frise: [
      { date: "1945", label: "Fin de la guerre + Sécurité sociale" },
      { date: "1947", label: "Plan Marshall (aide américaine)" },
    ],
    retenir: [
      "**1945** : fin de la guerre et reconstruction.",
      "**Plan Marshall** = aide des États-Unis.",
      "Création de la Sécurité sociale.",
      "Instabilité politique → nouveau régime.",
    ],
  },
  {
    slug: "la-quatrieme-republique",
    bloc: "france-1945",
    numero: 6,
    titre: "La IVe République (1946–1958)",
    intro:
      "Un régime parlementaire qui reconstruit le pays mais échoue à gérer les crises coloniales, ouvrant la voie au retour de De Gaulle.",
    acteurs: ["De Gaulle", "Assemblée nationale"],
    contexte: ["Nouveau régime politique mis en place après la guerre."],
    causes: [
      {
        titre: "Fonctionnement",
        points: ["Régime **parlementaire**.", "Assemblée nationale très puissante."],
      },
    ],
    evenements: [
      {
        titre: "Faiblesses",
        points: [
          "Gouvernements **instables**.",
          "Difficulté à gérer les colonies.",
          "Crise politique en Algérie.",
        ],
      },
    ],
    consequences: [{ points: ["Retour de **De Gaulle** au pouvoir en 1958."] }],
    frise: [
      { date: "1946", label: "Début de la IVe République" },
      { date: "1958", label: "Fin de la IVe République" },
    ],
    retenir: [
      "**1946** : début de la IVe République.",
      "**1958** : fin de la IVe République.",
      "Régime parlementaire instable.",
      "La crise algérienne provoque sa chute.",
    ],
  },
  {
    slug: "la-cinquieme-republique",
    bloc: "france-1945",
    numero: 7,
    titre: "La Ve République (depuis 1958)",
    intro:
      "Fondée par De Gaulle pour stabiliser la France, elle renforce le rôle du président et reste le régime actuel.",
    acteurs: ["De Gaulle", "Président de la République"],
    contexte: ["Créée en **1958** pour stabiliser la France."],
    causes: [
      {
        titre: "Le rôle de De Gaulle",
        points: ["Fondateur de la Ve République.", "Renforce le pouvoir du **président**."],
      },
    ],
    evenements: [
      {
        titre: "Institutions",
        points: [
          "Un **président fort**.",
          "Un gouvernement dirigé par le Premier ministre.",
          "Un Parlement (Assemblée + Sénat).",
        ],
      },
    ],
    consequences: [
      {
        titre: "Évolution",
        points: ["Régime **stable**.", "Alternance politique.", "Démocratie moderne."],
      },
    ],
    frise: [{ date: "1958", label: "Début de la Ve République (De Gaulle)" }],
    retenir: [
      "**1958** : début de la Ve République.",
      "Le **président** a un rôle central.",
      "Régime stable, toujours en vigueur.",
    ],
  },
  {
    slug: "les-trente-glorieuses",
    bloc: "france-1945",
    numero: 8,
    titre: "Les Trente Glorieuses (1945–1975)",
    intro:
      "Trente années de forte croissance qui transforment la France en société de consommation moderne.",
    contexte: ["Période de **forte croissance économique** après-guerre."],
    causes: [
      {
        titre: "Caractéristiques",
        points: [
          "Croissance rapide et **plein emploi**.",
          "Industrialisation.",
          "Hausse du niveau de vie.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Transformations sociales",
        points: [
          "**Société de consommation**.",
          "Développement des loisirs.",
          "Urbanisation.",
        ],
      },
    ],
    consequences: [
      { points: ["Fin brutale avec la **crise des années 1970** (chocs pétroliers)."] },
    ],
    frise: [
      { date: "1945", label: "Début des Trente Glorieuses" },
      { date: "1975", label: "Fin (après les chocs pétroliers)" },
    ],
    retenir: [
      "**1945–1975** : croissance forte.",
      "Plein emploi et industrialisation.",
      "Naissance de la société de **consommation**.",
      "Fin avec les chocs pétroliers.",
    ],
  },
  {
    slug: "crise-et-mutations-depuis-1970",
    bloc: "france-1945",
    numero: 9,
    titre: "Crises et mutations depuis 1970",
    intro:
      "Les chocs pétroliers mettent fin à la prospérité : chômage, mondialisation et transformation de la société française.",
    contexte: ["Fin des Trente Glorieuses au milieu des années 1970."],
    causes: [
      {
        points: ["**Chocs pétroliers** (1973, 1979).", "Ralentissement économique."],
      },
    ],
    evenements: [
      {
        points: [
          "Montée du **chômage**.",
          "Transformation de l'industrie.",
          "Accélération de la **mondialisation**.",
        ],
      },
    ],
    consequences: [
      {
        titre: "Évolutions sociales",
        points: [
          "Immigration.",
          "Évolution du monde du travail.",
          "Société plus **tertiarisée** (services).",
        ],
      },
    ],
    frise: [
      { date: "1973", label: "Premier choc pétrolier" },
      { date: "1979", label: "Second choc pétrolier" },
    ],
    retenir: [
      "Années **1970** = crise économique.",
      "Chocs pétroliers 1973 et 1979.",
      "Montée du **chômage**.",
      "Société des services (tertiaire).",
    ],
  },
  {
    slug: "la-france-et-le-monde",
    bloc: "france-1945",
    numero: 10,
    titre: "La France et le monde",
    intro:
      "Puissance moyenne mais influente, la France agit sur la scène mondiale par l'ONU, l'UE, sa force nucléaire et la francophonie.",
    acteurs: ["ONU", "Union européenne", "Francophonie"],
    contexte: ["La France devient une **puissance moyenne mais influente**."],
    causes: [
      {
        titre: "Actions internationales",
        points: [
          "Membre permanent de l'**ONU**.",
          "**Puissance nucléaire**.",
          "Membre de l'**Union européenne**.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Décolonisation",
        points: ["Indépendance des colonies françaises.", "Conflits (Algérie)."],
      },
    ],
    consequences: [
      {
        titre: "Francophonie",
        points: ["Diffusion de la langue française.", "Coopération internationale."],
      },
    ],
    retenir: [
      "France = **puissance moyenne** influente.",
      "Influence via l'**UE** et l'**ONU**.",
      "Puissance nucléaire.",
      "Rôle de la francophonie.",
    ],
  },

  // ================= BLOC 3 — CONSTRUCTION EUROPÉENNE =================
  {
    slug: "la-naissance-de-l-europe-unie",
    bloc: "europe",
    numero: 11,
    titre: "La naissance de l'Europe unie",
    intro:
      "Pour éviter de nouvelles guerres, les pays européens choisissent de coopérer d'abord sur l'économie : la paix par le commerce.",
    acteurs: ["France", "Allemagne", "Italie", "Benelux"],
    contexte: [
      "Après la Seconde Guerre mondiale, les pays européens veulent **éviter de nouveaux conflits**.",
    ],
    causes: [
      {
        points: [
          "Volonté de **paix durable**.",
          "Besoin de reconstruction économique.",
          "Dépasser les rivalités (notamment **France / Allemagne**).",
        ],
      },
    ],
    evenements: [
      {
        titre: "CECA (1951)",
        points: [
          "Communauté Européenne du Charbon et de l'Acier.",
          "France + Allemagne + Italie + Benelux.",
        ],
      },
      {
        titre: "CEE (1957)",
        points: ["Communauté Économique Européenne.", "Création d'un **marché commun**."],
      },
    ],
    consequences: [
      { points: ["Favoriser la coopération économique et la **paix**."] },
    ],
    frise: [
      { date: "1951", label: "CECA (charbon et acier)" },
      { date: "1957", label: "CEE (marché commun)" },
    ],
    retenir: [
      "**1951** : CECA.",
      "**1957** : CEE.",
      "Idée centrale : la **paix par l'économie**.",
      "Moteur : réconciliation France–Allemagne.",
    ],
  },
  {
    slug: "de-la-cee-a-l-union-europeenne",
    bloc: "europe",
    numero: 12,
    titre: "De la CEE à l'Union européenne",
    intro:
      "En 1992, le traité de Maastricht transforme la coopération économique en véritable union politique, avec bientôt une monnaie commune.",
    acteurs: ["Union européenne", "Traité de Maastricht"],
    contexte: ["L'Europe s'élargit et devient plus intégrée."],
    causes: [
      {
        titre: "Étape clé",
        points: ["**1992 : traité de Maastricht** → création de l'Union européenne (UE)."],
      },
      {
        titre: "Élargissements",
        points: ["Nouveaux pays membres.", "Extension progressive de l'Europe."],
      },
    ],
    evenements: [
      {
        titre: "L'euro",
        points: ["Mise en place d'une **monnaie unique**.", "Adoptée par une partie des pays."],
      },
    ],
    consequences: [
      {
        titre: "Objectifs de l'UE",
        points: [
          "**Libre circulation** des personnes, biens et services.",
          "Coopération politique et économique.",
          "Stabilité en Europe.",
        ],
      },
    ],
    frise: [
      { date: "1992", label: "Traité de Maastricht → Union européenne" },
      { date: "2002", label: "Mise en circulation de l'euro" },
    ],
    retenir: [
      "**1992** : UE (traité de Maastricht).",
      "L'**euro** = monnaie unique européenne.",
      "Libre circulation dans l'UE.",
    ],
  },
  {
    slug: "le-fonctionnement-de-l-union-europeenne",
    bloc: "europe",
    numero: 13,
    titre: "Le fonctionnement de l'Union européenne",
    intro:
      "L'UE est une organisation unique : les États acceptent de partager une partie de leur souveraineté à travers des institutions communes.",
    acteurs: ["Commission", "Parlement européen", "Conseil de l'UE"],
    contexte: ["L'UE est une organisation **politique et économique** unique."],
    causes: [
      {
        titre: "Institutions principales",
        points: [
          "**Commission européenne** → propose les lois.",
          "**Parlement européen** → vote les lois.",
          "**Conseil de l'UE** → représente les États.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Principe important",
        points: ["Les États gardent une **partie** de leur souveraineté."],
      },
    ],
    consequences: [
      {
        titre: "Règles communes",
        points: ["Lois européennes.", "Politiques économiques communes.", "Normes communes."],
      },
    ],
    tableau: {
      titre: "Qui fait quoi ?",
      entetes: ["Institution", "Rôle"],
      lignes: [
        ["Commission européenne", "Propose les lois"],
        ["Parlement européen", "Vote les lois"],
        ["Conseil de l'UE", "Représente les États"],
      ],
    },
    retenir: [
      "UE = **institutions partagées**.",
      "Commission propose, Parlement vote.",
      "Décision = **coopération** entre États.",
    ],
  },
  {
    slug: "enjeux-et-limites-de-l-union-europeenne",
    bloc: "europe",
    numero: 14,
    titre: "Les enjeux et limites de l'Union européenne",
    intro:
      "Grande puissance économique, l'UE reste fragile politiquement : le Brexit illustre ses tensions internes.",
    acteurs: ["Royaume-Uni", "UE"],
    contexte: [
      "L'UE est une puissance économique importante mais **incomplète politiquement**.",
    ],
    causes: [
      {
        titre: "Points forts",
        points: [
          "**Marché unique**.",
          "Monnaie commune (**euro**).",
          "Puissance économique mondiale.",
        ],
      },
    ],
    evenements: [
      {
        titre: "Limites",
        points: [
          "**Brexit (2020)** → sortie du Royaume-Uni de l'UE.",
          "Désaccords sur l'immigration, l'économie, la souveraineté.",
        ],
      },
    ],
    consequences: [
      {
        titre: "Difficultés",
        points: ["Décisions parfois **longues**.", "Intérêts différents entre États."],
      },
    ],
    frise: [{ date: "2020", label: "Brexit : sortie du Royaume-Uni" }],
    retenir: [
      "UE = **coopération** mais **tensions** internes.",
      "**Brexit (2020)** = exemple de désunion.",
      "Puissance économique, faiblesse politique.",
    ],
  },

  // ================= BLOC 4 — LES GUERRES MONDIALES =================
  {
    slug: "premiere-guerre-mondiale",
    bloc: "guerres-mondiales",
    numero: 15,
    titre: "La Première Guerre mondiale (1914–1918)",
    intro:
      "Le premier conflit de masse du XXe siècle : quatre années de tranchées, une violence inédite et une Europe bouleversée.",
    acteurs: ["Triple Entente", "Triple Alliance", "Poilus"],
    contexte: [
      "Début du XXe siècle : **tensions fortes** entre les puissances européennes.",
    ],
    causes: [
      {
        points: [
          "Rivalités entre pays européens.",
          "Alliances militaires (**Triple Entente / Triple Alliance**).",
          "Nationalismes.",
          "Élément déclencheur : **attentat de Sarajevo** (1914).",
        ],
      },
    ],
    evenements: [
      {
        titre: "Une guerre de position (1914–1917)",
        points: [
          "**Guerre des tranchées**, conditions très difficiles.",
          "Bataille de **Verdun** (1916).",
        ],
      },
      {
        titre: "Une guerre de mouvement (1914 et 1918)",
        points: ["Offensives rapides au début et à la fin du conflit."],
      },
      {
        titre: "Violence de masse",
        points: ["Souffrance des soldats (**poilus**).", "Bombardements, pertes énormes."],
      },
      {
        titre: "Génocide arménien (1915–1916)",
        points: ["Massacre des Arméniens par l'Empire ottoman."],
      },
    ],
    consequences: [
      {
        points: [
          "**Millions de morts**.",
          "Carte de l'Europe redessinée.",
          "**Traité de Versailles** (1919).",
        ],
      },
    ],
    tableau: {
      titre: "Les deux alliances",
      entetes: ["Triple Entente", "Triple Alliance"],
      lignes: [["France, Royaume-Uni, Russie", "Allemagne, Autriche-Hongrie, Italie"]],
    },
    frise: [
      { date: "1914", label: "Attentat de Sarajevo → début de la guerre" },
      { date: "1915", label: "Génocide arménien" },
      { date: "1916", label: "Bataille de Verdun" },
      { date: "1918", label: "Fin de la guerre" },
      { date: "1919", label: "Traité de Versailles" },
    ],
    retenir: [
      "**1914** : début de la guerre.",
      "**1916** : Verdun.",
      "**1918** : fin de la guerre.",
      "**1915** : génocide arménien.",
      "Guerre des **tranchées**, violence de masse.",
    ],
  },
  {
    slug: "seconde-guerre-mondiale",
    bloc: "guerres-mondiales",
    numero: 16,
    titre: "La Seconde Guerre mondiale (1939–1945)",
    intro:
      "Un conflit total et mondial marqué par la barbarie nazie et la Shoah, qui s'achève par la victoire des Alliés en 1945.",
    acteurs: ["Alliés", "Axe", "Hitler", "Résistance"],
    contexte: ["Montée des **régimes totalitaires** en Europe dans les années 1930."],
    causes: [
      {
        points: [
          "Expansion de l'**Allemagne nazie**.",
          "Traité de Versailles contesté.",
          "**Invasion de la Pologne** (1939).",
        ],
      },
    ],
    evenements: [
      {
        titre: "Axe contre Alliés",
        points: ["**Axe** : Allemagne, Italie, Japon.", "**Alliés** : Royaume-Uni, URSS, USA."],
      },
      {
        titre: "Une guerre totale et mondiale",
        points: ["Combats en Europe, Afrique et Asie."],
      },
      {
        titre: "Le régime nazi",
        points: ["Dictature d'Hitler.", "Propagande et **racisme d'État**."],
      },
      {
        titre: "La Shoah",
        points: [
          "Camps de concentration et d'**extermination**.",
          "Environ **6 millions de Juifs** assassinés.",
        ],
      },
      {
        titre: "La Résistance",
        points: ["Mouvements clandestins en France et en Europe."],
      },
    ],
    consequences: [
      {
        titre: "La fin de la guerre",
        points: [
          "**Débarquement en Normandie** (1944).",
          "Victoire des Alliés (**1945**).",
        ],
      },
    ],
    tableau: {
      titre: "Les deux camps",
      entetes: ["Axe", "Alliés"],
      lignes: [["Allemagne, Italie, Japon", "Royaume-Uni, URSS, États-Unis"]],
    },
    frise: [
      { date: "1939", label: "Invasion de la Pologne → début de la guerre" },
      { date: "1944", label: "Débarquement de Normandie" },
      { date: "1945", label: "Victoire des Alliés → fin de la guerre" },
    ],
    retenir: [
      "**1939** : début de la guerre.",
      "**1944** : débarquement de Normandie.",
      "**1945** : fin de la guerre.",
      "**Shoah** = génocide des Juifs.",
      "Guerre **totale** et mondiale.",
    ],
  },
  {
    slug: "les-regimes-totalitaires",
    bloc: "guerres-mondiales",
    numero: 17,
    titre: "Les régimes totalitaires",
    intro:
      "Entre les deux guerres, des dictatures prennent le contrôle total de la société : nazisme en Allemagne, stalinisme en URSS.",
    acteurs: ["Hitler", "Staline"],
    contexte: ["Entre-deux-guerres : **montée des dictatures**."],
    causes: [
      {
        titre: "Allemagne (Hitler)",
        points: ["**Nazisme**.", "Culte du chef, propagande.", "Répression."],
      },
      {
        titre: "URSS (Staline)",
        points: ["**Communisme autoritaire**.", "Goulag.", "Contrôle total de la société."],
      },
    ],
    evenements: [
      {
        titre: "Points communs",
        points: ["**Parti unique**.", "Absence de libertés.", "Terreur politique."],
      },
    ],
    consequences: [
      {
        points: [
          "Tensions internationales.",
          "Déclenchement de la **Seconde Guerre mondiale**.",
        ],
      },
    ],
    tableau: {
      titre: "Nazisme et stalinisme",
      entetes: ["", "Hitler (Allemagne)", "Staline (URSS)"],
      lignes: [
        ["Idéologie", "Nazisme (racisme)", "Communisme autoritaire"],
        ["Répression", "Camps, police politique", "Goulag"],
        ["Point commun", "Parti unique, terreur", "Parti unique, terreur"],
      ],
    },
    retenir: [
      "**Totalitarisme** = contrôle total de l'État sur la société.",
      "Parti unique, pas de libertés, terreur.",
      "Nazisme (Hitler) et stalinisme (Staline).",
    ],
  },
  {
    slug: "les-memoires-des-guerres",
    bloc: "guerres-mondiales",
    numero: 18,
    titre: "Les mémoires des guerres",
    intro:
      "Comment les sociétés se souviennent des conflits : commémorations, devoir de mémoire et transmission de l'histoire.",
    contexte: ["Après 1945, les sociétés doivent **se souvenir** des guerres."],
    causes: [
      {
        titre: "Mémoire de la Première Guerre mondiale",
        points: ["Monuments aux morts.", "Commémorations du **11 novembre**."],
      },
    ],
    evenements: [
      {
        titre: "Mémoire de la Seconde Guerre mondiale",
        points: [
          "**Devoir de mémoire**.",
          "Procès des criminels de guerre.",
          "Témoignages des survivants.",
        ],
      },
    ],
    consequences: [
      {
        titre: "Enjeux",
        points: [
          "Transmission de l'histoire.",
          "Éviter les oublis.",
          "Reconnaître les crimes.",
        ],
      },
    ],
    retenir: [
      "**Mémoire** = façon dont une société se souvient du passé.",
      "Importance du **devoir de mémoire**.",
      "11 novembre : commémoration de 1918.",
    ],
  },
];
