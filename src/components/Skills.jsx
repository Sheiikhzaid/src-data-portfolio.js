import { Accessibility, Bot, Braces, Circle, ClipboardCheck, Database, Headset } from "lucide-react";
import { skills } from "../data/portfolio";

// Explicit imports keep the bundle small. To use a new icon, import it
// above and add it here, then reference its name in data/portfolio.js.
const Icons = { Accessibility, Bot, Braces, Circle, ClipboardCheck, Database, Headset };
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[420px] max-w-4xl rounded-full bg-violet/[0.06] blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="skills-title" index="02" label="Technical skills" title="The toolkit behind" accent="every test run.">
          From exploratory sessions and screen-reader audits to automated suites and API contracts.
        </SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = Icons[group.icon] ?? Icons.Circle;
            return (
              <Reveal as="li" key={group.title} delay={(i % 3) * 90}>
                <article
                  onMouseMove={onMove}
                  className="glass spotlight group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet/20 to-cyan/10 text-violet transition group-hover:text-cyan">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-zinc-600">
                      {String(i + 1).padStart(2, "0")} / {group.items.length} skills
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.75rem] leading-tight text-zinc-50">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.8rem] text-zinc-300 transition hover:border-violet/40 hover:text-white"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
