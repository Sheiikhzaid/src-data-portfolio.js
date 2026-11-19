import { useEffect, useRef, useState } from "react";
import { stats } from "../data/portfolio";
import { motionEnabled } from "../hooks/useMotion";
import Reveal from "./Reveal";

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !motionEnabled() || !("IntersectionObserver" in window)) return;
    setN(0);
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} aria-hidden="true">
      {n}
      <em className="accent-text italic">{suffix}</em>
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Impact in numbers" className="border-y border-line bg-ink-2/60">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className={`flex flex-col-reverse gap-3 py-10 pr-4 md:py-14 ${i % 2 ? "pl-5 sm:pl-8" : ""} ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
            } ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
          >
            <dt className="max-w-[16rem] text-sm leading-snug text-zinc-400">{s.label}</dt>
            <dd className="font-display text-5xl tracking-tight text-zinc-50 sm:text-6xl">
              <span className="sr-only">{`${s.value}${s.suffix}`}</span>
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
