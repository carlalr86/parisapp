/* ============================================================
   Paris App — main React app
   Visma Design System look. Mobile-first, works on desktop.
   ============================================================ */

const { useState, useEffect, useMemo, useRef } = React;

/* ---------- tiny inline icons (Lucide-style, 2px stroke) ---------- */
function Icon({ name, size = 18, style }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round",
    strokeLinejoin: "round", style,
  };
  switch (name) {
    case "clock":
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
    case "pin":
      return (<svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.6" /></svg>);
    case "flag":
      return (<svg {...p}><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></svg>);
    case "calendar":
      return (<svg {...p}><rect x="3" y="4.5" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>);
    case "search":
      return (<svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>);
    case "users":
      return (<svg {...p}><path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="3.2" /><path d="M22 19v-2a4 4 0 0 0-3-3.8" /><path d="M16 3.2A4 4 0 0 1 16 11" /></svg>);
    case "arrow":
      return (<svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    case "x":
      return (<svg {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
    case "moon":
      return (<svg {...p}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" /></svg>);
    default:
      return null;
  }
}

/* ---------- map deep-links ----------
   Google universal URL: opens native app on mobile, web on desktop
   (satisfies the "no maps app installed → web fallback" edge case). */
const gmaps = (addr) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
const amaps = (addr) =>
  `https://maps.apple.com/?q=${encodeURIComponent(addr)}`;

/* ---------- name initials for avatars ---------- */
const initials = (name) => name.trim().slice(0, 1).toUpperCase();

/* deterministic avatar tint from a curated on-brand set */
const AVA_TINTS = [
  { bg: "var(--purple-100)", fg: "var(--purple-700)" },
  { bg: "#E7EBEC", fg: "#3C4448" },
  { bg: "#F1E7DC", fg: "#7A5A33" },
  { bg: "#E3ECEA", fg: "#2F5E54" },
];
const tintFor = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffff;
  return AVA_TINTS[h % AVA_TINTS.length];
};

/* ======================= shared pieces ======================= */

function Avatar({ name, highlight }) {
  const t = tintFor(name);
  return (
    <span className={"ava" + (highlight ? " ava--hl" : "")}
          style={{ background: highlight ? "var(--visma-purple)" : t.bg,
                   color: highlight ? "#fff" : t.fg }}>
      {initials(name)}
    </span>
  );
}

function MapButtons({ addr, t, mapPref }) {
  // mapPref: "google" | "apple" — controls which is primary
  const primaryIsApple = mapPref === "apple";
  const primaryHref = primaryIsApple ? amaps(addr) : gmaps(addr);
  const altHref = primaryIsApple ? gmaps(addr) : amaps(addr);
  const altLabel = primaryIsApple ? "Google Maps" : t.appleMaps;
  return (
    <div className="mapbtns">
      <a className="btn btn--primary" href={primaryHref} target="_blank" rel="noopener noreferrer">
        <Icon name="pin" size={17} />
        <span>{t.viewMap}</span>
        <Icon name="arrow" size={16} style={{ marginLeft: "auto", opacity: .8 }} />
      </a>
      <a className="btn btn--ghost" href={altHref} target="_blank" rel="noopener noreferrer">
        {altLabel}
      </a>
    </div>
  );
}

/* ======================= excursions ======================= */

function ExcursionCard({ ex, lang, t, mapPref, i }) {
  return (
    <article className="card excard" style={{ animationDelay: `${i * 70}ms` }}>
      <div className="excard__top">
        <span className="daychip">{ex.day[lang]}</span>
        <span className="datechip"><Icon name="calendar" size={14} />{ex.date[lang]}</span>
      </div>
      <h3 className="excard__title">{ex.title[lang]}</h3>
      <p className="excard__desc">{ex.desc[lang]}</p>

      <div className="metalist">
        <div className="meta">
          <span className="meta__ic"><Icon name="clock" size={16} /></span>
          <span className="meta__val">{ex.time}</span>
        </div>
        <div className="meta">
          <span className="meta__ic"><Icon name="flag" size={16} /></span>
          <span className="meta__val">
            <span className="meta__label">{t.meetPoint}</span>
            {ex.meet[lang]}
          </span>
        </div>
        <div className="meta">
          <span className="meta__ic"><Icon name="pin" size={16} /></span>
          <span className="meta__val meta__addr">{ex.address}</span>
        </div>
      </div>

      <MapButtons addr={ex.address} t={t} mapPref={mapPref} />
    </article>
  );
}

function ExcursionsView({ lang, t, mapPref }) {
  return (
    <section className="view">
      <header className="viewhead">
        <h2 className="viewhead__title">{t.excursionsTitle}</h2>
        <p className="viewhead__lead">{t.excursionsLead}</p>
      </header>
      <div className="stack">
        {window.EXCURSIONS.map((ex, i) => (
          <ExcursionCard key={ex.id} ex={ex} lang={lang} t={t} mapPref={mapPref} i={i} />
        ))}
      </div>
    </section>
  );
}

/* ======================= accommodations ======================= */

function StayCard({ st, lang, t, mapPref, query, i }) {
  const q = query.trim().toLowerCase();
  return (
    <article className="card staycard" style={{ animationDelay: `${i * 70}ms` }}>
      <div className="staycard__head">
        <div>
          <h3 className="staycard__name">{st.name}</h3>
          <span className="staycard__area">{st.area[lang]}</span>
        </div>
        <span className="count"><Icon name="users" size={14} />{st.members.length}</span>
      </div>

      <div className="meta meta--addr">
        <span className="meta__ic"><Icon name="pin" size={16} /></span>
        <span className="meta__val meta__addr">{st.address}</span>
      </div>

      <div className="roster">
        <span className="roster__label">{t.sleepsHere}</span>
        <div className="roster__chips">
          {st.members.map((m) => {
            const hit = q && m.toLowerCase().includes(q);
            return (
              <span key={m} className={"chip" + (hit ? " chip--hit" : "")}>
                <Avatar name={m} highlight={hit} />
                {m}
              </span>
            );
          })}
        </div>
      </div>

      <MapButtons addr={st.address} t={t} mapPref={mapPref} />
    </article>
  );
}

function StaysView({ lang, t, mapPref }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const { list, matchNames } = useMemo(() => {
    if (!q) return { list: window.ACCOMMODATIONS, matchNames: [] };
    const names = [];
    const list = window.ACCOMMODATIONS.filter((st) => {
      const hits = st.members.filter((m) => m.toLowerCase().includes(q));
      hits.forEach((m) => names.push({ m, st }));
      return hits.length > 0;
    });
    return { list, matchNames: names };
  }, [q]);

  return (
    <section className="view">
      <header className="viewhead">
        <h2 className="viewhead__title">{t.staysTitle}</h2>
        <p className="viewhead__lead">{t.staysLead}</p>
      </header>

      <div className="searchwrap">
        <span className="searchwrap__ic"><Icon name="search" size={18} /></span>
        <input
          className="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          aria-label={t.searchPlaceholder}
        />
        {query && (
          <button className="searchwrap__clear" onClick={() => setQuery("")} aria-label={t.clear}>
            <Icon name="x" size={16} />
          </button>
        )}
      </div>

      {q && (
        matchNames.length ? (
          <div className="resultline">
            {matchNames.slice(0, 4).map(({ m, st }, idx) => (
              <div key={idx} className="resultline__row">
                <Avatar name={m} highlight />
                <span><strong>{m}</strong> {t.resultPrefix} <strong>{st.name}</strong></span>
              </div>
            ))}
          </div>
        ) : (
          <div className="noresults">{t.noResults}</div>
        )
      )}

      <div className="stack">
        {list.map((st, i) => (
          <StayCard key={st.id} st={st} lang={lang} t={t} mapPref={mapPref} query={query} i={i} />
        ))}
      </div>
    </section>
  );
}

/* ======================= shell ======================= */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "defaultLang": "es",
  "mapPref": "google"
}/*EDITMODE-END*/;

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // language: localStorage > tweak default
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("paris.lang");
    return saved === "es" || saved === "en" ? saved : (TWEAK_DEFAULTS.defaultLang || "es");
  });
  const userTouched = useRef(false);
  useEffect(() => { if (userTouched.current) localStorage.setItem("paris.lang", lang); }, [lang]);
  // follow tweak default until the user picks manually
  useEffect(() => {
    if (!userTouched.current && !localStorage.getItem("paris.lang")) setLang(tw.defaultLang);
  }, [tw.defaultLang]);

  const [tab, setTab] = useState(() => localStorage.getItem("paris.tab") || "excursions");
  useEffect(() => { localStorage.setItem("paris.tab", tab); }, [tab]);

  const t = window.I18N[lang];
  const trip = window.TRIP;

  const pickLang = (l) => { userTouched.current = true; setLang(l); };

  return (
    <div className="app" lang={lang}>
      {/* hero band — the one Amplify brand moment */}
      <header className="hero">
        <div className="hero__bar">
          <img className="hero__logo" src="assets/Visma_White.svg" alt="Visma" />
          <div className="langtoggle" role="tablist" aria-label="Language">
            {["es", "en"].map((l) => (
              <button key={l}
                className={"langtoggle__btn" + (lang === l ? " is-on" : "")}
                onClick={() => pickLang(l)} aria-pressed={lang === l}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="hero__body">
          <span className="hero__eyebrow">{trip.team}</span>
          <h1 className="hero__title">{trip.title}</h1>
          <div className="hero__dates"><Icon name="calendar" size={16} />{trip.dates[lang]}</div>
        </div>
      </header>

      {/* sticky tabs */}
      <nav className="tabs">
        <button className={"tab" + (tab === "excursions" ? " is-on" : "")}
                onClick={() => setTab("excursions")}>
          <Icon name="flag" size={17} />{t.tabExcursions}
        </button>
        <button className={"tab" + (tab === "stays" ? " is-on" : "")}
                onClick={() => setTab("stays")}>
          <Icon name="pin" size={17} />{t.tabStays}
        </button>
        <span className="tabs__ink" style={{ transform: `translateX(${tab === "stays" ? "100%" : "0"})` }} />
      </nav>

      <main className="content">
        {tab === "excursions"
          ? <ExcursionsView lang={lang} t={t} mapPref={tw.mapPref} />
          : <StaysView lang={lang} t={t} mapPref={tw.mapPref} />}
        <p className="footnote">{t.footerNote}</p>
      </main>

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label={lang === "es" ? "Idioma" : "Language"} />
        <TweakRadio
          label={lang === "es" ? "Idioma por defecto" : "Default language"}
          value={tw.defaultLang}
          options={["es", "en"]}
          onChange={(v) => setTweak("defaultLang", v)} />
        <TweakSection label={lang === "es" ? "Mapas" : "Maps"} />
        <TweakRadio
          label={lang === "es" ? "App de mapas principal" : "Primary map app"}
          value={tw.mapPref}
          options={["google", "apple"]}
          onChange={(v) => setTweak("mapPref", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
