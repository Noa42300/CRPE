/**
 * Fiche « séance EPS » mise en page clairement (A4) — pour comprendre et mener
 * la séance d'un coup d'œil : objectif, matériel, les phases avec leur durée et
 * ce qu'on dit/fait, la sécurité, les critères de réussite.
 * Complément de la fiche « terrain » (EpsTerrainSupport). `.fiche-a4` + print.
 */
export interface EpsPhase {
  titre: string;
  duree: string;
  points: string[];
}

export interface EpsSeanceData {
  titre: string;
  sousTitre: string;
  objectif: string;
  materiel: string;
  phases: EpsPhase[];
  securite: string[];
  reussite: string[];
}

export function EpsSeanceFiche({ data }: { data: EpsSeanceData }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* En-tête */}
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm" }}>
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{data.titre}</h1>
          <div style={{ fontSize: "13px", color: "#555", marginTop: "1mm" }}>{data.sousTitre}</div>
        </div>

        {/* Objectif + matériel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", marginBottom: "5mm" }}>
          <div style={{ background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🎯 Objectif</div>
            <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{data.objectif}</div>
          </div>
          <div style={{ border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🎒 Matériel</div>
            <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{data.materiel}</div>
          </div>
        </div>

        {/* Déroulement en phases numérotées */}
        <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "2mm" }}>Le déroulement, étape par étape</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm", marginBottom: "5mm" }}>
          {data.phases.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: "3mm", border: "1.5px solid #111", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ flexShrink: 0, width: "12mm", background: "#111", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2mm 0" }}>
                <span style={{ fontSize: "22px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>{i + 1}</span>
              </div>
              <div style={{ flex: 1, padding: "2.5mm 3mm" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "3mm" }}>
                  <span style={{ fontWeight: 800, fontSize: "14.5px" }}>{p.titre}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", background: "#475569", borderRadius: "999px", padding: "0.5mm 3mm", whiteSpace: "nowrap" }}>⏱ {p.duree}</span>
                </div>
                <ul style={{ margin: "1.5mm 0 0", paddingLeft: "5mm", fontSize: "13.5px", lineHeight: 1.5 }}>
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sécurité + réussite */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm" }}>
          <div style={{ border: "1.5px solid #e0b3a2", background: "#fdf3ef", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🦺 Sécurité</div>
            <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: "13px", lineHeight: 1.5 }}>
              {data.securite.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div style={{ border: "1.5px solid #bcd9c3", background: "#f1f8f2", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>✅ J'ai réussi si…</div>
            <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: "13px", lineHeight: 1.5 }}>
              {data.reussite.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Séance 3 (lundi 14) — Découverte : courir vite. */
export const EPS_COURIR_VITE_S3: EpsSeanceData = {
  titre: "EPS — Séance 3 : courir vite",
  sousTitre: "Athlétisme · Période 1 · Découverte (courir vite) · lundi 14 septembre · classe entière",
  objectif: "Réagir vite à un signal et courir vite, tout droit, jusqu'au bout de la ligne.",
  materiel: "3-4 couloirs de ≈ 25 m délimités par des plots ; un plot placé 2 m APRÈS l'arrivée ; sifflet ou cartons de couleur ; (fiche terrain à part).",
  phases: [
    {
      titre: "Mise en train",
      duree: "10 min",
      points: [
        "Je réveille le corps : trottiner, tourner les bras, monter les genoux.",
        "On revoit le signal d'arrêt : au signal, tout le monde s'arrête net.",
        "On teste le signal une fois pour de vrai.",
        "J'annonce le but du jour : « aujourd'hui, on apprend à courir VITE ».",
      ],
    },
    {
      titre: "Jeux de réaction — « les sorciers »",
      duree: "12 min",
      points: [
        "Au signal, on part le plus vite possible.",
        "On part de positions différentes : debout, assis, dos tourné.",
        "On écoute BIEN le signal : celui qui part trop tôt revient au départ.",
        "On court tout droit jusqu'à la ligne.",
      ],
    },
    {
      titre: "Sprints par vagues",
      duree: "13 min",
      points: [
        "Par vagues de 3-4, chacun sprinte dans son couloir.",
        "On court jusqu'au bout, on ralentit APRÈS la ligne (jusqu'au plot).",
        "Rôles qui tournent : un starter, un juge d'arrivée.",
        "On encourage les copains qui courent.",
      ],
    },
    {
      titre: "Retour au calme & bilan",
      duree: "7 min",
      points: [
        "On marche pour récupérer, on respire doucement.",
        "« Qu'est-ce qui t'a aidé à partir vite ? »",
        "« Qu'est-ce que tu veux améliorer la prochaine fois ? »",
        "On range le matériel tous ensemble.",
      ],
    },
  ],
  securite: [
    "Couloirs bien séparés, sol dégagé, plots visibles.",
    "Un seul signal de départ, un seul signal d'arrêt.",
    "On ne coupe pas dans le couloir du voisin.",
    "Échauffement complet avant les sprints.",
  ],
  reussite: [
    "Je pars au signal (pas avant).",
    "Je cours vite et tout droit.",
    "Je ralentis seulement après la ligne d'arrivée.",
  ],
};
