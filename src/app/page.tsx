import Link from "next/link";
import { SOLUCIONES } from "@/datos/soluciones";
import { VIDEOS } from "@/datos/provisorio";
import { Escena } from "@/components/escena";
import { MarcoVideo } from "@/components/video";
import {
  BotonContorno,
  BotonLanzar,
  Contenedor,
  PanelInvitacion,
  Tarjeta,
  TituloSeccion,
} from "@/components/piezas";

const PARA_QUIEN = [
  {
    titulo: "Escuelas",
    texto: "Kits por curso, la plataforma con panel docente y la capacitación para arrancar el año.",
    href: "/escuelas/",
    accion: "KIOS en la escuela",
  },
  {
    titulo: "Gobiernos",
    texto: "Programas para una provincia o un distrito, con un panel que ve su territorio y nada más.",
    href: "/escuelas/#gobiernos",
    accion: "Programas provinciales",
  },
  {
    titulo: "Familias",
    texto: "El kit en la mesa y la plataforma en el celular de la casa, para aprender a su ritmo.",
    href: "/planes/",
    accion: "Ver precios",
  },
];

const COMO_TRABAJAMOS = [
  { titulo: "Diagnóstico", texto: "Conocemos la escuela: cuántos cursos, qué equipos hay y qué saben hoy los docentes." },
  { titulo: "Propuesta", texto: "Armamos el combo: kits, plataforma, capacitación y, si hace falta, otras tecnologías." },
  { titulo: "Capacitación", texto: "Los docentes aprenden con los mismos robots y las mismas clases que van a dar." },
  { titulo: "Acompañamiento", texto: "Seguimos cerca durante el año, con soporte y el avance de cada curso a la vista." },
];

export default function Inicio() {
  const destacado = VIDEOS[0];
  return (
    <>
      {/* ── El héroe ───────────────────────────────────────────────────── */}
      <Contenedor className="pt-6">
        <section className="estrellas relative overflow-hidden rounded-panel bg-noche px-6 pb-6 pt-12 text-blanco sm:px-12 sm:pt-16 md:pb-16">
          <div className="grid items-center gap-6 md:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/25 px-3 py-1 text-sm text-senal">
                Tecnología educativa · Robótica · Programación
              </p>
              <h1 className="mt-5 text-[40px] font-bold leading-[1.1] sm:text-[54px] sm:leading-[1.2]">
                Tecnología para{" "}
                <span className="bg-gradient-to-b from-[#ff7a53] to-[#ffa84a] bg-clip-text text-transparent">
                  aprender haciendo
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-senal sm:text-xl">
                KIOS lleva la robótica y la programación a escuelas, gobiernos y familias: robots de verdad, una
                plataforma para programarlos, capacitación docente y acompañamiento todo el año.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BotonLanzar href="/contacto/">Hablemos</BotonLanzar>
                <BotonContorno href="#soluciones" oscuro>
                  Qué hacemos
                </BotonContorno>
              </div>
            </div>
            <Escena className="mx-auto w-full max-w-md" />
          </div>
        </section>
      </Contenedor>

      {/* ── Las cuatro líneas ───────────────────────────────────────────── */}
      <section id="soluciones" className="mt-24 scroll-mt-28" aria-labelledby="titulo-soluciones">
        <Contenedor>
          <TituloSeccion
            id="titulo-soluciones"
            antetitulo="Qué hacemos"
            titulo="Todo lo que necesita un aula de tecnología"
            bajada="Cuatro líneas que funcionan juntas o por separado."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {SOLUCIONES.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  className="group flex h-full gap-5 rounded-tarjeta bg-blanco p-6 shadow-tarjeta transition-transform hover:-translate-y-1 sm:pl-8"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-tarjeta bg-cielo">
                    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={s.icono} fill="none" stroke="#fd8d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{s.titulo}</h3>
                    <p className="mt-2 text-lg leading-relaxed">{s.bajada}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.puntos.map((p) => (
                        <li key={p} className="rounded-full bg-cielo px-3 py-1 text-sm">{p}</li>
                      ))}
                    </ul>
                    <p className="mt-4 font-medium text-naranja-texto group-hover:underline">Conocé más →</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      {/* ── Para quién ──────────────────────────────────────────────────── */}
      <section className="mt-24" aria-labelledby="para-quien">
        <Contenedor>
          <TituloSeccion id="para-quien" antetitulo="Para quién" titulo="Del aula a la provincia" />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PARA_QUIEN.map((p) => (
              <li key={p.titulo}>
                <Tarjeta className="flex h-full flex-col">
                  <h3 className="text-2xl font-bold">{p.titulo}</h3>
                  <p className="mb-6 mt-2 text-lg leading-relaxed">{p.texto}</p>
                  <div className="mt-auto">
                    <BotonContorno href={p.href}>{p.accion}</BotonContorno>
                  </div>
                </Tarjeta>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      {/* ── Cómo trabajamos (infografía) ────────────────────────────────── */}
      <section className="mt-24" aria-labelledby="como">
        <Contenedor>
          <TituloSeccion id="como" antetitulo="Cómo trabajamos" titulo="De la primera charla al aula funcionando" />
          <ol className="relative mt-12 grid gap-4 md:grid-cols-4">
            <span aria-hidden="true" className="fondo-cometa absolute left-0 right-0 top-12 hidden h-1 rounded-full opacity-60 md:block" />
            {COMO_TRABAJAMOS.map((p, i) => (
              <li key={p.titulo} className="relative rounded-tarjeta bg-blanco p-6 shadow-tarjeta">
                <span className="fondo-lanzamiento relative z-10 flex size-12 items-center justify-center rounded-full text-lg font-bold text-noche">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-1 leading-relaxed text-grafito">{p.texto}</p>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      {/* ── Video ───────────────────────────────────────────────────────── */}
      <section className="mt-24" aria-labelledby="video">
        <Contenedor className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-medium uppercase tracking-wider text-naranja-texto">En un minuto</p>
            <h2 id="video" className="mt-2 text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.2]">
              Mirá KIOS en acción
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Los robots, la plataforma y una capacitación, en un minuto. Más videos en la videoteca.
            </p>
            <div className="mt-6">
              <BotonContorno href="/videos/">Ver todos los videos</BotonContorno>
            </div>
          </div>
          <MarcoVideo titulo={destacado.titulo} url={destacado.url} duracion={destacado.duracion} />
        </Contenedor>
      </section>

      <PanelInvitacion
        titulo="¿Armamos el proyecto de tu escuela?"
        texto="Contanos qué tienen y qué quieren lograr. Te proponemos robots, plataforma y capacitación a la medida."
        accion="Hablemos"
      />
    </>
  );
}
