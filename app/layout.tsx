import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nashos WMS",
  description: "Warehouse Management System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "rose", "blue", "green", "orange", "purple"]}
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container py-4 px-4 md:py-8 md:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 