// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://til2109.github.io",
  base: "samehome",
  integrations: [mdx(), sitemap(), tailwind()],
});
