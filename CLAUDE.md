# KiosWEb2 — guía para Claude

La web institucional de KIOS (kios.com.ar). Leé `README.md` primero.

- **Respondé siempre en español rioplatense, con voseo**, y escribí así todo
  texto que vea el usuario: "probá", "armá", "escribinos". Nada de "tú".
- **El nombre es "KIOS"** y no se toca.
- **KIOS es una empresa, no sólo la app.** Tiene cuatro líneas: robots y kits,
  la plataforma (la app), capacitación docente y otras tecnologías. La portada
  y el menú hablan de la empresa; la app es una de las líneas.
- **Las mascotas son de la app**: sólo en `/plataforma/`, `/niveles/` y en la
  sección «Conocé a Kio y la app» (`components/seccion-kio.tsx`), que invita a
  la plataforma.
- **Movimiento**: botones con `apretable`, tarjetas con `levitar`, entradas con
  `.aparecer`. Sólo `transform` y `opacity`, curvas `--ease-salida`, nada de
  `transition: all` ni animaciones de más de 300 ms en la interfaz.
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
- **CodeGraph** (`@colbymchenry/codegraph`, fijado en 1.6.2 y sin telemetría)
  indexa el código y lo ofrece como servidor MCP (`codegraph_explore`, en
  `.mcp.json`). El índice vive en `.codegraph/`, no se commitea y lo arma o
  pone al día `.claude/hooks/codegraph.sh` al empezar cada sesión. Para subir
  de versión, cambiala en los dos archivos.
