import type { Metadata } from "next";
import { Suspense } from "react";
import { CONTACTO } from "@/datos/provisorio";
import { FormularioContacto } from "@/components/formulario-contacto";
import { CabeceraDePagina, Contenedor, Tarjeta } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribile a KIOS: demos, kits, planes para familias, escuelas y ministerios.",
};

export default function Contacto() {
  return (
    <>
      <CabeceraDePagina
        titulo="Hablemos"
        bajada="Pedí una demo, consultá por un kit o armemos la propuesta para tu escuela. Te respondemos en el día."
        imagen="/mascotas/kio.svg"
      />
      <Contenedor className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Tarjeta>
          <Suspense>
            <FormularioContacto />
          </Suspense>
        </Tarjeta>
        <div className="grid content-start gap-6">
          <Tarjeta>
            <h2 className="text-xl font-bold">Escribinos</h2>
            <ul className="mt-3 grid gap-3 text-lg">
              <li>
                <span className="block text-sm text-grafito">Familias</span>
                <a href={`mailto:${CONTACTO.email}`} className="underline">{CONTACTO.email}</a>
              </li>
              <li>
                <span className="block text-sm text-grafito">Escuelas y ministerios</span>
                <a href={`mailto:${CONTACTO.emailEscuelas}`} className="underline">{CONTACTO.emailEscuelas}</a>
              </li>
              {CONTACTO.whatsapp && (
                <li>
                  <span className="block text-sm text-grafito">WhatsApp</span>
                  <a href={`https://wa.me/${CONTACTO.whatsapp.replace(/\D/g, "")}`} className="underline">{CONTACTO.whatsapp}</a>
                </li>
              )}
            </ul>
          </Tarjeta>
          <Tarjeta>
            <h2 className="text-xl font-bold">Horario</h2>
            <p className="mt-2 text-lg">{CONTACTO.horario}</p>
            <p className="text-grafito">{CONTACTO.ciudad}</p>
          </Tarjeta>
        </div>
      </Contenedor>
    </>
  );
}
