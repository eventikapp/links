import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"

import logoMision from "@/public/logo-mision.svg"

export default function Header() {
  return (
    <header className="flex items-center justify-center py-8 md:py-16">
      <div className="relative flex w-full max-w-[984px] flex-col items-center justify-center gap-y-4">
        <nav>
          <Link href="/">
            <Image
              src={logoMision}
              alt="Logo Mision"
              width={72}
              height={72}
              priority
            />
          </Link>
        </nav>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold leading-7">MiSion CEM</h2>
          <p className="leading-5 text-muted-foreground">
            Centro de Entrenamiento Ministerial
          </p>
        </section>

        <ol className="flex gap-x-4">
          <li>
            <Link href="https://misioninstituto.com/" target="_blank">
              <GlobeIcon className="size-5" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/mision_instituto/"
              target="_blank"
            >
              <InstagramLogoIcon className="size-5" />
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/MiSionCEM" target="_blank">
              <VideoIcon className="size-5" />
            </Link>
          </li>
        </ol>
      </div>
    </header>
  )
}
