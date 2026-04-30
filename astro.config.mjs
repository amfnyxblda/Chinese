// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
      server: {
      //allowedHosts: ['4c8e193c8af59c0060444de93f3cf7de.serveo.net'],
      // or you can use `true` to allow all hosts, but this is not recommended for security
      // allowedHosts: true,
      },
  },
  site: 'https://jagapet.com',
  base: '/melayu', 
  outDir: 'dist',
  integrations: [sitemap(), pagefind()],
});