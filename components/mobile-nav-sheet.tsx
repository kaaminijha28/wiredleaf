"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { signup } from "@/app/actions/auth"

interface NavLink {
  name: string
  href: string
}

interface MobileNavSheetProps {
  navLinks: NavLink[]
  activeSection: string | null
}

export function MobileNavSheet({ navLinks, activeSection }: MobileNavSheetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [signupState, setSignupState] = useState<{ message: string; success?: boolean }>({ message: "" })
  const [isSignupPending, setIsSignupPending] = useState(false)

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs bg-neutral-950 border-l border-white/10 text-white">
        <SheetHeader className="text-left">
          <SheetTitle className="text-white">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-medium text-gray-200 hover:text-white transition-colors",
                activeSection === link.href.split("#")[1] && "text-purple-400", // Highlight active section
              )}
              onClick={() => setIsOpen(false)} // Close sheet on link click
            >
              {link.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start text-lg font-medium text-gray-200 hover:text-white transition-colors"
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
                    <Label htmlFor="mobile-login-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="mobile-login-email"
                      type="email"
                      placeholder="email@example.com"
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-login-password" className="text-gray-300">
                      Password
                    </Label>
                    <Input
                      id="mobile-login-password"
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
                    <Label htmlFor="mobile-signup-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="mobile-signup-email"
                      name="email" // Add name attribute for FormData
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="mt-1 bg-neutral-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-signup-password" className="text-gray-300">
                      Password
                    </Label>
                    <Input
                      id="mobile-signup-password"
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
        </nav>
      </SheetContent>
    </Sheet>
  )
}
