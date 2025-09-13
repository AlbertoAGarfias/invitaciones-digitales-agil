import React from 'react'

export default function Dedications({ dedicatorias }) {
  if (!dedicatorias || !dedicatorias.length) return null
  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 my-6 scale-in">
      <h3 className="text-2xl font-display text-primary mb-4 move-in">Dedicatorias a Familiares</h3>
      <ul className="space-y-3">
        {dedicatorias.map((dedic, idx) => (
          <li key={idx} className="bg-purple-50 rounded-lg p-3 text-gray-700 fade-in">
            <span className="font-bold text-primary">{dedic.nombre}:</span> {dedic.mensaje}
          </li>
        ))}
      </ul>
    </div>
  )
}