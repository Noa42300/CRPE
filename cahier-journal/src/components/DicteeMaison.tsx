/**
 * Dictées « maison » (le temps de s'adapter à Graphémo).
 * ------------------------------------------------------
 * Fiche « Mots à apprendre » donnée le mardi (devoirs), pour la dictée du lundi
 * suivant. L'élève lit → cache → écrit → vérifie. CE2 = mots CE1 + mots en plus.
 * Les PHRASES de la dictée restent côté enseignant (dans la séance), pas sur la
 * feuille élève. Contenu original, aucun copyright.
 */
const cursive = "'Caveat','Comic Neue',cursive";

export interface DicteeSemaine {
  id: string;
  semaine: string;      // ex. "Semaine du 22 sept. — dictée lundi 28"
  theme: string;
  motsCE1: string[];
  motsCE2Plus: string[]; // mots EN PLUS pour les CE2
  phrasesCE1: string[];  // dictée (côté enseignant)
  phrasesCE2: string[];
}

export const DICTEES: DicteeSemaine[] = [
  {
    id: "dict1", semaine: "Mots donnés mardi 22 sept. — dictée lundi 28", theme: "mots de la classe",
    motsCE1: ["la classe", "un ami", "avec", "dans", "il y a", "une école"],
    motsCE2Plus: ["la maîtresse", "un cahier", "travailler"],
    phrasesCE1: ["Dans la classe, il y a un ami.", "Je travaille avec un ami."],
    phrasesCE2: ["Dans la classe, la maîtresse travaille avec les amis.", "Il y a un cahier et un livre dans mon école."],
  },
  {
    id: "dict2", semaine: "Mots donnés mardi 29 sept. — dictée lundi 5 oct.", theme: "le son [o] (o, au, eau)",
    motsCE1: ["l'eau", "beau", "chaud", "un bateau", "aussi", "un animal"],
    motsCE2Plus: ["un cadeau", "bientôt", "le dos"],
    phrasesCE1: ["Le bateau est beau.", "L'eau est chaude."],
    phrasesCE2: ["Le beau bateau glisse sur l'eau chaude.", "J'ai aussi un cadeau pour l'animal."],
  },
  {
    id: "dict3", semaine: "Mots donnés mardi 6 oct. — dictée lundi 12 oct.", theme: "le temps qui passe",
    motsCE1: ["lundi", "mardi", "hier", "demain", "le matin", "aujourd'hui"],
    motsCE2Plus: ["la semaine", "toujours", "maintenant"],
    phrasesCE1: ["Hier, c'était lundi.", "Demain, je vais à l'école."],
    phrasesCE2: ["Aujourd'hui, c'est mardi ; hier c'était lundi et demain ce sera mercredi.", "Le matin, je travaille toujours bien."],
  },
  {
    id: "dict0", semaine: "Première dictée — lundi 21 sept.", theme: "les mots de la classe (rentrée)",
    motsCE1: ["la rentrée", "la classe", "un copain", "l'école", "la maîtresse", "content"],
    motsCE2Plus: ["le cartable", "apprendre", "ensemble"],
    phrasesCE1: ["C'est la rentrée à l'école.", "Je suis content dans ma classe."],
    phrasesCE2: ["À la rentrée, la maîtresse et les copains apprennent ensemble.", "Je range mon cartable dans la classe."],
  },
];

export function MotsAApprendre({ d }: { d: DicteeSemaine }) {
  const line = (mot: string, accent: string) => (
    <div key={mot} style={{ display: "flex", alignItems: "flex-end", gap: "4mm", marginBottom: "3.5mm" }}>
      <span style={{ minWidth: "48mm", fontSize: "26px", fontWeight: 700, fontFamily: cursive, color: accent }}>{mot}</span>
      <span style={{ flex: 1, borderBottom: "1.5px solid #94a3b8", height: "9mm" }} />
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
