import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { CreditCard, Ticket, Info } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { DialogHeader } from "@/components/ui/dialog"

export function DialogFAQ({ linkWhatsApp }: { linkWhatsApp: string }) {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "secondary" }))}>
        Necesito ayuda
      </DialogTrigger>
      <DialogContent className="max-w-md max-md:flex max-md:h-full max-md:max-h-screen max-md:max-w-full max-md:flex-col max-md:justify-center max-md:gap-12 max-md:overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>¿Necesitas ayuda?</DialogTitle>
          <DialogDescription>
            Indicanos el motivo principal para poder ayudarte
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 md:gap-2">
          <Link href="https://wa.me/5491124058816" target="_blank">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <CreditCard className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Compra</p>
                <p className="text-sm text-muted-foreground">
                  ¿Tuviste un problema al realizar la compra? ¿Hay un error en
                  tu orden?
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

          <Link href={linkWhatsApp} target="_blank">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <Info className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Otras consultas
                </p>
                <p className="text-sm text-muted-foreground">
                  Te contactaremos con el organizador.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
