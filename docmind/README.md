# DocMind — PDF RAG AI Chat

Upload PDFs and ask questions. Powered by Google Gemini 2.5 Flash + NeonDB + Prisma.

## Prerequisites

- Node.js 20+ and npm 9+
- A [NeonDB](https://neon.tech) account (free tier works)
- A [Google AI Studio](https://aistudio.google.com/) API key (free)

## Quick start

```bash
# 1. Install dependencies (also auto-generates the Prisma client)
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env — fill in NEON_DATABASE_URL and GEMINI_API_KEY

# 3. Push the database schema to NeonDB
npm run push --workspace=@workspace/db

# 4. Run the API server (port 8080)
npm run dev --workspace=@workspace/api-server

# 5. In a second terminal — run the frontend
PORT=24021 BASE_PATH=/rag-app/ npm run dev --workspace=@workspace/rag-app
```

Open http://localhost:24021/rag-app/

## Environment variables

| Variable | Description |
|---|---|
| `NEON_DATABASE_URL` | NeonDB PostgreSQL connection string |
| `GEMINI_API_KEY` | Google AI Studio API key |
| `SESSION_SECRET` | Any long random string |

## Tech stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express 5 + Node.js
- **Database**: NeonDB (serverless Postgres) + Prisma ORM
- **AI**: Google Gemini 2.5 Flash (streaming SSE)
- **PDF**: pdf-parse (server-side text extraction)
- **Retrieval**: Keyword-scored chunk matching
