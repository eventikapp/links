import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { CalendarIcon } from "@radix-ui/react-icons"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DialogFAQ } from "@/components/dialog-faq"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface EventLink {
  label: string
  url: string
}

interface EventPageProps {
  logo: string | StaticImageData
  banner?: string | StaticImageData
  title: string
  dateTime: {
    title: string
    subtitle: string
  }
  location: {
    title: string
    subtitle: string
  }
  whatsAppLink: string
  primaryLink: EventLink
  secondaryLink?: EventLink
}

const EventLink = ({ label, url }: EventLink) => {
  return (
    <Link
      href={url}
      className={cn(buttonVariants({ variant: "outline" }), "flex-1 shadow-sm")}
      target="_blank"
    >
      {label}
    </Link>
  )
}

export default function EventPage({
  logo,
  banner,
  title,
  dateTime,
  location,
  whatsAppLink,
  primaryLink,
  secondaryLink
}: EventPageProps) {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center px-4 md:px-8">
      <div className="flex w-full flex-col items-center gap-8">
        <Link href="/" className="relative mt-4 block overflow-hidden rounded-lg bg-zinc-200 shadow-md shadow-zinc-200 sm:rounded-xl lg:rounded-xl"
        >
          <Image
            src={typeof logo === 'string' ? logo : logo.src}
            alt={title}
            width={120}
            height={120}
            priority
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-xl" />

        </Link>

        <Card className="w-full max-w-[520px] overflow-hidden rounded-none border-0 shadow-none md:rounded-xl md:border">
          {banner && (
            <div className="relative h-[220px] w-full overflow-hidden sm:h-[236px]">
              <Image
                src={typeof banner === 'string' ? banner : banner.src}
                alt={`${title} banner`}
                className="absolute h-full w-full"
                style={{ objectFit: "cover" }}
                fill={true}
                sizes="1080px"
                quality={100}
                priority
              />
            </div>
          )}

          <CardHeader className="p-4 md:px-6">
            <CardTitle className="text-xl font-bold leading-8">{title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 p-4 pt-0 md:px-6">
            <div className="flex items-center gap-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-200 p-2">
                <CalendarIcon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold leading-6">{dateTime.title}</p>
                <p className="text-sm leading-5 text-muted-foreground">
                  {dateTime.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-200 p-2">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold leading-6">{location.title}</p>
                <p className="text-sm leading-5 text-muted-foreground">
                  {location.subtitle}
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col space-y-2 border-t border-t-neutral-300 p-4 md:px-6">
            <p className="text-center text-sm text-neutral-700">
              Elige tu inscripción según corresponda:
            </p>

            <div className="flex w-full items-center gap-x-2 py-2">
              <EventLink label={primaryLink.label} url={primaryLink.url} />
              {secondaryLink && (
                <EventLink label={secondaryLink.label} url={secondaryLink.url} />
              )}
            </div>
          </CardFooter>
        </Card>

        <DialogFAQ linkWhatsApp={whatsAppLink} />
      </div>
    </div>
  )
}