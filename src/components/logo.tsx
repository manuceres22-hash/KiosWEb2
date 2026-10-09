/** La palabra KIOS con un robotito al lado. El nombre no se toca. */
export function Logo({ grande = false }: { grande?: boolean }) {
  return (
    <span className={`flex items-center gap-2 font-bold tracking-wide ${grande ? "text-3xl" : "text-xl"}`}>
      <svg width={grande ? 36 : 28} height={grande ? 36 : 28} viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="9" width="24" height="18" rx="6" fill="#ff7a53" />
        <rect x="9" y="14" width="5" height="5" rx="2.5" fill="#051e38" />
        <rect x="18" y="14" width="5" height="5" rx="2.5" fill="#051e38" />
        <path d="M16 9V4" stroke="#ffa84a" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="3.5" r="2.5" fill="#ffa84a" />
      </svg>
      KIOS
    </span>
  );
}
