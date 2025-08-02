"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { MobileNavSheet } from "@/components/mobile-nav-sheet"
import { useAuth } from "@/lib/auth-context"
import { CalendarIcon, Mail, Lock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

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
  const [isHovered, setIsHovered] = useState(false)

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

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSignupState({ message: "Sign in not yet implemented", success: false })
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
        <div className="hidden lg:flex items-center gap-2 px-4">
          {useAuth().user ? (
            <Link href="/book-consultation">
              <Button className="relative group px-6 py-2 h-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Book a Call
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="relative group px-6 py-2 h-10 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Book a Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[350px] p-6 bg-neutral-900 border border-white/10 rounded-xl shadow-xl">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Sign in to Book a Call</h3>
                    <p className="text-sm text-neutral-400 mt-1">Sign in to schedule a consultation with our team</p>
                  </div>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-neutral-300">Email</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          className="pl-10 bg-neutral-800/50 border-neutral-700 text-neutral-200 w-full"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-neutral-300">Password</Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-neutral-800/50 border-neutral-700 text-neutral-200 w-full"
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300"
                    >
                      Sign in
                    </Button>
                  </form>
                  <div className="text-center text-sm">
                    <a href="#" className="text-neutral-400 hover:text-neutral-300">
                      Forgot password?
                    </a>
                  </div>
                  <Separator className="bg-neutral-800" />
                  <div className="text-center text-sm">
                    <span className="text-neutral-400">
                      Don't have an account?{" "}
                      <Link href="/auth/signup" className="text-purple-500 hover:text-purple-400">
                        Create one
                      </Link>
                    </span>
                  </div>
                  {signupState?.message && (
                    <p className={cn("text-sm", signupState.success ? "text-green-400" : "text-red-400")}>
                      {signupState.message}
                    </p>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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
