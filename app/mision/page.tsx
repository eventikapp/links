
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRightIcon, GlobeIcon, InstagramLogoIcon, VideoIcon } from '@radix-ui/react-icons'

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
              width={72}
              height={72}
              priority
            />
          </Link>

          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-bold leading-7">Mision CEM</p>
            <p className="text-muted-foreground">Centro de Entretenimiento Ministerial</p>
          </div>

          <div className="flex gap-x-4">
            <Link href="https://misioninstituto.com/" target="_blank">
              <GlobeIcon className="h-5 w-5" />
            </Link>

            <Link href="https://www.instagram.com/mision_instituto/" target="_blank">
              <InstagramLogoIcon className="h-5 w-5" />
            </Link>

            <Link href="https://www.youtube.com/MiSionCEM" target="_blank">
              <VideoIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-5">
            {eventsMisionCEM.filter(event => event.status === "publish").map((event) => {
            return (
              <div key={event.id} id={`${event.anchor}`}>
                <Card event={event} />
              </div>
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
