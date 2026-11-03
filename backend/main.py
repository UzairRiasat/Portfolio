from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()
gemini_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
if gemini_key:
    os.environ["GOOGLE_API_KEY"] = gemini_key
    os.environ["GEMINI_API_KEY"] = gemini_key

from backend.my_agent.graph import build_graph

graph = build_graph()

app = FastAPI(title="Portfolio AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        os.getenv("FRONTEND_URL", "https://uzairriasat.netlify.app")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/live")
async def health():
    return {"status": "ok"}

def extract_text(content) -> str:
    if isinstance(content, str):
        return content
    elif isinstance(content, list):
        parts = []
        for item in content:
            if isinstance(item, str):
                parts.append(item)
            elif isinstance(item, dict) and "text" in item:
                parts.append(item["text"])
        return "".join(parts)
    return str(content) if content else ""

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_message = data.get("message", "")
    thread_id = data.get("thread_id", "default-session")

    if not user_message:
        return JSONResponse({"error": "No message provided"}, status_code=400)

    config = {"configurable": {"thread_id": thread_id}}
    inputs = {"messages": [{"role": "user", "content": user_message}]}

    async def event_generator():
        yielded_any = False
        try:
            async for event in graph.astream(inputs, config, stream_mode="messages"):
                if isinstance(event, tuple):
                    message_chunk, _ = event
                    if hasattr(message_chunk, "content"):
                        token = extract_text(message_chunk.content)
                        if token:
                            yielded_any = True
                            yield token
            if not yielded_any:
                yield "I'm sorry, I couldn't generate a response at this time. Please reach out to Uzair directly at uzairriasat510@gmail.com."
        except Exception as e:
            print(f"[Chat Error] Streaming exception: {type(e).__name__}: {e}", flush=True)
            yield "Sorry, an issue occurred while communicating with the assistant. Please try again later or contact Uzair directly at uzairriasat510@gmail.com."

    return StreamingResponse(event_generator(), media_type="text/plain")
