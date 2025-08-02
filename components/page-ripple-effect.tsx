"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export default function PageRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [nextId, setNextId] = useState(0)
  const throttleRef = useRef<NodeJS.Timeout | null>(null)

  const createRipple = useCallback(
    (event: MouseEvent) => {
      // Implement throttling to prevent too many ripples
      if (throttleRef.current) {
        return
      }

      // Capture necessary event properties immediately, before setTimeout
      const targetElement = event.currentTarget as HTMLElement
      if (!targetElement) {
        // This should ideally not happen if the component is mounted, but as a safeguard
        console.error("Event currentTarget is null, cannot create ripple.")
        return
      }
      const rect = targetElement.getBoundingClientRect()
      const clientX = event.clientX
      const clientY = event.clientY

      throttleRef.current = setTimeout(() => {
        const fixedRippleBaseSize = 60 // Increased base size for a bigger ripple trail
        const x = clientX - rect.left
        const y = clientY - rect.top

        console.log("Creating ripple at:", { x, y }) // Debugging log
        setRipples((prevRipples) => [...prevRipples, { id: nextId, x, y, size: fixedRippleBaseSize, opacity: 1 }])
        setNextId((prevId) => prevId + 1)

        throttleRef.current = null // Reset throttle after delay
      }, 50) // Create a ripple every 50ms
    },
    [nextId],
  )

  useEffect(() => {
    const handleAnimationEnd = (id: number) => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id))
    }

    ripples.forEach((ripple) => {
      const timeout = setTimeout(() => {
        handleAnimationEnd(ripple.id)
      }, 500) // Match new animation duration (0.5 seconds)
      return () => clearTimeout(timeout)
    })
  }, [ripples])

  return (
    <div
      className="absolute inset-0 overflow-hidden z-10" // Removed pointer-events-none from container, added cursor-none
      onMouseMove={createRipple} // Changed to onMouseMove
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={cn(
            "absolute rounded-full bg-purple-500/50 animate-ripple",
            "pointer-events-none", // Individual ripples should not block events after creation
          )}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            // Opacity and transform are handled by animate-ripple keyframes in tailwind.config.ts
          }}
        />
      ))}
    </div>
  )
}
