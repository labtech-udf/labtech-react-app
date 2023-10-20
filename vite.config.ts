import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname, './src/components'),
      "@contexts": path.resolve(__dirname, './src/contexts'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@interfaces": path.resolve(__dirname, './src/interfaces'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@services": path.resolve(__dirname, './src/services'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@utils": path.resolve(__dirname, './src/utils')
    },
  },
  server: {
    port: 3000,
  },
});
