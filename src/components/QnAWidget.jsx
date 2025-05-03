'use client'

import { useState } from 'react'
import { getHuggingFaceAnswer } from '../utils/hfQna'

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
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
        Ask me anything!
      </h2>
      <input
        type="text"
        placeholder="Who is Sankita?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          marginBottom: '10px',
        }}
      />
      <button
        onClick={handleAsk}
        style={{
          width: '100%',
          backgroundColor: '#00ffaa',
          color: '#000',
          padding: '10px',
          borderRadius: '6px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {answer && (
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: '#fff',
          }}
        >
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  )
}
