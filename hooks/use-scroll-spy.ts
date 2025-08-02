"use client"

import { useEffect, useState, useRef } from "react"

interface UseScrollSpyOptions {
  sectionIds: string[]
  offset?: number
}

export function useScrollSpy({ sectionIds, offset = 0 }: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null, // viewport as the root
      rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 1}px 0px`, // Adjust this to control when sections become active
      threshold: 0, // Trigger as soon as any part of the target is visible
    })

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sectionIds, offset])

  return activeSection
}
