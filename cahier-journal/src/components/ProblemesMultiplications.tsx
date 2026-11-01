/**
 * Maths — Problèmes + multiplications, feuille d'exercices DIFFÉRENCIÉE.
 * Une feuille A4 paysage : colonne CE1 (plus simple, tables de 2/5/10, petits
 * nombres) | colonne CE2 (plus dur). Problèmes de « groupes égaux » (on
 * multiplie, pas on additionne) + calculs de multiplication. Exemple en tête.
 */
import { LandscapeDoc, Feuille, Trait, Consigne, Exemple, CURSIVE } from "./ficheLandscape";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

function Niveau({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "inline-block", background: color, color: "#fff", fontWeight: 800, fontSize: "13px", padding: "0.8mm 4mm", borderRadius: "999px", fontFamily: CONSIGNE_FONT, marginBottom: "1.5mm" }}>{label}</div>
  );
}

function Probleme({ enonce }: { enonce: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1mm" }}>
      <div style={{ fontFamily: CURSIVE, fontSize: "17px", color: "#111" }}>{enonce}</div>
      <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "2mm", height: "17mm", margin: "1mm 0" }} />
      <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "10.5px", fontWeight: 700 }}>Calcul : ...........................  Réponse : ...........................</div>
    </div>
  );
}

function Calculs({ ops }: { ops: string[] }) {
  return (
    <div style={{ fontFamily: CURSIVE, fontSize: "19px", display: "flex", flexWrap: "wrap", gap: "1mm 6mm", marginTop: "1mm" }}>
      {ops.map((o, i) => <span key={i}>{o} = ……</span>)}
    </div>
  );
}

export function ProblemesMultiplicationsExos() {
  return (
    <LandscapeDoc>
      <Feuille titre="Problèmes et multiplications" sousTitre="Je cherche les groupes égaux, puis je multiplie">
        {/* ---- CE1 ---- */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0 3mm" }}>
          <div>
            <Niveau label="CE1" color="#e0920a" />
            <Consigne n={1}>Résous le problème. Dessine les groupes, écris la multiplication.</Consigne>
            <Exemple>3 tables de 2 → 3 × 2 = 6 élèves</Exemple>
            <Probleme enonce={<>Il y a <b>4 tables</b> de <b>2 élèves</b>. Combien d'élèves&nbsp;?</>} />
            <Probleme enonce={<>J'ai <b>5 paquets</b> de <b>2 gâteaux</b>. Combien de gâteaux&nbsp;?</>} />
          </div>
          <div>
            <Consigne n={2}>Calcule (tables de 2, 5 et 10).</Consigne>
            <Exemple>2 × 3 = 6</Exemple>
            <Calculs ops={["2 × 4", "2 × 5", "5 × 2", "10 × 2", "2 × 6", "5 × 3"]} />
          </div>
        </div>
        <Trait />
        {/* ---- CE2 ---- */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0 3mm" }}>
          <div>
            <Niveau label="CE2" color="#2C6FB5" />
            <Consigne n={1}>Résous le problème. Écris la multiplication et la phrase réponse.</Consigne>
            <Exemple>6 boîtes de 4 → 6 × 4 = 24 crayons</Exemple>
            <Probleme enonce={<>Dans la classe, il y a <b>5 rangées</b> de <b>6 chaises</b>. Combien de chaises&nbsp;?</>} />
            <Probleme enonce={<>Le fleuriste fait <b>7 bouquets</b> de <b>4 fleurs</b>. Combien de fleurs&nbsp;?</>} />
          </div>
          <div>
            <Consigne n={2}>Calcule.</Consigne>
            <Exemple>3 × 4 = 12</Exemple>
            <Calculs ops={["3 × 5", "4 × 5", "6 × 3", "7 × 2", "5 × 5", "4 × 6", "8 × 2", "3 × 7"]} />
          </div>
        </div>
      </Feuille>
    </LandscapeDoc>
  );
}
