/**
 * Client Supabase côté SERVEUR
 * ----------------------------
 * À utiliser dans les Server Components et les routes API pour lire les
 * données et connaître l'utilisateur connecté (via les cookies).
 */
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// Forme d'un cookie à définir.
type CookieToSet = { name: string; value: string; options?: CookieOptions };
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Appelé depuis un Server Component : on peut ignorer, le
          // rafraîchissement de session est géré par le middleware.
        }
      },
    },
  });
}
