import Image from "next/image";
import logoEventik from "@/public/logo-eventik.svg"
import bannerTomatulugar from "@/public/tomatulugar-banner.jpg"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <div className="w-full flex items-center flex-col gap-24">
        <Image
          src={logoEventik}
          alt="Logo eventikapp"
          width={128}
          height={140}
          priority
        />

        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src={bannerTomatulugar}
            alt="Banner tomatulugar"
            width={745}
            height={346}
            className="mb-6"
            priority
          />

          <h2 className="text-center font-semibold text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino?v=35357b9c8fe4"
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
