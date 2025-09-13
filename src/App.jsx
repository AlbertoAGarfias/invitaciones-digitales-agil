import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TabSection from './components/TabSection'
import PricingTable from './components/PricingTable'
import ContactForm from './components/ContactForm'
import GalleryCarousel from './components/GalleryCarousel'
import MusicPlayer from './components/MusicPlayer'
import Dedications from './components/Dedications'
import ConfirmWhatsapp from './components/ConfirmWhatsapp'
import ChatBotIA from './components/ChatBotIA' // 👈 Importa el chatbot

const galeriaTitulos = [
  "Ceremonia",
  "Salón"
]

const tabs = [
  {
    nombre: "Boda",
    fondo: "/images/fondo-boda.jpg",
    descripcion: "Invitación digital para boda: historia de los novios, ubicación, galería de fotos y videos, dedicatorias, confirmación de asistencia y personalización total.",
    servicios: [
      "Historia de los novios",
      "Ubicación del evento",
      "Mensaje personalizado",
      "Galería de imágenes y videos",
      "Audio de fondo",
      "Pestaña de dedicatoria a familiares",
      "Confirmación de asistencia por WhatsApp",
      "Animaciones y diseño exclusivo"
    ],
    galeria: [
      { tipo: "imagen", src: "/images/boda1.jpg" },
      { tipo: "imagen", src: "/images/boda2.jpg" },
      { tipo: "imagen", src: "/images/boda3.jpg" },
      { tipo: "video", src: "/videos/boda1.mp4" }
    ],
    lugarGaleria: [
      [
        { tipo: "imagen", src: "/images/ceremonia1.jpg" },
        { tipo: "imagen", src: "/images/ceremonia2.jpg" },
        { tipo: "imagen", src: "/images/ceremonia3.jpg" }
      ],
      [
        { tipo: "imagen", src: "/images/salon1.jpg" },
        { tipo: "imagen", src: "/images/salon2.jpg" },
        { tipo: "imagen", src: "/images/salon3.jpg" }
      ]
    ],
    dedicatorias: [
      { nombre: "Mamá", mensaje: "Gracias por siempre estar a mi lado." },
      { nombre: "Papá", mensaje: "Tu apoyo nos hizo fuertes." }
    ],
    color: "boda",
    musica: "/music/boda-theme.mp3",
    whatsapp: {
      telefono: "527226540066",
      mensaje: "¡Hola! Confirmo mi asistencia a la boda. Gracias por la invitación."
    }
  },
  {
    nombre: "Bautizo",
    fondo: "/images/fondo-bautizo.jpg",
    descripcion: "Invitación digital para bautizo: datos del festejado, ubicación, mensaje personalizado, galería, dedicatorias, confirmación de asistencia y personalización.",
    servicios: [
      "Datos del festejado",
      "Ubicación",
      "Mensaje personalizado",
      "Galería de imágenes y videos",
      "Audio de fondo",
      "Dedicatoria especial",
      "Confirmación de asistencia por WhatsApp",
      "Animaciones y diseño exclusivo"
    ],
    galeria: [
      { tipo: "imagen", src: "/images/bautizo1.jpg" },
      { tipo: "imagen", src: "/images/bautizo2.jpg" },
      { tipo: "imagen", src: "/images/bautizo3.jpg" },
      { tipo: "video", src: "/videos/bautizo1.mp4" }
    ],
    lugarGaleria: [
      [
        { tipo: "imagen", src: "/images/ceremonia1.jpg" },
        { tipo: "imagen", src: "/images/ceremonia2.jpg" },
        { tipo: "imagen", src: "/images/ceremonia3.jpg" }
      ],
      [
        { tipo: "imagen", src: "/images/salon1.jpg" },
        { tipo: "imagen", src: "/images/salon2.jpg" },
        { tipo: "imagen", src: "/images/salon3.jpg" }
      ]
    ],
    dedicatorias: [
      { nombre: "Abuela", mensaje: "Siempre en mi corazón." }
    ],
    color: "bautizo",
    musica: "/music/bautizo-theme.mp3",
    whatsapp: {
      telefono: "527226540066",
      mensaje: "¡Confirmo asistencia al bautizo! Gracias por la invitación."
    }
  },
  {
    nombre: "XV Años",
    fondo: "/images/fondo-xv.jpg",
    descripcion: "Invitación digital para XV Años: datos de la festejada, historia, ubicación, galería, dedicatorias, confirmación de asistencia y diseño personalizado.",
    servicios: [
      "Historia de la festejada",
      "Ubicación",
      "Mensaje personalizado",
      "Galería de imágenes y videos",
      "Audio de fondo",
      "Dedicatorias especiales",
      "Confirmación de asistencia por WhatsApp",
      "Animaciones exclusivas"
    ],
    galeria: [
      { tipo: "imagen", src: "/images/xv1.jpg" },
      { tipo: "imagen", src: "/images/xv2.jpg" },
      { tipo: "imagen", src: "/images/xv3.jpg" },
      { tipo: "video", src: "/videos/xv1.mp4" }
    ],
    lugarGaleria: [
      [
        { tipo: "imagen", src: "/images/ceremonia1.jpg" },
        { tipo: "imagen", src: "/images/ceremonia2.jpg" },
        { tipo: "imagen", src: "/images/ceremonia3.jpg" }
      ],
      [
        { tipo: "imagen", src: "/images/salon1.jpg" },
        { tipo: "imagen", src: "/images/salon2.jpg" },
        { tipo: "imagen", src: "/images/salon3.jpg" }
      ]
    ],
    dedicatorias: [
      { nombre: "Tío Pepe", mensaje: "¡Felicidades en tus XV años!" }
    ],
    color: "xv",
    musica: "/music/xv-theme.mp3",
    whatsapp: {
      telefono: "527226540066",
      mensaje: "¡Hola! Confirmo asistencia a los XV años."
    }
  },
  {
    nombre: "Cumpleaños",
    fondo: "/images/fondo-cumple.jpg",
    descripcion: "Invitación digital para Cumpleaños: datos del festejado, ubicación, mensaje personalizado, galería, dedicatorias, confirmación y animaciones.",
    servicios: [
      "Datos del festejado",
      "Ubicación",
      "Mensaje personalizado",
      "Galería de imágenes y videos",
      "Audio de fondo",
      "Dedicatoria especial",
      "Confirmación de asistencia por WhatsApp",
      "Animaciones divertidas"
    ],
    galeria: [
      { tipo: "imagen", src: "/images/cumple1.jpg" },
      { tipo: "imagen", src: "/images/cumple2.jpg" },
      { tipo: "imagen", src: "/images/cumple3.jpg" },
      { tipo: "video", src: "/videos/cumple1.mp4" }
    ],
    lugarGaleria: [
      [
        { tipo: "imagen", src: "/images/ceremonia1.jpg" },
        { tipo: "imagen", src: "/images/ceremonia2.jpg" },
        { tipo: "imagen", src: "/images/ceremonia3.jpg" }
      ],
      [
        { tipo: "imagen", src: "/images/salon1.jpg" },
        { tipo: "imagen", src: "/images/salon2.jpg" },
        { tipo: "imagen", src: "/images/salon3.jpg" }
      ]
    ],
    dedicatorias: [
      { nombre: "Amigo Luis", mensaje: "¡Que cumplas muchos más!" }
    ],
    color: "cumple",
    musica: "/music/cumple-theme.mp3",
    whatsapp: {
      telefono: "527226540066",
      mensaje: "¡Hola! Confirmo asistencia al cumpleaños."
    }
  },
  {
    nombre: "Personalizado",
    fondo: "/images/fondo-personalizado.jpg",
    descripcion: "Crea tu invitación digital para cualquier evento: comunión, confirmación, defunción, reunión familiar, etc. Personalización total en diseño, galería y servicios.",
    servicios: [
      "Datos del evento",
      "Ubicación",
      "Mensaje personalizado",
      "Galería de imágenes y videos",
      "Audio de fondo",
      "Dedicatorias",
      "Confirmación de asistencia por WhatsApp",
      "Animaciones y diseño personalizado"
    ],
    galeria: [
      { tipo: "imagen", src: "/images/pers1.jpg" },
      { tipo: "imagen", src: "/images/pers2.jpg" },
      { tipo: "imagen", src: "/images/pers3.jpg" },
      { tipo: "video", src: "/videos/pers1.mp4" }
    ],
    lugarGaleria: [
      [
        { tipo: "imagen", src: "/images/ceremonia1.jpg" },
        { tipo: "imagen", src: "/images/ceremonia2.jpg" },
        { tipo: "imagen", src: "/images/ceremonia3.jpg" }
      ],
      [
        { tipo: "imagen", src: "/images/salon1.jpg" },
        { tipo: "imagen", src: "/images/salon2.jpg" },
        { tipo: "imagen", src: "/images/salon3.jpg" }
      ]
    ],
    dedicatorias: [
      { nombre: "Familia", mensaje: "¡Nos vemos en el evento!" }
    ],
    color: "personalizado",
    musica: "/music/personalizado-theme.mp3",
    whatsapp: {
      telefono: "527226540066",
      mensaje: "Confirmo asistencia al evento personalizado."
    }
  }
]

export default function App() {
  const [tabIndex, setTabIndex] = useState(0)
  const tabActual = tabs[tabIndex]

  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState([])
  const [modalStartIndex, setModalStartIndex] = useState(0)

  const handleExpandImages = (images, idx = 0) => {
    setModalImages(images)
    setModalStartIndex(idx)
    setModalOpen(true)
  }

  function ModalCarousel({ images, startIndex, onClose }) {
    const [activeIndex, setActiveIndex] = useState(startIndex || 0)
    if (!images || images.length === 0) return null
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full" onClick={e => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-xl text-gray-600" onClick={onClose}>&times;</button>
          <div className="flex items-center justify-between mb-2">
            <button
              className="text-2xl px-2"
              onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
              disabled={images.length < 2}
              aria-label="Anterior"
            >&#8592;</button>
            <div className="flex-1 flex items-center justify-center">
              {images[activeIndex].tipo === "imagen" ? (
                <img
                  src={images[activeIndex].src}
                  alt={`Imagen ${activeIndex + 1}`}
                  className="max-h-[60vh] max-w-full rounded shadow"
                />
              ) : (
                <video src={images[activeIndex].src} controls className="max-h-[60vh] max-w-full rounded shadow" />
              )}
            </div>
            <button
              className="text-2xl px-2"
              onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
              disabled={images.length < 2}
              aria-label="Siguiente"
            >&#8594;</button>
          </div>
          <div className="mt-1 text-center text-xs text-gray-500">{activeIndex + 1} / {images.length}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen fade-in"
      style={{
        backgroundImage: `url(${tabActual.fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.4s ease"
      }}
    >
      <Header />
      <Hero />
      <section className="max-w-6xl mx-auto py-8 px-4 scale-in">
        <h2 id="nuestros-productos" className="font-display text-3xl text-primary mb-6 text-center fade-in">
          Nuestros Productos
        </h2>
        <TabSection tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />

        {/* Galería principal de evento */}
        <div className="mb-12 relative group">
          <GalleryCarousel
            galeria={tabActual.galeria}
            nombre="Galería de imágenes y videos"
            color={tabActual.color}
            onImageClick={i => handleExpandImages(tabActual.galeria, i)}
          />
          <button
            className="absolute top-2 right-2 bg-white bg-opacity-80 text-primary px-3 py-1 rounded shadow opacity-100 transition"
            onClick={e => {
              e.stopPropagation()
              handleExpandImages(tabActual.galeria, 0)
            }}
            title="Expandir galería de imágenes y videos"
          >Carrusel</button>
        </div>

        {/* Galerías de Ceremonia y Salón debajo de la galería principal */}
        {tabActual.lugarGaleria && tabActual.lugarGaleria.length >= 2 && (
          <div className="my-8 grid gap-8 md:grid-cols-2">
            {galeriaTitulos.map((titulo, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">{titulo}</h3>
                <div className="relative group cursor-pointer">
                  <GalleryCarousel
                    galeria={tabActual.lugarGaleria[idx].slice(0, 3)}
                    nombre={titulo}
                    color={tabActual.color}
                    onImageClick={i => handleExpandImages(tabActual.lugarGaleria[idx], i)}
                  />
                  <button
                    className="absolute top-2 right-2 bg-white bg-opacity-80 text-primary px-3 py-1 rounded shadow opacity-100 transition"
                    onClick={e => {
                      e.stopPropagation()
                      handleExpandImages(tabActual.lugarGaleria[idx], 0)
                    }}
                    title={`Expandir imágenes de ${titulo}`}
                  >Carrusel</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal para el carrusel expandido */}
        {modalOpen && (
          <ModalCarousel
            images={modalImages}
            startIndex={modalStartIndex}
            onClose={() => setModalOpen(false)}
          />
        )}

        {/* Música de fondo */}
        <MusicPlayer src={tabActual.musica} />

        {/* Dedicatorias familiares */}
        <Dedications dedicatorias={tabActual.dedicatorias} />

        {/* Confirmación por WhatsApp */}
        <ConfirmWhatsapp
          nombreEvento={tabActual.nombre}
          telefono={tabActual.whatsapp.telefono}
          mensaje={tabActual.whatsapp.mensaje}
        />
      </section>
      <section className="max-w-4xl mx-auto py-8 px-4 move-in">
        <PricingTable />
      </section>
      <section className="max-w-2xl mx-auto py-8 px-4 fade-in">
        <ContactForm />
      </section>
      <footer className="bg-primary text-white py-6 text-center mt-8">
        <div>© 2025 Invitaciones Digitales Ágil — Todos los derechos reservados</div>
      </footer>
      {/* Chatbot Gemini IA fijo en la esquina inferior derecha */}
      <ChatBotIA apiEndpoint="/api/chat" />
    </div>
  )
}