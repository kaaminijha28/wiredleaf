"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { MobileNavSheet } from "@/components/mobile-nav-sheet"
import { useAuth } from "@/lib/auth-context"
import { CalendarIcon, Lock } from "lucide-react"

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Service", href: "/#service" },
  { name: "Contact", href: "/#contact" },
]

export function FloatingNavbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const auth = useAuth()

  const sectionIds = navLinks.map((link) => link.href.split("#")[1]).filter(Boolean) as string[]
  const activeSection = useScrollSpy({ sectionIds, offset: 100 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed z-50 w-full px-4 md:px-8",
        isScrolled ? "top-4" : "top-8",
        "transition-all duration-300 ease-in-out",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-2 mx-auto max-w-screen-xl",
          "bg-gradient-to-r from-neutral-900/90 via-neutral-900/90 to-neutral-900/90 backdrop-blur-xl",
          isScrolled ? "rounded-lg py-2 shadow-lg" : "rounded-full py-3 shadow-2xl",
          "border border-white/10",
          "transition-all duration-300 ease-in-out",
          "group"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                WiredLeaf
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium",
                "text-neutral-300 hover:text-white",
                "transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20",
                "border border-transparent hover:border-white/10",
                (activeSection === link.href.split("#")[1] ||
                  (link.href === "/#home" && activeSection === null && pathname === "/")) &&
                  "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border-white/20",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth / Book a Call */}
        <div className="hidden lg:flex items-center gap-4 px-4">
          {auth.user ? (
            <>
              <div className="text-neutral-300">
                {auth.user.email}
              </div>
              <Link href="/book-consultation">
                <Button className="relative group px-6 py-2 h-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Book a Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="text-neutral-300 hover:text-white"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth/signin">
              <Button className="relative group px-6 py-2 h-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Nav Button */}
        <div className="lg:hidden flex-grow justify-end flex">
          <MobileNavSheet navLinks={navLinks} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  )
}
