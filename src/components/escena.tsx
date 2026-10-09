/**
 * La ilustración de la portada: una computadora con un programa en bloques y,
 * adelante, el tanque que lo cumple. Cuenta la empresa entera —el robot, la
 * plataforma y el aula— sin usar las mascotas, que son de la app.
 */
export function Escena({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 380" className={className} role="img" aria-label="Una computadora con un programa en bloques y un robot tanque adelante">
      <circle cx="210" cy="190" r="175" fill="none" stroke="#8bb3da" strokeOpacity=".2" strokeDasharray="5 10" />
      <circle cx="210" cy="190" r="128" fill="#022e57" />
      <circle cx="210" cy="190" r="128" fill="none" stroke="#8bb3da" strokeOpacity=".3" />

      {/* La computadora */}
      <rect x="110" y="70" width="200" height="132" rx="12" fill="#183d6d" />
      <rect x="120" y="80" width="180" height="112" rx="6" fill="#051e38" />
      <rect x="132" y="94" width="96" height="16" rx="4" fill="#ff7a53" />
      <rect x="144" y="116" width="110" height="16" rx="4" fill="#fd8d32" opacity=".85" />
      <rect x="144" y="138" width="80" height="16" rx="4" fill="#8bb3da" />
      <rect x="132" y="160" width="60" height="16" rx="4" fill="#ffa84a" />
      <text x="240" y="106" fill="#8bb3da" fontFamily="monospace" fontSize="11">for i in…</text>
      <path d="M92 202h236l-14 16H106z" fill="#2a5590" />

      {/* El tanque */}
      <g transform="translate(150 236)">
        <rect x="0" y="40" width="120" height="30" rx="15" fill="#0b1e33" />
        <circle cx="16" cy="55" r="9" fill="#fd8d32" />
        <circle cx="104" cy="55" r="9" fill="#fd8d32" />
        <circle cx="60" cy="55" r="6" fill="#8bb3da" />
        <path d="M16 46h88M16 64h88" stroke="#8bb3da" strokeOpacity=".5" strokeDasharray="4 4" />
        <rect x="14" y="10" width="92" height="32" rx="8" fill="#e1f2ff" />
        <rect x="26" y="18" width="34" height="16" rx="3" fill="#051e38" />
        <circle cx="34" cy="26" r="3" fill="#ff2a64" />
        <circle cx="44" cy="26" r="3" fill="#fd8d32" />
        <rect x="80" y="0" width="34" height="18" rx="9" fill="#183d6d" />
        <circle cx="90" cy="9" r="5" fill="#e1f2ff" />
        <circle cx="105" cy="9" r="5" fill="#e1f2ff" />
      </g>
      <path d="M296 264c20-6 34-18 42-34" fill="none" stroke="#ffa84a" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />

      <circle cx="58" cy="120" r="6" fill="#fd8d32" />
      <circle cx="370" cy="300" r="8" fill="#ff7a53" />
      <circle cx="350" cy="74" r="3" fill="#fff" />
      <circle cx="72" cy="286" r="3" fill="#fff" />
    </svg>
  );
}
