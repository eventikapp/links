import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: `Fint`,
  description: "Compra tus entradas a través de Fint.",
  icons: {
    icon: "/icon-Fint.png", // /public path
  },
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
