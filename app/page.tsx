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

function SectionHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="reveal mb-10 max-w-2xl">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ember">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-white/75">{intro}</p>}
    </div>
  );
}

const wrap = "mx-auto max-w-6xl px-5";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-3.5 font-display font-extrabold uppercase tracking-wide transition hover:bg-white hover:text-ink";
const btnFire =
  "btn-fire inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display font-extrabold uppercase tracking-wide transition hover:brightness-110";

function Flame({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fl" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e8341c" />
          <stop offset="1" stopColor="#ff8a3d" />
        </linearGradient>
      </defs>
      <path fill="url(#fl)" d="M16 2c1 5 6 7 6 13a6 6 0 0 1-2 4.5c.3-2.5-1-4.5-3-5.5.5 3-1.5 4-3 5a3.5 3.5 0 0 0 1 6.9A9.5 9.5 0 0 1 6.5 17C6.5 10 13 8 16 2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Sari la conținut
      </a>

      <div className="bg-ember px-4 py-2 text-center text-sm font-semibold text-ink">{site.demoBanner}</div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-black uppercase tracking-wide">
            <Flame className="h-8 w-8" />
            Fitness <span className="fire-text">Phoenix</span>
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-6 text-sm font-semibold">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-ember">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${site.phone.tel}`} className="hidden font-display font-bold text-ember sm:block">{site.phone.display}</a>
        </div>
      </header>

      <main id="continut">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="glow pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,#ff5a1f_0%,transparent_65%)] opacity-60 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,#e8341c_0%,transparent_65%)] opacity-30 blur-2xl" />
          <div className={`${wrap} relative py-20 sm:py-32`}>
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-ember">{site.address.street} · {site.address.city}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
              Sala ta <br />din <span className="fire-text">Tecuci</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{site.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#abonamente" className={btnGhost}>Abonamente</a>
              <a href="#proba" className={btnFire}>Vino la un antrenament de probă</a>
            </div>
            <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-white/85 hover:text-white">
              <Icon name="star" className="h-5 w-5 fill-ember text-ember" />
              <span><strong className="text-white">{site.google.rating}</strong> din {site.google.reviewCount} de recenzii pe Google</span>
            </a>
          </div>
        </section>

        {/* ABONAMENTE */}
        <section id="abonamente" className="py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Abonamente" title="Alege-ți abonamentul" intro="Prețurile finale se stabilesc cu sala. Întreabă la recepție de oferte pentru prima lună." />
            <div className="grid items-center gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`reveal relative rounded-2xl border p-8 ${p.featured ? "border-flame bg-gradient-to-b from-ash to-coal shadow-[0_0_60px_-15px_#ff5a1f] md:scale-105 md:py-12" : "border-white/10 bg-coal"}`}
                >
                  {p.featured && (
                    <p className="btn-fire absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-wider">Recomandat</p>
                  )}
                  <h3 className="font-display text-2xl font-extrabold uppercase">{p.name}</h3>
                  <p className="mt-4 font-display text-3xl font-black"><span className="tbd">{p.price}</span> <span className="text-base font-semibold text-white/70">{p.period}</span></p>
                  <ul className="mt-6 space-y-3 text-white/85">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-flame" aria-hidden="true" /><span><T>{f}</T></span></li>
                    ))}
                  </ul>
                  <a href="#proba" className={`mt-8 w-full ${p.featured ? btnFire : btnGhost}`}>Începe cu o probă</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" className="border-y border-white/10 bg-coal py-20 sm:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-2 md:items-start`}>
            <SectionHead kicker="Program" title="Când e deschisă sala" intro="Orarul complet, inclusiv zilele de sărbătoare, va fi afișat aici." />
            <table className="reveal w-full overflow-hidden rounded-2xl border border-white/10 text-left">
              <caption className="sr-only">Programul sălii pe zile</caption>
              <thead className="bg-ash text-sm uppercase tracking-wider text-ember">
                <tr><th scope="col" className="px-5 py-3">Zi</th><th scope="col" className="px-5 py-3">Orar</th></tr>
              </thead>
              <tbody>
                {schedule.map((s) => (
                  <tr key={s.day} className="border-t border-white/10">
                    <th scope="row" className="px-5 py-3.5 font-semibold">{s.day}</th>
                    <td className="px-5 py-3.5"><T>{s.hours}</T></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CLASE */}
        <section id="clase" className="py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Clase și servicii" title="Ce poți face la Phoenix" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.title} className="reveal group rounded-2xl border border-white/10 bg-coal p-7 transition hover:-translate-y-1 hover:border-flame/60">
                  <div className="btn-fire grid h-12 w-12 place-items-center rounded-xl"><Icon name={s.icon} /></div>
                  <h3 className="mt-5 font-display text-xl font-extrabold uppercase">{s.title}</h3>
                  <p className="mt-2 text-white/75"><T>{s.text}</T></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ANTRENORI */}
        <section id="antrenori" className="border-y border-white/10 bg-coal py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Echipa" title="Antrenori" intro="Numele, fotografiile și specializările antrenorilor vor fi adăugate împreună cu sala." />
            <div className="grid gap-6 sm:grid-cols-3">
              {trainers.map((t, i) => (
                <article key={i} className="reveal overflow-hidden rounded-2xl border border-white/10 bg-ink">
                  <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-ash to-ink text-white/30">
                    <Icon name="user" className="h-20 w-20" />
                    <span className="sr-only">Fotografie antrenor — de adăugat</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-extrabold uppercase"><span className="tbd">{t.name}</span></h3>
                    <p className="text-white/70">Specializare: <span className="tbd">{t.role}</span></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead kicker="Galerie" title="Sala" intro="Aici vor apărea fotografii reale din sală. Până atunci, locurile sunt rezervate." />
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {gallery.map((g, i) => (
                <li
                  key={g}
                  className={`reveal relative flex items-end overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#241d18,#0d0b0a)] p-4 ${i === 0 ? "col-span-2 row-span-2 min-h-72 md:min-h-96" : "min-h-40"}`}
                >
                  <Icon name="camera" className="absolute right-4 top-4 h-6 w-6 text-white/30" />
                  <p className="text-sm font-semibold text-white/80">{g} <span className="tbd">— foto {TBD}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMULAR */}
        <section id="proba" className="relative overflow-hidden border-y border-flame/30 bg-gradient-to-b from-[#2a130a] to-ink py-20 sm:py-28">
          <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center`}>
            <SectionHead kicker="Gratuit" title="Antrenament de probă gratuit" intro="Lasă-ne numele și telefonul. Îți arătăm sala, aparatele și cum ar arăta un antrenament pentru obiectivul tău." />
            <div className="reveal"><TrialForm /></div>
          </div>
        </section>

        {/* RECENZII + CONTACT */}
        <section id="contact" className="py-20 sm:py-28">
          <div className={wrap}>
            <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-coal p-8 sm:flex-row sm:items-center">
              <div>
                <p className="flex items-center gap-1 text-ember" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className="h-6 w-6 fill-ember" />)}
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold">{site.google.rating} din 5 · {site.google.reviewCount} de recenzii pe Google</p>
              </div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={btnFire}>Vezi recenziile pe Google</a>
            </div>

            <SectionHead kicker="Contact" title="Te așteptăm" />
            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="reveal space-y-6 text-lg">
                <li className="flex gap-4"><Icon name="pin" className="h-7 w-7 shrink-0 text-ember" /><span>{site.address.street}<br />{site.address.city}, jud. {site.address.county}</span></li>
                <li className="flex gap-4"><Icon name="phone" className="h-7 w-7 shrink-0 text-ember" /><a href={`tel:${site.phone.tel}`} className="font-semibold hover:text-ember">{site.phone.display}</a></li>
                <li className="flex gap-4"><Icon name="camera" className="h-7 w-7 shrink-0 text-ember" /><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-ember">Instagram {site.instagram.handle}</a></li>
              </ul>
              <iframe
                title={`Hartă: ${site.name}, ${site.address.street}, ${site.address.city}`}
                src={site.google.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="reveal h-80 w-full rounded-2xl border border-white/10 grayscale-[30%]"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 pb-28 pt-10 text-sm text-white/70 sm:pb-10">
        <div className={`${wrap} flex flex-col justify-between gap-3 sm:flex-row`}>
          <p>© 2026 {site.name} · {site.address.street}, {site.address.city}</p>
          <p>{site.demoBanner}</p>
        </div>
      </footer>

      <a
        href={`tel:${site.phone.tel}`}
        className="btn-fire fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-6 py-4 font-display font-extrabold uppercase shadow-[0_10px_40px_-10px_#ff5a1f] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={`Sună la ${site.phone.display}`}
      >
        <Icon name="phone" className="h-5 w-5" /> Sună
      </a>
    </>
  );
}
