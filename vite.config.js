import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in development or production.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure the build is clean
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
