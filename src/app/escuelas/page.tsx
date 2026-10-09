import type { Metadata } from "next";
import Link from "next/link";
import { Escena } from "@/components/escena";
import { BotonLanzar, CabeceraDePagina, Contenedor, PanelInvitacion, Tarjeta, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Escuelas y gobiernos",
  description: "Robots por curso, la plataforma con panel docente, capacitación y programas provinciales con los datos de cada provincia aislados.",
};

const PAQUETE = [
  { titulo: "Robots por curso", texto: "Los kits que corresponden a cada nivel, armados por curso.", href: "/robots/" },
  { titulo: "La plataforma", texto: "Clases, simulador y un código de acceso para cada alumno.", href: "/plataforma/" },
  { titulo: "Capacitación docente", texto: "Para que el equipo dé las clases con confianza desde el primer día.", href: "/capacitacion/" },
  { titulo: "Otras tecnologías", texto: "Impresión 3D, IoT, espacios maker y proyectos a medida.", href: "/tecnologias/" },
];

const DOCENTE = [
  { titulo: "Cursos con su nivel", texto: "Cada curso juega el nivel que elige la escuela. Una docente puede dar clases en varias escuelas." },
  { titulo: "Tareas", texto: "Asigná una clase a un curso entero y mirá quién la hizo." },
  { titulo: "Devoluciones", texto: "Escribile a cada alumno sobre su trabajo; le aparece en su inicio." },
  { titulo: "El avance de cada uno", texto: "XP, clases, retos y medallas de cada alumno, sin planillas." },
  { titulo: "Códigos de acceso", texto: "Los chicos entran con un código, sin mail ni contraseña. Ideal para la PC compartida del aula." },
  { titulo: "Liga de la escuela", texto: "Una competencia sana entre compañeros, que se vive en el aula." },
];

export default function Escuelas() {
  return (
    <>
      <CabeceraDePagina
        titulo="Escuelas y gobiernos"
        bajada="Llevamos la robótica y la programación al aula de punta a punta: robots, plataforma, capacitación y acompañamiento. Para una escuela, un distrito o una provincia entera."
        icono="M3 21V9l9-6 9 6v12M9 21v-6h6v6"
      >
        <BotonLanzar href="/contacto/?motivo=escuela">Quiero KIOS en mi escuela</BotonLanzar>
      </CabeceraDePagina>

      <section className="mt-20" aria-labelledby="paquete">
        <Contenedor>
          <TituloSeccion
            id="paquete"
            antetitulo="Qué recibe la escuela"
            titulo="Todo lo que hace falta, en un solo lugar"
            bajada="Elegís lo que necesitás: funciona junto o por separado."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAQUETE.map((p) => (
              <li key={p.titulo}>
                <Link href={p.href} className="block h-full rounded-tarjeta bg-blanco p-6 shadow-tarjeta transition-transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold">{p.titulo}</h3>
                  <p className="mt-2 leading-relaxed">{p.texto}</p>
                  <p className="mt-3 font-medium text-naranja-texto">Conocé más →</p>
                </Link>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="docente">
        <Contenedor>
          <TituloSeccion id="docente" antetitulo="En la plataforma, para docentes" titulo="Todo el curso en un panel" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCENTE.map((d) => (
              <li key={d.titulo}>
                <Tarjeta className="h-full">
                  <h3 className="text-xl font-bold">{d.titulo}</h3>
                  <p className="mt-2 leading-relaxed">{d.texto}</p>
                </Tarjeta>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section id="gobiernos" className="mt-24 scroll-mt-28" aria-labelledby="capas">
        <Contenedor>
          <TituloSeccion
            id="capas"
            antetitulo="Para gobiernos"
            titulo="Cada uno ve lo suyo"
            bajada="El aislamiento es una promesa: los datos de una escuela no los ve otra, y los de una provincia no salen de la provincia."
          />
          <ol className="mx-auto mt-10 grid max-w-3xl gap-3">
            {[
              { quien: "Ministerio", ve: "Las escuelas de su provincia, y nada más.", ancho: "100%", fondo: "bg-noche text-blanco" },
              { quien: "Dirección", ve: "Los cursos y docentes de su escuela.", ancho: "88%", fondo: "bg-profundo text-blanco" },
              { quien: "Docente", ve: "Sus cursos: tareas, devoluciones y avance.", ancho: "76%", fondo: "bg-marino text-blanco" },
              { quien: "Alumno", ve: "Su avance, su liga y lo que le asignaron.", ancho: "64%", fondo: "fondo-lanzamiento text-noche" },
            ].map((c) => (
              <li key={c.quien} className={`mx-auto w-full rounded-tarjeta px-6 py-4 ${c.fondo}`} style={{ maxWidth: c.ancho }}>
                <p className="text-lg font-bold">{c.quien}</p>
                <p className="opacity-90">{c.ve}</p>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="aula">
        <Contenedor className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Escena className="mx-auto w-56" />
          <div>
            <h2 id="aula" className="text-3xl font-bold leading-tight sm:text-[45px] sm:leading-[1.2]">Nunca exige un dispositivo bueno</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Anda desde una pantalla de 360 px hasta el proyector, se maneja con el dedo y aguanta la PC compartida del
              aula. El simulador corre igual en un celular lento: el robot llega al mismo lugar.
            </p>
          </div>
        </Contenedor>
      </section>

      <PanelInvitacion titulo="Llevá KIOS a tu escuela o tu provincia" texto="Te mostramos todo funcionando y armamos juntos la puesta en marcha." accion="Hablemos" />
    </>
  );
}
