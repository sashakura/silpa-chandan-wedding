import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="bg-[#33272a] px-6 py-16 text-center text-white">
      <p className="font-serif text-4xl">{wedding.couple.bride} &amp; {wedding.couple.groom}</p>
      <p className="mt-5 text-sm text-white/70">{wedding.invitation.regards}</p>
      <p className="mt-3 text-sm text-white/50">{wedding.location.venue}</p>
      <p className="mt-1 text-sm text-white/50">{wedding.location.area}, {wedding.location.city} - {wedding.location.pincode}</p>
      <p className="mt-8 text-xs text-white/40">© 2026 Wedding Invitation</p>
    </footer>
  );
}
