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
    entete: "Dossier", titre: "Mon dossier autonomie", niveau: "CE1 · CE2",
    blocs: [
      { kind: "def", titre: "Comment je travaille", contenu: "Je travaille seul, à mon rythme. Je lis bien la consigne, je regarde l'exemple, puis je fais l'exercice. Quand j'ai fini une fiche, j'en prends une autre." },
      { kind: "puces", titre: "Les fiches du dossier", points: ["Français : sons et orthographe · le nom (genre, nombre) · grammaire · vocabulaire et lecture.", "Maths : les nombres · additions et soustractions · multiplication et tables · problèmes et mesures.", "Les exercices avec (CE2) sont pour aller plus loin."] },
      { kind: "champs", items: ["Mon prénom", "La date"] },
    ],
  },

  /* ============================ FRANÇAIS ============================ */
  {
    entete: E, titre: "Sons et orthographe", niveau: "CE1", discipline: "Français — phonologie / orthographe",
    blocs: [
      { kind: "exercice", consigne: "Compte les syllabes. Écris le nombre.", exemple: "cha-peau → 2", items: ["lapin → ……", "voiture → ……", "école → ……", "chocolat → ……", "parapluie → ……"] },
      { kind: "exercice", consigne: "Complète avec an ou en.", aide: "an = en", exemple: "l'enf…t → enfant", items: ["un éléph……t", "le v……t", "la m……ge (maman mange)", "gr……d"] },
      { kind: "exercice", consigne: "Entoure les mots où tu entends [an].", items: ["dimanche · lundi · tante · manteau · souris"] },
      { kind: "exercice", consigne: "Entoure le mot le plus long.", exemple: "chat / éléphant → éléphant", items: ["lune / parapluie", "ordinateur / stylo"] },
    ],
  },
  {
    entete: E, titre: "Le nom : genre et nombre", niveau: "CE1 · CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Écris un ou une devant le mot.", exemple: "…… lune → une lune", items: ["…… chat", "…… maison", "…… école"] },
      { kind: "exercice", consigne: "Mets au féminin.", exemple: "un ami → une amie", items: ["un marchand → ……", "un ours → ……", "un chat → ……"] },
      { kind: "exercice", consigne: "Mets au pluriel (ajoute s).", exemple: "un chat → des chats", items: ["un livre → ……", "une fleur → ……", "un vélo → ……"] },
      { kind: "exercice", consigne: "Entoure les noms.", exemple: "Le chien court. → chien", items: ["La maîtresse lit un livre.", "Léa mange une pomme."] },
      { kind: "exercice", consigne: "Nom propre ou nom commun ? Classe. (CE2)", exemple: "Paris = propre · ville = commun", items: ["Lyon → ……", "chien → ……", "Marie → ……"] },
    ],
  },
  {
    entete: E, titre: "Déterminant, verbe et phrase", niveau: "CE1 · CE2", discipline: "Français — grammaire",
    blocs: [
      { kind: "exercice", consigne: "Complète avec le, la, les ou un, une, des.", exemple: "…… soleil → le soleil", items: ["…… étoiles", "…… voiture", "…… cartable", "…… oiseaux"] },
      { kind: "exercice", consigne: "Entoure le verbe (l'action).", exemple: "Le chat dort. → dort", items: ["Léa saute à la corde.", "Nous mangeons à midi.", "Le train roule vite."] },
      { kind: "exercice", consigne: "Relie le verbe à son infinitif. (CE2)", exemple: "je mange → manger", items: ["je cours → ……", "tu chantes → ……"] },
      { kind: "exercice", consigne: "Mets le bon point : . ? !", exemple: "Tu viens ?", items: ["Le soleil brille ……", "As-tu faim ……", "Quelle belle journée ……", "Ferme la porte ……"] },
    ],
  },
  {
    entete: E, titre: "Vocabulaire et lecture", niveau: "CE1", discipline: "Français — vocabulaire / lecture",
    blocs: [
      { kind: "exercice", consigne: "Range ces mots dans l'ordre alphabétique.", aide: "a b c d…", exemple: "chat, âne, loup → âne, chat, loup", items: ["banane, abricot, cerise → ……", "train, auto, bus → ……"] },
      { kind: "exercice", consigne: "Relie chaque mot à son contraire.", exemple: "grand → petit", items: ["chaud → ……", "jour → ……", "content → ……", "ouvert → ……"] },
      { kind: "def", titre: "Le petit texte", contenu: "Tom a un chien. Il s'appelle Filou. Tous les matins, Tom et Filou vont au parc. Filou aime courir après la balle rouge." },
      { kind: "exercice", consigne: "Réponds par une phrase.", reponses: true, items: ["Comment s'appelle le chien ?", "Où vont-ils le matin ?", "De quelle couleur est la balle ?"] },
    ],
  },

  /* ============================ MATHS ============================ */
  {
    entete: E, titre: "Les nombres", niveau: "CE1 · CE2", discipline: "Maths — nombres",
    blocs: [
      { kind: "exercice", consigne: "Écris en chiffres.", exemple: "vingt-trois → 23", items: ["quarante → ……", "cinquante-six → ……", "quatre-vingts → ……"] },
      { kind: "exercice", consigne: "Écris le nombre d'avant et d'après.", exemple: "…… 30 …… → 29 · 31", items: ["…… 50 ……", "…… 79 ……"] },
      { kind: "exercice", consigne: "Décompose en dizaines et unités.", exemple: "47 = 4 d et 7 u", items: ["62 = …… d et …… u", "35 = …… d et …… u", "90 = …… d et …… u"] },
      { kind: "exercice", consigne: "Compare avec < , > ou =.", aide: "< plus petit", exemple: "24 < 42", items: ["36 …… 63", "80 …… 80", "19 …… 9"] },
      { kind: "exercice", consigne: "Écris en chiffres jusqu'à 1 000. (CE2)", exemple: "deux cent cinq → 205", items: ["trois cents → ……", "cent douze → ……", "sept cent quatre-vingts → ……"] },
    ],
  },
  {
    entete: E, titre: "Additions et soustractions", niveau: "CE1 · CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Calcule les additions.", exemple: "24 + 5 = 29", items: ["12 + 7 = ……", "30 + 20 = ……", "43 + 6 = ……", "25 + 4 = ……"] },
      { kind: "exercice", consigne: "Complète pour aller à 10.", exemple: "7 + 3 = 10", items: ["6 + …… = 10", "8 + …… = 10", "4 + …… = 10"] },
      { kind: "exercice", consigne: "Calcule les soustractions.", exemple: "28 − 5 = 23", items: ["19 − 6 = ……", "50 − 20 = ……", "47 − 4 = ……", "36 − 3 = ……"] },
      { kind: "exercice", consigne: "Pose et calcule sur ton cahier. (CE2)", exemple: "45 + 37 = 82", items: ["54 + 28 = ……", "85 − 49 = ……", "126 + 43 = ……"] },
    ],
  },
  {
    entete: E, titre: "Multiplication et tables", niveau: "CE2", discipline: "Maths — calcul",
    blocs: [
      { kind: "exercice", consigne: "Écris le double et la moitié.", exemple: "double de 4 = 8 · moitié de 8 = 4", items: ["double de 5 = ……", "moitié de 10 = ……", "double de 7 = ……", "moitié de 6 = ……"] },
      { kind: "exercice", consigne: "Écris la multiplication.", exemple: "3 groupes de 2 → 3 × 2 = 6", items: ["4 groupes de 5 → …… × …… = ……", "2 groupes de 6 → …… × …… = ……"] },
      { kind: "exercice", consigne: "Complète la table de 2.", exemple: "2 × 1 = 2", items: ["2 × 2 = ……", "2 × 3 = ……", "2 × 5 = ……", "2 × 8 = ……"] },
      { kind: "exercice", consigne: "Complète la table de 5.", exemple: "5 × 1 = 5", items: ["5 × 2 = ……", "5 × 4 = ……", "5 × 6 = ……", "5 × 10 = ……"] },
    ],
  },
  {
    entete: E, titre: "Problèmes et mesures", niveau: "CE1 · CE2", discipline: "Maths — problèmes / mesures",
    blocs: [
      { kind: "exercice", consigne: "Lis, calcule et réponds.", reponses: true, items: ["Léa a 12 billes. Elle en gagne 7. Combien en a-t-elle ?", "Il y a 4 boîtes de 5 crayons. Combien de crayons ?", "Tom a 20 images, il en donne 8. Combien lui en reste-t-il ?"] },
      { kind: "exercice", consigne: "La monnaie : combien d'euros en tout ?", exemple: "5 € + 2 € = 7 €", items: ["10 € + 5 € = …… €", "20 € + 10 € + 1 € = …… €"] },
      { kind: "exercice", consigne: "Les formes : combien de côtés ?", exemple: "un carré → 4 côtés", items: ["un triangle → …… côtés", "un rectangle → …… côtés"] },
      { kind: "exercice", consigne: "Trace à la règle sur ton cahier.", items: ["un trait de 5 cm", "un carré de 3 cm de côté"] },
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
