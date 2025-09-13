import React, { useState } from 'react'
import GalleryModal from './GalleryModal'
import Tooltip from './Tooltip'
import Notification from './Notification'

export default function ProductTab({ nombre, color, imagenes, descripcion }) {
  const [open, setOpen] = useState(false)
  const [imgModal, setImgModal] = useState(null)
  const [notif, setNotif] = useState(null)

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(`Hola, me interesa la invitación digital de ${nombre}.\nDescripción: ${descripcion}`)
    window.open(`https://wa.me/527226540066?text=${mensaje}`, '_blank')
    setNotif({ type: "success", msg: "Redirigiendo a WhatsApp..." })
    setTimeout(() => setNotif(null), 2000)
  }

  return (
    <div className={`rounded-xl shadow-md p-6 bg-${color} relative`}>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl text-primary">{nombre}</h3>
        <button
          className="btn-anim px-4 py-2 bg-primary text-white rounded-full mt-2 w-max self-start"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`desc-${nombre}`}
        >
          {open ? "Cerrar descripción" : "Ver descripción"}
        </button>
        <Tooltip label="Solicita tu invitación por WhatsApp">
          <button
            className="btn-anim px-4 py-2 bg-green-500 text-white rounded-full mt-2 w-max self-start"
            onClick={handleWhatsApp}
            aria-label={`Solicitar invitación de ${nombre} por WhatsApp`}
          >
            WhatsApp
          </button>
        </Tooltip>
        {open && (
          <div id={`desc-${nombre}`} className="mt-3 fade-in">
            <p className="mb-3 text-gray-700">{descripcion}</p>
            <div className="grid grid-cols-3 gap-2">
              {imagenes.map((img, idx) => (
                <img
                  key={img}
                  src={`/images/${img}`}
                  alt={`Imagen de ${nombre} ${idx+1}`}
                  loading="lazy"
                  className="rounded-lg cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setImgModal(img)}
                  aria-label={`Ver imagen ampliada de ${nombre}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <GalleryModal img={imgModal} onClose={() => setImgModal(null)} nombre={nombre} />
      <Notification notif={notif} />
    </div>
  )
}
