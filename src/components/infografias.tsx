import { ANIO } from "@/datos/niveles";

const PASOS = [
  {
    nombre: "Inicio",
    texto: "La historia de la clase y la misión que hay que cumplir.",
    icono: "M12 3l9 7-9 7-9-7z",
  },
  {
    nombre: "Video",
    texto: "En tres tramos: el tema, qué necesita el robot y cómo se prueba.",
    icono: "M5 5h10v10H5zM15 8l5-3v10l-5-3z",
  },
  {
    nombre: "Misión",
    texto: "Programá el robot en el simulador, con bloques o con Python. Hasta tres estrellas.",
    icono: "M4 14l6-6 4 4 6-6M14 6h6v6",
  },
  {
    nombre: "Reto",
    texto: "Cinco preguntas de un banco de doce. Aprobarlo abre la clase siguiente.",
    icono: "M5 12l4 4 10-10",
  },
  {
    nombre: "Logro",
    texto: "XP, la medalla de la clase y, a veces, una insignia nueva.",
    icono: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7z",
  },
];

/** Infografía: los cinco pasos de una clase, como los vive el alumno en la app. */
export function ClasePorDentro() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5 md:gap-3">
      <span aria-hidden="true" className="absolute left-0 right-0 top-9 hidden h-1 rounded-full fondo-cometa opacity-60 md:block" />
      {PASOS.map((p, i) => (
        <li key={p.nombre} className="relative flex gap-4 rounded-tarjeta bg-blanco p-5 borde-fino md:flex-col md:gap-3">
          <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-noche text-blanco">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d={p.icono} fill="none" stroke="#ffa84a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-medium text-naranja-texto">Paso {i + 1}</p>
            <h3 className="text-xl font-bold">{p.nombre}</h3>
            <p className="mt-1 leading-relaxed text-grafito">{p.texto}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Infografía: un año de KIOS. Cada cuadradito es un lugar del mapa: 2
 * cuatrimestres × (6 unidades de 5 clases + 2 comodines) = 64. La clase 5 de
 * cada unidad es la misión de cierre.
 */
export function UnAnio() {
  const cuatrimestres = Array.from({ length: ANIO.cuatrimestres }, (_, c) => c);
  const unidades = Array.from({ length: ANIO.unidadesPorCuatrimestre }, (_, u) => u);
  const clases = Array.from({ length: ANIO.clasesPorUnidad }, (_, k) => k);
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cuatrimestres.map((c) => (
        <section key={c} aria-label={`Cuatrimestre ${c + 1}`} className="rounded-tarjeta bg-blanco p-5 borde-fino sm:p-6">
          <h3 className="text-xl font-bold">Cuatrimestre {c + 1}</h3>
          <p className="text-grafito">{c === 0 ? "Arranca con el armado del primer robot." : "Arranca con el armado de otro robot."}</p>
          <div className="mt-4 grid gap-2">
            {unidades.map((u) => (
              <div key={u} className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-sm text-grafito">Unidad {u + 1}</span>
                <div className="flex gap-1.5">
                  {clases.map((k) => {
                    const armado = u === 0 && k === 0;
                    const cierre = k === ANIO.clasesPorUnidad - 1;
                    return (
                      <span
                        key={k}
                        title={armado ? "Armado" : cierre ? "Misión de cierre" : "Clase"}
                        className={`size-6 rounded-md sm:size-7 ${
                          armado ? "bg-profundo" : cierre ? "fondo-lanzamiento" : "bg-niebla"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-sm text-grafito">Comodines</span>
              <div className="flex gap-1.5">
                {Array.from({ length: ANIO.comodinesPorCuatrimestre }, (_, k) => (
                  <span key={k} title="Comodín" className="size-6 rounded-full bg-naranja/30 ring-2 ring-naranja sm:size-7" />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-grafito lg:col-span-2" aria-label="Referencias">
        <li className="flex items-center gap-2"><span className="size-4 rounded bg-profundo" /> Armado del robot</li>
        <li className="flex items-center gap-2"><span className="size-4 rounded bg-niebla" /> Clase</li>
        <li className="flex items-center gap-2"><span className="size-4 rounded fondo-lanzamiento" /> Misión de cierre</li>
        <li className="flex items-center gap-2"><span className="size-4 rounded-full bg-naranja/30 ring-2 ring-naranja" /> Comodín: repaso que paga el doble</li>
      </ul>
    </div>
  );
}

/** Infografía: las medallas, de la clase al cuatrimestre. */
export function Medallas() {
  const medallas = [
    { nombre: "Bronce", por: "por cada clase", color: "#c9834b" },
    { nombre: "Plata", por: "por cada unidad cerrada", color: "#a9b6c4" },
    { nombre: "Oro", por: "por cada cuatrimestre cerrado", color: "#f2bf3a" },
  ];
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {medallas.map((m) => (
        <li key={m.nombre} className="flex items-center gap-4 rounded-tarjeta bg-blanco p-5 borde-fino">
          <svg width="48" height="56" viewBox="0 0 48 56" aria-hidden="true">
            <path d="M14 0h8l4 18h-8zM34 0h-8l-4 18h8z" fill="#183d6d" />
            <circle cx="24" cy="36" r="18" fill={m.color} />
            <circle cx="24" cy="36" r="12" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
          </svg>
          <div>
            <p className="text-xl font-bold">{m.nombre}</p>
            <p className="text-grafito">{m.por}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
