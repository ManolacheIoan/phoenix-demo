import { RevealObserver, TrialForm } from "@/components/client";
import { faq, gallery, highlights, nav, plans, schedule, services, site, steps, TBD, trainers } from "@/content/site";

const icons: Record<string, React.ReactNode> = {
  dumbbell: <path d="M6 9v6M18 9v6M3 10.5v3M21 10.5v3M6 12h12" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a6 6 0 0 1 4 6.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
  camera: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  cup: <path d="M5 8h12v5a6 6 0 0 1-12 0Zm12 2h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3" />,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  run: <><circle cx="15" cy="4.5" r="2" /><path d="m6 20 3.5-5 3 2 2-5.5L18 13M9.5 9.5 12 7l3 2" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
};
const hlIcons = ["run", "dumbbell", "cup", "lock"];

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function T({ children }: { children: string }) {
  const parts = children.split(TBD);
  return <>{parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 && <span className="tbd">{TBD}</span>}</span>)}</>;
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className={`${className} fill-[#f5b301] text-[#f5b301]`} />)}
    </span>
  );
}

/** Phoenix low-poly din linii, ca inima geometrică de pe peretele sălii. */
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

/** Ciob low-poly: un triunghi plin și unul din linii, ca desenele de pe tejgheaua barului. */
function Shard({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 34 16" className="h-4 w-[34px]" aria-hidden="true">
      <path d="M1 15 9 1l7 14Z" fill={light ? "#fff" : "#c8102e"} />
      <path d="M9 1 33 9 16 15M33 9 27 1" fill="none" stroke={light ? "rgba(255,255,255,.7)" : "#13203f"} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Head({ k, title, intro, light, center }: { k: string; title: React.ReactNode; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`reveal mb-9 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-white/80" : "text-red"}`}>
        <Shard light={light} />
        {k}
      </p>
      <h2 className={`mt-3 font-display text-[2rem] font-black uppercase leading-[1.05] tracking-tight sm:text-[2.75rem] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-3 text-[1.0625rem] leading-relaxed ${light ? "text-white/80" : "text-navy/70"}`}>{intro}</p>}
    </div>
  );
}

const wrap = "mx-auto max-w-6xl px-5 sm:px-8";
const sec = "py-16 sm:py-20";
const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue";
const btn = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-[0.95rem] font-extrabold uppercase tracking-wide transition duration-200 ${focus}`;
const btnRed = `${btn} bg-red text-white shadow-[0_10px_24px_-10px_rgba(200,16,46,.8)] hover:-translate-y-0.5 hover:bg-[#a50d26]`;
const btnNavy = `${btn} border-2 border-navy/15 bg-white text-navy hover:border-navy`;
const btnWhite = `${btn} bg-white text-navy hover:-translate-y-0.5`;
const Arrow = () => <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />;

export default function Home() {
  const marquee = ["Forță", "Cardio", "Vitamin fitness bar", "Antrenament personal", "Probă gratuită", "Tecuci"];
  return (
    <>
      <RevealObserver />
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy">Sari la conținut</a>

      <div className="bg-navy px-4 py-1.5 text-center text-xs font-medium tracking-wide text-white/85">{site.demoBanner}</div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur-md">
        <div className={`${wrap} flex h-[68px] items-center justify-between gap-6`}>
          <a href="#" className={`flex items-center gap-2.5 ${focus}`} aria-label="Fitness Phoenix — începutul paginii">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy"><GeoPhoenix className="h-7 w-7 text-white" /></span>
            <span className="font-display leading-none">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-red">Fitness</span>
              <span className="block text-xl font-black uppercase tracking-tight text-navy">Phoenix</span>
            </span>
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-7 text-[0.8rem] font-bold uppercase tracking-wider text-navy/80">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="transition hover:text-red">{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.phone.tel}`} className="hidden font-display text-sm font-extrabold text-navy hover:text-red md:block">{site.phone.display}</a>
            <a href="#proba" className={`${btnRed} !px-5 !py-2.5 !text-xs max-[380px]:!hidden`}>Probă gratuită</a>
          </div>
        </div>
        <div className="stripe !h-[5px]" aria-hidden="true" />
      </header>

      <main id="continut">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.05]" />
          <div className={`${wrap} relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:py-20`}>
            <div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white py-1.5 pl-2 pr-4 text-sm shadow-sm transition hover:shadow-md">
                <span className="rounded-full bg-navy px-2 py-0.5 font-display text-xs font-black text-white">{site.google.rating}</span>
                <Stars />
                <span className="font-medium text-navy/75">{site.google.reviewCount} de recenzii pe Google</span>
              </a>
              <h1 className="mt-6 font-display text-[3.1rem] font-black uppercase leading-[0.92] tracking-tight text-navy sm:text-7xl lg:text-[5.4rem]">
                Sala ta<br />din <span className="relative text-red">Tecuci<span className="stripe absolute -bottom-2 left-0 !h-[7px] w-full rounded-sm" aria-hidden="true" /></span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-navy/75">
                Zonă de cardio, aparate de forță, greutăți libere și un fitness bar unde îți termini antrenamentul cu un shake. Totul pe {site.address.street}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#proba" className={btnRed}>Vino la un antrenament de probă <Arrow /></a>
                <a href="#abonamente" className={btnNavy}>Abonamente</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy/70">
                {["Prima ședință gratuită", "Fără obligații", "Te sunăm noi"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-blue" />{t}</li>
                ))}
              </ul>
            </div>

            {/* compoziție */}
            <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[26rem]" aria-hidden="true">
              <div className="absolute -right-3 bottom-6 top-10 w-[92%] -rotate-3 overflow-hidden rounded-[2rem] bg-red"><div className="geo absolute inset-0 opacity-25 invert" /></div>
              <div className="grain absolute inset-0 overflow-hidden rounded-[2rem] bg-navy shadow-[0_30px_60px_-20px_rgba(19,32,63,.55)]">
                <div className="geo absolute inset-0 opacity-[0.14] invert" />
                <GeoPhoenix className="absolute left-1/2 top-[46%] h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 text-white" />
                <p className="absolute inset-x-0 bottom-7 text-center font-display text-sm font-black uppercase tracking-[0.4em] text-white/60">Forță · Cardio · Energie</p>
              </div>
              <div className="floaty absolute -left-5 top-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-red text-white"><Icon name="run" className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Cardio</span>
              </div>
              <div className="floaty absolute -right-4 top-[45%] flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl [animation-delay:1.2s]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue text-white"><Icon name="dumbbell" className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Forță</span>
              </div>
              <div className="floaty absolute -left-3 bottom-16 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl [animation-delay:2.4s]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0f2a1a] text-neon"><Icon name="cup" className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Vitamin bar</span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y-4 border-red bg-navy py-3.5" aria-hidden="true">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-black uppercase tracking-wider text-white">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10">{m}<span className="h-2 w-2 rotate-45 bg-red" /></span>
            ))}
          </div>
        </div>

        {/* DE CE */}
        <section className={`bg-white ${sec}`}>
          <div className={wrap}>
            <Head k="De ce Phoenix" title={<>Tot ce-ți trebuie, <span className="text-blue">sub un acoperiș</span></>} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, i) => (
                <article key={h.title} className="reveal group rounded-2xl border border-navy/10 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${["bg-red", "bg-blue", "bg-[#0f2a1a] !text-neon", "bg-navy"][i]}`}><Icon name={hlIcons[i]} className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-display text-lg font-black uppercase text-navy">{h.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-navy/70"><T>{h.text}</T></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABONAMENTE */}
        <section id="abonamente" className={`floor ${sec}`}>
          <div className={wrap}>
            <Head center k="Abonamente" title="Alege cum te antrenezi" intro="Nu știi ce să alegi? Începe cu proba gratuită și decizi după." />
            <div className="grid items-stretch gap-5 md:grid-cols-3 md:items-center">
              {plans.map((p) => (
                <article key={p.name} className={`reveal relative flex flex-col overflow-hidden rounded-3xl p-7 ${p.featured ? "bg-navy text-white shadow-[0_30px_60px_-20px_rgba(19,32,63,.6)] md:py-10" : "bg-white text-navy shadow-lg"}`}>
                  <div className="stripe absolute inset-x-0 top-0 !h-[6px]" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-black uppercase">{p.name}</h3>
                    {p.featured && <span className="rounded-full bg-red px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-white">Cel mai avantajos</span>}
                  </div>
                  <p className="mt-5 flex items-baseline gap-2 border-b border-current/10 pb-5">
                    <span className={`font-display text-3xl font-black italic ${p.featured ? "text-[#ff9aa8]" : "text-red"}`}>{p.price}</span>
                    <span className={`text-sm font-semibold ${p.featured ? "text-white/70" : "text-navy/60"}`}>{p.period}</span>
                  </p>
                  <ul className={`mt-5 flex-1 space-y-3 text-[0.95rem] ${p.featured ? "text-white/90 [&_.tbd]:text-[#ff9aa8]" : "text-navy/80"}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5"><Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "text-[#8fb0ff]" : "text-blue"}`} /><span><T>{f}</T></span></li>
                    ))}
                  </ul>
                  <a href="#proba" className={`mt-7 w-full ${p.featured ? btnRed : btnNavy}`}>Începe cu o probă <Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM + PAȘI */}
        <section id="program" className={`bg-white ${sec}`}>
          <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
            <div>
              <Head k="Program" title="Când ne găsești" />
              <table className="reveal w-full overflow-hidden rounded-2xl text-left text-[0.95rem] ring-1 ring-navy/10">
                <caption className="sr-only">Programul sălii pe zile</caption>
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr><th scope="col" className="px-5 py-3">Zi</th><th scope="col" className="px-5 py-3 text-right">Orar</th></tr>
                </thead>
                <tbody>
                  {schedule.map((s) => (
                    <tr key={s.day} className="border-t border-navy/10 even:bg-paper">
                      <th scope="row" className="px-5 py-3 font-bold text-navy">{s.day}</th>
                      <td className="px-5 py-3 text-right"><T>{s.hours}</T></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Head k="Cum începi" title="Trei pași până la primul antrenament" />
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s.title} className="reveal flex gap-5 rounded-2xl border border-navy/10 p-5">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-xl font-black text-white ${["bg-blue", "bg-navy", "bg-red"][i]}`}>{i + 1}</span>
                    <span>
                      <span className="block font-display font-black uppercase text-navy">{s.title}</span>
                      <span className="mt-0.5 block text-navy/70">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <a href="#proba" className={`${btnRed} mt-5 w-full sm:w-auto`}>Fac primul pas <Arrow /></a>
            </div>
          </div>
        </section>

        {/* CLASE */}
        <section id="clase" className={`grain relative overflow-hidden bg-navy ${sec}`}>
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.1] invert" />
          <div className={`${wrap} relative`}>
            <Head light k="Clase și servicii" title="Antrenează-te cum îți place" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article key={s.title} className="reveal rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1] [&_.tbd]:text-[#ff9aa8]">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${i % 2 ? "bg-blue" : "bg-red"}`}><Icon name={s.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-display text-lg font-black uppercase text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/75"><T>{s.text}</T></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ANTRENORI */}
        <section id="antrenori" className={`bg-white ${sec}`}>
          <div className={wrap}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <Head k="Echipa" title="Antrenorii tăi" intro="Oameni care îți corectează tehnica și te țin motivat." />
              <a href="#proba" className={`${btnNavy} mb-9 hidden sm:inline-flex`}>Cere un antrenor <Arrow /></a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {trainers.map((t, i) => (
                <article key={i} className="reveal group overflow-hidden rounded-3xl bg-paper ring-1 ring-navy/10">
                  <div className="relative grid aspect-[4/4.2] place-items-center overflow-hidden bg-gradient-to-b from-[#e7eaf1] to-paper">
                    <div aria-hidden="true" className="geo absolute inset-0 opacity-[0.08] [background-size:200px]" />
                    <Icon name="user" className="relative h-20 w-20 text-navy/25" />
                    <span className="sr-only">Fotografie antrenor — de adăugat</span>
                  </div>
                  <div className="stripe !h-[5px]" aria-hidden="true" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-black uppercase"><span className="tbd">{t.name}</span></h3>
                    <p className="text-sm text-navy/70">Specializare: <span className="tbd">{t.role}</span></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className={`floor ${sec}`}>
          <div className={wrap}>
            <Head k="Galerie" title="Uită-te prin sală" />
            <ul className="grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-4">
              {gallery.map((g, i) => (
                <li key={g} className={`reveal group relative overflow-hidden rounded-2xl bg-white shadow-md ${["col-span-2 row-span-2", "", "", "col-span-2", "col-span-2", "col-span-2"][i]}`}>
                  <div aria-hidden="true" className="geo absolute inset-0 opacity-[0.1] transition duration-500 group-hover:scale-110" />
                  <Icon name="camera" className="absolute right-4 top-4 h-5 w-5 text-navy/30" />
                  <p className="absolute bottom-3 left-3 rounded-lg bg-navy px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">{g}</p>
                  <p className="absolute left-4 top-4 text-xs"><span className="tbd">foto {TBD}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMULAR */}
        <section id="proba" className={`grain relative overflow-hidden bg-blue ${sec}`}>
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.12] invert" />
          <GeoPhoenix className="pointer-events-none absolute -right-20 -top-10 h-[30rem] w-[30rem] text-white/[0.08]" />
          <div className={`${wrap} relative grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center`}>
            <div>
              <Head light k="100% gratuit" title="Primul antrenament e din partea noastră" intro="Lasă-ne numele și numărul. Te sunăm, stabilim ora și îți arătăm sala. Fără card, fără obligații." />
              <ul className="reveal -mt-3 space-y-2.5 text-white">
                {["Tur complet al sălii", "Program adaptat obiectivului tău", "Decizi abia după, fără presiune"].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-blue"><Icon name="check" className="h-4 w-4" /></span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="reveal"><TrialForm /></div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`bg-white ${sec}`}>
          <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr]`}>
            <Head k="Întrebări" title="Înainte să vii" intro="Nu găsești răspunsul? Sună-ne, răspundem pe loc." />
            <div className="reveal divide-y divide-navy/10 rounded-2xl ring-1 ring-navy/10">
              {faq.map((f) => (
                <details key={f.q} className="group px-6 py-4 open:bg-paper">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-extrabold text-navy">
                    {f.q}
                    <Icon name="plus" className="h-5 w-5 shrink-0 text-red transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-2 text-navy/75"><T>{f.a}</T></p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`bg-paper ${sec}`}>
          <div className={wrap}>
            <div className="reveal grain relative mb-10 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:p-10">
              <div className="absolute inset-y-0 left-0 w-2 bg-red" aria-hidden="true" />
              <div className="flex items-center gap-5">
                <span className="font-display text-6xl font-black leading-none">{site.google.rating}</span>
                <span>
                  <Stars className="h-5 w-5" />
                  <span className="mt-1 block font-semibold text-white/85">din {site.google.reviewCount} de recenzii pe Google</span>
                </span>
              </div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={btnWhite}>Citește recenziile <Arrow /></a>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="reveal flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/10">
                <Head k="Contact" title="Te așteptăm" />
                <ul className="-mt-2 space-y-5">
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red/10 text-red"><Icon name="pin" className="h-5 w-5" /></span><span className="font-semibold text-navy">{site.address.street}<br /><span className="font-normal text-navy/70">{site.address.city}, jud. {site.address.county}</span></span></li>
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue"><Icon name="phone" className="h-5 w-5" /></span><a href={`tel:${site.phone.tel}`} className="self-center font-display text-xl font-black text-navy hover:text-red">{site.phone.display}</a></li>
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/10 text-navy"><Icon name="camera" className="h-5 w-5" /></span><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="self-center font-semibold text-navy hover:text-red">{site.instagram.handle}</a></li>
                </ul>
                <a href={`tel:${site.phone.tel}`} className={`${btnRed} mt-7 w-full`}><Icon name="phone" className="h-4 w-4" /> Sună acum</a>
              </div>
              <iframe
                title={`Hartă: ${site.name}, ${site.address.street}, ${site.address.city}`}
                src={site.google.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="reveal h-full min-h-80 w-full rounded-3xl ring-1 ring-navy/10"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-sm text-white/75">
        <div className="stripe !h-[5px]" aria-hidden="true" />
        <div className={`${wrap} flex flex-col items-center justify-between gap-5 py-9 pb-28 sm:flex-row sm:pb-9`}>
          <div className="flex items-center gap-3">
            <GeoPhoenix className="h-8 w-8 text-white" />
            <p>© 2026 {site.name} · {site.address.street}, {site.address.city}</p>
          </div>
          <p className="text-white/60">{site.demoBanner}</p>
        </div>
      </footer>

      {/* Bară fixă mobil + buton Sună */}
      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-full bg-white/95 p-1.5 shadow-[0_10px_40px_-10px_rgba(19,32,63,.5)] ring-1 ring-navy/10 backdrop-blur sm:hidden">
        <a href={`tel:${site.phone.tel}`} className={`${btn} flex-1 !px-4 !py-3 bg-navy text-white`} aria-label={`Sună la ${site.phone.display}`}><Icon name="phone" className="h-4 w-4" /> Sună</a>
        <a href="#proba" className={`${btn} flex-[1.4] !px-4 !py-3 bg-red text-white`}>Probă gratuită</a>
      </div>
      <a href={`tel:${site.phone.tel}`} className={`${btnRed} fixed bottom-6 right-6 z-50 !px-6 !py-4 max-sm:!hidden`} aria-label={`Sună la ${site.phone.display}`}>
        <Icon name="phone" className="h-5 w-5" /> Sună
      </a>
    </>
  );
}
