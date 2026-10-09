/* eslint-disable @next/next/no-img-element -- sitio estático: las fotos ya van optimizadas en WebP */
import Link from "next/link";
import { SOLUCIONES } from "@/datos/soluciones";
import { VIDEOS } from "@/datos/provisorio";
import { MarcoVideo } from "@/components/video";
import { SeccionKio } from "@/components/seccion-kio";
import { Icono } from "@/components/icono";
import { BotonContorno, BotonLanzar, Contenedor, PanelInvitacion, TituloSeccion } from "@/components/piezas";

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

const [ROBOTS, PLATAFORMA, CAPACITACION, TECNOLOGIAS] = SOLUCIONES;

function Mas() {
  return (
    <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-naranja-texto">
      Conocé más
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform duration-200 ease-[var(--ease-salida)] group-hover:translate-x-0.5">
        <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Inicio() {
  const destacado = VIDEOS[0];
  return (
    <>
      {/* ── El héroe: claro, para que los robots se vean como son ─────────── */}
      <Contenedor className="pt-6">
        <section className="borde-fino relative overflow-hidden rounded-panel bg-[linear-gradient(180deg,#f4faff,#e6f3ff)] px-6 pt-12 sm:px-12 sm:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,168,74,0.28),transparent_62%)]"
          />
          <div className="relative grid items-end gap-4 md:grid-cols-[1.05fr_1fr]">
            <div className="pb-6 md:pb-20">
              <p className="inline-flex items-center gap-2 rounded-full bg-blanco/80 px-3 py-1.5 text-sm text-marino shadow-[0_0_0_1px_rgba(24,61,109,0.08)]">
                <span className="size-1.5 rounded-full bg-naranja" aria-hidden="true" />
                Robots · Plataforma · Capacitación docente
              </p>
              <h1 className="mt-6 text-[44px] font-bold leading-[1.02] text-marino sm:text-[64px]">
                Tecnología para aprender{" "}
                <span className="bg-gradient-to-b from-[#ff7a53] to-[#f08a1c] bg-clip-text text-transparent">haciendo</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-marino/80 sm:text-xl">
                KIOS lleva la robótica y la programación a escuelas, gobiernos y familias: robots de verdad, una
                plataforma para programarlos y docentes que saben enseñarlos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BotonLanzar href="/contacto/">Hablemos</BotonLanzar>
                <BotonContorno href="#soluciones">Qué hacemos</BotonContorno>
              </div>
            </div>
            <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[520px]" aria-label="Robots que se arman con los kits de KIOS" role="img">
              <span aria-hidden="true" className="absolute inset-x-[6%] bottom-[3%] h-[10%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(5,30,56,0.18),transparent)]" />
              <img src="/robots/lanzador.webp" alt="" width={584} height={787} className="absolute left-[2%] top-[20%] w-[36%]" />
              <img src="/robots/tanque-brazo.webp" alt="" width={454} height={473} className="absolute right-0 top-[8%] w-[58%]" />
              <img src="/robots/weeebot-mini.webp" alt="" width={644} height={432} fetchPriority="high" className="absolute bottom-[2%] left-[14%] w-[54%] drop-shadow-[0_20px_25px_rgba(5,30,56,0.18)]" />
            </div>
          </div>
        </section>
      </Contenedor>

      {/* ── Qué hacemos: cuatro líneas, cada una con su peso ─────────────── */}
      <section id="soluciones" className="mt-28 scroll-mt-28" aria-labelledby="titulo-soluciones">
        <Contenedor>
          <div className="aparecer">
            <TituloSeccion
              id="titulo-soluciones"
              antetitulo="Qué hacemos"
              titulo="Todo lo que necesita un aula de tecnología"
              bajada="Cuatro líneas que funcionan juntas o por separado."
            />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-6">
            {/* Robots: la tarjeta grande, con la caja de 12 en 1 */}
            <li className="aparecer md:col-span-4" style={{ ["--i" as string]: 0 }}>
              <Link href={ROBOTS.href} className="group borde-fino levitar grid h-full overflow-hidden rounded-tarjeta bg-blanco sm:grid-cols-[1fr_0.9fr]">
                <div className="p-7 sm:p-8">
                  <Icono d={ROBOTS.icono} />
                  <h3 className="mt-5 text-2xl font-bold">{ROBOTS.titulo}</h3>
                  <p className="mt-2 text-lg leading-relaxed">{ROBOTS.bajada}</p>
                  <Mas />
                </div>
                <img src="/robots/robotstorm-12-en-1.webp" alt="Los doce robots que se arman con el kit 12-in-1 RobotStorm" width={594} height={560} loading="lazy" className="h-full max-h-80 w-full object-contain p-4 mix-blend-multiply sm:max-h-none" />
              </Link>
            </li>
            {/* Plataforma: oscura, con la app asomando */}
            <li className="aparecer md:col-span-2" style={{ ["--i" as string]: 1 }}>
              <Link href={PLATAFORMA.href} className="group levitar relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-tarjeta bg-noche p-7 text-blanco sm:p-8">
                <h3 className="text-2xl font-bold">{PLATAFORMA.titulo}</h3>
                <p className="mt-2 leading-relaxed text-senal">{PLATAFORMA.bajada}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-naranja">Conocé más →</span>
                <img src="/app/cel-mision.webp" alt="" width={780} height={1688} loading="lazy" className="absolute -bottom-48 left-1/2 w-48 -translate-x-1/2 rotate-[-4deg] rounded-[26px] border-[6px] border-[#0b1a2c] shadow-2xl transition-transform duration-300 ease-[var(--ease-salida)] group-hover:-translate-y-2" />
              </Link>
            </li>
            <li className="aparecer md:col-span-3" style={{ ["--i" as string]: 2 }}>
              <Link href={CAPACITACION.href} className="group borde-fino levitar flex h-full flex-col rounded-tarjeta bg-blanco p-7 sm:p-8">
                <Icono d={CAPACITACION.icono} />
                <h3 className="mt-5 text-2xl font-bold">{CAPACITACION.titulo}</h3>
                <p className="mt-2 text-lg leading-relaxed">{CAPACITACION.bajada}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {CAPACITACION.puntos.map((p) => (
                    <li key={p} className="rounded-full bg-cielo px-3 py-1 text-sm">{p}</li>
                  ))}
                </ul>
                <Mas />
              </Link>
            </li>
            <li className="aparecer md:col-span-3" style={{ ["--i" as string]: 3 }}>
              <Link href={TECNOLOGIAS.href} className="group borde-fino levitar flex h-full flex-col rounded-tarjeta bg-blanco p-7 sm:p-8">
                <Icono d={TECNOLOGIAS.icono} />
                <h3 className="mt-5 text-2xl font-bold">{TECNOLOGIAS.titulo}</h3>
                <p className="mt-2 text-lg leading-relaxed">{TECNOLOGIAS.bajada}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {TECNOLOGIAS.puntos.map((p) => (
                    <li key={p} className="rounded-full bg-cielo px-3 py-1 text-sm">{p}</li>
                  ))}
                </ul>
                <Mas />
              </Link>
            </li>
          </ul>
        </Contenedor>
      </section>

      <SeccionKio />

      {/* ── Para quién ──────────────────────────────────────────────────── */}
      <section className="mt-28" aria-labelledby="para-quien">
        <Contenedor>
          <div className="aparecer">
            <TituloSeccion id="para-quien" antetitulo="Para quién" titulo="Del aula a la provincia" />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {PARA_QUIEN.map((p, i) => (
              <li key={p.titulo} className="aparecer" style={{ ["--i" as string]: i }}>
                <div className="borde-fino flex h-full flex-col rounded-tarjeta bg-blanco p-7 sm:p-8">
                  <h3 className="text-2xl font-bold">{p.titulo}</h3>
                  <p className="mb-6 mt-2 text-lg leading-relaxed">{p.texto}</p>
                  <div className="mt-auto">
                    <BotonContorno href={p.href}>{p.accion}</BotonContorno>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      {/* ── Cómo trabajamos (infografía) ────────────────────────────────── */}
      <section className="mt-28" aria-labelledby="como">
        <Contenedor>
          <div className="aparecer">
            <TituloSeccion id="como" antetitulo="Cómo trabajamos" titulo="De la primera charla al aula funcionando" />
          </div>
          <ol className="relative mt-12 grid gap-4 md:grid-cols-4">
            <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[2.9rem] hidden h-px bg-[linear-gradient(90deg,transparent,#fd8d32_15%,#fd8d32_85%,transparent)] md:block" />
            {COMO_TRABAJAMOS.map((p, i) => (
              <li key={p.titulo} className="aparecer relative text-center" style={{ ["--i" as string]: i }}>
                <span className="fondo-lanzamiento relative z-10 mx-auto flex size-12 items-center justify-center rounded-full text-lg font-bold text-noche ring-8 ring-cielo">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.titulo}</h3>
                <p className="mx-auto mt-1 max-w-[16rem] leading-relaxed text-grafito">{p.texto}</p>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      {/* ── Video ───────────────────────────────────────────────────────── */}
      <section className="mt-28" aria-labelledby="video">
        <Contenedor className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="aparecer">
            <p className="font-medium text-naranja-texto">En un minuto</p>
            <h2 id="video" className="mt-2 text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.1]">
              Mirá KIOS en acción
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Los robots, la plataforma y una capacitación, en un minuto. Más videos en la videoteca.
            </p>
            <div className="mt-6">
              <BotonContorno href="/videos/">Ver todos los videos</BotonContorno>
            </div>
          </div>
          <div className="aparecer" style={{ ["--i" as string]: 1 }}>
            <MarcoVideo titulo={destacado.titulo} url={destacado.url} duracion={destacado.duracion} />
          </div>
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
