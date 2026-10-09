/**
 * Los niveles, los kits y los robots, copiados del contenido de la app
 * (`src/content/levels.ts` y los manuales de los kits en el repo `kios`).
 * Esto no es de relleno: si la app cambia un nivel, hay que cambiarlo acá.
 *
 * El nivel no sale de la edad (lo elige la familia o la escuela), así que la
 * web no promete edades: dice cómo se aprende en cada uno.
 */

export type Nivel = {
  id: string;
  nombre: string;
  mascota: string;
  imagen: string;
  claim: string;
  comoSeAprende: string;
  resumen: string;
  kitId: string;
  kit: string;
  kitNota: string;
  robots: string[];
  estado?: string;
  color: string;
};

export const NIVELES: Nivel[] = [
  {
    id: "spark",
    nombre: "Spark",
    mascota: "Robi",
    imagen: "/mascotas/robi.svg",
    claim: "Tocá, mirá y saludá",
    comoSeAprende: "Con voz e imágenes, sin necesidad de leer.",
    resumen: "Robótica tangible sin pantallas: secuencias de íconos y descubrimiento de sensores.",
    kitId: "weeebot-mini",
    kit: "WeeeBot Mini",
    kitNota: "Viene armado de fábrica: la primera clase es conocer al robot.",
    robots: ["WeeeBot Mini"],
    estado: "En pausa: vuelve pronto",
    color: "#5ecc8f",
  },
  {
    id: "explorer",
    nombre: "Explorer",
    mascota: "Rexplo",
    imagen: "/mascotas/rexplo.svg",
    claim: "Seguí la pista",
    comoSeAprende: "Primeras lecturas y bloques simples.",
    resumen: "Programación visual y máquinas simples: el jeep sigue la pista hasta la meta.",
    kitId: "weeebot-3en1",
    kit: "WeeeBot 3-in-1",
    kitNota: "Un solo kit que se arma de tres formas.",
    robots: ["El jeep"],
    color: "#f7cf47",
  },
  {
    id: "builder",
    nombre: "Builder",
    mascota: "Bill",
    imagen: "/mascotas/bill.svg",
    claim: "Detectá y esquivá",
    comoSeAprende: "Bloques y primeros pasos en código.",
    resumen: "Chasis modulares y paso a MicroPython: condicionales y editor de bloques y código a la vez.",
    kitId: "robotstorm",
    kit: "12-in-1 RobotStorm",
    kitNota: "Un kit 12 en 1: en Builder se arma de dos formas. Sensor ultrasónico RGB y placa ELF.",
    robots: ["El tanque", "El lanzador de pelotas"],
    color: "#fd8d32",
  },
  {
    id: "maker",
    nombre: "Maker Pro",
    mascota: "Mako",
    imagen: "/mascotas/mako.svg",
    claim: "Programá en Python",
    comoSeAprende: "Código y proyectos más complejos.",
    resumen: "Componentes de mercado, loops anidados y Python real sobre la placa ESP32.",
    kitId: "robotstorm",
    kit: "12-in-1 RobotStorm",
    kitNota: "El mismo kit 12 en 1 que Builder, armado de otras dos formas.",
    robots: ["El brazo robótico", "El tanque con brazo"],
    color: "#0185ff",
  },
  {
    id: "tech",
    nombre: "Tech/Core",
    mascota: "Ter",
    imagen: "/mascotas/ter.svg",
    claim: "Conectá el sistema",
    comoSeAprende: "Programación como se usa en la vida real.",
    resumen: "IoT industrial, visión artificial y sistemas robóticos con ROS.",
    kitId: "rover-lunar",
    kit: "Proyectos de diseño propio",
    kitNota: "El primero es el Rover Lunar, que todavía está en producción.",
    robots: ["Rover Lunar"],
    estado: "Rover Lunar en producción",
    color: "#c78bff",
  },
];

export type KitInfo = {
  id: string;
  nombre: string;
  niveles: string;
  descripcion: string;
  trae: string[];
  formas: string[];
  estado: "disponible" | "pausa" | "produccion";
};

export const KITS: KitInfo[] = [
  {
    id: "weeebot-mini",
    nombre: "WeeeBot Mini",
    niveles: "Spark",
    descripcion: "Un robot que viene armado, para los que todavía no leen: se programa tocando.",
    trae: ["Robot armado de fábrica", "Sensores para descubrir"],
    formas: ["Robot listo para jugar"],
    estado: "pausa",
  },
  {
    id: "weeebot-3en1",
    nombre: "WeeeBot 3-in-1",
    niveles: "Explorer",
    descripcion: "Un kit que se arma de tres formas. En Explorer arranca como un jeep que sigue la pista.",
    trae: ["Piezas para tres robots", "Motores y sensores", "Manual de armado"],
    formas: ["El jeep", "Dos formas más durante el año"],
    estado: "disponible",
  },
  {
    id: "robotstorm",
    nombre: "12-in-1 RobotStorm",
    niveles: "Builder y Maker Pro",
    descripcion:
      "Doce robots en una caja. Sirve para dos niveles: en Builder se arma de dos formas y en Maker Pro de otras dos.",
    trae: [
      "Placa ELF",
      "Sensor ultrasónico RGB",
      "Motores con encoder",
      "Servo MG995",
      "Orugas y perfiles de aluminio",
    ],
    formas: ["El tanque", "El lanzador de pelotas", "El brazo robótico", "El tanque con brazo"],
    estado: "disponible",
  },
  {
    id: "rover-lunar",
    nombre: "Rover Lunar",
    niveles: "Tech/Core",
    descripcion: "El primer proyecto de diseño propio de KIOS, para programar como se hace en la industria.",
    trae: ["Diseño propio de KIOS"],
    formas: ["Rover Lunar"],
    estado: "produccion",
  },
];

/** Cómo es un año: lo que dice la estructura del contenido de la app. */
export const ANIO = {
  cuatrimestres: 2,
  unidadesPorCuatrimestre: 6,
  clasesPorUnidad: 5,
  comodinesPorCuatrimestre: 2,
  lugares: 64,
};
