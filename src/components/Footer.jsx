import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const link = "group inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-white";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl text-zinc-50">
              {profile.name}
              <span className="text-violet">.</span>
            </p>
            <p className="mt-1 text-sm text-zinc-400">QA Engineer | Software Testing | Accessibility</p>
          </div>
          <div className="flex items-center gap-6">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              LinkedIn <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
                GitHub <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <a href={`mailto:${profile.email}`} className={link}>
              Email <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#top"
              className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:-translate-y-0.5 hover:border-violet/60 hover:text-white"
            >
              <ArrowUp size={18} aria-hidden="true" />
              <span className="sr-only">Back to top</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with accessibility in mind.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
