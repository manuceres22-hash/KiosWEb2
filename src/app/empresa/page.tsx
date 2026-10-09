import type { Metadata } from "next";
import Link from "next/link";
import { EMPRESA } from "@/datos/provisorio";
import { SOLUCIONES } from "@/datos/soluciones";
import { AvisoProvisorio, CabeceraDePagina, Contenedor, PanelInvitacion, Tarjeta, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "La empresa",
  description: "KIOS es una empresa de tecnología educativa: robots, plataforma, capacitación docente y otras tecnologías.",
};

export default function Empresa() {
  return (
    <>
      <CabeceraDePagina titulo="Somos KIOS" bajada={EMPRESA.queHacemos} icono="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio>Texto de referencia, a reemplazar por el de la empresa.</AvisoProvisorio>
      </Contenedor>

      <section className="mt-10" aria-labelledby="mision">
        <Contenedor>
          <div className="estrellas rounded-tarjeta bg-profundo px-6 py-10 text-center text-blanco sm:px-12">
            <p id="mision" className="font-medium uppercase tracking-wider text-senal">Nuestra misión</p>
            <p className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-snug sm:text-[34px]">{EMPRESA.mision}</p>
          </div>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="valores">
        <Contenedor>
          <TituloSeccion id="valores" antetitulo="Cómo pensamos" titulo="Lo que no negociamos" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EMPRESA.valores.map((v) => (
              <li key={v.titulo}>
                <Tarjeta className="h-full">
                  <h3 className="text-xl font-bold">{v.titulo}</h3>
                  <p className="mt-2 leading-relaxed">{v.texto}</p>
                </Tarjeta>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="lineas">
        <Contenedor>
          <TituloSeccion id="lineas" antetitulo="Qué hacemos" titulo="Cuatro líneas, un mismo objetivo" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUCIONES.map((s) => (
              <li key={s.id}>
                <Link href={s.href} className="block h-full rounded-tarjeta bg-blanco p-6 borde-fino levitar">
                  <h3 className="text-xl font-bold">{s.titulo}</h3>
                  <p className="mt-2 leading-relaxed">{s.bajada}</p>
                  <p className="mt-3 font-medium text-naranja-texto">Conocé más →</p>
                </Link>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <PanelInvitacion titulo="¿Trabajamos juntos?" texto="Escuelas, gobiernos, empresas e instituciones: contanos qué necesitan." accion="Escribinos" />
    </>
  );
}
