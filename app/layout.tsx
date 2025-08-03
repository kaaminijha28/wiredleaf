import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNavbar } from "@/components/floating-navbar"
import Footer from "@/components/footer"
import { Toaster } from "sonner"
import { AuthProvider } from "@/lib/auth-context" // ✅ Add this line

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wiredlifes",
  description: "A tech soloution company",
  generator: "Rajan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider> {/* ✅ Wrap everything in AuthProvider */}
            <div key={Math.random()}>
              <FloatingNavbar />
              {children}
              <Footer />
              <Toaster richColors position="top-center" />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
