/**
 * Maths — Mini-quiz « Quelle opération ? » (compréhension des problèmes).
 * À côté du problème du jour : l'élève lit un problème, DEVINE l'opération
 * (addition +, soustraction −, multiplication ×) grâce au VOCABULAIRE, et
 * écrit le mot qui l'a aidé. But : créer des automatismes (en tout, de plus,
 * de moins, absents/présents, « … tables de … » = ×) et arrêter les
 * additions à répétition.
 * Format « fichier » (type « Je m'entraîne »).
 */
import { FicheModele, SectionBar, Exo, MODELE_FONT } from "./ficheModele";

const MA = "#0e7490";
const VERT = "#15803d";
const ORANGE = "#c2410c";
const INDIGO = "#4338ca";

/* Cases à cocher pour l'opération. */
function OpChoix() {
  const C = ({ sign, mot, col }: { sign: string; mot: string; col: string }) => (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "1.5mm", marginRight: "6mm" }}>
      <span style={{ width: "4.5mm", height: "4.5mm", border: "1.8px solid #333", borderRadius: "1mm", display: "inline-block" }} />
      <span style={{ fontWeight: 800, fontSize: "14px", color: col }}>{sign}</span>
      <span style={{ fontSize: "11px", color: "#555" }}>{mot}</span>
    </span>
  );
  return (
    <div style={{ marginTop: "0.8mm" }}>
      <C sign="+" mot="addition" col={VERT} /><C sign="−" mot="soustraction" col={ORANGE} /><C sign="×" mot="multiplication" col={INDIGO} />
    </div>
  );
}

function Probleme({ n, texte }: { n: number; texte: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2mm" }}>
      <div style={{ fontSize: "12.5px", fontFamily: MODELE_FONT }}><b>{n})</b> {texte}</div>
      <OpChoix />
      <div style={{ fontSize: "11px", fontFamily: MODELE_FONT, marginTop: "0.6mm" }}>Le mot qui m'aide : ................................................</div>
    </div>
  );
}

export function QuizOperations() {
  return (
    <FicheModele matiere="Problèmes" titre="Quelle opération ?" couleur={MA} dots={3} dotActif={1} page="Quelle opération ?">
      {/* Aide : les mots qui guident vers l'opération */}
      <div style={{ border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2mm 3mm", margin: "0.5mm 0 1.5mm", fontFamily: MODELE_FONT }}>
        <div style={{ fontSize: "11px", fontWeight: 800, color: MA, marginBottom: "0.8mm" }}>Les mots qui m'aident :</div>
        <div style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
          <div><b style={{ color: VERT }}>+ addition</b> : en tout · ensemble · aussi · j'ajoute · de plus (on réunit)</div>
          <div><b style={{ color: ORANGE }}>− soustraction</b> : il reste · j'enlève · absents · de moins · combien de plus que… (on compare)</div>
          <div><b style={{ color: INDIGO }}>× multiplication</b> : … fois … · … paquets de … · … tables de … · chacun · rangées de …</div>
        </div>
      </div>

      <SectionBar couleur={MA}>Devine l'opération</SectionBar>
      <Exo n={1} couleur={MA} consigne={<><b>Lis</b> chaque problème. <b>Coche</b> l'opération, puis <b>écris</b> le mot qui t'a aidé.</>}>
        <Probleme n={1} texte={<>24 élèves vont à la bibliothèque. 3 parents viennent <b>aussi</b>. Combien de personnes <b>en tout</b> ?</>} />
        <Probleme n={2} texte={<>Il y a 23 élèves. Ce matin, 4 élèves sont <b>absents</b>. Combien d'élèves sont <b>présents</b> ?</>} />
        <Probleme n={3} texte={<>Dans la salle, il y a <b>6 tables de 4</b> personnes. Combien de personnes ?</>} />
        <Probleme n={4} texte={<>Léa a 15 billes. Tom en a 9. Combien Léa a-t-elle de billes <b>de plus</b> que Tom ?</>} />
        <Probleme n={5} texte={<>Le marchand range <b>5 paquets de 3</b> pommes. Combien de pommes ?</>} />
      </Exo>

      <div style={{ fontSize: "11px", fontStyle: "italic", color: "#64748b", fontFamily: MODELE_FONT, marginTop: "0.5mm" }}>Astuce : « … tables de … » ou « … paquets de … », c'est une multiplication (6 tables de 4 → 6 × 4). « de plus » quand on compare deux nombres, c'est une soustraction.</div>
    </FicheModele>
  );
}
