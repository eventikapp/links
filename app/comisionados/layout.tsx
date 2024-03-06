import type { Metadata } from "next"

import Header from "@/components/pages/comisionados/header"

export const metadata: Metadata = {
  title: `Eventik | Comisionados`,
  icons: {
    icon: "/icon-eventik.png", // /public path
  },
}

export default function comisionadosLayout({
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
