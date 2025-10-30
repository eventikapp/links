import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { QuestionMarkCircledIcon, Cross2Icon } from "@radix-ui/react-icons"

interface Props {
  linkWhatsApp: string
  supportType?: "organizer" | "Fint"
  className?: string
}

const Fint_WHATSAPP =
  "https://wa.me/5491124058816?text=Hola,%20necesito%20ayuda%20con%20la%20compra%20de%20mi%20entrada"

export function DialogFAQ({
  linkWhatsApp,
  supportType = "Fint",
  className,
}: Props) {
  const whatsappLink =
    supportType === "organizer" ? linkWhatsApp : Fint_WHATSAPP

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex items-center gap-x-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200",
          className
        )}
      >
        <QuestionMarkCircledIcon className="h-5 w-5" />
        Ayuda
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Necesitas ayuda?</DialogTitle>
          <DialogDescription>
            Si tienes alguna duda o problema con tu compra, no dudes en
            contactarnos.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4">
          <Button asChild variant="outline">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21l3.834-.892A9.94 9.94 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8.01 8.01 0 01-4.797-1.593l-.34-.203-3.016.703.714-3.016-.203-.34A7.974 7.974 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.537-5.764c-.242-.123-1.438-.71-1.66-.792-.223-.08-.385-.123-.547.123-.162.246-.627.792-.769.954-.142.162-.283.182-.526.06-.242-.123-1.024-.377-1.95-1.204-.72-.643-1.207-1.437-1.349-1.68-.141-.242-.015-.374.106-.495.109-.109.242-.284.363-.426.121-.142.162-.243.242-.405.08-.162.04-.304-.02-.426-.06-.122-.547-1.318-.75-1.804-.197-.473-.397-.408-.547-.416a9.861 9.861 0 00-.466-.008.893.893 0 00-.648.304c-.223.243-.851.832-.851 2.028 0 1.196.871 2.352.992 2.514.121.162 1.709 2.607 4.137 3.654.579.25 1.031.399 1.383.51.581.184 1.111.158 1.529.096.466-.07 1.436-.587 1.638-1.154.202-.567.202-1.053.142-1.155-.061-.101-.223-.162-.466-.284z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="mailto:soporte@Fint.app"
              className="flex items-center gap-x-2"
            >
              <Cross2Icon className="h-5 w-5" />
              Contactar por Email
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
