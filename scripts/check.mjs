// Verificare cap-coadă în browser. Folosire: node scripts/check.mjs <url-de-bază-cu-/-la-final>
import { chromium, devices } from "playwright";
const U = process.argv[2] ?? "http://localhost:4321/";
const b = await chromium.launch();
const ok = (c, m) => console.log(`${c ? "OK  " : "FAIL"} ${m}`);
let fails = 0; const check = (c, m) => { if (!c) fails++; ok(c, m); };

for (const [name, opts] of [["mobil 375", { ...devices["iPhone 13"], viewport: { width: 375, height: 812 } }], ["desktop 1280", { viewport: { width: 1280, height: 800 } }], ["desktop 1920", { viewport: { width: 1920, height: 1080 } }], ["tabletă 768", { viewport: { width: 768, height: 1024 } }]]) {
  const ctx = await b.newContext(opts); const p = await ctx.newPage();
  const errs = []; p.on("pageerror", (e) => errs.push(e.message)); p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  const bad = []; p.on("response", (r) => r.status() >= 400 && !r.url().includes("google") && bad.push(r.status() + " " + r.url()));
  await p.goto(U, { waitUntil: "networkidle" });
  console.log(`\n== ${name}`);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(sw <= 0, `fără scroll orizontal (diferență ${sw}px)`);
  // ancore
  const hrefs = await p.$$eval('a[href^="#"]', (as) => [...new Set(as.map((a) => a.getAttribute("href")))].filter((h) => h.length > 1));
  const missing = await p.evaluate((hs) => hs.filter((h) => !document.getElementById(h.slice(1))), hrefs);
  check(missing.length === 0, `toate ancorele au țintă (${hrefs.join(" ")})${missing.length ? " LIPSĂ: " + missing : ""}`);
  // navigare prin meniu (mobil) sau nav (desktop)
  const mobile = opts.viewport.width < 1024;
  for (const id of ["abonamente", "program", "clase", "antrenori", "galerie", "contact"]) {
    if (mobile) { await p.click('button[aria-controls="meniu-mobil"]'); await p.click(`#meniu-mobil a[href="#${id}"]`); }
    else await p.click(`nav[aria-label="Principal"] a[href="#${id}"]`);
    await p.waitForTimeout(1000);
    const r = await p.evaluate((i) => {
      const top = document.getElementById(i).getBoundingClientRect().top; const hb = document.querySelector("header").getBoundingClientRect().bottom;
      const vis = [...document.querySelectorAll(`#${i} .reveal`)].filter((x) => { const q = x.getBoundingClientRect(); return q.top < innerHeight && q.bottom > 0; });
      return { top: Math.round(top), hb: Math.round(hb), allVisible: vis.every((x) => +getComputedStyle(x).opacity > 0.95) };
    }, id);
    const menuClosed = mobile ? !(await p.locator("#meniu-mobil").isVisible()) : true;
    check(r.top >= r.hb - 2 && r.top < r.hb + 60 && r.allVisible && menuClosed, `#${id}: sub header (${r.top} vs ${r.hb}), conținut vizibil, meniu închis`);
  }
  // header micșorat la scroll
  const h = await p.evaluate(() => document.querySelector("header > div").getBoundingClientRect().height);
  check(h <= 62, `header micșorat la scroll (${h}px)`);
  // poze încărcate
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } });
  await p.waitForTimeout(1500);
  const imgs = await p.$$eval("img", (xs) => xs.filter((x) => x.offsetParent !== null).map((x) => ({ s: x.currentSrc, ok: x.complete && x.naturalWidth > 0, alt: x.alt })));
  check(imgs.every((i) => i.ok && i.alt), `toate cele ${imgs.length} poze vizibile se încarcă și au alt`);
  check(await p.$$eval(".reveal", (xs) => xs.every((x) => +getComputedStyle(x).opacity > 0.95)), "nimic nu rămâne ascuns după scroll complet");
  // formular: validare
  await p.goto(U + "#proba", { waitUntil: "networkidle" }); await p.waitForTimeout(500);
  await p.click('form button[type=submit]');
  const nErr = await p.$$eval('form [id^="err-"]', (x) => x.length);
  const focused = await p.evaluate(() => document.activeElement?.getAttribute("name"));
  check(nErr === 5 && focused === "nume", `formular gol: ${nErr} mesaje de eroare, focus pe „${focused}”`);
  await p.fill("input[name=nume]", "Ion Test"); await p.fill("input[name=telefon]", "0728-888-188");
  await p.selectOption("select[name=obiectiv]", "Tonifiere"); await p.selectOption("select[name=zi]", "Joi"); await p.selectOption("select[name=interval]", "Seara");
  await p.check("input[name=acord]");
  const [pop] = await Promise.all([ctx.waitForEvent("page", { timeout: 5000 }).catch(() => null), p.click("form button[type=submit]")]);
  const wa = pop ? decodeURIComponent(pop.url().replace(/\+/g, " ")) : "";
  check(/40728888188/.test(wa) && wa.includes("Ion Test") && wa.includes("Joi, seara"), `WhatsApp precompletat (${wa.slice(0, 60)}…)`);
  if (pop) await pop.close();
  // galerie
  await p.goto(U + "#galerie", { waitUntil: "networkidle" }); await p.waitForTimeout(500);
  await p.click('#galerie button[aria-label^="Mărește"]');
  await p.waitForTimeout(400);
  const open1 = await p.evaluate(() => document.querySelector("dialog")?.open);
  await p.keyboard.press("ArrowRight"); await p.waitForTimeout(300);
  const label2 = await p.textContent("dialog p");
  await p.keyboard.press("Escape"); await p.waitForTimeout(300);
  const closed = await p.evaluate(() => !document.querySelector("dialog")?.open);
  const backFocus = await p.evaluate(() => document.activeElement?.getAttribute("aria-label"));
  check(open1 && /2 \/ 6/.test(label2) && closed && /Mărește/.test(backFocus ?? ""), `lightbox: deschide, săgeată (${label2?.trim()}), Escape, focus înapoi`);
  // linkuri tel / externe
  const tels = await p.$$eval('a[href^="tel:"]', (as) => [...new Set(as.map((a) => a.getAttribute("href")))]);
  check(tels.length === 1 && tels[0] === "tel:+40728888188", `toate linkurile tel: → ${tels}`);
  const ext = await p.$$eval('a[target=_blank]', (as) => as.every((a) => /noopener/.test(a.rel)));
  check(ext, "linkurile externe au rel=noopener");
  // pagini secundare
  for (const path of ["confidentialitate/", "cookies/"]) {
    const r = await p.goto(U + path, { waitUntil: "networkidle" });
    const t = await p.title();
    const back = await p.$eval('header a[aria-label*="prima pagină"]', (a) => a.getAttribute("href"));
    check(r.status() === 200 && t.includes("Fitness Phoenix") && back, `/${path}: 200, „${t}”, logo → ${back}`);
  }
  await p.goto(U + "cookies/", { waitUntil: "networkidle" });
  if (mobile) await p.click('button[aria-controls="meniu-mobil"]');
  await p.click(`${mobile ? "#meniu-mobil" : 'nav[aria-label="Principal"]'} a:text-is("Contact")`);
  await p.waitForURL(/#contact/); await p.waitForTimeout(2500);
  const atContact = await p.evaluate(() => location.hash === "#contact" && (() => { const t = document.getElementById("contact").getBoundingClientRect().top; const hb = document.querySelector("header").getBoundingClientRect().bottom; return t >= hb - 2 && t < hb + 60; })());
  check(atContact, "din /cookies/, meniul „Contact” duce la secțiunea Contact");
  const r404 = await p.goto(U + "nu-exista/");
  check(r404.status() === 404 && (await p.title()).includes("Pagina nu există"), "404 personalizat");
  check(errs.filter((e) => !/404/.test(e)).length === 0, `fără erori în consolă ${errs.filter((e) => !/404/.test(e)).join(" | ")}`);
  check(bad.filter((x) => !x.includes("nu-exista")).length === 0, `fără resurse lipsă ${bad.filter((x) => !x.includes("nu-exista")).join(" | ")}`);
  await ctx.close();
}
for (const f of ["sitemap.xml", "robots.txt", "og.png", "icon.svg", "apple-icon.png"]) {
  const r = await fetch(U + f); check(r.ok, `/${f} ${r.status} ${r.headers.get("content-type")}`);
}
console.log(`\n${fails ? fails + " PROBLEME" : "TOTUL OK"}`);
await b.close();
process.exit(fails ? 1 : 0);
