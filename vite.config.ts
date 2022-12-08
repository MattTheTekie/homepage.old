import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import config from './config.json';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    build: {
        target: "es2022"
    },
    publicDir: 'files',
    optimizeDeps: {
        esbuildOptions: {
            target: "es2022"
        }
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
      hmr: {
          clientPort: config.port
      },
      port: config.port,
      strictPort: true,
      host: "0.0.0.0"
    },
    server: {
      hmr: {
          clientPort: config.port
      },
      port: config.port,
      strictPort: true,
      host: "0.0.0.0"
    }
  };
});