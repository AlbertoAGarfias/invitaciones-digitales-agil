import React from 'react'

export default function Notification({ notif }) {
  if (!notif) return null
  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white fade-in ${
        notif.type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {notif.msg}
    </div>
  )
}