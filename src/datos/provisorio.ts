/**
 * Todo lo que todavía no está decidido vive acá, y sólo acá.
 *
 * Precios, forma de compra, datos de contacto, videos y la dirección de la app
 * son de relleno: sirven para ver cómo queda la web, no son compromisos. Cuando
 * se decida cada cosa, se cambia en este archivo y el resto del sitio la toma.
 * Mientras `PROVISORIO` sea `true`, las páginas muestran el aviso de «valores de
 * referencia» al lado de cada precio.
 */

export const PROVISORIO = true;

/** Adónde lleva «Entrar a KIOS». */
export const URL_APP = "https://app.kios.com.ar";

export const CONTACTO = {
  email: "hola@kios.com.ar",
  emailEscuelas: "escuelas@kios.com.ar",
  /** Sin número todavía: el botón de WhatsApp no se muestra mientras esté vacío. */
  whatsapp: "",
  ciudad: "Argentina",
  horario: "Lunes a viernes, de 9 a 18",
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/" },
    { nombre: "YouTube", url: "https://youtube.com/" },
  ],
};

/** Cómo se compra, en pasos. Hoy: se pide por el formulario y se coordina. */
export const COMO_SE_COMPRA = [
  {
    titulo: "Elegí el kit o el plan",
    texto: "Mirá qué nivel le toca a tu hijo, a tu curso o a tu escuela.",
  },
  {
    titulo: "Escribinos",
    texto: "Con el formulario de contacto te armamos el pedido y te pasamos el total.",
  },
  {
    titulo: "Pagá como te quede cómodo",
    texto: "Transferencia o link de pago. Para escuelas, también orden de compra.",
  },
  {
    titulo: "Recibí y empezá",
    texto: "Te llega el kit y los códigos de acceso. La primera clase es armarlo.",
  },
];

export type Kit = {
  id: string;
  nombre: string;
  nivel: string;
  precio: number | null;
  estado: "disponible" | "pausa" | "produccion";
};

/** Precios de referencia en pesos. `null` es «a consultar». */
export const PRECIOS_KITS: Record<string, number | null> = {
  "weeebot-mini": null,
  "weeebot-3en1": 189000,
  robotstorm: 349000,
  "rover-lunar": null,
};

export type Plan = {
  id: string;
  nombre: string;
  para: string;
  precio: string;
  periodo: string;
  incluye: string[];
  destacado?: boolean;
  accion: string;
};

export const PLANES: Plan[] = [
  {
    id: "familia",
    nombre: "Familia",
    para: "Para aprender en casa",
    precio: "$12.900",
    periodo: "por mes, por alumno",
    incluye: [
      "Todas las clases del nivel, con video, misión y reto",
      "Simulador 2D y armado en 3D en el navegador",
      "Bloques y Python en el mismo programa",
      "Racha, insignias y medallas",
      "Español, inglés y portugués",
    ],
    accion: "Quiero el plan Familia",
  },
  {
    id: "escuela",
    nombre: "Escuela",
    para: "Para un curso o la escuela entera",
    precio: "$7.500",
    periodo: "por mes, por alumno",
    incluye: [
      "Todo lo del plan Familia",
      "Panel docente: cursos, tareas y devoluciones",
      "Liga de la escuela",
      "Códigos de acceso para cada alumno",
      "El nivel lo elige la escuela, por curso",
      "Capacitación para docentes",
    ],
    destacado: true,
    accion: "Quiero KIOS en mi escuela",
  },
  {
    id: "ministerio",
    nombre: "Ministerio",
    para: "Para una provincia o un distrito",
    precio: "A medida",
    periodo: "según la cantidad de escuelas",
    incluye: [
      "Todo lo del plan Escuela",
      "Panel provincial con el avance de cada escuela",
      "Los datos de la provincia no salen de la provincia",
      "Acompañamiento en la puesta en marcha",
    ],
    accion: "Hablemos",
  },
];

/**
 * Los videos todavía no existen. Con `url` vacía, la web muestra el marco con
 * «Video en preparación»; con una URL de YouTube (`/embed/…`) lo reproduce.
 */
export const VIDEOS = [
  { id: "que-es", titulo: "¿Qué es KIOS?", duracion: "1:30", url: "" },
  { id: "capacitacion", titulo: "Así es una capacitación docente", duracion: "3:00", url: "" },
  { id: "una-clase", titulo: "Una clase por dentro", duracion: "3:00", url: "" },
  { id: "armado", titulo: "Armá el tanque en 3D", duracion: "2:00", url: "" },
  { id: "simulador", titulo: "Bloques y Python, el mismo programa", duracion: "2:30", url: "" },
  { id: "docentes", titulo: "KIOS para docentes", duracion: "4:00", url: "" },
  { id: "robot-real", titulo: "Del simulador al robot de verdad", duracion: "2:00", url: "" },
];

export function formatearPrecio(precio: number | null): string {
  if (precio === null) return "A consultar";
  return "$" + precio.toLocaleString("es-AR");
}

/**
 * Quiénes somos. Texto de relleno hasta que la empresa escriba el suyo: no
 * tiene fechas, cifras ni nombres a propósito.
 */
export const EMPRESA = {
  mision:
    "Que cada chico y cada chica pueda aprender tecnología haciendo: armando, programando y probando con sus manos, en la escuela o en su casa.",
  queHacemos:
    "Somos una empresa de tecnología educativa. Seleccionamos y diseñamos robots, desarrollamos la plataforma KIOS, capacitamos docentes y acompañamos a escuelas y gobiernos en proyectos de tecnología.",
  valores: [
    { titulo: "Aprender haciendo", texto: "Primero se toca, se arma y se prueba. La teoría llega cuando hace falta." },
    { titulo: "Para cualquier aula", texto: "Lo que hacemos anda en equipos modestos y en la PC compartida del aula." },
    { titulo: "La escuela en el centro", texto: "Trabajamos con docentes y directivos, no alrededor de ellos." },
    { titulo: "Datos cuidados", texto: "Cada escuela ve lo suyo y cada provincia, lo suyo. No se negocia." },
  ],
};

/** La capacitación docente: modalidades y temario de referencia. */
export const CAPACITACION = {
  modalidades: [
    {
      nombre: "Presencial",
      texto: "En la escuela, con los kits sobre la mesa. Ideal para arrancar el año con todo el equipo.",
      duracion: "Jornadas de 4 horas",
    },
    {
      nombre: "Virtual en vivo",
      texto: "Encuentros por videollamada, con práctica en el simulador entre encuentro y encuentro.",
      duracion: "Encuentros semanales de 2 horas",
    },
    {
      nombre: "Acompañamiento en el aula",
      texto: "Un capacitador acompaña las primeras clases con los chicos y ajusta sobre la marcha.",
      duracion: "A medida de cada escuela",
    },
  ],
  temario: [
    { titulo: "Robótica sin miedo", texto: "Armar, encender y probar cada robot del kit. Qué hacer cuando algo no anda." },
    { titulo: "Programación en bloques", texto: "Secuencias, repeticiones, condiciones y sensores, con las misiones de KIOS." },
    { titulo: "De bloques a Python", texto: "Cómo acompañar el paso al código, con el mismo programa en las dos formas." },
    { titulo: "Inteligencia artificial en el aula", texto: "Cómo decide, cómo «ve» y cómo aprende una máquina, y a quién afecta." },
    { titulo: "Gestión del curso", texto: "Panel docente: cursos, tareas, devoluciones, liga y seguimiento." },
    { titulo: "Proyectos y evaluación", texto: "Armar un proyecto final y evaluarlo con criterios claros." },
  ],
  precio: "A consultar",
};

/**
 * Otras tecnologías y servicios. Salen de lo que ya usa KIOS (impresión 3D,
 * IoT, visión artificial, ROS en Tech/Core), pero la oferta concreta está por
 * definirse: por eso están acá.
 */
export const TECNOLOGIAS = [
  {
    id: "impresion-3d",
    titulo: "Impresión 3D",
    texto: "Piezas, repuestos y accesorios para los robots, y proyectos de diseño e impresión para la escuela.",
    icono: "M4 18h16M7 18V9l5-4 5 4v9M10 18v-5h4v5",
  },
  {
    id: "iot",
    titulo: "IoT: cosas conectadas",
    texto: "Sensores conectados a internet para medir, registrar y mostrar datos del mundo real: clima, energía, huerta.",
    icono: "M12 20a2 2 0 100-4 2 2 0 000 4zM8 14a6 6 0 018 0M5 11a10 10 0 0114 0",
  },
  {
    id: "vision",
    titulo: "Visión artificial",
    texto: "Cámaras que reconocen colores, formas y objetos, para que los robots «vean» y decidan.",
    icono: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z",
  },
  {
    id: "ros",
    titulo: "Robótica avanzada con ROS",
    texto: "El sistema que usan los robots de la industria y la investigación, para los proyectos más grandes.",
    icono: "M12 3v4M12 17v4M3 12h4M17 12h4M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2",
  },
  {
    id: "espacios",
    titulo: "Espacios maker",
    texto: "Asesoramiento para armar el aula de tecnología: equipamiento, organización y uso.",
    icono: "M3 21V9l9-6 9 6v12M9 21v-6h6v6",
  },
  {
    id: "a-medida",
    titulo: "Proyectos a medida",
    texto: "Desarrollos para instituciones y empresas: kits propios, contenidos, competencias y eventos.",
    icono: "M14 7l3-3 3 3-3 3M4 20l9-9M9 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z",
  },
];
