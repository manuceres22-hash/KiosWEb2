import type { Metadata } from "next";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { ARMADOS_ROBOTSTORM, KITS } from "@/datos/niveles";
import { COMO_SE_COMPRA, PRECIOS_KITS, formatearPrecio } from "@/datos/provisorio";
import { AvisoProvisorio, BotonLanzar, CabeceraDePagina, Contenedor, PanelInvitacion, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Robots y kits",
  description: "Los kits de robótica de KIOS: WeeeBot 3-in-1, 12-in-1 RobotStorm y el Rover Lunar.",
};

const ESTADO = {
  disponible: { texto: "Disponible", clase: "bg-[#e3f6ec] text-[#1e7a4c]" },
  pausa: { texto: "Vuelve pronto", clase: "bg-niebla text-marino" },
  produccion: { texto: "En producción", clase: "bg-[#fff1e3] text-naranja-texto" },
} as const;

export default function Robots() {
  return (
    <>
      <CabeceraDePagina
        titulo="Robots de verdad, para armar"
        bajada="Cada nivel tiene su kit. Se arma primero en 3D y después en la mesa, y se programa con la plataforma KIOS."
        foto={{ src: "/robots/tanque-brazo.webp", ancho: 454, alto: 473 }}
      >
        <BotonLanzar href="#como-se-compra">Cómo se compra</BotonLanzar>
      </CabeceraDePagina>

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio>Precios de referencia, a confirmar. Escribinos para el valor del día.</AvisoProvisorio>
      </Contenedor>

      <Contenedor className="mt-8 grid gap-6 md:grid-cols-2">
        {KITS.map((k) => {
          const precio = PRECIOS_KITS[k.id] ?? null;
          const estado = ESTADO[k.estado];
          return (
            <article key={k.id} id={k.id} className="borde-fino flex scroll-mt-28 flex-col overflow-hidden rounded-tarjeta bg-blanco">
              <div className="relative flex h-72 items-center justify-center bg-[radial-gradient(circle_at_50%_60%,#ffffff,#eaf5ff)] p-6">
                {k.foto ? (
                  <img src={k.foto.src} alt={k.foto.alt} width={k.foto.ancho} height={k.foto.alto} loading="lazy" className="max-h-full w-auto object-contain mix-blend-multiply" />
                ) : (
                  <span className="flex flex-col items-center gap-2 text-grafito">
                    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h3l2-2h6l2 2h3v12H4zM12 16a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                    Foto en preparación
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-grafito">Para {k.niveles}</p>
                  <h2 className="text-2xl font-bold">{k.nombre}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${estado.clase}`}>{estado.texto}</span>
              </div>
              <p className="mt-3 text-lg leading-relaxed">{k.descripcion}</p>
              <div className="mb-6 mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-grafito">Trae</h3>
                  <ul className="mt-2 grid gap-1">
                    {k.trae.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="text-naranja" aria-hidden="true">●</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-grafito">Se arma como</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {k.formas.map((f) => (
                      <li key={f} className="rounded-full bg-cielo px-3 py-1 text-sm">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-niebla pt-5">
                <p>
                  <span className="block text-sm text-grafito">Precio</span>
                  <span className="text-[28px] font-bold leading-none">{k.estado === "disponible" ? formatearPrecio(precio) : "—"}</span>
                </p>
                {k.estado === "disponible" ? (
                  <Link href={`/contacto/?motivo=kit&kit=${k.id}`} className="fondo-lanzamiento apretable rounded-boton px-5 py-3 font-medium text-noche">
                    Pedilo
                  </Link>
                ) : (
                  <Link href="/contacto/?motivo=avisame" className="apretable rounded-boton border border-marino px-5 py-3">
                    Avisame cuando esté
                  </Link>
                )}
              </div>
              </div>
            </article>
          );
        })}
      </Contenedor>

      <section className="mt-28" aria-labelledby="armados">
        <Contenedor>
          <div className="aparecer">
            <TituloSeccion
              id="armados"
              antetitulo="12-in-1 RobotStorm"
              titulo="Una caja, doce robots"
              bajada="Las mismas piezas de aluminio se arman de otra forma cada cuatrimestre. Estos son algunos."
            />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {ARMADOS_ROBOTSTORM.map((r, i) => (
              <li key={r.nombre} className="aparecer borde-fino overflow-hidden rounded-tarjeta bg-blanco" style={{ ["--i" as string]: i }}>
                <div className="flex h-72 items-end justify-center bg-[radial-gradient(circle_at_50%_70%,#ffffff,#eaf5ff)] p-6">
                  <img src={r.src} alt={r.nombre} width={r.ancho} height={r.alto} loading="lazy" className="max-h-full w-auto object-contain" />
                </div>
                <div className="p-5">
                  <p className="text-sm text-grafito">{r.nivel}</p>
                  <h3 className="text-xl font-bold">{r.nombre}</h3>
                </div>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section id="como-se-compra" className="mt-24 scroll-mt-28" aria-labelledby="titulo-compra">
        <Contenedor>
          <TituloSeccion id="titulo-compra" antetitulo="Cómo se compra" titulo="Cuatro pasos y a armar" />
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

      <PanelInvitacion titulo="¿Kits para todo un curso?" texto="Para escuelas armamos el pedido por curso, con los códigos de acceso de cada alumno." />
    </>
  );
}
