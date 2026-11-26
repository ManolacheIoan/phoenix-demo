"use client";

import { useEffect } from "react";

/** Adaugă clasa „in” elementelor .reveal când intră în ecran; ținta unui link intern apare instant. */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().bottom < 0) el.classList.add("in", "instant");
      else io.observe(el);
    });
    const showTarget = (hash: string) => {
      const t = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      t?.querySelectorAll(".reveal").forEach((el) => el.classList.add("in", "instant"));
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href*='#']");
      const href = a?.getAttribute("href");
      if (href) showTarget(href.slice(href.indexOf("#")));
    };
    showTarget(location.hash);
    document.addEventListener("click", onClick);
    return () => { io.disconnect(); document.removeEventListener("click", onClick); };
  }, []);
  return null;
}
