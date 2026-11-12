import Image from "next/image";
import { story } from "@/data/story";
import SectionTitle from "@/components/ui/SectionTitle";

export default function OurStory() {
  return (
    <section className="section bg-white" id="story">
      <SectionTitle eyebrow="Our journey" title="Our Story" />
      <div className="mx-auto max-w-5xl space-y-10">
        {story.map((item, index) => (
          <div
            key={item.year}
            className={`grid items-stretch gap-6 md:grid-cols-2 md:gap-8 ${
              index % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="flex flex-col justify-center rounded-3xl bg-wedding-cream p-8 md:p-10">
              <p className="text-sm uppercase tracking-widest text-wedding-gold">{item.year}</p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">{item.title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{item.description}</p>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-wedding-wine/10 shadow-sm md:min-h-[320px]">
              <Image
                src={item.image}
                alt={`${item.title} - ${item.year}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
                priority={index === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
