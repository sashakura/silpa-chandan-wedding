import { events } from "@/data/events";
import { wedding } from "@/data/wedding";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Events() {
  return (
    <section className="section" id="events">
      <SectionTitle eyebrow="Save the dates" title="Wedding Events" />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {events.map((event) => (
          <article
            key={event.id}
            className={`relative overflow-hidden rounded-3xl border p-7 text-center shadow-sm ${
              event.id === "wedding"
                ? "border-wedding-gold/50 bg-gradient-to-br from-white to-[#fbf0df]"
                : "border-wedding-rose/30 bg-white"
            }`}
          >
            <div className="mb-1 text-3xl" aria-hidden="true">{event.icon}</div>

            {event.id === "wedding" ? (
              <div className="event-highlight mt-5 rounded-2xl border border-wedding-gold/35 bg-white/70 px-5 py-7">
                <p className="text-[10px] uppercase tracking-[.35em] text-wedding-rose">The Wedding of</p>
                <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-5">
                  <div>
                    <h3 className="font-serif text-4xl leading-none text-wedding-wine md:text-5xl">{wedding.couple.bride}</h3>
                    <p className="mt-2 text-xs text-gray-600">Sister of</p>
                    <p className="text-sm font-medium">{wedding.bride.brother}</p>
                  </div>
                  <span className="font-serif text-3xl text-wedding-gold">&amp;</span>
                  <div>
                    <h3 className="font-serif text-4xl leading-none text-wedding-wine md:text-5xl">{wedding.couple.groom}</h3>
                    <p className="mt-2 text-xs text-gray-600">Son of</p>
                    <p className="text-sm font-medium">{wedding.groom.father} &amp; {wedding.groom.mother}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="event-highlight mt-5 rounded-2xl border border-wedding-rose/20 bg-wedding-cream/60 px-5 py-7">
                <p className="text-[10px] uppercase tracking-[.35em] text-wedding-rose">Auspicious morning</p>
                <h3 className="mt-3 font-serif text-3xl text-wedding-wine">{event.title}</h3>
              </div>
            )}

            <p className="mt-5 font-serif text-lg font-semibold tracking-wide text-wedding-wine">{event.date}</p>
            <p className="font-sans text-sm font-medium uppercase tracking-[.22em] text-wedding-rose">{event.time}</p>
            <p className="mt-4 font-serif text-lg font-semibold text-wedding-ink">{event.venue}</p>
            <p className="font-sans text-sm text-gray-500">{event.address}</p>
            <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-7 text-gray-600">{event.description}</p>
            <a
              className="mt-6 inline-block rounded-full bg-wedding-wine px-5 py-2 text-xs uppercase tracking-widest text-white transition hover:bg-wedding-rose"
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.calendarStart}/${event.calendarEnd}&location=${encodeURIComponent(`${event.venue}, ${event.address}`)}&details=${encodeURIComponent(event.description)}`}
              target="_blank"
              rel="noreferrer"
            >
              Add to Calendar
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
