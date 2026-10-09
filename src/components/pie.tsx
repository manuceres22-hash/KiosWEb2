import Link from "next/link";
import { CONTACTO, URL_APP } from "@/datos/provisorio";
import { SECCIONES } from "./encabezado";
import { Logo } from "./logo";

export function Pie() {
  return (
    <footer className="mt-24 border-t border-niebla bg-hielo px-4 pb-10 pt-14">
      <div className="mx-auto grid max-w-pagina gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-marino">
          <Logo grande />
          <p className="mt-4 max-w-xs text-grafito">
            Aprendé a programar armando robots de verdad. Hecho en Argentina, para familias y escuelas.
          </p>
        </div>
        <div>
          <h2 className="font-bold">El sitio</h2>
          <ul className="mt-3 grid gap-2 text-grafito">
            {SECCIONES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-marino hover:underline">
                  {s.texto}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Para empezar</h2>
          <ul className="mt-3 grid gap-2 text-grafito">
            <li>
              <a href={URL_APP} className="hover:text-marino hover:underline">Entrar a KIOS</a>
            </li>
            <li>
              <Link href="/contacto/" className="hover:text-marino hover:underline">Pedí una demo</Link>
            </li>
            <li>
              <Link href="/planes/#como-se-compra" className="hover:text-marino hover:underline">Cómo se compra</Link>
            </li>
            <li>
              <Link href="/preguntas/" className="hover:text-marino hover:underline">Preguntas frecuentes</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Contacto</h2>
          <ul className="mt-3 grid gap-2 text-grafito">
            <li>
              <a href={`mailto:${CONTACTO.email}`} className="hover:text-marino hover:underline">{CONTACTO.email}</a>
            </li>
            <li>{CONTACTO.horario}</li>
            {CONTACTO.redes.map((r) => (
              <li key={r.nombre}>
                <a href={r.url} className="hover:text-marino hover:underline" rel="noopener">{r.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-pagina border-t border-niebla pt-6 text-sm text-grafito">
        © {new Date().getFullYear()} KIOS · kios.com.ar
      </p>
    </footer>
  );
}
