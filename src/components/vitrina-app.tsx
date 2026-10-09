"use client";

import { useEffect, useRef, useState } from "react";

const PANTALLAS = [
  {
    id: "mapa",
    titulo: "Un mapa para todo el año",
    texto: "Las clases de cada unidad, en orden. La siguiente se abre al aprobar el reto.",
  },
  {
    id: "inicio",
    titulo: "Cada clase es una misión",
    texto: "Kio cuenta la historia y qué hay que lograr. Arriba, la barra muestra cuánto falta.",
  },
  {
    id: "video",
    titulo: "Un video en tres tramos",
    texto: "El tema, qué necesita el robot y cómo se prueba en el simulador y en la mesa.",
  },
  {
    id: "mision",
    titulo: "El simulador",
    texto: "Programá el robot con bloques o con Python y probalo: anda como el de verdad.",
  },
  {
    id: "reto",
    titulo: "El reto",
    texto: "Cinco preguntas de un banco de doce. Aprobarlo abre la clase siguiente.",
  },
  {
    id: "armado",
    titulo: "Armado en 3D",
    texto: "Pieza por pieza y tornillo por tornillo, antes de tocar el kit.",
  },
];

/** Cada cuánto pasa sola a la pantalla siguiente, hasta que alguien toca. */
const PASO_AUTOMATICO = 4500;

/**
 * La app en un celular, con pestañas para recorrerla. Las pantallas están
 * todas montadas una encima de otra y se cruzan con transparencia y un poco de
 * desenfoque (así no se ven dos imágenes superpuestas a mitad del cambio).
 * Pasa sola mientras se ve en pantalla; el primer toque la deja quieta.
 */
export function VitrinaApp() {
  const [activa, setActiva] = useState(0);
  const [manual, setManual] = useState(false);
  const [enPantalla, setEnPantalla] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const lista = useRef<HTMLUListElement>(null);

  // En el celular las pestañas son una tira que se desliza: la activa siempre
  // a la vista. Se mueve sólo la tira (scrollTo en x), nunca la página.
  useEffect(() => {
    const ul = lista.current;
    const li = ul?.children[activa] as HTMLElement | undefined;
    if (!ul || !li || ul.scrollWidth <= ul.clientWidth) return;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ul.scrollTo({ left: li.offsetLeft - 16, behavior: quieto ? "auto" : "smooth" });
  }, [activa]);

  useEffect(() => {
    const el = raiz.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(([e]) => setEnPantalla(e.isIntersecting), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (manual || !enPantalla) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setActiva((a) => (a + 1) % PANTALLAS.length), PASO_AUTOMATICO);
    return () => window.clearTimeout(t);
  }, [activa, manual, enPantalla]);

  function elegir(i: number) {
    setManual(true);
    setActiva(i);
  }

  const actual = PANTALLAS[activa];

  return (
    <div ref={raiz} className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
      <div className="order-2 lg:order-1">
        <ul ref={lista} className="relative -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 [scrollbar-width:none]" aria-label="Pantallas de la app">
          {PANTALLAS.map((p, i) => {
            const sel = i === activa;
            return (
              <li key={p.id} className="shrink-0 snap-start">
                <button
                  type="button"
                  aria-pressed={sel}
                  onClick={() => elegir(i)}
                  className={`apretable group relative w-full overflow-hidden rounded-tarjeta px-4 py-3 text-left lg:px-5 lg:py-4 ${
                    sel ? "bg-white/10 text-blanco" : "text-senal hover:bg-white/5 hover:text-blanco"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`text-sm tabular-nums transition-colors duration-200 ${sel ? "text-naranja" : "text-senal/60"}`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap text-base font-medium lg:text-lg">{p.titulo}</span>
                  </span>
                  <span className="hidden pl-9 text-[15px] leading-relaxed text-senal lg:block lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-[max-height,opacity] lg:duration-300 lg:ease-[var(--ease-salida)] lg:group-aria-pressed:max-h-24 lg:group-aria-pressed:opacity-100 lg:group-aria-pressed:pt-1">
                    {p.texto}
                  </span>
                  {/* La barrita que avanza mientras pasa sola. */}
                  {sel && !manual && enPantalla && (
                    <span
                      key={activa}
                      aria-hidden="true"
                      className="avance absolute inset-x-0 bottom-0 h-0.5 origin-left bg-naranja/70"
                      style={{ animationDuration: `${PASO_AUTOMATICO}ms` }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 min-h-14 text-lg leading-relaxed text-senal lg:hidden" aria-live="polite">
          {actual.texto}
        </p>
      </div>

      <div className="order-1 mx-auto lg:order-2">
        <div className="relative w-[260px] rounded-[44px] bg-[#0b1a2c] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:w-[290px]">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[34px] bg-[#eef1f6]">
            {PANTALLAS.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.id}
                src={`/app/cel-${p.id}.webp`}
                alt={i === activa ? `La app de KIOS: ${p.titulo.toLowerCase()}` : ""}
                aria-hidden={i !== activa}
                width={780}
                height={1688}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-300 ease-[var(--ease-salida)] ${
                  i === activa ? "scale-100 opacity-100 blur-0" : "scale-[0.98] opacity-0 blur-[3px]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
