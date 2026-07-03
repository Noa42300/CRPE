/**
 * Rafraîchissement de la session utilisateur
 * ------------------------------------------
 * Cette fonction est appelée par le middleware Next.js à chaque requête.
 * Elle garde l'utilisateur connecté en rafraîchissant ses cookies.
 * Si Supabase n'est pas configuré, elle ne fait rien.
 */
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Forme d'un cookie à définir (utilisée pour typer les fonctions ci-dessous).
type CookieToSet = { name: string; value: string; options?: CookieOptions };
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./config";

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  if (!isSupabaseConfigured()) {
    return response;
  }

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Rafraîchit la session (obligatoire pour garder la connexion active).
  await supabase.auth.getUser();

  return response;
}
