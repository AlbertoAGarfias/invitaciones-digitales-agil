import React from 'react'

export default function ConfirmWhatsapp({ nombreEvento, telefono, mensaje }) {
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-accent mt-4 block text-center"
    >
      Confirmar Asistencia por WhatsApp
    </a>
  )
}