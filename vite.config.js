import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import staticPlugin from "vite-plugin-static"

export default defineConfig({
  plugins: [vue(), staticPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: "/Hilltop/"
});