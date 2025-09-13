import React, { useState } from 'react'

export default function Tooltip({ label, children }) {
  const [show, setShow] = useState(false)
  return (
    <span className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      tabIndex={0}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      aria-label={label}
    >
      {children}
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-3 py-1 bg-black text-white text-xs rounded shadow-lg z-10 fade-in">
          {label}
        </span>
      )}
    </span>
  )
}