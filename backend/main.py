from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

from src.my_agent.graph import build_graph
from src.my_agent.prompt import SYSTEM_PROMPT

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

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_message = data.get("message", "")
    
    thread_id = data.get("thread_id", "default-session")

    if not user_message:
        return JSONResponse({"error": "No message provided"}, status_code=400)

    config = {"configurable": {"thread_id": thread_id}}
    current_state = await graph.aget_state(config)

    if not current_state.values.get("messages"):
        input_messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message}
        ]
    else:
        input_messages = [{"role": "user", "content": user_message}]

    inputs = {"messages": input_messages}

    async def event_generator():
        async for event in graph.astream(inputs, config, stream_mode="messages"):
            if isinstance(event, tuple):
                message_chunk, _ = event
                if hasattr(message_chunk, "content"):
                    token = message_chunk.content
                    if token:
                        yield token

    return StreamingResponse(event_generator(), media_type="text/plain")
