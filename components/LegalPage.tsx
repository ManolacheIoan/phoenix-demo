import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { wrap } from "@/components/ui";
import { site } from "@/content/site";

/** Șablon pentru paginile legale. Textele sunt generice și trebuie verificate înainte de lansare. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <div className="bg-navy px-4 py-1.5 text-center text-[0.72rem] font-medium tracking-wide text-white/85">{site.demoBanner}</div>
      <Header home={false} />
      <main id="continut" className="bg-paper">
        <div className={`${wrap} py-14 sm:py-20`}>
          <article className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/10 sm:p-12">
            <p className="inline-flex rounded-full border border-dashed border-red/50 bg-red/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red">Text generic — de verificat</p>
            <h1 className="mt-5 font-display text-3xl font-black uppercase leading-tight text-navy sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-navy/60">Ultima actualizare: {updated}</p>
            <div className="mt-8 space-y-5 leading-relaxed text-navy/80 [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-black [&_h2]:uppercase [&_h2]:text-navy [&_a]:font-semibold [&_a]:text-blue [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>
          </article>
        </div>
      </main>
      <Footer home={false} />
      <MobileBar home={false} />
    </>
  );
}
