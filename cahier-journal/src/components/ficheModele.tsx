/**
 * Modèle de fiche d'exercices « façon fichier du commerce » (type « Je
 * m'entraîne » / manuel), demandé par l'enseignant pour que les élèves
 * retrouvent leurs repères : police ronde (Nunito), consignes avec le VERBE en
 * gras, numéros d'exercice entourés, bandeaux de section, tableaux, étiquettes,
 * « colorie le bon mot », « barre l'intrus », défi écriture…
 * Primitives réutilisables pour le français ET les maths.
 */
import React from "react";

export const MODELE_FONT = "'Nunito','Lexend',ui-rounded,system-ui,sans-serif";

/* ---- Page A4 portrait avec en-tête « fichier » ---- */
export function FicheModele({
  matiere, titre, couleur, dots = 4, dotActif = 1, children, page,
}: {
  matiere: string; titre: string; couleur: string; dots?: number; dotActif?: number;
  children: React.ReactNode; page?: string;
}) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#1a1a1a", boxSizing: "border-box", fontFamily: MODELE_FONT, display: "flex", flexDirection: "column" }}>
      {/* bandeau titre */}
      <div style={{ display: "flex", alignItems: "stretch", gap: "3mm", marginBottom: "2mm" }}>
        <div style={{ background: couleur, color: "#fff", borderRadius: "3mm", padding: "1.5mm 4mm", display: "flex", flexDirection: "column", justifyContent: "center", fontWeight: 800 }}>
          <div style={{ fontSize: "10px", opacity: 0.85, letterSpacing: "0.06em" }}>JE M'ENTRAÎNE</div>
          <div style={{ fontSize: "13px" }}>{matiere}</div>
        </div>
        <div style={{ flex: 1, borderBottom: `3px solid ${couleur}`, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "1mm" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <span style={{ fontSize: "22px", fontWeight: 800, color: couleur, textTransform: "uppercase", letterSpacing: "0.01em" }}>{titre}</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#555" }}>Prénom : .................. &nbsp; Date : ............</span>
          </div>
          <div style={{ display: "flex", gap: "1.5mm", marginTop: "1mm" }}>
            {Array.from({ length: dots }).map((_, i) => (
              <span key={i} style={{ width: "6mm", height: "6mm", borderRadius: "50%", border: `2px solid ${couleur}`, color: i + 1 === dotActif ? "#fff" : couleur, background: i + 1 === dotActif ? couleur : "#fff", fontSize: "11px", fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2mm" }}>{children}</div>
      {/* pied de page */}
      <div style={{ marginTop: "2mm", borderTop: "1px solid #ccc", paddingTop: "1mm", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#999" }}>
        <span>{titre}</span><span>{page ?? ""}</span>
      </div>
    </div>
  );
}

/* ---- Bandeau de section (type « IDENTIFIER LES PHONÈMES ») ---- */
export function SectionBar({ children, couleur }: { children: React.ReactNode; couleur: string }) {
  return (
    <div style={{ background: couleur, color: "#fff", fontWeight: 800, fontSize: "11px", letterSpacing: "0.04em", textTransform: "uppercase", padding: "1mm 3mm", borderRadius: "1.5mm", margin: "1mm 0 0.5mm" }}>{children}</div>
  );
}

/* ---- Exercice numéroté (numéro entouré + consigne, verbe en gras) ---- */
export function Exo({ n, couleur, consigne, children }: { n: number; couleur: string; consigne: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1mm" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2mm", marginBottom: "0.8mm" }}>
        <span style={{ flex: "0 0 auto", width: "6mm", height: "6mm", borderRadius: "50%", background: couleur, color: "#fff", fontSize: "12px", fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
        <span style={{ fontSize: "12.5px", fontWeight: 600, paddingTop: "0.6mm" }}>{consigne}</span>
      </div>
      <div style={{ paddingLeft: "8mm" }}>{children}</div>
    </div>
  );
}

/* ---- Tableau (en-têtes + lignes vides à remplir) ---- */
export function Tableau({ entetes, lignes = 4, couleur }: { entetes: string[]; lignes?: number; couleur: string }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", margin: "1mm 0", tableLayout: "fixed" }}>
      <thead>
        <tr>{entetes.map((e, i) => <th key={i} style={{ border: "1.5px solid #333", background: couleur, color: "#fff", fontSize: "11px", fontWeight: 800, padding: "1mm" }}>{e}</th>)}</tr>
      </thead>
      <tbody>
        {Array.from({ length: lignes }).map((_, r) => (
          <tr key={r}>{entetes.map((_, c) => <td key={c} style={{ border: "1.5px solid #333", height: "7mm" }} />)}</tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---- Étiquettes (pilules arrondies à colorier / entourer) ---- */
export function Etiquettes({ mots, couleur }: { mots: string[]; couleur: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm", margin: "1mm 0" }}>
      {mots.map((m, i) => <span key={i} style={{ border: `2px solid ${couleur}`, borderRadius: "999px", padding: "0.8mm 4mm", fontSize: "14px", fontWeight: 600 }}>{m}</span>)}
    </div>
  );
}

/* ---- Choix entre deux (ou plusieurs) mots encadrés séparés par / ---- */
export function Choix({ options }: { options: string[] }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "1mm", verticalAlign: "middle" }}>
      {options.map((o, i) => (
        <React.Fragment key={i}>
          <span style={{ border: "1.5px solid #333", borderRadius: "1.5mm", padding: "0.3mm 2.5mm", fontSize: "13px", fontWeight: 700 }}>{o}</span>
          {i < options.length - 1 && <span style={{ fontWeight: 700 }}>/</span>}
        </React.Fragment>
      ))}
    </span>
  );
}

/* ---- Liste de mots en ligne (pour « barre l'intrus ») ---- */
export function ListeIntrus({ mots }: { mots: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm 4mm", margin: "0.5mm 0 1.5mm" }}>
      {mots.map((m, i) => <span key={i} style={{ border: "1.5px solid #333", borderRadius: "1.5mm", padding: "0.5mm 3mm", fontSize: "13px", fontWeight: 600 }}>{m}</span>)}
    </div>
  );
}

/* ---- Lignes d'écriture ---- */
export function LignesModele({ n }: { n: number }) {
  return (
    <div style={{ margin: "0.5mm 0" }}>
      {Array.from({ length: n }).map((_, i) => <div key={i} style={{ borderBottom: "1.6px solid #9aa4b2", height: "6.5mm" }} />)}
    </div>
  );
}

/* ---- Case image (petit dessin + ligne pour écrire dessous) ---- */
export function CaseImage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "1mm", margin: "0 2mm" }}>
      <div style={{ width: "22mm", height: "20mm", border: "1.5px solid #333", borderRadius: "2mm", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px" }}>{children}</div>
      <div style={{ width: "26mm", borderBottom: "1.6px solid #9aa4b2", height: "5mm" }} />
    </div>
  );
}

/* ---- Bandeau « DÉFI ÉCRITURE » ---- */
export function Defi({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "1mm" }}>
      <div style={{ display: "inline-block", background: "#334155", color: "#fff", fontWeight: 800, fontSize: "11px", letterSpacing: "0.05em", padding: "1mm 5mm", clipPath: "polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)" }}>★ DÉFI ÉCRITURE ★</div>
      <div style={{ marginTop: "1mm", fontSize: "12.5px", fontWeight: 600 }}>{children}</div>
    </div>
  );
}
