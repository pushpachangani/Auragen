# AuraGen 2.0 — Self-Healing AI Interface

AuraGen 2.0 is a complete **frontend-only React application** that simulates an interface capable of detecting cognitive friction and adapting itself in real time.

It tracks browser-side interaction signals such as cursor velocity, hesitation, idle moments, typing activity and rage clicks. The project converts those signals into a cognitive-load score and demonstrates how a dense financial form can transform into a simpler guided wizard.

![AuraGen landing and login preview](src/assets/images/landing-login-preview.png)

## Included pages

- Premium product landing page
- Functional demo login
- Enterprise dashboard
- Live cognitive monitor
- Dynamic UI before/after adaptation
- Analytics dashboard
- AI session replay
- Settings with saved theme, density and sensitivity
- User profile and recent sessions

## Functional frontend features

- Real cursor velocity tracking
- Rage-click and repeated-click detection
- Hesitation and idle detection
- Live cognitive-load calculation
- Animated cursor-path visualisation
- Simulated AI adaptation service
- Complex form to guided wizard transformation
- Multi-step interactive wizard
- Recharts analytics dashboards
- AI session replay controls
- Dark and light themes
- Comfortable and compact density modes
- LocalStorage preference persistence
- `Ctrl/Cmd + K` command palette
- Responsive desktop, tablet and mobile layout

## Images included

The project already contains custom images in `src/assets/images/`:

- `hero-brain.svg`
- `login-robot.svg`
- `analytics-orbit.svg`
- `empty-state.svg`
- `landing-login-preview.png`

No image download is required before running the project.

## Tech stack

- React 18
- Vite 5
- React Router
- Framer Motion
- Recharts
- Lucide React
- CSS3

## Getting started

```bash
npm install
npm run dev
```

Vite will open the application at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Application routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/login` | Demo login |
| `/app` | Dashboard |
| `/app/monitor` | Live cognitive monitor |
| `/app/dynamic` | Dynamic form adaptation |
| `/app/analytics` | Analytics |
| `/app/replay` | AI replay |
| `/app/settings` | Settings |
| `/app/profile` | Profile |

## Folder structure

```text
AuraGen-2.0-Frontend/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── assets/images/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Frontend-only architecture

The current application does not call a backend. `adaptationEngine.js` simulates an AI response locally and `useCognitiveTelemetry.js` gathers real browser interaction signals.

The provided `.env.example` is ready for a future FastAPI/WebSocket integration:

```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000/ws
```

Suggested future backend flow:

```text
Browser telemetry → WebSocket → Friction engine → LLM/UI policy → Validated component schema → React renderer
```

## Demo login

Use any correctly formatted email address and any password. Authentication is intentionally mocked for the frontend demonstration.

## License

This code and its custom visual assets are suitable for educational, portfolio and demonstration use.
