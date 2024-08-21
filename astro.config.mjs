import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://nicolasgarin.github.io",
  base: "shortly",
  integrations: [tailwind()]
});