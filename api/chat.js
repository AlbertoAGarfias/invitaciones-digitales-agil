// Requiere Node.js y tu clave Gemini en Vercel (GEMINI_API_KEY)
export default async function handler(req, res) {
  const { question } = req.body
  const key = process.env.AIzaSyAi9uh_ejpUjxe4xg4S95XQwPLc_svXfi8
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }]
      })
    })
    const json = await response.json()
    const answer = json.candidates?.[0]?.content?.parts?.[0]?.text ?? "Lo siento, no pude responder."
    res.status(200).json({ response: answer })
  } catch (err) {
    res.status(500).json({ response: "Hubo un error con el asistente IA." })
  }
}