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
  dates: { es: "15 – 18 oct 2026", en: "15 – 18 Oct 2026" },
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
    id: "louvre",
    day: { es: "Día 1", en: "Day 1" },
    date: { es: "Jue 15 oct", en: "Thu 15 Oct" },
    time: "10:00 – 13:00",
    title: { es: "Museo del Louvre", en: "Louvre Museum" },
    desc: {
      es: "Recorrido por la colección principal. Punto de encuentro bajo la Pirámide.",
      en: "Tour of the main collection. Meeting point under the Pyramid.",
    },
    meet: { es: "Pirámide del Louvre", en: "Louvre Pyramid" },
    address: "Rue de Rivoli, 75001 Paris, France",
  },
  {
    id: "eiffel",
    day: { es: "Día 2", en: "Day 2" },
    date: { es: "Vie 16 oct", en: "Fri 16 Oct" },
    time: "15:00 – 18:00",
    title: { es: "Torre Eiffel y Campo de Marte", en: "Eiffel Tower & Champ de Mars" },
    desc: {
      es: "Subida a la 2ª planta y picnic en el parque. Llegar 15 min antes.",
      en: "Ascent to the 2nd floor and picnic in the park. Arrive 15 min early.",
    },
    meet: { es: "Pilar Este (Pilier Est)", en: "East Pillar (Pilier Est)" },
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
  },
  {
    id: "versailles",
    day: { es: "Día 3", en: "Day 3" },
    date: { es: "Sáb 17 oct", en: "Sat 17 Oct" },
    time: "09:30 – 16:00",
    title: { es: "Palacio de Versalles", en: "Palace of Versailles" },
    desc: {
      es: "Día completo: palacio y jardines. Salida en grupo desde los hospedajes.",
      en: "Full day: palace and gardens. Group departure from the lodgings.",
    },
    meet: { es: "Place d'Armes (entrada principal)", en: "Place d'Armes (main entrance)" },
    address: "Place d'Armes, 78000 Versailles, France",
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
    id: "marais",
    name: "Hôtel Le Marais",
    area: { es: "Le Marais · 4º", en: "Le Marais · 4th" },
    address: "12 Rue de Turenne, 75004 Paris, France",
    members: ["Ana", "Carlos", "Lucía"],
  },
  {
    id: "bastille",
    name: "Citadines Bastille",
    area: { es: "Bastille · 11º", en: "Bastille · 11th" },
    address: "14 Rue de la Roquette, 75011 Paris, France",
    members: ["Diego", "Marta", "Sofía"],
  },
  {
    id: "montmartre",
    name: "Appart' Montmartre",
    area: { es: "Montmartre · 18º", en: "Montmartre · 18th" },
    address: "8 Rue Lepic, 75018 Paris, France",
    members: ["Javier", "Elena", "Pablo"],
  },
  {
    id: "germain",
    name: "Hôtel Saint-Germain",
    area: { es: "Saint-Germain · 6º", en: "Saint-Germain · 6th" },
    address: "36 Rue Bonaparte, 75006 Paris, France",
    members: ["Noa", "Mateo", "Inés"],
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
