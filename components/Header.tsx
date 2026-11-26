"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand";
import { nav, site } from "@/content/site";

const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";

type NavLinkProps = { home: boolean; href: string; label: string; className: string; onClick?: () => void };

/** Pe prima pagină: ancoră simplă. Pe celelalte: Link spre „/#secțiune” (respectă basePath). */
function NavLink({ home, href, label, className, onClick }: NavLinkProps) {
  return home ? (
    <a href={href} className={className} onClick={onClick}>{label}</a>
  ) : (
    <Link href={`/${href}`} className={className} onClick={onClick}>{label}</Link>
  );
}

/** Header fix: se micșorează la scroll (76px → 60px); mb-4 compensează diferența, ca pagina să nu „sară”. Pe paginile secundare, linkurile duc la secțiunile din prima pagină. */
export function Header({ home = true }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => !(e.target as HTMLElement).closest("[data-menu]") && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);

  return (
    <header
      data-menu
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color,margin] duration-300 ${scrolled ? "mb-4" : "mb-0"} ${scrolled || open ? "border-navy/10 bg-white/95 shadow-[0_8px_30px_-18px_rgba(19,32,63,.45)] backdrop-blur-md" : "border-transparent bg-white"}`}
    >
      <div className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 2xl:max-w-7xl ${scrolled ? "h-[60px]" : "h-[76px]"}`}>
        {home ? (
          <a href="#" className={`rounded-xl ${focus}`} aria-label={`${site.name} — începutul paginii`}><Logo compact={scrolled} /></a>
        ) : (
          <Link href="/" className={`rounded-xl ${focus}`} aria-label={`${site.name} — prima pagină`}><Logo compact={scrolled} /></Link>
        )}

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.78rem] font-bold uppercase tracking-wider text-navy/80">
            {nav.map((n) => (
              <li key={n.href}>
                <NavLink home={home} href={n.href} label={n.label} className={`relative py-2 transition-colors hover:text-red after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red after:transition-transform after:duration-300 hover:after:scale-x-100 ${focus}`} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.tel}`} className={`hidden items-center gap-2 rounded-full font-display text-sm font-extrabold text-navy transition-colors hover:text-red md:inline-flex ${focus}`}>
            <Phone className="h-4 w-4 text-red" aria-hidden="true" />{site.phone.display}
          </a>
          <NavLink home={home} href="#proba" label="Probă gratuită" className={`hidden rounded-full bg-red px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_8px_18px_-8px_rgba(200,16,46,.8)] transition hover:-translate-y-0.5 hover:bg-red-dark sm:inline-flex ${focus}`} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="meniu-mobil"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((o) => !o)}
            className={`grid h-11 w-11 place-items-center rounded-xl border border-navy/15 text-navy transition hover:border-navy lg:hidden ${focus}`}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div className="stripe !h-[4px]" aria-hidden="true" />

      <nav id="meniu-mobil" aria-label="Meniu mobil" hidden={!open} className="fade-in absolute inset-x-0 top-full border-t border-navy/10 bg-white shadow-xl lg:hidden">
        <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
          {nav.map((n) => (
            <li key={n.href}>
              <NavLink home={home} href={n.href} label={n.label} onClick={() => setOpen(false)} className={`block border-b border-navy/5 py-3.5 font-display font-extrabold uppercase tracking-wide text-navy hover:text-red ${focus}`} />
            </li>
          ))}
          <li className="grid gap-2 pb-2 pt-4 sm:grid-cols-2">
            <NavLink home={home} href="#proba" label="Antrenament de probă gratuit" onClick={() => setOpen(false)} className={`block rounded-full bg-red py-3.5 text-center font-display font-extrabold uppercase text-white ${focus}`} />
            <a href={`tel:${site.phone.tel}`} className={`block rounded-full border-2 border-navy/15 py-3 text-center font-display font-extrabold uppercase text-navy ${focus}`}>Sună: {site.phone.display}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
