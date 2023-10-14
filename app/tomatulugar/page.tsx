import type { Metadata } from "next"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logoEventik from "@/public/logo-eventik.svg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"

import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CreditCard, Info, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: `Eventik | Tomatulugar`
}

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-4 md:px-8">
      <div className="w-full flex items-center flex-col gap-8">
        <Link href="/">
          <Image
            src={logoEventik}
            alt="Logo eventikapp"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src={bannerTomatulugar}
            alt="Banner tomatulugar"
            width={745}
            height={346}
            className="mb-2 rounded-lg shadow"
            priority
          />

          <h2 className="text-center font-semibold text-md md:text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://tomatulugar-ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
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
          <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "secondary" }))}>Necesito ayuda</DialogTrigger>
            <DialogContent className="max-md:max-w-full max-w-md max-md:h-full max-md:overflow-y-scroll max-md:max-h-screen max-md:flex max-md:flex-col max-md:justify-center max-md:gap-12">
              <DialogHeader>
                <DialogTitle>
                  ¿Necesitas ayuda?
                </DialogTitle>
                <DialogDescription>
                  Indicanos el  motivo principal para poder ayudarte
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 md:gap-2">
                <Link href="https://wa.me/5491124058816" target="_blank">
                  <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <CreditCard className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Compra</p>
                      <p className="text-sm text-muted-foreground">
                        ¿Tuviste un problema al realizar la compra? ¿Hay un error en tu orden?
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="https://wa.me/5491124058816" target="_blank">
                  <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <Ticket className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Entrada</p>
                      <p className="text-sm text-muted-foreground">
                        ¿No recibiste tu entrada? ¿Quieres cambiar algún dato?
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="https://wa.me/543516344971" target="_blank">
                  <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <Info className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Otras consultas</p>
                      <p className="text-sm text-muted-foreground">
                        Te contactaremos con el organizador.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div >
  );
}
