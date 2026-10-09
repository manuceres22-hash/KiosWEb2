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
