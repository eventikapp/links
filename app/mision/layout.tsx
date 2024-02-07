import type { Metadata } from "next"

import Header from "@/components/pages/mision/header"

export const metadata: Metadata = {
  title: `Eventik | MiSion CEM`,
  icons: {
    icon: "/icon-eventik.png", // /public path
  },
}

export default function MisionLayout({
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
