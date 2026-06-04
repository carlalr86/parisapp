/* ============================================================
   Paris App — trip data + bilingual strings
   ------------------------------------------------------------
   PLACEHOLDER DATA — edit freely. First names only (per PRD
   security note). Addresses must be real & mappable.
   ============================================================ */

window.TRIP = {
  // Shown in the hero band
  title: "París 2026",
  team: "Product Discovery",
  // Free-form, language-specific date range label
  dates: { es: "16 – 18 jun 2026", en: "16 – 18 Jun 2026" },
};

/* --- 3 EXCURSIONS ---------------------------------------------------------
   day:     short label per language ("Día 1" / "Day 1")
   date:    localized date string per language
   time:    "10:00 – 13:00"  (24h, language-neutral)
   address: exact, mappable string — used to build map deep-links
   meet:    meeting-point note (optional)
--------------------------------------------------------------------------- */
window.EXCURSIONS = [
  {
    id: "winetasting",
    day: { es: "Experiencia 1", en: "Experience 1" },
    date: { es: "Mié 17 jun", en: "Wed 17 Jun" },
    time: "12:15 PM",
    title: {
      es: "Cata de vinos y almuerzo de quesos con sumiller",
      en: "Wine Tasting & Cheese Lunch with an Expert Sommelier",
    },
    desc: {
      es: "Sesión guiada de cata de vinos con almuerzo de quesos dirigido por un sumiller experto.",
      en: "Guided wine tasting session with a cheese lunch led by an expert sommelier.",
    },
    meet: { es: "Ver ubicación en mapa", en: "See location on map" },
    address: "Wine Tasting & Cheese Lunch Paris",
    mapUrl: "https://maps.app.goo.gl/gcScpzHyPsmXSSz2A",
  },
  {
    id: "catacombs",
    day: { es: "Experiencia 2", en: "Experience 2" },
    date: { es: "Mié 17 jun", en: "Wed 17 Jun" },
    time: "3:45 PM",
    title: {
      es: "Catacumbas y crucero por el Sena con audioguía",
      en: "Catacombs Entry & Seine River Cruise with Audio Guide",
    },
    desc: {
      es: "Entrada a las catacumbas de París seguida de crucero por el Sena con audioguía.",
      en: "Entry to the Paris Catacombs followed by a Seine River Cruise with Audio Guide.",
    },
    meet: { es: "Llegada 3:30 PM · Inicio 3:45 PM", en: "Arrive 3:30 PM · Starts 3:45 PM" },
    address: "Catacombes de Paris, 75014 Paris",
    mapUrl: "https://maps.app.goo.gl/1dFX49TCnAHH6EA66",
  },
  {
    id: "beaumarchais",
    day: { es: "Experiencia 3", en: "Experience 3" },
    date: { es: "Mié 17 jun", en: "Wed 17 Jun" },
    time: "9:00 PM",
    title: {
      es: "Cena en JJ Beaumarchais",
      en: "Dinner at JJ Beaumarchais",
    },
    desc: {
      es: "Cena de grupo en el restaurante JJ Beaumarchais.",
      en: "Group dinner at JJ Beaumarchais restaurant.",
    },
    meet: { es: "En el restaurante", en: "At the restaurant" },
    address: "JJ Beaumarchais, Paris",
    mapUrl: "https://maps.app.goo.gl/FUJdHK5bHZ4bzno48",
  },
];

/* --- 4 ACCOMMODATIONS -----------------------------------------------------
   name:    hotel / apartment building name (general — no room numbers)
   area:    neighbourhood label per language
   address: exact, mappable string
   members: first names only
--------------------------------------------------------------------------- */
window.ACCOMMODATIONS = [
  {
    id: "diese",
    name: "Dièse Hôtel Bastille",
    area: { es: "Bastille · 11º", en: "Bastille · 11th" },
    address: "Dièse Hôtel Bastille, Paris",
    mapUrl: "https://maps.app.goo.gl/P8ZEy2PSuT4zyTKLA",
    members: ["Lucia", "Nicolae", "Radu", "Daniel"],
  },
  {
    id: "folie",
    name: "Hôtel Folie – Orso Hotels",
    area: { es: "París", en: "Paris" },
    address: "Hôtel Folie Orso Hotels, Paris",
    mapUrl: "https://maps.app.goo.gl/PdVuB3JM3uarycEu5",
    members: ["Teemu", "Amanda", "Diana"],
  },
  {
    id: "terreneuve",
    name: "Hotel Terre Neuve",
    area: { es: "París", en: "Paris" },
    address: "Hotel Terre Neuve, Paris",
    mapUrl: "https://maps.app.goo.gl/g4EvszRm6kbvfH8g8",
    members: ["Jonathan", "Julie", "Christina"],
  },
  {
    id: "airbnb",
    name: "Airbnb",
    area: { es: "París", en: "Paris" },
    address: "Airbnb Paris",
    mapUrl: "https://maps.app.goo.gl/BgF4baPbPz4Hvzkm6",
    members: ["Carla"],
  },
];

/* --- UI STRINGS ----------------------------------------------------------- */
window.I18N = {
  es: {
    lang: "ES",
    appName: "París",
    subtitle: "Logística del equipo",
    tabExcursions: "Excursiones",
    tabStays: "Hospedajes",
    excursionsTitle: "Excursiones",
    excursionsLead: "Fecha, horario y punto de encuentro de cada salida.",
    staysTitle: "Hospedajes",
    staysLead: "Dónde duerme cada quién y cómo llegar.",
    meetPoint: "Punto de encuentro",
    viewMap: "Ver en mapa",
    appleMaps: "Apple Maps",
    sleepsHere: "Quiénes duermen aquí",
    searchPlaceholder: "Busca a un compañero…",
    searchHint: "Escribe un nombre para ver dónde se aloja.",
    resultPrefix: "se aloja en",
    noResults: "Sin coincidencias",
    people: "personas",
    person: "persona",
    clear: "Limpiar",
    footerNote: "Carga las rutas con WiFi antes de salir.",
  },
  en: {
    lang: "EN",
    appName: "Paris",
    subtitle: "Team logistics",
    tabExcursions: "Excursions",
    tabStays: "Stays",
    excursionsTitle: "Excursions",
    excursionsLead: "Date, time and meeting point for each outing.",
    staysTitle: "Stays",
    staysLead: "Who sleeps where, and how to get there.",
    meetPoint: "Meeting point",
    viewMap: "View on map",
    appleMaps: "Apple Maps",
    sleepsHere: "Who sleeps here",
    searchPlaceholder: "Search a teammate…",
    searchHint: "Type a name to see where they're staying.",
    resultPrefix: "is staying at",
    noResults: "No matches",
    people: "people",
    person: "person",
    clear: "Clear",
    footerNote: "Load your routes on WiFi before heading out.",
  },
};
