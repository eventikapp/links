import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"

import { DialogFAQ } from "@/components/dialog-faq"
import logoHqelv from "@/public/logo-hqelv.jpg"

export default function Header() {
  return (
    <header className="flex items-center justify-center py-8 md:py-16">
      <div className="relative flex w-full max-w-[984px] flex-col items-center justify-center gap-y-4">
        <nav>
          <Link href="/">
            <Image
              src={logoHqelv}
              alt="Hasta que Él venga"
              width={72}
              height={72}
              priority
            />
          </Link>

          <div className="absolute -top-4 right-4 md:-top-8 md:right-8 lg:right-0">
            <DialogFAQ linkWhatsApp="https://wa.me/34687125934" />
          </div>
        </nav>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold leading-7">Hasta que Él venga</h2>
          <p className="leading-5 text-muted-foreground">
            Hoy, más cerca que nunca
          </p>
        </section>

        <ol className="flex gap-x-4">
          <li>
            <Link href="https://www.hastaqueelvenga.es/" target="_blank">
              <GlobeIcon className="h-5 w-5" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/hqelv/"
              target="_blank"
            >
              <InstagramLogoIcon className="h-5 w-5" />
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@hqelv" target="_blank">
              <VideoIcon className="h-5 w-5" />
            </Link>
          </li>
        </ol>
      </div>
    </header>
  )
}
