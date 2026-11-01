import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cabivella.co.uk',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    ssr: {
      noExternal: []
    }
  }
});
