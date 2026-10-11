/**
 * Maths — Écrire les nombres en lettres (CE1 : 0-100 ; CE2 : jusqu'à 1 000 / 1 million).
 * - Leçon à coller (cahier rouge) : les règles + les « briques » à connaître.
 * - Référence « Tous les nombres de 0 à 100 en lettres » (à garder).
 * - Deux fiches d'exercices PAYSAGE variées (lundi puis mardi), différenciées CE1/CE2.
 */
import { LandscapeDoc, PageBreak, Feuille, Col, Trait, Consigne, Exemple, Lines, Mots, Defi, CURSIVE } from "./ficheLandscape";

const ACC = "#0f766e"; // maths (teal)

/* ========================= LEÇON ========================= */
function Pastille({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div style={{ border: `3px solid ${ACC}`, borderRadius: "5mm", padding: "3mm 5mm", marginBottom: "3mm" }}>
      <div style={{ fontSize: "22px", fontWeight: 800, color: ACC, fontFamily: CURSIVE, marginBottom: "1mm" }}>{t}</div>
      <div style={{ fontSize: "15px", lineHeight: 1.45, color: "#1f2937" }}>{children}</div>
    </div>
  );
}
function Ex({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: CURSIVE, fontSize: "18px", color: "#111" }}>{children}</span>;
}

export function NombresLettresLecon() {
  const briques = [
    ["0 → zéro", "1 → un", "2 → deux", "3 → trois", "4 → quatre", "5 → cinq"],
    ["6 → six", "7 → sept", "8 → huit", "9 → neuf", "10 → dix", "11 → onze"],
    ["12 → douze", "13 → treize", "14 → quatorze", "15 → quinze", "16 → seize", "17 → dix-sept"],
    ["18 → dix-huit", "19 → dix-neuf", "20 → vingt", "30 → trente", "40 → quarante", "50 → cinquante"],
    ["60 → soixante", "70 → soixante-dix", "80 → quatre-vingts", "90 → quatre-vingt-dix", "100 → cent", "1000 → mille"],
  ];
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: ACC, fontFamily: CURSIVE }}>J'écris les nombres en lettres</h1>
        <p style={{ textAlign: "center", fontSize: "15px", margin: "0 auto 4mm", maxWidth: "160mm" }}>Avec quelques <b>mots-clés</b> et <b>3 règles</b>, je peux écrire tous les nombres.</p>

        <Pastille t="1. Les mots à connaître (les briques)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1mm 3mm" }}>
            {briques.flat().map((b, i) => <div key={i} style={{ fontSize: "13.5px" }}>{b}</div>)}
          </div>
        </Pastille>

        <Pastille t="2. Le trait d'union relie les mots d'un nombre">
          <Ex>trente‑deux</Ex>, <Ex>quarante‑cinq</Ex>, <Ex>quatre‑vingt‑douze</Ex>. On « accroche » les mots avec un petit trait.
        </Pastille>

        <Pastille t="3. Le mot « et »">
          On écrit <b>« et »</b> (sans trait d'union) seulement à <b>21, 31, 41, 51, 61</b> et <b>71</b> :<br />
          <Ex>vingt et un</Ex>, <Ex>trente et un</Ex>, <Ex>soixante et onze</Ex>.
        </Pastille>

        <Pastille t="4. Pour les CE2 — le « s » et « mille »">
          <b>quatre‑vingt<span style={{ color: ACC }}>s</span></b> et <b>deux cent<span style={{ color: ACC }}>s</span></b> prennent un <b>s</b>… mais <b>quatre‑vingt‑trois</b> et <b>deux cent cinq</b> n'en prennent <b>pas</b> (quand il y a un nombre derrière). <b>mille</b> ne change <b>jamais</b> : <Ex>deux mille</Ex>.
        </Pastille>

        <p style={{ textAlign: "center", fontSize: "16px", fontFamily: CURSIVE, marginTop: "auto" }}>
          Mon astuce&nbsp;: j'écris d'abord les <b>centaines</b>, puis les <b>dizaines</b>, puis les <b>unités</b>.
        </p>
      </div>
    </div>
  );
}

/* ========================= RÉFÉRENCE 0 → 100 ========================= */
const UNITS = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
  "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
const TENS: Record<number, string> = { 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante", 80: "quatre-vingt", 90: "quatre-vingt" };
function enLettres(n: number): string {
  if (n < 20) return UNITS[n];
  if (n === 100) return "cent";
  const d = Math.floor(n / 10) * 10, u = n % 10;
  if (n < 70) {
    const base = TENS[d];
    if (u === 0) return base;
    if (u === 1) return base + " et un";
    return base + "-" + UNITS[u];
  }
  // 70-79 : soixante + (dix..dix-neuf) ; 71 = soixante et onze
  if (n < 80) {
    if (n === 71) return "soixante et onze";
    return "soixante-" + UNITS[10 + u];
  }
  // 80-89 : quatre-vingt(s) + unité
  if (n < 90) {
    if (u === 0) return "quatre-vingts";
    return "quatre-vingt-" + UNITS[u];
  }
  // 90-99 : quatre-vingt-dix..
  return "quatre-vingt-" + UNITS[10 + u];
}
export function NombresRef0a100() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "6mm", minHeight: "283mm", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "30px", margin: "0 0 3mm", textAlign: "center", fontWeight: 700, color: ACC, fontFamily: CURSIVE }}>Tous les nombres de 0 à 100 en lettres</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0 4mm" }}>
          {Array.from({ length: 101 }).map((_, n) => (
            <div key={n} style={{ fontSize: "11.5px", padding: "0.6mm 0", borderBottom: "0.5px solid #e5e7eb", display: "flex", gap: "2mm" }}>
              <span style={{ fontWeight: 800, color: ACC, minWidth: "8mm", textAlign: "right" }}>{n}</span>
              <span>{enLettres(n)}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#555", marginTop: "3mm" }}>CE2 : ensuite, on continue avec <b>cent</b> (100), <b>deux cents</b> (200)… <b>mille</b> (1 000), <b>un million</b> (1 000 000).</p>
      </div>
    </div>
  );
}

/* ========================= EXERCICES — FICHE LUNDI ========================= */
export function NombresLettresExosL() {
  return (
    <LandscapeDoc>
      <Feuille titre="Les nombres en lettres — je m'entraîne" sousTitre="CE1 · CE2 — page 1 / 2">
        <Col>
          <div>
            <Consigne n={1}>Écris chaque nombre en lettres.</Consigne>
            <Exemple>14 → quatorze</Exemple>
            <Mots mots={["7 →", "12 →", "16 →", "20 →", "31 →", "48 →"]} fs={16} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={2}>Écris chaque nombre en chiffres.</Consigne>
            <Exemple>trente-deux → 32</Exemple>
            <Mots mots={["dix-sept →", "quarante →", "cinquante-cinq →", "soixante et onze →"]} fs={16} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={3}>Entoure le nombre bien écrit.</Consigne>
            <Exemple>42 : <span style={{ fontFamily: CURSIVE }}>quarante-deux</span> / quarante deux</Exemple>
            <Mots mots={["21 : vingt et un / vingt-et-un", "60 : soixante / soixantes", "80 : quatre-vingt / quatre-vingts"]} fs={15} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={4}>Complète la suite en lettres.</Consigne>
            <Exemple>dix, onze, douze, …</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>vingt-huit, vingt-neuf, …</div>
            <Lines n={2} />
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>trente-huit, trente-neuf, …</div>
            <Lines n={2} />
          </div>
          <div>
            <Consigne n={5} aide="la maîtresse dicte">Écris en chiffres le nombre que j'ai dicté.</Consigne>
            <div style={{ display: "flex", gap: "4mm", flexWrap: "wrap", marginTop: "1mm" }}>
              {["a", "b", "c", "d", "e"].map((l) => (
                <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: "1mm" }}>
                  <b style={{ fontSize: "12px" }}>{l})</b>
                  <span style={{ display: "inline-block", width: "18mm", height: "9mm", border: "1.5px solid #111", borderRadius: "1.5mm" }} />
                </span>
              ))}
            </div>
          </div>
          <div>
            <Consigne n={6}>Écris ces grands nombres en lettres.<Defi>CE2</Defi></Consigne>
            <Exemple>145 → cent quarante-cinq</Exemple>
            <Mots mots={["208 →", "640 →", "1 000 →"]} fs={16} />
            <Lines n={3} />
          </div>
        </Col>
      </Feuille>

      <PageBreak />

      <Feuille titre="Les nombres en lettres — je m'entraîne" sousTitre="CE1 · CE2 — page 2 / 2">
        <Col>
          <div>
            <Consigne n={7}>Place le(s) trait(s) d'union au bon endroit, puis recopie.</Consigne>
            <Exemple>trente deux → trente-deux</Exemple>
            <Mots mots={["quarante cinq →", "soixante quinze →", "quatre vingt deux →"]} fs={15} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={8}>Écris en lettres le nombre d'élèves de la classe, puis ton âge.</Consigne>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>Nous sommes 23 élèves :</div>
            <Lines n={1} />
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>J'ai … ans :</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={9}>Range ces nombres du plus petit au plus grand (en chiffres).</Consigne>
            <Exemple>quinze · huit · trente → 8 · 15 · 30</Exemple>
            <Mots mots={["vingt · douze · quarante · six"]} fs={16} />
            <Lines n={2} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={10}>Écris le résultat en chiffres PUIS en lettres.</Consigne>
            <Exemple>10 + 10 = 20 → vingt</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>20 + 5 = …… →</div>
            <Lines n={1} />
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>40 + 7 = …… →</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={11}>Corrige les erreurs et recopie bien.</Consigne>
            <Exemple><span style={{ textDecoration: "line-through" }}>cinkante</span> → cinquante</Exemple>
            <Mots mots={["vingt-et-un →", "septante →", "quatre vingt →"]} fs={15} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={12}>Écris en lettres de 100 en 100 jusqu'à 1 000.<Defi>CE2</Defi></Consigne>
            <Exemple>100 → cent · 200 → deux cents</Exemple>
            <Lines n={3} />
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}

/* ========================= EXERCICES — FICHE MARDI (entraînement) ========================= */
export function NombresLettresExosM() {
  return (
    <LandscapeDoc>
      <Feuille titre="Les nombres en lettres — entraînement" sousTitre="CE1 · CE2 — page 1 / 2">
        <Col>
          <div>
            <Consigne n={1}>Écris en lettres.</Consigne>
            <Exemple>63 → soixante-trois</Exemple>
            <Mots mots={["9 →", "19 →", "29 →", "70 →", "71 →", "80 →"]} fs={16} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={2}>Écris en chiffres.</Consigne>
            <Exemple>quatre-vingt-dix → 90</Exemple>
            <Mots mots={["soixante-douze →", "quarante et un →", "quatre-vingt-quatre →"]} fs={15} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={3}>Vrai ou faux ? Corrige si c'est faux.</Consigne>
            <Exemple>« soixante-dix = 60 » → faux : 70</Exemple>
            <Mots mots={["« quatre-vingts = 80 »", "« vingt et un = 20 »"]} fs={15} />
            <Lines n={2} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={4}>Dictée de nombres : écris en chiffres.</Consigne>
            <div style={{ display: "flex", gap: "3mm", flexWrap: "wrap", marginTop: "1mm" }}>
              {["a", "b", "c", "d", "e", "f"].map((l) => (
                <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: "1mm" }}>
                  <b style={{ fontSize: "12px" }}>{l})</b>
                  <span style={{ display: "inline-block", width: "16mm", height: "9mm", border: "1.5px solid #111", borderRadius: "1.5mm" }} />
                </span>
              ))}
            </div>
          </div>
          <div>
            <Consigne n={5}>Écris en toutes lettres le nombre caché (compte les dizaines et les unités).</Consigne>
            <Exemple>3 dizaines et 5 unités → trente-cinq</Exemple>
            <Mots mots={["5 dizaines et 2 unités →", "7 dizaines et 1 unité →"]} fs={15} />
            <Lines n={3} />
          </div>
          <div>
            <Consigne n={6}>Écris en lettres.<Defi>CE2</Defi></Consigne>
            <Exemple>352 → trois cent cinquante-deux</Exemple>
            <Mots mots={["406 →", "999 →", "1 000 →"]} fs={16} />
            <Lines n={3} />
          </div>
        </Col>
      </Feuille>

      <PageBreak />

      <Feuille titre="Les nombres en lettres — entraînement" sousTitre="CE1 · CE2 — page 2 / 2">
        <Col>
          <div>
            <Consigne n={7}>Relie (par un trait) le nombre à son écriture en lettres.</Consigne>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1mm", fontSize: "15px" }}>
              <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 2 }}>44<br />60<br />16<br />91</div>
              <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 2, textAlign: "right" }}>seize<br />quatre-vingt-onze<br />quarante-quatre<br />soixante</div>
            </div>
          </div>
          <div>
            <Consigne n={8}>Écris en lettres les nombres de la comptine : 10, 20, 30 … jusqu'à 100.</Consigne>
            <Lines n={4} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={9}>Problème : écris ta réponse en chiffres ET en lettres.</Consigne>
            <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 1.3 }}>Dans la boîte, il y a 4 rangées de 10 œufs. Combien d'œufs en tout ?</div>
            <Lines n={2} />
          </div>
          <div>
            <Consigne n={10}>Écris le nombre juste avant et juste après, en lettres.</Consigne>
            <Exemple>… · trente · … → vingt-neuf · trente · trente et un</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>… · soixante-dix · …</div>
            <Lines n={2} />
          </div>
          <div>
            <Consigne n={11}>Copie soignée : recopie en t'appliquant.</Consigne>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "4px", padding: "1mm 3mm" }}>soixante-quinze · quatre-vingt-huit · deux cent trente</div>
            <Lines n={3} />
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}
