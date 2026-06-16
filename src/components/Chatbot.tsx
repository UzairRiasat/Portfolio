"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FiSend, FiMessageCircle, FiX, FiMaximize2 } from "react-icons/fi"
import ReactMarkdown from "react-markdown"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

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
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragRef = useRef<{ startX: number; startY: number; origLeft: number; origTop: number } | null>(null)
  const resizeRef = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null)
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null)
  const [size, setSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 2000)

    // load saved UI state
    try {
      const raw = localStorage.getItem("chatbot_ui")
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed.pos) {
          const left = Number(parsed.pos.left)
          const top = Number(parsed.pos.top)
          if (!Number.isNaN(left) && !Number.isNaN(top)) setPos({ left, top })
        }
        if (parsed.size) {
          const width = Number(parsed.size.width)
          const height = Number(parsed.size.height)
          if (!Number.isNaN(width) && !Number.isNaN(height) && width >= 340 && height >= 260) {
            setSize({ width, height })
          }
        }
      }
    } catch (e) {}

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  // persist pos/size
  useEffect(() => {
    const payload: any = {}
    if (pos) payload.pos = pos
    if (size) payload.size = size
    if (Object.keys(payload).length) localStorage.setItem("chatbot_ui", JSON.stringify(payload))
  }, [pos, size])

  // global mouse/pointer handlers for drag/resize
  useEffect(() => {
    const onMove = (e: MouseEvent | PointerEvent) => {
      if (dragRef.current) {
        const dx = e.clientX - dragRef.current.startX
        const dy = e.clientY - dragRef.current.startY
        const newLeft = Math.max(8, Math.min(window.innerWidth - (containerRef.current?.offsetWidth || 320) - 8, dragRef.current.origLeft + dx))
        const newTop = Math.max(8, Math.min(window.innerHeight - (containerRef.current?.offsetHeight || 380) - 8, dragRef.current.origTop + dy))
        setPos({ left: newLeft, top: newTop })
      }
      if (resizeRef.current) {
        const dx = e.clientX - resizeRef.current.startX
        const dy = e.clientY - resizeRef.current.startY
        const newW = Math.max(260, Math.min(window.innerWidth - 16, resizeRef.current.origW + dx))
        const newH = Math.max(180, Math.min(window.innerHeight - 16, resizeRef.current.origH + dy))
        setSize({ width: newW, height: newH })
      }
    }

    const onEnd = () => {
      dragRef.current = null
      resizeRef.current = null
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('mouseup', onEnd)
    window.addEventListener('pointerup', onEnd)
    window.addEventListener('pointercancel', onEnd)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('pointerup', onEnd)
      window.removeEventListener('pointercancel', onEnd)
    }
  }, [])

  const handleSend = async () => {
    const userMessage = input.trim()
    if (!userMessage) return

    setMessages(prev => [...prev, { role: "user", text: userMessage }])
    setInput("")

    setMessages(prev => [...prev, { role: "bot", text: "" }])
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/chat`, {
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

  // render closed button
  if (!open) {
    return (
      <div className="fixed right-14 bottom-12 z-50 animate-in fade-in duration-500">
        <button
          onClick={() => setOpen(true)}
          className="group relative bg-accent text-primary rounded-2xl shadow-glow hover:shadow-glow-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 px-5 py-3 font-semibold text-sm"
          aria-label="Open chat"
        >
          <FiMessageCircle className="w-5 h-5" />
          <span>Ask AI</span>
        </button>
      </div>
    )
  }

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 50,
    left: pos ? pos.left : undefined,
    top: pos ? pos.top : undefined,
    right: pos ? undefined : 24,
    bottom: pos ? undefined : 24,
    width: size ? size.width : 460,
    height: size ? size.height : 520,
    maxWidth: '90vw',
  }

  return (
    <div ref={containerRef} style={containerStyle} className="animate-in fade-in duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card shadow-card flex flex-col overflow-hidden" style={{ width: '100%', height: '100%', minWidth: 340, minHeight: 260 }}>
        <div
          onMouseDown={(e) => {
            const el = containerRef.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            dragRef.current = { startX: e.clientX, startY: e.clientY, origLeft: rect.left, origTop: rect.top }
            e.preventDefault()
          }}
          className="bg-white/[0.04] border-b border-white/[0.06] p-3 flex justify-between items-center cursor-move"
        >
          <div>
            <span className="font-display font-semibold text-sm">Uzair&apos;s Assistant</span>
            <p className="text-[10px] text-white/40 font-primary uppercase tracking-wider">Powered by AI</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onPointerDown={(e) => {
                e.stopPropagation()
                const el = containerRef.current
                if (!el) return
                const rect = el.getBoundingClientRect()
                resizeRef.current = { startX: e.clientX, startY: e.clientY, origW: rect.width, origH: rect.height }
                e.preventDefault()
              }}
              className="w-10 h-10 bg-accent/20 border border-accent rounded-full cursor-nwse-resize hover:bg-accent transition-colors flex items-center justify-center text-primary"
              aria-label="Resize chat"
              title="Resize chat window"
              type="button"
            >
              <FiMaximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white transition-colors" type="button">
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm scrollbar-dark">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[85%] break-words text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent/20 text-white ml-auto border border-accent/20"
                  : "bg-white/[0.04] text-white/80 border border-white/[0.06]"
              }`}
            >
              {msg.role === "bot" && !msg.text && loading
                ? <span className="text-white/40">Typing...</span>
                : <ReactMarkdown>{msg.text}</ReactMarkdown>
              }
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="relative p-3 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !loading && handleSend()}
              className="flex-1 input-modern py-2.5 text-sm"
              placeholder="Ask about Uzair..."
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className={`p-2.5 bg-accent text-primary rounded-xl hover:bg-accent-hover transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              <FiSend />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
