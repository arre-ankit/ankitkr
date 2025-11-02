import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
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