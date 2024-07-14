import type { Metadata } from "next"

import Header from "@/components/pages/hillsong/header"

export const metadata: Metadata = {
  title: `Eventik | Hillsong`,
  icons: {
    icon: "/icon-eventik.png", // /public path
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
