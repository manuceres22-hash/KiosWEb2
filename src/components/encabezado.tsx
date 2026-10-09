import Link from "next/link";
import { URL_APP } from "@/datos/provisorio";
import { Logo } from "./logo";

export const SECCIONES = [
  { href: "/robots/", texto: "Robots" },
  { href: "/plataforma/", texto: "Plataforma" },
  { href: "/capacitacion/", texto: "Capacitación" },
  { href: "/tecnologias/", texto: "Tecnologías" },
  { href: "/escuelas/", texto: "Escuelas" },
  { href: "/empresa/", texto: "Empresa" },
];

/**
 * La barra de arriba: azul noche, redondeada y flotando sobre el cielo. En el
 * celular el menú es un `<details>`: abre y cierra sin JavaScript.
 */
export function Encabezado() {
  return (
    <header className="sticky top-0 z-40 pt-3">
      <div className="relative mx-auto max-w-pagina px-4">
      <nav
        aria-label="Principal"
        className="flex items-center gap-4 rounded-panel bg-noche/95 px-4 py-2.5 text-blanco shadow-tarjeta backdrop-blur"
      >
        <Link href="/" className="flex items-center gap-2 rounded-boton py-1" aria-label="KIOS, inicio">
          <Logo />
        </Link>

        <ul className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {SECCIONES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="rounded-boton px-2.5 py-2 text-base hover:bg-white/10">
                {s.texto}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a href={URL_APP} className="rounded-boton border border-blanco px-3 py-2 hover:bg-white/10">
            Entrar
          </a>
          <Link href="/contacto/" className="fondo-lanzamiento rounded-boton px-4 py-2 font-medium text-noche">
            Contacto
          </Link>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-boton border border-white/40 px-3 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir el menú</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span aria-hidden="true">Menú</span>
          </summary>
          <div className="absolute inset-x-4 top-[3.75rem] rounded-panel bg-noche p-4 shadow-tarjeta">
            <ul className="grid gap-1">
              {SECCIONES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="block rounded-boton px-3 py-3 text-lg hover:bg-white/10">
                    {s.texto}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={URL_APP} className="rounded-boton border border-blanco px-3 py-3 text-center">
                Entrar
              </a>
              <Link href="/contacto/" className="fondo-lanzamiento rounded-boton px-3 py-3 text-center font-medium text-noche">
                Contacto
              </Link>
            </div>
          </div>
        </details>
      </nav>
      </div>
    </header>
  );
}
