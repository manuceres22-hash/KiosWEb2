# KiosWEb2

La web institucional de KIOS: **kios.com.ar**. KIOS es una empresa de
tecnología educativa, y la web la presenta con sus cuatro líneas
(`src/datos/soluciones.ts`):

- **Robots y kits** (`/robots/`)
- **Plataforma KIOS**, la app (`/plataforma/` y `/niveles/`)
- **Capacitación docente** (`/capacitacion/`)
- **Otras tecnologías** (`/tecnologias/`)

Además: escuelas y gobiernos, la empresa, precios, videos, preguntas frecuentes
y contacto.

**Las mascotas son de la app**: aparecen sólo en las páginas de la plataforma
(`/plataforma/` y `/niveles/`). El resto del sitio usa la ilustración de
`components/escena.tsx` y los íconos de `CabeceraDePagina`.

Es un proyecto **aparte de la app** (el repo `kios`): no comparte código, ni
base de datos, ni deploy. Si se rompe algo acá, la app de las escuelas sigue
andando, y al revés. Lo único que comparten es la marca: el nombre, el voseo y
las mascotas (copiadas de `public/avatares` de la app a `public/mascotas`).

## Comandos

```bash
npm ci          # instalar
npm run dev     # desarrollo en http://localhost:3000
npm run verify  # typecheck + lint: correlo antes de cada commit
npm run build   # deja el sitio estático en out/
```

## Cómo está hecho

- Next.js 16 + Tailwind 4, como la app, pero exportado como **sitio estático**
  (`output: "export"`): `out/` se sube a cualquier hosting (Vercel, Netlify,
  Cloudflare Pages, un bucket).
- El estilo sale de `DESIGN.md` (la referencia): cielo celeste, paneles azul
  noche redondeados y el naranja reservado para «empezá». Los tokens están en
  `src/app/globals.css`.
- Sin librería de componentes y sin JavaScript de más: el menú del celular y las
  preguntas frecuentes son `<details>`. Sólo el formulario de contacto es
  componente de cliente.

## Imágenes

- `public/logo-kios-blanco.svg`: el logo original. En la web va inline
  (`components/logo.tsx`) en `currentColor`: blanco en la barra, marino en el pie.
- `public/robots/`: fotos de los robots (del fabricante de los kits), con el
  fondo blanco pasado a sombra para que sirvan sobre cualquier color. Se ven
  mejor sobre fondos claros.
- `public/app/`: capturas de la app, sacadas de las pantallas de muestra del
  repo `kios` (`/muestras/leccion`, `/muestras/armado`, `/muestras/simulador`,
  que andan sin cuenta en desarrollo). Cuando la app cambie, se vuelven a sacar.

## Movimiento

Sigue la guía de diseño de Emil Kowalski: curvas propias
(`--ease-salida`), todo lo que se aprieta se achica a 0,97 en 160 ms
(`apretable`), las tarjetas se levantan sólo donde hay mouse (`levitar`), las
secciones aparecen una vez al scrollear (`.aparecer`, sólo con JavaScript) y
nada se mueve con «menos movimiento». La vitrina de la app pasa sola mientras
se ve y se queda quieta al primer toque.

## Lo provisorio (todo en un solo archivo)

Precios, forma de compra, datos de contacto, videos y la dirección de la app
**son de relleno** y viven en `src/datos/provisorio.ts`. Cuando se decida cada
cosa, se cambia ahí y nada más:

- `PROVISORIO`: mientras sea `true`, al lado de los precios sale «Valores de
  referencia, a confirmar».
- `PRECIOS_KITS` y `PLANES`: precios en pesos.
- `CONTACTO`: mails, WhatsApp (vacío = no se muestra), horario y redes.
- `COMO_SE_COMPRA`: los pasos.
- `EMPRESA`: misión, qué hacemos y valores (texto de referencia).
- `CAPACITACION`: modalidades, temario y precio.
- `TECNOLOGIAS`: las otras tecnologías y servicios.
- `VIDEOS`: con `url` vacía se ve «Video en preparación»; con una URL de
  YouTube `/embed/…`, el video.
- `URL_APP`: adónde lleva «Entrar».

El formulario de contacto abre el programa de correo con el mensaje armado
(el sitio no tiene servidor). Cuando haya un servicio de formularios, se cambia
la función `enviar` de `src/components/formulario-contacto.tsx`.

## Lo que no es provisorio

`src/datos/niveles.ts` copia lo que dice la app: niveles, mascotas, kits,
robots y la estructura del año (64 lugares). Si la app cambia un nivel, hay que
cambiarlo acá también. Nada de testimonios, logos de escuelas ni resultados de
alumnos inventados.
