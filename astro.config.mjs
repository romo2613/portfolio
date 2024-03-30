import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    react()
  ]
});