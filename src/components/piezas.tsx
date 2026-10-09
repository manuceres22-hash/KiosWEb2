import Link from "next/link";
import { PROVISORIO } from "@/datos/provisorio";

/** El botón naranja: el único que dice «empezá». */
export function BotonLanzar({ href, children }: { href: string; children: React.ReactNode }) {
  const clases =
    "fondo-lanzamiento inline-flex min-h-12 items-center gap-2 rounded-boton px-5 py-3 text-lg font-medium text-noche transition-transform hover:-translate-y-0.5";
  const flecha = (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 9h11M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={clases}>
        {children}
        {flecha}
      </a>
    );
  }
  return (
    <Link href={href} className={clases}>
      {children}
      {flecha}
    </Link>
  );
}

/** El botón de segunda: contorno, sobre fondo oscuro o claro. */
export function BotonContorno({
  href,
  children,
  oscuro = false,
}: {
  href: string;
  children: React.ReactNode;
  oscuro?: boolean;
}) {
  const clases = `inline-flex min-h-12 items-center rounded-boton border px-5 py-3 text-lg ${
    oscuro ? "border-blanco text-blanco hover:bg-white/10" : "border-marino text-marino hover:bg-blanco"
  }`;
  return href.startsWith("http") ? (
    <a href={href} className={clases}>{children}</a>
  ) : (
    <Link href={href} className={clases}>{children}</Link>
  );
}

export function Contenedor({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-pagina px-4 ${className}`}>{children}</div>;
}

export function TituloSeccion({
  antetitulo,
  titulo,
  bajada,
  id,
}: {
  antetitulo?: string;
  titulo: string;
  bajada?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {antetitulo && <p className="font-medium uppercase tracking-wider text-naranja-texto">{antetitulo}</p>}
      <h2 id={id} className="mt-2 text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.2]">
        {titulo}
      </h2>
      {bajada && <p className="mt-4 text-lg leading-relaxed sm:text-xl">{bajada}</p>}
    </div>
  );
}

/** El panel azul noche de arriba de cada página interior. */
export function CabeceraDePagina({
  titulo,
  bajada,
  imagen,
  icono,
  children,
}: {
  titulo: string;
  bajada: string;
  /** Una mascota: sólo en las páginas de la plataforma, que es donde viven. */
  imagen?: string;
  /** El resto de las páginas lleva un ícono en órbita. */
  icono?: string;
  children?: React.ReactNode;
}) {
  return (
    <Contenedor className="pt-6">
      <section className="estrellas relative overflow-hidden rounded-panel bg-noche px-6 py-12 text-blanco sm:px-12 sm:py-16">
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-[54px] sm:leading-[1.2]">{titulo}</h1>
            <p className="mt-5 text-lg leading-relaxed text-senal sm:text-xl">{bajada}</p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {icono && !imagen && (
            <svg viewBox="0 0 200 200" className="mx-auto hidden w-44 md:block lg:w-52" aria-hidden="true">
              <circle cx="100" cy="100" r="92" fill="none" stroke="#8bb3da" strokeOpacity=".25" strokeDasharray="4 8" />
              <circle cx="100" cy="100" r="62" fill="#022e57" stroke="#8bb3da" strokeOpacity=".3" />
              <g transform="translate(64 64) scale(3)">
                <path d={icono} fill="none" stroke="#ffa84a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <circle cx="22" cy="60" r="5" fill="#fd8d32" />
              <circle cx="180" cy="150" r="6" fill="#ff7a53" />
              <circle cx="166" cy="30" r="2.5" fill="#fff" />
            </svg>
          )}
          {imagen && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagen} alt="" width={150} height={185} className="flotar mx-auto hidden w-40 md:block lg:w-48" />
          )}
        </div>
      </section>
    </Contenedor>
  );
}

/** La tarjeta blanca de las grillas. */
export function Tarjeta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-tarjeta bg-blanco p-6 shadow-tarjeta sm:p-8 ${className}`}>{children}</div>;
}

/** Al lado de todo número que todavía no está decidido. */
export function AvisoProvisorio({ children = "Valores de referencia, a confirmar." }: { children?: React.ReactNode }) {
  if (!PROVISORIO) return null;
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-[#fff1e3] px-3 py-1 text-sm text-naranja-texto">
      <span aria-hidden="true">●</span>
      {children}
    </p>
  );
}

/** El cierre de casi todas las páginas: un panel azul con el botón naranja. */
export function PanelInvitacion({
  titulo = "¿Hablamos de tu proyecto?",
  texto = "Escribinos y te mostramos KIOS funcionando: los robots, la plataforma y cómo es una capacitación.",
  accion = "Pedí una demo",
}: {
  titulo?: string;
  texto?: string;
  accion?: string;
}) {
  return (
    <Contenedor className="mt-24">
      <section className="estrellas relative overflow-hidden rounded-tarjeta bg-profundo px-6 py-10 text-blanco sm:px-8 sm:py-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.3]">{titulo}</h2>
            <p className="mt-4 max-w-xl text-lg text-senal">{texto}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <BotonLanzar href="/contacto/">{accion}</BotonLanzar>
              <span className="text-sm text-senal">Sin compromiso. Te respondemos en el día.</span>
            </div>
          </div>
          <Cohete />
        </div>
      </section>
    </Contenedor>
  );
}

export function Cohete() {
  return (
    <svg viewBox="0 0 220 220" className="mx-auto hidden w-48 md:block lg:w-56" aria-hidden="true">
      <circle cx="110" cy="110" r="90" fill="none" stroke="#8bb3da" strokeOpacity=".25" strokeDasharray="4 8" />
      <circle cx="110" cy="110" r="60" fill="none" stroke="#8bb3da" strokeOpacity=".2" />
      <g transform="rotate(35 110 110)">
        <path d="M110 30c26 22 34 58 26 96h-52c-8-38 0-74 26-96z" fill="#ffffff" />
        <circle cx="110" cy="80" r="13" fill="#022e57" stroke="#8bb3da" strokeWidth="4" />
        <path d="M84 110l-18 26 22-4zM136 110l18 26-22-4z" fill="#ff7a53" />
        <path d="M94 128h32l-6 12h-20z" fill="#183d6d" />
        <path d="M100 142c4 22 10 34 10 34s6-12 10-34z" fill="#ffa84a" />
        <path d="M104 142c3 14 6 20 6 20s3-6 6-20z" fill="#ff2a64" opacity=".7" />
      </g>
      <circle cx="40" cy="52" r="3" fill="#fd8d32" />
      <circle cx="186" cy="160" r="4" fill="#fd8d32" />
      <circle cx="176" cy="40" r="2" fill="#fff" />
    </svg>
  );
}
