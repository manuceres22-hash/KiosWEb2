import { BotonLanzar, Contenedor } from "@/components/piezas";
import { Escena } from "@/components/escena";

export default function NoEncontrada() {
  return (
    <Contenedor className="flex flex-col items-center py-24 text-center">
      <Escena className="w-56" />
      <h1 className="mt-6 text-4xl font-bold">Esta página no existe</h1>
      <p className="mt-3 text-lg">Volvé al inicio y buscá desde ahí lo que necesitás.</p>
      <div className="mt-8">
        <BotonLanzar href="/">Volver al inicio</BotonLanzar>
      </div>
    </Contenedor>
  );
}
