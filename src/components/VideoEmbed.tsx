/**
 * Lecteur vidéo (intégration)
 * ---------------------------
 * Affiche une vidéo dans un cadre 16:9 responsive. Fonctionne avec les
 * liens d'intégration YouTube (format ".../embed/...") ou Vimeo.
 */
export function VideoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-navy-900 shadow-card">
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
