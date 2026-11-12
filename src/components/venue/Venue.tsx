import { wedding } from "@/data/wedding";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Venue() {
  const address = wedding.location.address;
  const query = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  const embedUrl = `https://maps.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="section bg-white" id="venue">
      <SectionTitle eyebrow="Find your way" title="Join Us" />
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-wedding-cream shadow-sm">
        <div className="grid md:grid-cols-[1.2fr_.8fr]">
          <div className="min-h-[360px] bg-[#eadfd5]">
            <iframe
              title="Wedding venue map"
              src={embedUrl}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="flex flex-col justify-center p-8 text-center md:p-10">
            <p className="font-serif text-2xl text-wedding-gold">{wedding.invitation.mantra}</p>
            <h3 className="mt-6 font-serif text-3xl text-wedding-wine">{wedding.location.venue}</h3>
            <p className="mt-3 text-gray-600">{wedding.location.area}, {wedding.location.city} - {wedding.location.pincode}</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">{address}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-wedding-wine px-5 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-wedding-rose"
              >
                Get Directions
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-wedding-wine px-5 py-3 text-xs uppercase tracking-widest text-wedding-wine transition hover:bg-white"
              >
                Open Location
              </a>
            </div>

            <div className="mt-8 border-t border-wedding-gold/30 pt-6">
              <p className="font-semibold">{wedding.contact.name}</p>
              <a href={`tel:${wedding.contact.phone.replace(/\s/g, "")}`} className="mt-1 inline-block text-wedding-rose">
                {wedding.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
