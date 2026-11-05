"use strict";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;

const DATA = {
  dark: {
    h1: "Cafeaua de seară, la lumina lămpilor.",
    lead: "Boabe prăjite lent, espresso scurt și intens, lapte spumat fin. Intră, așază-te și rămâi cât ai chef.",
    cta: "Vezi meniul de cafea",
    mtitle: "Meniul cafenelei",
    msub: "Boabele vin de la un prăjitor local și sunt măcinate chiar înainte de a ajunge în ceașca ta.",
    about: "După ora 17, Abur devine cafenea: lumină caldă, muzică în surdină și un espresso făcut cu răbdare. Un loc bun pentru o discuție lungă sau pentru o carte.",
    ctitle: "Combo-uri de cafenea",
    marquee: ["Espresso", "Cappuccino", "Flat white", "Cold brew", "Mocha", "Tiramisu", "Brownie"],
    tabs: [
      ["Espresso", [
        ["Espresso", 9, "30 ml, scurt, cu o crema deasă."],
        ["Doppio", 12, "Două doze, pentru zilele lungi."],
        ["Americano", 11, "Espresso lung, cu apă fierbinte."],
        ["Cappuccino", 14, "Espresso, lapte spumat, puțină cacao.", "Favorit"],
        ["Flat white", 16, "Mai multă cafea, lapte mătăsos."],
        ["Mocha", 17, "Ciocolată neagră, espresso și lapte."]
      ]],
      ["Reci", [
        ["Cold brew", 17, "Infuzat la rece 14 ore, cu gheață."],
        ["Espresso tonic", 18, "Tonic, espresso și o felie de portocală.", "Nou"],
        ["Iced latte", 16, "Lapte rece peste espresso dublu."],
        ["Frappé de casă", 17, "Cafea, gheață și lapte, bătute spumos."]
      ]],
      ["De dulce", [
        ["Tiramisu", 22, "Mascarpone, savoiardi, cafea."],
        ["Cheesecake cu caramel", 21, "Cu sos de caramel sărat."],
        ["Brownie cu nuci", 18, "Ciocolatos, cu miez moale."],
        ["Prăjitură de morcov", 19, "Fără produse de origine animală.", "Vegan"],
        ["Corn cu unt", 12, "Copt în fiecare dimineață."]
      ]]
    ],
    extras: [["Lapte vegetal", "+2 lei"], ["Sirop (vanilie, caramel, alună)", "+2 lei"], ["Shot extra de espresso", "+4 lei"]],
    combos: [
      ["Dimineață rapidă", "24 lei", "Cappuccino și corn cu unt."],
      ["Pauză de prânz", "38 lei", "Flat white, sandviș cald și o apă."],
      ["Seară în doi", "64 lei", "Două băuturi la alegere și un tiramisu de împărțit."]
    ]
  },
  light: {
    h1: "Un ceai lung, într-o după-amiază liniștită.",
    lead: "Frunze întregi, infuzate cum trebuie, în ceainice mici. Aici ceaiul nu se grăbește, iar tu nici atât.",
    cta: "Vezi meniul de ceai",
    mtitle: "Meniul ceainăriei",
    msub: "Ceaiurile sunt din frunze întregi, nu din pliculețe, și vin cu o clepsidră ca să știi când sunt gata.",
    about: "Până la ora 17, Abur este ceainărie: lumină multă, plante peste tot și ceainice din ceramică. Un loc pentru pauze care chiar te odihnesc.",
    ctitle: "Combo-uri de ceainărie",
    marquee: ["Matcha", "Jasmin", "Earl Grey", "Chai", "Sencha", "Macarons", "Scones"],
    tabs: [
      ["Verzi și matcha", [
        ["Matcha latte", 18, "Matcha ceremonială și lapte cald.", "Favorit"],
        ["Jasmin verde", 12, "Floral și ușor, bun la orice oră."],
        ["Sencha", 13, "Ceai verde japonez, proaspăt și vegetal."],
        ["Matcha rece cu lămâie", 17, "Cu gheață și puțină lămâie.", "Nou"]
      ]],
      ["Negre și fructate", [
        ["Earl Grey", 12, "Ceai negru cu bergamotă."],
        ["Assam cu lapte", 13, "Puternic și rotund."],
        ["Chai cu condimente", 15, "Scorțișoară, cardamom, ghimbir și lapte."],
        ["Fructe de pădure", 13, "Acrișor și colorat, bun și rece."],
        ["Mentă proaspătă", 11, "Frunze de mentă în apă fierbinte."],
        ["Hibiscus rece", 14, "Floral, cu gheață și miere."]
      ]],
      ["De dulce", [
        ["Scones cu dulceață", 16, "Calde, cu smântână și dulceață de casă."],
        ["Macarons", 6, "Prețul e pe bucată.", "Vegetarian"],
        ["Tort de lămâie", 20, "Proaspăt și nu prea dulce."],
        ["Biscuiți cu ghimbir", 10, "Crocanți, pentru ceaiurile negre."]
      ]]
    ],
    extras: [["Miere", "+2 lei"], ["Felie de lămâie", "+1 leu"], ["Ceainic pentru doi (700 ml)", "+6 lei"]],
    combos: [
      ["Ceai și scones", "26 lei", "Un ceai la alegere și un scone cu dulceață."],
      ["Ceainic pentru doi", "49 lei", "Ceainic de 700 ml și patru macarons."],
      ["Prânz verde", "39 lei", "Matcha latte, o salată și o felie de tartă."]
    ]
  }
};

const BEAN = '<svg viewBox="0 0 40 60"><ellipse cx="20" cy="30" rx="16" ry="26" fill="currentColor"/><path d="M20 6C8 24 32 36 20 54" fill="none" stroke="var(--vein)" stroke-width="3" stroke-linecap="round"/></svg>';
const LEAF = '<svg viewBox="0 0 40 60"><path d="M20 3C44 20 38 46 20 58 2 46-4 20 20 3z" fill="currentColor"/><path d="M20 12v42" stroke="var(--vein)" stroke-width="2" stroke-linecap="round"/></svg>';
const POS = [
  [4, 22, 38, 20, 5.2, 0, 14], [88, 14, 30, -35, 6.1, .6, -12], [10, 62, 44, 70, 5.7, 1.2, 12],
  [84, 58, 40, -60, 6.6, .3, -14], [26, 8, 26, 130, 5.4, 1.8, 10], [70, 30, 24, 40, 6.9, 1, -10],
  [92, 82, 34, 160, 5.9, .9, 12], [18, 86, 30, -20, 6.3, 1.5, -12], [52, 3, 22, 95, 5.1, .2, 8]
];

function scatter(mode) {
  const box = $("#orbit");
  const old = [...box.children];
  old.forEach(n => n.classList.add("out"));
  setTimeout(() => old.forEach(n => n.remove()), 500);
  POS.forEach(([x, y, s, r, t, d, dx]) => {
    const el = document.createElement("div");
    el.className = "fl";
    el.style.cssText = `left:${x}%;top:${y}%;--s:${s}px;--r:${r}deg;--t:${t}s;--d:${d}s;--dx:${dx}px`;
    el.innerHTML = mode === "dark" ? BEAN : LEAF;
    box.appendChild(el);
  });
}

let tabIndex = 0;

function renderMenu(mode) {
  const d = DATA[mode];
  $("#tabs").innerHTML = d.tabs.map(([n], i) =>
    `<button role="tab" class="chip" aria-selected="${i === tabIndex}" data-i="${i}">${n}</button>`).join("");
  $("#menu").innerHTML = d.tabs[tabIndex][1].map(([n, p, t, tag], i) =>
    `<li class="pop" style="--i:${i}"><div class="h"><span>${n}${tag ? `<em class="tagc">${tag}</em>` : ""}</span><b>${p} lei</b></div><p>${t}</p></li>`).join("");
}

function render(mode) {
  const d = DATA[mode];
  root.dataset.theme = mode;
  $("#mode").setAttribute("aria-checked", mode === "dark");
  $("#h1").textContent = d.h1;
  $("#lead").textContent = d.lead;
  $("#cta1").textContent = d.cta;
  $("#mtitle").textContent = d.mtitle;
  $("#msub").textContent = d.msub;
  $("#about").textContent = d.about;
  $("#ctitle").textContent = d.ctitle;
  tabIndex = 0;
  renderMenu(mode);
  $("#extras").innerHTML = d.extras.map(([n, p]) => `<li><span>${n}</span><b>${p}</b></li>`).join("");
  $("#combos").innerHTML = d.combos.map(([n, p, t], i) =>
    `<article class="combo pop" style="--i:${i}"><h3>${n}</h3><p class="price">${p}</p><p>${t}</p></article>`).join("");
  const words = d.marquee.map(w => `<span>${w}</span><i></i>`).join("");
  $("#marquee").innerHTML = words + words;
  scatter(mode);
}

function save(m) { try { localStorage.setItem("abur-mode", m); } catch (e) {} }
function saved() { try { return localStorage.getItem("abur-mode"); } catch (e) { return null; } }

render(saved() || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

$("#mode").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  render(next);
  save(next);
});

$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  tabIndex = +b.dataset.i;
  renderMenu(root.dataset.theme);
});

$$(".reveal").forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains("reveal"));
  el.style.setProperty("--i", sibs.indexOf(el));
});

function count(el) {
  const to = +el.dataset.to, dec = +el.dataset.dec || 0, t0 = performance.now();
  (function step(t) {
    const k = Math.min((t - t0) / 1400, 1), v = to * (1 - Math.pow(1 - k, 3));
    el.textContent = dec ? (v / 10).toFixed(1) : Math.round(v);
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  const n = e.target.querySelector(".num");
  if (n) count(n);
  io.unobserve(e.target);
}), { threshold: 0.15 });
$$(".reveal").forEach(el => io.observe(el));

let busy = false;
function onScroll() {
  if (busy) return;
  busy = true;
  requestAnimationFrame(() => {
    const y = scrollY, max = root.scrollHeight - innerHeight;
    root.style.setProperty("--sy", y);
    root.style.setProperty("--p", max > 0 ? y / max : 0);
    const tl = $("#timeline").getBoundingClientRect();
    const k = Math.min(Math.max((innerHeight * 0.7 - tl.top) / tl.height, 0), 1);
    $("#timeline").style.setProperty("--tl", k);
    busy = false;
  });
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

$("#rez").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  $("#rmsg").textContent = `Mulțumim, ${f.get("n")}! Ți-am notat o masă pentru ${f.get("p")} persoane pe ${f.get("d")}. (Demo: rezervarea nu e reală.)`;
  e.target.reset();
});