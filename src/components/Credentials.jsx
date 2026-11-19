import { Award, Calendar, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  return (
    <section id="credentials" aria-labelledby="credentials-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="credentials-title" index="05" label="Education & certifications" title="Foundations and" accent="credentials." />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Education */}
        <Reveal>
          <article className="glass relative h-full overflow-hidden rounded-3xl p-7 sm:p-9">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/15 blur-3xl" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet/25 to-cyan/10 text-violet">
              <GraduationCap size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-7 font-display text-3xl leading-tight text-zinc-50 sm:text-[2.2rem]">{education.degree}</h3>
            <p className="mt-3 text-zinc-200">{education.school}</p>
            <p className="mt-1 text-sm text-zinc-400">{education.university}</p>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3.5 py-1.5 text-zinc-300">
                <Calendar size={14} aria-hidden="true" /> {education.period}
              </span>
              <span className="inline-flex items-center rounded-full bg-white/[0.04] px-3.5 py-1.5 text-zinc-300">{education.grade}</span>
            </div>
          </article>
        </Reveal>

        {/* Certifications */}
        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.name + c.issuer} delay={(i % 2) * 80}>
              <article className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet/30">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-cyan transition group-hover:bg-violet/15 group-hover:text-violet">
                  <Award size={17} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-zinc-500">{c.issuer}</p>
                  <h3 className="mt-1.5 text-[0.95rem] font-medium leading-snug text-zinc-100">{c.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
