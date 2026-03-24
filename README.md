# VelPoint Cyber Solutions — Next.js 15 (App Router)

Clean conversion of the VelPoint Cyber Solutions website to **Next.js 15 + React 19**.

## Stack

| | Version |
|---|---|
| Next.js | 15.2.4 |
| React | 19 |
| TypeScript | 5 |

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Routes

| URL | Original file |
|---|---|
| `/` | `index.html` |
| `/index-slider` | `index-slider.html` |
| `/index-static-background` | `index-static-background.html` |
| `/index-slider-text` | `index-slider-text.html` |
| `/index-countdown` | `index-countdown.html` |
| `/index-6` | `index-6.html` |
| `/news` | `news.html` |
| `/news-single` | `news-single.html` |
| `/tickets` | `tickets.html` |
| `/tickets-2` | `tickets-2.html` |
| `/contact` | `contact.html` |
| `/index-select` | `index-select.html` |

## Architecture

```
aivent-next/
├── app/
│   ├── layout.tsx               ← Root HTML shell + all CSS <link> tags
│   ├── page.tsx                 ← / (index.html content)
│   └── [route]/page.tsx         ← Each additional page
├── components/
│   ├── PageShell.tsx            ← Server component: preloader, Navbar, Footer wrapper
│   ├── Navbar.tsx               ← Full navigation, JSX with Next.js <Link>
│   ├── Footer.tsx               ← Footer, pure JSX server component
│   ├── BodyClass.tsx            ← Client: sets document.body.className via useEffect
│   └── ScriptInitializer.tsx    ← Client: loads vendor + page JS sequentially after mount
└── public/
    ├── css/                     ← All original CSS files (verbatim, untouched)
    ├── js/                      ← All original JS files (verbatim, untouched)
    ├── images/                  ← All images (untouched)
    ├── fonts/                   ← All font files (untouched)
    └── video/                   ← All video files (untouched)
```

## How the key bugs were fixed

### Hydration errors
The old project applied `class` via server-rendered `<body>` which collided with React's
hydration pass. Fixed by:
- `BodyClass.tsx` applies `document.body.className` only inside `useEffect` (client-only)
- `app/layout.tsx` renders `<body>` with no class attribute at all

### Page preloader (#de-loader) not hiding
`designesia.js` uses `$(window).on('load', ...)` to `fadeOut` the loader. In an SPA
this fires once on first load and never again. Fixed by:
- `ScriptInitializer` removes and re-injects `designesia.js` on every `pathname` change
- This forces jQuery's `document.ready` + `window.load` handlers to fire fresh each navigation

### Footer crash
Old project used raw HTML `<br>` tags (no closing slash) inside JSX server components,
which React 19 rejects in strict mode. Fixed:
- `Footer.tsx` uses proper JSX `<br />`

### Script load order
Vendors (jQuery, WOW, Owl, Swiper, etc.) must load before `designesia.js`.
`ScriptInitializer` loads sequentially using `async: false` script elements and
`Promise` chains, matching the original `<script>` order exactly.
