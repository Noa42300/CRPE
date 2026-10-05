/**
 * Fiche « Poésie à apprendre » (A4, à coller dans le cahier blanc).
 * Mise en page lisible et soignée : grand titre, auteur, strophes aérées,
 * une illustration (vraie photo libre de droits). Uniquement des textes du
 * DOMAINE PUBLIC (auteur mort depuis plus de 70 ans) → impression légale.
 */
import { WikiImage } from "./WikiImage";

export interface PoesieData {
  titre: string;
  auteur: string;
  info?: string;          // ex. « Domaine public »
  wiki?: string;          // illustration (titre Wikipédia fr)
  wikiAlt?: string;
  strophes: string[][];   // strophes → lignes
  note?: string;          // consigne « à apprendre pour… »
}

export function PoesieFiche({ data }: { data: PoesieData }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "3mm", padding: "7mm 9mm", minHeight: "280mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "5mm" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#64748b", fontWeight: 700 }}>Poésie</div>
            <h1 style={{ fontSize: "40px", margin: "1mm 0 0", fontWeight: 700, color: "#1d4ed8", fontFamily: "'Caveat','Comic Neue',cursive", lineHeight: 1 }}>{data.titre}</h1>
            <div style={{ fontSize: "16px", fontStyle: "italic", color: "#334155", marginTop: "1mm" }}>{data.auteur}{data.info ? ` · ${data.info}` : ""}</div>
          </div>
          {data.wiki && (
            <div style={{ width: "40mm", flexShrink: 0 }}>
              <WikiImage title={data.wiki} alt={data.wikiAlt ?? data.titre} accent="#1d4ed8" height="30mm" />
            </div>
          )}
        </div>

        <div style={{ borderTop: "1.5px solid #e2e8f0", margin: "4mm 0", height: 0 }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4mm", columnGap: "10mm" }}>
          {data.strophes.map((strophe, i) => (
            <div key={i} style={{ breakInside: "avoid" as React.CSSProperties["breakInside"] }}>
              {strophe.map((ligne, j) => (
                <div key={j} style={{ fontSize: "16px", lineHeight: 1.5, color: "#1f2937" }}>{ligne}</div>
              ))}
            </div>
          ))}
        </div>

        {data.note && (
          <div style={{ marginTop: "4mm", background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: "8px", padding: "3mm 4mm", fontSize: "13px", color: "#1e3a8a", fontWeight: 600 }}>
            ✏️ {data.note}
          </div>
        )}
        <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "right", marginTop: "2mm" }}>Illustration : Wikimedia Commons (licence libre). Texte : domaine public.</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* « Le hareng saur » — Charles Cros (1842-1888), domaine public.          */
/* Poème ludique et répétitif, idéal à mémoriser pour des CE2.             */
export const POESIE_HARENG_SAUR: PoesieData = {
  titre: "Le hareng saur",
  auteur: "Charles Cros",
  info: "domaine public",
  wiki: "Hareng",
  wikiAlt: "un hareng",
  note: "Poésie à apprendre par cœur pour lundi prochain (cahier blanc). On la récitera devant la classe.",
  strophes: [
    [
      "Il était un grand mur blanc — nu, nu, nu,",
      "Contre le mur une échelle — haute, haute, haute,",
      "Et, par terre, un hareng saur — sec, sec, sec.",
    ],
    [
      "Il vient, tenant dans ses mains — sales, sales, sales,",
      "Un marteau lourd, un grand clou — pointu, pointu, pointu,",
      "Un peloton de ficelle — gros, gros, gros.",
    ],
    [
      "Alors il monte à l'échelle — haute, haute, haute,",
      "Et plante le clou pointu — toc, toc, toc,",
      "Tout en haut du grand mur blanc — nu, nu, nu.",
    ],
    [
      "Il laisse aller le marteau — qui tombe, qui tombe, qui tombe,",
      "Attache au clou la ficelle — longue, longue, longue,",
      "Et, au bout, le hareng saur — sec, sec, sec.",
    ],
    [
      "Il redescend de l'échelle — haute, haute, haute,",
      "L'emporte avec le marteau — lourd, lourd, lourd ;",
      "Et puis, il s'en va ailleurs — loin, loin, loin.",
    ],
    [
      "Et, depuis, le hareng saur — sec, sec, sec,",
      "Au bout de cette ficelle — longue, longue, longue,",
      "Très lentement se balance — toujours, toujours, toujours.",
    ],
    [
      "J'ai composé cette histoire — simple, simple, simple,",
      "Pour mettre en fureur les gens — graves, graves, graves,",
      "Et amuser les enfants — petits… petits… petits.",
    ],
  ],
};

export function PoesieHarengSaur() {
  return <PoesieFiche data={POESIE_HARENG_SAUR} />;
}
