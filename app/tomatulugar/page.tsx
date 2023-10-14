import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import logoEventik from "@/public/logo-eventik.svg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"

import { buttonVariants } from "@/components/ui/button"
import { DialogFAQ } from "@/components/dialog-faq"

export const metadata: Metadata = {
  title: `Eventik | Tomatulugar`,
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
            src={bannerTomatulugar}
            alt="Banner tomatulugar"
            width={745}
            height={346}
            className="mb-2 rounded-lg shadow"
            priority
          />

          <h2 className="text-center text-base font-semibold md:text-xl">
            Elige tu inscripción según corresponda:
          </h2>

          <Link
            href="https://tomatulugar-ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
            target="_blank"
          >
            🌍 Internacionales
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <DialogFAQ linkWhatsApp="https://wa.me/543516344971" />
        </div>
      </div>
    </div>
  )
}
