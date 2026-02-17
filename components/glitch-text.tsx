"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "span" | "p"
}

export function GlitchText({ text, className = "", as: Tag = "h1" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"

    const triggerGlitch = () => {
      setIsGlitching(true)
      let iterations = 0
      const maxIterations = text.length

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) return text[index]
              if (char === " ") return " "
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join("")
        )
        iterations += 1
        if (iterations > maxIterations) {
          clearInterval(interval)
          setDisplayText(text)
          setIsGlitching(false)
        }
      }, 40)

      return () => clearInterval(interval)
    }

    triggerGlitch()
    const loop = setInterval(triggerGlitch, 8000)
    return () => clearInterval(loop)
  }, [text])

  return (
    <Tag
      className={`relative inline-block ${className}`}
      aria-label={text}
    >
      <span className={isGlitching ? "opacity-100" : "opacity-100"}>
        {displayText}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-primary opacity-70"
            style={{ clipPath: "inset(20% 0 40% 0)", transform: "translate(-2px, 0)" }}
            aria-hidden="true"
          >
            {displayText}
          </span>
          <span
            className="absolute inset-0 text-destructive opacity-70"
            style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, 0)" }}
            aria-hidden="true"
          >
            {displayText}
          </span>
        </>
      )}
    </Tag>
  )
}
