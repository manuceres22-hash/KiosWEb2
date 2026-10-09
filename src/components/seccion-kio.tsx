/* eslint-disable @next/next/no-img-element */
import { URL_APP } from "@/datos/provisorio";
import { BotonContorno, BotonLanzar, Contenedor } from "./piezas";
import { VitrinaApp } from "./vitrina-app";

/**
 * «Conocé a Kio y la app»: el único lugar fuera de la plataforma donde aparece
 * la mascota, porque es la invitación a entrar a la plataforma.
 */
export function SeccionKio({ conBotones = true }: { conBotones?: boolean }) {
  return (
    <section className="mt-28" aria-labelledby="kio">
      <Contenedor>
        <div className="estrellas relative overflow-hidden rounded-panel bg-noche px-5 py-12 text-blanco sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,133,255,0.22),transparent_65%)]"
          />
          <div className="relative grid items-end gap-6 md:grid-cols-[auto_1fr]">
            <img src="/mascotas/kio.svg" alt="Kio, la mascota de la app" width={150} height={185} className="flotar w-24 sm:w-28" />
            <div className="aparecer">
              <p className="font-medium text-naranja">Conocé a Kio y la app</p>
              <h2 id="kio" className="mt-2 text-[34px] font-bold leading-[1.1] sm:text-[45px]">
                Kio acompaña cada clase, del mapa al robot andando
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-senal">
                La plataforma KIOS es donde se aprende a programar los robots: clases con video, un simulador que anda
                como el real, bloques y Python, retos y el armado en 3D. Funciona en el celular, la tablet y la PC del
                aula.
              </p>
            </div>
          </div>
          <div className="relative mt-12">
            <VitrinaApp />
          </div>
          {conBotones && (
            <div className="relative mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <BotonLanzar href="/plataforma/">Conocé la plataforma</BotonLanzar>
              <BotonContorno href={URL_APP} oscuro>
                Entrar
              </BotonContorno>
            </div>
          )}
        </div>
      </Contenedor>
    </section>
  );
}
