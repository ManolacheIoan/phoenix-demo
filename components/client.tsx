"use client";

import { useEffect, useState } from "react";
import { days, formspreeId, goals, nav, site } from "@/content/site";

/** Adaugă clasa „in” elementelor .reveal când intră în ecran. */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => {
      // Ce e deja deasupra ecranului (ex. sosire direct pe #contact) apare imediat, fără animație.
      if (el.getBoundingClientRect().bottom < 0) el.classList.add("in");
      else io.observe(el);
    });
    // La click pe un link intern, secțiunea țintă apare instant, ca să nu ajungi pe un loc gol.
    const showTarget = (hash: string) => {
      const t = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      t?.querySelectorAll(".reveal").forEach((el) => el.classList.add("in", "instant"));
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (a) showTarget(a.getAttribute("href")!);
    };
    showTarget(location.hash);
    document.addEventListener("click", onClick);
    return () => { io.disconnect(); document.removeEventListener("click", onClick); };
  }, []);
  return null;
}

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 w-full rounded-lg border border-navy/25 bg-white px-4 py-3 text-navy placeholder:text-navy/50 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/40";

export function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");

  function whatsappUrl(d: Record<string, string>) {
    const msg = `Bună! Aș vrea un antrenament de probă gratuit la ${site.name}.\nNume: ${d.nume}\nTelefon: ${d.telefon}\nObiectiv: ${d.obiectiv}\nZi preferată: ${d.zi}`;
    return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!formspreeId) {
      const url = whatsappUrl(data);
      if (!window.open(url, "_blank", "noopener")) window.location.href = url;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="rounded-2xl border border-blue/40 bg-white text-navy p-8 text-lg">
        Mulțumim! Te sunăm în curând să stabilim ora antrenamentului de probă.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-6 text-navy shadow-xl sm:grid-cols-2 sm:p-8">
      <label className="block text-sm font-semibold">
        Nume
        <input name="nume" required autoComplete="name" className={field} placeholder="Numele tău" />
      </label>
      <label className="block text-sm font-semibold">
        Telefon
        <input name="telefon" type="tel" required autoComplete="tel" pattern="[0-9 +.\-]{10,16}" title="Un număr de telefon, ex. 0728 888 188" inputMode="tel" className={field} placeholder="07xx xxx xxx" />
      </label>
      <label className="block text-sm font-semibold">
        Obiectiv
        <select name="obiectiv" required className={field} defaultValue="">
          <option value="" disabled>Alege obiectivul</option>
          {goals.map((g) => <option key={g}>{g}</option>)}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Zi preferată
        <select name="zi" required className={field} defaultValue="">
          <option value="" disabled>Alege ziua</option>
          {days.map((d) => <option key={d}>{d}</option>)}
        </select>
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-red text-white px-8 py-4 font-display text-lg font-extrabold uppercase tracking-wide transition hover:brightness-110 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
        >
          {status === "sending" ? "Se trimite…" : formspreeId ? "Rezervă antrenamentul gratuit" : "Trimite pe WhatsApp"}
        </button>
        <p className="mt-3 text-sm text-navy/75" aria-live="polite">
          {status === "error" ? (
            <>
              Nu am putut trimite formularul.{" "}
              <a className="font-semibold text-red underline" href={`tel:${site.phone.tel}`}>Sună-ne la {site.phone.display}</a>.
            </>
          ) : formspreeId ? (
            "Te sunăm noi pentru confirmare."
          ) : (
            "Se deschide WhatsApp cu mesajul completat — tu doar apeși Trimite."
          )}
        </p>
      </div>
    </form>
  );
}

/** Meniu pentru ecrane mici: se închide la click pe link, la Escape și la click în afară. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => !(e.target as HTMLElement).closest("[data-menu]") && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);
  return (
    <div data-menu className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="meniu-mobil"
        aria-label={open ? "Închide meniul" : "Deschide meniul"}
        onClick={() => setOpen((o) => !o)}
        className="grid h-11 w-11 place-items-center rounded-xl border border-navy/15 text-navy focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav id="meniu-mobil" aria-label="Meniu mobil" hidden={!open} className="absolute inset-x-0 top-full border-t border-navy/10 bg-white shadow-xl">
        <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy/5 py-3.5 font-display font-extrabold uppercase tracking-wide text-navy hover:text-red">
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a href="#proba" onClick={() => setOpen(false)} className="block rounded-full bg-red py-3.5 text-center font-display font-extrabold uppercase text-white">Antrenament de probă gratuit</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
