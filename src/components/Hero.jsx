import React from 'react'
import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="relative h-[350px] md:h-[450px] mb-8 flex items-center justify-center bg-gradient-to-r from-primary to-accent rounded-lg overflow-hidden fade-in">
      <img src={heroImg} alt="Eventos sociales" className="absolute inset-0 w-full h-full object-cover opacity-30 fade-in" />
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 fade-in">
        <h1 className="font-display text-4xl md:text-5xl mb-3 drop-shadow-lg fade-in">
          Invitaciones Digitales Ágil
        </h1>
        <p className="text-lg md:text-xl mb-5 drop-shadow-md fade-in">
          Elige tu evento social y crea una invitación digital única. ¡Personalización, galería multimedia, dedicatorias y más!
        </p>
        <a
          href="#productos"
          className="btn-anim inline-block px-6 py-3 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-primary hover:text-white transition-all fade-in"
        >
          Ver Productos
        </a>
      </div>
    </section>
  )
}