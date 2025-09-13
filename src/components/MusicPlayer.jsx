import React, { useEffect, useRef } from 'react'

export default function MusicPlayer({ src }) {
  const audioRef = useRef(null)
  useEffect(() => {
    audioRef.current.volume = 0.5
    audioRef.current.play().catch(() => {})
  }, [src])
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white/80 rounded-full shadow-lg flex items-center px-3 py-1 backdrop-blur-md fade-in">
      <audio ref={audioRef} src={src} controls loop />
      <span className="ml-2 text-primary font-bold">🎵 Música</span>
    </div>
  )
}