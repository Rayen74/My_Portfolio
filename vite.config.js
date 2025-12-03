// /client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000', // URL de votre serveur backend
        ws: true,                        // Support des WebSockets
      },
    },
  },
});