import type { Metadata } from "next";
import { CabeceraDePagina, Contenedor, PanelInvitacion } from "@/components/piezas";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Lo que más nos preguntan sobre KIOS: niveles, kits, dispositivos, idiomas y escuelas.",
};

const PREGUNTAS = [
  {
    p: "¿Hace falta saber programar para empezar?",
    r: "No. Se empieza con bloques y, en los niveles más chicos, sin necesidad de leer. Python aparece cuando el alumno está listo, y siempre es el mismo programa que los bloques.",
  },
  {
    p: "¿Qué nivel le corresponde a mi hijo?",
    r: "El nivel no sale de la edad: depende de lo que ya sabe. Escribinos contándonos y te recomendamos por dónde empezar.",
  },
  {
    p: "¿Se puede usar KIOS sin el robot?",
    r: "Sí: todas las misiones se juegan en el simulador, que anda como el robot real. Con el kit, además, lo programado se prueba en la mesa.",
  },
  {
    p: "¿Qué dispositivo necesito?",
    r: "Cualquiera con navegador: celular, tablet o computadora. KIOS está hecho para andar bien en equipos modestos y en la PC compartida del aula. El armado en 3D usa la placa de video si la hay; si no, sigue con la lista de piezas.",
  },
  {
    p: "¿En qué idiomas está?",
    r: "En español, inglés y portugués. Se elige desde la app.",
  },
  {
    p: "¿Cómo entran los chicos?",
    r: "Con un código de acceso personal. No necesitan mail ni contraseña.",
  },
  {
    p: "¿Qué pasa con los datos de los alumnos?",
    r: "Cada escuela ve sólo lo suyo, y el Ministerio ve su provincia y nada más. La edad se pide por lo legal y no se muestra en ningún lado.",
  },
  {
    p: "¿Un mismo kit sirve para más de un nivel?",
    r: "El 12-in-1 RobotStorm sirve para Builder y para Maker Pro: en cada nivel se arma de dos formas distintas.",
  },
];

export default function Preguntas() {
  return (
    <>
      <CabeceraDePagina titulo="Preguntas frecuentes" bajada="Lo que más nos preguntan familias, docentes y directivos." imagen="/mascotas/kio.svg" />
      <Contenedor className="mt-16 max-w-3xl">
        <div className="grid gap-3">
          {PREGUNTAS.map((q) => (
            <details key={q.p} className="group rounded-tarjeta bg-blanco shadow-tarjeta">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {q.p}
                <span className="text-2xl text-naranja transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="px-6 pb-5 text-lg leading-relaxed">{q.r}</p>
            </details>
          ))}
        </div>
      </Contenedor>
      <PanelInvitacion titulo="¿Te quedó alguna duda?" texto="Escribinos y te respondemos en el día." />
    </>
  );
}
