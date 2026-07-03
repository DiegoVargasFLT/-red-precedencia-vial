# Vigía — Design System

**Vigía** ("vigía" = lookout / civic watch) is the design system for a **political-transparency platform for Colombia**, in Spanish. It helps everyday citizens, journalists, researchers/NGOs and public servants follow public money: budgets and execution, contracting, campaign finance, voting records, open data and citizen reporting.

Personality: **modern civic-tech** — friendly and approachable, but credible and source-honest. Editorial at heart: serious serif headlines over a clean civic sans, warm "paper & ink" neutrals, and a Colombian-derived palette (azul / oro / rojo) reworked so it never reads as a literal flag.

> **Brand created from scratch.** There was no prior codebase, Figma or brand attached — the name *Vigía*, the logo, palette, type and voice were designed for this brief (Colombian, Spanish, civic-tech, editorial, full surface set). Everything here is original and open to iteration.

## Sources & provenance
- No external sources (codebase / Figma / decks) were provided. All data shown in cards and UI kits is **fictional and illustrative** (entity names, amounts, politicians). Real product copy references public-data sources by name only (e.g. *SECOP II*, *DNP*) for realism — no real datasets are bundled.

---

## CONTENT FUNDAMENTALS — how Vigía writes

- **Language:** Spanish (Colombia). Neutral, plain, and concrete. Avoid bureaucratic jargon ("ejecución presupuestal" is fine; legalese is not).
- **Voice:** second person and inclusive — *"a dónde va **tu** dinero"*, *"sigue a quienes **te** representan"*, *"cuéntanos qué viste"*. The platform is a tool **for** citizens, not an authority above them.
- **Tone:** calm, factual, non-partisan. We surface data and let people judge. We never editorialize a politician as "corrupt"; we say a contract is *"en riesgo"*, *"sin licitación"*, *"en revisión"*.
- **Source-honesty is a feature.** Almost every data view carries a provenance line or a `Banner`: *"Fuente: SECOP II · actualizado hoy"*, *"Datos preliminares — aún no auditados"*, *"Verifica en la fuente antes de citar."* This humility is core to the brand.
- **Casing:** sentence case for headings and buttons (*"Reportar irregularidad"*, not Title Case). Uppercase only for small eyebrows/overlines and stat labels, with wide tracking.
- **Numbers:** Colombian format — `$1.482.905.330`, decimals with comma (`12,4%`), large sums abbreviated as needed (`$1,48 B` = billones). Always tabular figures in data.
- **Emoji:** essentially none in product UI. A single waving 👋 in the mobile greeting is the only sanctioned use; never in data, charts, headings or buttons.
- **Examples of the vibe:** *"Cuentas claras, poder vigilado."* · *"¿A dónde va cada peso del presupuesto público?"* · *"Te avisaremos de sus nuevas votaciones."* · *"Tu identidad está protegida."*

---

## VISUAL FOUNDATIONS

**Color.** A confident **Andes blue** (`--blue-500`) leads as the primary/brand action color; **Oro / gold** (`--gold-400`) is the energetic accent used *sparingly* (one hero action, highlights, the brand "í"); **rojo** (`--red-500`) is reserved for alerts and negative deltas. **Green** (`--green-500`) signals positive/on-track and is the success color (also a campaign-finance/data hue). Neutrals are **warm** (paper `#FBFAF6`, ink `#14110D`) for an editorial, printed-document feel. An 8-color categorical ramp (`--viz-1…8`) colors parties and chart series. See the Colors cards.

**Type.** Editorial pairing: **Newsreader** (variable serif) for display/headlines, big numbers and pull quotes — often with an *italic* gold emphasis word. **Public Sans** (civic sans, USWDS origin) for all UI and body. **IBM Plex Mono** for tabular money, IDs, codes and timestamps. Headlines are tight (`-0.02em`), large, sentence case. Body is generous (`line-height 1.5–1.7`).

**Spacing & layout.** 4px base grid. Fixed chrome: 248px navy sidebar, 64px topbar. Content max-widths via `--container-*`. Generous panel padding (20–24px). Data screens are dense but never cramped.

**Backgrounds.** Mostly flat warm paper or white. **No decorative gradients as fills.** The *only* sanctioned gradient is the thin **brand spectrum rule** (azul→verde→oro) used as an 8–10px accent band on hero/title surfaces, plus a single soft radial "glow" behind dark title slides. Dark surfaces are solid `--blue-900` or `--green-800`.

**Corners & cards.** Cards: `--radius-lg` (14px), hairline `--border-subtle`, very soft shadow (`--shadow-sm`). Pills/chips/avatars fully round. Dialogs `--radius-xl`. Cards are calm: border + faint shadow, not heavy elevation.

**Shadows.** Navy-tinted (`rgba(20,32,70,…)`), layered, low-opacity ladder `xs→xl`. Used lightly — paper-on-desk, not floating glass.

**Borders.** Hairline 1px neutrals everywhere; 2px only for emphasis (focus, selected). Focus ring = 3px `--blue-200` halo.

**Motion.** Restrained and functional. Quick `--ease-standard` (140ms) for hovers/toggles, `--ease-out` for entrances, `--duration-slow` for bar/meter fills. **No bounces, no infinite decorative loops.** Respect `prefers-reduced-motion`.

**Hover / press.** Hover = one step darker (e.g. blue-500→600) or a soft tint wash for ghost/secondary. Press = darker still + 1px translateY nudge on buttons. Chips/tabs shift background and weight. No scale-up on hover.

**Transparency & blur.** Used only for overlays: dialog scrim is `rgba(20,17,13,.45)` + 2px blur. Sidebar active state is a white 10% wash. Otherwise surfaces are opaque.

**Imagery vibe.** Photography (when used) should be warm, documentary, real — Colombian civic life, public buildings, people. Avatars fall back to clean initials on a blue tint. No stocky gradients or 3D blobs.

---

## ICONOGRAPHY

- **System:** **Lucide** (ISC-licensed), 24px grid, 2px round stroke — friendly, consistent, civic-neutral. We ship a curated subset as React components in **`ui_kits/icons.jsx`** (`window.VIcons`), drawn from Lucide paths so UI kits don't depend on a CDN at runtime. To extend, add more Lucide glyphs to that file (keep the 2px round-stroke spec) or load Lucide from CDN for one-offs.
- **Functional glyphs inside components** (checkbox tick, select caret, close ×, delta arrows, status icons) are inlined as tiny SVGs in the component files — same stroke language.
- **No emoji as icons.** No unicode dingbats as UI icons (the slide ▲/▼ deltas are the one pragmatic exception inside static slide specimens).
- **Brand mark:** the Vigía **eye/lens** (oversight + the light of transparency) — `assets/vigia-mark.svg`, `vigia-tile.svg`, `vigia-logo.svg`, `vigia-logo-inverse.svg`. Pure geometry so it renders identically everywhere. Never redraw it; use these files.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link (`@import`s only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `fonts.css`, `base.css`.
- `assets/` — logo, mark, tile, inverse logo (SVG).

**Specimen cards** (Design System tab) — in `guidelines/` and `slides/`: Brand (logo), Colors (×5), Type (×4), Spacing (×3), Slides (×5).

**Components** (`components/<group>/`, namespace `window.VigADesignSystem_7eb604`)
- **core/** — Button, IconButton, Badge, Tag, Avatar, Card (+CardHeader/CardBody), Divider
- **forms/** — Field, Input, Textarea, Select, Checkbox, Radio, Switch
- **feedback/** — Banner, Toast, Tooltip, Dialog
- **navigation/** — Tabs, SegmentedControl, Breadcrumb
- **data/** — StatCard, DataTable, FilterBar (+FilterChip), ProgressMeter, BarChart, Sparkline, Legend
- Each has `.jsx` + `.d.ts` + `.prompt.md`; each directory has one `@dsCard` card. Component styling lives in `components/components.css` (imported by `styles.css`).

**UI kits** (`ui_kits/<product>/` — interactive recreations)
- **dashboard/** — the core web app: Resumen, Contratos, Congreso (+ report dialog, toasts).
- **profile/** — public politician profile: hero, votaciones, patrimonio, financiación.
- **mobile/** — citizen iPhone app: Inicio, Buscar, Seguidos, Reportar.
- `ui_kits/icons.jsx` — shared icon set (`window.VIcons`).

**Templates** (`templates/<slug>/` — pickable starting points)
- **deck/** — `Deck.dc.html` "Presentación Vigía", a 1280×720 deck (portada, sección, datos, cifra, comparación) on `deck-stage`.

**`SKILL.md`** — makes this folder usable as a downloadable Agent Skill.

---

## CAVEATS
- **Fonts load from Google Fonts CDN** (`tokens/fonts.css`), not self-hosted — so the compiler reports `Fonts: (none)` (no local `@font-face` binaries). This is intentional for now. **If you want offline/self-hosted fonts, share the Newsreader / Public Sans / IBM Plex Mono files (or approve downloading them) and I'll add `@font-face` rules.**
- All figures, names and entities are **fictional**. Wire real sources (SECOP, DNP, CNE, Congreso Visible-style data) before any production use.
