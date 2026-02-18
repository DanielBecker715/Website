"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 14
    let columns = 0
    let drops: number[] = []

    const randomDrop = (maxRow: number) => Math.floor(Math.random() * maxRow)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const newColumns = Math.floor(canvas.width / fontSize)
      const maxRow = Math.floor(canvas.height / fontSize)
      if (newColumns !== columns) {
        const oldDrops = drops
        // Always scatter new drops randomly so there is never a top-down scan
        drops = Array(newColumns).fill(0).map(() => randomDrop(maxRow))
        // Preserve existing drop positions for columns that already existed
        for (let i = 0; i < Math.min(oldDrops.length, newColumns); i++) {
          drops[i] = oldDrops[i]
        }
        columns = newColumns
      }
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.fillStyle = "rgba(10, 14, 20, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "hsl(162, 78%, 48%)"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.globalAlpha = Math.random() * 0.3 + 0.1
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      ctx.globalAlpha = 1
    }

    // Pre-render ~200 frames offscreen so the canvas already has
    // the full "lived-in" look with faded trails on first paint
    for (let f = 0; f < 200; f++) {
      draw()
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
