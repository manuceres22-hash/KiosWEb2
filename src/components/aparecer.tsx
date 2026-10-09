"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Marca como `visible` cada `.aparecer` cuando entra en pantalla, una sola vez.
 * Un solo observador para toda la página: no hace falta un componente por
 * elemento. El CSS está en `globals.css`.
 */
export function Aparecer() {
  // La barra y el pie no se vuelven a montar al cambiar de página: se observa
  // de nuevo cada vez que cambia la ruta.
  const ruta = usePathname();
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>(".aparecer:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      elementos.forEach((e) => e.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    elementos.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [ruta]);
  return null;
}
