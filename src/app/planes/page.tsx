import type { Metadata } from "next";
import Link from "next/link";
import { COMO_SE_COMPRA, PLANES } from "@/datos/provisorio";
import { AvisoProvisorio, CabeceraDePagina, Contenedor, PanelInvitacion, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Planes",
  description: "Planes de suscripción de KIOS para familias, escuelas y ministerios.",
};

export default function Planes() {
  return (
    <>
      <CabeceraDePagina
        titulo="Un plan para cada lugar donde se aprende"
        bajada="En casa, en un curso o en toda una provincia. El kit se compra una vez; la suscripción es la app con todas las clases."
        imagen="/mascotas/ter.svg"
      />

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio />
      </Contenedor>

      <Contenedor className="mt-12">
        <ul className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANES.map((p) => (
            <li
              key={p.id}
              className={`relative flex flex-col rounded-tarjeta p-6 sm:p-8 ${
                p.destacado ? "estrellas bg-noche text-blanco shadow-tarjeta lg:-my-4 lg:py-12" : "bg-blanco shadow-tarjeta"
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
                className={`mt-8 rounded-boton px-5 py-3 text-center font-medium ${
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

      <section id="como-se-compra" className="mt-24 scroll-mt-28" aria-labelledby="titulo-compra">
        <Contenedor>
          <TituloSeccion id="titulo-compra" antetitulo="Cómo se compra" titulo="Sin vueltas" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMO_SE_COMPRA.map((p, i) => (
              <li key={p.titulo} className="rounded-tarjeta bg-blanco p-6 shadow-tarjeta">
                <span className="fondo-lanzamiento flex size-10 items-center justify-center rounded-full font-bold text-noche">{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-1 leading-relaxed text-grafito">{p.texto}</p>
              </li>
            ))}
          </ol>
        </Contenedor>
      </section>

      <PanelInvitacion titulo="¿Dudas con los planes?" texto="Te ayudamos a elegir y te armamos una propuesta para tu escuela o tu distrito." />
    </>
  );
}
