import Image from "next/image"
import logoEventik from "@/public/logo-eventik.svg"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

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
          <h2 className="text-center text-base font-semibold md:text-xl">
            Eventos
          </h2>

          <Link
            href="/tomatulugar"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
          >
            TOMATULUGAR
          </Link>
          <Link
            href="/mision"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
          >
            MiSion CEM
          </Link>
          <Link
            href="/hqelv"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
          >
            #HQÉLV’24
          </Link>
          <Link
            href="/comisionados"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xl text-lg"
            )}
          >
            Comisionados
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/5491124058816"
            className="underline"
            target="_blank"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </div>
  )
}
