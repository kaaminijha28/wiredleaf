"use client"

import { useEffect, useRef } from 'react'

export default function ScrollingText() {
  const firstTextRef = useRef<HTMLDivElement>(null)
  const secondTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const firstText = firstTextRef.current
    const secondText = secondTextRef.current

    if (!firstText || !secondText) return

    // First text scroll
    const scrollFirst = () => {
      if (firstText.scrollLeft >= firstText.scrollWidth / 2) {
        firstText.scrollLeft = 0
      } else {
        firstText.scrollLeft += 1
      }
    }

    // Second text scroll
    const scrollSecond = () => {
      if (secondText.scrollLeft <= 0) {
        secondText.scrollLeft = secondText.scrollWidth / 2
      } else {
        secondText.scrollLeft -= 1
      }
    }

    const firstInterval = setInterval(scrollFirst, 20)
    const secondInterval = setInterval(scrollSecond, 20)

    return () => {
      clearInterval(firstInterval)
      clearInterval(secondInterval)
    }
  }, [])

  return (
    <div className="w-full bg-neutral-950 py-20">
      {/* First line */}
      <div className="relative -rotate-6">
        <div
          ref={firstTextRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ width: '200%' }}
        >
          <span className="inline-block text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent px-4 mx-4">
            INNOVATIVE SOLUTIONS • CREATIVE DESIGNS • MODERN TECHNOLOGY •&nbsp;
          </span>
          <span className="inline-block text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent px-4 mx-4">
            INNOVATIVE SOLUTIONS • CREATIVE DESIGNS • MODERN TECHNOLOGY •&nbsp;
          </span>
        </div>
      </div>

      {/* Second line */}
      <div className="relative rotate-6 mt-8">
        <div
          ref={secondTextRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ width: '200%' }}
        >
          <span className="inline-block text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent px-4 mx-4">
            DIGITAL EXCELLENCE • CUSTOM SOLUTIONS • FUTURE READY •&nbsp;
          </span>
          <span className="inline-block text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent px-4 mx-4">
            DIGITAL EXCELLENCE • CUSTOM SOLUTIONS • FUTURE READY •&nbsp;
          </span>
        </div>
      </div>
    </div>
  )
}
