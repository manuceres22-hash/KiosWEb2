/** El cuadradito celeste con un ícono de trazo naranja de las tarjetas. */
export function Icono({ d }: { d: string }) {
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-tarjeta bg-cielo">
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d={d} fill="none" stroke="#fd8d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
