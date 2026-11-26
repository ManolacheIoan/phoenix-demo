import { site } from "@/content/site";

export const metadata = { title: `Pagina nu există | ${site.name}` };

export default function NotFound() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <main className="grid min-h-screen place-items-center bg-navy px-6 text-center text-white">
      <div>
        <p className="font-display text-7xl font-black text-red">404</p>
        <h1 className="mt-4 font-display text-3xl font-black uppercase">Pagina nu există</h1>
        <p className="mt-3 text-white/80">Hai înapoi la sală.</p>
        <a href={`${base}/`} className="mt-8 inline-flex rounded-full bg-red px-7 py-3.5 font-display font-extrabold uppercase text-white">Prima pagină</a>
      </div>
    </main>
  );
}
