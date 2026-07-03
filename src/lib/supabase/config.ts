/**
 * Petit utilitaire pour savoir si Supabase est configuré.
 * -------------------------------------------------------
 * Si les variables d'environnement Supabase sont absentes, le site
 * bascule automatiquement en mode "démonstration" (données de test).
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Renvoie true si les clés Supabase publiques sont bien renseignées. */
export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}
