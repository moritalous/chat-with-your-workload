import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Prevent node built-in modules from being bundled
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
    rollupOptions: {
      // Externalize node built-in modules
      external: [
        'node:child_process',
        'node:path',
        'node:url',
        'path',
        'fs',
        'os',
        'crypto',
        'child_process',
        'module',
        'assert',
        'util',
        'fs/promises',
        'stream',
        'url',
        'net',
        'https',
        'constants',
        'zlib',
      ],
      output: {
        manualChunks(id: string | string[]) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // // Limit memory usage
    target: 'es2015',
    minify: false,
    sourcemap: false,
    chunkSizeWarningLimit: 2000
  },
});
