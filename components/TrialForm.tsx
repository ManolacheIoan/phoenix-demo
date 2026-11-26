"use client";

import Link from "next/link";
import { CircleAlert, CircleCheck, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { days, formConfig, goals, site, timeSlots } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";
type Fields = { nume: string; telefon: string; obiectiv: string; zi: string; interval: string; acord: string };
type Errors = Partial<Record<keyof Fields, string>>;

const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";
const fieldBase =
  "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-navy transition placeholder:text-navy/45 focus:outline-none focus:ring-4";
const fieldOk = "border-navy/20 focus:border-blue focus:ring-blue/15";
const fieldBad = "border-red focus:border-red focus:ring-red/15";

function validate(d: Fields): Errors {
  const e: Errors = {};
  if (d.nume.trim().length < 2) e.nume = "Scrie-ne numele tău.";
  const digits = d.telefon.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) e.telefon = "Număr invalid. Exemplu: 0728 888 188.";
  if (!d.obiectiv) e.obiectiv = "Alege un obiectiv.";
  if (!d.zi) e.zi = "Alege o zi.";
  if (!d.acord) e.acord = "Avem nevoie de acordul tău ca să te sunăm.";
  return e;
}

function whatsappUrl(d: Partial<Fields>) {
  const lines = [
    `Bună! Aș vrea un antrenament de probă gratuit la ${site.name}.`,
    d.nume && `Nume: ${d.nume}`,
    d.telefon && `Telefon: ${d.telefon}`,
    d.obiectiv && `Obiectiv: ${d.obiectiv}`,
    d.zi && `Zi preferată: ${d.zi}${d.interval ? `, ${d.interval.toLowerCase()}` : ""}`,
  ].filter(Boolean);
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function openWhatsApp(url: string) {
  if (!window.open(url, "_blank", "noopener")) window.location.href = url;
}

export function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [last, setLast] = useState<Partial<Fields>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const endpoint = formConfig.formspreeEndpoint;

  const read = (): Fields => {
    const fd = new FormData(formRef.current!);
    return {
      nume: String(fd.get("nume") ?? ""), telefon: String(fd.get("telefon") ?? ""), obiectiv: String(fd.get("obiectiv") ?? ""),
      zi: String(fd.get("zi") ?? ""), interval: String(fd.get("interval") ?? ""), acord: String(fd.get("acord") ?? ""),
    };
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>, via: "auto" | "whatsapp" = "auto") {
    e.preventDefault();
    const data = read();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setLast(data);
    if (!endpoint || via === "whatsapp") {
      openWhatsApp(whatsappUrl(data));
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `Probă gratuită — ${data.nume}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="fade-in rounded-3xl bg-white p-8 text-navy shadow-2xl sm:p-10">
        <CircleCheck className="h-12 w-12 text-[#1f9d55]" strokeWidth={1.6} aria-hidden="true" />
        <p className="mt-4 font-display text-2xl font-black uppercase">Cererea a ajuns la noi</p>
        <p className="mt-2 text-navy/75">Mulțumim, {last.nume}! Te sunăm la {last.telefon} ca să stabilim ora antrenamentului de probă.</p>
        <button type="button" onClick={() => setStatus("idle")} className={`mt-6 font-semibold text-blue underline underline-offset-4 ${focus}`}>Trimite încă o cerere</button>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <span id={`err-${k}`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red">
        <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />{errors[k]}
      </span>
    ) : null;
  const aria = (k: keyof Fields) => ({ "aria-invalid": !!errors[k] || undefined, "aria-describedby": errors[k] ? `err-${k}` : undefined });
  const cls = (k: keyof Fields) => `${fieldBase} ${errors[k] ? fieldBad : fieldOk}`;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="grid gap-x-5 gap-y-4 rounded-3xl bg-white p-6 text-navy shadow-2xl sm:grid-cols-2 sm:p-8" aria-label="Programare la antrenamentul de probă gratuit">
      <label className="block text-sm font-bold">
        Nume
        <input name="nume" autoComplete="name" className={cls("nume")} placeholder="Numele tău" {...aria("nume")} />
        {err("nume")}
      </label>
      <label className="block text-sm font-bold">
        Telefon
        <input name="telefon" type="tel" inputMode="tel" autoComplete="tel" className={cls("telefon")} placeholder="07xx xxx xxx" {...aria("telefon")} />
        {err("telefon")}
      </label>
      <label className="block text-sm font-bold sm:col-span-2">
        Obiectiv
        <select name="obiectiv" className={cls("obiectiv")} defaultValue="" {...aria("obiectiv")}>
          <option value="" disabled>Ce vrei să obții?</option>
          {goals.map((g) => <option key={g}>{g}</option>)}
        </select>
        {err("obiectiv")}
      </label>
      <label className="block text-sm font-bold">
        Zi preferată
        <select name="zi" className={cls("zi")} defaultValue="" {...aria("zi")}>
          <option value="" disabled>Alege ziua</option>
          {days.map((d) => <option key={d}>{d}</option>)}
        </select>
        {err("zi")}
      </label>
      <label className="block text-sm font-bold">
        Interval <span className="font-normal text-navy/60">(opțional)</span>
        <select name="interval" className={cls("interval")} defaultValue="">
          <option value="">Oricând</option>
          {timeSlots.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-navy/80">
          <input type="checkbox" name="acord" value="da" className="mt-0.5 h-5 w-5 shrink-0 accent-red" {...aria("acord")} />
          <span>Sunt de acord să fiu contactat telefonic pentru programare. Detalii în <Link href="/confidentialitate/" className="font-semibold text-blue underline underline-offset-2">politica de confidențialitate</Link>.</span>
        </label>
        {err("acord")}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`group inline-flex items-center justify-center gap-2 rounded-full bg-red px-5 py-4 font-display text-[0.92rem] font-extrabold uppercase sm:px-7 tracking-wide text-white shadow-[0_10px_24px_-10px_rgba(200,16,46,.75)] transition hover:-translate-y-0.5 hover:bg-red-dark disabled:opacity-70 ${focus}`}
        >
          {endpoint ? <Send className="h-4 w-4" aria-hidden="true" /> : <MessageCircle className="h-4 w-4" aria-hidden="true" />}
          {status === "sending" ? "Se trimite…" : endpoint ? "Rezervă proba gratuită" : "Trimite pe WhatsApp"}
        </button>
        {endpoint && (
          <button type="button" onClick={(e) => onSubmit(e as unknown as React.FormEvent<HTMLFormElement>, "whatsapp")} className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3.5 font-display text-sm font-extrabold uppercase text-navy transition hover:border-navy ${focus}`}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />Prefer WhatsApp
          </button>
        )}
      </div>

      <p className="-mt-1 text-sm text-navy/65 sm:col-span-2" aria-live="polite">
        {status === "error" ? (
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium text-red">
            <CircleAlert className="h-4 w-4" aria-hidden="true" />
            Nu am putut trimite cererea.
            <button type="button" onClick={() => openWhatsApp(whatsappUrl(last))} className="font-bold underline underline-offset-2">Trimite pe WhatsApp</button>
            sau
            <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-1 font-bold underline underline-offset-2"><Phone className="h-3.5 w-3.5" aria-hidden="true" />sună-ne</a>.
          </span>
        ) : endpoint ? (
          "Te sunăm noi pentru confirmare."
        ) : (
          "Se deschide WhatsApp cu mesajul gata scris. Tu doar apeși Trimite."
        )}
      </p>
    </form>
  );
}
