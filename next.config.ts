import type { NextConfig } from "next";

/**
 * La web institucional es estática: `next build` deja todo en `out/` y se puede
 * publicar en cualquier hosting (Vercel, Netlify, un bucket). No usa servidor:
 * el formulario de contacto arma un mail, no lo manda desde acá.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
