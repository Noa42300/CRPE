/**
 * Client Supabase ADMIN (service role)
 * ------------------------------------
 * ⚠️ Utilise la clé SECRÈTE "service role". Il contourne les règles de
 * sécurité et ne doit JAMAIS être utilisé côté navigateur.
 * Uniquement pour le webhook Stripe (passer un utilisateur en Premium).
 */
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./config";

export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  if (!SUPABASE_URL || !serviceKey) {
    throw new Error(
      "Supabase admin non configuré : renseigne SUPABASE_SERVICE_ROLE_KEY."
    );
  }
  return createClient(SUPABASE_URL, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
