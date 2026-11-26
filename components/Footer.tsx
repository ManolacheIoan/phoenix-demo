import Link from "next/link";
import { Camera, Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand";
import { focusRing, wrap } from "@/components/ui";
import { nav, site } from "@/content/site";
import { base } from "@/lib/paths";

export function Footer({ home = true }: { home?: boolean }) {
  const link = (href: string) => (home ? href : `${base}/${href}`);
  const linkCls = `rounded transition-colors hover:text-white ${focusRing}`;
  return (
    <footer className="on-dark bg-navy text-sm text-white/75">
      <div className="stripe !h-[5px]" aria-hidden="true" />
      <div className={`${wrap} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]`}>
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs leading-relaxed">Sala de fitness de pe Str. Mircea Vodă, din Tecuci. Cardio, forță, greutăți libere și Vitamin fitness bar.</p>
          <a href={`${link("#proba")}`} className={`mt-6 inline-flex rounded-full bg-red px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-dark ${focusRing}`}>Probă gratuită</a>
        </div>
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">Contact</p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9aa8]" aria-hidden="true" /><a href={site.google.directionsUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>{site.address.street}, {site.address.city}</a></li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9aa8]" aria-hidden="true" /><a href={`tel:${site.phone.tel}`} className={linkCls}>{site.phone.display}</a></li>
            <li className="flex gap-2.5"><Camera className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9aa8]" aria-hidden="true" /><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={linkCls}>Instagram {site.instagram.handle}</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">Program</p>
          <p className="mt-4 flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9aa8]" aria-hidden="true" /><span>Luni – Vineri: <span className="tbd">[de completat]</span><br />Weekend: <span className="tbd">[de completat]</span></span></p>
          <a href={link("#program")} className={`mt-3 inline-block font-semibold text-white underline-offset-4 hover:underline ${focusRing}`}>Programul complet</a>
        </div>
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">Navigare</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
            {nav.map((n) => <li key={n.href}><a href={link(n.href)} className={linkCls}>{n.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${wrap} flex flex-col gap-3 py-6 pb-28 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:pb-6`}>
          <p>© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/confidentialitate/" className={linkCls}>Confidențialitate</Link></li>
            <li><Link href="/cookies/" className={linkCls}>Cookies</Link></li>
            <li>{site.demoBanner}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
