import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from "/Users/jakxel/Developer/Projects/jakxel-blog/node_modules/vite-plugin-node-polyfills/dist/index"

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
});
