import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GeoPhoenix } from "@/components/brand";
import { site } from "@/content/site";

export const metadata = { title: "Pagina nu există" };

export default function NotFound() {
  return (
    <main className="grain relative grid min-h-dvh place-items-center overflow-hidden bg-navy px-6 text-center text-white">
      <GeoPhoenix className="pointer-events-none absolute h-[36rem] w-[36rem] text-white/[0.05]" />
      <div className="relative">
        <p className="font-display text-8xl font-black text-red">404</p>
        <h1 className="mt-4 font-display text-3xl font-black uppercase">Pagina nu există</h1>
        <p className="mt-3 text-white/80">Linkul e greșit sau pagina a fost mutată. Hai înapoi la sală.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 font-display font-extrabold uppercase text-white transition hover:bg-red-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />Prima pagină
        </Link>
        <p className="mt-6 text-sm text-white/70">{site.name} · <a href={`tel:${site.phone.tel}`} className="underline">{site.phone.display}</a></p>
      </div>
    </main>
  );
}
