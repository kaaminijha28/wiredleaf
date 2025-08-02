"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface FlipLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function FlipLink({ href, children, className }: FlipLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block perspective-1000 group", // Added group for hover effects
        "text-gray-400 hover:text-white transition-colors duration-200", // Existing link styles
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-300 transform-style-preserve-3d",
          isHovered ? "rotate-y-180" : "",
        )}
      >
        {/* Front side */}
        <span className="absolute w-full h-full backface-hidden flex items-center justify-center">{children}</span>
        {/* Back side */}
        <span
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center",
            "text-purple-400", // Highlight color for the flipped text
          )}
        >
          {children}
        </span>
      </div>
    </Link>
  )
}
