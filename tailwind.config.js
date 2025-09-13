/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",        // Morado elegante para títulos y botones
        accent: "#F472B6",         // Rosa alegre para acentos
        boda: "#F3E6FF",           // Pastel para bodas
        bautizo: "#E6F7FF",        // Pastel para bautizos
        xv: "#FFF0F5",             // Pastel para XV años
        cumple: "#FFFBE6",         // Pastel para cumpleaños
        personalizado: "#F0F8FF",  // Pastel para eventos personalizados
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}