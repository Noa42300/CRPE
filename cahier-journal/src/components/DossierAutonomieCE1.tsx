/**
 * Dossier autonomie — pour un élève de CE1 TRÈS EN AVANCE.
 * Calé sur le modèle des « fichiers autonomie CE2 » (FichePedagogiqueA4), mais
 * rendu PLUS SIMPLE et PLUS COURT : consignes très courtes, un exemple à chaque
 * exercice, peu d'items, pour un CE1 qui ne lit pas encore vite. Contenu
 * programme CE1 ET CE2 (français + maths), sans aller trop loin : de quoi
 * l'occuper en autonomie. ~28 fiches (une par page).
 */
import type { FicheData } from "./FichePedagogiqueA4";
import { FichePedagogiqueA4 } from "./FichePedagogiqueA4";

const E = "Fichier autonomie";

const FICHES: FicheData[] = [
  /* -------------------- page de garde -------------------- */
  {
    entete: "Dossier", titre: "Mon dossier autonomie", niveau: "CE1",
    blocs: [
      { kind: "def", titre: "Comment je travaille", contenu: "Je travaille seul, à mon rythme. Je lis bien la consigne, je regarde l'exemple, puis je fais l'exercice. Quand j'ai fini une fiche, j'en prends une autre." },
      { kind: "puces", titre: "Les matières", points: ["Français : les sons, les mots, les phrases.", "Maths : les nombres, le calcul, les problèmes, la géométrie.", "Si c'est trop facile, tourne la page : il y a des fiches plus difficiles (CE2) !"] },
      { kind: "champs", items: ["Mon prénom", "La date"] },
    ],
  },

  /* ============================ FRANÇAIS ============================ */
  {
    entete: E, titre: "Les syllabes", niveau: "CE1", discipline: "Français — phonologie",
    blocs: [
      { kind: "exercice", consigne: "Compte les syllabes. Écris le nombre.", exemple: "cha-peau → 2", items: ["lapin → ……", "voiture → ……", "école → ……", "chocolat → ……"] },
      { kind: "exercice", consigne: "Entoure le mot le plus long.", exemple: "chat / éléphant → éléphant", items: ["lune / parapluie", "ordinateur / stylo"] },
    ],
  },
  {
    entete: E, titre: "L'ordre alphabétique", niveau: "CE1", discipline: "Français",
    blocs: [
      { kind: "exercice", consigne: "Range ces lettres dans l'ordre.", aide: "a b c d e…", exemple: "d - a - c → a, c, d", items: ["m - a - f → ……", "r - b - p → ……"] },
      { kind: "exercice", consigne: "Range ces mots dans l'ordre alphabétique.", exemple: "chat, âne, loup → âne, chat, loup", items: ["banane, abricot, cerise → ……", "train, auto, bus → ……"] },
    ],
  },
  {
    entete: E, titre: "Le son [an]", niveau: "CE1", discipline: "Français — orthographe",
    blocs: [
      { kind: "exercice", consigne: "Complète avec an ou en.", aide: "an = en", exemple: "l'enf…t → enfant", items: ["un éléph……t", "le v……t", "la m……ge (maman mange)", "gr……d"] },
      { kind: "exercice", consigne: "Entoure les mots où tu entends [an].", items: ["dimanche · lundi · tante · souris"] },
    ],
  },
  {
    entete: E, titre: "Masculin ou féminin ?", niveau: "CE1", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Écris un ou une devant le mot.", exemple: "…… lune → une lune", items: ["…… chat", "…… maison", "…… ballon", "…… école"] },
      { kind: "exercice", consigne: "Mets au féminin.", exemple: "un ami → une amie", items: ["un marchand → ……", "un ours → ……"] },
    ],
  },
  {
    entete: E, titre: "Singulier ou pluriel ?", niveau: "CE1 · CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Mets au pluriel (ajoute s).", exemple: "un chat → des chats", items: ["un livre → ……", "une fleur → ……", "un vélo → ……"] },
      { kind: "exercice", consigne: "Entoure quand il y en a plusieurs.", items: ["le chien · les oiseaux · des pommes · la table"] },
    ],
  },
  {
    entete: E, titre: "Le nom", niveau: "CE1 · CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Entoure les noms.", exemple: "Le chien court. → chien", items: ["La maîtresse lit un livre.", "Léa mange une pomme."] },
      { kind: "exercice", consigne: "Nom propre (majuscule) ou nom commun ? Classe-les.", exemple: "Paris = propre · ville = commun", items: ["Lyon → ……", "chien → ……", "Marie → ……", "école → ……"] },
    ],
  },
  {
    entete: E, titre: "Les déterminants", niveau: "CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Complète avec le, la, les ou un, une, des.", exemple: "…… soleil → le soleil", items: ["…… étoiles", "…… voiture", "…… cartable", "…… oiseaux"] },
      { kind: "exercice", consigne: "Entoure le déterminant dans chaque groupe.", exemple: "la jolie fleur → la", items: ["un grand arbre", "des petits chats"] },
    ],
  },
  {
    entete: E, titre: "Le verbe", niveau: "CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Entoure le verbe (l'action).", exemple: "Le chat dort. → dort", items: ["Léa saute à la corde.", "Nous mangeons à midi.", "Le train roule vite."] },
      { kind: "exercice", consigne: "Relie le verbe à son infinitif.", exemple: "je mange → manger", items: ["je cours → ……", "tu chantes → ……"] },
    ],
  },
  {
    entete: E, titre: "Les types de phrases", niveau: "CE1 · CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Mets le bon point : . ? !", exemple: "Tu viens ? ", items: ["Le soleil brille ……", "As-tu faim ……", "Quelle belle journée ……", "Ferme la porte ……"] },
      { kind: "exercice", consigne: "Écris une phrase qui pose une question.", lignes: 1 },
    ],
  },
  {
    entete: E, titre: "Les contraires", niveau: "CE1", discipline: "Français — vocabulaire",
    blocs: [
      { kind: "exercice", consigne: "Relie chaque mot à son contraire.", exemple: "grand → petit", items: ["chaud → ……", "jour → ……", "content → ……", "ouvert → ……"] },
      { kind: "exercice", consigne: "Écris le contraire.", exemple: "monter → descendre", items: ["grand → ……", "lent → ……"] },
    ],
  },
  {
    entete: E, titre: "Je lis et je comprends", niveau: "CE1", discipline: "Français — lecture",
    blocs: [
      { kind: "def", titre: "Le petit texte", contenu: "Tom a un chien. Il s'appelle Filou. Tous les matins, Tom et Filou vont au parc. Filou aime courir après la balle rouge." },
      { kind: "exercice", consigne: "Réponds par une phrase.", reponses: true, items: ["Comment s'appelle le chien ?", "Où vont-ils le matin ?", "De quelle couleur est la balle ?"] },
    ],
  },

  /* ============================ MATHS ============================ */
  {
    entete: E, titre: "Les nombres jusqu'à 100", niveau: "CE1", discipline: "Maths — nombres",
    blocs: [
      { kind: "exercice", consigne: "Écris en chiffres.", exemple: "vingt-trois → 23", items: ["quarante → ……", "cinquante-six → ……", "quatre-vingts → ……"] },
      { kind: "exercice", consigne: "Écris le nombre d'avant et d'après.", exemple: "…… 30 …… → 29 · 31", items: ["…… 50 ……", "…… 79 ……"] },
    ],
  },
  {
    entete: E, titre: "Dizaines et unités", niveau: "CE1", discipline: "Maths — nombres",
    blocs: [
      { kind: "exercice", consigne: "Décompose.", exemple: "47 = 4 d et 7 u", items: ["62 = …… d et …… u", "35 = …… d et …… u", "90 = …… d et …… u"] },
      { kind: "exercice", consigne: "Écris le nombre.", exemple: "5 d et 3 u = 53", items: ["7 d et 1 u = ……", "2 d et 8 u = ……"] },
    ],
  },
  {
    entete: E, titre: "Ranger les nombres", niveau: "CE1 · CE2", discipline: "Maths — nombres",
    blocs: [
      { kind: "exercice", consigne: "Compare avec < , > ou =.", aide: "< plus petit", exemple: "24 < 42", items: ["36 …… 63", "80 …… 80", "19 …… 9"] },
      { kind: "exercice", consigne: "Range du plus petit au plus grand.", exemple: "12, 5, 20 → 5, 12, 20", items: ["45, 14, 41 → ……", "70, 7, 17 → ……"] },
    ],
  },
  {
    entete: E, titre: "Les nombres jusqu'à 1 000", niveau: "CE2", discipline: "Maths — nombres",
    blocs: [
      { kind: "exercice", consigne: "Écris en chiffres.", exemple: "deux cent cinq → 205", items: ["trois cents → ……", "cent douze → ……", "sept cent quatre-vingts → ……"] },
      { kind: "base10", centaines: 2, dizaines: 1, unites: 3, legende: "Écris le nombre", masquer: true },
    ],
  },
  {
    entete: E, titre: "Les additions", niveau: "CE1", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Calcule.", exemple: "24 + 5 = 29", items: ["12 + 7 = ……", "30 + 20 = ……", "43 + 6 = ……", "25 + 4 = ……"] },
      { kind: "exercice", consigne: "Complète pour aller à 10.", exemple: "7 + 3 = 10", items: ["6 + …… = 10", "8 + …… = 10", "4 + …… = 10"] },
    ],
  },
  {
    entete: E, titre: "Poser une addition", niveau: "CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "def", titre: "Je me rappelle", contenu: "J'aligne les unités sous les unités. Je calcule les unités, puis les dizaines. Je n'oublie pas la retenue." },
      { kind: "exercice", consigne: "Pose et calcule sur ton cahier.", exemple: "45 + 37 = 82", items: ["54 + 28 = ……", "126 + 43 = ……", "238 + 59 = ……"] },
    ],
  },
  {
    entete: E, titre: "Les soustractions", niveau: "CE1", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Calcule.", exemple: "28 − 5 = 23", items: ["19 − 6 = ……", "50 − 20 = ……", "47 − 4 = ……", "36 − 3 = ……"] },
      { kind: "exercice", consigne: "Combien il manque pour aller à 10 ?", exemple: "10 − 6 = 4", items: ["10 − 3 = ……", "10 − 8 = ……"] },
    ],
  },
  {
    entete: E, titre: "Poser une soustraction", niveau: "CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "def", titre: "Je me rappelle", contenu: "J'aligne les unités. Si je ne peux pas (3 − 8), j'échange une dizaine. Je calcule les unités, puis les dizaines." },
      { kind: "exercice", consigne: "Pose et calcule sur ton cahier.", exemple: "52 − 18 = 34", items: ["63 − 27 = ……", "85 − 49 = ……", "140 − 26 = ……"] },
    ],
  },
  {
    entete: E, titre: "Doubles et moitiés", niveau: "CE1 · CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Écris le double.", exemple: "double de 4 = 8", items: ["double de 5 = ……", "double de 10 = ……", "double de 7 = ……"] },
      { kind: "exercice", consigne: "Écris la moitié.", exemple: "moitié de 8 = 4", items: ["moitié de 10 = ……", "moitié de 6 = ……", "moitié de 20 = ……"] },
    ],
  },
  {
    entete: E, titre: "La multiplication", niveau: "CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Écris la multiplication.", exemple: "3 groupes de 2 → 3 × 2 = 6", items: ["4 groupes de 5 → …… × …… = ……", "2 groupes de 6 → …… × …… = ……"] },
      { kind: "exercice", consigne: "Calcule (tables de 2, 5 et 10).", exemple: "5 × 2 = 10", items: ["2 × 4 = ……", "5 × 3 = ……", "10 × 2 = ……", "2 × 7 = ……"] },
    ],
  },
  {
    entete: E, titre: "Les tables de 2 et de 5", niveau: "CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Complète la table de 2.", exemple: "2 × 1 = 2", items: ["2 × 2 = ……", "2 × 3 = ……", "2 × 5 = ……", "2 × 8 = ……"] },
      { kind: "exercice", consigne: "Complète la table de 5.", exemple: "5 × 1 = 5", items: ["5 × 2 = ……", "5 × 4 = ……", "5 × 6 = ……", "5 × 10 = ……"] },
    ],
  },
  {
    entete: E, titre: "Je résous un problème", niveau: "CE1 · CE2", discipline: "Maths — problèmes",
    blocs: [
      { kind: "exercice", consigne: "Lis, calcule et réponds.", reponses: true, items: ["Léa a 12 billes. Elle en gagne 7. Combien en a-t-elle ?", "Il y a 4 boîtes de 5 crayons. Combien de crayons ?", "Tom a 20 images, il en donne 8. Combien lui en reste-t-il ?"] },
    ],
  },
  {
    entete: E, titre: "La monnaie", niveau: "CE1", discipline: "Maths — mesures",
    blocs: [
      { kind: "exercice", consigne: "Combien d'euros en tout ?", exemple: "5 € + 2 € = 7 €", items: ["10 € + 5 € = …… €", "20 € + 10 € + 1 € = …… €"] },
      { kind: "exercice", consigne: "J'ai 10 €. Combien me reste-t-il si je paie… ?", exemple: "10 € − 3 € = 7 €", items: ["j'achète un livre à 6 € → …… €", "j'achète un stylo à 2 € → …… €"] },
    ],
  },
  {
    entete: E, titre: "Lire l'heure", niveau: "CE1", discipline: "Maths — mesures",
    blocs: [
      { kind: "def", titre: "Je me rappelle", contenu: "La petite aiguille montre les heures. Quand la grande aiguille est sur le 12, c'est une heure « pile »." },
      { kind: "exercice", consigne: "Écris l'heure (petite aiguille sur…).", exemple: "petite aiguille sur 3, grande sur 12 → 3 heures", items: ["sur 8 → …… heures", "sur 6 → …… heures", "sur 11 → …… heures"] },
    ],
  },
  {
    entete: E, titre: "Les formes", niveau: "CE1 · CE2", discipline: "Maths — géométrie",
    blocs: [
      { kind: "exercice", consigne: "Combien de côtés ?", exemple: "un carré → 4 côtés", items: ["un triangle → …… côtés", "un rectangle → …… côtés"] },
      { kind: "exercice", consigne: "Trace à la règle sur ton cahier.", items: ["un trait de 5 cm", "un carré de 3 cm de côté"] },
      { kind: "def", titre: "Astuce", contenu: "Le carré a 4 côtés égaux. Le rectangle a 4 côtés mais 2 longs et 2 courts." },
    ],
  },
];

export function DossierAutonomieCE1() {
  return (
    <div>
      {FICHES.map((f, i) => (
        <div key={i}>
          {i > 0 && <div className="fiche-pagebreak" style={{ height: 0 }} />}
          <FichePedagogiqueA4 data={f} />
        </div>
      ))}
    </div>
  );
}
