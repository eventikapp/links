import type { Metadata } from "next"

import Header from "@/components/pages/hqelv/header"

export const metadata: Metadata = {
  title: `Fint | HQELV`,
  icons: {
    icon: "/icon-Fint.png", // /public path
  },
}

export default function HQELVLayout({
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
