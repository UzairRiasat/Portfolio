from typing import Annotated, Sequence, TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage, BaseMessage
from .llm import get_llm
from .prompt import SYSTEM_PROMPT


class AgentState(TypedDict):
    messages: Annotated[Sequence, add_messages]


def _normalize(msg) -> BaseMessage | None:
    if isinstance(msg, SystemMessage):
        return None
    if isinstance(msg, BaseMessage):
        if getattr(msg, "type", None) == "system":
            return None
        return msg
    if isinstance(msg, dict):
        role = msg.get("role") or msg.get("type")
        content = msg.get("content", "")
        if role == "system":
            return None
        if role in ("assistant", "ai"):
            return AIMessage(content=content)
        return HumanMessage(content=content)
    return None


def chatbot_node(state: AgentState):
    llm = get_llm()
    history = [m for m in (_normalize(msg) for msg in state["messages"]) if m is not None]
    response = llm.invoke([SystemMessage(content=SYSTEM_PROMPT), *history])
    return {"messages": [response]}


def build_graph():
    graph_builder = StateGraph(AgentState)
    graph_builder.add_node("chatbot", chatbot_node)
    graph_builder.add_edge(START, "chatbot")
    graph_builder.add_edge("chatbot", END)
    return graph_builder.compile(checkpointer=MemorySaver())
