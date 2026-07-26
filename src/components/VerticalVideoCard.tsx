/**
 * Carte vidéo verticale (format TikTok / Reels 9:16)
 * --------------------------------------------------
 * Affiche une vidéo locale (dossier /public/videos) dans un cadre vertical
 * arrondi, avec les contrôles natifs du lecteur (lecture, pause, volume,
 * plein écran). 100% HTML natif : aucune dépendance, fonctionne sur Vercel.
 */
export function VerticalVideoCard({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <figure className="card card-hover flex flex-col items-center p-4">
      {/* Cadre vertical 9:16 arrondi */}
      <div className="aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-navy-900 shadow-card">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          Votre navigateur ne permet pas de lire cette vidéo.
        </video>
      </div>

      {/* Titre + note */}
      <figcaption className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
        {subtitle && (
          <span className="badge mt-2 bg-sky-100 text-sky-800">🎓 {subtitle}</span>
        )}
      </figcaption>
    </figure>
  );
}
