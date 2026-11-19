import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="experience-title" index="03" label="Work experience" title="Where I've" accent="put it to work." />

      <ol className="relative">
        {/* timeline rail */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet/70 via-white/10 to-cyan/50 md:left-[calc(16rem+7px)]"
        />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 100} className="relative grid gap-4 pb-14 pl-10 last:pb-0 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0">
            {/* node */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-violet/60 bg-ink md:left-64"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-violet" />
            </span>

            <div className="md:pr-12 md:pt-0.5">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-zinc-400">
                <Calendar size={13} aria-hidden="true" />
                {job.period}
              </p>
            </div>

            <article className="glass spotlight rounded-3xl p-6 transition hover:border-white/15 sm:p-8 md:ml-12">
              <header className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-zinc-50 sm:text-4xl">{job.role}</h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-zinc-300">
                    <Briefcase size={15} className="text-violet" aria-hidden="true" />
                    {job.company}
                  </p>
                </div>
              </header>
              <ul className="mt-6 grid gap-3 text-[0.95rem] leading-relaxed text-zinc-300 sm:grid-cols-2 sm:gap-x-8">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Tools used">
                {job.tags.map((t) => (
                  <li key={t} className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] text-zinc-400">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
