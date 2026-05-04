# Uzair Riasat — Portfolio

A personal portfolio website built with **Next.js** (frontend) and **FastAPI + LangGraph** (backend), showcasing my work as a Backend & AI Developer.

🌐 **Live:** [uzairriasat.netlify.app](https://uzairriasat.netlify.app)

---

## About

This portfolio highlights my experience designing and building scalable backend systems and AI-powered applications. It features a contact form powered by a FastAPI backend, and an AI agent built with LangGraph and LangChain under the hood.

---

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) — React framework with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) — high-performance Python web framework
- [LangChain](https://www.langchain.com/) & [LangGraph](https://www.langchain.com/langgraph) — AI agent orchestration
- OpenAI API — LLM integration
- Uvicorn — ASGI server
- SQLAlchemy — ORM
- Python-dotenv — environment management

### Deployment
- **Frontend:** Netlify
- **Backend:** Render

---

## Project Structure

```
Portfolio/
├── src/                  # Next.js app source
├── public/               # Static assets
├── backend/              # FastAPI backend & AI agent
├── .github/workflows/    # CI/CD pipelines
├── requirements.txt      # Python dependencies
├── package.json          # Node dependencies
├── next.config.mjs
├── tailwind.config.ts
└── render.yaml           # Render deployment config
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+

### Frontend

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy and configure environment variables
cp .env.example .env

# Run the server
uvicorn main:app --reload
```

---

## Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## Deployment

| Service | Platform | Config |
|---------|----------|--------|
| Frontend | Netlify | Auto-deploy from `main` branch |
| Backend | Render | `render.yaml` |

---

## Contact

Feel free to reach out through the contact form on the [live site](https://uzairriasat.netlify.app/contact).
