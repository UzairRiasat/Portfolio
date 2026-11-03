import os
from langchain_google_genai import ChatGoogleGenerativeAI

def get_llm():
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    model_name = os.getenv("GEMINI_MODEL", "gemini-3.5-flash-lite")
    return ChatGoogleGenerativeAI(
        model=model_name,
        api_key=api_key,
        streaming=True,
    )