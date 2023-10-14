import type { Metadata } from 'next'
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logoEventik from "@/public/logo-eventik.svg"
import bannerMision from "@/public/banner-mision.jpg"

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Eventik | Mision CEM`
}

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-4 md:px-8">
      <div className="w-full flex items-center flex-col gap-8">
        <Image
          src={logoEventik}
          alt="Logo eventikapp"
          width={120}
          height={120}
          priority
        />

        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src={bannerMision}
            alt="Banner mision"
            width={745}
            height={346}
            className="mb-2 rounded-lg shadow"
            priority
          />

          <h2 className="text-center font-semibold text-md md:text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://eventik.app/evento/gi-jeps-2024-en-las-camaras-del-rey/"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://mision-la.eventik.app/e/gi-jeps-2024-en-las-camaras-del-rey"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
            target="_blank"
          >
            🌍 Internacionales
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/5491130903522"
            className="underline"
            target="_blank"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </div>
  );
}
