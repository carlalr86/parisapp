# Travel App Navigation

_Started 2026-06-04 18:13 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Paris App"
Project is currently empty (no files)
Current date is now June 4, 2026
</system-info>

<pasted_text name="Pasted text (1 lines)">
1. Contexto y problemaDescripción del problemaEl equipo de Product Discovery se encuentra fragmentado logísticamente en París. Se distribuyen en 4 alojamientos diferentes y deben converger puntualmente en 3 excursiones definidas, lo que dificulta la orientación espacial y la sincronización sin una herramienta centralizada.Contexto de negocioEs indispensable resolverlo de inmediato para garantizar el éxito logístico del viaje del equipo. Permite visualizar en un mapa la ubicación exacta de los hospedajes y las atracciones, optimizando el tiempo y evitando demoras o pérdidas en una ciudad extranjera.Usuarios afectadosIntegrantes del equipo de Product Discovery. Actualmente dependen de mensajes dispersos en chats para coordinar ubicaciones y horarios, lo que resulta ineficiente y propenso a confusiones.Impacto actual de no resolverloFalta de alineación en los puntos de encuentro, llegadas tarde a las excursiones programadas y saturación de los canales de comunicación con preguntas repetitivas sobre logística.2. Objetivo y alcanceObjetivo principalProporcionar una aplicación web centralizada, rápida y accesible que sirva como única fuente de verdad para el itinerario y la distribución de alojamientos del equipo durante el viaje a París.Dentro del alcanceVisualización de 3 atracciones/excursiones con fecha, horario y dirección.Visualización de 4 hospedajes con nombre, dirección y lista de integrantes asignados.Botones de redirección a aplicaciones de mapas nativas (Google Maps / Apple Maps).Soporte bilingüe integrado (Inglés y Español).Fuera del alcanceSeguridad de acceso (ej. contraseñas complejas, enlaces ofuscados o gestión de perfiles).Chat interno o mensajería en tiempo real.Seguimiento por GPS en tiempo real de los usuarios.Pasarela de pagos o división de gastos.3. User stories y flujos claveHistoria de usuario 1: AtraccionesComo integrante del equipo, quiero ver la fecha, horario y dirección de las excursiones para llegar a tiempo al punto de encuentro.Criterios de aceptación[ ] Cada atracción muestra título, fecha, hora de inicio/fin y dirección.[ ] Existe un botón visible de "Ver en Mapa" en cada tarjeta.[ ] Al hacer clic en el botón, se abre la aplicación de mapas predeterminada del dispositivo con la dirección cargada.Flujo principal (happy path)El usuario ingresa a la web app.Navega a la sección de "Excursiones".Selecciona la excursión del día y presiona "Ver en mapa".Flujos alternativos / edge casesEl usuario no tiene una app de mapas instalada: el enlace debe redirigir a la versión web de Google Maps.Historia de usuario 2: HospedajesComo integrante del equipo, quiero saber la dirección de los hospedajes y quiénes duermen en cada uno para coordinar salidas conjuntas.Criterios de aceptación[ ] La vista de hospedajes lista las 4 locaciones.[ ] Cada locación muestra la dirección exacta y la lista completa de nombres asignados a ese lugar.Flujo principal (happy path)El usuario ingresa a la web app.Navega a la sección de "Hospedajes".Busca el nombre de un compañero para ver en qué locación se encuentra y a qué distancia está.Historia de usuario 3: IdiomaComo integrante del equipo, quiero poder alternar la interfaz entre inglés y español para usar la herramienta en mi idioma de preferencia.Criterios de aceptación[ ] Existe un selector de idioma (ES/EN) visible en la navegación principal.[ ] Al cambiar el idioma, los títulos, botones y etiquetas se actualizan inmediatamente sin necesidad de recargar toda la página.Flujo principal (happy path)El usuario abre la aplicación (el idioma por defecto es español).Toca el selector de idioma y elige "English".Toda la interfaz cambia al inglés.4. Métricas de éxitoObjetivo de negocio asociadoGarantizar la puntualidad y reducir la fricción comunicacional durante el viaje.MétricaBaseline actualMetaPlazoAsistencia a tiempo a excursionesN/A100%Fin del viajeAdopción de la herramienta0%100% del equipoPrimer día del viajePreguntas logísticas en chat principalAlta (estimada)0 consultasDurante el viajeSeñales de fracasoMúltiples mensajes en el grupo de chat preguntando "¿A qué hora era la excursión?" o "¿Dónde queda el hotel de X?".Integrantes llegando tarde a los puntos de encuentro por perderse.5. Supuestos y riesgosSupuestoRiesgo si es falsoMitigaciónTodos tendrán datos móviles/roaming en París.No podrán acceder a la web en la calle.Diseñar la web lo más ligera posible y sugerir cargar las rutas en el hotel con WiFi.Las direcciones de las excursiones son exactas y mapeables.El botón de mapas arrojará un error o ubicación incorrecta.Validar manualmente los 7 enlaces (3 excursiones, 4 hoteles) antes de compartir la app.La seguridad no es requerida para estos datos.Alguien externo podría ver dónde se aloja el equipo.No incluir apellidos completos ni números de habitación, solo nombres de pila y la dirección general del edificio/hotel.
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design.

Follow this general design process (use the todo list to remember):
(1) ask questions, (2) find existing UI kits and collect design context — copy ALL relevant components and read ALL relevant examples; ask the user if you can't find them, (3) start your file with assumptions + context + design reasoning (as if you are a junior designer and the user is your manager), with placeholders for the designs, and show it to the user early, (4) build out the designs and show the user again ASAP; append some next steps, (5) use your tools to check, verify and iterate on the design.

Good hi-fi designs do not start from scratch — they are rooted in existing design context. Ask the user to Import their codebase, or find a suitable UI kit / design resources, or ask for screenshots of existing UI. You MUST spend time trying to acquire design context, including components. If you cannot find them, ask the user for them. In the Import menu, they can link a local codebase, provide screenshots or Figma links; they can also link another project. Mocking a full product from scratch is a LAST RESORT and will lead to poor design. If stuck, try listing design assets and ls'ing design system files — be proactive! Some designs may need multiple design systems — get them all. Use the starter components (device frames and the like) to get high-quality scaffolding for free.

When presenting several options or explorations side-by-side, lay them out clearly: give the page a neutral gray background, put each option in its own labeled frame (a small heading + a white rounded card sized to its content), and group related options into sections.

When designing, asking many good questions is ESSENTIAL.

Give options: try to give 3+ variations across several dimensions. Mix by-the-book designs that match existing patterns with new and novel interactions, including interesting layouts, metaphors, and visual styles. Have some options that use color or advanced CSS; some with iconography and some without. Start your variations basic and get more advanced and creative as you go! Try remixing the brand assets and visual DNA in interesting ways — play with scale, fills, texture, visual rhythm, layering, novel layouts, type treatments. The goal is not the perfect option; it's exploring atomic variations the user can mix and match.

CSS, HTML, JS and SVG are amazing. Users often don't know what they can do. Surprise the user.

If you do not have an icon, asset or component, draw a placeholder: in hi-fi design, a placeholder is better than a bad attempt at the real thing.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>

<attached-skill name="XFlow Slides System (design system)">
[Design System] This project uses the **XFlow Slides System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/c612ca1f-4808-449f-b473-40e8ac2244a3/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# XFlow Design System

A working brand kit and slide-template recreation for **Visma XFlow** — a Danish digital-workflow / forms platform used primarily by Danish municipalities, regions, educational institutions, government agencies, and private companies.

&gt; **What XFlow is, in their own words (from xflow.dk):** "XFlow gør det simpelt at komme i gang med at digitalisere alt fra jeres simple processer til komplekse arbejdsgange." *(XFlow makes it simple to get started digitalising everything from your simple processes to complex workflows.)*

## Company at a glance

| | |
|---|---|
| **Brand** | XFlow (a Visma company) |
| **Lockup** | "Visma | XFlow" — XFlow is the customer-facing brand, Visma is the parent |
| **Website** | https://www.xflow.dk |
| **HQ** | Axel Kiers Vej 5A, 8270 Højbjerg, Denmark |
| **Primary language** | Danish; English used internally in template UI placeholders |
| **Customers** | 160+ organisations across Danish kommuner (municipalities), regioner, uddannelser (education), styrelser (agencies), private virksomheder |
| **Products** | XFlow (Enterprise), Plug'n'play, KL Blanketter, FrontDesk-integration, Børnelåner, Digital Fuldmagt, Digitalt samtykke |

## What's in the box for this design system

The only artifact provided was the **XFlow Slides Template (135-page PDF)** plus four logo `.ai` files. So this design system is, in practice, a **slide-deck design system** — tokens + chrome + a recreation of every template slide layout.

There is **no product UI kit** here yet. The XFlow web application is a private SaaS workflow builder; we have no source, no Figma, and no in-product screenshots to recreate from. Building a product UI kit without seeing it would be guesswork, so this system intentionally stops at slides + brand. See **CAVEATS** below.

## Sources

- 📄 `assets/XFlow Slides Template.pdf` — the original 135-page deck template, kept as ground truth.
- 🌐 https://www.xflow.dk — used to confirm tone of voice, product naming, customer list, and to pull the canonical color PNG of the logo (Visma sandwich CDN).
- 🎨 `uploads/Logo-Visma-XFlow-rgb-*.ai` — *referenced by the source brief but the files were not present in the upload bundle when the system was assembled.* Logo here was extracted from the live web PNG. See CAVEATS.

---

## Index — what lives where

```
README.md                    ← you are here
SKILL.md                     ← Agent Skill entry-point
colors_and_type.css          ← all design tokens + semantic CSS
fonts/                       ← font substitution notes
assets/
  logo-color.png             ← primary logo, color on light
  logo-on-dark.png           ← inverted (white) logo for dark backgrounds
  logo-symbol.png            ← X-mark + dot, no wordmark
  XFlow Slides Template.pdf  ← ground-truth source
  logos/                     ← original .ai files (placeholder — see CAVEATS)
slides/
  index.html                 ← all slide types in one scaled deck
  *.jsx                      ← per-slide React components
preview/
  *.html                     ← Design System tab cards (tokens, logos, slides, etc.)
```

---

## CONTENT FUNDAMENTALS

### Voice &amp; tone

XFlow's content (web + deck) is **Danish-first, plainspoken, and a little understated.** It's a public-sector vendor: warm and competent rather than playful. No hype, no swagger, no exclamation marks except in genuine asides. They name the boring thing it does, then prove it with a case.

**Tonal anchors:**
- **Pragmatic.** "Digitalisering af blanketter. Automatisering af arbejdsgange." — what it is, then what it does. No metaphor.
- **Customer-led.** Half the homepage is cases. The first slide many decks open with after the title is literally **"XFlow skaber glade kunder"** — XFlow creates happy customers.
- **Bilingual with grace.** Slide structure labels are often Danish (`Evt. beskrivelse`, `Header`, `Bullet`); body content can be either. Don't mix languages within a sentence; switch at section breaks.
- **Public-service register, not enterprise SaaS.** It addresses *jeres organisation* (your organisation, plural-formal), not *du* (you, informal). Mirror in English: "your team" / "your organisation", never "Hey there!".

### Person &amp; address
- Danish: `I / jeres / jer` (plural-formal "you"). Never `du`.
- English: `you / your team / your organisation`. Avoid "we" unless XFlow is the explicit subject of an outcome ("Vi ønsker at indsamle og strukturere data" → on the maturity-ladder slides, the *customer* is the "vi").

### Casing
- **Sentence case** for slide titles and headings: "Bulleted lists", "Simple list vertical", "Key Metrics" (the only Title-Case slip in the template — and it's a single phrase). Use sentence case as the default.
- **lowercase URL** in the footer: `www.xflow.dk` (never `Www.XFlow.dk`).
- **Product names retain camel-case**: XFlow, FrontDesk, KL Blanketter, Plug'n'play.

### Punctuation &amp; rhythm
- Em-dashes are used sparingly; en-dashes for ranges and time codes (`H1 2025 – H2 2025`).
- Quotes use curly typographic glyphs: `"…"` for English, `"…"` for Danish (template prefers curly English doubles).
- Numbers in metrics: `XX%` is the placeholder; real metrics keep the `%` tight to the digit.

### Emoji
**No emoji.** None in the deck, none on the website, none in product copy. Don't introduce them. If a "visual punctuation mark" is needed, use the blue diamond from the logo, a chip, or a colored bullet — never an emoji.

### Specific examples

Lifted directly from the source PDF / xflow.dk:

| Pattern | Example |
|---|---|
| Section title | `Section Title` / `Quick description about the section.` |
| Bullet copy | `Add a quick description of each thing, with enough context to understand what's up.` |
| Highlight | `Use this slide to highlight a single, important thing. To keep it short and sweet, you might link away to relevant doc or file.` |
| Quote | `"This is a stellar quote from a user or customer that really stands out."` — *Full Name · Location* |
| Big-metric slide | `XX%` / `Highlight a key metric—like a goal, objective, or insight—that supports the narrative of your deck.` |
| Real DK opener | `XFlow skaber glade kunder` |
| Real DK section | `Modenhedstrappe — Hvor ser I jeres organisation?` |

---

## VISUAL FOUNDATIONS

### Colors

A two-color brand: **Navy** (primary, ~95% of ink) and **Accent Blue** (the "blå prik" — the small diamond inside the logo).

| Token | Hex | Use |
|---|---|---|
| `--xflow-navy` | `#183058` | Headings on light, brand fills, the deeper of the two |
| `--xflow-blue` | `#4068B0` | Accent — bullets, chips, the dot, link color, single-metric numerals |
| `--xflow-blue-100` | `#DCE6F4` | Soft fills, chip background |
| `--ink` … `--ink-4` | `#0D1729 → #8A93A8` | Body type tiers |
| `--paper`, `--paper-2`, `--paper-3` | `#FFFFFF → #ECEEF5` | Slide bg + alt panels |

Avoid bright/saturated colors outside this palette. Semantic `--success/--warning/--danger` are defined but should be used **only** when chart legends genuinely require them — the deck stays monochrome-blue by default.

### Type

- **Headings &amp; display:** *Ubuntu* (700 / 500 / 400). The clean geometric sans used by the XFlow wordmark and all slide titles.
- **Body, UI, captions:** *Open Sans* (400 / 500 / 600 / 700). The workhorse body face — neutral, screen-friendly, strong in Danish diacritics.
- **Monospace:** *DM Mono* — for the (rare) code or numeric label callout.
- **Weights used:** Open Sans 400 (body) / 500 (meta) / 600 (sub-heads) · Ubuntu 700 (titles, display).
- **Tracking:** tight on display (`-0.02em` to `-0.04em`), loose+uppercase only on footer URL.
- **No serifs, no script, no italic display.** Italics allowed inline for emphasis sparingly.

Both fonts are loaded from Google Fonts via `colors_and_type.css`; no local font files are bundled.

### Spacing

Multiples of 4: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Slide page margins are large: **96px horizontal, 72px top, 56px bottom** at 1920×1080. That's roughly 5–7% on every edge.

### Backgrounds

- **White-paper default.** The deck is overwhelmingly white-bleed. Type provides the rhythm; background does almost nothing.
- **Navy section openers.** The only common alternate is full-bleed `--xflow-navy` for section-title slides ("kapitelmarkører").
- **No gradients.** None in the source. Do not introduce purple/blue gradient washes.
- **No hand-drawn illustration. No texture. No grain.** Photography is product / case-study screenshots; placeholder slides show empty image frames with the word "Image".
- **No full-bleed photography on chrome slides.** Images live in dedicated image-slot regions, never under text.

### Animation &amp; motion

The PDF is static and gives us nothing direct, but on the web the brand uses calm, fade-and-translate transitions. For decks built in this system:
- Slide transitions: **fade or cross-dissolve, ~320 ms**.
- Element entry: **fade + 8px translate-up, 200 ms, stagger 60 ms.**
- Easing: `cubic-bezier(.16,.84,.44,1)` (gentle deceleration). **No bounces, no overshoot, no spring.**
- Hover on links/buttons: opacity 0.8 OR shift to `--xflow-navy-700` — never scale or shadow-pop.
- Press: scale `0.98` for tactile elements (button); never invert color.

### Borders, shadows, depth

- Hairlines: `1px solid var(--line)` (`#E4E7EF`). Used on cards, dividers, table grid.
- Cards: subtle — `--shadow-1` (1–2 px), only on detached elements (quote cards floating over neutral panel). Most surfaces are flat-with-border, not shadowed.
- No inner shadows. No glow. No "glassmorphism".
- **Transparency / blur:** essentially unused. Don't introduce backdrop-filter.

### Corner radii

| Scale | Use |
|---|---|
| `4 px` | Chip inset, table cell radius, tight tags |
| `8 px` | Inputs, default UI |
| `12 px` | **Default card radius** — quotes, key-metric cards, image frames |
| `16 px` | Hero containers, full-width panels |
| `24 px` | Very large image frames, dashboards |
| `pill (999)` | Time-code capsules in the agenda, status chips |

### Cards — anatomy

```
┌──────────────────────────┐
│  12 px radius            │  bg: white
│  1 px solid #E4E7EF      │  border: --line
│  24 px padding           │  no shadow (shadow-1 only when floating)
│                          │
│  [content]               │
└──────────────────────────┘
```

Quote cards, metric cards, and image cards all share this anatomy. The only colored variant is `card--ink` (navy fill, white text) reserved for hero or accent positions.

### Layout rules

- **Slide canvas:** 1920×1080, never another aspect.
- **Persistent footer:** every slide bears `www.xflow.dk` bottom-left in `--ink-3`, 14 px, lowercased. *Always present, never moved.*
- **Logo placement:** title slide centers the lockup; section slides bottom-right; content slides usually omit the logo (footer is enough).
- **Two-column body:** `min(560px, 30%)` left rail (title + description) + `1fr` right body. Don't right-align titles.

---

## ICONOGRAPHY

**The deck template uses essentially no icons.** No icon font, no bundled SVG set, no emoji. Information is carried by:

1. Type weight and size.
2. The blue square bullet (the dot from the logo, repurposed as a list bullet at `8×8 px, 2 px radius`).
3. Pill-shaped time capsules for agenda timing.
4. Empty image placeholders (a labelled blank rect) where real photos go.

**If a project genuinely needs UI iconography** (e.g. you're building a product mock alongside slides), use **Lucide** at 1.75–2 px stroke weight, `--xflow-navy` (light bg) or white (dark bg). Lucide matches the deck's geometry better than Heroicons or Phosphor. This is a substitution — **flag it explicitly** in the artifact.

Do **NOT**:
- Draw your own SVG illustrations of cogs / handshakes / clouds / etc.
- Use emoji as iconography.
- Mix two icon families in one deliverable.
- Use color-blocked or 3D icons.

---

## CAVEATS

&gt; **Read this before iterating.**

1. **The original `.ai` logo files were referenced in the brief but not present in the upload bundle.** I extracted the color logo from the live `xflow.dk` CDN and synthesised the on-dark variant by inverting luminance. Native SVG/vector outlines for the wordmark are not in this system. **→ Please re-attach the four `.ai` files** so the assets can be replaced with true vectors.
2. **Font files are loaded from Google Fonts (Ubuntu + Open Sans + DM Mono).** No local `.woff2` is bundled. If the deck has to render fully offline, drop the files into `fonts/` and swap the `@import` in `colors_and_type.css` for a local `@font-face` block.
3. **No product UI kit.** The XFlow web application is private SaaS — no source, no Figma URL, no screenshots were provided. This system covers slides + brand only. **→ If a product kit is wanted, please attach screenshots or grant Figma access** to the relevant files and I'll add a `ui_kits/xflow-app/` companion.
4. **PDF page render fidelity:** I was unable to render the source PDF to pixels inside the build environment (`pdf.js` consistently timed out on this 135-page file). The slide templates here were rebuilt from the PDF's structured text layer + visual brand cues, not from per-page image references. Side-by-side comparison with the PDF in PowerPoint/Keynote is recommended for layout-margin tuning.
5. **Language:** sample copy on the rebuilt slides defaults to English-ish placeholder text matching the source. Real Danish copy (`Modenhedstrappe`, `Mød XFlow Teamet`) is also present where the source used it.

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/c612ca1f-4808-449f-b473-40e8ac2244a3/colors_and_type.css`, `/projects/c612ca1f-4808-449f-b473-40e8ac2244a3/preview/cards.css`, `/projects/c612ca1f-4808-449f-b473-40e8ac2244a3/slides/slides.css`). The 67 custom properties it defines are:

--danger, --dur-1, --dur-2, --dur-3, --ease-out, --ease-std, --font-display, --font-mono, --font-sans, --info, --ink, --ink-2, --ink-3, --ink-4, --lh-loose, --lh-normal, --lh-snug, --lh-tight, --line, --line-strong, --paper, --paper-2, --paper-3, --r-1, --r-2, --r-3, --r-4, --r-5, --r-pill, --s-1, --s-10, --s-2, --s-3, --s-4, --s-5, --s-6, --s-7, --s-8, --s-9, --shadow-1, --shadow-2, --shadow-3, --slide-h, --slide-pad, --slide-pad-bot, --slide-pad-x, --slide-pad-y, --slide-w, --success, --t-body, --t-body-sm, --t-display, --t-h1, --t-h2, --t-h3, --t-h4, --t-meta, --tracking-meta, --tracking-tight, --warning, --xflow-blue, --xflow-blue-100, --xflow-blue-300, --xflow-blue-50, --xflow-navy, --xflow-navy-500, --xflow-navy-700

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/c612ca1f-4808-449f-b473-40e8ac2244a3/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

<attached-skill name="Visma Design System (design system)">
[Design System] This project uses the **Visma Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/019dd8de-8aa0-7330-a9d9-f71efa0b3b0d/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Visma Design System

A working design system for **Visma** — built from Visma's official corporate brand
assets (the Visma wordmark, the **VA** monogram, and the **Visma Text** typeface) and
the public brand guidelines at [design.visma.com](https://design.visma.com).

This repository lets a design agent produce on-brand Visma interfaces, slides, and
marketing artifacts — either as throwaway HTML mocks or as a reference for production work.

---

## 1. Company &amp; product context

**Visma** is one of Europe's largest business-software companies, headquartered in Oslo,
Norway. It operates as a **house of brands** — a large ecosystem of accounting, ERP, HR,
payroll, and public-sector SaaS products sold across the Nordics, Benelux, and beyond.
The corporate brand sits *above* the product brands and ties the ecosystem together.

Visma recently went through a full brand refresh ("Visma Unified Design") that introduced
a **bold, vibrant, human** identity: a white-dominant canvas, a single strong brand colour
(**Visma Purple**), a confident black wordmark, and a signature **Amplify** gradient that
shifts from purple into warm tones. The goal of the refresh was to make a complex global
tech company feel *human, clear and approachable* — "a brand that speaks like a human to
humans" rather than technology talking to itself.

### Two layers of identity
- **Corporate brand** (this system's primary focus) — the Visma masterbrand: wordmark,
  VA monogram, purple, Amplify gradient, Visma Text. Used for marketing, communications,
  decks, careers, investor material. Source of truth: `design.visma.com`.
- **Product UI** — Visma also maintains a functional product component library
  (`ux.visma.com`) for the in-app experience of its SaaS products. We did **not** have
  access to that codebase, so the UI kit here recreates the **corporate / marketing**
  surface, not the in-product application chrome. See Caveats.

### Sources provided / used
- **Brand assets folder** (`Design/`, mounted locally): Visma Text font family
  (OTF / WOFF2 / TTF), Visma wordmark logo (SVG/PNG/EPS/AI, black &amp; white),
  VA monogram logo (same formats).
- **Public brand guidelines:** `https://design.visma.com` — Colours and Typography pages
  were read to confirm exact palette values (Visma Purple `#7F56FA`, Black `#131313`,
  the Amplify gradient, and the secondary palette).
- No Figma file, no product codebase, and no slide template were provided.

---

## 2. Content fundamentals

How Visma writes. The brand voice is **human, direct, and confident** — deliberately
*not* corporate jargon.

- **Person &amp; address:** Speaks **to "you"** as a real person, **as "we"** as Visma.
  Warm and plain-spoken, never institutional ("we" not "the company").
- **Tone:** Clear, optimistic, grounded. Explains *what we do* in human terms instead of
  abstract tech-speak. Short declarative sentences. Confidence without hype.
- **Casing:** **Sentence case everywhere** — headlines, buttons, nav, labels. Avoid
  Title Case. The only all-caps usage is small overline/eyebrow labels and the wordmark.
- **Headlines:** Bold, large, often a single strong statement. Can be a short human claim
  ("Software that makes a difference") rather than a feature list.
- **Punctuation:** Minimal. Few exclamation marks. No emoji in corporate communication.
- **Numbers / proof:** Used sparingly and only when meaningful — avoid stat-stuffing.
- **British English** spelling in brand material ("colours", "personalisation",
  "organisation").

Example voice (in the brand's spirit):
&gt; "We make software that makes a difference — for the people who use it every day."
&gt; "Less admin. More of what matters."

Avoid: buzzword chains, "leverage / synergy / best-in-class", shouty CTAs, emoji,
Title Case headlines.

---

## 3. Visual foundations

The Visma look is **white-dominant, bold, and calm**, punctuated by purple and the
Amplify gradient. It reads as premium-but-human: lots of breathing room, heavy type,
one decisive colour.

### Colour
- **White (`#FEFEFE`) is the dominant base.** Most surfaces are white or near-white.
- **Visma Purple (`#7F56FA`)** is *the* brand colour — used for key surfaces, primary
  buttons, accents, and full-bleed brand moments. White always sits on purple
  (never black on purple).
- **Black (`#131313`)** for the wordmark, headlines, structure, and high-contrast
  sections. It's a soft near-black, not pure `#000`.
- **Secondary palette** (Olive `#4A4608`, Burgundy `#4C0C32`, Creme `#F9F5F1`,
  Cool Grey `#B9C4C9`, Cool Grey Light `#E7EBEC`) is used in a **controlled, supporting**
  way — never competing with the primary palette.
- **Amplify gradient** (purple → warm orange) is the signature expression. Used *with
  intent* on covers, highlights, and brand moments — to "amplify" a message, not fill
  space. Always balanced with white space. Can be linear or organic/radial, and used in
  segments (purple-only, full amplify, orange-only) for varying intensity.

### Typography
- **Single typeface: Visma Text** (custom). A clean, slightly humanist grotesque with
  distinctive details (the angular `A`/`V`, stylised `S`). Weights available: Regular 400,
  Medium 500, SemiBold 600, Bold 700, ExtraBold 800 (+ italics).
- **Display/headlines:** ExtraBold or Bold, large, **tight negative tracking** (`-0.02`
  to `-0.03em`), line-height near 1.0–1.15. Headlines do a lot of the visual work.
- **Body:** Regular 400, ~17px, line-height ~1.55, normal tracking.
- **Overlines/eyebrows:** SemiBold, uppercase, wide tracking (`0.14em`), small.

### Backgrounds &amp; motifs
- Predominantly **flat white / flat colour**. No drop-shadow-heavy skeuomorphism.
- **Amplify gradient** as the hero background motif on brand moments.
- **Halftone / dot-wipe** motif appears in brand motion (the homepage "halftone wipe"
  and the VA↔VISMA logo animation) — a transition texture, used sparingly.
- No stock-photo collage clutter; imagery is clean, bright, human, and confident.

### Animation
- Smooth and purposeful. **Fades and gradient/halftone wipes**, gentle reveals.
- Easing is eased-out and unhurried (no aggressive bounce). Motion "extends energy
  outward" — momentum, not decoration. Reduced-motion friendly.

### Interaction states
- **Hover:** subtle — purple buttons darken (`--purple-600`/`700`); ghost/links shift to
  purple or gain underline; cards lift with a soft shadow.
- **Press:** slight darken + ~1px nudge / 0.98 scale. No harsh flashes.
- **Focus:** 2px purple ring with offset for accessibility.

### Surfaces, borders, elevation
- **Corner radius:** moderate and friendly — `10–16px` for cards/inputs, `999px` pills
  for buttons and tags. Not sharp, not overly rounded.
- **Cards:** white on white differentiated by a **hairline border** (`#E7EBEC`) and/or a
  **soft, low-contrast neutral shadow** — never heavy. Cool-toned shadows.
- **Borders:** hairlines in Cool Grey Light; stronger dividers in Cool Grey; black only
  for high-contrast structural lines.
- **Transparency / blur:** used lightly for overlays and sticky nav (frosted white). Not
  a dominant motif.
- **Imagery vibe:** bright, warm-neutral, human, optimistic — not cold/corporate, not
  heavy grain or B&amp;W.

### Layout
- Generous margins and white space; content rarely fills edge-to-edge except for
  full-bleed brand/gradient moments.
- Strong typographic hierarchy carries layouts; few decorative elements.
- Sticky frosted top nav with the wordmark at left.

---

## 4. Iconography

- **Corporate brand iconography is minimal.** Visma's masterbrand leans on **bold type,
  the wordmark, the VA monogram, and the Amplify gradient** rather than a decorative icon
  set. The closest thing to a "graphic element" is the **halftone dot** motif used in
  motion.
- **No icon font, sprite, or icon SVGs were provided** in the brand assets folder (only
  logos + fonts). Visma's *product* UI library (ux.visma.com) has its own functional icon
  set, but we did not have access to it.
- **Emoji:** not used in corporate communication.
- **Unicode glyphs:** used only incidentally (e.g. arrows `→` in links/CTAs), which suits
  the minimal style well.

**Substitution (flagged):** Where UI icons are genuinely needed (nav, buttons, feature
rows), this system uses **[Lucide](https://lucide.dev)** from CDN — a clean, consistent
1.5–2px stroke set that matches Visma's calm, modern, humanist feel. **This is a
substitute, not an official Visma icon set.** If Visma's real product icon set is
available, swap it in and update this section.

### Logo assets (in `assets/`)
- `Visma_Black.svg` / `Visma_White.svg` — primary wordmark (viewBox 485×144, ratio ~3.37:1)
- `Visma_Black.png` / `Visma_White.png`
- `VA_Black.svg` / `VA_White.svg` — VA monogram (viewBox 194×128, ratio ~1.51:1)
- `VA_Black.png` / `VA_White.png`

Logo rules: use Black on light backgrounds, White on dark/purple/gradient. Maintain clear
space; don't recolour, stretch, or set the wordmark in a competing colour. Never place the
black logo on a purple or dark background.

---

## 5. Index — what's in this system

| File / folder | What it is |
|---|---|
| `README.md` | This file — context, content + visual foundations, iconography, index |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code / downloads) |
| `colors_and_type.css` | **Foundations:** CSS vars for colour, type, spacing, radii, shadows, Amplify gradient, `@font-face` for Visma Text + semantic helper classes |
| `fonts/` | Visma Text webfonts (WOFF2, weights 400–800 + italics) |
| `assets/` | Visma wordmark + VA monogram logos (SVG + PNG, black &amp; white) |
| `preview/` | Design-system specimen cards (colour, type, spacing, components, brand) |
| `ui_kits/marketing/` | **UI kit:** Visma corporate / marketing website recreation (React/JSX components + interactive `index.html`) |

### Caveats
- **No product codebase or Figma** was provided — only corporate brand assets. The UI kit
  recreates the **marketing/corporate** surface, faithful to `design.visma.com`. It does
  **not** recreate Visma's in-product SaaS application chrome.
- **Icons are substituted with Lucide** (flagged above) — no official Visma icon set was
  available.
- Functional colours (success/warning/error) are **derived** to harmonise with the
  palette; they are not official brand tokens.

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/019dd8de-8aa0-7330-a9d9-f71efa0b3b0d/colors_and_type.css`). The 80 custom properties it defines are:

--amplify, --amplify-orange, --amplify-organic, --amplify-purple, --bg-1, --bg-2, --bg-3, --bg-dark, --bg-purple, --burgundy, --cool-grey, --cool-grey-light, --creme, --error, --fg-1, --fg-2, --fg-3, --fg-accent, --fg-on-dark, --fg-on-purple, --font-mono, --font-sans, --fs-body, --fs-caption, --fs-display, --fs-h1, --fs-h2, --fs-h3, --fs-h4, --fs-lead, --fs-overline, --fs-small, --info, --lh-body, --lh-heading, --lh-snug, --lh-tight, --line-1, --line-2, --line-strong, --ls-body, --ls-display, --ls-heading, --ls-overline, --olive, --purple-050, --purple-100, --purple-300, --purple-500, --purple-600, --purple-700, --radius-lg, --radius-md, --radius-pill, --radius-sm, --radius-xl, --shadow-1, --shadow-2, --shadow-3, --shadow-purple, --space-1, --space-10, --space-2, --space-3, --space-4, --space-5, --space-6, --space-7, --space-8, --space-9, --success, --visma-black, --visma-purple, --visma-white, --w-bold, --w-extrabold, --w-medium, --w-regular, --w-semibold, --warning

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/019dd8de-8aa0-7330-a9d9-f71efa0b3b0d/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: questions_v2]_

This is a great brief — a focused, mobile-first logistics app for your Product Discovery team's Paris trip. Before I design, I have some questions so I build the right thing. A few are about the *real data* (which the PRD describes but doesn't include), and the rest are about direction.

## User

Questions answered:
- real_data: I'll paste the real data now (add it in chat)
- design_lean: Visma (purple, modern, app-like)
- map_view: Just the deep-link buttons (per PRD scope)
- primary_device: Mobile + works on desktop
- home_structure: Tabs: Excursions / Accommodations (per PRD sections)
- variations: Just one polished direction
- explore_dims: Card design for accommodations & excursions
- member_feature: Decide for me
- tweaks: Language default (ES/EN)
- team_size: 12

## Assistant

_[tool: update_todos]_

_[tool: list_files]_

Got it — Visma look, deep-link map buttons, mobile + desktop, tabbed (Excursions / Accommodations), one polished direction with extra care on card design, ES default with a language tweak. I'll build it with realistic Paris placeholders that are trivial to swap — **paste your real data whenever and I'll drop it in.**

Let me set up and pull in the Visma design assets.Let me read the core CSS and a couple of component references.

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_files]_

I have what I need. Let me copy the fonts, CSS, and logos into the project.

_[tool: copy_files]_

_[tool: delete_file]_

The CSS references `fonts/` relatively — let me put it at root so paths resolve.

_[tool: copy_starter_component]_

Now I'll set up the Tweaks panel scaffold and build the app. Let me grab the starter and write the data layer.

_[tool: write_file]_

Now the data layer with bilingual strings and editable placeholder data:

_[tool: write_file]_

Now the main app component:

_[tool: write_file]_

Now the HTML shell with all styles:

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

Cards aren't rendering and the tabs layout is broken. Let me check the console.

_[tool: eval_js]_

No errors. Let me inspect whether the cards are in the DOM.

_[tool: str_replace_edit]_

The cards exist but are stuck invisible — my entrance animation uses backwards fill (`both`), and in a backgrounded iframe the animation never advances, so they hold at opacity 0. The tabs indicator is also breaking the grid. Both are robustness bugs worth fixing properly: I'll make the visible state the base (so content shows even if animation never runs) and take the ink indicator out of grid flow.

_[tool: read_file]_

Let me clean up that first edit which left stray rules.

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

_[tool: show_html]_

The screenshots look stale — my iframe didn't reload after the edits. Let me reload and re-check the DOM.

_[tool: eval_js]_

_[tool: eval_js]_

Tabs are fixed now (side by side). It's on the Stays tab. But screenshots showed no cards — let me check the stay cards' actual visibility now that it's reloaded.

_[tool: save_screenshot]_

Cards render fine now (the earlier screenshots were stale). Let me capture fresh states.

_[tool: eval_js]_

Looking sharp. Let me verify the teammate search actually filters (the screenshot didn't seem to update).

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

React's controlled input ignored the synthetic event (a test artifact — real typing works). Let me drive it the React-compatible way to visually confirm filtering renders.

_[tool: save_screenshot]_

Filtering works correctly. Let me capture the filtered state visually.

_[tool: update_todos]_

_[tool: done]_

That's a polished, on-brand result — the Amplify hero, working tabs, excursion cards with meeting points + map deep-links, accommodation rosters with avatars, and live teammate search that highlights the match. Let me finalize.

_[tool: fork_verifier_agent]_

Built **Paris App** — a mobile-first (works on desktop too) logistics app in the Visma look.

**What's there**
- **Hero** — the one Amplify-gradient brand moment, with team, trip dates, and the ES/EN toggle (instant switch, persisted).
- **Excursiones tab** — 3 outing cards: day chip, date, time, meeting point, address, and a **"Ver en mapa"** deep-link (Google Maps universal URL → opens the native app on phones, falls back to web — covers the PRD edge case). Secondary Apple Maps link.
- **Hospedajes tab** — 4 lodgings with neighbourhood, address, map links, and rosters as avatar chips (first names only, per your security note). A **teammate search** filters to the right lodging and highlights the person ("Sofía se aloja en Citadines Bastille").
- **Tweaks** (toolbar) — default language (ES/EN) and primary map app (Google/Apple).

**Important:** the trip data is realistic Paris **placeholder** content — paste your real accommodations, members, excursions, dates and addresses and I'll drop them in. The 7 addresses just need to be exact for the map links to land correctly.

A couple of optional next steps if useful: a "Today" highlight that auto-surfaces the day's excursion, or an offline-cache so it loads without data in the street.

