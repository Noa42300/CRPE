/**
 * Fiche de poésie « découverte & copie » (cahier blanc de poésie).
 * -----------------------------------------------------------------
 * Modèle imprimable A4 façon manuel : titre + auteur, réglure Seyès à gauche
 * pour recopier la poésie au propre, cadre « illustration » à droite.
 *
 * NB copyright : le texte des poésies récentes (ex. « La ponctuation » de
 * Maurice Carême) est protégé — je ne le reproduis pas ici. L'élève recopie
 * depuis le modèle affiché au tableau / la photocopie de l'enseignant·e.
 */
export function PoesieCopie({
  titre = "La ponctuation",
  auteur = "Maurice Carême",
}: {
  titre?: string;
  auteur?: string;
}) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* En-tête simple, façon cahier de poésie */}
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "5mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "30px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{titre}</h1>
          <span style={{ fontSize: "17px", color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· {auteur}</span>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "7mm" }}>
          {/* Colonne copie (réglure Seyès) */}
          <div>
            <p style={{ fontSize: "13px", margin: "0 0 3mm", color: "#333" }}>Je recopie la poésie au propre, en soignant mon écriture&nbsp;:</p>
            <div className="seyes" style={{ ["--il" as string]: "20px", minHeight: "225mm", border: "1px solid #cbd5e1", borderRadius: "2mm", padding: "3mm 4mm" }} />
          </div>
          {/* Colonne illustration */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "13px", margin: "0 0 3mm", color: "#333" }}>J'illustre ma poésie&nbsp;:</p>
            <div style={{ flex: 1, minHeight: "225mm", border: "1.5px dashed #94a3b8", borderRadius: "3mm", background: "#fafafa" }} />
          </div>
        </div>

        <p style={{ marginTop: "5mm", fontSize: "11px", color: "#777" }}>
          Poésie du cahier blanc — à apprendre puis réciter. (Texte protégé par le droit d'auteur : recopie depuis le modèle du tableau ou la photocopie de la maîtresse / du maître.)
        </p>
      </div>
    </div>
  );
}
