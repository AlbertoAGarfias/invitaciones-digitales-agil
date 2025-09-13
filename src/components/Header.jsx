import React, { useState } from 'react'
import logo from '/logo.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4 sticky top-0 z-50 fade-in">
      <div className="flex items-center gap-2 fade-in">
        <img src={logo} alt="Logo Invitaciones Digitales Ágil" className="h-10 w-10" />
        <span className="font-display text-2xl text-primary">Invitaciones Digitales Ágil</span>
      </div>
      <nav aria-label="Menú principal" className="fade-in">
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          className="md:hidden p-2 rounded-lg focus:outline-primary btn-anim"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <svg width="32" height="32" fill="none" stroke="currentColor">
            {menuOpen ? (
              <path strokeWidth="2" d="M8 8L24 24M24 8L8 24" />
            ) : (
              <path strokeWidth="2" d="M6 10h20M6 16h20M6 22h20" />
            )}
          </svg>
        </button>
        <ul
          id="main-menu"
          className={`md:flex gap-6 text-lg font-semibold text-gray-700 absolute md:static top-full right-0 bg-white md:bg-transparent w-48 md:w-auto shadow-md md:shadow-none rounded-lg p-4 md:p-0 transition-all fade-in ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <li>
            <a href="#nuestros-productos" className="hover:text-primary block py-2 btn-anim fade-in">
              Productos
            </a>
          </li>
          <li>
            <a href="#precios" className="hover:text-primary block py-2 btn-anim fade-in">
              Precios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-primary block py-2 btn-anim fade-in">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}