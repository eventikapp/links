import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: `Eventik`,
  description:
    "Gestioná tus eventos en Eventik la plataforma que ayuda a los organizadores a crear, promocionar y vender entradas para sus eventos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
