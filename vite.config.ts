import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'vue-dragscroll',
      filename: (format) => `${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue()]
})
