"use client";

import { useState } from "react";

const VISTAS = [
  { id: "bloques", texto: "Bloques", src: "/app/pc-bloques.webp", alt: "El programa en bloques: al empezar, avanzar a 50 % durante 1 segundo, frenar" },
  { id: "python", texto: "Python", src: "/app/pc-python.webp", alt: "El mismo programa en Python: tanque.avanzar(50, 1) y tanque.frenar()" },
] as const;

/**
 * El mismo programa en bloques y en Python, con el mismo selector que tiene la
 * app. El cambio es un fundido con un poco de desenfoque: es una sola pantalla
 * que cambia de forma, no dos imágenes que se pisan.
 */
export function BloquesPython() {
  const [vista, setVista] = useState<(typeof VISTAS)[number]["id"]>("bloques");
  return (
    <div>
      <div className="mx-auto flex w-fit rounded-full bg-blanco p-1 shadow-[0_0_0_1px_rgba(24,61,109,0.08)]" role="group" aria-label="Ver el programa como">
        {VISTAS.map((v) => (
          <button
            key={v.id}
            type="button"
            aria-pressed={vista === v.id}
            onClick={() => setVista(v.id)}
            className={`apretable rounded-full px-6 py-2.5 font-medium ${
              vista === v.id ? "bg-noche text-blanco" : "text-marino hover:bg-hielo"
            }`}
          >
            {v.texto}
          </button>
        ))}
      </div>
      <div className="borde-fino mt-6 overflow-hidden rounded-panel bg-blanco">
        <div className="flex items-center gap-1.5 border-b border-niebla px-4 py-3" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff6b5e]" />
          <span className="size-2.5 rounded-full bg-[#ffbd4c]" />
          <span className="size-2.5 rounded-full bg-[#3ccf6a]" />
          <span className="ml-3 rounded-md bg-hielo px-3 py-0.5 text-xs text-grafito">app.kios.com.ar</span>
        </div>
        <div className="relative aspect-[1440/900]">
          {VISTAS.map((v) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={v.id}
              src={v.src}
              alt={vista === v.id ? v.alt : ""}
              aria-hidden={vista !== v.id}
              width={1440}
              height={900}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,filter] duration-200 ease-out ${
                vista === v.id ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
