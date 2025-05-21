/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['3d51-101-53-218-201.ngrok-free.app']
  },
  resolve: {
    mainFields: ['module'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'legacy',
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  plugins: [
      analog({
        vite: {
          inlineStylesExtension: 'scss'
        },
        prerender: {
          routes: ['/']
        }
      })
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
