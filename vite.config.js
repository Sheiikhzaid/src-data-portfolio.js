import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // "/" for Vercel/Netlify; the GitHub Pages workflow sets VITE_BASE to "/<repo>/".
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
});
