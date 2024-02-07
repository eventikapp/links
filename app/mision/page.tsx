import EventCard from "@/components/event-card"
import { eventsMisionCEM } from "@/data/mision"
import { cn } from "@/lib/utils"

export default function Page() {
  // get quantity published events
  const quantityPublishEvents = eventsMisionCEM.filter(
    (event) => event.status === "publish"
  ).length

  return (
    <main className="flex w-full flex-col items-center md:px-8">
      <section
        className={cn("grid grid-cols-1 gap-6 max-md:w-full", {
          "grid-cols-1 md:grid-cols-2": quantityPublishEvents > 1,
        })}
      >
        {eventsMisionCEM
          .filter((event) => event.status === "publish")
          .map((event) => {
            return (
              <div key={event.id} id={`${event.anchor}`}>
                <EventCard event={event} />
              </div>
            )
          })}
      </section>
    </main>
  )
}
