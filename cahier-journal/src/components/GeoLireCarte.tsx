/**
 * Géographie — LIRE UNE CARTE (sur une VRAIE carte projetée/imprimée).
 * Pas de carte dessinée : la fiche est une feuille de questions / d'observation
 * que l'élève remplit en regardant une vraie carte (OpenStreetMap de la commune,
 * Géoportail, ou une carte de France libre de droits). + une courte leçon-méthode.
 *   • Leçon « Les 3 clés d'une carte » · Fiche de questions / d'observation.
 */
import { FicheModele, SectionBar, Exo, LignesModele } from "./ficheModele";

const GEO = "#0e7490";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* Rose des vents (dessin légitime, pas une carte) — labels optionnels. */
function RoseDesVents({ s = 90, blanks = false }: { s?: number; blanks?: boolean }) {
  const L = (x: number, y: number, t: string) => <text x={x} y={y} textAnchor="middle" fontSize={13} fontWeight={800} fontFamily={CONSIGNE_FONT} fill={GEO}>{t}</text>;
  return (
    <svg viewBox="0 0 100 100" width={s} height={s} style={{ display: "block" }}>
      <line x1="50" y1="16" x2="50" y2="84" stroke="#334155" strokeWidth="2" />
      <line x1="16" y1="50" x2="84" y2="50" stroke="#334155" strokeWidth="2" />
      <path d="M50 12 l4 8 l-8 0 Z" fill="#334155" />
      {L(50, 11, "N")}
      {L(50, 95, blanks ? "…" : "S")}
      {L(90, 54, blanks ? "…" : "E")}
      {L(10, 54, blanks ? "…" : "O")}
      <circle cx="50" cy="50" r="3" fill={GEO} />
    </svg>
  );
}

export function LireCarteLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: GEO, fontFamily: CURSIVE }}>Lire une carte</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: GEO, marginBottom: "3mm" }}>GÉOGRAPHIE · les 3 clés pour lire une carte</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3mm", margin: "2mm 0" }}>
        {[["📝", "Le titre", "Il dit ce que montre la carte (ma ville, la France…)."], ["🔑", "La légende", "Elle explique les symboles et les couleurs de la carte."], ["🧭", "L'orientation", "La rose des vents : le Nord est en haut (N, S, E, O)."]].map(([emo, t, d]) => (
          <div key={t} style={{ border: `1.8px solid ${GEO}`, borderRadius: "3mm", padding: "2mm", textAlign: "center", background: "#f0fdff" }}>
            <div style={{ fontSize: "26px" }}>{emo}</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "20px", fontWeight: 700, color: GEO }}>{t}</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "15px", lineHeight: 1.3 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "4mm", alignItems: "center", border: `2px dashed ${GEO}`, borderRadius: "3mm", padding: "2mm 4mm", background: "#f8fdff" }}>
        <RoseDesVents s={80} />
        <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.5 }}>
          Une <b style={{ color: GEO }}>carte</b> est un dessin de la réalité <b>vue de dessus</b>, en plus petit. Pour la lire :
          je cherche le <b>titre</b>, je regarde la <b>légende</b>, je me repère avec la <b>rose des vents</b> (le Nord en haut).
        </div>
      </div>
    </div>
  );
}

/* Feuille de questions / d'observation : fonctionne avec N'IMPORTE QUELLE vraie
   carte projetée ou imprimée (OSM de la commune, Géoportail, carte de France). */
export function FicheLireCarte() {
  return (
    <FicheModele matiere="Géographie" titre="Je lis une carte" couleur={GEO} dots={4} dotActif={1} page="Lire une carte (vraie carte) · CE1-CE2">
      <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", color: "#64748b", textAlign: "center", marginBottom: "1.5mm" }}>
        Je regarde la vraie carte (au tableau ou sur ma feuille) et je réponds.
      </div>
      <SectionBar couleur={GEO}>J'observe la carte</SectionBar>
      <Exo n={1} couleur={GEO} consigne={<><b>Recopie</b> le titre de la carte.</>}>
        <LignesModele n={1} />
      </Exo>
      <Exo n={2} couleur={GEO} consigne={<><b>Regarde</b> la légende. Écris ce que veulent dire 3 symboles ou 3 couleurs.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2.1 }}>
          ● ………………… = …………………………<br />
          ● ………………… = …………………………<br />
          ● ………………… = …………………………
        </div>
      </Exo>
      <Exo n={3} couleur={GEO} consigne={<><b>Complète</b> la rose des vents (N est déjà placé).</>}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1mm" }}><RoseDesVents s={64} blanks /></div>
      </Exo>
      <Exo n={4} couleur={GEO} consigne={<><b>Cherche</b> sur la carte et <b>écris</b> tes réponses.</>}>
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2.1 }}>
          Un lieu que je connais : …………………………<br />
          Il est plutôt au (nord / sud / est / ouest) : ……………<br />
          Un autre lieu, et sa direction : ………………… → ……………
        </div>
      </Exo>
    </FicheModele>
  );
}
