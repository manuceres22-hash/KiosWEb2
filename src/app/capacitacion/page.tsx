import type { Metadata } from "next";
import { CAPACITACION } from "@/datos/provisorio";
import { AvisoProvisorio, BotonLanzar, CabeceraDePagina, Contenedor, PanelInvitacion, Tarjeta, TituloSeccion } from "@/components/piezas";
import { Icono } from "@/components/icono";

export const metadata: Metadata = {
  title: "Capacitación docente",
  description: "Capacitación docente en robótica, programación e inteligencia artificial: presencial, virtual y con acompañamiento en el aula.",
};

export default function Capacitacion() {
  return (
    <>
      <CabeceraDePagina
        titulo="Capacitación docente"
        bajada="Para dar clases de robótica y programación no hace falta ser ingeniero. Formamos a los docentes con los mismos robots y las mismas clases que después van a dar."
        foto={{ src: "/robots/detalle-sensor.webp", ancho: 396, alto: 420 }}
      >
        <BotonLanzar href="/contacto/?motivo=capacitacion">Quiero capacitar a mi equipo</BotonLanzar>
      </CabeceraDePagina>

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio>Modalidades y temario de referencia, a confirmar.</AvisoProvisorio>
      </Contenedor>

      <section className="mt-10" aria-labelledby="modalidades">
        <Contenedor>
          <TituloSeccion id="modalidades" antetitulo="Modalidades" titulo="Como le quede mejor a tu escuela" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {CAPACITACION.modalidades.map((m) => (
              <li key={m.nombre}>
                <Tarjeta className="h-full">
                  <h3 className="text-2xl font-bold">{m.nombre}</h3>
                  <p className="mt-2 text-lg leading-relaxed">{m.texto}</p>
                  <p className="mt-4 inline-block rounded-full bg-cielo px-3 py-1 text-sm">{m.duracion}</p>
                </Tarjeta>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="temario">
        <Contenedor>
          <TituloSeccion
            id="temario"
            antetitulo="Infografía"
            titulo="El recorrido de la capacitación"
            bajada="Del primer robot armado a evaluar un proyecto final."
          />
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {CAPACITACION.temario.map((t, i) => (
              <li key={t.titulo} className="flex gap-5 rounded-tarjeta bg-blanco p-5 borde-fino sm:p-6">
                <span className="fondo-lanzamiento flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-noche">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{t.titulo}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-grafito">{t.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="incluye">
        <Contenedor className="grid gap-5 md:grid-cols-3">
          <h2 id="incluye" className="sr-only">Qué incluye</h2>
          {[
            { t: "Con los robots de verdad", x: "Cada docente arma y programa los mismos kits que van a usar los chicos.", i: "M5 9h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2zM9 13h.01M15 13h.01M12 9V5" },
            { t: "Con la plataforma", x: "Practican el simulador, las clases y el panel docente con una escuela de prueba.", i: "M3 5h18v12H3zM8 21h8M12 17v4" },
            { t: "Con materiales para el aula", x: "Guías de cada clase y criterios para evaluar los proyectos.", i: "M6 3h9l4 4v14H6zM9 12h7M9 16h7" },
          ].map((c) => (
            <Tarjeta key={c.t} className="flex gap-4">
              <Icono d={c.i} />
              <div>
                <h3 className="text-xl font-bold">{c.t}</h3>
                <p className="mt-1 leading-relaxed">{c.x}</p>
              </div>
            </Tarjeta>
          ))}
        </Contenedor>
      </section>

      <PanelInvitacion
        titulo="Armemos la capacitación de tu escuela"
        texto="Contanos cuántos docentes son y qué experiencia tienen. Te proponemos la modalidad y el calendario."
        accion="Hablemos"
      />
    </>
  );
}
