import React, { useEffect } from 'react'

export default function GalleryModal({ tipo, src, nombre, onClose }) {
  useEffect(() => {
    const handleEsc = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de galería de ${nombre}`}
    >
      <div className="bg-white rounded-lg shadow-xl p-4 relative max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-primary text-xl font-bold"
          onClick={onClose}
          aria-label="Cerrar vista ampliada"
        >
          &times;
        </button>
        {tipo === "imagen" ? (
          <img src={src} alt={`Vista ampliada de ${nombre}`} loading="lazy" className="w-full h-auto rounded-lg" />
        ) : (
          <video src={src} controls autoPlay className="w-full rounded-lg" />
        )}
      </div>
    </div>
  )
}