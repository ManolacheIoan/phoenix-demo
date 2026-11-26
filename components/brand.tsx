/** Phoenix low-poly din linii, în stilul inimii geometrice de pe peretele sălii. */
export function GeoPhoenix({ className, strokeWidth = 2.2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M100 30 82 70 100 96 118 70Z" />
      <path d="M82 70 40 44 52 92 100 96M118 70 160 44 148 92 100 96" />
      <path d="M40 44 14 70 52 92M160 44 186 70 148 92" />
      <path d="M52 92 74 130 100 96 126 130 148 92" />
      <path d="M74 130 100 176 126 130M74 130 126 130" />
      <path d="M100 176 86 196M100 176 114 196M100 176V196" />
      <path d="M100 30 94 12M100 30 108 14" />
    </svg>
  );
}

/** Insigna cu phoenix folosită la începutul fiecărui titlu de secțiune. */
export function SectionMark({ light }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2" aria-hidden="true">
      <span className={`grid h-8 w-8 place-items-center rounded-lg ${light ? "bg-white" : "bg-red"}`}>
        <GeoPhoenix className={`h-6 w-6 ${light ? "text-navy" : "text-white"}`} strokeWidth={3.4} />
      </span>
      <span className={`h-[2px] w-5 ${light ? "bg-white/50" : "bg-red/40"}`} />
    </span>
  );
}

export function Logo({ compact, light }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid place-items-center rounded-xl transition-all duration-300 ${light ? "bg-white" : "bg-navy"} ${compact ? "h-9 w-9" : "h-10 w-10"}`}>
        <GeoPhoenix className={`h-7 w-7 ${light ? "text-navy" : "text-white"}`} strokeWidth={2.8} />
      </span>
      <span className="font-display leading-none">
        <span className={`block text-[0.62rem] font-bold uppercase tracking-[0.32em] ${light ? "text-[#ff9aa8]" : "text-red"}`}>Fitness</span>
        <span className={`block text-xl font-black uppercase tracking-tight ${light ? "text-white" : "text-navy"}`}>Phoenix</span>
      </span>
    </span>
  );
}
