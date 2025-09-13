import React, { useState } from 'react'
import Notification from './Notification'

export default function ContactForm() {
  const [nombre, setNombre] = useState("")
  const [evento, setEvento] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [notif, setNotif] = useState(null)

  const enviarWhatsApp = (e) => {
    e.preventDefault()
    if (!nombre || !evento || !mensaje) {
      setNotif({ type: "error", msg: "Por favor, completa todos los campos." })
      setTimeout(() => setNotif(null), 2500)
      return
    }
    const texto = encodeURIComponent(
      `Hola, soy ${nombre}.\nMe interesa una invitación para: ${evento}\nMensaje: ${mensaje}`
    )
    window.open(`https://wa.me/52226540066?text=${texto}`, "_blank")
    setNotif({ type: "success", msg: "Redirigiendo a WhatsApp..." })
    setTimeout(() => setNotif(null), 2000)
  }

  return (
    <form
      className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto fade-in my-8"
      aria-label="Formulario de contacto"
      onSubmit={enviarWhatsApp}
      id="contacto"
    >
      <h2 className="font-display text-2xl text-primary mb-4 fade-in">Contacto</h2>
      <div className="mb-3 fade-in">
        <label htmlFor="nombre" className="block font-medium mb-1 fade-in">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-primary fade-in"
          aria-required="true"
          aria-label="Nombre"
        />
      </div>
      <div className="mb-3 fade-in">
        <label htmlFor="evento" className="block font-medium mb-1 fade-in">Evento</label>
        <select
          id="evento"
          name="evento"
          value={evento}
          onChange={e => setEvento(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-primary fade-in"
          aria-required="true"
          aria-label="Tipo de evento"
        >
          <option value="">Selecciona tu evento</option>
          <option value="Bautizo">Bautizo</option>
          <option value="Boda">Boda</option>
          <option value="XV Años">XV Años</option>
          <option value="Cumpleaños">Cumpleaños</option>
          <option value="Personalizado">Personalizado</option>
        </select>
      </div>
      <div className="mb-3 fade-in">
        <label htmlFor="mensaje" className="block font-medium mb-1 fade-in">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-primary fade-in"
          rows={3}
          aria-required="true"
          aria-label="Mensaje personalizado"
        />
      </div>
      <button
        type="submit"
        className="btn-anim bg-primary text-white px-5 py-2 rounded-full font-bold mt-2 fade-in"
        aria-label="Enviar mensaje por WhatsApp"
      >
        Enviar por WhatsApp
      </button>
      <Notification notif={notif} />
    </form>
  )
}