import { Check, CircleCheck, Coffee, Dumbbell, HeartPulse, MapPin, Minus, Navigation, Phone, Camera, Plus, UserRound } from "lucide-react";
import { GeoPhoenix } from "@/components/brand";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { contentIcons } from "@/components/icons";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/RevealObserver";
import { TrialForm } from "@/components/TrialForm";
import { Arrow, btnNavy, btnRed, btnWhite, Photo, PhotoPlaceholder, sec, SectionHead, Stars, T, wrap } from "@/components/ui";
import { faq, hero, highlights, plans, schedule, services, site, steps, trainers } from "@/content/site";

const marquee = ["Forță", "Cardio", "Vitamin fitness bar", "Antrenament personal", "Probă gratuită", "Tecuci"];

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy focus:shadow-lg">
        Sari la conținut
      </a>
      <div className="bg-navy px-4 py-1.5 text-center text-[0.72rem] font-medium tracking-wide text-white/85">{site.demoBanner}</div>
      <Header />

      <main id="continut">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div aria-hidden="true" className="geo pointer-events-none absolute inset-0 opacity-[0.045]" />
          <div className={`${wrap} relative grid items-center gap-12 pb-14 pt-10 sm:pb-16 sm:pt-14 lg:grid-cols-[1.08fr_1fr] lg:gap-14 lg:pb-20 lg:pt-16`}>
            <div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white py-1.5 pl-1.5 pr-3.5 text-sm sm:gap-2.5 sm:pr-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="rounded-full bg-navy px-2.5 py-0.5 font-display text-xs font-black text-white">{site.google.rating}</span>
                <Stars />
                <span className="whitespace-nowrap text-[0.8rem] font-medium text-navy/75 sm:text-sm">{site.google.reviewCount} de recenzii pe Google</span>
              </a>
              <h1 className="mt-6 font-display text-[3.2rem] font-black uppercase leading-[0.9] tracking-tight text-navy sm:text-7xl lg:text-[5.2rem] 2xl:text-[6rem]">
                Sala ta<br />din <span className="relative inline-block text-red">Tecuci<span className="stripe absolute -bottom-2.5 left-0 w-full rounded-sm" aria-hidden="true" /></span>
              </h1>
              <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-navy/75">{hero.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#proba" className={btnRed}>Vino la un antrenament de probă <Arrow /></a>
                <a href="#abonamente" className={btnNavy}>Abonamente</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy/70">
                {hero.promises.map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-blue" strokeWidth={3} aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[34rem]">
              <div aria-hidden="true" className="absolute -right-3 bottom-8 top-10 w-[92%] rotate-3 overflow-hidden rounded-[2rem] bg-red">
                <div className="geo-light absolute inset-0 opacity-25" />
              </div>
              <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2rem] bg-navy shadow-[0_40px_80px_-30px_rgba(19,32,63,.6)] sm:aspect-[4/3.9]">
                <Photo id="hero" priority sizes="(min-width: 1024px) 34rem, 92vw" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <p className="font-display text-sm font-black uppercase tracking-[0.3em] text-white/85">Forță · Cardio · Energie</p>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red shadow-lg" aria-hidden="true"><GeoPhoenix className="h-10 w-10 text-white" strokeWidth={3.2} /></span>
                </div>
              </div>
              <div aria-hidden="true" className="floaty absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl bg-white p-2.5 pr-5 shadow-xl sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-red text-white"><HeartPulse className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Cardio</span>
              </div>
              <div aria-hidden="true" className="floaty absolute -right-4 top-[40%] hidden items-center gap-3 rounded-2xl bg-white p-2.5 pr-5 shadow-xl [animation-delay:1.2s] sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue text-white"><Dumbbell className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Forță</span>
              </div>
              <div aria-hidden="true" className="floaty absolute -left-3 bottom-24 hidden items-center gap-3 rounded-2xl bg-white p-2.5 pr-5 shadow-xl [animation-delay:2.4s] sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0f2a1a] text-neon"><Coffee className="h-5 w-5" /></span>
                <span className="font-display text-sm font-extrabold uppercase text-navy">Vitamin bar</span>
              </div>
            </div>
          </div>
        </section>

        {/* BANDĂ */}
        <div className="overflow-hidden border-y-4 border-red bg-navy py-3.5" aria-hidden="true">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-black uppercase tracking-wider text-white">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10">{m}<GeoPhoenix className="h-5 w-5 text-red" strokeWidth={4} /></span>
            ))}
          </div>
        </div>

        {/* DE CE */}
        <section className={`bg-white ${sec}`}>
          <div className={wrap}>
            <SectionHead kicker="De ce Phoenix" title={<>Tot ce-ți trebuie, <span className="text-blue">sub un acoperiș</span></>} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, i) => {
                const Icon = contentIcons[h.icon];
                return (
                  <article key={h.title} className="reveal group rounded-2xl border border-navy/10 bg-paper p-6 transition duration-500 ease-out-soft hover:-translate-y-1 hover:border-navy/20 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(19,32,63,.35)]" style={{ transitionDelay: `${i * 40}ms` }}>
                    <span className={`grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 ${["bg-red text-white", "bg-blue text-white", "bg-[#0f2a1a] text-neon", "bg-navy text-white"][i]}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="mt-5 font-display text-lg font-black uppercase text-navy">{h.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-navy/70"><T>{h.text}</T></p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABONAMENTE */}
        <section id="abonamente" className={`floor ${sec}`}>
          <div className={wrap}>
            <SectionHead center kicker="Abonamente" title="Alege cum te antrenezi" intro="Nu știi ce să alegi? Începe cu proba gratuită și decizi după." />
            <div className="mx-auto grid max-w-xl gap-5 lg:max-w-none lg:grid-cols-3 lg:items-center">
              {plans.map((p) => (
                <article key={p.name} className={`reveal relative flex flex-col overflow-hidden rounded-3xl p-7 transition duration-500 ease-out-soft hover:-translate-y-1 ${p.featured ? "on-dark bg-navy text-white shadow-[0_30px_60px_-20px_rgba(19,32,63,.6)] lg:py-10" : "bg-white text-navy shadow-[0_16px_40px_-24px_rgba(19,32,63,.4)]"}`}>
                  <div className="stripe absolute inset-x-0 top-0" aria-hidden="true" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-black uppercase">{p.name}</h3>
                    {p.featured && <span className="rounded-full bg-red px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-white">Cel mai avantajos</span>}
                  </div>
                  <p className="mt-5 flex flex-wrap items-baseline gap-2 border-b border-current/10 pb-5">
                    <span className="font-display text-2xl font-black"><T>{p.price}</T></span>
                    <span className={`text-sm font-semibold ${p.featured ? "text-white/70" : "text-navy/70"}`}>{p.period}</span>
                  </p>
                  <ul className={`mt-5 flex-1 space-y-3 text-[0.95rem] ${p.featured ? "text-white/90" : "text-navy/80"}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5"><Check className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "text-[#8fb0ff]" : "text-blue"}`} strokeWidth={2.5} aria-hidden="true" /><span><T>{f}</T></span></li>
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
          <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-14`}>
            <div>
              <SectionHead kicker="Program" title="Când ne găsești" />
              <table className="reveal w-full overflow-hidden rounded-2xl text-left text-[0.95rem] ring-1 ring-navy/10">
                <caption className="sr-only">Programul sălii pe zile</caption>
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr><th scope="col" className="px-5 py-3">Zi</th><th scope="col" className="px-5 py-3 text-right">Orar</th></tr>
                </thead>
                <tbody>
                  {schedule.map((s) => (
                    <tr key={s.day} className="border-t border-navy/10 transition-colors even:bg-paper hover:bg-blue/[0.04]">
                      <th scope="row" className="px-5 py-3 font-bold text-navy">{s.day}</th>
                      <td className="px-5 py-3 text-right"><T>{s.hours}</T></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <SectionHead kicker="Cum începi" title="Trei pași până la primul antrenament" />
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s.title} className="reveal flex gap-5 rounded-2xl border border-navy/10 p-5 transition duration-500 ease-out-soft hover:border-navy/25 hover:shadow-[0_16px_40px_-24px_rgba(19,32,63,.35)]">
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
        <section id="clase" className={`on-dark grain relative overflow-hidden bg-navy ${sec}`}>
          <div aria-hidden="true" className="geo-light pointer-events-none absolute inset-0 opacity-[0.07]" />
          <div className={`${wrap} relative`}>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <SectionHead light kicker="Clase și servicii" title={<><span className="whitespace-nowrap">Antrenează-te</span> cum îți place</>} intro="Vii singur, cu un prieten sau cu antrenor. Îți arătăm totul la proba gratuită." />
              <a href="#proba" className={`${btnRed} mb-9 hidden shrink-0 lg:inline-flex`}>Încearcă gratuit <Arrow /></a>
            </div>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.6fr]">
              <div className="reveal relative hidden overflow-hidden rounded-3xl lg:block">
                <Photo id="cardio" sizes="34vw" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 rounded-lg bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-navy">Foto ilustrativă</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((s, i) => {
                  const Icon = contentIcons[s.icon];
                  return (
                    <article key={s.title} className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition duration-500 ease-out-soft hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] lg:p-7">
                      <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${i % 2 ? "bg-blue" : "bg-red"}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                      <h3 className="mt-5 font-display text-lg font-black uppercase text-white">{s.title}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/75"><T>{s.text}</T></p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ANTRENORI */}
        <section id="antrenori" className={`bg-white ${sec}`}>
          <div className={wrap}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHead kicker="Echipa" title="Antrenorii tăi" intro="Oameni care îți corectează tehnica și te țin motivat." />
              <a href="#proba" className={`${btnNavy} mb-9 hidden shrink-0 sm:inline-flex`}>Cere un antrenor <Arrow /></a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {trainers.map((t, i) => (
                <article key={i} className="reveal group overflow-hidden rounded-3xl bg-paper ring-1 ring-navy/10 transition duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(19,32,63,.4)]">
                  <div className="aspect-[4/4.3]"><PhotoPlaceholder icon={UserRound} /></div>
                  <div className="stripe" aria-hidden="true" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-black uppercase"><T>{t.name}</T></h3>
                    <p className="mt-1 text-sm text-navy/70">Specializare: <T>{t.role}</T></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className={`floor ${sec}`}>
          <div className={wrap}>
            <SectionHead kicker="Galerie" title="Uită-te prin sală" />
            <Gallery />
          </div>
        </section>

        {/* FORMULAR */}
        <section id="proba" className={`on-dark relative overflow-hidden bg-navy ${sec}`}>
          <div aria-hidden="true" className="absolute inset-0">
            <Photo id="industrial" sizes="100vw" className="opacity-40" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,#13203f_25%,rgba(19,32,63,.88)_55%,rgba(30,79,216,.7)_100%)]" />
          </div>
          <GeoPhoenix className="pointer-events-none absolute -right-16 -top-10 h-[28rem] w-[28rem] text-white/[0.06]" />
          <div className={`${wrap} relative grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-14`}>
            <div>
              <SectionHead light kicker="100% gratuit" title="Primul antrenament e din partea noastră" intro="Lasă-ne numele și numărul. Te sunăm, stabilim ora și îți arătăm sala. Fără card, fără obligații." />
              <ul className="reveal -mt-2 space-y-2.5 text-white">
                {["Tur complet al sălii", "Program potrivit obiectivului tău", "Decizi abia după, fără presiune"].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-semibold"><CircleCheck className="h-5 w-5 text-neon" aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="reveal"><TrialForm /></div>
          </div>
        </section>

        {/* ÎNTREBĂRI */}
        <section className={`bg-white ${sec}`}>
          <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14`}>
            <div>
              <SectionHead kicker="Întrebări" title="Înainte să vii" intro="Nu găsești răspunsul? Sună-ne, îți răspundem pe loc." />
              <a href={`tel:${site.phone.tel}`} className={`${btnNavy} -mt-3`}><Phone className="h-4 w-4" aria-hidden="true" />{site.phone.display}</a>
            </div>
            <div className="reveal divide-y divide-navy/10 overflow-hidden rounded-2xl ring-1 ring-navy/10">
              {faq.map((f) => (
                <details key={f.q} className="group px-6 py-4 transition-colors open:bg-paper hover:bg-paper/60">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded font-display font-extrabold text-navy focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue">
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-red group-open:hidden" aria-hidden="true" />
                    <Minus className="hidden h-5 w-5 shrink-0 text-red group-open:block" aria-hidden="true" />
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
            <div className="reveal grain relative mb-8 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:p-10">
              <div className="absolute inset-y-0 left-0 w-2 bg-red" aria-hidden="true" />
              <div className="flex items-center gap-5">
                <span className="font-display text-6xl font-black leading-none">{site.google.rating}</span>
                <span>
                  <Stars className="h-5 w-5" />
                  <span className="mt-1 block font-semibold text-white/85">din {site.google.reviewCount} de recenzii pe Google</span>
                </span>
              </div>
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className={`${btnWhite} w-full !px-5 sm:w-auto`}><span className="sm:hidden">Recenziile pe Google</span><span className="hidden sm:inline">Vezi recenziile pe Google</span> <Arrow /></a>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="reveal flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/10 sm:p-8">
                <SectionHead kicker="Contact" title="Te așteptăm" className="!mb-7" />
                <ul className="space-y-5">
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red/10 text-red"><MapPin className="h-5 w-5" aria-hidden="true" /></span><span className="font-semibold text-navy">{site.address.street}<br /><span className="font-normal text-navy/70">{site.address.city}, jud. {site.address.county}</span></span></li>
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue"><Phone className="h-5 w-5" aria-hidden="true" /></span><a href={`tel:${site.phone.tel}`} className="self-center font-display text-xl font-black text-navy transition-colors hover:text-red">{site.phone.display}</a></li>
                  <li className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/10 text-navy"><Camera className="h-5 w-5" aria-hidden="true" /></span><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="self-center font-semibold text-navy transition-colors hover:text-red">Instagram {site.instagram.handle}</a></li>
                </ul>
                <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
                  <a href={`tel:${site.phone.tel}`} className={btnRed}><Phone className="h-4 w-4" aria-hidden="true" />Sună acum</a>
                  <a href={site.google.directionsUrl} target="_blank" rel="noopener noreferrer" className={btnNavy}><Navigation className="h-4 w-4" aria-hidden="true" />Indicații</a>
                </div>
              </div>
              <div className="reveal relative min-h-80 overflow-hidden rounded-3xl bg-navy ring-1 ring-navy/10">
                <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                  <div className="geo-light absolute inset-0 opacity-10" />
                  <span className="relative flex flex-col items-center gap-2 text-white/70"><MapPin className="h-8 w-8" />Se încarcă harta…</span>
                </div>
                <iframe
                  title={`Hartă: ${site.name}, ${site.address.street}, ${site.address.city}`}
                  src={site.google.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative h-full min-h-80 w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBar />
    </>
  );
}
