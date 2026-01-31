import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatDateRange } from "@/utils/event-utils"
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
  banner?: StaticImageData
  title: string
  dateTime: {
    startDate: string
    startTime: string
    endDate: string
    endTime: string
  }
  location: {
    title: string
    subtitle: string
  }
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
  banner,
  title,
  dateTime,
  location,
  primaryLink,
  secondaryLink,
}: EventPageProps) {
  const formattedDateRange = formatDateRange(
    dateTime.startDate,
    dateTime.startTime,
    dateTime.endDate,
    dateTime.endTime
  )

  return (
    <Card className="md:w-[400px] overflow-hidden rounded-xl border">
      {banner && (
        <div className="relative aspect-auto w-full">
          <Image
            src={typeof banner === "string" ? banner : banner.src}
            alt={`${title} banner`}
            className="aspect-auto w-full"
            sizes="1080px"
            quality={100}
            width={1080}
            height={1080}
            priority
          />
          <div className="absolute inset-0 rounded-none ring-1 ring-inset ring-black/10 md:rounded-t-xl" />
        </div>
      )}

      <CardHeader className="p-4 md:px-6">
        <CardTitle className="text-xl font-bold leading-7">{title}</CardTitle>
      </CardHeader>

      <CardContent className="grow space-y-3 p-4 pt-0 md:px-6">
        <div className="flex items-center gap-x-3">
          <div className="flex size-9 items-center justify-center rounded-md border p-2 shadow-sm">
            <Calendar className="size-5" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-6">
              {formattedDateRange.firstLine}
            </p>
            <p className="text-sm leading-5 text-muted-foreground">
              {formattedDateRange.secondLine}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex size-9 items-center justify-center rounded-md border p-2 shadow-sm">
            <MapPin className="size-5" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-6">{location.title}</p>
            <p className="text-sm leading-5 text-muted-foreground">
              {location.subtitle}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter
        className={cn(
          "flex-col space-y-2",
          secondaryLink
            ? "border-t border-t-neutral-300 p-4 md:px-6"
            : "p-4 pt-0 md:px-6"
        )}
      >
        {secondaryLink && (
          <p className="text-center text-sm text-neutral-700">
            Elige tu inscripción según corresponda:
          </p>
        )}

        <div className="flex w-full items-center gap-x-2 py-2">
          <EventLink label={primaryLink.label} url={primaryLink.url} />
          {secondaryLink && (
            <EventLink label={secondaryLink.label} url={secondaryLink.url} />
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
