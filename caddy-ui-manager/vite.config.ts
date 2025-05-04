import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true, // Ensures fallback to index.html for SPA
  },
  build: {
    rollupOptions: {
      input: '/public/index.html',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});