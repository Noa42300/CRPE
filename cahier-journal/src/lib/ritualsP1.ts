/**
 * Rituels du matin — CE1/CE2 — Période 1
 * --------------------------------------
 * Jeu de données pédagogique complet (rentrée mardi 1er sept. 2026 →
 * vendredi 16 oct. 2026). Lundis et mardis uniquement. `n` = numéro du
 * jour d'école, calculé sur une semaine de 4 jours (lun, mar, jeu, ven).
 *
 * 100 % pédagogique : aucune donnée élève. Chaque jour comporte plusieurs
 * modules (date & météo, nombre du jour, calcul mental, phrase du jour,
 * problème, découverte), chacun différencié CE1 / CE2.
 */

/** Une paire [question, réponse]. */
export type QA = string[];

export interface DtModule { ce1: QA[]; ce2: QA[]; note?: string; }
export interface NbModule { ce1: QA[]; ce2: QA[]; g?: number; note?: string; }
export interface CmModule { t: string; but: string; ce1: QA[]; ce2: QA[]; }
export interface PhModule { t: string; f: string; ce1: QA[]; ce2: QA[]; }
export interface PbModule { t: string; aide: string; ce1: QA[]; ce2: QA[]; }
export interface BoModule { t: string; ico?: string; txt: string; ce1: QA[]; ce2: QA[]; }

export interface RitualDay {
  n: number;
  j: string;
  d: string;
  c: string;
  phase: string;
  dt: DtModule;
  nb: NbModule;
  cm: CmModule;
  ph: PhModule;
  pb: PbModule | null;
  bo: BoModule | null;
}

/** Petits scripts « ce que je peux dire » (rédigés à la première personne). */
export const SCRIPTS: Record<string, string> = {
 dt:"On commence comme chaque matin par la date. Qui peut venir la lire sur l'affichage ? … Très bien. Maintenant, tout le monde écrit la date sur l'ardoise, puis on montre.",
 nb:"Regardons notre boîte à pailles. Qui peut me dire combien nous avons de paquets de dix ? Et combien de pailles toutes seules ? Alors, quel est le nombre du jour ?",
 cm:"Sortez votre ardoise. Je vais vous donner un calcul, vous avez quelques secondes pour chercher dans votre tête. Quand je dis « Montrez ! », vous levez tous votre ardoise en même temps.",
 ph:"Voici la phrase du jour. On la lit d'abord tous ensemble dans notre tête, puis un élève la lit à voix haute. Ensuite, je pose mes questions : CE1, vous répondez aux questions jaunes, CE2 aux questions bleues.",
 pb:"Je lis le problème une première fois. Vous écoutez, vous ne touchez à rien. Je le relis. Maintenant, racontez-moi l'histoire avec vos mots. Qu'est-ce qu'on cherche ?",
 bo:"On termine par un petit temps de découverte. On écoute, on lève la main pour répondre."
};

export const JOURS: RitualDay[] = [
{n:1,j:"Mardi",d:"mardi 1er septembre 2026",c:"01/09/2026",phase:"Installer les rituels",
 dt:{ce1:[["Quel jour de la semaine sommes-nous ?","mardi"],["Dans quel mois sommes-nous ?","septembre"],["Quelle est l'année ?","2026"]],
     ce2:[["Écris la date complète sur ton ardoise.","mardi 1er septembre 2026"],["Écris la même date en chiffres.","01/09/2026"],["Quel jour serons-nous demain ?","mercredi (pas d'école)"]],
     note:"Premier jour : on installe surtout l'affichage et le geste. On prend le temps de montrer où sont les étiquettes du jour, du mois et de l'année."},
 nb:{ce1:[["Combien de jours d'école avons-nous faits ?","1"],["Montre-moi 1 paille jaune. C'est quoi, une paille jaune ?","une unité"],["Écris 1 en chiffre, puis en lettres.","1 — un"]],
     ce2:[["Écris le nombre du jour en lettres.","un"],["Quel sera le nombre du jour demain ?","2 (mais nous, nous le verrons lundi : il sera à 4)"],["Combien faudra-t-il de pailles pour faire notre premier paquet ?","10"]],
     note:"On installe la boîte : trois compartiments, jaune (unités), bleu (dizaines), vert (centaines). Un élève responsable ajoute la paille du jour."},
 cm:{t:"Le nombre juste après",but:"Installer le geste « je cherche → j'écris → je montre ».",
     ce1:[["Après 5 ?","6"],["Après 9 ?","10"],["Après 12 ?","13"],["Après 7 ?","8"],["Après 15 ?","16"],["Après 19 ?","20"]],
     ce2:[["Après 29 ?","30"],["Après 49 ?","50"],["Après 60 ?","61"],["Après 79 ?","80"],["Après 99 ?","100"],["Après 108 ?","109"]]},
 ph:{t:"La rentrée commence aujourd'hui.",f:"Découvrir le rituel : une phrase commence par une majuscule et se termine par un point.",
     ce1:[["Combien y a-t-il de mots ?","4 mots"],["Montre la majuscule.","le L de « La »"],["Montre le point.","à la fin, après « aujourd'hui »"],["Copie la phrase sur ton ardoise.","copie exacte, majuscule et point compris"]],
     ce2:[["Combien y a-t-il de phrases ? Combien de mots ?","1 phrase, 4 mots"],["Quel est le verbe ?","commence"],["Quel est le mot qui dit quand ?","aujourd'hui"],["Copie la phrase sans aucune erreur.","—"]]},
 pb:null,bo:null},

{n:4,j:"Lundi",d:"lundi 7 septembre 2026",c:"07/09/2026",phase:"Installer les rituels",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Quel jour était-ce hier ?","dimanche"],["Quel jour serons-nous demain ?","mardi"]],
     ce2:[["Écris la date complète.","lundi 7 septembre 2026"],["Écris-la en chiffres.","07/09/2026"],["Quel jour étions-nous avant-hier ?","samedi"]],
     note:"Le lundi, « hier » n'est pas un jour d'école : c'est l'occasion de nommer le week-end."},
 nb:{ce1:[["Combien de pailles jaunes dans la boîte ?","4"],["Décompose 4 de deux façons différentes.","2 + 2 ; 3 + 1"],["Écris 4 en lettres.","quatre"]],
     ce2:[["Écris 4 en lettres.","quatre"],["Quel est le double de 4 ?","8"],["Combien de pailles manque-t-il pour faire un paquet de 10 ?","6"],["Range du plus petit au plus grand : 4 – 40 – 14","4 < 14 < 40"]]},
 cm:{t:"Les doubles",but:"Mémoriser les doubles : c'est le socle de tout le calcul mental de l'année.",
     ce1:[["Double de 1","2"],["Double de 2","4"],["Double de 5","10"],["Double de 3","6"],["Double de 4","8"],["Double de 10","20"]],
     ce2:[["Double de 6","12"],["Double de 8","16"],["Double de 7","14"],["Double de 9","18"],["Double de 15","30"],["Double de 20","40"],["Double de 25","50"]]},
 ph:{t:"Léa range son cartable.",f:"Trouver le verbe : le mot qui dit ce que l'on fait.",
     ce1:[["Combien de mots ?","4 mots"],["Que fait Léa ? C'est le verbe.","range"],["Qui range le cartable ?","Léa"],["Copie la phrase sur ton ardoise.","—"]],
     ce2:[["Quel est le verbe ?","range"],["Quel est le sujet ?","Léa"],["Recopie le nom et son déterminant.","son cartable"],["Réécris la phrase avec « Tom et Léa ». Qu'est-ce qui change ?","Tom et Léa rangent leur cartable. — le verbe prend -nt"]]},
 pb:null,bo:null},

{n:5,j:"Mardi",d:"mardi 8 septembre 2026",c:"08/09/2026",phase:"Installer les rituels",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Quel jour sera-t-il demain ?","mercredi"],["Y a-t-il école demain ?","non"]],
     ce2:[["Écris la date en chiffres.","08/09/2026"],["Quel jour serons-nous après-demain ?","jeudi"],["Combien de jours reste-t-il avant samedi ?","4 jours"]]},
 nb:{ce1:[["Montre 5 avec tes doigts, puis compte les pailles.","5 unités"],["5, c'est 4 et combien ?","1"],["Écris 5 en lettres.","cinq"]],
     ce2:[["Écris 5 en lettres.","cinq"],["Combien font 5 dizaines ?","50"],["Quel nombre est juste avant 5 ? Juste après ?","4 et 6"],["Quelle est la moitié de 10 ?","5"]]},
 cm:{t:"Les compléments à 10",but:"Automatiser les compléments à 10 (CE1) et à 100 (CE2).",
     ce1:[["8 pour aller à 10","2"],["6 + ? = 10","4"],["3 + ? = 10","7"],["9 + ? = 10","1"],["5 + ? = 10","5"],["7 + ? = 10","3"]],
     ce2:[["7 + ? = 10","3"],["4 + ? = 10","6"],["30 + ? = 100","70"],["60 + ? = 100","40"],["90 + ? = 100","10"],["25 + ? = 30","5"]]},
 ph:{t:"Le maître ouvre la porte de la classe.",f:"Repérer les noms et leurs déterminants.",
     ce1:[["Combien de mots ?","7 mots"],["Quel est le verbe ?","ouvre"],["Qui ouvre la porte ?","le maître"],["Trouve un nom dans la phrase.","maître, porte ou classe"]],
     ce2:[["Quel est le sujet ?","Le maître"],["Recopie les trois noms.","maître, porte, classe"],["Écris leurs déterminants.","le, la, la"],["Remplace « Le maître » par « La maîtresse ».","La maîtresse ouvre la porte de la classe."]]},
 pb:{t:"Dans notre classe, il y a 14 CE1 et 9 CE2.",aide:"Faire reformuler l'histoire, puis dessiner deux paquets de jetons au tableau.",
     ce1:[["Combien y a-t-il d'élèves en tout ?","23 élèves (14 + 9)"],["Écris une phrase réponse.","Il y a 23 élèves dans la classe."]],
     ce2:[["Combien y a-t-il d'élèves en tout ?","23 élèves"],["Combien y a-t-il de CE1 de plus que de CE2 ?","5 de plus (14 − 9)"],["Écris tes deux phrases réponses.","—"]]},
 bo:null},

{n:8,j:"Lundi",d:"lundi 14 septembre 2026",c:"14/09/2026",phase:"Installer les rituels",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Quel jour était-ce avant-hier ?","samedi"],["Dans quel mois sommes-nous ?","septembre"]],
     ce2:[["Écris la date en chiffres.","14/09/2026"],["Combien de jours se sont écoulés depuis la rentrée (1er septembre) ?","13 jours"],["Quel jour serons-nous le 15 ?","mardi"]]},
 nb:{ce1:[["Compte les pailles jaunes.","8"],["8, c'est 4 et combien ?","4"],["Écris 8 en lettres.","huit"],["Combien pour aller jusqu'à 10 ?","2"]],
     ce2:[["Écris 8 en lettres.","huit"],["Combien font 8 + 10 ?","18"],["Combien font 8 dizaines ?","80"],["Encadre : … < 8 < …","7 < 8 < 9"]]},
 cm:{t:"Ajouter et retirer",but:"CE1 : ajouter/retirer 1 et 2. CE2 : ajouter/retirer 10 sans changer les unités.",
     ce1:[["6 + 2","8"],["9 + 1","10"],["7 − 1","6"],["10 − 2","8"],["12 + 2","14"],["15 − 1","14"]],
     ce2:[["24 + 10","34"],["37 + 10","47"],["50 − 10","40"],["68 − 10","58"],["95 + 10","105"],["100 − 10","90"]]},
 ph:{t:"Les élèves jouent dans la cour.",f:"Le pluriel : je vois les marques du pluriel.",
     ce1:[["Combien de mots ?","6 mots"],["Quel est le verbe ?","jouent"],["Y a-t-il un ou plusieurs élèves ? Comment le sais-tu ?","plusieurs : « Les » et le -s de « élèves »"],["Copie la phrase.","—"]],
     ce2:[["Quel est le sujet ?","Les élèves"],["Recopie les mots qui portent une marque du pluriel.","Les, élèves, jouent (-ent)"],["Mets la phrase au singulier.","L'élève joue dans la cour."],["Qu'est-ce qui a changé dans le verbe ?","jouent → joue"]]},
 pb:null,
 bo:{t:"Le mot du jour — le matériel de la classe",ico:"i-bonus",
     txt:"la règle · le cahier · la trousse · le crayon · l'ardoise · la gomme",
     ce1:[["Range les trois premiers mots dans l'ordre alphabétique.","ardoise, cahier, crayon"],["Quel objet sert à effacer ?","la gomme"]],
     ce2:[["Range les six mots dans l'ordre alphabétique.","ardoise, cahier, crayon, gomme, règle, trousse"],["Trouve un mot de la même famille que « crayon ».","crayonner, un porte-crayons"]]}},

{n:9,j:"Mardi",d:"mardi 15 septembre 2026",c:"15/09/2026",phase:"Installer les rituels",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Hier, c'était…","lundi"],["Demain, ce sera…","mercredi"]],
     ce2:[["Écris la date en chiffres.","15/09/2026"],["Dans combien de jours serons-nous le 20 septembre ?","5 jours"],["Quel jour de la semaine sera le 20 septembre ?","dimanche"]]},
 nb:{ce1:[["Compte les pailles.","9"],["9, c'est 10 moins combien ?","1"],["Écris 9 en lettres.","neuf"]],
     ce2:[["Écris 9 en lettres.","neuf"],["Le grand nombre du jour : 9 × 10 = ?","90"],["Combien y a-t-il de dizaines dans 90 ?","9 dizaines"],["Quel nombre vient juste après 99 ?","100"]],g:90},
 cm:{t:"Petites sommes et dizaines entières",but:"CE1 : sommes inférieures à 10. CE2 : additionner des dizaines entières.",
     ce1:[["4 + 3","7"],["5 + 2","7"],["6 + 3","9"],["2 + 7","9"],["5 + 5","10"],["4 + 4","8"]],
     ce2:[["20 + 30","50"],["40 + 40","80"],["60 + 30","90"],["45 + 10","55"],["70 + 20","90"],["50 + 50","100"]]},
 ph:{t:"Un grand oiseau se pose sur le toit.",f:"L'adjectif : le mot qui décrit le nom.",
     ce1:[["Combien de mots ?","8 mots"],["Quel est le verbe ?","se pose"],["De qui parle-t-on ?","d'un oiseau"],["Comment est cet oiseau ?","grand"]],
     ce2:[["Quel est le sujet ?","Un grand oiseau"],["Quel mot décrit l'oiseau ?","grand — c'est un adjectif"],["Recopie le groupe nominal sujet.","Un grand oiseau"],["Mets la phrase au pluriel.","De grands oiseaux se posent sur le toit."]]},
 pb:{t:"Léa a 24 billes. Elle en gagne 8 pendant la récréation.",aide:"Faire raconter l'histoire avant de calculer : est-ce qu'elle en a plus ou moins qu'avant ?",
     ce1:[["Combien de billes a-t-elle maintenant ?","32 billes (24 + 8)"],["Écris ta phrase réponse.","Léa a maintenant 32 billes."]],
     ce2:[["Combien de billes a-t-elle maintenant ?","32 billes"],["Le soir, elle en donne 5 à Tom. Combien lui en reste-t-il ?","27 billes (32 − 5)"],["Combien d'étapes as-tu dû faire ?","2 étapes"]]},
 bo:null},

{n:12,j:"Lundi",d:"lundi 21 septembre 2026",c:"21/09/2026",phase:"Automatiser",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Dans quel mois ?","septembre"],["Demain, l'automne commence. Quelle saison quittons-nous ?","l'été"]],
     ce2:[["Écris la date en chiffres.","21/09/2026"],["Combien de jours compte le mois de septembre ?","30 jours"],["Combien de jours reste-t-il avant le 1er octobre ?","10 jours"]]},
 nb:{ce1:[["Combien de paquets de 10 ? Combien de pailles seules ?","1 dizaine et 2 unités"],["12 = 10 + …","2"],["Écris 12 en lettres.","douze"]],
     ce2:[["Écris 12 en lettres.","douze"],["Décompose : 12 = … d + … u","1 d + 2 u, soit 10 + 2"],["Le grand nombre du jour : 12 × 10","120"],["Décompose 120.","100 + 20, soit 1 c + 2 d"]],g:120,
     note:"Le premier paquet de 10 a été fabriqué le jeudi 10 (jour n°10). Prendre 30 secondes pour le faire vérifier : « On compte ensemble le paquet bleu. »"},
 cm:{t:"Ajouter 10, ajouter 100",but:"CE1 : ajouter 10. CE2 : ajouter et retirer 10 et 100.",
     ce1:[["5 + 10","15"],["10 + 10","20"],["12 + 10","22"],["20 + 10","30"],["8 + 10","18"],["30 + 10","40"]],
     ce2:[["46 + 10","56"],["72 − 10","62"],["120 + 100","220"],["250 − 100","150"],["99 + 10","109"],["305 − 100","205"]]},
 ph:{t:"Nadia et Tom ramassent des feuilles rouges.",f:"Deux sujets : le verbe s'accorde au pluriel.",
     ce1:[["Combien de mots ?","7 mots"],["Quel est le verbe ?","ramassent"],["Qui ramasse les feuilles ?","Nadia et Tom"],["Combien de personnes ramassent ?","2"]],
     ce2:[["Quel est le sujet ?","Nadia et Tom"],["Pourquoi le verbe se termine-t-il par -ent ?","le sujet est au pluriel : deux personnes"],["Pourquoi « rouges » prend-il un -s ?","il s'accorde avec « feuilles », au pluriel"],["Réécris la phrase avec Nadia seulement.","Nadia ramasse des feuilles rouges."]]},
 pb:null,bo:null},

{n:13,j:"Mardi",d:"mardi 22 septembre 2026",c:"22/09/2026",phase:"Automatiser",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Quelle saison commence aujourd'hui ?","l'automne"],["Hier, c'était…","lundi"]],
     ce2:[["Écris la date en chiffres.","22/09/2026"],["Cite les quatre saisons dans l'ordre à partir d'aujourd'hui.","automne, hiver, printemps, été"],["Quelle sera la date dans une semaine ?","mardi 29 septembre 2026"]]},
 nb:{ce1:[["Combien de dizaines ? Combien d'unités ?","1 dizaine et 3 unités"],["13 = 10 + …","3"],["Écris 13 en lettres.","treize"],["Encadre : … < 13 < …","12 < 13 < 14"]],
     ce2:[["Écris 13 en lettres.","treize"],["Encadre 13 entre deux dizaines.","10 < 13 < 20"],["Le grand nombre du jour : 13 × 10","130"],["130 = … c + … d","1 c + 3 d"]],g:130},
 cm:{t:"Les moitiés",but:"Faire le lien avec les doubles : la moitié, c'est l'opération inverse.",
     ce1:[["Moitié de 4","2"],["Moitié de 6","3"],["Moitié de 10","5"],["Moitié de 8","4"],["Moitié de 2","1"],["Moitié de 20","10"]],
     ce2:[["Moitié de 12","6"],["Moitié de 16","8"],["Moitié de 30","15"],["Moitié de 40","20"],["Moitié de 24","12"],["Moitié de 100","50"]]},
 ph:{t:"La pluie tombe sur le préau.",f:"Remplacer le groupe sujet par un pronom.",
     ce1:[["Combien de mots ?","6 mots"],["Quel est le verbe ?","tombe"],["Qu'est-ce qui tombe ?","la pluie"],["Copie la phrase.","—"]],
     ce2:[["Quel est le sujet ?","La pluie"],["Remplace le sujet par « Elle ».","Elle tombe sur le préau."],["Est-ce du passé, du présent ou du futur ?","du présent"],["Ajoute un adjectif pour décrire la pluie.","La pluie fine / froide / glacée tombe sur le préau."]]},
 pb:{t:"Le maître achète 5 paquets de 10 crayons.",aide:"Laisser dessiner les 5 paquets. Faire verbaliser : « 5 fois 10 ».",
     ce1:[["Combien de crayons a-t-il en tout ?","50 crayons"],["Écris ta phrase réponse.","Le maître a 50 crayons."]],
     ce2:[["Combien de crayons en tout ?","50 crayons"],["Il en distribue 32. Combien lui en reste-t-il ?","18 crayons (50 − 32)"],["Comment as-tu calculé 5 paquets de 10 ?","5 × 10, ou 10+10+10+10+10"]]},
 bo:null},

{n:16,j:"Lundi",d:"lundi 28 septembre 2026",c:"28/09/2026",phase:"Automatiser",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Hier, c'était…","dimanche"],["Combien de jours avant la fin du mois ?","2 jours (le 30)"]],
     ce2:[["Écris la date en chiffres.","28/09/2026"],["Quelle sera la date dans 3 jours ?","jeudi 1er octobre 2026"],["Quel mois vient après septembre ?","octobre"]]},
 nb:{ce1:[["Combien de dizaines et d'unités ?","1 dizaine et 6 unités"],["16 = 10 + …","6"],["Écris 16 en lettres.","seize"],["Combien pour aller à 20 ?","4"]],
     ce2:[["Écris 16 en lettres.","seize"],["Combien font 16 + 100 ?","116"],["Le grand nombre du jour : 16 × 10","160"],["Encadre 160 entre deux centaines.","100 < 160 < 200"]],g:160},
 cm:{t:"Retirer",but:"CE1 : petites soustractions. CE2 : retirer des dizaines entières.",
     ce1:[["7 − 3","4"],["10 − 4","6"],["9 − 5","4"],["8 − 6","2"],["10 − 7","3"],["12 − 2","10"]],
     ce2:[["50 − 20","30"],["80 − 30","50"],["46 − 6","40"],["75 − 40","35"],["100 − 30","70"],["64 − 20","44"]]},
 ph:{t:"Les enfants rangent leurs cahiers dans le casier.",f:"Accorder à l'intérieur du groupe nominal.",
     ce1:[["Combien de mots ?","8 mots"],["Quel est le verbe ?","rangent"],["Y a-t-il un ou plusieurs enfants ? Pourquoi ?","plusieurs : « Les » et le -s de « enfants »"],["Recopie les mots écrits au pluriel.","Les enfants, leurs cahiers"]],
     ce2:[["Quel est le sujet ?","Les enfants"],["Recopie les deux groupes nominaux au pluriel.","Les enfants / leurs cahiers"],["Mets la phrase au singulier.","L'enfant range son cahier dans le casier."],["Quels mots ont changé ?","L'enfant, range, son cahier"]]},
 pb:null,
 bo:{t:"Lecture — je cherche l'information cachée",ico:"i-bonus",
     txt:"Tom pose son cartable, enfile ses bottes et ouvre son parapluie. Il sort dans la cour.",
     ce1:[["Où va Tom ?","dans la cour"],["Qu'est-ce qu'il prend avec lui ?","ses bottes et son parapluie"]],
     ce2:[["Quel temps fait-il ? Comment le sais-tu ?","il pleut : les bottes et le parapluie le disent, mais ce n'est pas écrit"],["Combien y a-t-il de phrases ?","2 phrases"]]}},

{n:17,j:"Mardi",d:"mardi 29 septembre 2026",c:"29/09/2026",phase:"Automatiser",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Quel jour serons-nous après-demain ?","jeudi"],["Quel est le dernier jour de septembre ?","mercredi 30"]],
     ce2:[["Écris la date en chiffres.","29/09/2026"],["Dans combien de jours commence le mois d'octobre ?","2 jours"],["Écris en entier la date d'après-demain.","jeudi 1er octobre 2026"]]},
 nb:{ce1:[["Combien de dizaines et d'unités ?","1 dizaine et 7 unités"],["17 = 10 + …","7"],["Écris 17 en lettres.","dix-sept"],["Quel nombre juste avant ? Juste après ?","16 et 18"]],
     ce2:[["Écris 17 en lettres.","dix-sept"],["Combien font 17 + 100 ?","117"],["Le grand nombre du jour : 17 × 10","170"],["Place 170 sur la droite graduée de 100 à 200.","entre 150 et 200, aux 7 dixièmes"]],g:170},
 cm:{t:"Passer la dizaine",but:"Stratégie : je décompose pour aller d'abord à la dizaine ronde.",
     ce1:[["8 + 5","13"],["9 + 3","12"],["7 + 6","13"],["6 + 5","11"],["9 + 7","16"],["8 + 8","16"]],
     ce2:[["27 + 5","32"],["48 + 6","54"],["35 + 20","55"],["56 + 9","65"],["73 + 8","81"],["25 + 25","50"]]},
 ph:{t:"Où est mon cahier de poésie ?",f:"La phrase interrogative et son point d'interrogation.",
     ce1:[["Combien de mots ?","6 mots"],["Quel signe y a-t-il à la fin ?","un point d'interrogation"],["Est-ce que cette phrase pose une question ?","oui"],["Copie la phrase.","—"]],
     ce2:[["Quel type de phrase est-ce ?","une phrase interrogative"],["Quel est le verbe ?","est"],["Recopie le groupe nominal.","mon cahier de poésie"],["Transforme-la en phrase déclarative.","Mon cahier de poésie est sur la table."]]},
 pb:{t:"Dans la classe, il y a 6 tables. À chaque table, 4 élèves peuvent s'asseoir.",aide:"Autoriser le dessin des 6 tables. Faire dire : « 6 fois 4 ».",
     ce1:[["Combien d'élèves peuvent s'asseoir en tout ?","24 élèves"],["Comment as-tu fait ?","6 × 4, ou 4+4+4+4+4+4"]],
     ce2:[["Combien d'élèves peuvent s'asseoir en tout ?","24 élèves"],["La classe compte 23 élèves. Combien de places resteront libres ?","1 place"],["Aujourd'hui, 3 élèves sont absents. Combien de places libres ?","4 places"]]},
 bo:null},

{n:20,j:"Lundi",d:"lundi 5 octobre 2026",c:"05/10/2026",phase:"Consolider",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Dans quel mois sommes-nous maintenant ?","octobre"],["Quel jour était le 1er octobre ?","jeudi"]],
     ce2:[["Écris la date en chiffres.","05/10/2026"],["Combien de jours compte le mois d'octobre ?","31 jours"],["Combien de lundis reste-t-il en octobre avant les vacances ?","1 seul : le 12"]]},
 nb:{ce1:[["Combien de paquets de 10 ? Combien de pailles seules ?","2 dizaines et 0 unité"],["Écris 20 en lettres.","vingt"],["20 = 10 + …","10"],["Quel est le double de 10 ?","20"]],
     ce2:[["Écris 20 en lettres.","vingt"],["Le grand nombre du jour : 20 × 10","200"],["Combien de centaines dans 200 ?","2 centaines"],["Combien de paquets de 10 faut-il pour faire 200 ?","20 dizaines"]],g:200,
     note:"Jour important : le deuxième paquet de 10 est complet, il n'y a plus aucune paille jaune. Le faire constater : « Que voyez-vous d'étonnant dans la boîte ? »"},
 cm:{t:"Multiplier par 2 et par 5",but:"Passer du double au « fois 2 », entrer dans la table de 5.",
     ce1:[["2 fois 3","6"],["2 fois 5","10"],["2 fois 4","8"],["2 fois 7","14"],["2 fois 9","18"],["2 fois 10","20"]],
     ce2:[["2 × 6","12"],["5 × 3","15"],["5 × 5","25"],["2 × 8","16"],["5 × 7","35"],["5 × 10","50"]]},
 ph:{t:"Le vent souffle très fort dans les arbres du parc.",f:"Repérer les groupes nominaux dans une phrase plus longue.",
     ce1:[["Combien de mots ?","10 mots"],["Quel est le verbe ?","souffle"],["Qu'est-ce qui souffle ?","le vent"],["Trouve un nom au pluriel.","les arbres"]],
     ce2:[["Quel est le sujet ?","Le vent"],["Recopie les trois groupes nominaux.","Le vent / les arbres / le parc"],["Lequel est au pluriel ?","les arbres"],["Enlève « très fort ». La phrase reste-t-elle correcte ?","oui : Le vent souffle dans les arbres du parc."]]},
 pb:null,
 bo:{t:"EMC — la règle du jour",ico:"i-bonus",
     txt:"« Je lève la main pour prendre la parole. »",
     ce1:[["Pourquoi cette règle existe-t-elle ?","pour que chacun puisse être entendu"],["Que se passerait-il si personne ne la respectait ?","tout le monde parlerait en même temps"]],
     ce2:[["Cite une autre règle de la classe et explique-la.","réponses variées"],["Une règle sert-elle à punir ou à vivre ensemble ?","à vivre ensemble"]]}},

{n:21,j:"Mardi",d:"mardi 6 octobre 2026",c:"06/10/2026",phase:"Consolider",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Hier, c'était…","lundi"],["Quel jour sera le 8 octobre ?","jeudi"]],
     ce2:[["Écris la date en chiffres.","06/10/2026"],["Dans combien de jours commencent les vacances (samedi 17) ?","11 jours"],["Écris la date d'avant-hier.","dimanche 4 octobre 2026"]]},
 nb:{ce1:[["Combien de dizaines et d'unités ?","2 dizaines et 1 unité"],["21 = 20 + …","1"],["Écris 21 en lettres. Attention, c'est un piège !","vingt et un"],["Encadre : … < 21 < …","20 < 21 < 22"]],
     ce2:[["Écris 21 en lettres.","vingt et un"],["Combien font 21 + 100 ?","121"],["Le grand nombre du jour : 21 × 10","210"],["Encadre 210 à la centaine.","200 < 210 < 300"]],g:210},
 cm:{t:"Aller à la dizaine, aller à la centaine",but:"Compléter jusqu'au nombre rond : stratégie clé pour l'addition.",
     ce1:[["27 pour aller à 30","3"],["42 pour aller à 50","8"],["15 pour aller à 20","5"],["36 pour aller à 40","4"],["58 pour aller à 60","2"],["61 pour aller à 70","9"]],
     ce2:[["70 pour aller à 100","30"],["120 pour aller à 200","80"],["85 pour aller à 100","15"],["230 pour aller à 300","70"],["96 pour aller à 100","4"],["150 pour aller à 200","50"]]},
 ph:{t:"Nous ne sortons pas en récréation aujourd'hui.",f:"La phrase négative : ne … pas.",
     ce1:[["Combien de mots ?","7 mots"],["Quel est le verbe ?","sortons"],["Qui ne sort pas ?","nous"],["Quels sont les deux petits mots qui disent « non » ?","ne … pas"]],
     ce2:[["Quels mots forment la négation ?","ne … pas, autour du verbe"],["Écris la phrase à la forme affirmative.","Nous sortons en récréation aujourd'hui."],["Quel est le sujet ?","Nous"],["Réécris la phrase affirmative avec « Les élèves ».","Les élèves sortent en récréation aujourd'hui."]]},
 pb:{t:"Dans le car, il y a 48 places. 29 élèves sont déjà assis.",aide:"Faire schématiser le car : ce qui est occupé, ce qui reste.",
     ce1:[["Combien de places sont encore libres ?","19 places (48 − 29)"],["Écris ta phrase réponse.","Il reste 19 places libres."]],
     ce2:[["Combien de places sont libres ?","19 places"],["12 autres élèves montent. Combien de places restent libres ?","7 places"],["Combien d'élèves y a-t-il alors dans le car ?","41 élèves"]]},
 bo:null},

{n:24,j:"Lundi",d:"lundi 12 octobre 2026",c:"12/10/2026",phase:"Consolider",
 dt:{ce1:[["Quel jour sommes-nous ?","lundi"],["Quel jour sera demain ?","mardi"],["Dans combien de jours partons-nous en vacances (samedi 17) ?","5 jours"]],
     ce2:[["Écris la date en chiffres.","12/10/2026"],["Quel est le dernier jour d'école avant les vacances ?","vendredi 16 octobre"],["Combien de jours d'école reste-t-il ?","5 jours"]]},
 nb:{ce1:[["Combien de dizaines et d'unités ?","2 dizaines et 4 unités"],["24 = 20 + …","4"],["Écris 24 en lettres.","vingt-quatre"],["Quelle est la moitié de 24 ?","12"]],
     ce2:[["Écris 24 en lettres.","vingt-quatre"],["Combien font 24 + 100, puis encore + 100 ?","124 puis 224"],["Le grand nombre du jour : 24 × 10","240"],["Décompose 240.","200 + 40, soit 2 c + 4 d"]],g:240},
 cm:{t:"Additionner des dizaines, multiplier par 10",but:"CE1 : dizaines entières. CE2 : comprendre l'effet du « × 10 ».",
     ce1:[["20 + 30","50"],["40 + 10","50"],["50 + 20","70"],["30 + 30","60"],["60 + 20","80"],["70 + 30","100"]],
     ce2:[["4 × 10","40"],["7 × 10","70"],["10 × 10","100"],["12 × 10","120"],["25 × 10","250"],["3 × 100","300"]]},
 ph:{t:"Les petits chats gris dorment dans le panier.",f:"Tous les accords du groupe nominal en même temps.",
     ce1:[["Combien de mots ?","8 mots"],["Quel est le verbe ?","dorment"],["Y a-t-il un ou plusieurs chats ?","plusieurs"],["Comment sont ces chats ?","petits et gris"]],
     ce2:[["Recopie le groupe nominal sujet.","Les petits chats gris"],["Pourquoi « petits » prend-il un -s ?","il s'accorde avec « chats », au pluriel"],["Mets la phrase au singulier.","Le petit chat gris dort dans le panier."],["Combien de mots ont changé ?","4 : Le, petit, chat, dort"]]},
 pb:null,
 bo:{t:"Questionner le monde — l'automne",ico:"i-bonus",
     txt:"En automne, les feuilles jaunissent puis tombent. Les jours deviennent de plus en plus courts.",
     ce1:[["Cite deux choses qui changent en automne.","les feuilles tombent ; il fait nuit plus tôt"],["Quels vêtements sort-on du placard ?","manteau, écharpe, bottes…"]],
     ce2:[["Cite les mois de l'automne.","septembre, octobre, novembre, et décembre jusqu'au 21"],["Pourquoi les journées raccourcissent-elles ?","le soleil se lève plus tard et se couche plus tôt"]]}},

{n:25,j:"Mardi",d:"mardi 13 octobre 2026",c:"13/10/2026",phase:"Consolider — dernier jour de la période",
 dt:{ce1:[["Quel jour sommes-nous ?","mardi"],["Écris la date complète.","mardi 13 octobre 2026"],["Combien de mois avons-nous traversés depuis la rentrée ?","2 : septembre et octobre"]],
     ce2:[["Écris la date en chiffres.","13/10/2026"],["Écris la date du premier jour des vacances.","samedi 17 octobre 2026"],["Combien de jours d'école aurons-nous faits en tout ?","27 : il en reste 2 après aujourd'hui"]]},
 nb:{ce1:[["Combien de dizaines et d'unités ?","2 dizaines et 5 unités"],["25 = 20 + …","5"],["Écris 25 en lettres.","vingt-cinq"],["Encadre entre deux dizaines.","20 < 25 < 30"]],
     ce2:[["Écris 25 en lettres.","vingt-cinq"],["Le grand nombre du jour : 25 × 10","250"],["25 + 100 + 100 = ?","225"],["Combien de fois 25 pour faire 100 ?","4 fois"]],g:250,
     note:"Dernier nombre du jour de la période : faire relire la frise des nombres depuis 1 et féliciter la classe."},
 cm:{t:"Le défi de fin de période",but:"Bilan : repérer ce qui est automatisé et ce qui devra être repris en période 2.",
     ce1:[["Double de 7","14"],["8 + ? = 10","2"],["15 + 10","25"],["Moitié de 16","8"],["9 + 4","13"],["20 + 30","50"],["Le nombre après 99","100"]],
     ce2:[["Double de 30","60"],["70 + ? = 100","30"],["135 + 10","145"],["Moitié de 50","25"],["5 × 6","30"],["24 × 10","240"],["300 − 100","200"]]},
 ph:{t:"Demain, nous irons visiter la bibliothèque du village.",f:"Passé, présent ou futur ? Se repérer dans le temps.",
     ce1:[["Combien de mots ?","8 mots"],["Quand se passe l'action ?","demain, donc plus tard"],["Quel mot te le dit ?","Demain"],["Copie la phrase.","—"]],
     ce2:[["Passé, présent ou futur ?","futur"],["Quel est le sujet ?","nous"],["Recopie le groupe nominal.","la bibliothèque du village"],["Réécris la phrase en commençant par « Hier, … ».","Hier, nous avons visité la bibliothèque du village."]]},
 pb:{t:"La classe part à la bibliothèque. Il y a 23 élèves et 2 adultes. Chaque élève emprunte 2 livres. Le trajet dure 15 minutes.",
     aide:"Problème-bilan : toutes les données ne servent pas. Faire barrer ce qui est inutile avant de calculer.",
     ce1:[["Combien de livres les élèves empruntent-ils en tout ?","46 livres (23 × 2)"],["Y a-t-il une information qui ne sert à rien ?","oui : les 15 minutes de trajet"]],
     ce2:[["Combien de livres en tout ?","46 livres"],["Quelles informations n'ont pas servi ?","les 15 minutes de trajet et les 2 adultes"],["Combien de personnes montent dans le car ?","25 personnes"]]},
 bo:null}
];
