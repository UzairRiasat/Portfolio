"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
const getThreadId = (): string => {
  if (typeof window !== "undefined") {
    let threadId = localStorage.getItem("chat_thread_id");
    if (!threadId) {
      threadId = crypto.randomUUID?.() || Date.now().toString();
      localStorage.setItem("chat_thread_id", threadId);
    }
    return threadId;
  }
  return "default-session";
};

export default function Chatbot() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Uzair's assistant. Ask me anything about him." }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const handleSend = async () => {
    const userMessage = input.trim()
    if (!userMessage) return

    setMessages(prev => [...prev, { role: "user", text: userMessage }])
    setInput("")

    setMessages(prev => [...prev, { role: "bot", text: "" }])
    setLoading(true)

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          thread_id: getThreadId()
        }),
      })

      if (!res.body) throw new Error("No response body from server")
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let aiText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        //@ts-ignore
        const chunk = decoder.decode(value, { stream: true })
        aiText += chunk

        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1].text = aiText
          return updated
        })
      }
    } catch (err) {
      console.error("Error streaming response:", err)
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1].text = "Sorry, something went wrong."
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-5 xl:right-10 z-50 animate-in fade-in duration-500">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="group relative bg-accent text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 px-4 py-2 animate-pulse-glow"
          aria-label="Open chat"
        >
          <FiMessageCircle className="w-6 h-6" />
          <span className="text-sm font-semibold">Chat</span>
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 h-96 bg-gray-900 rounded-2xl shadow-lg flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-700 text-white p-3 rounded-t-2xl flex justify-between items-center">
            <span>Uzair’s Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-gray-300"><FiX className="w-5 h-5" /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm bg-gray-900 scrollbar-dark">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] break-words not-italic ${
                  msg.role === "user" 
                    ? "bg-gray-600 text-white ml-auto"
                    : "bg-gray-800 text-white"
                }`}
                style={{ fontStyle: "normal" }}
              >
                {msg.role === "bot" && !msg.text && loading
                  ? "Typing..."
                  : <ReactMarkdown>{msg.text}</ReactMarkdown>
                }
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex items-center bg-gray-800 rounded-b-2xl">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !loading && handleSend()}
              className="flex-1 bg-gray-700 text-white border-0 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Type a message..."
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className={`ml-2 p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              <FiSend />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}