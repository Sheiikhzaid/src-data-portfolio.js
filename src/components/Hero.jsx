import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import Avatar from "./Avatar";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 md:pb-28">
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-violet/[0.13] blur-[120px]" />
        <div className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-cyan/[0.08] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 id="hero-title" className="mt-7 font-display text-[3.2rem] leading-[0.98] tracking-tight text-zinc-50 sm:text-7xl lg:text-[5.4rem]">
              Hi, I'm <br className="hidden sm:block" />
              <em className="accent-text italic pr-2">{profile.name}</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-xl leading-snug text-zinc-200 sm:text-2xl">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-zinc-400">{profile.intro}</p>
          </Reveal>

          <Reveal delay={280} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_8px_30px_-8px_rgba(167,139,250,0.55)] transition hover:bg-white hover:shadow-[0_10px_40px_-6px_rgba(167,139,250,0.7)]"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-violet/60 hover:bg-violet/10"
            >
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              Download My CV
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              <Mail size={16} aria-hidden="true" />
              <span className="link-underline">Contact Me</span>
            </a>
          </Reveal>

          <Reveal delay={340} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6">
            <SocialLinks />
            <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
              <MapPin size={15} aria-hidden="true" /> {profile.location}
            </span>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <Avatar />
        </Reveal>
      </div>
    </section>
  );
}
