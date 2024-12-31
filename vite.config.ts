import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'

export default defineConfig({
  server: {port: 5400},
  plugins: [vue()],
  base: '/',
})
