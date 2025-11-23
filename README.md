# Auth Microservice (Node.js + Express + MongoDB)

## Quick start (using Docker)
1. Copy `.env.example` to `.env` and edit values (or set via docker-compose).
2. Build and run:
   docker-compose up --build

Service will be available at http://localhost:4000

## Endpoints
- POST /api/auth/register
  body: { "name": "Alice", "email": "alice@example.com", "password": "secret" }

- POST /api/auth/login
  body: { "email": "alice@example.com", "password": "secret" }
  returns: { "accessToken": "<JWT>" }

- GET /api/profile
  headers: Authorization: Bearer <JWT>

## Development
- Install deps:
  npm install
- Run dev server:
  npm run dev
