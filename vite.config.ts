import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

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
        'node:child_process', 'node:path', 'node:url', 'path', 'fs', 'os', 
        'crypto', 'child_process', 'module', 'assert', 'util', 'fs/promises',
        'stream', 'url', 'net', 'https', 'constants', 'zlib',
        /aws-cdk-lib.*/,
        /@aws-amplify\/.*/
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
    // // Limit memory usage
    // target: 'es2015',
    // minify: true,
    // sourcemap: true,
    // chunkSizeWarningLimit: 2000
  },
});
