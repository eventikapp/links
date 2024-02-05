import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: `Eventik`,
  description:
    "Compra tus entradas a través de Eventik.",
  icons: {
    icon: '/icon-eventik.png', // /public path
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
