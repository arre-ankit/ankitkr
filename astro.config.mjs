import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    mdx(),
  ],
  site: 'https://yourdomain.com',
  vite: {
    server: {
      allowedHosts: true,
    },

    plugins: [tailwindcss()],
  },
});