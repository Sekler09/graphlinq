import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    open: true,
  },
  plugins: [react(), svgr()],
});
