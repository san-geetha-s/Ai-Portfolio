'use client'
import { useState } from 'react'
import { getHuggingFaceAnswer } from '../utils/hfQna'
import qaData from '@/data/qaData'
export default function QnAWidget() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const context = `Sankita is a self-taught developer, MSc Botany student, and tech enthusiast with interests in web design, cybersecurity, and AI. She's building an AI-powered portfolio in Next.js.`

  const handleAsk = async () => {
    if (!question.trim()) return
    setLoading(true)
    const result = await getHuggingFaceAnswer(question, context)
    setAnswer(result)
    setLoading(false)
  }

  return (
    <div className="p-4 rounded-lg border mt-6">
      <h2 className="text-lg font-bold mb-2">Ask me anything!</h2>
      <input
        type="text"
        placeholder="Who is Sankita?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border p-2 mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {answer && (
        <div className="mt-4 p-3 bg-gray-200 rounded text-gray-800">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  )
}
