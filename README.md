# KiosWEb2

La web institucional de KIOS: **kios.com.ar**. Cuenta qué es KIOS, muestra los
niveles, los robots y los kits, los planes de suscripción, los videos y el
contacto.

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

## Lo provisorio (todo en un solo archivo)

Precios, forma de compra, datos de contacto, videos y la dirección de la app
**son de relleno** y viven en `src/datos/provisorio.ts`. Cuando se decida cada
cosa, se cambia ahí y nada más:

- `PROVISORIO`: mientras sea `true`, al lado de los precios sale «Valores de
  referencia, a confirmar».
- `PRECIOS_KITS` y `PLANES`: precios en pesos.
- `CONTACTO`: mails, WhatsApp (vacío = no se muestra), horario y redes.
- `COMO_SE_COMPRA`: los pasos.
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
