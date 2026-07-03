---
name: web-page-dev
description: Use when building or modifying a full-stack web application with Node.js/Express backend and React frontend. Covers MVC architecture, RESTful API design, React component patterns, Tailwind CSS styling, and MongoDB integration.
---

# Web Page Development with Node.js & React

## Project Structure

```
project/
├── client/                  # React frontend (CRA / Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── common/      # Shared (Loading, Skeleton, ErrorBoundary)
│   │   │   └── Layout/      # Header, Footer, Layout wrapper
│   │   ├── pages/           # Route-level page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API client layer
│   │   └── styles/          # Global CSS / Tailwind
│   ├── tailwind.config.js
│   └── package.json
├── server/                  # Express API
│   ├── config/              # DB connection, env vars
│   ├── controllers/         # Request handlers (thin)
│   ├── services/            # Business logic (thick)
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Route definitions
│   ├── middleware/           # Auth, validation, error handling
│   ├── tests/               # Unit / integration tests
│   ├── seed.js              # Database seed script
│   └── package.json
├── .env
└── package.json             # Root scripts (concurrently)
```

## Architecture Patterns

### MVC + Service Layer
- **Models** — Mongoose schemas with validation (server/models/)
- **Controllers** — Thin handlers: parse request, call service, send response (server/controllers/)
- **Services** — Business logic, DB queries, error handling (server/services/)
- **Routes** — Wire HTTP methods + middleware to controllers (server/routes/)

### API Client Layer
- Single `ApiService` class wrapping `fetch` (client/src/services/api.js)
- Methods mirror API endpoints: `getProfile()`, `getSkills()`, etc.
- Base URL from env var `REACT_APP_API_URL` or defaults to `/api`
- Custom `ApiError` with status code for error handling

### Custom Hooks Pattern
- `useApi(apiCall, deps)` — manages loading / data / error state
- `useDocumentTitle(title)` — sets `document.title`

### Data Flow
1. Page component calls `useApi(() => api.getX())`
2. `useApi` calls the API service method on mount
3. API service calls `fetch` to Express backend
4. Express controller delegates to service layer
5. Service queries MongoDB via Mongoose
6. Response bubbles back: service → controller → client → component state

## Key Conventions

### Backend
- Validate request bodies with `express-validator`
- Centralized error handler middleware (`errorHandler.js`)
- Consistent JSON response shape: `{ success: true, data: ... }` or `{ success: false, error: { message } }`
- Seed script populates DB for development (`node server/seed.js`)
- Services return plain data or throw errors with `statusCode`

### Frontend
- Use Tailwind CSS utility classes over inline styles
- Custom CSS variables for theme colors (kept in `:root` for non-Tailwind parts)
- Facebook-style skeleton loaders instead of spinners during data fetch
- Page components handle their own data fetching via hooks
- Use `fetch` (no Axios dependency)

### Testing
- Jest + React Testing Library on the client
- Jest + Supertest on the server
- API tests use a test DB (NODE_ENV=test skips connectDB)

## Commands

```bash
# Start development (client + server concurrently)
npm run dev

# Seed database
node server/seed.js

# Run all tests
npm test

# Server tests only
npm run test:server

# Client tests only
npm run test:client
```

## Common Tasks

### Adding a new API endpoint
1. Add service method in `server/services/<name>Service.js`
2. Add controller method in `server/controllers/<name>Controller.js`
3. Add route in `server/routes/<name>Routes.js`
4. Mount route in `server/app.js`
5. Add client method in `client/src/services/api.js`

### Adding a new page
1. Create component in `client/src/pages/`
2. Use `useApi` and `useDocumentTitle` hooks
3. Add `<Route>` in `client/src/App.jsx`
4. Add navigation link in `client/src/components/Layout/Header.jsx`

### Styling
- Use Tailwind classes for layout, spacing, typography, colors
- Keep custom CSS variables for theme colors in `global.css`
- For reusable component styles not covered by Tailwind, use `@layer components` in global.css
