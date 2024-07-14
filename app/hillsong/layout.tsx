import type { Metadata } from "next"

import Header from "@/components/pages/hillsong/header"
import bannerSisterhood from "@/public/hillsong-sisterhood-conference.png"

export const metadata: Metadata = {
  title: `Eventik | Hillsong`,
  icons: {
    icon: "/icon-eventik.png", // /public path
  },
  openGraph: {
    type: 'website',
    url: 'https://www.eventik.com/hillsong', // Reemplaza con la URL real de tu página
    title: 'Sisterhood Conference',
    description: 'Organizador: Hillsong',
    images: [
      {
        url: bannerSisterhood, // Reemplaza con la ruta real de tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: 'Conferencia Sisterhood',
      },
    ],
  },
}

export default function HillsongLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
