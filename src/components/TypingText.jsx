'use client'

import { useState, useEffect } from 'react'

export default function TypingText() {
  const lines = [
    'A Passionate Web Developer',
    'Building Modern Websites with Love 💻',
  ]

  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentLine = lines[lineIndex]
    let typingSpeed = isDeleting ? 50 : 120 // faster delete

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentLine.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setText(currentLine.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }

      // When line finished typing
      if (!isDeleting && charIndex === currentLine.length) {
        setTimeout(() => setIsDeleting(true), 1000) // wait a bit then delete
      }

      // When line fully deleted
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setLineIndex((prev) => (prev + 1) % lines.length) // next line
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, lineIndex, lines])

  return (
    <div className="flex flex-col items-center mt-2">
      <h2 className="text-2xl font-semibold text-center text-glow mb-2">
        {text}
        <span className="blinking-cursor">|</span>
      </h2>
    </div>
  )
}
