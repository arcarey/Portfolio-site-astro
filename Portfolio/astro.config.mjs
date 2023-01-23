import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://arcarey.github.io',
  base: '/Portfolio-site-astro',
  integrations: [mdx(), sitemap(), react()]
});