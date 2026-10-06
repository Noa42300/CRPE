/**
 * GROSSE fiche d'exercices PAYSAGE — « Le nom » (révision générale), 2 PAGES.
 * Couvre TOUS les types : nom commun / nom propre, genre (féminin / masculin),
 * nombre (singulier / pluriel). Beaucoup de COPIE (recopier, transformer en
 * recopiant, copie soignée) — pas de coloriage ni de QCM. ≥ 13 exercices.
 *
 * Mise en page : un seul élément .fiche-a4 .fiche-a4-landscape qui contient
 * DEUX blocs de 210 mm (page 1 et page 2) séparés par un .fiche-pagebreak →
 * l'export PDF pagine en 2 feuilles paysage (voir ActivityEditor.downloadPdf).
 * Chaque page est coupée en 2 colonnes par un trait « comme 2 pages ».
 */
import { WikiImage } from "./WikiImage";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const CURSIVE = "'Caveat','Comic Neue',cursive";

function Consigne({ n, children, aide }: { n: number; children: React.ReactNode; aide?: string }) {
  return (
    <div style={{ fontSize: "12.5px", fontWeight: 700, marginBottom: "1mm", fontFamily: CONSIGNE_FONT }}>
      <span style={{ fontWeight: 800 }}>{n}.</span>{" "}
      <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{children}</span>
      {aide && <span style={{ marginLeft: "2mm", fontSize: "10px", fontWeight: 700, color: "#444", background: "#f1f3f5", border: "1px solid #ced4da", borderRadius: "999px", padding: "0.2mm 2mm" }}>{aide}</span>}
    </div>
  );
}

function Exemple({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "0 0 1mm", display: "flex", width: "fit-content", maxWidth: "100%", alignItems: "center", gap: "2mm", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "6px", padding: "0.3mm 3mm" }}>
      <span style={{ fontSize: "9.5px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Exemple</span>
      <span style={{ fontFamily: CURSIVE, fontSize: "16px", color: "#1c4a20" }}>{children}</span>
    </div>
  );
}

function Mots({ mots }: { mots: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5mm 4mm", fontFamily: CURSIVE, fontSize: "18px", padding: "0.5mm 0 1mm 2mm" }}>
      {mots.map((m, i) => <span key={i}>{m}{i < mots.length - 1 ? " ·" : ""}</span>)}
    </div>
  );
}

function Lines({ n }: { n: number }) {
  return (
    <div style={{ marginTop: "0.5mm" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ borderBottom: "1.8px dotted #64748b", height: "6.5mm" }} />
      ))}
    </div>
  );
}

function Defi({ children }: { children: React.ReactNode }) {
  return <span style={{ marginLeft: "2mm", fontSize: "10px", fontWeight: 800, color: "#7c3aed" }}>⭐ {children}</span>;
}

/** Deux colonnes à recopier (ex. noms communs / noms propres). */
function DeuxColonnes({ gauche, droite, n = 4 }: { gauche: string; droite: string; n?: number }) {
  const head = (t: string) => (
    <div style={{ fontSize: "11px", fontWeight: 800, textAlign: "center", background: "#111", color: "#fff", borderRadius: "4px 4px 0 0", padding: "0.5mm" }}>{t}</div>
  );
  return (
    <div style={{ display: "flex", gap: "3mm", marginTop: "1mm" }}>
      {[gauche, droite].map((t) => (
        <div key={t} style={{ flex: 1, border: "1.5px solid #111", borderRadius: "4px" }}>
          {head(t)}
          <div style={{ padding: "0 2mm" }}>{Array.from({ length: n }).map((_, i) => <div key={i} style={{ borderBottom: "1.5px dotted #94a3b8", height: "6.5mm" }} />)}</div>
        </div>
      ))}
    </div>
  );
}

function ImgMot({ title, alt }: { title: string; alt: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "26mm" }}>
      <div style={{ width: "22mm" }}><WikiImage title={title} alt={alt} accent="#111" height="18mm" /></div>
      <div style={{ borderBottom: "1.8px dotted #64748b", width: "24mm", height: "6mm", marginTop: "0.5mm" }} />
    </div>
  );
}

function Col({ children }: { children: React.ReactNode }) {
  return <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "2.5mm", padding: "0 3mm" }}>{children}</div>;
}

function Trait() {
  return <div style={{ width: "0", borderLeft: "2px dashed #94a3b8", margin: "0 3mm" }} />;
}

function Feuille({ titre, sousTitre, children }: { titre: string; sousTitre: string; children: React.ReactNode }) {
  return (
    <div style={{ height: "210mm", boxSizing: "border-box", padding: "7mm 8mm" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "4mm 5mm", height: "196mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "1.5mm", marginBottom: "2.5mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>{titre}</h1>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#444", fontFamily: CURSIVE }}>· {sousTitre}</span>
        </div>
        <div style={{ flex: 1, display: "flex" }}>{children}</div>
      </div>
    </div>
  );
}

export function NomRevisionPaysage() {
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {/* ---------------- PAGE 1 ---------------- */}
      <Feuille titre="Le nom — je m'entraîne" sousTitre="CE1 · CE2 — page 1 / 2">
            <Col>
              <div>
                <Consigne n={1}>Recopie ces noms et souligne-les.</Consigne>
                <Exemple>la maison → <u>la maison</u></Exemple>
                <Mots mots={["un oiseau", "une école", "le bonheur", "des fleurs", "la Loire", "un cheval"]} />
                <Lines n={3} />
              </div>
              <div>
                <Consigne n={2} aide="majuscule aux noms propres">Classe ces noms en les recopiant dans la bonne colonne.</Consigne>
                <Exemple>Paris → nom propre · une ville → nom commun</Exemple>
                <Mots mots={["un chien", "Médor", "Lyon", "une rivière", "la France", "un garçon"]} />
                <DeuxColonnes gauche="noms communs" droite="noms propres" n={4} />
              </div>
              <div>
                <Consigne n={3}>Écris le nom de chaque image avec « un » ou « une ».</Consigne>
                <Exemple>🖼️ → une pomme</Exemple>
                <div style={{ display: "flex", gap: "3mm", flexWrap: "wrap", marginTop: "1mm" }}>
                  <ImgMot title="Chat" alt="chat" />
                  <ImgMot title="Maison" alt="maison" />
                  <ImgMot title="Vélo" alt="vélo" />
                  <ImgMot title="Parapluie" alt="parapluie" />
                </div>
              </div>
            </Col>
            <Trait />
            <Col>
              <div>
                <Consigne n={4} aide="le nombre">Recopie chaque nom en le mettant au pluriel.</Consigne>
                <Exemple>un chat → des chats</Exemple>
                <Mots mots={["une fleur →", "le livre →", "un ami →", "une étoile →"]} />
                <Lines n={3} />
              </div>
              <div>
                <Consigne n={5} aide="le genre">Recopie chaque nom en le mettant au féminin.</Consigne>
                <Exemple>un ami → une amie</Exemple>
                <Mots mots={["un marchand →", "un ours →", "un voisin →"]} />
                <Lines n={3} />
              </div>
              <div>
                <Consigne n={6}>Recopie seulement les noms propres, avec leur majuscule.</Consigne>
                <Exemple>une ville, paris → Paris</Exemple>
                <Mots mots={["un fleuve", "la loire", "léa", "un jour", "noël"]} />
                <Lines n={3} />
              </div>
              <div>
                <Consigne n={7}>Complète avec « un » ou « une », puis recopie le groupe.</Consigne>
                <Exemple>…… table → une table</Exemple>
                <Mots mots={["…… avion", "…… école", "…… journal", "…… règle"]} />
                <Lines n={3} />
              </div>
            </Col>
      </Feuille>

      <div className="fiche-pagebreak" style={{ height: 0 }} />

      {/* ---------------- PAGE 2 ---------------- */}
      <Feuille titre="Le nom — je m'entraîne" sousTitre="CE1 · CE2 — page 2 / 2">
        <Col>
          <div>
            <Consigne n={8}>Recopie la phrase et souligne tous les noms.</Consigne>
            <Exemple>Le <u>chien</u> dort dans la <u>niche</u>.</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>La maîtresse écrit la date au tableau.</div>
            <Lines n={1} />
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>À Paris, les enfants visitent un musée.</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={9} aide="le nombre">Recopie la phrase en la mettant au pluriel.</Consigne>
            <Exemple>Le chat dort. → Les chats dorment.</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>Une fleur pousse dans le jardin.</div>
            <Lines n={1} />
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>Le cheval galope dans le pré.</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={10}>Recopie la phrase en la mettant au singulier.</Consigne>
            <Exemple>Les oiseaux chantent. → L'oiseau chante.</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>Les élèves rangent leurs cahiers.</div>
            <Lines n={1} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={11}>Recopie chaque nom au féminin.<Defi>CE2</Defi></Consigne>
            <Exemple>un boulanger → une boulangère</Exemple>
            <Mots mots={["un lion →", "un cuisinier →", "un chanteur →", "un prince →"]} />
            <Lines n={2} />
          </div>
          <div>
            <Consigne n={12}>Recopie la liste en remplaçant chaque nom commun par un nom propre.<Defi>CE2</Defi></Consigne>
            <Exemple>une ville → Saint-Étienne</Exemple>
            <Mots mots={["un pays →", "un prénom →", "un fleuve →"]} />
            <Lines n={2} />
          </div>
          <div>
            <Consigne n={13} aide="copie soignée">Recopie ce texte en soignant ton écriture, puis souligne tous les noms.</Consigne>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "4px", padding: "1mm 3mm" }}>
              Le matin, Léa part à l'école avec son cartable. Dans la cour, les enfants jouent au ballon.
            </div>
            <Lines n={4} />
          </div>
          <div>
            <Consigne n={14}>Écris deux phrases. Dans chacune, mets un nom propre et un nom commun.<Defi>défi</Defi></Consigne>
            <Lines n={2} />
          </div>
        </Col>
      </Feuille>
    </div>
  );
}
