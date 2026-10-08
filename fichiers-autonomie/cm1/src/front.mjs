// Page de garde, mode d'emploi, « Mon parcours ».
import { cb } from "./lib.mjs";

export function cover() {
  return `<section class="page fr" style="padding:18mm 18mm 16mm">
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <div style="font-family:Lexend;font-size:12pt;letter-spacing:.3em;color:var(--muted);margin-bottom:10mm">CM1 · FRANÇAIS ET MATHÉMATIQUES</div>
    <div style="position:relative;width:170mm;height:112mm">
      <svg width="170mm" height="112mm" viewBox="0 0 170 112" style="position:absolute;inset:0">
        <path d="M38 92 C18 92 8 80 10 67 C12 55 22 49 32 50 C30 34 44 22 60 25 C67 12 86 7 101 15 C112 6 132 9 139 24 C154 24 164 37 160 51 C168 58 168 74 158 82 C152 90 142 93 132 92 Z"
          fill="#e6f2f3" stroke="#0f6e78" stroke-width="1.1" stroke-linejoin="round"/>
        <path d="M44 86 C29 85 20 77 21 67" fill="none" stroke="#0f6e78" stroke-width="0.6" stroke-linecap="round" opacity=".5"/>
      </svg>
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:12mm">
        <div style="font-family:Lexend;font-weight:700;font-size:30pt;line-height:1.08;color:#123;text-align:center">MON FICHIER<br>AUTONOMIE</div>
        <div style="width:96mm;height:1.6mm;background:#0f6e78;border-radius:1mm;margin-top:4mm"></div>
      </div>
    </div>
    <div style="display:flex;gap:10mm;margin-top:14mm;align-items:center;color:var(--muted);font-family:Lexend;font-size:11pt">
      <span style="display:flex;align-items:center;gap:2mm"><span style="background:#0f6e78;color:#fff;border-radius:1.4mm;padding:.6mm 1.6mm;font-weight:700;font-size:9pt">Aa</span>Français</span>
      <span>·</span>
      <span style="display:flex;align-items:center;gap:2mm"><span style="background:#b4521a;color:#fff;border-radius:1.4mm;padding:.6mm 1.6mm;font-weight:700;font-size:9pt">1+2</span>Mathématiques</span>
      <span>·</span><span>30 missions</span>
    </div>
  </div>
  <div style="font-size:15pt;line-height:2.4">
    <div><b style="font-family:Lexend">Nom :</b> <span class="blank" style="width:150mm"></span></div>
    <div><b style="font-family:Lexend">Prénom :</b> <span class="blank" style="width:143mm"></span></div>
  </div>
  </section>`;
}

export function modeEmploi() {
  const step = (n, t) => `<div style="display:flex;gap:3mm;align-items:center;margin:0 0 2.2mm">
    <span style="flex:0 0 8mm;height:8mm;border-radius:50%;background:var(--c);color:#fff;display:flex;align-items:center;justify-content:center;font-family:Lexend;font-weight:700">${n}</span><span>${t}</span></div>`;
  return `<section class="page fr">
  <header class="hd"><div class="tag" style="padding-left:3mm">MODE D'EMPLOI</div><div class="dom">Comment utiliser mon fichier ?</div></header>
  <div class="content" style="font-size:12.5pt">
    <p style="margin:0 0 3mm">Ce fichier est <b>ton parcours personnel</b>. Tu le prends quand tu as terminé le travail demandé en classe. Tu avances à ton rythme, mission après mission. Certaines notions sont nouvelles pour toi : c'est normal, c'est fait pour ça.</p>
    <div class="box tint"><span class="lab">Ma mission</span>
      ${step(1, "Je prends mon fichier <b>quand j'ai terminé mon travail</b>.")}
      ${step(2, "Je lis <b>la leçon</b> (page de gauche) en entier, même si je crois la connaître.")}
      ${step(3, "Je fais <b>les exercices</b> (page de droite) dans l'ordre.")}
      ${step(4, "Je <b>me relis</b> : accords, majuscules, points, calculs.")}
      ${step(5, "Je <b>corrige</b> si je trouve une erreur.")}
      ${step(6, "Je coche la mission dans <b>« Mon parcours »</b> et je passe à la suite.")}
    </div>
    <div class="row" style="gap:6mm;margin-top:1mm">
      <div>
        <h2 class="st">Les trois niveaux</h2>
        <div class="lvl l1"><span class="d"></span> Je m'entraîne</div><p class="sm" style="margin:0 0 2mm 5mm">J'applique la leçon.</p>
        <div class="lvl l2"><span class="d"></span><span class="d"></span> Je réfléchis</div><p class="sm" style="margin:0 0 2mm 5mm">Je dois chercher un peu plus.</p>
        <div class="lvl l3"><span class="d"></span><span class="d"></span><span class="d"></span> Je relève le défi</div><p class="sm" style="margin:0 0 0 5mm">Un problème ou une énigme : prends ton temps.</p>
      </div>
      <div>
        <h2 class="st">Si je bloque</h2>
        <ol style="margin:0;padding-left:6mm" class="sm">
          <li>Je relis la consigne <b>mot par mot</b>.</li>
          <li>Je regarde l'<b>exemple</b> en gris.</li>
          <li>Je <b>reviens à la leçon</b> : la réponse s'y trouve souvent.</li>
          <li>J'essaie, même si je ne suis pas sûr(e). Je peux écrire au crayon.</li>
          <li>Si je bloque encore, je passe à l'exercice suivant et je reviendrai.</li>
          <li>Seulement après tout cela, je demande de l'aide.</li>
        </ol>
      </div>
    </div>
    ${`<div class="box" style="margin-top:6mm"><span class="lab">Bon à savoir</span>
      <p>• <b>Se tromper est normal.</b> Une erreur montre ce qu'il reste à apprendre. Je ne gomme pas tout : je corrige proprement.</p>
      <p>• <b>Aller vite ne sert à rien.</b> Je ne passe pas à la suite tant que je n'ai pas vraiment réfléchi.</p>
      <p>• <b>J'écris lisiblement</b>, au crayon de papier ou au stylo, comme me le demande mon enseignant(e).</p>
      <p>• Pour la géométrie et les mesures, je garde <b>ma règle, mon équerre et mon crayon</b> à côté de moi.</p></div>`}
    <div style="flex:1"></div>
    <div class="xs mut" style="display:flex;gap:6mm;align-items:center;border-top:.25mm solid var(--rule);padding-top:2mm">
      <span><b style="font-family:Lexend">Aa</b> = Français</span><span><b style="font-family:Lexend">1+2</b> = Mathématiques</span>
      <span>La barre en haut de chaque page montre où tu en es dans le parcours.</span>
    </div>
  </div>
  <footer class="ft"><span class="pn">2</span><span></span><span></span></footer>
  </section>`;
}

export function parcours(missions) {
  const rows = missions
    .map(
      (m) => `<tr>
      <td style="font-family:Lexend;font-weight:600;color:${m.disc === "fr" ? "var(--fr)" : "var(--ma)"}">${String(m.n).padStart(2, "0")}</td>
      <td style="font-family:Lexend;font-size:9pt;color:${m.disc === "fr" ? "var(--fr)" : "var(--ma)"}">${m.disc === "fr" ? "Aa" : "1+2"}</td>
      <td class="l">${m.titreCourt ?? m.titre}</td>
      <td>${cb()}</td>
      <td class="xs" style="white-space:nowrap">${cb()}facile ${cb()}moyen ${cb()}difficile</td>
      <td></td></tr>`,
    )
    .join("");
  return `<section class="page fr">
  <header class="hd"><div class="tag" style="padding-left:3mm">MON PARCOURS</div><div class="dom">Je coche chaque mission terminée.</div></header>
  <div class="content">
  <table class="t" style="font-size:10.5pt">
    <colgroup><col style="width:9mm"><col style="width:9mm"><col><col style="width:13mm"><col style="width:58mm"><col style="width:17mm"></colgroup>
    <tr><th>N°</th><th></th><th class="l">Mission</th><th>Finie</th><th>Pour moi, c'était…</th><th>Vu par l'adulte</th></tr>
    ${rows}
  </table>
  </div>
  <footer class="ft"><span></span><span></span><span class="pn">3</span></footer>
  </section>`;
}
