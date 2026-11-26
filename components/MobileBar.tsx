import { CalendarCheck, Phone } from "lucide-react";
import { focusRing } from "@/components/ui";
import { site } from "@/content/site";

/** Pe mobil: bară fixă jos cu „Sună” și acțiunea principală. Pe ecrane mari: buton „Sună” plutitor. */
export function MobileBar({ home = true }: { home?: boolean }) {
  const proba = home ? "#proba" : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#proba`;
  const pill = `inline-flex items-center justify-center gap-2 rounded-full py-3 font-display text-sm font-extrabold uppercase tracking-wide transition active:scale-[0.98] ${focusRing}`;
  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-full bg-white/95 p-1.5 shadow-[0_10px_40px_-10px_rgba(19,32,63,.55)] ring-1 ring-navy/10 backdrop-blur sm:hidden" style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
        <a href={`tel:${site.phone.tel}`} className={`${pill} flex-1 bg-navy text-white`}><Phone className="h-4 w-4" aria-hidden="true" />Sună</a>
        <a href={proba} className={`${pill} flex-[1.4] bg-red text-white`}><CalendarCheck className="h-4 w-4" aria-hidden="true" />Probă gratuită</a>
      </div>
      <a href={`tel:${site.phone.tel}`} className={`${pill} fixed bottom-6 right-6 z-50 bg-red px-6 py-4 text-white shadow-[0_12px_30px_-10px_rgba(200,16,46,.8)] hover:-translate-y-0.5 hover:bg-red-dark max-sm:!hidden`}>
        <Phone className="h-5 w-5" aria-hidden="true" />Sună
      </a>
    </>
  );
}
