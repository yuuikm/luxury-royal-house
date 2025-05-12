import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      constants: path.resolve(__dirname, 'src/constants'),
      provider: path.resolve(__dirname, 'src/provider'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
});
