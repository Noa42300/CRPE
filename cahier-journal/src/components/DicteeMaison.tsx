/**
 * Dictées « maison » (le temps de s'adapter à Graphémo).
 * ------------------------------------------------------
 * PROGRAMMATION THÉMATIQUE sur l'année : chaque dictée a un thème (la classe,
 * les animaux, les pièces de la maison, le voyage…) pour enrichir et varier le
 * vocabulaire. Fiche « Mots à apprendre » donnée le mardi (devoirs) pour la
 * dictée du lundi suivant. L'élève lit → cache → écrit → vérifie. CE2 = mots CE1
 * + mots en plus. Les PHRASES de la dictée restent côté enseignant (dans la
 * séance), pas sur la feuille élève. Contenu original, aucun copyright.
 */
import { WikiImage } from "./WikiImage";

const cursive = "'Caveat','Comic Neue',cursive";
const ecoleCursive = "'Borel','Comic Neue',cursive"; // vraie cursive attachée (élèves)

/** Titre Wikipédia pour illustrer un mot (photo libre de droits via WikiImage). */
const MOT_IMG: Record<string, string> = {
  "la rentrée": "Rentrée scolaire", "la classe": "Salle de classe", "un copain": "Amitié",
  "l'école": "École primaire en France", "la maîtresse": "Professeur des écoles", "content": "Sourire",
  "le cartable": "Cartable", "apprendre": "Apprentissage", "ensemble": "Amitié",
};
function wikiTitleForMot(mot: string): string {
  const key = mot.trim().toLowerCase();
  if (MOT_IMG[key]) return MOT_IMG[key];
  let m = mot.trim().replace(/^(l['’]|d['’]|le |la |les |un |une |des )/i, "");
  return m.charAt(0).toUpperCase() + m.slice(1);
}

export interface DicteeSemaine {
  id: string;
  semaine: string;      // ex. "Mots donnés mardi 22 sept. — dictée lundi 28"
  theme: string;
  motsCE1: string[];
  motsCE2Plus: string[]; // mots EN PLUS pour les CE2
  phrasesCE1: string[];  // dictée (côté enseignant)
  phrasesCE2: string[];
}

/**
 * Programmation thématique de l'année (dictées maison).
 * Ordre chronologique : dict0 = première dictée (rentrée), puis un thème par
 * semaine. Les 3 premières sont datées (posées 28/09, 05/10, 12/10) ; les
 * suivantes forment la réserve thématique, à poser au fil de l'année.
 */
export const DICTEES: DicteeSemaine[] = [
  {
    id: "dict0", semaine: "Première dictée — lundi 21 sept.", theme: "la rentrée & la classe",
    motsCE1: ["la rentrée", "la classe", "un copain", "l'école", "la maîtresse", "content"],
    motsCE2Plus: ["le cartable", "apprendre", "ensemble"],
    phrasesCE1: ["C'est la rentrée à l'école.", "Je suis content dans ma classe."],
    phrasesCE2: ["À la rentrée, la maîtresse et les copains apprennent ensemble.", "Je range mon cartable dans la classe."],
  },
  {
    id: "dict-animaux", semaine: "Mots donnés mardi 22 sept. — dictée lundi 28", theme: "les animaux",
    motsCE1: ["un chat", "un chien", "un lapin", "une poule", "un cheval", "la ferme"],
    motsCE2Plus: ["un écureuil", "sauvage", "la forêt"],
    phrasesCE1: ["Le chat joue avec le chien.", "Le lapin court dans la ferme."],
    phrasesCE2: ["Dans la forêt, l'écureuil sauvage grimpe sur un arbre.", "La poule et le cheval vivent à la ferme."],
  },
  {
    id: "dict-maison", semaine: "Mots donnés mardi 29 sept. — dictée lundi 5 oct.", theme: "les pièces de la maison",
    motsCE1: ["la maison", "le salon", "la cuisine", "la chambre", "une porte", "une table"],
    motsCE2Plus: ["la salle de bains", "l'escalier", "le grenier"],
    phrasesCE1: ["Dans le salon, il y a une table.", "Je dors dans ma chambre."],
    phrasesCE2: ["La cuisine et la salle de bains sont en bas de l'escalier.", "Je monte au grenier de la maison."],
  },
  {
    id: "dict-automne", semaine: "Mots donnés mardi 6 oct. — dictée lundi 12 oct.", theme: "l'automne",
    motsCE1: ["l'automne", "une feuille", "un arbre", "le vent", "la pluie", "un marron"],
    motsCE2Plus: ["la forêt", "ramasser", "la couleur"],
    phrasesCE1: ["En automne, les feuilles tombent.", "Le vent souffle sur l'arbre."],
    phrasesCE2: ["En automne, je ramasse des marrons de toutes les couleurs.", "La pluie et le vent arrivent souvent dans la forêt."],
  },
  {
    id: "dict-corps", semaine: "Dictée thématique (à poser)", theme: "le corps humain",
    motsCE1: ["la tête", "la main", "le pied", "le bras", "la jambe", "les yeux"],
    motsCE2Plus: ["l'épaule", "le genou", "le visage"],
    phrasesCE1: ["Je lève la main et le bras.", "J'ai deux yeux sur le visage."],
    phrasesCE2: ["Je plie le genou et je bouge l'épaule.", "Le visage, les bras et les jambes bougent quand je cours."],
  },
  {
    id: "dict-aliments", semaine: "Dictée thématique (à poser)", theme: "les aliments & le repas",
    motsCE1: ["le pain", "l'eau", "une pomme", "le lait", "un gâteau", "manger"],
    motsCE2Plus: ["le repas", "un légume", "délicieux"],
    phrasesCE1: ["Je mange du pain et une pomme.", "Je bois de l'eau et du lait."],
    phrasesCE2: ["Au repas, je mange un légume et un gâteau délicieux.", "Le pain et le lait sont sur la table."],
  },
  {
    id: "dict-voyage", semaine: "Dictée thématique (à poser)", theme: "le voyage & les transports",
    motsCE1: ["un train", "une voiture", "un vélo", "un avion", "la route", "partir"],
    motsCE2Plus: ["le voyage", "la valise", "l'aéroport"],
    phrasesCE1: ["Je pars en train.", "La voiture roule sur la route."],
    phrasesCE2: ["Pour le voyage, je prends ma valise et je vais à l'aéroport.", "L'avion et le train sont très rapides."],
  },
  {
    id: "dict-hiver", semaine: "Dictée thématique (à poser)", theme: "l'hiver",
    motsCE1: ["l'hiver", "la neige", "le froid", "un bonnet", "un gant", "blanc"],
    motsCE2Plus: ["la glace", "glisser", "un flocon"],
    phrasesCE1: ["En hiver, il fait froid.", "La neige est blanche."],
    phrasesCE2: ["Je mets un bonnet et des gants pour ne pas avoir froid.", "Les flocons de neige glissent sur la glace."],
  },
  {
    id: "dict-noel", semaine: "Dictée thématique (à poser)", theme: "Noël & les fêtes",
    motsCE1: ["Noël", "un cadeau", "le sapin", "une étoile", "la fête", "la joie"],
    motsCE2Plus: ["décorer", "une guirlande", "offrir"],
    phrasesCE1: ["Je décore le sapin de Noël.", "J'ouvre un beau cadeau."],
    phrasesCE2: ["Pour la fête de Noël, je décore le sapin avec des guirlandes et une étoile.", "J'offre un cadeau avec joie."],
  },
  {
    id: "dict-vetements", semaine: "Dictée thématique (à poser)", theme: "les vêtements",
    motsCE1: ["un pull", "un pantalon", "une robe", "un manteau", "mettre", "chaud"],
    motsCE2Plus: ["une écharpe", "s'habiller", "des chaussures"],
    phrasesCE1: ["Je mets un pull et un pantalon.", "La robe est jolie."],
    phrasesCE2: ["Je m'habille avec un manteau chaud et une écharpe.", "Mes chaussures et mon pull sont neufs."],
  },
  {
    id: "dict-famille", semaine: "Dictée thématique (à poser)", theme: "la famille",
    motsCE1: ["la famille", "le papa", "la maman", "le frère", "la sœur", "un bébé"],
    motsCE2Plus: ["les parents", "un grand-père", "une grand-mère"],
    phrasesCE1: ["J'aime ma famille.", "Mon frère joue avec ma sœur."],
    phrasesCE2: ["Mes parents, mon grand-père et ma grand-mère sont à la maison.", "Le bébé de la famille sourit à sa maman."],
  },
  {
    id: "dict-metiers", semaine: "Dictée thématique (à poser)", theme: "les métiers",
    motsCE1: ["un docteur", "un boulanger", "un pompier", "un facteur", "le travail", "aider"],
    motsCE2Plus: ["un métier", "une infirmière", "soigner"],
    phrasesCE1: ["Le boulanger fait du pain.", "Le pompier aide les gens."],
    phrasesCE2: ["Le docteur et l'infirmière soignent les malades : c'est leur métier.", "Le facteur apporte le courrier à son travail."],
  },
  {
    id: "dict-meteo", semaine: "Dictée thématique (à poser)", theme: "le temps qu'il fait",
    motsCE1: ["le soleil", "la pluie", "le vent", "un nuage", "chaud", "froid"],
    motsCE2Plus: ["l'orage", "la météo", "briller"],
    phrasesCE1: ["Le soleil brille dans le ciel.", "Il y a du vent et des nuages."],
    phrasesCE2: ["La météo annonce de la pluie et un orage cet après-midi.", "Quand le soleil brille, il fait chaud."],
  },
  {
    id: "dict-jardin", semaine: "Dictée thématique (à poser)", theme: "le jardin & les plantes",
    motsCE1: ["le jardin", "une fleur", "un arbre", "l'herbe", "planter", "arroser"],
    motsCE2Plus: ["une graine", "pousser", "une racine"],
    phrasesCE1: ["Je plante une fleur dans le jardin.", "J'arrose l'herbe verte."],
    phrasesCE2: ["La graine pousse dans la terre et forme des racines.", "Dans le jardin, l'arbre et les fleurs grandissent."],
  },
  {
    id: "dict-fruits", semaine: "Dictée thématique (à poser)", theme: "les fruits & les légumes",
    motsCE1: ["une pomme", "une poire", "une carotte", "une tomate", "rouge", "vert"],
    motsCE2Plus: ["une fraise", "une salade", "un potager"],
    phrasesCE1: ["La pomme est rouge.", "Je mange une carotte verte."],
    phrasesCE2: ["Dans le potager, il y a des tomates, des fraises et de la salade.", "La poire et la pomme sont de bons fruits."],
  },
  {
    id: "dict-ville", semaine: "Dictée thématique (à poser)", theme: "la ville",
    motsCE1: ["la ville", "une rue", "une maison", "un magasin", "la route", "marcher"],
    motsCE2Plus: ["un immeuble", "un trottoir", "traverser"],
    phrasesCE1: ["Je marche dans la rue.", "Il y a un magasin en ville."],
    phrasesCE2: ["Je traverse la route sur le trottoir, devant l'immeuble.", "En ville, les rues et les magasins sont grands."],
  },
  {
    id: "dict-mer", semaine: "Dictée thématique (à poser)", theme: "la mer",
    motsCE1: ["la mer", "le sable", "une vague", "un poisson", "un bateau", "nager"],
    motsCE2Plus: ["un coquillage", "la plage", "plonger"],
    phrasesCE1: ["Je nage dans la mer.", "Le bateau est sur l'eau."],
    phrasesCE2: ["Sur la plage, je ramasse des coquillages dans le sable.", "Le poisson plonge sous les vagues."],
  },
  {
    id: "dict-printemps", semaine: "Dictée thématique (à poser)", theme: "le printemps",
    motsCE1: ["le printemps", "une fleur", "un oiseau", "le soleil", "vert", "joli"],
    motsCE2Plus: ["un papillon", "un nid", "fleurir"],
    phrasesCE1: ["Au printemps, les fleurs poussent.", "L'oiseau chante au soleil."],
    phrasesCE2: ["Au printemps, les papillons volent et les oiseaux font leur nid.", "Les arbres verts fleurissent joliment."],
  },
  {
    id: "dict-sport", semaine: "Dictée thématique (à poser)", theme: "le sport",
    motsCE1: ["le sport", "courir", "sauter", "un ballon", "jouer", "gagner"],
    motsCE2Plus: ["une équipe", "lancer", "l'effort"],
    phrasesCE1: ["Je cours et je saute.", "Je joue au ballon."],
    phrasesCE2: ["Mon équipe lance le ballon et fait des efforts pour gagner.", "Le sport, c'est courir, sauter et jouer ensemble."],
  },
  {
    id: "dict-emotions", semaine: "Dictée thématique (à poser)", theme: "les émotions",
    motsCE1: ["content", "triste", "la peur", "la joie", "pleurer", "rire"],
    motsCE2Plus: ["la colère", "surpris", "rassurer"],
    phrasesCE1: ["Je suis content et je ris.", "Il est triste et il pleure."],
    phrasesCE2: ["Quand j'ai peur, un ami me rassure et la joie revient.", "La colère et la surprise se lisent sur le visage."],
  },
];

/** Retrouve une dictée par son id (robuste au changement d'ordre). */
export function dicteeById(id: string): DicteeSemaine | undefined {
  return DICTEES.find((d) => d.id === id);
}

export function MotsAApprendre({ d }: { d: DicteeSemaine }) {
  const line = (mot: string, accent: string) => (
    <div key={mot} style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "3mm" }}>
      <div style={{ width: "16mm", flexShrink: 0 }}>
        <WikiImage title={wikiTitleForMot(mot)} alt={mot} accent={accent} height="14mm" />
      </div>
      <span style={{ minWidth: "40mm", fontSize: "27px", fontWeight: 400, fontFamily: ecoleCursive, color: accent, lineHeight: 1.1 }}>{mot}</span>
      <span style={{ flex: 1, borderBottom: "1.5px solid #94a3b8", height: "11mm" }} />
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "34px", margin: 0, fontWeight: 700, fontFamily: cursive }}>Mots à apprendre</h1>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>
        </div>
        <p style={{ fontSize: "15px", margin: "0 0 4mm", color: "#333" }}>{d.semaine} · <b>{d.theme}</b></p>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "17px", fontWeight: 800, color: "#2563eb", marginBottom: "2mm" }}>Pour tout le monde (CE1) :</div>
          {d.motsCE1.map((m) => line(m, "#111"))}
          <div style={{ fontSize: "17px", fontWeight: 800, color: "#16a34a", margin: "4mm 0 2mm" }}>En plus pour les CE2 :</div>
          {d.motsCE2Plus.map((m) => line(m, "#16a34a"))}
        </div>

        <div style={{ background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "6px", padding: "3mm 4mm", fontSize: "16px", fontFamily: cursive, textAlign: "center" }}>
          À la maison : 👀 je lis → 🙈 je cache → ✍️ j'écris → 🔎 je vérifie.
        </div>
      </div>
    </div>
  );
}

/** Programmation de l'année : la liste des thèmes de dictée et leurs mots (A4). */
export function ProgDicteesAnnee() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "30px", margin: "0 0 1mm", fontWeight: 700, fontFamily: cursive, textAlign: "center" }}>Programmation des dictées</h1>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#555", margin: "0 0 5mm" }}>Une dictée = un thème · vocabulaire enrichi et varié · CE1 + mots en plus pour les CE2</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
          {DICTEES.map((d, i) => (
            <div key={d.id} style={{ border: "1.5px solid #cbd5e1", borderRadius: "6px", padding: "2.5mm 3mm" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "3mm" }}>
                <span style={{ fontSize: "15px", fontWeight: 800, color: "#111" }}>{i === 0 ? "1re" : `${i + 1}e`} · {d.theme}</span>
                <span style={{ marginLeft: "auto", fontSize: "11px", color: "#888" }}>{d.semaine}</span>
              </div>
              <div style={{ fontSize: "12.5px", color: "#333", marginTop: "1mm" }}>
                <b style={{ color: "#2563eb" }}>CE1 :</b> {d.motsCE1.join(" · ")}
                <span style={{ color: "#16a34a" }}> &nbsp;| &nbsp;+CE2 :</span> {d.motsCE2Plus.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
