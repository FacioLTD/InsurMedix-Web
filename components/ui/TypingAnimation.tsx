'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypingAnimation({ 
  words, 
  className = '', 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && !isDeleting) {
      // Typing phase
      if (currentText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
      }
    } else if (isDeleting) {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isTyping, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="opacity-60">|</span>
    </span>
  )
}
