import React from 'react'

const precios = [
  { precio: "$300", detalle: "Información general, ubicación, mensaje personalizado, fotos y audio de fondo" },
  { precio: "$350", detalle: "Pestaña dedicatoria a familiares" },
  { precio: "$400", detalle: " lo anterior mas itinerario del evento (boda, bautizo, etc.)" },
  { precio: "$500", detalle: "Confirmación de asistencia por WhatsApp o email" },
  { precio: "$600", detalle: "Animaciones avanzadas (Fade In, escalado, movimiento)" },
  { precio: "$750", detalle: "Galería interactiva, videos, y sección de comentarios" },
  { precio: "$1000", detalle: "Personalización completa de colores, tipografía y multimedia" },
  { precio: "$1500", detalle: "Desarrollo exclusivo y acompañamiento personalizado, edición ilimitada" }
]

export default function PricingTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 fade-in" id="precios">
      <h2 className="font-display text-3xl text-primary mb-4 text-center fade-in">Tabulador de Precios</h2>
      <table className="w-full fade-in">
        <thead>
          <tr className="text-primary text-left fade-in">
            <th className="p-2">Precio</th>
            <th className="p-2">Incluye</th>
          </tr>
        </thead>
        <tbody>
          {precios.map((p, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 fade-in">
              <td className="p-2 font-bold">{p.precio}</td>
              <td className="p-2">{p.detalle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center text-gray-700 fade-in">
        <p>Precios desde $300 MXN. Elige los servicios que se adapten a tu evento y personalización.</p>
      </div>
    </div>
  )
}