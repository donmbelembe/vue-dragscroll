import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Build the documentation/demo application separately from the npm library.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'site',
    emptyOutDir: true,
  },
  plugins: [vue()],
})
