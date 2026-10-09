import type { Metadata } from "next";
import { VIDEOS } from "@/datos/provisorio";
import { MarcoVideo } from "@/components/video";
import { CabeceraDePagina, Contenedor, PanelInvitacion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Videos",
  description: "Videos de KIOS: qué es, cómo es una clase, el armado en 3D, el simulador y KIOS para docentes.",
};

export default function Videos() {
  return (
    <>
      <CabeceraDePagina
        titulo="Videoteca"
        bajada="KIOS en movimiento: los robots, la plataforma, la capacitación docente y cómo se usa todo en el aula."
        icono="M5 5h10v14H5zM15 9l5-3v12l-5-3"
      />
      <Contenedor className="mt-16">
        <ul className="grid gap-8 md:grid-cols-2">
          {VIDEOS.map((v) => (
            <li key={v.id}>
              <MarcoVideo titulo={v.titulo} url={v.url} duracion={v.duracion} />
            </li>
          ))}
        </ul>
      </Contenedor>
      <PanelInvitacion titulo="¿Preferís verlo en vivo?" texto="Te mostramos KIOS funcionando en una videollamada o en tu escuela." />
    </>
  );
}
