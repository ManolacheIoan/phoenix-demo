import { ArrowRight, ImageIcon, Star } from "lucide-react";
import { SectionMark } from "@/components/brand";
import { images, TBD, type ImageId } from "@/content/site";
import { src, srcSet } from "@/lib/paths";

/** Text cu porțiunile „[de completat]” afișate ca etichetă discretă. */
export function T({ children }: { children: string }) {
  const parts = children.split(TBD);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <span className="tbd">{TBD}</span>}
        </span>
      ))}
    </>
  );
}

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-[#f5b301] text-[#f5b301]`} strokeWidth={1.5} />
      ))}
    </span>
  );
}

export function SectionHead({ kicker, title, intro, light, center, className = "" }: {
  kicker: string; title: React.ReactNode; intro?: string; light?: boolean; center?: boolean; className?: string;
}) {
  return (
    <div className={`reveal mb-9 max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-white/85" : "text-red"}`}>
        <SectionMark light={light} />
        {kicker}
      </p>
      <h2 className={`mt-4 text-balance font-display text-[2rem] font-black uppercase leading-[1.04] tracking-tight sm:text-[2.6rem] lg:text-[2.85rem] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-3 text-pretty text-[1.0625rem] leading-relaxed ${light ? "text-white/80" : "text-navy/70"}`}>{intro}</p>}
    </div>
  );
}

export const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8 2xl:max-w-7xl";
export const sec = "py-16 sm:py-20 lg:py-24";
export const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";
const btn = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center font-display text-[0.92rem] font-extrabold uppercase tracking-wide transition duration-300 ease-out-soft active:scale-[0.98] ${focusRing}`;
export const btnRed = `${btn} bg-red text-white shadow-[0_10px_24px_-10px_rgba(200,16,46,.75)] hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-[0_14px_28px_-10px_rgba(200,16,46,.85)]`;
export const btnNavy = `${btn} border-2 border-navy/15 bg-white text-navy hover:-translate-y-0.5 hover:border-navy`;
export const btnWhite = `${btn} bg-white text-navy hover:-translate-y-0.5 hover:shadow-lg`;
export const btnGhostLight = `${btn} border-2 border-white/30 text-white hover:-translate-y-0.5 hover:border-white`;

export function Arrow() {
  return <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />;
}

/** Poză responsive din public/images (WebP 640/1024/1600). */
export function Photo({ id, sizes, className = "", priority }: { id: ImageId; sizes: string; className?: string; priority?: boolean }) {
  const img = images[id];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- export static: pozele sunt deja optimizate în WebP responsive
    <img
      src={src(id)}
      srcSet={srcSet(id)}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={img.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

/** Loc rezervat pentru o poză reală: paleta site-ului, textură fină, iconiță line-art. */
export function PhotoPlaceholder({ icon: Icon = ImageIcon, label = "Foto — se înlocuiește cu poza reală", className = "", compact }: {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>; label?: string; className?: string; compact?: boolean;
}) {
  return (
    <div className={`relative grid h-full w-full place-items-center overflow-hidden bg-[radial-gradient(120%_90%_at_30%_10%,#24386b_0%,#13203f_60%,#0d1730_100%)] ${className}`}>
      <div className="geo-light absolute inset-0 opacity-[0.09]" aria-hidden="true" />
      <div className={`relative flex flex-col items-center gap-3 px-4 text-center ${compact ? "-mt-8" : ""}`}>
        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/5">
          <Icon className="h-7 w-7 text-white/70" strokeWidth={1.4} />
        </span>
        <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70 ${compact ? "hidden lg:block" : ""}`}>{label}</span>
      </div>
    </div>
  );
}
