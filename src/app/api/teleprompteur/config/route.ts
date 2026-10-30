/**
 * Téléprompteur : clés publiques Supabase pour la page statique /teleprompteur/.
 * Elles servent uniquement de relais (Supabase Realtime) pour mettre en relation
 * le téléphone et le PC avant un transfert direct en Wi-Fi. La vidéo, elle,
 * ne passe jamais par Supabase ni par ce serveur.
 */
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ url: SUPABASE_URL, key: SUPABASE_ANON_KEY });
}
