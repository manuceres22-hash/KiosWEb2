import type { Metadata } from "next";
import { TECNOLOGIAS } from "@/datos/provisorio";
import { AvisoProvisorio, BotonLanzar, CabeceraDePagina, Contenedor, PanelInvitacion } from "@/components/piezas";
import { Icono } from "@/components/icono";

export const metadata: Metadata = {
  title: "Otras tecnologías",
  description: "Impresión 3D, IoT, visión artificial, robótica con ROS, espacios maker y proyectos a medida para escuelas e instituciones.",
};

export default function Tecnologias() {
  return (
    <>
      <CabeceraDePagina
        titulo="Más allá del robot"
        bajada="Además de los kits y la plataforma, trabajamos con otras tecnologías para que la escuela tenga un aula de tecnología completa."
        icono="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.6 7.1 17.2 8 11.7 4 7.8 9.5 7z"
      >
        <BotonLanzar href="/contacto/?motivo=tecnologias">Consultanos</BotonLanzar>
      </CabeceraDePagina>

      <Contenedor className="mt-10 flex justify-center">
        <AvisoProvisorio>Oferta en armado: escribinos para ver qué está disponible hoy.</AvisoProvisorio>
      </Contenedor>

      <Contenedor className="mt-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECNOLOGIAS.map((t) => (
            <li key={t.id} id={t.id} className="scroll-mt-28 rounded-tarjeta bg-blanco p-6 borde-fino sm:p-8">
              <Icono d={t.icono} />
              <h2 className="mt-4 text-2xl font-bold">{t.titulo}</h2>
              <p className="mt-2 text-lg leading-relaxed">{t.texto}</p>
            </li>
          ))}
        </ul>
      </Contenedor>

      <PanelInvitacion
        titulo="¿Tenés un proyecto en mente?"
        texto="Contanos qué querés lograr y vemos juntos qué tecnología le sirve a tu escuela o institución."
        accion="Contanos tu idea"
      />
    </>
  );
}
