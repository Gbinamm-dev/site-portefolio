  import type React from "react"
  import type { Metadata } from "next"
  import { Inter } from "next/font/google"
  import "./globals.css"
  import Header from "@/components/header"
  import Footer from "@/components/footer"

  const inter = Inter({ subsets: ["latin"] })

  export const metadata: Metadata = {
    title: "Portfolio - Étudiant BUT2 Sciences des Données",
    description: "Portfolio personnel d'un étudiant en BUT2 Sciences des Données",
      generator: 'v0.dev'
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="fr">
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    )
  }
