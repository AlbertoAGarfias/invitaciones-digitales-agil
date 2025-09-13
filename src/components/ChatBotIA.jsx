import React, { useState, useRef, useEffect } from 'react'
import { FiSend, FiX } from 'react-icons/fi'

const PRIMARY_COLOR = "#1976d2"

export default function ChatBotIA({ apiEndpoint }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy tu asistente virtual Ángela. ¿En qué puedo ayudarte hoy?" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  const sendMessage = async () => {
    if (!input) return
    setMessages([...messages, { sender: "user", text: input }])
    setLoading(true)
    setInput("")

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      })
      const data = await res.json()
      setMessages(msgs => [...msgs, { sender: "bot", text: data.response }])
    } catch (e) {
      setMessages(msgs => [...msgs, { sender: "bot", text: "Lo siento, hubo un problema al responder. Intenta de nuevo." }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Botón flotante para abrir/cerrar el chat */}
      {!open && (
        <button
          aria-label="Abrir chat"
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 110,
            background: "white",
            border: "none",
            borderRadius: "50%",
            width: 64,
            height: 64,
            boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <img
            src="/asistente-mujer.png"
            alt="Asistente"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </button>
      )}

      {/* Ventana de chat con personaje al lado izquierdo */}
      <div
        style={{
          position: "fixed",
          bottom: open ? 24 : -500,
          right: 24,
          width: "400px",
          maxWidth: "98vw",
          height: "520px",
          maxHeight: "80vh",
          background: "rgba(255,255,255,0.98)",
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(0,0,0,.18)",
          zIndex: 120,
          display: open ? "flex" : "none",
          flexDirection: "row",
          transition: "bottom 0.4s cubic-bezier(.4,0,.2,1)",
          overflow: "hidden"
        }}
      >
        {/* Personaje/Avatar al lado izquierdo */}
        <div style={{
          width: "110px",
          background: "linear-gradient(180deg,#e3f0fa 60%,#fff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img
            src="/asistente-mujer.png"
            alt="Ángela"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 22px #b0c4de"
            }}
          />
          <div style={{ fontWeight: "bold", color: PRIMARY_COLOR, marginTop: 8, fontSize: "1.1em" }}>
            Ángela
          </div>
        </div>
        {/* Chat y mensajes */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Cabecera */}
          <div
            style={{
              background: PRIMARY_COLOR,
              color: "#fff",
              padding: "13px 18px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>Asistente Virtual</span>
            <button
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer",
                padding: 0
              }}
            >
              <FiX />
            </button>
          </div>
          {/* Mensajes */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 10px 8px 12px",
            background: "#f8fbff"
          }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: m.sender === "bot" ? "row" : "row-reverse",
                  alignItems: "flex-end",
                  marginBottom: 12
                }}
              >
                {/* Burbujas de chat */}
                <div style={{
                  maxWidth: "76%",
                  background: m.sender === "bot" ? "#fff" : PRIMARY_COLOR,
                  color: m.sender === "bot" ? "#333" : "#fff",
                  borderRadius: m.sender === "bot" ? "18px 18px 18px 5px" : "18px 18px 5px 18px",
                  padding: "10px 16px",
                  fontSize: "1rem",
                  boxShadow: m.sender === "bot" ? "0 2px 8px #e3f0fa" : "0 2px 8px #c6daf7"
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div style={{ color: "#888", fontStyle: "italic", margin: "8px 0" }}>Pensando...</div>}
            <div ref={chatEndRef} />
          </div>
          {/* Input */}
          <div style={{
            padding: "10px 12px",
            borderTop: "1px solid #eef2f7",
            background: "#fafcff"
          }}>
            <form
              style={{ display: "flex", alignItems: "center", gap: 8 }}
              onSubmit={e => { e.preventDefault(); sendMessage(); }}
            >
              <input
                type="text"
                placeholder="Escribe tu pregunta..."
                value={input}
                autoFocus={open}
                disabled={loading}
                onChange={e => setInput(e.target.value)}
                style={{
                  flex: 1,
                  border: "1px solid #dbe3ed",
                  borderRadius: 12,
                  padding: "9px 14px",
                  fontSize: "1rem",
                  outline: "none",
                  background: "#fff"
                }}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
              />
              <button
                type="submit"
                disabled={loading || !input}
                style={{
                  background: PRIMARY_COLOR,
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  cursor: "pointer",
                  boxShadow: "0 2px 7px rgba(25,118,210,0.09)"
                }}
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}