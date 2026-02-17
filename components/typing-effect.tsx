"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  strings: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}

export function TypingEffect({
  strings,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypingEffectProps) {
  const [text, setText] = useState("")
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[stringIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentString.substring(0, text.length + 1))
          if (text === currentString) {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setText(currentString.substring(0, text.length - 1))
          if (text === "") {
            setIsDeleting(false)
            setStringIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, stringIndex, strings, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      <span className="font-mono">{text}</span>
      <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-typing-cursor align-middle" aria-hidden="true" />
    </span>
  )
}
