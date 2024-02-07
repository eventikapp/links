import EventCard from "@/components/event-card"
import { eventsMisionCEM } from "@/data/mision"

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center space-y-8 md:px-8">
      {eventsMisionCEM
        .filter((event) => event.status === "publish")
        .map((event) => {
          return (
            <div key={event.id} id={`${event.anchor}`}>
              <EventCard event={event} />
            </div>
          )
        })}
    </main>
  )
}
