import { ArrowUpRight, CircleCheck } from "lucide-react";
import { profile, projects } from "../data/portfolio";
import { GitHubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-40 -z-10 h-[380px] w-[380px] rounded-full bg-cyan/[0.06] blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="projects-title" index="04" label="Selected projects" title="Things I've built to" accent="test smarter.">
          Side projects where QA meets automation, data and machine learning.
        </SectionHeading>

        <ul className="grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="h-full">
              <article
                onMouseMove={onMove}
                className="glass spotlight group flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet/30 hover:shadow-[0_30px_80px_-40px_rgba(167,139,250,0.55)] sm:p-7"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
                  <span className="text-violet">{String(i + 1).padStart(2, "0")}</span> / {p.category}
                </p>
                <h3 className="mt-5 font-display text-[1.85rem] leading-[1.08] text-zinc-50">{p.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-zinc-400">{p.summary}</p>

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <CircleCheck size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cyan/80" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full border border-violet/20 bg-violet/[0.07] px-2.5 py-1 text-[0.72rem] font-medium text-violet-200">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-violet/50 hover:bg-violet/10"
                      >
                        <GitHubIcon size={15} /> View on GitHub
                        <span className="sr-only">: {p.title} (opens in a new tab)</span>
                      </a>
                    ) : (
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(`Code request: ${p.title}`)}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet/50 hover:bg-violet/10"
                      >
                        <GitHubIcon size={15} /> Code on request
                        <span className="sr-only">: email about {p.title}</span>
                      </a>
                    )}
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
