/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { NIVELES } from "@/datos/niveles";
import { ClasePorDentro, Medallas, UnAnio } from "@/components/infografias";
import { SeccionKio } from "@/components/seccion-kio";
import { BloquesPython } from "@/components/bloques-python";
import { URL_APP } from "@/datos/provisorio";
import { CabeceraDePagina, BotonContorno, BotonLanzar, Contenedor, PanelInvitacion, Tarjeta, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Plataforma KIOS",
  description: "La plataforma KIOS para aprender a programar robots: niveles, mascotas, clases, misiones, retos, medallas, el simulador y la IA.",
};

const PIEZAS = [
  {
    titulo: "La isla de noche",
    texto:
      "El simulador es un juego: una isla flotante, de noche, con baldosas de 10 cm. El robot mide lo mismo que el de verdad, así que lo que se aprende acá sirve en la mesa.",
  },
  {
    titulo: "El armado en 3D",
    texto:
      "Antes de tocar las piezas, el robot se arma en la pantalla: cada pieza en su lugar, cada tornillo con su herramienta. Si no hay 3D, sigue con la lista.",
  },
  {
    titulo: "Bloques y Python",
    texto:
      "«Avanzar», «girar», «esperar hasta que»: cada bloque es una línea de Python. El que se anima a escribir código desde el primer día, puede.",
  },
  {
    titulo: "El reto",
    texto:
      "Al final de cada clase, cinco preguntas sorteadas de un banco de doce. Se intenta hasta tres veces por día; aprobarlo abre la clase siguiente.",
  },
  {
    titulo: "Racha y congeladores",
    texto: "Jugar todos los días suma racha. Un congelador la salva el día que no se pudo.",
  },
  {
    titulo: "Duelos",
    texto: "Dos compañeros se desafían con preguntas de las clases que los dos aprobaron.",
  },
  {
    titulo: "La IA, explicada",
    texto:
      "Clases para entender cómo decide una máquina, cómo «ve» con sus sensores, cómo aprende de ejemplos y a quién puede afectar lo que hace.",
  },
  {
    titulo: "El proyecto final",
    texto:
      "El cuatrimestre cierra con una misión propia: rescate, patrulla, carrera o la que se te ocurra. Se planifica, se construye, se prueba y se presenta.",
  },
  {
    titulo: "El certificado",
    texto: "Al aprobar el reto de las 60 clases del nivel, KIOS emite el certificado del año.",
  },
];

export default function Plataforma() {
  return (
    <>
      <CabeceraDePagina
        titulo="Plataforma KIOS"
        bajada="La app para aprender a programar los robots de KIOS: clases con video, simulador, bloques y Python, retos, medallas y un panel para cada docente. Cinco niveles y cinco mascotas que acompañan a los chicos."
        imagen="/mascotas/kio.svg"
      >
        <BotonLanzar href="/contacto/">Pedí una demo</BotonLanzar>
        <BotonContorno href="/niveles/" oscuro>
          Ver los niveles
        </BotonContorno>
        <BotonContorno href={URL_APP} oscuro>
          Entrar
        </BotonContorno>
      </CabeceraDePagina>

      <SeccionKio conBotones={false} />

      <section className="mt-28" aria-labelledby="mascotas">
        <Contenedor>
          <TituloSeccion
            id="mascotas"
            antetitulo="Las mascotas"
            titulo="Kio y la banda"
            bajada="Adentro de la plataforma, Kio acompaña a todos y cada nivel tiene su propia mascota."
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <li className="flex flex-col items-center rounded-tarjeta bg-blanco p-5 text-center borde-fino">
              <img src="/mascotas/kio.svg" alt="" width={150} height={185} className="w-20" />
              <p className="mt-3 text-lg font-bold">Kio</p>
              <p className="text-sm text-grafito">De todos</p>
            </li>
            {NIVELES.map((n) => (
              <li key={n.id} className="flex flex-col items-center rounded-tarjeta bg-blanco p-5 text-center borde-fino">
                <img src={n.imagen} alt="" width={150} height={185} className="w-20" />
                <p className="mt-3 text-lg font-bold">{n.mascota}</p>
                <p className="text-sm text-grafito">{n.nombre}</p>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="anio">
        <Contenedor>
          <TituloSeccion
            id="anio"
            antetitulo="Infografía"
            titulo="Un año en el mapa"
            bajada="Dos cuatrimestres de seis unidades. Cada unidad tiene cinco clases y cierra con una misión; cada cuatrimestre suma dos comodines. En total, 64 lugares."
          />
          <div className="mt-10">
            <UnAnio />
          </div>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="clase">
        <Contenedor>
          <TituloSeccion id="clase" antetitulo="Infografía" titulo="Una clase por dentro" />
          <div className="mt-10">
            <ClasePorDentro />
          </div>
        </Contenedor>
      </section>

      <section className="mt-28" aria-labelledby="programa">
        <Contenedor>
          <div className="aparecer">
            <TituloSeccion
              id="programa"
              antetitulo="Bloques y Python"
              titulo="El mismo programa, de dos formas"
              bajada="Cada bloque es una línea de Python de verdad. Se pasa de uno a otro sin perder nada: el que se anima a escribir código desde el primer día, puede."
            />
          </div>
          <div className="aparecer mt-10">
            <BloquesPython />
          </div>
        </Contenedor>
      </section>

      <section className="mt-28" aria-labelledby="armado">
        <Contenedor className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="aparecer">
            <p className="font-medium text-naranja-texto">Armado en 3D</p>
            <h2 id="armado" className="mt-2 text-[32px] font-bold leading-[1.1] sm:text-[45px]">Primero en la pantalla, después en la mesa</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Cada pieza va a su lugar y cada tornillo, con su herramienta, en el mismo orden que el manual del kit.
              Cuando el robot queda armado, pasa directo al simulador.
            </p>
          </div>
          <div className="aparecer borde-fino overflow-hidden rounded-panel bg-blanco" style={{ ["--i" as string]: 1 }}>
            <img src="/app/pc-armado.webp" alt="El armado en 3D del tanque, paso 1: la base" width={1440} height={900} loading="lazy" className="w-full" />
          </div>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="medallas">
        <Contenedor>
          <TituloSeccion
            id="medallas"
            antetitulo="Infografía"
            titulo="Medallas que nadie te saca"
            bajada="Se ganan por lo hecho, así que tampoco se pierden."
          />
          <div className="mt-10">
            <Medallas />
          </div>
        </Contenedor>
      </section>

      <section className="mt-24" aria-labelledby="piezas">
        <Contenedor>
          <TituloSeccion id="piezas" antetitulo="Las piezas" titulo="Todo lo que hay adentro" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PIEZAS.map((p) => (
              <li key={p.titulo}>
                <Tarjeta className="h-full">
                  <h3 className="text-xl font-bold">{p.titulo}</h3>
                  <p className="mt-2 leading-relaxed">{p.texto}</p>
                </Tarjeta>
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <PanelInvitacion titulo="¿La probamos en tu escuela?" texto="Te mostramos la plataforma con una escuela de prueba: el armado, el simulador, una clase entera y el panel docente." />
    </>
  );
}
