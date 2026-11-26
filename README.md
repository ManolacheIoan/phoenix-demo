# Fitness Phoenix — site demo

Propunere de site pentru **Fitness Phoenix** (Str. Mircea Vodă nr. 1, Tecuci · 0728 888 188). Demo realizat de Manotek.
Live: https://manolacheioan.github.io/phoenix-demo/

## Ce e unde
- **Tot conținutul**: `content/site.ts`. Caută `TBD` / „[de completat]” pentru ce trebuie cerut sălii.
- **Poze**: `public/images/` (WebP 640/828/1024/1600). Surse și autori în `CREDITS.md`. Sunt ilustrative și se înlocuiesc cu poze reale ale sălii.
  Pentru poze noi: pune JPG-urile într-un folder și rulează `node scripts/images.mjs <folder>` (aplică aceeași corecție de culoare).
- **Formular**: setează variabila de repo `FORMSPREE_ENDPOINT` (Settings → Secrets and variables → Actions → Variables), ex. `https://formspree.io/f/xxxx`. Fără ea, formularul trimite cererea pe WhatsApp.
- **Pagini legale**: `app/confidentialitate`, `app/cookies` — text generic, de verificat.

## Comenzi
```bash
npm run dev        # local
npm run lint && npm run typecheck && npm run build   # export static în out/
node scripts/check.mjs https://manolacheioan.github.io/phoenix-demo/   # verificare cap-coadă (meniu, ancore, formular, galerie, pagini)
node scripts/shots.mjs <url> <prefix>   # capturi 375 / 768 / 1280 / 1920
```
Publicare automată pe GitHub Pages la fiecare push pe `main` (`.github/workflows/pages.yml`).
Capturi înainte/după în `docs/screenshots/`.

## Domeniu propriu
Pentru fitnessphoenix.ro: adaugă domeniul în Settings → Pages, apoi la build `BASE_PATH=` (gol) și `SITE_URL=https://fitnessphoenix.ro`.
