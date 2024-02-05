
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from '@radix-ui/react-icons'

import logoMision from "@/public/logo-mision.svg"

import Card from "@/components/card"
import { DialogFAQ } from "@/components/dialog-faq"
import { eventsMisionCEM } from "@/data/mision"

export const metadata: Metadata = {
  title: `Eventik | Mision CEM`,
}

export default function Page() {
  return (
    <div className="mx-auto my-8 flex min-h-screen w-full flex-col items-center justify-center md:px-8">
      <div className="flex h-full w-full flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Link href="/">
            <Image
              src={logoMision}
              alt="Logo Mision"
              width={96}
              height={96}
              priority
            />
          </Link>

          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-bold leading-7">Mision CEM</p>
            <p className="text-muted-foreground">Centro de Entretenimiento Ministerial</p>
          </div>

          <div className="flex gap-x-4">
            <Link href="/">
              <GlobeIcon className="h-5 w-5" />
            </Link>

            <Link href="/">
              <InstagramLogoIcon className="h-5 w-5" />
            </Link>

            <Link href="/">
              <VideoIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {eventsMisionCEM.map((event, i) => {
            return (
              <Card key={i} event={event} />
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <DialogFAQ linkWhatsApp="https://wa.me/5491130903522" />
        </div>
      </div>
    </div>
  )
}
