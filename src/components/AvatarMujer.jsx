import React from "react"

export default function AvatarMujer({ talking = false }) {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      {/* Cara */}
      <ellipse cx="45" cy="45" rx="40" ry="44" fill="#ffe3da" stroke="#d4a29c" strokeWidth="2"/>
      {/* Cabello */}
      <ellipse cx="45" cy="38" rx="40" ry="30" fill="#6e3f2a"/>
      {/* Ojos */}
      <ellipse cx="32" cy="46" rx="6" ry="3.5" fill="#fff"/>
      <ellipse cx="58" cy="46" rx="6" ry="3.5" fill="#fff"/>
      <ellipse cx="32" cy="46" rx="3" ry="2" fill="#4a2a1e"/>
      <ellipse cx="58" cy="46" rx="3" ry="2" fill="#4a2a1e"/>
      {/* Boca animada */}
      <ellipse
        cx="45"
        cy={talking ? "63" : "61"}
        rx="11"
        ry={talking ? "5" : "3"}
        fill="#e27a61"
        style={{
          transition: "all 0.25s"
        }}
      />
      {/* Cejas */}
      <rect x="25" y="40" width="12" height="2" rx="1" fill="#4a2a1e"/>
      <rect x="53" y="40" width="12" height="2" rx="1" fill="#4a2a1e"/>
    </svg>
  )
}