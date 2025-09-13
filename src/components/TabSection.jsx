import React from 'react'
import GalleryCarousel from './GalleryCarousel'
import Tooltip from './Tooltip'

export default function TabSection({ tabs, tabIndex, setTabIndex }) {
  return (
    <div className="fade-in">
      <div className="flex flex-wrap gap-4 justify-center mb-8 fade-in">
        {tabs.map((tab, idx) => (
          <button
            key={tab.nombre}
            className={`btn-anim px-4 py-2 rounded-full font-bold fade-in
              ${tabIndex === idx ? `bg-${tab.color} text-primary shadow` : "bg-white text-gray-700"}
              border border-primary`}
            onClick={() => setTabIndex(idx)}
            aria-selected={tabIndex === idx}
            aria-label={`Ver pestaña de ${tab.nombre}`}
          >
            {tab.nombre}
          </button>
        ))}
      </div>
      <div className={`bg-${tabs[tabIndex].color} rounded-lg shadow-md p-6 fade-in`}>
        <h3 className="font-display text-2xl text-primary mb-2 fade-in">{tabs[tabIndex].nombre}</h3>
        <p className="mb-4 text-gray-700 fade-in">{tabs[tabIndex].descripcion}</p>
        <ul className="mb-4 list-disc pl-6 text-gray-700 fade-in">
          {tabs[tabIndex].servicios.map((serv, idx) => (
            <li key={idx}>{serv}</li>
          ))}
        </ul>
        <div className="mb-2 text-primary font-semibold fade-in">Galería de imágenes y videos. Se puede personalizar de acuerdo a su necesidad.</div>
        <GalleryCarousel galeria={tabs[tabIndex].galeria} nombre={tabs[tabIndex].nombre} color={tabs[tabIndex].color} />

        {/* Ubicación de la ceremonia */}
        <div className="mt-8 fade-in">
          <h4 className="font-bold text-primary mb-2 fade-in">Ubicación de la Ceremonia</h4>
          <p className="mb-2 text-gray-700 fade-in">Parroquia de Santa Ana Tlapaltitlán</p>
          <div className="flex justify-center mb-4 fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0616545974735!2d-99.63013958849957!3d19.279684845470065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8a25ea429093%3A0x4277d1a633b17557!2sParroquia%20de%20Santa%20Ana%20Tlapaltitlan!5e0!3m2!1ses-419!2smx!4v1756325077951!5m2!1ses-419!2smx"
              width="100%" height="300" style={{ border: 0, borderRadius: "1rem" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Ceremonia"
            ></iframe>
          </div>
          <h4 className="font-bold text-primary mb-2 fade-in">Ubicación del Salón</h4>
          <p className="mb-2 text-gray-700 fade-in">Salón de Fiestas Amancay</p>
          <div className="flex justify-center mb-4 fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.098756163024!2d-99.63360917412949!3d19.278071123090864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8a289e3178bb%3A0x90fee843b1bb5b3b!2sSalon%20De%20Fiestas%20Amancay!5e0!3m2!1ses-419!2smx!4v1756325147109!5m2!1ses-419!2smx"
              width="100%" height="300" style={{ border: 0, borderRadius: "1rem" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Salón"
            ></iframe>
          </div>
        </div>

        <div className="mt-6 flex justify-center fade-in">
          <Tooltip label="Solicita tu invitación por WhatsApp">
            <a
              href={`https://wa.me/52226540066?text=Hola,%20quiero%20una%20invitación%20digital%20de%20${tabs[tabIndex].nombre}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-anim px-5 py-2 bg-green-500 text-white rounded-full font-bold fade-in"
              aria-label={`Solicitar invitación de ${tabs[tabIndex].nombre} por WhatsApp`}
            >
              Contacto WhatsApp
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}