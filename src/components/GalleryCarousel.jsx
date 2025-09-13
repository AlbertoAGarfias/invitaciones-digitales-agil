import React, { useState } from 'react'

// Modal Carrusel para imágenes y videos
function GalleryModalCarousel({ galeria, startIndex = 0, nombre, onClose }) {
  const [activeIndex, setActiveIndex] = useState(startIndex)
  if (!galeria || galeria.length === 0) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center justify-between mb-2">
          <button
            className="text-2xl px-2"
            onClick={() => setActiveIndex((activeIndex - 1 + galeria.length) % galeria.length)}
            disabled={galeria.length < 2}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className="flex-1 flex items-center justify-center">
            {galeria[activeIndex].tipo === "imagen" ? (
              <img
                src={galeria[activeIndex].src}
                alt={`${nombre} ${activeIndex + 1}`}
                className="max-h-[60vh] max-w-full rounded shadow"
              />
            ) : (
              <video
                src={galeria[activeIndex].src}
                controls
                className="max-h-[60vh] max-w-full rounded shadow"
              />
            )}
          </div>
          <button
            className="text-2xl px-2"
            onClick={() => setActiveIndex((activeIndex + 1) % galeria.length)}
            disabled={galeria.length < 2}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
        <div className="mt-1 text-center text-xs text-gray-500">
          {activeIndex + 1} / {galeria.length}
        </div>
      </div>
    </div>
  )
}

export default function GalleryCarousel({ galeria, nombre, color, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStartIndex, setModalStartIndex] = useState(0)

  const handlePrev = () => setActiveIndex((activeIndex - 1 + galeria.length) % galeria.length)
  const handleNext = () => setActiveIndex((activeIndex + 1) % galeria.length)

  // Abrir el modal carrusel en la imagen activa
  const handleOpenModal = (index = activeIndex) => {
    setModalStartIndex(index)
    setModalOpen(true)
    if (onImageClick) onImageClick(index)
  }
  const handleCloseModal = () => setModalOpen(false)

  const item = galeria[activeIndex]

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative w-full max-w-md h-56 flex items-center justify-center bg-white rounded-lg shadow">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full px-2 py-1 z-10"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full px-2 py-1 z-10"
          onClick={handleNext}
          aria-label="Siguiente"
        >
          ›
        </button>
        <div
          className="w-full h-full flex items-center justify-center cursor-pointer"
          onClick={() => handleOpenModal(activeIndex)}
          aria-label={`Abrir ${item.tipo === "imagen" ? "imagen" : "video"} en grande`}
        >
          {item.tipo === "imagen" ? (
            <img
              src={item.src}
              alt={`Galería ${nombre}`}
              loading="lazy"
              className="max-h-48 max-w-full object-contain rounded-lg"
            />
          ) : (
            <video controls={false} src={item.src} className="max-h-48 max-w-full rounded-lg" />
          )}
        </div>
      </div>
      <div className="text-sm mt-2 text-gray-700">{`${activeIndex + 1} / ${galeria.length}`}</div>
      <button
        className="mt-2 px-4 py-1 bg-primary text-white rounded shadow"
        onClick={() => handleOpenModal(activeIndex)}
      >
        Carrusel
      </button>
      {modalOpen && (
        <GalleryModalCarousel
          galeria={galeria}
          startIndex={modalStartIndex}
          nombre={nombre}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}