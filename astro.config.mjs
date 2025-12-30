// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  // Cloudflare Pages automatically handles static assets + Functions
  // No adapter needed for static site with Pages Functions
});
