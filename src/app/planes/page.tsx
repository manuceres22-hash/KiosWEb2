import type { Metadata } from "next";
import Link from "next/link";
import { CAPACITACION, COMO_SE_COMPRA, PLANES, PRECIOS_KITS, formatearPrecio } from "@/datos/provisorio";
import { AvisoProvisorio, CabeceraDePagina, Contenedor, PanelInvitacion, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Precios",
  description: "Precios de KIOS: suscripción a la plataforma para familias, escuelas y ministerios, robots y kits, capacitación docente y otras tecnologías.",
};

export default function Planes() {
  return (
    <>
      <CabeceraDePagina
        titulo="Precios"
        bajada="Los robots se compran una vez; la plataforma es una suscripción; la capacitación y los proyectos se arman a medida. Abajo, cada cosa por separado."
        icono="M4 7h16v12H4zM4 11h16M8 15h3"
      />

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio />
      </Contenedor>

      <Contenedor className="mt-12">
        <h2 className="mb-10 text-center text-3xl font-bold sm:text-[45px] sm:leading-[1.2]">Suscripción a la plataforma</h2>
        <ul className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANES.map((p) => (
            <li
              key={p.id}
              className={`relative flex flex-col rounded-tarjeta p-6 sm:p-8 ${
                p.destacado ? "estrellas bg-noche text-blanco borde-fino lg:-my-4 lg:py-12" : "bg-blanco borde-fino"
              }`}
            >
              {p.destacado && (
                <span className="fondo-lanzamiento absolute -top-3 left-6 rounded-full px-3 py-1 text-sm font-medium text-noche">
                  Pensado para el aula
                </span>
              )}
              <h2 className="text-2xl font-bold">{p.nombre}</h2>
              <p className={p.destacado ? "text-senal" : "text-grafito"}>{p.para}</p>
              <p className="mt-6 text-[40px] font-bold leading-none">{p.precio}</p>
              <p className={`mt-1 text-sm ${p.destacado ? "text-senal" : "text-grafito"}`}>{p.periodo}</p>
              <ul className="mt-6 grid gap-3">
                {p.incluye.map((x) => (
                  <li key={x} className="flex gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" fill="none" stroke="#fd8d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contacto/?motivo=${p.id}`}
                className={`apretable mt-8 rounded-boton px-5 py-3 text-center font-medium ${
                  p.destacado ? "fondo-lanzamiento text-noche" : "border border-marino hover:bg-hielo"
                }`}
              >
                {p.accion}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-grafito">
          El kit no está incluido en la suscripción. <Link href="/robots/" className="text-marino underline">Mirá los kits</Link>.
        </p>
      </Contenedor>

      <section className="mt-24" aria-labelledby="ademas">
        <Contenedor>
          <h2 id="ademas" className="text-center text-3xl font-bold sm:text-[45px] sm:leading-[1.2]">Robots, capacitación y más</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Robots y kits", p: `Desde ${formatearPrecio(Math.min(...Object.values(PRECIOS_KITS).filter((x): x is number => x !== null)))}`, x: "Pago único por kit.", href: "/robots/", a: "Ver los kits" },
              { t: "Capacitación docente", p: CAPACITACION.precio, x: "Según la modalidad y la cantidad de docentes.", href: "/capacitacion/", a: "Ver la capacitación" },
              { t: "Otras tecnologías", p: "A medida", x: "Impresión 3D, IoT, espacios maker y proyectos.", href: "/tecnologias/", a: "Ver las tecnologías" },
            ].map((c) => (
              <li key={c.t} className="flex flex-col rounded-tarjeta bg-blanco p-6 borde-fino sm:p-8">
                <h3 className="text-2xl font-bold">{c.t}</h3>
                <p className="mt-4 text-[32px] font-bold leading-none">{c.p}</p>
                <p className="mb-6 mt-2 text-grafito">{c.x}</p>
                <Link href={c.href} className="apretable mt-auto rounded-boton border border-marino px-5 py-3 text-center font-medium hover:bg-hielo">
                  {c.a}
                </Link>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section id="como-se-compra" className="mt-24 scroll-mt-28" aria-labelledby="titulo-compra">
        <Contenedor>
          <TituloSeccion id="titulo-compra" antetitulo="Cómo se compra" titulo="Sin vueltas" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMO_SE_COMPRA.map((p, i) => (
              <li key={p.titulo} className="rounded-tarjeta bg-blanco p-6 borde-fino">
                <span className="fondo-lanzamiento flex size-10 items-center justify-center rounded-full font-bold text-noche">{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-1 leading-relaxed text-grafito">{p.texto}</p>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      <PanelInvitacion titulo="¿Querés un presupuesto completo?" texto="Robots, plataforma y capacitación en una sola propuesta para tu escuela o tu distrito." accion="Pedí un presupuesto" />
    </>
  );
}
