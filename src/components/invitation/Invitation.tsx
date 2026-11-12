import { wedding } from "@/data/wedding";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Invitation() {
  return (
    <section id="invitation" className="section">
      <div className="mx-auto mb-10 max-w-3xl rounded-[2rem] border border-wedding-gold/40 bg-white p-8 text-center shadow-sm md:p-14">
        <p className="font-serif text-xl text-wedding-gold">{wedding.invitation.mantra}</p>
        <SectionTitle eyebrow="A special invitation" title={wedding.invitation.title} />
        <p className="mx-auto max-w-2xl font-serif text-xl leading-9 text-gray-700">{wedding.invitation.message}</p>
        <div className="mt-10 space-y-2">
          <p className="text-sm uppercase tracking-[.3em] text-wedding-rose">On</p>
          <p className="font-serif text-3xl">{wedding.invitation.dateText}</p>
          <p className="text-sm uppercase tracking-widest">{wedding.invitation.dayText}</p>
        </div>
      </div>
    </section>
  );
}
