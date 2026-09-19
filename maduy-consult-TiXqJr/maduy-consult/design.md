# Maduy Consult — Design

Single-page marketing site for **Maduy Consult Limited** (Toronto • Lagos) — the firm that helps
Canadian companies enter and grow in Nigeria and West Africa. Ships on web only.

Visual direction: **dark, geometric, restrained**. Charcoal ground, one sharp orange accent, generous
whitespace, hard edges. Reference feel: phillipsconsulting.net — cinematic dark hero, wordmark-led,
one confident positioning line, insight-led content. No stock handshake photography, no rounded
pastel card grids, no gradient blobs.

## Brand & Colors

Tokens live in `packages/web/src/web/styles.css` (`@theme` block). Web only — no mobile package.

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#1C1D1F` | Primary dark ground (nav, hero, alliance, contact, footer) |
| `ink-2` | `#232427` | Raised surface on dark — cards, panels |
| `ink-3` | `#2E3033` | Hairlines and dividers on dark |
| `brand-grey` | `#88898D` | Logo grey, secondary text on dark, rules |
| `brand-orange` | `#EE6C24` | The single accent. Sampled from the logo triangle |
| `paper` | `#FFFFFF` | Light section ground |
| `bone` | `#F4F3F1` | Alternate light ground |
| `slate` | `#4A4C50` | Body text on light |

Sampled from the client's printed business card. **Grey, orange and white only** — the card's green
and gold are deliberately dropped at the client's instruction.

## Typography

- **Display — Archivo** (600/700/800). Headlines, section labels, stat figures. Tight tracking
  (`-0.03em`) at large sizes.
- **Body — Manrope** (400/500/600). Paragraphs, nav, form fields, footer.
- Loaded from Google Fonts in `packages/web/index.html`; exposed as `font-display` / `font-sans`.
- Eyebrow labels: Manrope 500, `0.72rem`, `0.18em` letter-spacing, uppercase, `brand-grey`.

## Logo

Rebuilt as clean SVG at `packages/web/public/images/maduy-mark.svg` (grey notched hexagon + orange
triangle). The raster crop from the business card is never shipped. Lockup = mark + "MADUY CONSULT"
wordmark in Archivo 700, tracking `0.06em`.

## Pages & Sections

Four routes, registered in `packages/web/src/web/app.tsx` (wouter):

| Route | File | Purpose |
|-------|------|---------|
| `/` | `pages/index.tsx` | Home — the scrolling marketing page (below) |
| `/alliance` | `pages/alliance.tsx` | How the consortium is structured. The page a referrer or adviser is sent to |
| `/west-africa` | `pages/west-africa.tsx` | The market evidence base, every claim cited and linked |
| `/funding` | `pages/funding.tsx` | CanExport SMEs, framed as client benefit |

Depth pages share `components/page-shell.tsx` — Nav, a dark page hero (eyebrow / headline /
rule-marked standfirst), the page body, a `CtaBand`, then Footer. `PageShell` scrolls to top on
mount. Section grounds alternate `ink → paper → ink → bone` to keep long pages readable.

**Public-content rule.** The site URL goes on business cards, letterheads and email signatures, so
nothing internal may live on this domain at any path: no pricing or offer ladder, no risk register,
no named prospects, no competitor positioning, no unverified bios. Only openly-sourced material and
the firm's own structure. The internal strategy document stays a document.

### Home — `pages/index.tsx`

Single scrolling page composed from section components in `packages/web/src/web/components/`:

1. **Nav** (`nav.tsx`) — fixed; transparent over the home hero, always solid on depth pages.
   Wouter `Link` for routes, `/#hash` anchors for home sections (works from any page).
2. **Hero** (`hero.tsx`) — dark. Positioning line, sub-line about contracting in Canada, three
   verified proof figures. Geometric hexagon-lattice background, no photography.
3. **What we do** (`what-we-do.tsx`) — light. Two columns: Maduy's own practice (financial advisory,
   corporate finance, performance improvement) beside the Canada–West Africa offer (four pillars
   from the card back).
4. **The Alliance** (`alliance.tsx`) — dark. Three named firms, how the contracting works, capacity
   statement, separate-legal-services note, and a deep link through to `/alliance`.
5. **Insights** (`insights.tsx`) — bone. Mining Suppliers' Guide, "publishing October". Live email
   capture writing to `guide_signups`; the download itself is not yet wired.
6. **Contact** (`contact.tsx`) — dark. Working form writing to `contact_submissions`, plus
   Toronto • Lagos, the Lagos address, both phone numbers and the email.
7. **Footer** (`footer.tsx`) — alliance disclaimer, verbatim.

## Content Guardrails

- No headcount, team-size, or office claims beyond "Toronto • Lagos" until entities are confirmed.
- Principal bios carry **verified facts only**. Nothing about notarial services validating businesses.
- Legal services are attributed solely to Ehinlaiye Law Professional Corporation, under separate retainer.

## Key User Flows

1. Visitor lands → reads positioning → scrolls to Alliance → submits the contact form → row lands in
   `contact_submissions`, inline success state replaces the form.
2. Visitor wants the guide → enters email in Insights → row lands in `guide_signups` → confirmation
   copy says the guide is sent when it publishes in October.

## Architecture

- **API**: oRPC procedures in `src/api/routes/contact.ts` and `guide.ts`, composed in `src/api/index.ts`.
- **DB**: Drizzle/Turso. Tables `contact_submissions`, `guide_signups` in `src/api/database/schema.ts`.
- **Client**: hooks in `src/web/queries/contact.ts` and `guide.ts` — components never call
  `orpc.*.mutationOptions()` inline. Both mutations show pending state and disable their button.
