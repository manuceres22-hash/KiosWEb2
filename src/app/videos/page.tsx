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
        bajada="KIOS en movimiento: el armado, el simulador, una clase entera y cómo se usa en el aula."
        imagen="/mascotas/robi.svg"
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
