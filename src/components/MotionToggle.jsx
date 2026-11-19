import { Pause, Play } from "lucide-react";
import { useMotion } from "../hooks/useMotion";

/** Floating control to pause all animation (WCAG 2.2.2 Pause, Stop, Hide). */
export default function MotionToggle() {
  const { motion, toggle } = useMotion();
  const on = motion === "on";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-lg border border-white/12 bg-ink/80 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-zinc-300 backdrop-blur-md transition hover:border-violet/50 hover:text-white"
    >
      {on ? <Pause size={12} aria-hidden="true" /> : <Play size={12} aria-hidden="true" />}
      Motion {on ? "on" : "off"}
    </button>
  );
}
