import { Analytics } from "@vercel/analytics/react"
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProviderDark } from "@/components/theme-provider-dark"
import { Orbitron, Rajdhani } from "next/font/google"

// Futuristic font for headings
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

// Secondary font for body text
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "GATT",
  description: "Description comes here",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>
        <ThemeProviderDark attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Analytics />
        </ThemeProviderDark>
      </body>
    </html>
  )
}
