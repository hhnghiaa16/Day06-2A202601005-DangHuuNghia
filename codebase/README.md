# Codebase

Base code for the MISA-style income and expense management prototype.

## Structure

```txt
codebase/
  frontend/   React + Vite + TypeScript prototype app
  backend/    Placeholder for future Python FastAPI backend
```

## Frontend Stack

- React + Vite + TypeScript
- Ant Design
- TanStack Query
- React Router
- React Hook Form + Zod
- Recharts
- Axios

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Default URL:

```txt
http://localhost:5173
```

Copy `.env.example` to `.env` when the backend API is available.

## Backend Placeholder

The `backend/` folder is intentionally minimal for now. It is reserved for the future Python FastAPI service and should later contain modules such as:

```txt
app/modules/accounts
app/modules/categories
app/modules/transactions
app/modules/reports
app/modules/ai
```

The `ai` module should be added after the core prototype flows are visible.
