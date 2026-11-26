import { RevealObserver, TrialForm } from "@/components/client";
import { gallery, nav, plans, schedule, services, site, TBD, trainers } from "@/content/site";

const icons: Record<string, React.ReactNode> = {
  dumbbell: <path d="M6 9v6M18 9v6M3 10.5v3M21 10.5v3M6 12h12" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a6 6 0 0 1 4 6.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
  camera: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z" />,
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

/** Afișează textul; porțiunea „[de completat]” e evidențiată. */
function T({ children }: { children: string }) {
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

/** Pasărea phoenix în stil low-poly, cu linii — ca inima geometrică de pe peretele sălii. */
function GeoPhoenix({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" className={className} aria-hidden="true">
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

function SectionHead({ kicker, title, intro, light }: { kicker: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="reveal mb-10 max-w-2xl">
      <p className={`flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-white" : "text-red"}`}>
        <span className="stripe-v inline-block h-3 w-10" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className={`mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg ${light ? "text-white/85" : "text-navy/75"}`}>{intro}</p>}
    </div>
  );
}

const wrap = "mx-auto max-w-6xl px-5";
const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";
const btnRed = `inline-flex items-center justify-center rounded-full bg-red px-7 py-3.5 font-display font-extrabold uppercase tracking-wide text-white transition hover:bg-[#a50d26] ${focus}`;
const btnNavy = `inline-flex items-center justify-center rounded-full border-2 border-navy px-7 py-3.5 font-display font-extrabold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white ${focus}`;

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy">
        Sari la conținut
      </a>

      <div className="bg-navy px-4 py-2 text-center text-sm font-semibold text-white">{site.demoBanner}</div>

      <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-black uppercase tracking-wide text-navy">
            <GeoPhoenix className="h-9 w-9 text-red" />
            Fitness <span className="text-blue">Phoenix</span>
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-6 text-sm font-bold uppercase tracking-wide">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-red">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${site.phone.tel}`} className="hidden font-display font-extrabold text-red sm:block">{site.phone.display}</a>
        </div>
        <div className="stripe" aria-hidden="true" />
      </header>

      <main id="continut">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.07]" />
          <div className={`${wrap} relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]`}>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 rounded-full bg-neon" aria-hidden="true" />
                {site.address.street} · {site.address.city}
              </p>
              <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.95] text-navy sm:text-7xl">
                Sala ta <br />din <span className="text-red">Tecuci</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-navy/80 sm:text-xl">{site.hero.subtitle}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#abonamente" className={btnNavy}>Abonamente</a>
                <a href="#proba" className={btnRed}>Vino la un antrenament de probă</a>
              </div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-navy/85 hover:text-navy">
                <Icon name="star" className="h-5 w-5 fill-[#f5b301] text-[#f5b301]" />
                <span><strong className="text-navy">{site.google.rating}</strong> din {site.google.reviewCount} de recenzii pe Google</span>
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="stripe-v absolute -right-4 top-6 h-[85%] w-full -skew-y-6 rounded-3xl opacity-90" aria-hidden="true" />
              <div className="relative grid aspect-square place-items-center rounded-3xl border-2 border-line bg-white shadow-2xl">
                <GeoPhoenix className="h-3/4 w-3/4 text-line" />
              </div>
            </div>
          </div>
        </section>

        {/* ABONAMENTE */}
        <section id="abonamente" className="floor py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Abonamente" title="Alege-ți abonamentul" intro="Prețurile finale se stabilesc cu sala. Întreabă la recepție de oferte pentru prima lună." />
            <div className="grid items-center gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`reveal relative overflow-hidden rounded-2xl p-8 shadow-lg ${p.featured ? "bg-navy text-white md:scale-105 md:py-12" : "bg-white text-navy"}`}
                >
                  <div className="stripe absolute inset-x-0 top-0" aria-hidden="true" />
                  {p.featured && (
                    <p className="mb-4 inline-block rounded-full bg-red px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white">Recomandat</p>
                  )}
                  <h3 className="font-display text-2xl font-black uppercase">{p.name}</h3>
                  <p className="mt-4 font-display text-3xl font-black">
                    <span className={p.featured ? "font-semibold italic text-[#ff9aa8]" : "tbd"}>{p.price}</span>{" "}
                    <span className={`text-base font-semibold ${p.featured ? "text-white/75" : "text-navy/70"}`}>{p.period}</span>
                  </p>
                  <ul className={`mt-6 space-y-3 ${p.featured ? "text-white/90 [&_.tbd]:text-[#ff9aa8]" : "text-navy/85"}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-red" aria-hidden="true" /><span><T>{f}</T></span></li>
                    ))}
                  </ul>
                  <a href="#proba" className={`mt-8 w-full ${p.featured ? btnRed : btnNavy}`}>Începe cu o probă</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-2 md:items-start`}>
            <SectionHead kicker="Program" title="Când e deschisă sala" intro="Orarul complet, inclusiv zilele de sărbătoare, va fi afișat aici." />
            <table className="reveal w-full overflow-hidden rounded-2xl text-left shadow-lg ring-1 ring-navy/10">
              <caption className="sr-only">Programul sălii pe zile</caption>
              <thead className="bg-navy text-sm uppercase tracking-wider text-white">
                <tr><th scope="col" className="px-5 py-3">Zi</th><th scope="col" className="px-5 py-3">Orar</th></tr>
              </thead>
              <tbody>
                {schedule.map((s) => (
                  <tr key={s.day} className="border-t border-navy/10 even:bg-paper">
                    <th scope="row" className="px-5 py-3.5 font-bold">{s.day}</th>
                    <td className="px-5 py-3.5"><T>{s.hours}</T></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CLASE */}
        <section id="clase" className="relative overflow-hidden bg-navy py-20 sm:py-28">
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.12] invert" />
          <div className={`${wrap} relative`}>
            <SectionHead light kicker="Clase și servicii" title="Ce poți face la Phoenix" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article key={s.title} className="reveal rounded-2xl bg-white p-7 text-navy transition hover:-translate-y-1 [&_.tbd]:text-red">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl text-white ${i % 2 ? "bg-blue" : "bg-red"}`}><Icon name={s.icon} /></div>
                  <h3 className="mt-5 font-display text-xl font-black uppercase">{s.title}</h3>
                  <p className="mt-2 text-navy/75"><T>{s.text}</T></p>
                </article>
              ))}
            </div>
          </div>
          <div className="stripe absolute inset-x-0 bottom-0" aria-hidden="true" />
        </section>

        {/* ANTRENORI */}
        <section id="antrenori" className="bg-white py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Echipa" title="Antrenori" intro="Numele, fotografiile și specializările antrenorilor vor fi adăugate împreună cu sala." />
            <div className="grid gap-6 sm:grid-cols-3">
              {trainers.map((t, i) => (
                <article key={i} className="reveal overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-navy/10">
                  <div className="geo relative grid aspect-[4/5] place-items-center bg-paper text-navy/35 [background-size:180px]">
                    <Icon name="user" className="h-20 w-20" />
                    <span className="sr-only">Fotografie antrenor — de adăugat</span>
                  </div>
                  <div className="stripe" aria-hidden="true" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-black uppercase"><span className="tbd">{t.name}</span></h3>
                    <p className="text-navy/75">Specializare: <span className="tbd">{t.role}</span></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="floor py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Galerie" title="Sala" intro="Aici vor apărea fotografiile sălii: zona de cardio, aparatele, vestiarul și barul." />
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {gallery.map((g, i) => (
                <li
                  key={g}
                  className={`reveal relative flex items-end overflow-hidden rounded-2xl bg-white p-4 shadow-md ${i === 0 ? "col-span-2 row-span-2 min-h-72 md:min-h-96" : "min-h-40"}`}
                >
                  <div aria-hidden="true" className="geo absolute inset-0 opacity-[0.12]" />
                  <Icon name="camera" className="absolute right-4 top-4 h-6 w-6 text-navy/40" />
                  <p className="relative rounded-md bg-white/90 px-2 py-1 text-sm font-bold text-navy">{g} <span className="tbd">— foto {TBD}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMULAR */}
        <section id="proba" className="relative overflow-hidden bg-blue py-20 sm:py-28">
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.14] invert" />
          <div className={`${wrap} relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center`}>
            <SectionHead light kicker="Gratuit" title="Antrenament de probă gratuit" intro="Lasă-ne numele și telefonul. Îți arătăm sala, aparatele și cum ar arăta un antrenament pentru obiectivul tău." />
            <div className="reveal"><TrialForm /></div>
          </div>
        </section>

        {/* RECENZII + CONTACT */}
        <section id="contact" className="bg-white py-20 sm:py-28">
          <div className={wrap}>
            <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center">
              <div>
                <p className="flex items-center gap-1" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className="h-6 w-6 fill-[#f5b301] text-[#f5b301]" />)}
                </p>
                <p className="mt-2 font-display text-2xl font-black">{site.google.rating} din 5 · {site.google.reviewCount} de recenzii pe Google</p>
              </div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={btnRed}>Vezi recenziile pe Google</a>
            </div>

            <SectionHead kicker="Contact" title="Te așteptăm" />
            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="reveal space-y-6 text-lg">
                <li className="flex gap-4"><Icon name="pin" className="h-7 w-7 shrink-0 text-red" /><span>{site.address.street}<br />{site.address.city}, jud. {site.address.county}</span></li>
                <li className="flex gap-4"><Icon name="phone" className="h-7 w-7 shrink-0 text-red" /><a href={`tel:${site.phone.tel}`} className="font-bold hover:text-red">{site.phone.display}</a></li>
                <li className="flex gap-4"><Icon name="camera" className="h-7 w-7 shrink-0 text-red" /><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-red">Instagram {site.instagram.handle}</a></li>
              </ul>
              <iframe
                title={`Hartă: ${site.name}, ${site.address.street}, ${site.address.city}`}
                src={site.google.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="reveal h-80 w-full rounded-2xl shadow-lg ring-1 ring-navy/10"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-28 text-sm text-white/80 sm:pb-0">
        <div className="stripe" aria-hidden="true" />
        <div className={`${wrap} flex flex-col justify-between gap-3 py-10 sm:flex-row`}>
          <p>© 2026 {site.name} · {site.address.street}, {site.address.city}</p>
          <p>{site.demoBanner}</p>
        </div>
      </footer>

      <a
        href={`tel:${site.phone.tel}`}
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-red px-6 py-4 font-display font-extrabold uppercase text-white shadow-[0_10px_30px_-8px_rgba(200,16,46,.7)] ${focus}`}
        aria-label={`Sună la ${site.phone.display}`}
      >
        <Icon name="phone" className="h-5 w-5" /> Sună
      </a>
    </>
  );
}
