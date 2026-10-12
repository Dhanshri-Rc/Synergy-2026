# IDEAX 2026 — Conference Website

International Conference on Innovation, Decision Engineering and Artificial Intelligence.
A full React + Vite + Tailwind CSS website rebuilt pixel-faithfully from the IDEAX 2026
design references (homepage, about, tracks, speakers, schedule, committee, registration,
participant login, dashboard, contact).

## Tech Stack

- **React 19** + **Vite** — build tooling and dev server
- **Tailwind CSS 3** — utility-first styling (no external CSS frameworks)
- **React Router DOM v7** — client-side routing, SPA navigation
- **Framer Motion** — fade-up reveals, hover scale/glow, animated page transitions
- **lucide-react** — icon set (brand/social icons are hand-rolled local SVGs, see note below)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/
│   ├── hero/          # Hero illustrations extracted from the design references
│   └── icons/         # Logo.jsx — recreated brain-circuit IDEAX mark (SVG)
├── components/
│   ├── Navbar.jsx          # Responsive navbar, mobile menu, active-link highlighting
│   ├── Footer.jsx           # Site-wide footer
│   ├── Button.jsx           # Polymorphic animated button (button/a/Link)
│   ├── SectionTitle.jsx      # Reusable eyebrow + heading + underline + description
│   ├── PageHero.jsx          # Shared inner-page hero banner (light/dark variants)
│   ├── Layout.jsx            # Navbar + page + Footer wrapper
│   ├── PageTransition.jsx    # Framer Motion route transition wrapper
│   ├── FadeUp.jsx            # Scroll-triggered fade-up animation wrapper
│   ├── Avatar.jsx            # Local, network-free initials avatar generator
│   └── SocialIcons.jsx       # LinkedIn / X / Facebook / YouTube inline SVGs
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Tracks.jsx
│   ├── Speakers.jsx
│   ├── Schedule.jsx
│   ├── Committee.jsx
│   ├── Registration.jsx
│   ├── ParticipantLogin.jsx
│   ├── Dashboard.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx        # Route declarations + AnimatePresence page transitions
├── main.jsx       # React root + BrowserRouter
└── index.css      # Tailwind layers + base styles + custom utility classes
```

## Routing

| Route            | Page                | Chrome                          |
|------------------|----------------------|----------------------------------|
| `/`              | Home                 | Navbar (dark) + Footer           |
| `/about`         | About                | Navbar (light) + Footer          |
| `/tracks`        | Tracks               | Navbar (dark) + Footer           |
| `/speakers`      | Speakers             | Navbar (dark) + Footer           |
| `/schedule`      | Schedule             | Navbar (light) + Footer          |
| `/committee`     | Committee            | Navbar (light) + Footer          |
| `/registration`  | Registration         | Navbar (dark) + Footer           |
| `/contact`       | Contact              | Navbar (dark) + Footer           |
| `/login`         | Participant Login    | Standalone split-panel layout    |
| `/dashboard`     | Participant Dashboard| Standalone sidebar layout        |
| `*`              | 404 Not Found        | Navbar + Footer                  |

The login form's submit handler navigates straight to `/dashboard` (no backend wired up —
hook up your real auth endpoint in `ParticipantLogin.jsx`'s `handleSubmit`).

## Deployment — SPA Refresh Fix

Because this is a client-side-routed SPA, refreshing on any non-root route (e.g.
`/registration`) will 404 unless the host is told to always serve `index.html`. Two configs
are included out of the box:

- **Netlify**: `public/_redirects` → copied into the build output automatically.
- **Vercel**: `vercel.json` rewrites all paths to `/index.html`.

For other hosts:
- **Nginx**: add `try_files $uri /index.html;` inside your `location /` block.
- **Apache**: enable `mod_rewrite` and add a catch-all rewrite to `index.html`.
- **GitHub Pages**: copy `dist/index.html` to `dist/404.html` after building.

## Design Notes

- All hero illustrations (the AI-head/circuit graphics) are cropped directly from the
  original design references and live in `src/assets/hero/`.
- Speaker, committee, and dashboard avatars are generated **locally** with `Avatar.jsx`
  (deterministic gradient + initials) — there is no dependency on a third-party avatar API,
  so the site works fully offline / behind restrictive network policies.
- Brand/social icons (LinkedIn, X, Facebook, YouTube) are hand-rolled inline SVGs in
  `SocialIcons.jsx` because newer `lucide-react` releases dropped trademarked brand glyphs.
- Color tokens, fonts, and shadows are centralized in `tailwind.config.js` under
  `theme.extend` (`navy`, `gold`, `brand`, `surface` color scales).

## Customization

- **Colors / fonts**: edit `tailwind.config.js`.
- **Nav links / footer links**: edit the `LINKS` / `QUICK_LINKS` arrays at the top of
  `Navbar.jsx` / `Footer.jsx`.
- **Page content** (speakers, schedule sessions, committee members, pricing): each page
  keeps its data in plain JS arrays/objects near the top of the file — edit those directly,
  no CMS required.
