/**
 * Fiche de préparation d'une séance, au format A4 portrait (impression / PDF).
 * Utilise `.fiche-a4` (+ `@media print` dans index.css) : sortie propre, sans
 * les menus de l'application. Reprend toutes les rubriques renseignées.
 */
import type { Activity, Settings } from "../lib/types";

function niveauLabel(settings: Settings, id: string): string {
  return settings.niveaux.find((n) => n.id === id)?.label ?? id;
}

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "6mm" }}>
      <h2 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#c9481f", margin: "0 0 2mm", borderBottom: "1.5px solid #eee", paddingBottom: "1mm" }}>{titre}</h2>
      <div style={{ fontSize: "14px", lineHeight: 1.5, color: "#222" }}>{children}</div>
    </section>
  );
}

export function FichePrepA4({ activity, settings }: { activity: Activity; settings: Settings }) {
  const a = activity;
  const niveaux = a.niveaux.map((n) => niveauLabel(settings, n)).join(" · ");
  const meta = [
    a.progPeriode && `Période ${a.progPeriode}`,
    a.progDomaine,
    a.progSequence && `Séquence : ${a.progSequence}`,
    a.progSeance && `Séance ${a.progSeance}`,
  ].filter(Boolean).join("  ·  ");

  return (
    <div className="fiche-a4 font-ludique" style={{ background: "#fff", color: "#111", boxSizing: "border-box" }}>
      <div style={{ borderTop: "8px solid #c9481f", borderRadius: "4px", paddingTop: "5mm", marginBottom: "5mm" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#999" }}>
          Fiche de préparation{niveaux ? ` · ${niveaux}` : ""}
        </div>
        <h1 style={{ fontSize: "26px", margin: "1mm 0 0", fontWeight: 800 }}>{a.title || "Séance"}</h1>
        {meta && <div style={{ fontSize: "12px", color: "#666", marginTop: "2mm" }}>{meta}</div>}
      </div>

      {a.objectif && <Bloc titre="Objectif">{a.objectif}</Bloc>}
      {(a.competence || a.competenceRef) && (
        <Bloc titre="Compétence visée">
          {a.competence}
          {a.competenceRef && <div style={{ color: "#666", fontSize: "12px", marginTop: "1mm" }}>{a.competenceRef}</div>}
        </Bloc>
      )}
      {(a.organisation.length > 0 || a.roleEnseignant.length > 0) && (
        <Bloc titre="Organisation & rôle">
          {a.organisation.length > 0 && <div><strong>Organisation :</strong> {a.organisation.join(", ")}</div>}
          {a.roleEnseignant.length > 0 && <div><strong>Rôle de l'enseignant :</strong> {a.roleEnseignant.join(", ")}</div>}
        </Bloc>
      )}

      {a.deroulement.length > 0 && (
        <Bloc titre="Déroulement">
          <ol style={{ margin: 0, paddingLeft: "6mm" }}>
            {a.deroulement.map((s) => (
              <li key={s.id} style={{ marginBottom: "3mm" }}>
                <span style={{ fontWeight: 700 }}>{s.label}</span>
                {s.note && <div style={{ whiteSpace: "pre-line", marginTop: "1mm", color: "#333" }}>{s.note}</div>}
              </li>
            ))}
          </ol>
        </Bloc>
      )}

      {a.materiel && <Bloc titre="Matériel / supports">{a.materiel}</Bloc>}
      {a.differenciation && <Bloc titre="Différenciation">{a.differenciation}</Bloc>}
      {a.depassement && <Bloc titre="Dépassement / autonomie">{a.depassement}</Bloc>}

      {/* Zone bilan à remplir à la main après la séance. */}
      <Bloc titre="Bilan (à compléter après la séance)">
        <div style={{ borderBottom: "1px dotted #bbb", height: "8mm" }} />
        <div style={{ borderBottom: "1px dotted #bbb", height: "8mm" }} />
      </Bloc>
    </div>
  );
}
