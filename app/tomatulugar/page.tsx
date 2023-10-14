import type { Metadata } from 'next'
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logoEventik from "@/public/logo-eventik.svg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Eventik | Tomatulugar`
}

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-8">
      <div className="w-full flex items-center flex-col gap-16">
        <Image
          src={logoEventik}
          alt="Logo eventikapp"
          width={120}
          height={120}
          priority
        />

        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src={bannerTomatulugar}
            alt="Banner tomatulugar"
            width={745}
            height={346}
            className="mb-6 rounded-lg shadow-md"
            priority
          />

          <h2 className="text-center font-semibold text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className="rounded-md w-full max-w-xl bg-stone-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino?v=35357b9c8fe4"
            className="rounded-md w-full max-w-xl bg-stone-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
            target="_blank"
          >
            🌍 Internacionales
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/543516344971"
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
