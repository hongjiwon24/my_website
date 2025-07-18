// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('✅ vite.config.js loaded!'); // ← 로그 꼭 넣기!

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
