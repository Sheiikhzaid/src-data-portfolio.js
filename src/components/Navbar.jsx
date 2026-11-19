import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(ids);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 12);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const linkCls = (id) =>
    `relative rounded-full px-3.5 py-2 text-sm transition-colors ${
      active === id ? "text-white" : "text-zinc-400 hover:text-zinc-100"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-px bg-gradient-to-r from-violet via-violet to-cyan"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-2xl tracking-tight text-zinc-50" aria-label={`${profile.name}, back to top`}>
          {profile.name}
          <span className="text-violet">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkCls(l.id)} aria-current={active === l.id ? "location" : undefined}>
                {active === l.id && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]" aria-hidden="true" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-violet/60 hover:bg-violet/10 sm:inline-flex"
          >
            <Download size={15} className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            Download CV
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 transition hover:bg-white/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line lg:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-3.5 font-display text-2xl text-zinc-100 transition hover:text-violet"
              >
                <span className="font-mono text-xs text-zinc-500">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-950"
            >
              <Download size={16} aria-hidden="true" /> Download CV
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
