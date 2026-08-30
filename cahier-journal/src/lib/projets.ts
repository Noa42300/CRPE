/**
 * Projet annuel « Autour du monde » — CE1/CE2
 * -------------------------------------------
 * Un continent par période, un pays par lundi. Pour chaque pays : une énigme
 * d'accroche, une fiche géographie (carte + habitants), la vie quotidienne, un
 * monument, une référence vidéo, une « carte d'identité » à remplir et une
 * dictée différenciée CE1 / CE2.
 *
 * Contenu pédagogique bâti pour un TBI / vidéoprojecteur. Aucune donnée élève.
 * Les références vidéo sont des SUGGESTIONS de recherche : à prévisualiser
 * avant la classe (les liens exacts changent souvent).
 */

export interface PaysVideo {
  titre: string;
  source: string;
  /** Requête à taper sur YouTube / le moteur de recherche. */
  recherche: string;
}
export interface PaysDictee {
  ce1: string;
  ce2: string;
}
export interface Pays {
  id: string;
  /** Code ISO numérique (world-atlas) pour la carte ; "" si non cartographié. */
  iso: string;
  /** Titres d'articles Wikipédia (fr) pour illustrer la vie locale et le monument. */
  wikiVie: string;
  wikiMonument: string;
  nom: string;
  drapeau: string; // emoji drapeau
  capitale: string;
  population: string;
  lat: number;
  lon: number;
  specialite: string;
  monument: string;
  /** Situer par rapport à la France (phrase courte, pour les élèves). */
  geo: string;
  /** Une tradition / un mode de vie local. */
  culture: string;
  /** À propos du monument emblématique. */
  patrimoine: string;
  video: PaysVideo;
  /** Deux indices pour l'énigme « lettres manquantes ». */
  indices: [string, string];
  dictee: PaysDictee;
}
export interface ContinentProjet {
  periodNumber: number;
  continent: string;
  emoji: string;
  intro: string;
  pays: Pays[];
}

const V = (nom: string, extra?: string): PaysVideo => ({
  titre: `Le quotidien d'un enfant — ${nom}`,
  source: "Arte « Ils ont ton âge » / YouTube",
  recherche: extra ?? `Ils ont ton âge ${nom} enfant quotidien`,
});

export const AUTOUR_DU_MONDE: ContinentProjet[] = [
  {
    periodNumber: 1,
    continent: "Europe",
    emoji: "🇪🇺",
    intro:
      "Nous commençons tout près de chez nous : l'Europe, le continent de la France. Des pays voisins, souvent accessibles en train.",
    pays: [
      {
        id: "italie", iso: "380", wikiVie: "Pizza", wikiMonument: "Colisée", nom: "Italie", drapeau: "🇮🇹", capitale: "Rome",
        population: "≈ 59 millions d'habitants", lat: 41.9, lon: 12.5,
        specialite: "les pâtes et la pizza", monument: "le Colisée",
        geo: "Au sud-est de la France, de l'autre côté des Alpes. C'est le pays en forme de botte.",
        culture: "En Italie, on adore les pâtes et la glace (le gelato). À Venise, on se déplace en barque sur les canaux et on fête un grand carnaval avec des masques.",
        patrimoine: "Le Colisée, à Rome, est une immense arène très ancienne où combattaient les gladiateurs devant des milliers de spectateurs.",
        video: V("Italie"),
        indices: ["C'est le pays de la pizza et des pâtes.", "Sa forme ressemble à une botte."],
        dictee: { ce1: "En Italie, je mange une bonne pizza.", ce2: "À Rome, les gladiateurs combattaient dans le Colisée, un immense monument très ancien." },
      },
      {
        id: "espagne", iso: "724", wikiVie: "Flamenco", wikiMonument: "Sagrada Família", nom: "Espagne", drapeau: "🇪🇸", capitale: "Madrid",
        population: "≈ 48 millions d'habitants", lat: 40.4, lon: -3.7,
        specialite: "la paella", monument: "la Sagrada Família",
        geo: "Juste au sud-ouest de la France, de l'autre côté des Pyrénées.",
        culture: "En Espagne, on danse le flamenco en tapant des pieds. L'après-midi, certains font la sieste, et les fêtes de rue sont très animées.",
        patrimoine: "La Sagrada Família est une immense église de Barcelone, en construction depuis plus de cent ans.",
        video: V("Espagne"),
        indices: ["On y danse le flamenco.", "On y mange la paella, un plat de riz."],
        dictee: { ce1: "En Espagne, on danse le flamenco.", ce2: "La Sagrada Família est une immense église de Barcelone, commencée il y a plus de cent ans." },
      },
      {
        id: "royaume-uni", iso: "826", wikiVie: "Fish and chips", wikiMonument: "Big Ben", nom: "Royaume-Uni", drapeau: "🇬🇧", capitale: "Londres",
        population: "≈ 68 millions d'habitants", lat: 51.5, lon: -0.1,
        specialite: "le fish and chips", monument: "Big Ben",
        geo: "Au nord-ouest de la France, sur une grande île, de l'autre côté de la Manche.",
        culture: "Au Royaume-Uni, on boit le thé l'après-midi et les bus rouges à deux étages roulent à gauche dans les rues de Londres.",
        patrimoine: "Big Ben est la grande horloge de Londres ; on entend sonner ses cloches de très loin.",
        video: V("Royaume-Uni", "Ils ont ton âge Angleterre enfant Londres"),
        indices: ["On y boit beaucoup de thé.", "Les bus y sont rouges et à deux étages."],
        dictee: { ce1: "À Londres, les bus sont rouges.", ce2: "Big Ben est la grande horloge de Londres ; on entend sonner ses cloches très loin." },
      },
      {
        id: "allemagne", iso: "276", wikiVie: "Marché de Noël", wikiMonument: "Porte de Brandebourg", nom: "Allemagne", drapeau: "🇩🇪", capitale: "Berlin",
        population: "≈ 83 millions d'habitants", lat: 52.5, lon: 13.4,
        specialite: "la saucisse et le bretzel", monument: "la porte de Brandebourg",
        geo: "À l'est de la France, c'est un pays voisin que l'on rejoint facilement en train.",
        culture: "En Allemagne, les marchés de Noël illuminent les villes en hiver, avec du pain d'épices et des bretzels.",
        patrimoine: "À Berlin, la porte de Brandebourg est un grand monument avec de hautes colonnes, symbole de la ville.",
        video: V("Allemagne"),
        indices: ["On y mange des bretzels et des saucisses.", "Sa capitale est Berlin."],
        dictee: { ce1: "En Allemagne, j'achète un bretzel.", ce2: "À Berlin, la porte de Brandebourg est un grand monument avec de hautes colonnes." },
      },
      {
        id: "grece", iso: "300", wikiVie: "Moussaka", wikiMonument: "Parthénon", nom: "Grèce", drapeau: "🇬🇷", capitale: "Athènes",
        population: "≈ 10 millions d'habitants", lat: 37.98, lon: 23.7,
        specialite: "le tzatziki et les olives", monument: "le Parthénon",
        geo: "Loin au sud-est de l'Europe, au bord de la mer Méditerranée, avec des milliers d'îles.",
        culture: "En Grèce, on raconte les mythes des dieux et des héros. On cueille des olives et on mange du yaourt au miel.",
        patrimoine: "Le Parthénon est un temple très ancien construit tout en haut d'une colline d'Athènes, l'Acropole.",
        video: V("Grèce"),
        indices: ["On y raconte les mythes des dieux.", "On y cueille beaucoup d'olives."],
        dictee: { ce1: "En Grèce, je mange des olives.", ce2: "Le Parthénon est un temple très ancien construit sur une colline d'Athènes." },
      },
      {
        id: "pays-bas", iso: "528", wikiVie: "Tulipe", wikiMonument: "Moulin à vent", nom: "Pays-Bas", drapeau: "🇳🇱", capitale: "Amsterdam",
        population: "≈ 18 millions d'habitants", lat: 52.37, lon: 4.9,
        specialite: "le fromage (gouda)", monument: "les moulins à vent",
        geo: "Au nord de la France, un pays tout plat où l'on se déplace beaucoup à vélo.",
        culture: "Aux Pays-Bas, presque tout le monde roule à vélo. Au printemps, les champs de tulipes forment de grands tapis de couleurs.",
        patrimoine: "De grands moulins à vent servaient autrefois à pomper l'eau pour assécher les champs sous le niveau de la mer.",
        video: V("Pays-Bas", "Ils ont ton âge Pays-Bas enfant vélo"),
        indices: ["On y roule beaucoup à vélo.", "On y cultive des champs de tulipes."],
        dictee: { ce1: "Aux Pays-Bas, je roule à vélo.", ce2: "Aux Pays-Bas, de grands moulins à vent servaient à pomper l'eau des champs." },
      },
      {
        id: "portugal", iso: "620", wikiVie: "Pastel de nata", wikiMonument: "Tour de Belém", nom: "Portugal", drapeau: "🇵🇹", capitale: "Lisbonne",
        population: "≈ 10 millions d'habitants", lat: 38.7, lon: -9.14,
        specialite: "le pastel de nata", monument: "la tour de Belém",
        geo: "Tout à l'ouest de l'Europe, au bord de l'océan Atlantique, après l'Espagne.",
        culture: "Au Portugal, on décore les murs avec des carreaux bleus, les azulejos, et on chante le fado, une musique un peu triste.",
        patrimoine: "La tour de Belém garde l'entrée du port de Lisbonne depuis très longtemps ; les grands bateaux partaient d'ici explorer le monde.",
        video: V("Portugal"),
        indices: ["On y goûte un petit gâteau, le pastel de nata.", "Sa capitale est Lisbonne."],
        dictee: { ce1: "Au Portugal, je goûte un pastel de nata.", ce2: "La tour de Belém garde l'entrée du port de Lisbonne depuis de nombreux siècles." },
      },
    ],
  },

  {
    periodNumber: 2,
    continent: "Afrique",
    emoji: "🌍",
    intro:
      "Cap au sud : l'Afrique, un immense continent juste en dessous de l'Europe. Des déserts, des savanes et de grandes forêts.",
    pays: [
      {
        id: "egypte", iso: "818", wikiVie: "Nil", wikiMonument: "Pyramides de Gizeh", nom: "Égypte", drapeau: "🇪🇬", capitale: "Le Caire",
        population: "≈ 111 millions d'habitants", lat: 30.0, lon: 31.2,
        specialite: "le foul (purée de fèves)", monument: "les pyramides de Gizeh",
        geo: "Au nord-est de l'Afrique, au bord de la mer Méditerranée et traversée par le fleuve Nil.",
        culture: "En Égypte, le grand fleuve Nil apporte l'eau au milieu du désert. Autrefois, on écrivait avec des dessins appelés hiéroglyphes.",
        patrimoine: "Les pyramides de Gizeh sont d'immenses tombeaux de pierre construits il y a des milliers d'années pour les pharaons.",
        video: V("Égypte"),
        indices: ["On y voit de grandes pyramides.", "Un long fleuve, le Nil, la traverse."],
        dictee: { ce1: "En Égypte, je vois les pyramides.", ce2: "Les pyramides d'Égypte sont d'immenses tombeaux construits il y a des milliers d'années." },
      },
      {
        id: "maroc", iso: "504", wikiVie: "Thé à la menthe", wikiMonument: "Mosquée Koutoubia", nom: "Maroc", drapeau: "🇲🇦", capitale: "Rabat",
        population: "≈ 37 millions d'habitants", lat: 34.0, lon: -6.8,
        specialite: "le couscous et le tajine", monument: "la place Jemaa el-Fna",
        geo: "Au nord-ouest de l'Afrique, juste en face de l'Espagne, de l'autre côté d'un petit détroit.",
        culture: "Au Maroc, on boit le thé à la menthe versé de très haut. Dans les souks, les marchands vendent des épices, des tapis et des poteries.",
        patrimoine: "À Marrakech, la grande place Jemaa el-Fna s'anime le soir de conteurs, de musiciens et de marchands.",
        video: V("Maroc"),
        indices: ["On y boit du thé à la menthe.", "On y visite les souks des marchands."],
        dictee: { ce1: "Au Maroc, je bois du thé à la menthe.", ce2: "À Marrakech, les marchands du souk vendent des épices, des tapis et des poteries." },
      },
      {
        id: "senegal", iso: "686", wikiVie: "Djembé", wikiMonument: "Île de Gorée", nom: "Sénégal", drapeau: "🇸🇳", capitale: "Dakar",
        population: "≈ 18 millions d'habitants", lat: 14.7, lon: -17.4,
        specialite: "le thiéboudienne (riz au poisson)", monument: "l'île de Gorée",
        geo: "Tout à l'ouest de l'Afrique, au bord de l'océan Atlantique. On y parle souvent français.",
        culture: "Au Sénégal, on joue du djembé, un tambour, et on lutte lors de grandes fêtes. L'accueil chaleureux s'appelle la teranga.",
        patrimoine: "L'île de Gorée, en face de Dakar, garde la mémoire de l'histoire ; ses maisons colorées se visitent aujourd'hui.",
        video: V("Sénégal"),
        indices: ["On y joue du djembé.", "On y parle souvent français."],
        dictee: { ce1: "Au Sénégal, on joue du djembé.", ce2: "À Dakar, on écoute le rythme des tambours appelés djembés pendant les fêtes." },
      },
      {
        id: "kenya", iso: "404", wikiVie: "Massaï", wikiMonument: "Masai Mara", nom: "Kenya", drapeau: "🇰🇪", capitale: "Nairobi",
        population: "≈ 55 millions d'habitants", lat: -1.29, lon: 36.8,
        specialite: "l'ugali (galette de maïs)", monument: "la réserve du Masai Mara",
        geo: "À l'est de l'Afrique, tout près de l'équateur, au bord de l'océan Indien.",
        culture: "Au Kenya, les Massaïs élèvent des troupeaux dans la savane. Les visiteurs partent en safari pour observer les animaux sauvages.",
        patrimoine: "Dans la savane du Masai Mara, les lions, les éléphants et les girafes vivent en liberté.",
        video: V("Kenya"),
        indices: ["On y part en safari voir des lions.", "Les Massaïs y gardent des troupeaux."],
        dictee: { ce1: "Au Kenya, je vois des lions.", ce2: "Dans la savane du Kenya, les éléphants et les girafes vivent en liberté." },
      },
      {
        id: "afrique-du-sud", iso: "710", wikiVie: "Nelson Mandela", wikiMonument: "Montagne de la Table", nom: "Afrique du Sud", drapeau: "🇿🇦", capitale: "Pretoria",
        population: "≈ 60 millions d'habitants", lat: -25.7, lon: 28.2,
        specialite: "le braai (barbecue)", monument: "la Montagne de la Table",
        geo: "Tout au sud de l'Afrique, là où deux océans se rencontrent.",
        culture: "En Afrique du Sud, on parle onze langues officielles. Le pays se souvient de Nelson Mandela, qui a lutté pour que tous soient égaux.",
        patrimoine: "Au Cap, la Montagne de la Table a un sommet tout plat, comme une grande table posée au-dessus de la ville.",
        video: V("Afrique du Sud"),
        indices: ["Une montagne y a un sommet tout plat.", "C'est le pays de Nelson Mandela."],
        dictee: { ce1: "En Afrique du Sud, il fait souvent chaud.", ce2: "Au Cap, la Montagne de la Table a un sommet tout plat, comme une grande table." },
      },
      {
        id: "mali", iso: "466", wikiVie: "Griot", wikiMonument: "Grande Mosquée de Djenné", nom: "Mali", drapeau: "🇲🇱", capitale: "Bamako",
        population: "≈ 22 millions d'habitants", lat: 12.6, lon: -8.0,
        specialite: "le riz au gras", monument: "la grande mosquée de Djenné",
        geo: "Au cœur de l'Afrique de l'Ouest ; le nord du pays touche le désert du Sahara.",
        culture: "Au Mali, les griots racontent les histoires du village en musique et gardent la mémoire des familles.",
        patrimoine: "La grande mosquée de Djenné est construite tout en terre ; chaque année, les habitants la réparent ensemble.",
        video: V("Mali"),
        indices: ["Le griot y raconte les histoires.", "Le désert du Sahara touche le nord du pays."],
        dictee: { ce1: "Au Mali, le griot raconte une histoire.", ce2: "La grande mosquée de Djenné est construite en terre ; on la répare chaque année." },
      },
      {
        id: "madagascar", iso: "450", wikiVie: "Lémuriens", wikiMonument: "Allée des Baobabs", nom: "Madagascar", drapeau: "🇲🇬", capitale: "Antananarivo",
        population: "≈ 30 millions d'habitants", lat: -18.9, lon: 47.5,
        specialite: "le romazava (ragoût)", monument: "l'allée des Baobabs",
        geo: "Une très grande île à l'est de l'Afrique, dans l'océan Indien.",
        culture: "À Madagascar, on croise les lémuriens, des petits animaux qui sautent d'arbre en arbre et qui ne vivent que sur cette île.",
        patrimoine: "L'allée des Baobabs est bordée de très grands arbres au tronc énorme ; certains ont plusieurs centaines d'années.",
        video: V("Madagascar"),
        indices: ["On y voit des lémuriens.", "C'est une très grande île."],
        dictee: { ce1: "À Madagascar, je vois un lémurien.", ce2: "Sur l'île de Madagascar, de très grands arbres appelés baobabs bordent une allée célèbre." },
      },
    ],
  },

  {
    periodNumber: 3,
    continent: "Asie",
    emoji: "🌏",
    intro:
      "Direction l'Asie, le plus grand continent du monde, tout à l'est. Des montagnes géantes, des mégapoles et des traditions millénaires.",
    pays: [
      {
        id: "japon", iso: "392", wikiVie: "Sushi", wikiMonument: "Mont Fuji", nom: "Japon", drapeau: "🇯🇵", capitale: "Tokyo",
        population: "≈ 124 millions d'habitants", lat: 35.7, lon: 139.7,
        specialite: "les sushis", monument: "le mont Fuji",
        geo: "Très loin à l'est de l'Asie, sur des îles, de l'autre côté du monde par rapport à la France.",
        culture: "Au Japon, on se salue en s'inclinant et on enlève ses chaussures dans la maison. Au printemps, on admire les cerisiers en fleurs.",
        patrimoine: "Le mont Fuji est un volcan au sommet couvert de neige ; les Japonais le dessinent et le photographient depuis toujours.",
        video: V("Japon"),
        indices: ["On y mange des sushis.", "On y salue en s'inclinant."],
        dictee: { ce1: "Au Japon, je mange des sushis.", ce2: "Au Japon, le mont Fuji est un volcan couvert de neige que l'on dessine souvent." },
      },
      {
        id: "chine", iso: "156", wikiVie: "Nouvel An chinois", wikiMonument: "Grande Muraille", nom: "Chine", drapeau: "🇨🇳", capitale: "Pékin",
        population: "≈ 1,4 milliard d'habitants", lat: 39.9, lon: 116.4,
        specialite: "le riz et les raviolis", monument: "la Grande Muraille",
        geo: "Un immense pays à l'est de l'Asie ; c'est l'un des pays les plus peuplés du monde.",
        culture: "En Chine, on mange avec des baguettes. Le Nouvel An chinois est fêté avec des dragons, des lanternes rouges et des pétards.",
        patrimoine: "La Grande Muraille de Chine est si longue qu'il faudrait des semaines pour la parcourir à pied ; on la construisait pour protéger le pays.",
        video: V("Chine"),
        indices: ["On y mange avec des baguettes.", "Une très longue muraille la traverse."],
        dictee: { ce1: "En Chine, je mange avec des baguettes.", ce2: "La Grande Muraille de Chine est si longue qu'on met des semaines pour la parcourir." },
      },
      {
        id: "inde", iso: "356", wikiVie: "Holi", wikiMonument: "Taj Mahal", nom: "Inde", drapeau: "🇮🇳", capitale: "New Delhi",
        population: "≈ 1,4 milliard d'habitants", lat: 28.6, lon: 77.2,
        specialite: "le curry et les samoussas", monument: "le Taj Mahal",
        geo: "Au sud de l'Asie, un très grand pays très peuplé, bordé par l'océan Indien.",
        culture: "En Inde, la fête de Holi remplit les rues de poudres colorées. On y décore les mains au henné pour les fêtes.",
        patrimoine: "Le Taj Mahal est un palais tout blanc, construit en marbre au bord d'une rivière, en souvenir d'une princesse.",
        video: V("Inde"),
        indices: ["On y lance des poudres de couleur à la fête de Holi.", "Le Taj Mahal, tout blanc, s'y trouve."],
        dictee: { ce1: "En Inde, les couleurs sont belles.", ce2: "Le Taj Mahal est un palais tout blanc construit en marbre au bord d'une rivière." },
      },
      {
        id: "thailande", iso: "764", wikiVie: "Pad thaï", wikiMonument: "Wat Arun", nom: "Thaïlande", drapeau: "🇹🇭", capitale: "Bangkok",
        population: "≈ 72 millions d'habitants", lat: 13.75, lon: 100.5,
        specialite: "le pad thaï", monument: "les temples de Bangkok",
        geo: "Au sud-est de l'Asie, un pays chaud avec des plages et des forêts.",
        culture: "En Thaïlande, on se salue les mains jointes, le wai. Les éléphants y sont respectés et les temples dorés brillent au soleil.",
        patrimoine: "À Bangkok, les temples aux toits dorés se dressent au bord des canaux ; on y voit de grandes statues de Bouddha.",
        video: V("Thaïlande"),
        indices: ["On y respecte les éléphants.", "Les temples y ont des toits dorés."],
        dictee: { ce1: "En Thaïlande, je vois un éléphant.", ce2: "À Bangkok, les temples dorés brillent au soleil au bord des canaux." },
      },
      {
        id: "indonesie", iso: "360", wikiVie: "Batik", wikiMonument: "Borobudur", nom: "Indonésie", drapeau: "🇮🇩", capitale: "Jakarta",
        population: "≈ 277 millions d'habitants", lat: -6.2, lon: 106.8,
        specialite: "le nasi goreng (riz sauté)", monument: "le temple de Borobudur",
        geo: "Au sud-est de l'Asie, un pays fait de milliers d'îles, sur l'équateur.",
        culture: "En Indonésie, il y a beaucoup de volcans. On y dessine des tissus au batik, avec de la cire et des couleurs.",
        patrimoine: "Borobudur est un très grand temple de pierre, construit sur l'île de Java, décoré de centaines de statues.",
        video: V("Indonésie"),
        indices: ["Ce pays est fait de milliers d'îles.", "On y compte beaucoup de volcans."],
        dictee: { ce1: "En Indonésie, il y a des volcans.", ce2: "Borobudur est un très grand temple de pierre construit sur l'île de Java." },
      },
      {
        id: "nepal", iso: "524", wikiVie: "Drapeau de prière", wikiMonument: "Mont Everest", nom: "Népal", drapeau: "🇳🇵", capitale: "Katmandou",
        population: "≈ 30 millions d'habitants", lat: 27.7, lon: 85.3,
        specialite: "le dal bhat (riz et lentilles)", monument: "le mont Everest",
        geo: "Au cœur de l'Asie, entre l'Inde et la Chine, dans les montagnes de l'Himalaya.",
        culture: "Au Népal, des drapeaux de prière colorés flottent dans le vent sur les sentiers de montagne.",
        patrimoine: "L'Everest, au Népal, est la plus haute montagne du monde ; son sommet est couvert de neige toute l'année.",
        video: V("Népal"),
        indices: ["La plus haute montagne du monde s'y trouve.", "Des drapeaux de prière y flottent au vent."],
        dictee: { ce1: "Au Népal, les montagnes sont hautes.", ce2: "L'Everest, au Népal, est la plus haute montagne du monde, couverte de neige." },
      },
      {
        id: "coree-du-sud", iso: "410", wikiVie: "Taekwondo", wikiMonument: "Gyeongbokgung", nom: "Corée du Sud", drapeau: "🇰🇷", capitale: "Séoul",
        population: "≈ 52 millions d'habitants", lat: 37.56, lon: 126.97,
        specialite: "le bibimbap", monument: "le palais Gyeongbokgung",
        geo: "À l'est de l'Asie, sur une presqu'île, tout près du Japon.",
        culture: "En Corée du Sud, on pratique le taekwondo, un art martial, et on écoute la K-pop, une musique très célèbre.",
        patrimoine: "À Séoul, d'anciens palais aux toits colorés se cachent entre les grands immeubles modernes.",
        video: V("Corée du Sud"),
        indices: ["On y pratique le taekwondo.", "La K-pop y est née."],
        dictee: { ce1: "En Corée, je goûte un plat de riz.", ce2: "À Séoul, d'anciens palais aux toits colorés se cachent entre les grands immeubles." },
      },
    ],
  },

  {
    periodNumber: 4,
    continent: "Amériques",
    emoji: "🌎",
    intro:
      "Traversons l'océan Atlantique vers les Amériques : deux immenses continents, du grand froid du nord aux montagnes du sud.",
    pays: [
      {
        id: "etats-unis", iso: "840", wikiVie: "Hamburger", wikiMonument: "Statue de la Liberté", nom: "États-Unis", drapeau: "🇺🇸", capitale: "Washington",
        population: "≈ 335 millions d'habitants", lat: 38.9, lon: -77.0,
        specialite: "le hamburger", monument: "la statue de la Liberté",
        geo: "De l'autre côté de l'océan Atlantique, à l'ouest, un très grand pays d'Amérique du Nord.",
        culture: "Aux États-Unis, on joue au base-ball, on fête Halloween en octobre et les films sont tournés à Hollywood.",
        patrimoine: "La statue de la Liberté accueille les bateaux à l'entrée du port de New York ; elle tient une torche levée vers le ciel.",
        video: V("États-Unis"),
        indices: ["On y fête Halloween.", "La statue de la Liberté y accueille les bateaux."],
        dictee: { ce1: "Aux États-Unis, je mange un hamburger.", ce2: "La statue de la Liberté accueille les bateaux à l'entrée du port de New York." },
      },
      {
        id: "canada", iso: "124", wikiVie: "Sirop d'érable", wikiMonument: "Chutes du Niagara", nom: "Canada", drapeau: "🇨🇦", capitale: "Ottawa",
        population: "≈ 40 millions d'habitants", lat: 45.4, lon: -75.7,
        specialite: "le sirop d'érable", monument: "les chutes du Niagara",
        geo: "Tout au nord de l'Amérique, un pays immense et froid ; on y parle aussi français au Québec.",
        culture: "Au Canada, l'hiver est long et neigeux. On récolte le sirop d'érable, on joue au hockey sur glace et la feuille d'érable est l'emblème.",
        patrimoine: "Les chutes du Niagara laissent tomber des tonnes d'eau dans un grand fracas ; on peut s'en approcher en bateau.",
        video: V("Canada", "Ils ont ton âge Canada Québec enfant"),
        indices: ["On y récolte le sirop d'érable.", "On y parle aussi français au Québec."],
        dictee: { ce1: "Au Canada, je goûte le sirop d'érable.", ce2: "Au Canada, les chutes du Niagara laissent tomber des tonnes d'eau dans un grand fracas." },
      },
      {
        id: "mexique", iso: "484", wikiVie: "Taco", wikiMonument: "Chichén Itzá", nom: "Mexique", drapeau: "🇲🇽", capitale: "Mexico",
        population: "≈ 129 millions d'habitants", lat: 19.4, lon: -99.1,
        specialite: "les tacos", monument: "la pyramide de Chichén Itzá",
        geo: "En Amérique, juste au sud des États-Unis ; un pays chaud et coloré.",
        culture: "Au Mexique, on casse des piñatas pour les fêtes et on célèbre la « fête des morts » avec des fleurs et des couleurs joyeuses.",
        patrimoine: "Les Mayas ont construit de grandes pyramides comme Chichén Itzá, au milieu de la forêt, il y a très longtemps.",
        video: V("Mexique"),
        indices: ["On y mange des tacos.", "On y casse des piñatas pour les fêtes."],
        dictee: { ce1: "Au Mexique, je mange des tacos.", ce2: "Au Mexique, les Mayas ont construit de grandes pyramides au milieu de la forêt." },
      },
      {
        id: "bresil", iso: "076", wikiVie: "Carnaval de Rio", wikiMonument: "Christ Rédempteur", nom: "Brésil", drapeau: "🇧🇷", capitale: "Brasília",
        population: "≈ 216 millions d'habitants", lat: -15.8, lon: -47.9,
        specialite: "la feijoada", monument: "le Christ Rédempteur",
        geo: "Le plus grand pays d'Amérique du Sud ; la immense forêt amazonienne s'y trouve.",
        culture: "Au Brésil, le football est une passion et le carnaval de Rio remplit les rues de musique, de danse et de costumes.",
        patrimoine: "À Rio, la grande statue du Christ Rédempteur veille sur la ville du haut d'une colline, les bras grands ouverts.",
        video: V("Brésil"),
        indices: ["On y adore le football.", "La forêt amazonienne s'y trouve."],
        dictee: { ce1: "Au Brésil, on aime le football.", ce2: "À Rio, la grande statue du Christ veille sur la ville, les bras grands ouverts." },
      },
      {
        id: "perou", iso: "604", wikiVie: "Lama (animal)", wikiMonument: "Machu Picchu", nom: "Pérou", drapeau: "🇵🇪", capitale: "Lima",
        population: "≈ 34 millions d'habitants", lat: -12.05, lon: -77.04,
        specialite: "le ceviche", monument: "le Machu Picchu",
        geo: "En Amérique du Sud, au bord de l'océan Pacifique, le long de la grande cordillère des Andes.",
        culture: "Au Pérou, les lamas transportent les sacs dans la montagne. Les Incas y vivaient autrefois et tissaient de beaux vêtements colorés.",
        patrimoine: "Le Machu Picchu est une ancienne cité inca cachée tout en haut des montagnes ; on y monte par des chemins escarpés.",
        video: V("Pérou"),
        indices: ["Le lama y transporte les sacs.", "La cité inca du Machu Picchu s'y trouve."],
        dictee: { ce1: "Au Pérou, je vois un lama.", ce2: "Le Machu Picchu est une ancienne cité inca cachée tout en haut des montagnes." },
      },
      {
        id: "argentine", iso: "032", wikiVie: "Tango argentin", wikiMonument: "Chutes d'Iguazú", nom: "Argentine", drapeau: "🇦🇷", capitale: "Buenos Aires",
        population: "≈ 46 millions d'habitants", lat: -34.6, lon: -58.4,
        specialite: "l'asado (viande grillée)", monument: "les chutes d'Iguazú",
        geo: "Tout au sud de l'Amérique du Sud, un long pays qui descend presque jusqu'au pôle Sud.",
        culture: "En Argentine, on danse le tango, et les gauchos, des cavaliers, gardent d'immenses troupeaux dans la plaine de la pampa.",
        patrimoine: "Les chutes d'Iguazú forment un rideau d'eau géant à la frontière ; le bruit s'entend de très loin.",
        video: V("Argentine"),
        indices: ["On y danse le tango.", "Les gauchos y gardent les troupeaux."],
        dictee: { ce1: "En Argentine, on danse le tango.", ce2: "En Argentine, les gauchos gardent d'immenses troupeaux dans la plaine de la pampa." },
      },
      {
        id: "chili", iso: "152", wikiVie: "Désert d'Atacama", wikiMonument: "Moai", nom: "Chili", drapeau: "🇨🇱", capitale: "Santiago",
        population: "≈ 20 millions d'habitants", lat: -33.45, lon: -70.6,
        specialite: "l'empanada", monument: "les moaïs de l'île de Pâques",
        geo: "Un pays tout en longueur, coincé entre la cordillère des Andes et l'océan Pacifique.",
        culture: "Au Chili, on trouve le désert le plus sec du monde, l'Atacama, où il ne pleut presque jamais.",
        patrimoine: "Sur l'île de Pâques, d'énormes statues de pierre appelées moaïs regardent vers l'intérieur de l'île, mystérieuses.",
        video: V("Chili"),
        indices: ["C'est un pays tout en longueur.", "Les grandes statues moaïs s'y trouvent."],
        dictee: { ce1: "Au Chili, les statues sont géantes.", ce2: "Sur l'île de Pâques, d'énormes statues de pierre appelées moaïs regardent la mer." },
      },
    ],
  },

  {
    periodNumber: 5,
    continent: "Océanie",
    emoji: "🌏",
    intro:
      "Dernière escale : l'Océanie, à l'autre bout du monde, faite d'îles perdues dans l'immense océan Pacifique.",
    pays: [
      {
        id: "australie", iso: "036", wikiVie: "Kangourou", wikiMonument: "Opéra de Sydney", nom: "Australie", drapeau: "🇦🇺", capitale: "Canberra",
        population: "≈ 26 millions d'habitants", lat: -35.3, lon: 149.1,
        specialite: "le barbecue (BBQ)", monument: "l'opéra de Sydney",
        geo: "Tout à l'autre bout du monde, au sud-est ; c'est à la fois un pays et un continent.",
        culture: "En Australie, les kangourous bondissent et les koalas dorment dans les arbres. Les Aborigènes y vivent depuis très longtemps et lancent le boomerang.",
        patrimoine: "L'opéra de Sydney a un toit blanc en forme de grandes voiles de bateau, posé au bord de l'eau.",
        video: V("Australie"),
        indices: ["Le kangourou et le koala y vivent.", "C'est à la fois un pays et un continent."],
        dictee: { ce1: "En Australie, je vois un kangourou.", ce2: "L'opéra de Sydney a un toit blanc en forme de grandes voiles de bateau." },
      },
      {
        id: "nouvelle-zelande", iso: "554", wikiVie: "Haka", wikiMonument: "Milford Sound", nom: "Nouvelle-Zélande", drapeau: "🇳🇿", capitale: "Wellington",
        population: "≈ 5 millions d'habitants", lat: -41.3, lon: 174.8,
        specialite: "le hangi (cuit sous terre)", monument: "les fjords de Milford Sound",
        geo: "Deux îles au sud-est de l'Australie, presque à l'opposé de la France sur le globe.",
        culture: "En Nouvelle-Zélande, il y a plus de moutons que d'habitants. Avant les matchs, les joueurs maoris dansent le haka.",
        patrimoine: "À Milford Sound, de hautes falaises plongent dans la mer et de grandes cascades tombent du sommet.",
        video: V("Nouvelle-Zélande"),
        indices: ["Il y a plus de moutons que d'habitants.", "Les joueurs y dansent le haka."],
        dictee: { ce1: "En Nouvelle-Zélande, je vois des moutons.", ce2: "Avant les matchs, les joueurs maoris dansent le haka pour se donner du courage." },
      },
      {
        id: "fidji", iso: "242", wikiVie: "Récif corallien", wikiMonument: "Fidji", nom: "Fidji", drapeau: "🇫🇯", capitale: "Suva",
        population: "≈ 0,9 million d'habitants", lat: -18.1, lon: 178.4,
        specialite: "le kokoda (poisson mariné)", monument: "les lagons et les récifs",
        geo: "Un archipel d'îles perdu au milieu de l'océan Pacifique.",
        culture: "Aux Fidji, on accueille les visiteurs par un joyeux « Bula ! ». On plonge dans des lagons chauds pleins de poissons colorés.",
        patrimoine: "Autour des îles Fidji, les récifs de corail forment des jardins sous-marins où nagent des poissons de toutes les couleurs.",
        video: V("Fidji", "Fidji île enfant école Pacifique documentaire"),
        indices: ["On y dit « Bula ! » pour dire bonjour.", "Ce sont des îles du Pacifique."],
        dictee: { ce1: "Aux Fidji, l'eau est chaude.", ce2: "Les îles Fidji sont entourées de lagons bleus où nagent des poissons colorés." },
      },
      {
        id: "samoa", iso: "882", wikiVie: "Tatouage samoan", wikiMonument: "Samoa", nom: "Samoa", drapeau: "🇼🇸", capitale: "Apia",
        population: "≈ 0,2 million d'habitants", lat: -13.8, lon: -171.8,
        specialite: "le palusami (feuilles de taro)", monument: "les cascades et les fale",
        geo: "De petites îles au milieu de l'océan Pacifique, tout près de la ligne du changement de date.",
        culture: "À Samoa, on danse et on chante ensemble. Les maisons traditionnelles, les fale, n'ont pas de murs pour laisser passer le vent.",
        patrimoine: "Les fale, maisons ouvertes soutenues par des poteaux de bois, protègent du soleil tout en gardant la fraîcheur.",
        video: V("Samoa", "Samoa île enfant Pacifique documentaire"),
        indices: ["Les maisons y sont ouvertes, sans murs.", "Ce sont des îles du Pacifique."],
        dictee: { ce1: "À Samoa, on danse sur la plage.", ce2: "À Samoa, les maisons appelées fale n'ont pas de murs pour laisser passer le vent." },
      },
      {
        id: "papouasie", iso: "598", wikiVie: "Paradisier", wikiMonument: "Papouasie-Nouvelle-Guinée", nom: "Papouasie-Nouvelle-Guinée", drapeau: "🇵🇬", capitale: "Port Moresby",
        population: "≈ 10 millions d'habitants", lat: -9.44, lon: 147.2,
        specialite: "le mumu (cuit sous terre)", monument: "la forêt tropicale",
        geo: "Une grande île au nord de l'Australie, couverte d'une épaisse forêt.",
        culture: "En Papouasie, on parle des centaines de langues différentes. Lors des fêtes, on porte des masques et des costumes de plumes.",
        patrimoine: "Dans la forêt, l'oiseau de paradis déploie ses plumes colorées pour faire la parade et séduire.",
        video: V("Papouasie", "Papouasie Nouvelle-Guinée enfant tribu documentaire"),
        indices: ["On y parle des centaines de langues.", "L'oiseau de paradis y déploie ses plumes."],
        dictee: { ce1: "En Papouasie, l'oiseau est coloré.", ce2: "En Papouasie, l'oiseau de paradis déploie ses plumes colorées pour faire la parade." },
      },
      {
        id: "vanuatu", iso: "548", wikiVie: "Saut du Gol", wikiMonument: "Yasur", nom: "Vanuatu", drapeau: "🇻🇺", capitale: "Port-Vila",
        population: "≈ 0,3 million d'habitants", lat: -17.7, lon: 168.3,
        specialite: "le lap-lap", monument: "le volcan Yasur",
        geo: "Un chapelet d'îles volcaniques dans l'océan Pacifique, à l'est de l'Australie.",
        culture: "Au Vanuatu, sur l'île de Pentecôte, des hommes sautent d'une tour en bois, attachés par des lianes : c'est le saut du Gol.",
        patrimoine: "Le volcan Yasur crache du feu et de la fumée presque tous les jours ; on peut s'approcher de son cratère.",
        video: V("Vanuatu", "Vanuatu île enfant volcan documentaire"),
        indices: ["Un volcan, le Yasur, y crache du feu.", "On y saute attaché à des lianes."],
        dictee: { ce1: "Au Vanuatu, le volcan gronde.", ce2: "Au Vanuatu, le volcan Yasur crache du feu et de la fumée toute l'année." },
      },
      {
        id: "nouvelle-caledonie", iso: "540", wikiVie: "Kanak", wikiMonument: "Lagon de Nouvelle-Calédonie", nom: "Nouvelle-Calédonie", drapeau: "🇳🇨", capitale: "Nouméa",
        population: "≈ 0,3 million d'habitants", lat: -22.3, lon: 166.5,
        specialite: "le bougna", monument: "le grand lagon",
        geo: "Une île française du Pacifique, à l'est de l'Australie : on y utilise l'euro comme en métropole.",
        culture: "En Nouvelle-Calédonie vivent les Kanaks, le peuple d'origine de l'île. C'est un territoire français, très loin de la métropole.",
        patrimoine: "Le grand lagon de Nouvelle-Calédonie, l'un des plus grands du monde, abrite des tortues, des poissons et des coraux.",
        video: V("Nouvelle-Calédonie", "Nouvelle-Calédonie enfant Kanak lagon documentaire"),
        indices: ["C'est une île française du Pacifique.", "Son grand lagon est un des plus grands du monde."],
        dictee: { ce1: "En Nouvelle-Calédonie, le lagon est bleu.", ce2: "Le grand lagon de Nouvelle-Calédonie abrite des tortues, des poissons et des coraux." },
      },
    ],
  },
];

/** Thème visuel (couleurs vives) par période / continent, pour un rendu ludique. */
export const THEMES: Record<number, { accent: string; bg: string; soft: string; emoji: string }> = {
  1: { accent: "#3b82f6", bg: "#eff6ff", soft: "#dbeafe", emoji: "🏰" },
  2: { accent: "#f59e0b", bg: "#fffbeb", soft: "#fef3c7", emoji: "🦁" },
  3: { accent: "#ef4444", bg: "#fef2f2", soft: "#fee2e2", emoji: "🏮" },
  4: { accent: "#22c55e", bg: "#f0fdf4", soft: "#dcfce7", emoji: "🗽" },
  5: { accent: "#14b8a6", bg: "#f0fdfa", soft: "#ccfbf1", emoji: "🌴" },
};

/** Le pays associé au n-ième lundi (0-based) d'une période (boucle si besoin). */
export function paysForIndex(cont: ContinentProjet, index: number): Pays {
  return cont.pays[index % cont.pays.length];
}

/** Masque une partie des lettres du nom pour l'énigme « lettres manquantes ». */
export function masqueNom(nom: string): string {
  let letterPos = 0;
  return Array.from(nom)
    .map((ch) => {
      if (!/[A-Za-zÀ-ÿ]/.test(ch)) return ch; // garde espaces, tirets
      const keep = letterPos === 0 || letterPos % 2 === 0; // garde 1 lettre sur 2
      letterPos++;
      return keep ? ch : "•";
    })
    .join("");
}
