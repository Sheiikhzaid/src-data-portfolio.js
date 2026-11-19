import { useCallback, useEffect, useState } from "react";

/** Reads/writes html[data-motion]. Initial value is set in index.html. */
export function useMotion() {
  const [motion, setMotion] = useState(
    () => document.documentElement.getAttribute("data-motion") || "on"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-motion", motion);
    try {
      localStorage.setItem("motion", motion);
    } catch {
      /* storage unavailable — preference just won't persist */
    }
  }, [motion]);

  const toggle = useCallback(() => setMotion((m) => (m === "on" ? "off" : "on")), []);
  return { motion, toggle };
}

export const motionEnabled = () =>
  document.documentElement.getAttribute("data-motion") !== "off";
