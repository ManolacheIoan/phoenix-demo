// Tot conținutul site-ului. Ce e marcat TBD trebuie completat cu proprietarul sălii.
export const TBD = "[de completat]";

export const site = {
  name: "Fitness Phoenix",
  url: "https://fitnessphoenix.ro",
  demoBanner: "Demo realizat de Manotek — propunere pentru Fitness Phoenix",
  address: {
    street: "Str. Mircea Vodă nr. 1",
    city: "Tecuci",
    county: "Galați",
    country: "RO",
  },
  phone: { display: "0728 888 188", tel: "+40728888188", whatsapp: "40728888188" },
  instagram: { handle: "@phoenixfitness_246", url: "https://www.instagram.com/phoenixfitness_246/" },
  facebook: { name: "fitnessphoenix.ro" },
  google: {
    rating: "4,7",
    ratingValue: 4.7,
    reviewCount: 45,
    reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Fitness+Phoenix+Str.+Mircea+Vod%C4%83+1+Tecuci",
    mapEmbed: "https://www.google.com/maps?q=Fitness+Phoenix,+Str.+Mircea+Vod%C4%83+1,+Tecuci&output=embed",
  },
  hero: {
    title: "Sala ta din Tecuci",
    subtitle:
      "Aparate, greutăți libere și zonă de cardio pe Str. Mircea Vodă. Vino să vezi sala la un antrenament de probă gratuit.",
  },
};

export const nav = [
  { href: "#abonamente", label: "Abonamente" },
  { href: "#program", label: "Program" },
  { href: "#clase", label: "Clase" },
  { href: "#antrenori", label: "Antrenori" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export const plans = [
  { name: "Lunar", price: TBD, period: "/ lună", featured: false, features: ["Acces nelimitat în program", `Beneficii: ${TBD}`] },
  { name: "3 luni", price: TBD, period: "/ 3 luni", featured: true, features: ["Acces nelimitat în program", "Cel mai avantajos preț pe lună", `Beneficii: ${TBD}`] },
  { name: "Elevi / Studenți", price: TBD, period: "/ lună", featured: false, features: ["Cu carnet de elev sau student valabil", `Condiții: ${TBD}`] },
];

export const schedule = [
  { day: "Luni", hours: TBD },
  { day: "Marți", hours: TBD },
  { day: "Miercuri", hours: TBD },
  { day: "Joi", hours: TBD },
  { day: "Vineri", hours: TBD },
  { day: "Sâmbătă", hours: TBD },
  { day: "Duminică", hours: TBD },
];

export const services = [
  { title: "Fitness", icon: "dumbbell", text: `Aparate și greutăți libere. Detalii: ${TBD}` },
  { title: "Cardio", icon: "heart", text: `Benzi, biciclete, eliptice. Echipamente: ${TBD}` },
  { title: "Antrenament personal", icon: "user", text: `Program făcut pentru obiectivul tău. Detalii: ${TBD}` },
  { title: "Clase de grup", icon: "users", text: `Tipuri de clase și orar: ${TBD}` },
];

export const trainers = [1, 2, 3].map(() => ({ name: TBD, role: TBD }));

export const gallery = [
  "Zona de greutăți libere",
  "Aparate de forță",
  "Zona de cardio",
  "Vestiar",
  "Recepție",
  "Vitamin fitness bar",
];

export const highlights = [
  { title: "Zonă de cardio", text: "Benzi de alergare și eliptice aliniate, cu ecrane în față." },
  { title: "Aparate de forță", text: "Aparate pentru toate grupele musculare și greutăți libere." },
  { title: "Vitamin fitness bar", text: "Cafea, shake-uri și o pauză bună după antrenament." },
  { title: "Vestiare îngrijite", text: "Dulăpioare numerotate și bănci. Dușuri: [de completat]." },
];

export const steps = [
  { title: "Lasă-ne numărul", text: "Completezi formularul în 30 de secunde sau ne suni." },
  { title: "Vii la probă", text: "Îți arătăm sala și aparatele. Gratuit, fără obligații." },
  { title: "Alegi abonamentul", text: "Doar dacă ți-a plăcut. Fără presiune." },
];

export const faq = [
  { q: "Am nevoie de experiență ca să încep?", a: "Nu. La antrenamentul de probă îți arătăm aparatele și cum le folosești în siguranță." },
  { q: "Antrenamentul de probă chiar e gratuit?", a: "Da. Vii, vezi sala, încerci aparatele. Abonamentul îl alegi doar dacă vrei." },
  { q: "Ce trebuie să aduc?", a: "Echipament sport, încălțăminte curată de sală, un prosop și apă." },
  { q: "Există parcare în apropiere?", a: TBD },
];

export const goals = ["Slăbire", "Masă musculară", "Tonifiere", "Condiție fizică", "Altceva"];
export const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

// Pune ID-ul Formspree în variabila NEXT_PUBLIC_FORMSPREE_ID la build. Fără el, formularul trimite pe WhatsApp.
export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
