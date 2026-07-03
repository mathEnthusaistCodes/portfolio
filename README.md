<<<<<<< HEAD
# Portfolio

A full-stack portfolio application built with React, Node.js, Express, and MongoDB. Showcases personal profile, work experience, skills, projects, and a contact form.

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React 18, React Router 6, CSS       |
| Backend  | Node.js, Express 4                  |
| Database | MongoDB (Mongoose ODM)              |
| Testing  | Jest, Supertest, React Testing Lib  |
| Tooling  | Nodemon, Concurrently               |

## Architecture Highlights

| Layer | Item | Details |
|-------|------|---------|
| **Client Routes** | `/` | Home page |
| | `/resume` | Resume page (skills, experience, education) |
| | `/projects` | Projects listing page |
| | `/contact` | Contact form page |
| | `*` | Catch-all redirects to `/` |
| **Client Hooks** | `useApi(apiCall, deps)` | Generic fetch hook with `{ data, loading, error, refetch }` |
| | `useMutation(mutationFn)` | Mutation hook with `{ execute, loading, error, data }` |
| | `useDocumentTitle(title)` | Sets `document.title` per page |
| **API Service** | `api.get/post/put/patch/delete` | Generic fetch wrapper with JSON handling & error parsing |
| | `api.getProfile()` | GET `/api/profile` |
| | `api.getSkills()` | GET `/api/profile/skills` |
| | `api.getExperience()` | GET `/api/profile/experience` |
| | `api.getEducation()` | GET `/api/profile/education` |
| | `api.getProjects(filters)` | GET `/api/projects` with optional query params |
| | `api.getFeaturedProjects()` | GET `/api/projects/featured` |
| | `api.getProjectStats()` | GET `/api/projects/stats` |
| | `api.sendMessage(data)` | POST `/api/contact` |
| **Server Routes** | `GET /api/health` | Health check |
| | `GET /api/profile` | Get profile |
| | `POST /api/profile` | Create/update profile |
| | `GET /api/profile/skills` | List skills |
| | `GET /api/profile/experience` | List work experience |
| | `GET /api/profile/education` | List education |
| | `GET /api/projects` | List projects |
| | `GET /api/projects/featured` | Featured projects |
| | `GET /api/projects/categories` | Project categories |
| | `GET /api/projects/stats` | Project statistics |
| | `GET /api/projects/:id` | Single project |
| | `POST /api/projects` | Create project |
| | `PUT /api/projects/:id` | Update project |
| | `DELETE /api/projects/:id` | Delete project |
| | `POST /api/contact` | Submit contact form |
| | `GET /api/contact` | List messages |
| | `GET /api/contact/unread` | Unread count |
| | `PATCH /api/contact/:id/read` | Mark message as read |
| **Mongoose Models** | `Profile` | name, title, summary, email, skills[], experience[], education[] |
| | `Project` | title, description, techStack[], category, links, metrics |
| | `Message` | name, email, subject, message, read status |
| **Middleware** | `errorHandler` | Centralized error response handler |
| | `validate` | express-validator result checker |
| **Backend Flow** | `routes → controllers → services → models` | 4-layer architecture with thin controllers & service logic |

## Project Structure

```
portfolio/
├── .env                    # Environment variables
├── package.json            # Root orchestrator (concurrently)
├── server/                 # Express API server
│   ├── app.js              # Express app setup (middleware, routes)
│   ├── server.js           # Entry point (DB connect + listen)
│   ├── config/
│   │   ├── env.js          # Environment config (.env loader)
│   │   └── db.js           # MongoDB connection
│   ├── models/             # Mongoose schemas
│   │   ├── Profile.js      # name, title, summary, skills, experience, education
│   │   ├── Project.js      # title, description, tech stack, links, metrics
│   │   └── Message.js      # contact form submissions
│   ├── routes/             # Express routers
│   │   ├── profileRoutes.js
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── controllers/        # Request handlers (thin, delegate to services)
│   ├── services/           # Business logic layer
│   ├── middleware/
│   │   ├── errorHandler.js # Centralized error handling
│   │   └── validate.js     # express-validator result check
│   └── tests/              # API integration tests
│       ├── profile.test.js
│       └── project.test.js
└── client/                 # React SPA (Create React App)
    └── src/
        ├── App.jsx         # Router setup (/, /resume, /projects, /contact)
        ├── pages/          # Page-level components
        │   ├── Home.jsx
        │   ├── Resume.jsx
        │   ├── Projects.jsx
        │   └── Contact.jsx
        ├── components/
        │   ├── Layout/     # Header, Footer, Layout wrapper
        │   ├── common/     # ErrorBoundary, Loading
        │   └── ProjectCard.jsx
        ├── hooks/          # useApi, useDocumentTitle
        ├── services/
        │   └── api.js      # API client (fetch wrapper)
        ├── styles/
        │   └── global.css
        └── tests/          # Component + API client tests
```

### Data Flow

```
Browser → React Router → Page Component → ApiService (fetch)
    → Express Router → Controller → Service → Mongoose Model → MongoDB
    ← JSON response ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
```

### API Endpoints

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| GET    | `/api/health`             | Health check         |
| GET    | `/api/profile`            | Get profile          |
| POST   | `/api/profile`            | Create/update profile|
| GET    | `/api/profile/skills`     | Get skills list      |
| GET    | `/api/profile/experience` | Get work experience  |
| GET    | `/api/profile/education`  | Get education        |
| GET    | `/api/projects`           | List projects        |
| GET    | `/api/projects/featured`  | Featured projects    |
| GET    | `/api/projects/categories`| Project categories   |
| GET    | `/api/projects/stats`     | Project statistics   |
| GET    | `/api/projects/:id`       | Single project       |
| POST   | `/api/projects`           | Create project       |
| PUT    | `/api/projects/:id`       | Update project       |
| DELETE | `/api/projects/:id`       | Delete project       |
| POST   | `/api/contact`            | Submit contact form  |
| GET    | `/api/contact`            | List messages        |
| GET    | `/api/contact/unread`     | Unread count         |
| PATCH  | `/api/contact/:id/read`   | Mark as read         |

## Getting Started

```bash
# Install all dependencies
npm run install:all

# Start both client (port 3000) and server (port 5000) concurrently
npm run dev

# Or run individually
npm run dev:server   # Server on port 5000
npm run dev:client   # Client on port 3000

# Tests
npm test
```

## Environment

Copy `.env` to the project root (already present):

```
PORT=5000
MONGODB_URI=mongodb+srv://...
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```
=======
# portfolio
My Web page
>>>>>>> 1e35ab2a735aa3a46cebe9603227d5919e727625
