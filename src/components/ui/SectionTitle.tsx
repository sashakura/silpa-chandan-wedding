export default function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.28em] text-wedding-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="flower-divider mt-5">✦ &nbsp;❦&nbsp; ✦</div>
    </div>
  );
}
