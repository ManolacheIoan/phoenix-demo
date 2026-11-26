import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site, TBD } from "@/content/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Cum folosește ${site.name} datele trimise prin formularul de antrenament de probă.`,
  alternates: { canonical: "./" },
};

export default function Page() {
  return (
    <LegalPage title="Politica de confidențialitate" updated="noiembrie 2026">
      <p>Această pagină explică ce date personale colectează {site.name} prin acest site, de ce și cum le poți controla.</p>
      <h2>Cine suntem</h2>
      <p>Operatorul datelor este {site.name}, {site.address.street}, {site.address.city}, jud. {site.address.county}. Denumire juridică și CUI: <span className="tbd">{TBD}</span>. Telefon: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>. E-mail: <span className="tbd">{TBD}</span>.</p>
      <h2>Ce date colectăm</h2>
      <ul>
        <li>Prin formularul „Antrenament de probă gratuit”: numele, numărul de telefon, obiectivul, ziua și intervalul preferat.</li>
        <li>Dacă alegi WhatsApp, mesajul ajunge direct la noi prin aplicația WhatsApp, conform politicii acesteia.</li>
      </ul>
      <h2>De ce le folosim</h2>
      <p>Doar ca să te sunăm și să stabilim antrenamentul de probă. Temeiul este consimțământul tău, dat prin bifarea căsuței din formular. Nu folosim datele pentru reclame și nu le vindem.</p>
      <h2>Cât le păstrăm</h2>
      <p>Cel mult <span className="tbd">{TBD}</span> de la trimitere, apoi le ștergem.</p>
      <h2>Cine le mai poate vedea</h2>
      <p>Formularul poate fi transmis prin Formspree (furnizor de formulare), iar harta din pagină este oferită de Google Maps. Acești furnizori prelucrează date conform propriilor politici.</p>
      <h2>Drepturile tale</h2>
      <p>Ai dreptul să ceri acces la date, corectarea sau ștergerea lor și să îți retragi consimțământul oricând, la telefonul de mai sus. Poți depune plângere la ANSPDCP (dataprotection.ro).</p>
    </LegalPage>
  );
}
