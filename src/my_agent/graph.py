from typing import Annotated, Sequence, TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver
from .llm import get_llm

class AgentState(TypedDict):
    messages: Annotated[Sequence[dict], add_messages]

def chatbot_node(state: AgentState):
    llm = get_llm()
    response = llm.invoke(state["messages"])
    return {"messages": [response]}


def build_graph():
    graph_builder = StateGraph(AgentState)

    graph_builder.add_node("chatbot", chatbot_node)
    graph_builder.add_edge(START, "chatbot")
    graph_builder.add_edge("chatbot", END)

    memory = MemorySaver()
    graph = graph_builder.compile(checkpointer=memory)
    return graph