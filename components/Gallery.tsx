"use client";

import { ChevronLeft, ChevronRight, Expand, Image as ImageIcon, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Photo, PhotoPlaceholder } from "@/components/ui";
import { gallery, images } from "@/content/site";
import { src, srcSet } from "@/lib/paths";

const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";
const photos = gallery.filter((g) => g.img);

/** Galerie bento + lightbox pe <dialog> (Escape închide, săgețile navighează, focusul rămâne în dialog). */
export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = (i: number, el: HTMLElement) => { opener.current = el; setIndex(i); };
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) { d.close(); opener.current?.focus(); }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? photos[index] : null;

  return (
    <>
      <ul className="grid auto-rows-[9.5rem] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 lg:auto-rows-[13.5rem]">
        {gallery.map((g) => {
          const pi = photos.indexOf(g);
          return (
            <li key={g.label} className={`reveal group relative overflow-hidden rounded-2xl bg-navy shadow-md ${g.span ?? ""}`}>
              {g.img ? (
                <button type="button" onClick={(e) => open(pi, e.currentTarget)} className={`absolute inset-0 h-full w-full cursor-zoom-in ${focus}`} aria-label={`Mărește poza: ${g.label}`}>
                  <Photo id={g.img} sizes="(min-width: 768px) 50vw, 100vw" className="transition-transform duration-700 ease-out-soft group-hover:scale-[1.06]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/5 to-transparent" aria-hidden="true" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true">
                    <Expand className="h-4 w-4" />
                  </span>
                </button>
              ) : (
                <PhotoPlaceholder icon={ImageIcon} compact />
              )}
              <p className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-navy">{g.label}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-navy/60">Poze ilustrative. Se înlocuiesc cu fotografiile reale ale sălii.</p>

      <dialog
        ref={dialog}
        onClose={close}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={current ? `Galerie: ${current.label}` : "Galerie"}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[#0a1024]/90 backdrop:backdrop-blur-sm"
      >
        {current?.img && (
          <div className="fade-in flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            {/* eslint-disable-next-line @next/next/no-img-element -- export static, WebP deja optimizat */}
            <img
              key={current.img}
              src={src(current.img, 1600)}
              srcSet={srcSet(current.img)}
              sizes="90vw"
              alt={images[current.img].alt}
              width={images[current.img].w}
              height={images[current.img].h}
              className="fade-in max-h-[78dvh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="text-center text-sm text-white/85">
              <span className="font-display font-extrabold uppercase tracking-wide text-white">{current.label}</span>
              <span className="mx-2 text-white/40">·</span>
              {index! + 1} / {photos.length}
              <span className="mx-2 text-white/40">·</span>
              Foto ilustrativă
            </p>
          </div>
        )}
        <button type="button" onClick={close} aria-label="Închide galeria" className={`fixed right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white text-navy shadow-lg transition hover:scale-105 ${focus}`}>
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => step(-1)} aria-label="Poza anterioară" className={`fixed left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white sm:left-6 ${focus}`}>
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Poza următoare" className={`fixed right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white sm:right-6 ${focus}`}>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </dialog>
    </>
  );
}
