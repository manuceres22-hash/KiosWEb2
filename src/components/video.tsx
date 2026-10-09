/**
 * El marco de un video. Sin URL (los videos todavía no están) muestra el lugar
 * con «Video en preparación»; con una URL de YouTube lo reproduce sin cookies
 * hasta que se aprieta play.
 */
export function MarcoVideo({ titulo, url, duracion }: { titulo: string; url: string; duracion?: string }) {
  if (url) {
    return (
      <div className="aspect-video overflow-hidden rounded-panel bg-noche">
        <iframe
          src={url.replace("youtube.com", "youtube-nocookie.com")}
          title={titulo}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }
  return (
    <figure className="estrellas relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-panel bg-noche text-blanco">
      <span className="fondo-lanzamiento flex size-16 items-center justify-center rounded-full sm:size-20" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path d="M9 6l14 8-14 8z" fill="#051e38" />
        </svg>
      </span>
      <figcaption className="mt-4 px-4 text-center">
        <span className="block text-lg font-bold sm:text-xl">{titulo}</span>
        <span className="mt-1 block text-sm text-senal">
          Video en preparación{duracion ? ` · ${duracion}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
