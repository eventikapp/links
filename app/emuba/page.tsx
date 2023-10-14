import type { Metadata } from 'next'
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logoEventik from "@/public/logo-eventik.svg"
import bannerEmuba from "@/public/banner-aviva.jpg"

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Eventik | EMUBA`
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
            src={bannerEmuba}
            alt="Banner EMUBA"
            width={745}
            height={346}
            className="mb-2 rounded-lg shadow"
            priority
          />

          <h2 className="text-center font-semibold text-md md:text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://emuba.eventik.app/evento/aviva-el-fuego/"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/5491122602647"
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
