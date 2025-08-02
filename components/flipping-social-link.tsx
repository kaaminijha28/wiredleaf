"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react" // Import type for LucideIcon

interface FlippingSocialLinkProps {
  href: string
  icon: LucideIcon // Lucide icon component
  frontText: string
  backText: string
}

export default function FlippingSocialLink({
  href,
  icon: IconComponent,
  frontText,
  backText,
}: FlippingSocialLinkProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent immediate navigation to allow flip animation
    setIsFlipped((prev) => !prev) // Toggle flip state

    // After a short delay, navigate
    setTimeout(() => {
      window.open(href, "_blank") // Open in new tab
    }, 300) // Match animation duration
  }

  return (
    <div className="relative w-32 h-10 cursor-pointer perspective-1000" onClick={handleClick}>
      <div
        className={cn(
          "absolute w-full h-full transition-transform duration-300 transform-style-preserve-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-neutral-800 rounded-md text-white text-sm font-medium shadow-md hover:bg-neutral-700 transition-colors">
          <IconComponent className="mr-2 h-4 w-4" />
          {frontText}
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-purple-600 rounded-md text-white text-sm font-medium shadow-md hover:bg-purple-700 transition-colors">
          <IconComponent className="mr-2 h-4 w-4" />
          {backText}
        </div>
      </div>
    </div>
  )
}
