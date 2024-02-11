import type { Metadata } from "next"

import Header from "@/components/pages/hqelv/header"

export const metadata: Metadata = {
  title: `Eventik | HQELV`,
  icons: {
    icon: "/icon-eventik.png", // /public path
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
