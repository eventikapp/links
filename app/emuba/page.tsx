import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import logoEventik from "@/public/logo-eventik.svg"
import bannerEmuba from "@/public/banner-aviva.jpg"

import { buttonVariants } from "@/components/ui/button"
import { DialogFAQ } from "@/components/dialog-faq"

export const metadata: Metadata = {
  title: `Eventik | EMUBA`,
  icons: {
    icon: "/icon-eventik.png", // /public path
  },
}

export default function Page() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center px-4 md:px-8">
      <div className="flex w-full flex-col items-center gap-8">
        <Link href="/">
          <Image
            src={logoEventik}
            alt="Logo eventikapp"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="flex w-full flex-col items-center gap-4">
          <Image
            src={bannerEmuba}
            alt="Banner EMUBA"
            width={745}
            height={346}
            className="mb-2 rounded-lg shadow"
            priority
          />

          <h2 className="text-center text-base font-semibold md:text-xl">
            Elige tu inscripción según corresponda:
          </h2>

          <Link
            href="https://emuba.eventik.app/evento/aviva-el-fuego/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <DialogFAQ linkWhatsApp="https://wa.me/5491122602647" />
        </div>
      </div>
    </div>
  )
}
