import Reveal from "./Reveal";

/** "02 — About" eyebrow + large serif heading with an italic accent line. */
export default function SectionHeading({ index, label, title, accent, id, children }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-zinc-500">{index}</span>
        <span className="h-px w-8 bg-zinc-700" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
        {title} {accent && <em className="accent-text italic">{accent}</em>}
      </h2>
      {children && <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">{children}</p>}
    </Reveal>
  );
}
