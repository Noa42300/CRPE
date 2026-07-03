/**
 * Middleware Next.js
 * ------------------
 * S'exécute avant chaque page. Ici, il sert uniquement à maintenir la
 * session Supabase active. Tu n'as normalement pas à le modifier.
 */
import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Applique le middleware à toutes les pages, SAUF aux fichiers statiques.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
