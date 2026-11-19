import { useState } from "react";
import { profile } from "../data/portfolio";

const rays = Array.from({ length: 144 }, (_, i) => i);

/** Profile photo framed by a slow-turning ray ring. Falls back to a monogram. */
export default function Avatar() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* ray ring */}
      <svg viewBox="0 0 400 400" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ray" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {rays.map((i) => {
          const a = (i / rays.length) * Math.PI * 2;
          const long = i % 4 === 0;
          const r1 = 158;
          const r2 = long ? 196 : 180;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * r1}
              y1={200 + Math.sin(a) * r1}
              x2={200 + Math.cos(a) * r2}
              y2={200 + Math.sin(a) * r2}
              stroke="url(#ray)"
              strokeWidth={long ? 1.2 : 0.7}
              strokeLinecap="round"
              opacity={long ? 0.75 : 0.35}
            />
          );
        })}
      </svg>

      {/* soft glow */}
      <div className="absolute inset-[18%] rounded-full bg-violet/25 blur-3xl" aria-hidden="true" />

      {/* portrait */}
      <div className="absolute inset-[19%] overflow-hidden rounded-full border border-white/15 bg-ink-2 shadow-[0_0_0_8px_rgba(255,255,255,0.02)]">
        {!failed ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="400"
            height="400"
            fetchpriority="high"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} monogram`}
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_25%,rgba(167,139,250,0.28),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(34,211,238,0.18),transparent_55%)]"
          >
            <span className="accent-text font-display text-7xl italic sm:text-8xl">{profile.initials}</span>
          </div>
        )}
      </div>

      {/* floating badges */}
      <div className="glass animate-float absolute -left-2 top-[16%] hidden rounded-2xl px-4 py-3 sm:block">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">WCAG audits</p>
        <p className="font-display text-2xl text-zinc-50">250 screens</p>
      </div>
      <div className="glass animate-float absolute -right-1 bottom-[14%] hidden rounded-2xl px-4 py-3 [animation-delay:-6s] sm:block">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">Defects tracked</p>
        <p className="font-display text-2xl text-zinc-50">45+ in Jira</p>
      </div>
    </div>
  );
}
