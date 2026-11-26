// Tot conținutul site-ului. Ce e marcat TBD se completează împreună cu proprietarul sălii.
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
  google: {
    rating: "4,7",
    ratingValue: 4.7,
    reviewCount: 45,
    reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Fitness+Phoenix+Str.+Mircea+Vod%C4%83+1+Tecuci",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Fitness+Phoenix+Str.+Mircea+Vod%C4%83+1+Tecuci",
    mapEmbed: "https://www.google.com/maps?q=Fitness+Phoenix,+Str.+Mircea+Vod%C4%83+1,+Tecuci&output=embed",
  },
};

/**
 * Formular: endpoint Formspree (ex. „https://formspree.io/f/abcdwxyz”).
 * Se poate scrie direct aici sau se dă prin variabila NEXT_PUBLIC_FORMSPREE_ENDPOINT la build.
 * Gol = formularul trimite cererea pe WhatsApp.
 */
export const formConfig = {
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};

export const nav = [
  { href: "#abonamente", label: "Abonamente" },
  { href: "#program", label: "Program" },
  { href: "#clase", label: "Clase" },
  { href: "#antrenori", label: "Antrenori" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  lead: "Cardio, aparate de forță, greutăți libere și un fitness bar pentru după antrenament. Pe Str. Mircea Vodă, în Tecuci.",
  promises: ["Prima ședință gratuită", "Fără obligații", "Te sunăm noi"],
};

export const highlights = [
  { icon: "cardio", title: "Zonă de cardio", text: "Benzi de alergare și eliptice aliniate, cu ecrane în față." },
  { icon: "forta", title: "Aparate de forță", text: "Aparate pentru toate grupele musculare, plus greutăți libere." },
  { icon: "bar", title: "Vitamin fitness bar", text: "Cafea și shake-uri, ca să-ți închei antrenamentul cum trebuie." },
  { icon: "vestiar", title: "Vestiare îngrijite", text: `Dulăpioare numerotate și bănci. Dușuri: ${TBD}.` },
] as const;

export const plans = [
  { name: "Lunar", price: TBD, period: "/ lună", featured: false, features: ["Acces nelimitat în program", `Beneficii: ${TBD}`] },
  { name: "3 luni", price: TBD, period: "/ 3 luni", featured: true, features: ["Acces nelimitat în program", "Cel mai mic preț pe lună", `Beneficii: ${TBD}`] },
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

export const steps = [
  { title: "Lasă-ne numărul", text: "Completezi formularul în 30 de secunde sau ne suni." },
  { title: "Vii la probă", text: "Îți arătăm sala și aparatele. Gratuit, fără obligații." },
  { title: "Alegi abonamentul", text: "Doar dacă ți-a plăcut. Fără presiune." },
];

export const services = [
  { icon: "forta", title: "Fitness", text: `Aparate și greutăți libere, pentru forță și tonus. Detalii: ${TBD}` },
  { icon: "cardio", title: "Cardio", text: `Benzi și eliptice, pentru rezistență și slăbit. Echipamente: ${TBD}` },
  { icon: "personal", title: "Antrenament personal", text: `Program făcut pe obiectivul tău, cu tehnica corectată. Detalii: ${TBD}` },
  { icon: "grup", title: "Clase de grup", text: `Antrenamente în grup, cu energie în plus. Tipuri și orar: ${TBD}` },
] as const;

export const trainers = [1, 2, 3].map(() => ({ name: TBD, role: TBD }));

/** Poze ilustrative (Unsplash), prelucrate în public/images/<id>-{640,1024,1600}.webp. Surse în CREDITS.md. */
export const images = {
  hero: { w: 1800, h: 1201, alt: "Sală de forță cu bănci, gantere și aparate, în lumină difuză" },
  sala: { w: 1800, h: 1200, alt: "Sală de fitness modernă, cu aparate aliniate și lumini liniare" },
  gantere: { w: 1800, h: 2700, alt: "Rând de gantere negre pe suport" },
  forta: { w: 1800, h: 1200, alt: "Cușcă de forță cu bară olimpică și discuri" },
  cardio: { w: 1800, h: 2400, alt: "Rând de eliptice și benzi de alergare lângă ferestre" },
  vestiar: { w: 1800, h: 1198, alt: "Vestiar cu dulăpioare numerotate și bancă" },
  bar: { w: 1800, h: 1200, alt: "Shaker cu proteină și cutie de whey pe o masă" },
  industrial: { w: 1800, h: 1200, alt: "Sală de forță spațioasă, cu bănci și aparate" },
} as const;
export type ImageId = keyof typeof images;

export const gallery: { label: string; img?: ImageId; span?: string }[] = [
  { label: "Sala", img: "sala", span: "col-span-2 row-span-2" },
  { label: "Greutăți libere", img: "gantere", span: "row-span-2" },
  { label: "Aparate de forță", img: "forta" },
  { label: "Vitamin fitness bar", img: "bar" },
  { label: "Zona de cardio", img: "cardio" },
  { label: "Vestiar", img: "vestiar", span: "col-span-2" },
  { label: "Recepție" },
];

export const faq = [
  { q: "Am nevoie de experiență ca să încep?", a: "Nu. La antrenamentul de probă îți arătăm aparatele și cum le folosești în siguranță." },
  { q: "Antrenamentul de probă chiar e gratuit?", a: "Da. Vii, vezi sala, încerci aparatele. Abonamentul îl alegi doar dacă vrei." },
  { q: "Ce trebuie să aduc?", a: "Echipament de sport, încălțăminte curată pentru sală, un prosop și apă." },
  { q: "Pot plăti cu cardul?", a: TBD },
  { q: "Există parcare în apropiere?", a: TBD },
];

export const goals = ["Slăbire", "Masă musculară", "Tonifiere", "Condiție fizică", "Revenire după o pauză", "Altceva"];
export const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
export const timeSlots = ["Dimineața", "La prânz", "După-amiaza", "Seara"];
