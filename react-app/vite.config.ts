import react from '@vitejs/plugin-react';
import unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import environmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    environmentPlugin('all'),
    unfonts({
      custom: {
        families: [{ name: 'Basier Circle', src: './src/assets/fonts/*.woff2' }],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
      {
        find: 'src',
        replacement: '/src',
      },
    ],
  },
});
