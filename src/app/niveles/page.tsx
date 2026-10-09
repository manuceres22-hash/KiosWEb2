/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { NIVELES } from "@/datos/niveles";
import { CabeceraDePagina, Contenedor, PanelInvitacion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Niveles",
  description: "Spark, Explorer, Builder, Maker Pro y Tech/Core: cinco niveles, cada uno un año escolar con su kit y su mascota.",
};

export default function Niveles() {
  return (
    <>
      <CabeceraDePagina
        titulo="Cinco niveles, un camino"
        bajada="Del primer robot que se toca sin leer al código como se usa en la industria. Cada nivel es un año escolar."
        imagen="/mascotas/bill.svg"
      />
      <Contenedor className="mt-16 grid gap-6">
        {NIVELES.map((n, i) => (
          <article
            key={n.id}
            id={n.id}
            className="grid scroll-mt-28 gap-6 rounded-tarjeta bg-blanco p-6 shadow-tarjeta sm:p-8 md:grid-cols-[auto_1fr_1fr] md:items-center"
          >
            <div className="flex items-center gap-4 md:flex-col">
              <span className="flex size-32 shrink-0 items-end justify-center rounded-full" style={{ background: `${n.color}33` }}>
                <img src={n.imagen} alt={n.mascota} width={150} height={185} className="w-28" />
              </span>
              <p className="text-sm text-grafito md:text-center">
                Nivel {i + 1}
                <br />
                con {n.mascota}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">{n.nombre}</h2>
              <p className="text-lg text-naranja-texto">{n.claim}</p>
              <p className="mt-3 text-lg leading-relaxed">{n.resumen}</p>
              <p className="mt-3 text-grafito">
                <strong className="font-medium text-marino">Cómo se aprende:</strong> {n.comoSeAprende}
              </p>
              {n.estado && <p className="mt-4 inline-block rounded-full bg-cielo px-3 py-1 text-sm">{n.estado}</p>}
            </div>
            <div className="rounded-tarjeta bg-hielo p-5">
              <p className="text-sm font-medium uppercase tracking-wider text-grafito">El kit</p>
              <p className="mt-1 text-xl font-bold">{n.kit}</p>
              <p className="mt-2 leading-relaxed text-grafito">{n.kitNota}</p>
              <p className="mt-4 text-sm font-medium uppercase tracking-wider text-grafito">Robots del año</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {n.robots.map((r) => (
                  <li key={r} className="rounded-full bg-blanco px-3 py-1 text-sm shadow-chica">
                    {r}
                  </li>
                ))}
              </ul>
              <Link href={`/robots/#${n.kitId}`} className="mt-4 inline-block font-medium text-naranja-texto hover:underline">
                Ver el kit →
              </Link>
            </div>
          </article>
        ))}
      </Contenedor>
      <PanelInvitacion
        titulo="¿No sabés qué nivel elegir?"
        texto="Contanos quién va a aprender y qué sabe hoy. Te recomendamos por dónde empezar."
      />
    </>
  );
}
