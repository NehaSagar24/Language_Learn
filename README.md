<<<<<<< HEAD
# Language Learn

**Learn Languages. Unlock the World.**

A modern, responsive language-learning dashboard built with React, TypeScript,
Vite, Tailwind CSS, and Framer Motion. Browse 40 languages with real-time
search, category filters, and a polished, animated UI — with light and dark
mode support and a foundation ready for future AI-powered learning features.

> This is an original project and UI — not affiliated with or copying any
> existing language-learning platform's branding or content.

## Features

- **Language Dashboard** (`/languages`) — search, filter, and browse 40 real languages
- Real-time search by name or native name
- Category tabs (Popular, Indian, European, Asian, Middle Eastern, African, Others)
- Filters: difficulty, region, writing system, RTL-only, sorting
- Favorites (saved to your browser, ready for backend sync later)
- Light & dark mode, with system preference detection
- Fully responsive (mobile, tablet, laptop, desktop)
- Accessible: ARIA labels, visible keyboard focus, reduced-motion support
- Smooth Framer Motion animations throughout

## Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion · Lucide Icons

## Project Structure

```
src/
├── components/     → LanguageCard, SearchBar, CategoryTabs, FilterPanel, etc.
├── context/        → ThemeContext (dark mode), FavoritesContext
├── data/           → languages.ts — all 40 languages with full metadata
├── hooks/          → useLanguageFilter — search/filter/sort logic
├── pages/          → Home, LanguageDashboard, Dashboard, Login, Register, etc.
├── router/         → AppRouter.tsx — all route definitions
├── types/          → language.ts — shared TypeScript interfaces
├── utils/          → format.ts — number formatting, class name helper
└── styles/         → index.css — Tailwind + accessibility defaults
```

## Setup Instructions

### Prerequisites

- **Node.js** v18 or higher — [download here](https://nodejs.org)

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

### 3. Build for production (optional)

```bash
npm run build
npm run preview
```

This project has already been verified to type-check and build cleanly
(`tsc -b` and `vite build` both pass with zero errors).

## Where to Go From Here

The architecture was deliberately kept simple and modular so these can be
added later without restructuring:

- Real authentication (Login/Register pages are UI shells ready to connect)
- A backend API to replace `src/data/languages.ts` and the `future` progress placeholders
- Lesson content on the `LanguageDetail` page (`/languages/:languageId`)
- AI tutor, voice/pronunciation practice, XP & leaderboards, achievements

## License

Free to use for learning and portfolio purposes.
=======
# Language-Learn
>>>>>>> b3d44b93bc84e7529dc347a96d572a3c077fdce1
