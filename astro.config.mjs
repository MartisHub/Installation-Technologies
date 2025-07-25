import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://it.cw',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});