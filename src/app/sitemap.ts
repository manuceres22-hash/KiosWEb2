import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const RUTAS = ["", "universo/", "niveles/", "robots/", "escuelas/", "planes/", "videos/", "preguntas/", "contacto/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((r) => ({ url: `https://kios.com.ar/${r}` }));
}
