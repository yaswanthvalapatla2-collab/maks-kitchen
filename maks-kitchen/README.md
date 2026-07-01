# Mak's Kitchen — Premium Restaurant Website

A production-ready, single-page marketing site for **Mak's Kitchen**, a multi-cuisine
restaurant in Mehdipatnam, Hyderabad. Dark, luxury aesthetic with warm gold accents,
glassmorphism, Mughal-arch framing, and smooth scroll-driven motion throughout.

Built as a pitch-ready demo: every photo is extracted from the restaurant's own
Google Maps gallery, and every menu item and price is transcribed from the printed
2024 menu. No stock imagery, no placeholder dishes.

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (fast dev server & optimized build)
- **Tailwind CSS 3** (custom design tokens)
- **Framer Motion** (reveals, parallax, lightbox, accordion, tab transitions)
- **Lucide React** (icons)

Dependencies are pinned to stable versions for reproducible installs.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

---

## Editing content — one file

All copy, menu data, dishes, reviews, FAQs and restaurant details live in a single
source of truth:

```
src/lib/data.ts
```

Change a price, add a dish, swap a review, or update the address there and it
propagates everywhere. Highlights:

- `restaurant` — name, phone, email, address, hours, rating, coordinates, map links
- `menu` — the full digital menu (15 categories), each item with price / description /
  veg / spicy / signature flags. `menuItemCount` is derived automatically
- `signatureDishes`, `gallery`, `experience`, `stats`, `reviews`, `faqs`, `nav`

---

## Sections

Hero → About → Why Choose → Signature Dishes → Digital Menu (filter + search +
veg toggle) → Gallery (masonry + lightbox) → Restaurant Experience → Statistics
(animated counters) → Reviews → Visit Us → Map → FAQ → Contact/Reservation → Footer.

---

## Images

Photos live in `public/images/` (hero, `dishes/`, `interior/`, `gallery/`), optimized
to WebP. Two dish photos (biryani, thread chicken) were lightly cropped to remove
Google's on-image text labels; all others are used as captured.

---

## Notes for the demo

- **Contact & reservation forms are preview-only** — they show a success state but
  do not send anything. Wire them to a backend or a service like EmailJS / Formspree
  before going live.
- The **map** is a hand-drawn, brand-matched SVG (no Google Maps API key required);
  the "Get Directions" button opens Google Maps. Swap in an embedded map or a static
  Maps image if a live map is preferred.
- **Review text** is illustrative for the demo; the **4.2★ rating and 3,171 review
  count** reflect the restaurant's actual Google listing.

---

Demo website designed & developed by **Valapatla Yaswanth**.
