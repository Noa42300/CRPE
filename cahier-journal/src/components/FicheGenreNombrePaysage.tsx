/**
 * Fiche d'exercices PAYSAGE — « Le genre et le nombre du nom » (lundi 5/10).
 * Format A4 paysage (.fiche-a4 .fiche-a4-landscape), séparé par un trait vertical
 * au milieu « comme 2 pages ». Exercices variés et illustrés (vraies photos
 * Wikimedia), dans l'esprit de « 1, 2, 3… Étude de la langue ».
 * Deux niveaux : GNPaysageCE1 et GNPaysageCE2.
 */
import { WikiImage } from "./WikiImage";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const FEM = "#2563eb";  // féminin → BLEU (consigne enseignant)
const MASC = "#dc2626"; // masculin → ROUGE
const SING = "#16a34a"; // singulier → VERT
const PLUR = "#7c3aed"; // pluriel → VIOLET

function Consigne({ n, children, aide }: { n: number; children: React.ReactNode; aide?: string }) {
  return (
    <div style={{ fontSize: "12.5px", fontWeight: 700, marginBottom: "1.5mm", fontFamily: CONSIGNE_FONT }}>
      <span style={{ fontWeight: 800 }}>{n}.</span>{" "}
      <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{children}</span>
      {aide && <span style={{ marginLeft: "2mm", fontSize: "10px", fontWeight: 700, color: "#444", background: "#f1f3f5", border: "1px solid #ced4da", borderRadius: "999px", padding: "0.2mm 2mm" }}>{aide}</span>}
    </div>
  );
}

function Chip({ mot, img, alt }: { mot: string; img?: string; alt?: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "1.5mm", border: "1.8px solid #111", borderRadius: "999px", padding: "1mm 3mm", margin: "1mm", background: "#fff", fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px", fontWeight: 700 }}>
      {img && <span style={{ width: "9mm", height: "9mm", display: "inline-block", flexShrink: 0 }}><WikiImage title={img} alt={alt ?? mot} accent="#111" height="9mm" /></span>}
      {mot}
    </span>
  );
}

function Entoure({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-block", border: "2px solid #111", borderRadius: "60% 55% 58% 62% / 70% 72% 68% 66%", padding: "0 2.5mm", lineHeight: 1.1 }}>{children}</span>
  );
}

function Exemple({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "0 0 1.5mm", display: "flex", width: "fit-content", maxWidth: "100%", alignItems: "center", gap: "2mm", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "6px", padding: "0.5mm 3mm" }}>
      <span style={{ fontSize: "10px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Exemple</span>
      <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "17px", color: "#1c4a20" }}>{children}</span>
    </div>
  );
}

function DottedLines({ n }: { n: number }) {
  return (
    <div style={{ marginTop: "1mm" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ borderBottom: "2px dotted #64748b", height: "7mm" }} />
      ))}
    </div>
  );
}

function Liste({ mots }: { mots: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1mm 4mm", fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px", padding: "0.5mm 0 1mm 2mm" }}>
      {mots.map((m, i) => <span key={i}>{m}{i < mots.length - 1 ? " ·" : ""}</span>)}
    </div>
  );
}

/** Nuage de rappel : masculin/féminin, singulier/pluriel. */
function Nuage() {
  const bulle = (label: string, ex: string, color: string) => (
    <div style={{ border: `2.5px solid ${color}`, borderRadius: "999px", background: "#fff", padding: "1mm 4mm", textAlign: "center" }}>
      <div style={{ fontSize: "15px", fontWeight: 800, color }}>{label}</div>
      <div style={{ fontSize: "16px", fontFamily: "'Caveat','Comic Neue',cursive", color: "#222" }}>{ex}</div>
    </div>
  );
  return (
    <div style={{ position: "relative", border: "3px solid #334155", borderRadius: "16mm", background: "#f8fafc", padding: "3mm 5mm", marginBottom: "3mm" }}>
      <div style={{ position: "absolute", top: "-4mm", left: "6mm", background: "#334155", color: "#fff", fontSize: "11px", fontWeight: 800, borderRadius: "999px", padding: "0.5mm 3mm", letterSpacing: "0.04em" }}>JE ME RAPPELLE ☁️</div>
      <div style={{ display: "flex", gap: "3mm", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 800, color: "#334155", marginBottom: "1mm" }}>LE GENRE</div>
          <div style={{ display: "flex", gap: "2mm" }}>{bulle("masculin", "un · le", MASC)}{bulle("féminin", "une · la", FEM)}</div>
        </div>
        <div style={{ fontSize: "22px", color: "#cbd5e1" }}>|</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 800, color: "#334155", marginBottom: "1mm" }}>LE NOMBRE</div>
          <div style={{ display: "flex", gap: "2mm" }}>{bulle("singulier", "un seul", SING)}{bulle("pluriel", "plusieurs + s", PLUR)}</div>
        </div>
      </div>
    </div>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "3mm", padding: "0 3mm" }}>{children}</div>;
}

function Divider() {
  return (
    <div style={{ position: "relative", width: "0", borderLeft: "2.5px dashed #94a3b8", margin: "0 1mm" }}>
      <span style={{ position: "absolute", top: "50%", left: "-3mm", transform: "translateY(-50%)", fontSize: "14px" }}>✂</span>
    </div>
  );
}

function Shell({ titre, niveau, children }: { titre: string; niveau: string; children: React.ReactNode }) {
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", minHeight: "200mm", background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "186mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "3mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{titre}</h1>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· {niveau}</span>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "55mm", borderBottom: "1px solid #333" }} /></div>
        </div>
        <Nuage />
        <div style={{ flex: 1, display: "flex" }}>{children}</div>
      </div>
    </div>
  );
}

/* ============================= CE1 ============================= */
export function GNPaysageCE1() {
  return (
    <Shell titre="Le genre et le nombre du nom" niveau="CE1">
      <Page>
        <div>
          <Consigne n={1} aide="bleu = féminin · rouge = masculin">Colorie en BLEU les noms féminins, en ROUGE les noms masculins.</Consigne>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip mot="une pomme" img="Pomme" alt="pomme" />
            <Chip mot="un chat" img="Chat" alt="chat" />
            <Chip mot="une fleur" img="Rose (fleur)" alt="fleur" />
            <Chip mot="un ballon" img="Ballon de football" alt="ballon" />
            <Chip mot="une maison" img="Maison" alt="maison" />
            <Chip mot="un soleil" />
            <Chip mot="une lune" />
            <Chip mot="un chien" />
          </div>
        </div>
        <div>
          <Consigne n={2}>Entoure les noms féminins dans chaque liste.</Consigne>
          <Exemple>un vélo · <Entoure>une table</Entoure> · un livre</Exemple>
          <Liste mots={["la mer", "le sac", "une étoile", "un jardin"]} />
          <Liste mots={["un ami", "une amie", "le bus", "une école"]} />
          <Liste mots={["le chat", "une souris", "un arbre", "la pluie"]} />
        </div>
      </Page>
      <Divider />
      <Page>
        <div>
          <Consigne n={3} aide="vert = singulier · violet = pluriel">Colorie en VERT les noms au singulier, en VIOLET les noms au pluriel.</Consigne>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip mot="un chat" /><Chip mot="des chats" /><Chip mot="une fleur" /><Chip mot="des fleurs" />
            <Chip mot="le livre" /><Chip mot="les livres" /><Chip mot="un ami" /><Chip mot="des amis" />
          </div>
        </div>
        <div>
          <Consigne n={4}>Récris chaque phrase au pluriel.</Consigne>
          <Exemple>Le chat dort. → Les chats dorment.</Exemple>
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px" }}>Une fleur pousse dans le jardin.</div>
          <DottedLines n={1} />
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px" }}>Le garçon range un livre.</div>
          <DottedLines n={1} />
        </div>
        <div>
          <Consigne n={5}>Complète avec un ou une.</Consigne>
          <Exemple>___ table → une table</Exemple>
          <Liste mots={["___ ballon", "___ école", "___ chien", "___ pomme"]} />
        </div>
      </Page>
    </Shell>
  );
}

/* ============================= CE2 ============================= */
export function GNPaysageCE2() {
  return (
    <Shell titre="Le genre et le nombre du nom" niveau="CE2">
      <Page>
        <div>
          <Consigne n={1} aide="bleu = féminin · rouge = masculin">Colorie en BLEU les noms féminins, en ROUGE les noms masculins.</Consigne>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip mot="une récréation" /><Chip mot="un avion" img="Avion" alt="avion" /><Chip mot="une avenue" /><Chip mot="un aimant" />
            <Chip mot="une étoile" /><Chip mot="un journal" /><Chip mot="une règle" /><Chip mot="un château" img="Château de Chambord" alt="château" />
          </div>
        </div>
        <div>
          <Consigne n={2}>Entoure les noms féminins dans chaque liste (attention aux noms de sentiments et de lieux !).</Consigne>
          <Exemple>le courage · <Entoure>une idée</Entoure> · un désert</Exemple>
          <Liste mots={["la tendresse", "le silence", "une saison", "un voyage"]} />
          <Liste mots={["une forêt", "un fleuve", "la montagne", "un océan"]} />
          <Liste mots={["une amitié", "le bonheur", "une peur", "un rêve"]} />
        </div>
      </Page>
      <Divider />
      <Page>
        <div>
          <Consigne n={3} aide="vert = singulier · violet = pluriel">Colorie en VERT les noms au singulier, en VIOLET les noms au pluriel.</Consigne>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip mot="un cheval" /><Chip mot="des chevaux" /><Chip mot="un journal" /><Chip mot="des journaux" />
            <Chip mot="un jeu" /><Chip mot="des jeux" /><Chip mot="une souris" /><Chip mot="des souris" />
          </div>
        </div>
        <div>
          <Consigne n={4}>Récris chaque phrase au pluriel (attention aux pluriels particuliers).</Consigne>
          <Exemple>Le cheval galope. → Les chevaux galopent.</Exemple>
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px" }}>L'enfant lit un journal.</div>
          <DottedLines n={1} />
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "19px" }}>Le château a une tour.</div>
          <DottedLines n={1} />
        </div>
        <div>
          <Consigne n={5}>Écris chaque nom au féminin.</Consigne>
          <Exemple>un ami → une amie</Exemple>
          <Liste mots={["un marchand → ______", "un lion → ______", "un chat → ______"]} />
        </div>
      </Page>
    </Shell>
  );
}
