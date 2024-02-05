import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CalendarIcon } from "@radix-ui/react-icons"

export default function Card({ event }: any) {
  const { cover, title, dateTime, location, links } = event

  return (
    <div className="w-full max-w-[480px] overflow-hidden border-neutral-200 bg-white md:rounded-xl md:border">
      <Image src={cover} alt="cover event" />

      <div className="space-y-6 rounded-xl px-4 py-6 md:px-8">
        <p className="text-xl font-bold leading-8">{title}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-200 p-2">
              <CalendarIcon className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold leading-6">
                {dateTime.title}
              </p>

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
              <p className="font-semibold leading-6">
                {location.title}
              </p>

              <p className="text-sm leading-5 text-muted-foreground">
                {location.subtitle}
              </p>
            </div>
          </div>
        </div>

        {links && (
          <div className="flex items-center gap-x-2">
            {links.primary && (
              <Link href={links.primary.url} className="flex w-full items-center justify-center gap-x-2 rounded-md bg-secondary px-4 py-2.5" target="_blank">
                <span className="font-medium leading-5 text-secondary-foreground">
                  {links.primary.label}
                </span>
              </Link>
            )}

            {links.secondary && (
              <Link href={links.secondary.url} className="flex w-full items-center justify-center gap-x-2 rounded-md bg-secondary px-4 py-2.5" target="_blank">
                <span className="font-medium leading-5 text-secondary-foreground">
                  {links.secondary.label}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}