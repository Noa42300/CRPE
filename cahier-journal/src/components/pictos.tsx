/**
 * Petits pictogrammes SVG (dessins originaux, libres) pour illustrer les
 * leçons et exercices CE1-CE2. Style plat, simple et coloré, lisible en petit
 * comme en grand. Aucune dépendance, aucune image externe.
 */
type P = { size?: number; title?: string };

const S = ({ size = 44, title, children }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label={title}
    style={{ display: "block" }}>
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

/* ---------------------------------------------- Verbe / actions */
export const PictoPomme = (p: P) => (
  <S {...p}><path d="M32 20c-6-8-20-4-20 10 0 12 10 22 20 22s20-10 20-22c0-14-14-18-20-10Z" fill="#ef4444" /><path d="M32 20c0-6 3-9 8-10" stroke="#7c3f16" strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M36 12c4-3 9-2 9-2s-1 6-6 7" fill="#22c55e" /></S>
);
export const PictoFleur = (p: P) => (
  <S {...p}>{[0,60,120,180,240,300].map((a)=><ellipse key={a} cx="32" cy="16" rx="7" ry="12" fill="#f472b6" transform={`rotate(${a} 32 32)`} />)}<circle cx="32" cy="32" r="8" fill="#fde047" /><path d="M32 40v18" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" /><path d="M32 50c6 0 9-4 9-4" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" /></S>
);
export const PictoOreille = (p: P) => (
  <S {...p}><path d="M22 26a12 12 0 1 1 20 9c-5 4-6 6-6 11a7 7 0 0 1-13 3" fill="#fcd9b6" stroke="#c9481f" strokeWidth="3" strokeLinejoin="round" /><path d="M27 27a6 6 0 0 1 10 4" fill="none" stroke="#c9481f" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoSaut = (p: P) => (
  <S {...p}><circle cx="34" cy="14" r="6" fill="#2563eb" /><path d="M34 20v16" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" /><path d="M34 24l-12-6M34 24l12-6" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" /><path d="M34 36l-9 12M34 36l9 12" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" /><path d="M14 52h36" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 5" /></S>
);
export const PictoOiseau = (p: P) => (
  <S {...p}><path d="M14 40c0-10 8-16 18-16 12 0 18 8 18 8l-6 2 4 5-8 1c-2 8-9 12-16 12-6 0-10-4-10-12Z" fill="#38bdf8" /><circle cx="24" cy="34" r="2.5" fill="#0f172a" /><path d="M50 32l8-3-5 7Z" fill="#f59e0b" /><path d="M18 52l6-6M28 54l4-8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoValise = (p: P) => (
  <S {...p}><rect x="12" y="24" width="40" height="28" rx="4" fill="#0ea5e9" /><path d="M25 24v-5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5" fill="none" stroke="#0369a1" strokeWidth="3" /><rect x="12" y="34" width="40" height="4" fill="#0369a1" /></S>
);
export const PictoCartable = (p: P) => (
  <S {...p}><rect x="14" y="26" width="36" height="26" rx="5" fill="#a16207" /><path d="M14 34h36" stroke="#78350f" strokeWidth="3" /><rect x="27" y="34" width="10" height="9" rx="2" fill="#fde68a" /><path d="M18 26c0-8 6-12 14-12s14 4 14 12" fill="none" stroke="#78350f" strokeWidth="3" /></S>
);
export const PictoPain = (p: P) => (
  <S {...p}><rect x="8" y="26" width="48" height="14" rx="7" fill="#f59e0b" transform="rotate(-18 32 32)" /><g stroke="#7c3f16" strokeWidth="2.5" strokeLinecap="round"><path d="M22 24l4 5M30 21l4 5M38 18l4 5" /></g></S>
);
export const PictoCasserole = (p: P) => (
  <S {...p}><path d="M16 30h28v10a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8Z" fill="#64748b" /><rect x="44" y="33" width="12" height="4" rx="2" fill="#334155" /><path d="M24 22c0-4 4-4 4-8M34 22c0-4 4-4 4-8" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoChat = (p: P) => (
  <S {...p}><path d="M18 20l4 8M46 20l-4 8" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" /><circle cx="32" cy="36" r="16" fill="#94a3b8" /><path d="M25 34h2M37 34h2" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" /><path d="M30 40h4l-2 2Z" fill="#0f172a" /><text x="46" y="20" fontSize="12" fill="#64748b" fontFamily="sans-serif">z</text></S>
);
export const PictoSourire = (p: P) => (
  <S {...p}><circle cx="32" cy="32" r="20" fill="#fde047" /><circle cx="25" cy="28" r="3" fill="#0f172a" /><circle cx="39" cy="28" r="3" fill="#0f172a" /><path d="M23 38c3 5 15 5 18 0" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoChien = (p: P) => (
  <S {...p}><path d="M16 24c-2-6 2-10 2-10l6 6h14l6-6s4 4 2 10" fill="#a16207" /><rect x="16" y="22" width="32" height="24" rx="12" fill="#ca8a04" /><circle cx="26" cy="34" r="3" fill="#0f172a" /><circle cx="38" cy="34" r="3" fill="#0f172a" /><ellipse cx="32" cy="42" rx="4" ry="3" fill="#0f172a" /></S>
);

/* ---------------------------------------------- Histoire : hier / aujourd'hui */
export const PictoTelCadran = (p: P) => (
  <S {...p}><rect x="14" y="34" width="36" height="16" rx="4" fill="#7c2d12" /><path d="M20 34c0-7 5-12 12-12s12 5 12 12" fill="none" stroke="#7c2d12" strokeWidth="4" /><circle cx="32" cy="24" r="7" fill="#fed7aa" stroke="#7c2d12" strokeWidth="2" /><circle cx="32" cy="24" r="2" fill="#7c2d12" /><rect x="46" y="16" width="4" height="20" rx="2" fill="#7c2d12" /></S>
);
export const PictoLampeHuile = (p: P) => (
  <S {...p}><path d="M14 44h30c3 0 5-2 5-5s-2-5-5-5H22c-4 0-8-3-8-8" fill="#b45309" /><path d="M14 44h30v3a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3Z" fill="#92400e" /><path d="M14 26c0-3 4-4 4 0 0 3-4 4-4 0Z" fill="#f59e0b" /><path d="M16 24c0-5 3-7 3-11 2 3 4 5 1 11Z" fill="#fbbf24" /></S>
);
export const PictoPlume = (p: P) => (
  <S {...p}><path d="M48 12C30 16 20 30 16 46l6-2 2 6c16-6 26-18 24-38Z" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" /><path d="M40 20L20 44" stroke="#4f46e5" strokeWidth="2" /><path d="M16 46l-6 8" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoSmartphone = (p: P) => (
  <S {...p}><rect x="20" y="8" width="24" height="48" rx="5" fill="#0f172a" /><rect x="23" y="14" width="18" height="34" rx="1" fill="#38bdf8" /><circle cx="32" cy="52" r="2" fill="#64748b" /></S>
);
export const PictoAmpoule = (p: P) => (
  <S {...p}><path d="M32 8a16 16 0 0 0-9 29c2 2 3 4 3 7h12c0-3 1-5 3-7A16 16 0 0 0 32 8Z" fill="#fde047" stroke="#eab308" strokeWidth="2" /><rect x="26" y="46" width="12" height="6" rx="1" fill="#94a3b8" /><path d="M27 52h10M28 56h8" stroke="#64748b" strokeWidth="2" strokeLinecap="round" /></S>
);
export const PictoStylo = (p: P) => (
  <S {...p}><path d="M44 10l10 10-28 28-13 3 3-13Z" fill="#2563eb" /><path d="M40 14l10 10" stroke="#1e3a8a" strokeWidth="3" /><path d="M16 48l4 4" stroke="#0f172a" strokeWidth="2" /></S>
);
export const PictoCaverne = (p: P) => (
  <S {...p}><path d="M8 52c0-20 12-34 24-34s24 14 24 34Z" fill="#78716c" /><path d="M22 52c0-8 4-14 10-14s10 6 10 14Z" fill="#1c1917" /><circle cx="32" cy="30" r="4" fill="#f59e0b" /><path d="M30 34l-2 8h8l-2-8" fill="#f59e0b" /></S>
);
export const PictoFleche = (p: P) => (
  <S {...p}><path d="M10 32h40" stroke="#c9481f" strokeWidth="5" strokeLinecap="round" /><path d="M42 22l12 10-12 10" fill="none" stroke="#c9481f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></S>
);

/* ---------------------------------------------- Anglais / USA */
export const PictoTaxi = (p: P) => (
  <S {...p}><rect x="10" y="30" width="44" height="16" rx="4" fill="#facc15" /><path d="M18 30l6-9h16l6 9Z" fill="#fde68a" stroke="#a16207" strokeWidth="2" /><rect x="26" y="24" width="12" height="5" fill="#0f172a" /><circle cx="22" cy="47" r="5" fill="#0f172a" /><circle cx="42" cy="47" r="5" fill="#0f172a" /></S>
);
export const PictoPizza = (p: P) => (
  <S {...p}><path d="M32 8l22 42c-14 8-30 8-44 0Z" fill="#fcd34d" stroke="#b45309" strokeWidth="2" /><path d="M32 12l18 36c-12 6-24 6-36 0Z" fill="#f87171" /><circle cx="28" cy="30" r="3" fill="#b91c1c" /><circle cx="38" cy="34" r="3" fill="#b91c1c" /><circle cx="32" cy="42" r="3" fill="#b91c1c" /></S>
);
export const PictoBurger = (p: P) => (
  <S {...p}><path d="M12 24c0-8 9-12 20-12s20 4 20 12Z" fill="#f59e0b" /><rect x="12" y="26" width="40" height="5" fill="#22c55e" /><rect x="12" y="31" width="40" height="6" fill="#7c2d12" /><rect x="12" y="37" width="40" height="5" fill="#fbbf24" /><path d="M12 44c0 6 9 8 20 8s20-2 20-8Z" fill="#f59e0b" /></S>
);
export const PictoBanane = (p: P) => (
  <S {...p}><path d="M14 20c2 18 16 28 34 24-4-2-6-6-6-10 8-6 8-16 8-16-2 10-12 18-24 16-8-2-12-8-12-14Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" /></S>
);
export const PictoTomate = (p: P) => (
  <S {...p}><circle cx="32" cy="36" r="18" fill="#ef4444" /><path d="M32 20l-6-6M32 20l6-6M32 20v-8" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" /><circle cx="26" cy="32" r="3" fill="#fca5a5" /></S>
);
export const PictoLiberte = (p: P) => (
  <S {...p}><path d="M30 22h4v30h-4Z" fill="#5eead4" /><path d="M26 52h12v4H26Z" fill="#5eead4" /><circle cx="32" cy="18" r="5" fill="#5eead4" /><path d="M24 14l3-6 2 5 3-6 3 6 2-5 3 6Z" fill="#5eead4" /><rect x="30" y="24" width="4" height="14" fill="#0d9488" /><path d="M33 24l6-10" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" /><circle cx="40" cy="13" r="3" fill="#fbbf24" /></S>
);

/* ---------------------------------------------- Mots non transparents (anglais) */
export const PictoMaison = (p: P) => (
  <S {...p}><path d="M32 12 8 32h6v20h36V32h6Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" /><rect x="28" y="38" width="10" height="14" fill="#7c2d12" /><rect x="18" y="34" width="8" height="8" fill="#bae6fd" stroke="#0369a1" strokeWidth="1.5" /></S>
);
export const PictoGoutte = (p: P) => (
  <S {...p}><path d="M32 10c10 14 14 20 14 28a14 14 0 0 1-28 0c0-8 4-14 14-28Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" /><path d="M24 40a8 8 0 0 0 6 8" fill="none" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" /></S>
);
export const PictoLivre = (p: P) => (
  <S {...p}><path d="M10 16c8-4 14-4 22 0 8-4 14-4 22 0v34c-8-4-14-4-22 0-8-4-14-4-22 0Z" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round" /><path d="M32 16v34" stroke="#6d28d9" strokeWidth="2" /></S>
);

export const PICTOS: Record<string, (p: P) => React.ReactNode> = {
  maison: PictoMaison, goutte: PictoGoutte, livre: PictoLivre,
  pomme: PictoPomme, fleur: PictoFleur, oreille: PictoOreille, saut: PictoSaut,
  oiseau: PictoOiseau, valise: PictoValise, cartable: PictoCartable, pain: PictoPain,
  casserole: PictoCasserole, chat: PictoChat, sourire: PictoSourire, chien: PictoChien,
  telCadran: PictoTelCadran, lampeHuile: PictoLampeHuile, plume: PictoPlume,
  smartphone: PictoSmartphone, ampoule: PictoAmpoule, stylo: PictoStylo,
  caverne: PictoCaverne, fleche: PictoFleche,
  taxi: PictoTaxi, pizza: PictoPizza, burger: PictoBurger, banane: PictoBanane,
  tomate: PictoTomate, liberte: PictoLiberte,
};

export type PictoName = keyof typeof PICTOS;

/** Rend un pictogramme par son nom. */
export function Picto({ name, size = 44, title }: { name: string; size?: number; title?: string }) {
  const fn = PICTOS[name];
  return fn ? <>{fn({ size, title })}</> : null;
}
