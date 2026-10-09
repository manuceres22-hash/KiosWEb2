# KiosWEb2 — guía para Claude

La web institucional de KIOS (kios.com.ar). Leé `README.md` primero.

- **Respondé siempre en español rioplatense, con voseo**, y escribí así todo
  texto que vea el usuario: "probá", "armá", "escribinos". Nada de "tú".
- **El nombre es "KIOS"** y no se toca.
- **KIOS es una empresa, no sólo la app.** Tiene cuatro líneas: robots y kits,
  la plataforma (la app), capacitación docente y otras tecnologías. La portada
  y el menú hablan de la empresa; la app es una de las líneas.
- **Las mascotas son de la app**: sólo en `/plataforma/` y `/niveles/`.
- **Este repo no toca la app.** No importes código del repo `kios`; si hace
  falta un dato de la app, se copia a `src/datos/` con un comentario de dónde sale.
- **Lo que no está decidido vive sólo en `src/datos/provisorio.ts`.** No
  escribas precios, mails ni teléfonos en otro lado.
- **No inventes** testimonios, logos de escuelas, cifras de uso ni resultados
  de alumnos. Las cifras de la portada salen del contenido de la app.
- El estilo sigue `DESIGN.md`: el naranja (`fondo-lanzamiento`) es sólo para
  las acciones de «empezá»; los títulos van en `text-marino`, nunca en negro.
- Tiene que andar de 360 px a escritorio, sin scroll horizontal.
- Sitio estático (`output: "export"`): nada de Server Actions, cookies ni
  rutas que necesiten servidor. Antes de usar una API de Next, mirá
  `node_modules/next/dist/docs/`.
- Corré `npm run verify` y `npm run build` antes de cada commit.
