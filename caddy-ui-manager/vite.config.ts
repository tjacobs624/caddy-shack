import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: false,
    allowedHosts: ['proxy.prod.myjacobsnetwork.net']
  },
  preview: {
    port: 3000,
    host: true
  }
});