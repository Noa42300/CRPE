/**
 * Modèle de leçon « cahier » — mise en page validée par l'enseignant pour les
 * leçons de Questionner le monde (histoire, géographie, sciences).
 * Écriture manuscrite Borel, marge rouge de cahier, paragraphes numérotés,
 * grande illustration (carte / photos), encadré « Le savais-tu ? ». Pleine page.
 *   variant="haut" : illustration en haut, texte dessous (photos, cartes larges).
 *   variant="cote" : illustration à gauche, texte à droite (cartes carrées).
 */
import React from "react";

const BOREL = "'Borel', cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

export type LeconPoint = { t: React.ReactNode };

export function MotCle({ accent, children }: { accent: string; children: React.ReactNode }) {
  return <b style={{ color: accent, borderBottom: `2px solid ${accent}` }}>{children}</b>;
}

export function LeconCahier({
  titre, sousTitre, accent, emojiL = "", emojiR = "", visuel, legende, points, savaisTu,
  visuelMaxH = "62mm", titreSize = "38px", variant = "haut",
}: {
  titre: string;
  sousTitre?: string;
  accent: string;
  emojiL?: string;
  emojiR?: string;
  visuel?: React.ReactNode;
  legende?: string;
  points: LeconPoint[];
  savaisTu?: React.ReactNode;
  visuelMaxH?: string;
  titreSize?: string;
  variant?: "haut" | "cote";
}) {
  const Num = ({ n }: { n: number }) => (
    <span style={{ display: "inline-flex", width: "7mm", height: "7mm", borderRadius: "50%", background: accent, color: "#fff", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", alignItems: "center", justifyContent: "center", verticalAlign: "middle", marginRight: "2mm", flex: "0 0 auto" }}>{n}</span>
  );
  const Points = ({ taille = "19px", espace = "space-evenly" as const }) => (
    <div style={{ flex: 1, borderLeft: "2.5px solid #ef4444", paddingLeft: "7mm", display: "flex", flexDirection: "column", justifyContent: espace, gap: variant === "cote" ? "4mm" : "0", fontSize: taille, lineHeight: 1.6 }}>
      {points.map((p, i) => <p key={i} style={{ margin: 0 }}><Num n={i + 1} /> {p.t}</p>)}
    </div>
  );
  const Illu = ({ children }: { children: React.ReactNode }) => (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: visuelMaxH }}>{children}</div>
      {legende && <div style={{ textAlign: "center", fontSize: "14px", marginTop: "0.5mm", color: "#6b4a2a", fontFamily: BOREL }}>{legende}</div>}
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fffdf9", color: "#1a1a1a", boxSizing: "border-box", fontFamily: BOREL, display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: "3mm" }}>
        <h1 style={{ fontSize: titreSize, margin: 0, color: accent, fontFamily: BOREL, lineHeight: 1.1 }}>{emojiL} {titre} {emojiR}</h1>
        {sousTitre && <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", fontWeight: 800, color: "#64748b", letterSpacing: "0.12em", marginTop: "0.5mm" }}>{sousTitre}</div>}
      </div>

      {variant === "cote" ? (
        <>
          <div style={{ flex: 1, display: "flex", gap: "6mm", alignItems: "center" }}>
            {visuel && <div style={{ flex: "0 0 46%", maxWidth: "46%" }}><Illu>{visuel}</Illu></div>}
            <Points espace="space-evenly" />
          </div>
        </>
      ) : (
        <>
          {visuel && <div style={{ marginBottom: "4mm" }}><Illu>{visuel}</Illu></div>}
          <Points espace="space-evenly" />
        </>
      )}

      {savaisTu && (
        <div style={{ marginTop: "4mm", border: `2.5px solid ${accent}`, borderRadius: "4mm", padding: "3mm 5mm", background: "#fff4e0", fontSize: "18px" }}>{savaisTu}</div>
      )}
    </div>
  );
}
