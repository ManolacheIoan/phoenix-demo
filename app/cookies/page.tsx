import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: `Ce cookie-uri folosește site-ul ${site.name}.`,
  alternates: { canonical: "./" },
};

export default function Page() {
  return (
    <LegalPage title="Politica de cookies" updated="noiembrie 2026">
      <p>Cookie-urile sunt fișiere mici pe care un site le salvează în browserul tău.</p>
      <h2>Cookie-urile noastre</h2>
      <p>Site-ul {site.name} nu folosește cookie-uri proprii de analiză sau de reclame.</p>
      <h2>Cookie-uri de la terți</h2>
      <ul>
        <li><strong>Google Maps</strong>: harta din secțiunea Contact poate seta cookie-uri Google când se încarcă.</li>
        <li><strong>Instagram, WhatsApp, Google</strong>: linkurile către aceste servicii se deschid pe site-urile lor, care au propriile politici.</li>
      </ul>
      <h2>Cum le controlezi</h2>
      <p>Poți șterge sau bloca cookie-urile din setările browserului. Site-ul funcționează și fără ele; doar harta poate să nu se afișeze.</p>
      <p>Dacă se adaugă ulterior instrumente de analiză (de exemplu Google Analytics), pagina aceasta și un banner de consimțământ trebuie actualizate.</p>
    </LegalPage>
  );
}
