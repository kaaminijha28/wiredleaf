"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy" // Import the new hook
import { MobileNavSheet } from "@/components/mobile-nav-sheet" // Import the mobile nav sheet
import { signup } from "@/app/actions/auth"

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
  const [signupState, setSignupState] = useState<{ message: string; success?: boolean }>({ message: "" })
  const [isSignupPending, setIsSignupPending] = useState(false)

  // Extract section IDs from navLinks for scroll spy
  const sectionIds = navLinks.map((link) => link.href.split("#")[1]).filter(Boolean) as string[]
  const activeSection = useScrollSpy({ sectionIds, offset: 100 }) // Offset for when section becomes active

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSignup = async (formData: FormData) => {
    setIsSignupPending(true)
    try {
      const result = await signup(formData)
      setSignupState(result)
    } catch (error) {
      setSignupState({ message: "An error occurred", success: false })
    } finally {
      setIsSignupPending(false)
    }
  }

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
          "flex items-center justify-between gap-2 mx-auto max-w-screen-xl", // Changed to justify-between for spacing
          "bg-white/10 backdrop-blur-lg",
          isScrolled ? "rounded-lg py-1 shadow-md" : "rounded-full py-2 shadow-xl",
          "border border-white/20",
          "transition-all duration-300 ease-in-out",
        )}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium",
                "text-gray-200 hover:text-white",
                "transition-colors duration-200",
                // Highlight based on scroll spy or initial path
                (activeSection === link.href.split("#")[1] ||
                  (link.href === "/#home" && activeSection === null && pathname === "/")) &&
                  "bg-white/20 text-white",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Init Dropdown for Login and Signup (Desktop) */}
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
              >
                Init
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4 bg-neutral-900 border border-white/20 rounded-lg shadow-lg">
              {/* Login Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Login</h3>
                <form className="space-y-3">
                  <div>
                    <Label htmlFor="login-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="email@example.com"
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password" className="text-gray-300">
                      Password
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="********"
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Login
                  </Button>
                </form>
              </div>
              <DropdownMenuSeparator className="my-4 bg-white/10" /> {/* Separator */}
              {/* Signup Form with Server Action */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Sign Up</h3>
                <form action={handleSignup} className="space-y-3">
                  <div>
                    <Label htmlFor="signup-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      name="email" // Add name attribute for FormData
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-password" className="text-gray-300">
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      name="password" // Add name attribute for FormData
                      type="password"
                      placeholder="********"
                      required
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={isSignupPending}
                  >
                    {isSignupPending ? "Signing Up..." : "Sign Up"}
                  </Button>
                  {signupState?.message && (
                    <p className={cn("text-sm", signupState.success ? "text-green-400" : "text-red-400")}>
                      {signupState.message}
                    </p>
                  )}
                </form>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex-grow justify-end flex">
          {" "}
          {/* Pushes hamburger to the right on mobile */}
          <MobileNavSheet navLinks={navLinks} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  )
}
