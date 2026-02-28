// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: cloudflare(),
  site: 'https://blogai.pages.dev',
  image: {
    service: {
      entrypoint: 'astro/assets/services/compile',
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
