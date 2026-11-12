import { families } from "@/data/family";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Families() {
  return (
    <section className="section bg-white">
      <SectionTitle eyebrow="Bride & Groom" title="Family Details" />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {families.map((family) => (
          <div key={family.side} className="rounded-3xl bg-wedding-cream p-8 text-center">
            <h3 className="font-serif text-3xl">{family.side}</h3>
            {family.names.map((name) => <p key={name} className="mt-3 text-gray-600">{name}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}
