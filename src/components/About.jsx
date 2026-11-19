import { about } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="about-title" index="01" label="About me" title={about.heading[0]} accent={about.heading[1]} />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-5 text-[1.06rem] leading-relaxed text-zinc-300">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? "text-xl leading-snug text-zinc-100 sm:text-2xl" : ""}>
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="glass divide-y divide-white/[0.07] rounded-3xl px-6 py-2">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="eyebrow !text-[0.66rem]">{f.label}</dt>
                <dd className="text-right text-sm text-zinc-100">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
