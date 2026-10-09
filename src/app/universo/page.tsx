/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { NIVELES } from "@/datos/niveles";
import { ClasePorDentro, Medallas, UnAnio } from "@/components/infografias";
import { CabeceraDePagina, BotonLanzar, Contenedor, PanelInvitacion, Tarjeta, TituloSeccion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "El universo KIOS",
  description: "Cómo es KIOS por dentro: niveles, mascotas, clases, misiones, retos, medallas, la isla del simulador y la IA.",
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

export default function Universo() {
  return (
    <>
      <CabeceraDePagina
        titulo="El universo KIOS"
        bajada="Cinco niveles, cinco mascotas, una isla de noche y robots que salen de la pantalla. Así funciona todo por dentro."
        imagen="/mascotas/kio.svg"
      >
        <BotonLanzar href="/contacto/">Pedí una demo</BotonLanzar>
      </CabeceraDePagina>

      <section className="mt-20" aria-labelledby="mascotas">
        <Contenedor>
          <TituloSeccion
            id="mascotas"
            antetitulo="Las mascotas"
            titulo="Kio y la banda"
            bajada="Kio acompaña a todos. Cada nivel tiene además su propia mascota."
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <li className="flex flex-col items-center rounded-tarjeta bg-blanco p-5 text-center shadow-tarjeta">
              <img src="/mascotas/kio.svg" alt="" width={150} height={185} className="w-20" />
              <p className="mt-3 text-lg font-bold">Kio</p>
              <p className="text-sm text-grafito">De todos</p>
            </li>
            {NIVELES.map((n) => (
              <li key={n.id} className="flex flex-col items-center rounded-tarjeta bg-blanco p-5 text-center shadow-tarjeta">
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

      <PanelInvitacion />
    </>
  );
}
