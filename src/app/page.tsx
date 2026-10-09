/* eslint-disable @next/next/no-img-element -- las mascotas son SVG chicos; `next/image` no suma nada en un sitio estático */
import Link from "next/link";
import { NIVELES } from "@/datos/niveles";
import { VIDEOS } from "@/datos/provisorio";
import { ClasePorDentro } from "@/components/infografias";
import { MarcoVideo } from "@/components/video";
import {
  BotonContorno,
  BotonLanzar,
  Contenedor,
  PanelInvitacion,
  Tarjeta,
  TituloSeccion,
} from "@/components/piezas";

const IZQUIERDA = [
  {
    titulo: "Armalo en 3D",
    texto: "Pieza por pieza y tornillo por tornillo, con la herramienta que corresponde. Después, el robot de verdad.",
    icono: "M4 8l8-4 8 4-8 4zM4 8v8l8 4 8-4V8M12 12v8",
  },
  {
    titulo: "Programalo en el simulador",
    texto: "El robot anda como el real: mide, gira, frena. Si funciona acá, funciona en la mesa.",
    icono: "M3 5h18v12H3zM8 21h8M12 17v4",
  },
  {
    titulo: "Bloques y Python, el mismo programa",
    texto: "Cada bloque es una línea de Python de verdad. Pasás de uno a otro sin perder nada.",
    icono: "M8 7l-5 5 5 5M16 7l5 5-5 5",
  },
];

const DERECHA = [
  {
    titulo: "Retos que abren camino",
    texto: "Cinco preguntas al final de cada clase. Aprobarlo abre la siguiente.",
    icono: "M5 12l4 4 10-10",
  },
  {
    titulo: "Racha, liga y duelos",
    texto: "Jugar todos los días, competir con la escuela y desafiar a un compañero.",
    icono: "M12 3c3 4 6 6 6 11a6 6 0 01-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3 0-5 1-8z",
  },
  {
    titulo: "También aprende la IA",
    texto: "Clases para entender cómo decide, cómo «ve» y cómo aprende una máquina.",
    icono: "M12 4a8 8 0 100 16 8 8 0 000-16zM9 10h.01M15 10h.01M9 15c2 1.5 4 1.5 6 0",
  },
];

const CIFRAS = [
  { valor: "5", texto: "niveles, del primer robot al código de la industria" },
  { valor: "64", texto: "lugares en el mapa de cada año" },
  { valor: "12", texto: "robots distintos con un solo kit" },
  { valor: "3", texto: "idiomas: español, inglés y portugués" },
];

function Capacidad({ titulo, texto, icono }: { titulo: string; texto: string; icono: string }) {
  return (
    <li className="flex gap-4 rounded-tarjeta bg-blanco py-5 pl-6 pr-5 shadow-tarjeta sm:pl-8">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-tarjeta bg-cielo">
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path d={icono} fill="none" stroke="#fd8d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <h3 className="text-xl font-bold leading-snug">{titulo}</h3>
        <p className="mt-1 leading-relaxed">{texto}</p>
      </div>
    </li>
  );
}

export default function Inicio() {
  const destacado = VIDEOS[0];
  return (
    <>
      {/* ── El héroe ───────────────────────────────────────────────────── */}
      <Contenedor className="pt-6">
        <section className="estrellas relative overflow-hidden rounded-panel bg-noche px-6 pb-0 pt-12 text-blanco sm:px-12 sm:pt-16 md:pb-16">
          <div className="grid items-center gap-6 md:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/25 px-3 py-1 text-sm text-senal">
                Programación y robótica para chicos y escuelas
              </p>
              <h1 className="mt-5 text-[40px] font-bold leading-[1.1] sm:text-[54px] sm:leading-[1.2]">
                Aprendé a programar armando{" "}
                <span className="bg-gradient-to-b from-[#ff7a53] to-[#ffa84a] bg-clip-text text-transparent">
                  robots de verdad
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-senal sm:text-xl">
                Armás el robot, lo programás en el simulador con bloques o con Python y lo probás en la mesa. Clase a
                clase, con misiones, retos y medallas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BotonLanzar href="/contacto/">Pedí una demo</BotonLanzar>
                <BotonContorno href="/niveles/" oscuro>
                  Conocé los niveles
                </BotonContorno>
              </div>
              <p className="mt-4 text-sm text-senal">Funciona en el celular, la tablet, la PC del aula y el proyector.</p>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle cx="200" cy="210" r="170" fill="none" stroke="#8bb3da" strokeOpacity=".22" strokeDasharray="5 10" />
                <circle cx="200" cy="210" r="120" fill="#022e57" />
                <circle cx="200" cy="210" r="120" fill="none" stroke="#8bb3da" strokeOpacity=".3" />
                <circle cx="48" cy="140" r="5" fill="#fd8d32" />
                <circle cx="356" cy="290" r="7" fill="#ff7a53" />
                <circle cx="330" cy="80" r="3" fill="#fff" />
              </svg>
              <img src="/mascotas/kio.svg" alt="Kio, la mascota de KIOS" width={150} height={185} className="flotar relative mx-auto w-3/5" />
              <img src="/mascotas/bill.svg" alt="" width={150} height={185} className="absolute -left-2 bottom-4 w-1/4" />
              <img src="/mascotas/mako.svg" alt="" width={150} height={185} className="absolute -right-2 top-6 w-1/4" />
            </div>
          </div>
        </section>
      </Contenedor>

      {/* ── Dónde funciona (en vez de logos que no tenemos) ─────────────── */}
      <Contenedor className="mt-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-grafito" aria-label="Dónde funciona KIOS">
          {["Celular", "Tablet", "PC compartida del aula", "Proyector", "Español · English · Português"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-naranja" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </Contenedor>

      {/* ── Qué es: la mascota en el medio y las tarjetas a los costados ─── */}
      <section className="mt-24" aria-labelledby="que-es">
        <Contenedor>
          <TituloSeccion
            id="que-es"
            antetitulo="Qué es KIOS"
            titulo="Un juego para aprender, un robot para tocar"
            bajada="KIOS une una app de clases con kits de robótica de verdad. Lo que se programa en la pantalla, después anda en la mesa."
          />
          <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <ul className="grid gap-4">
              {IZQUIERDA.map((c) => (
                <Capacidad key={c.titulo} {...c} />
              ))}
            </ul>
            <img src="/mascotas/rexplo.svg" alt="" width={150} height={185} className="flotar mx-auto hidden w-56 lg:block" />
            <ul className="grid gap-4">
              {DERECHA.map((c) => (
                <Capacidad key={c.titulo} {...c} />
              ))}
            </ul>
          </div>
        </Contenedor>
      </section>

      {/* ── Las cifras: todas salen del contenido de la app ─────────────── */}
      <Contenedor className="mt-20">
        <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-niebla">
          {CIFRAS.map((c) => (
            <li key={c.valor} className="px-4 text-center">
              <p className="text-4xl font-bold text-marino sm:text-5xl">{c.valor}</p>
              <p className="mx-auto mt-2 max-w-[14rem] text-lg leading-snug">{c.texto}</p>
            </li>
          ))}
        </ul>
      </Contenedor>

      {/* ── Infografía: una clase por dentro ─────────────────────────────── */}
      <section className="mt-24" aria-labelledby="clase">
        <Contenedor>
          <TituloSeccion
            id="clase"
            antetitulo="Una clase por dentro"
            titulo="Cinco pasos, como un juego"
            bajada="Cada clase se juega de punta a punta en la pantalla, con una barra que muestra cuánto falta."
          />
          <div className="mt-12">
            <ClasePorDentro />
          </div>
        </Contenedor>
      </section>

      {/* ── Los niveles ─────────────────────────────────────────────────── */}
      <section className="mt-24" aria-labelledby="niveles">
        <Contenedor>
          <TituloSeccion
            id="niveles"
            antetitulo="Los niveles"
            titulo="Un nivel es un año escolar"
            bajada="Cada uno con su mascota, su kit y su forma de aprender. El nivel lo elige la familia o la escuela."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {NIVELES.map((n) => (
              <li key={n.id}>
                <Link
                  href={`/niveles/#${n.id}`}
                  className="flex h-full flex-col items-center rounded-tarjeta bg-blanco p-6 text-center shadow-tarjeta transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-28 items-end justify-center rounded-full" style={{ background: `${n.color}33` }}>
                    <img src={n.imagen} alt="" width={150} height={185} className="w-24" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{n.nombre}</h3>
                  <p className="text-naranja-texto">{n.claim}</p>
                  <p className="mt-2 text-sm leading-relaxed text-grafito">{n.comoSeAprende}</p>
                  {n.estado && <p className="mt-3 rounded-full bg-cielo px-3 py-1 text-xs">{n.estado}</p>}
                </Link>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      {/* ── Video ───────────────────────────────────────────────────────── */}
      <section className="mt-24" aria-labelledby="video">
        <Contenedor className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-medium uppercase tracking-wider text-naranja-texto">En un minuto</p>
            <h2 id="video" className="mt-2 text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.2]">
              Mirá cómo es KIOS
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Del armado en 3D al robot andando en la mesa, pasando por el simulador y el reto. Más videos en la
              videoteca.
            </p>
            <div className="mt-6">
              <BotonContorno href="/videos/">Ver todos los videos</BotonContorno>
            </div>
          </div>
          <MarcoVideo titulo={destacado.titulo} url={destacado.url} duracion={destacado.duracion} />
        </Contenedor>
      </section>

      {/* ── Escuelas y familias ─────────────────────────────────────────── */}
      <section className="mt-24" aria-label="Para quién es">
        <Contenedor className="grid gap-6 md:grid-cols-2">
          <Tarjeta>
            <p className="font-medium uppercase tracking-wider text-naranja-texto">Para escuelas</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">La escuela es parte del juego</h2>
            <p className="mt-3 text-lg leading-relaxed">
              Panel docente con cursos, tareas y devoluciones; liga de la escuela; y un panel para el Ministerio que ve
              su provincia y nada más.
            </p>
            <div className="mt-6">
              <BotonContorno href="/escuelas/">KIOS en la escuela</BotonContorno>
            </div>
          </Tarjeta>
          <Tarjeta>
            <p className="font-medium uppercase tracking-wider text-naranja-texto">Para familias</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Aprender en casa, a su ritmo</h2>
            <p className="mt-3 text-lg leading-relaxed">
              Con el kit en la mesa y la app en el celular de la casa. Sin escuela, el nivel lo elige la familia.
            </p>
            <div className="mt-6">
              <BotonContorno href="/planes/">Ver los planes</BotonContorno>
            </div>
          </Tarjeta>
        </Contenedor>
      </section>

      <PanelInvitacion />
    </>
  );
}
