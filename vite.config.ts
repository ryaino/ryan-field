/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  resolve: {
    mainFields: ['module'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'legacy',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  plugins: [
    analog({
      liveReload: true,
      vite: {
        inlineStylesExtension: 'scss',
      },
      static: true,
      ssr: true,
      prerender: {
        routes: async () => [
          '/',
          '/projects',
          '/theme',
          {
            contentDir: 'src/content/projects',
            transform: (file: PrerenderContentFile) => {
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes['slug'] || file.name;
              return `/projects/${slug}`;
            },
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
