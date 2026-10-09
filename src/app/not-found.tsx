/* eslint-disable @next/next/no-img-element */
import { BotonLanzar, Contenedor } from "@/components/piezas";

export default function NoEncontrada() {
  return (
    <Contenedor className="flex flex-col items-center py-24 text-center">
      <img src="/mascotas/rexplo.svg" alt="" width={150} height={185} className="w-36" />
      <h1 className="mt-6 text-4xl font-bold">Esta página se perdió en la isla</h1>
      <p className="mt-3 text-lg">Volvé al inicio y seguí la pista desde ahí.</p>
      <div className="mt-8">
        <BotonLanzar href="/">Volver al inicio</BotonLanzar>
      </div>
    </Contenedor>
  );
}
