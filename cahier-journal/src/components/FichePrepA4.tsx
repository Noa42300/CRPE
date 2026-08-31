/**
 * Fiche de préparation d'une séance — format « inspecteur » classique
 * -------------------------------------------------------------------
 * En-tête d'identification (école, enseignant·e, classe, date, discipline,
 * durée, effectif), objectifs et compétences, matériel, tableau de déroulement
 * (phase · consignes orales de l'enseignant · modalité), différenciation,
 * prolongement, et cadre bilan. Calibré A4 (`.fiche-a4` + `@media print`),
 * imprimable ET téléchargeable en PDF. Peut tenir sur 2 pages : c'est voulu.
 */
import type { Activity, Settings } from "../lib/types";
import { cap, formatLong } from "../lib/dates";
import { disciplineLabel } from "../lib/lookup";

function niveauLabel(settings: Settings, id: string): string {
  return settings.niveaux.find((n) => n.id === id)?.label ?? id;
}
function dureeMin(start?: string, end?: string): string {
  if (!start || !end) return "";
  const [h1, m1] = start.split(":").map(Number);
  const [h2, m2] = end.split(":").map(Number);
  const d = h2 * 60 + m2 - (h1 * 60 + m1);
  return d > 0 ? `${d} min` : "";
}

const cellHead: React.CSSProperties = {
  border: "1px solid #999", padding: "2mm 3mm", background: "#f3efe7",
  fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em", color: "#555", textAlign: "left",
};
const cell: React.CSSProperties = { border: "1px solid #999", padding: "2mm 3mm", fontSize: "13px", verticalAlign: "top" };

export function FichePrepA4({
  activity,
  settings,
  date,
  disciplineId,
  start,
  end,
}: {
  activity: Activity;
  settings: Settings;
  date?: string;
  disciplineId?: string;
  start?: string;
  end?: string;
}) {
  const a = activity;
  const p = settings.profile;
  const teacher = [p.prenom, p.nom].filter(Boolean).join(" ");
  const niveaux = a.niveaux.map((n) => niveauLabel(settings, n)).join(" / ");
  const discipline = disciplineId ? disciplineLabel(settings, disciplineId) : a.progDomaine;
  const duree = dureeMin(start, end);
  const effectif = settings.classe.effectif;

  const Info = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <td style={cell}>
      <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>{label}</div>
      <div style={{ fontWeight: 600 }}>{value || "……………"}</div>
    </td>
  );

  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {/* Bandeau titre */}
      <div style={{ textAlign: "center", marginBottom: "4mm" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9481f", fontWeight: 700 }}>Fiche de préparation</div>
        <h1 style={{ fontSize: "22px", margin: "1mm 0 0", fontWeight: 800 }}>{a.title || "Séance"}</h1>
      </div>

      {/* En-tête d'identification */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "5mm" }}>
        <tbody>
          <tr>
            <Info label="École" value={p.ecole} />
            <Info label="Enseignant·e" value={teacher} />
            <Info label="Classe" value={p.classe} />
            <Info label="Année" value={p.annee} />
          </tr>
          <tr>
            <Info label="Date" value={date ? cap(formatLong(date)) : ""} />
            <Info label="Discipline / domaine" value={discipline} />
            <Info label="Niveau(x)" value={niveaux} />
            <Info label="Durée · effectif" value={`${duree}${duree && effectif ? " · " : ""}${effectif ? `${effectif} él.` : ""}`} />
          </tr>
          {(a.progSequence || a.progSeance || a.progPeriode) && (
            <tr>
              <Info label="Période" value={a.progPeriode} />
              <td style={cell} colSpan={2}>
                <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Séquence</div>
                <div style={{ fontWeight: 600 }}>{a.progSequence || "……………"}</div>
              </td>
              <Info label="Séance n°" value={a.progSeance} />
            </tr>
          )}
        </tbody>
      </table>

      {/* Objectif / compétences */}
      {a.objectif && (
        <section style={{ marginBottom: "4mm" }}>
          <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1mm" }}>Objectif de la séance</h2>
          <div style={{ fontSize: "13px", lineHeight: 1.5 }}>{a.objectif}</div>
        </section>
      )}
      {(a.competence || a.competenceRef) && (
        <section style={{ marginBottom: "4mm" }}>
          <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1mm" }}>Compétences visées (programmes)</h2>
          <div style={{ fontSize: "13px", lineHeight: 1.5 }}>{a.competence}{a.competenceRef && <div style={{ color: "#666", fontSize: "11px" }}>{a.competenceRef}</div>}</div>
        </section>
      )}
      {a.materiel && (
        <section style={{ marginBottom: "4mm" }}>
          <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1mm" }}>Matériel</h2>
          <div style={{ fontSize: "13px", lineHeight: 1.5 }}>{a.materiel}</div>
        </section>
      )}

      {/* Déroulement en tableau */}
      {a.deroulement.length > 0 && (
        <section style={{ marginBottom: "4mm" }}>
          <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1.5mm" }}>Déroulement</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...cellHead, width: "28%" }}>Phase</th>
                <th style={cellHead}>Consignes et rôle de l'enseignant·e</th>
                <th style={{ ...cellHead, width: "16%" }}>Modalité</th>
              </tr>
            </thead>
            <tbody>
              {a.deroulement.map((s, i) => (
                <tr key={s.id}>
                  <td style={cell}><strong>{i + 1}. {s.label}</strong></td>
                  <td style={{ ...cell, whiteSpace: "pre-line" }}>{s.note}</td>
                  <td style={{ ...cell, fontSize: "11px", color: "#555" }}>{i === 0 ? a.organisation.join(", ") : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Différenciation / prolongement */}
      {(a.differenciation || a.depassement) && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "4mm" }}>
          <tbody>
            <tr>
              {a.differenciation && (
                <td style={cell}>
                  <div style={{ fontSize: "10px", textTransform: "uppercase", color: "#c9481f", fontWeight: 700, marginBottom: "1mm" }}>Différenciation</div>
                  <div style={{ fontSize: "12px", lineHeight: 1.45 }}>{a.differenciation}</div>
                </td>
              )}
              {a.depassement && (
                <td style={cell}>
                  <div style={{ fontSize: "10px", textTransform: "uppercase", color: "#c9481f", fontWeight: 700, marginBottom: "1mm" }}>Prolongement / autonomie</div>
                  <div style={{ fontSize: "12px", lineHeight: 1.45 }}>{a.depassement}</div>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      )}

      {a.correction && (
        <section style={{ marginBottom: "4mm" }}>
          <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1mm" }}>Correction / attendus</h2>
          <div style={{ fontSize: "13px", lineHeight: 1.5, whiteSpace: "pre-line", background: "#f6f8f4", border: "1px solid #dfe6d8", borderRadius: "4px", padding: "3mm" }}>{a.correction}</div>
        </section>
      )}

      {/* Bilan à remplir */}
      <section>
        <h2 style={{ ...cellHead, background: "none", border: "none", padding: 0, color: "#c9481f", marginBottom: "1mm" }}>Bilan / observations (après la séance)</h2>
        <div style={{ borderBottom: "1px dotted #aaa", height: "7mm" }} />
        <div style={{ borderBottom: "1px dotted #aaa", height: "7mm" }} />
        <div style={{ borderBottom: "1px dotted #aaa", height: "7mm" }} />
      </section>

      <p style={{ marginTop: "6mm", fontSize: "11px", color: "#888", textAlign: "right" }}>
        Fiche préparée par {teacher || "……………"}{date ? ` — ${cap(formatLong(date))}` : ""}
      </p>
    </div>
  );
}
