// import tsconfigPaths from 'vite-tsconfig-paths'
import {fileURLToPath} from 'node:url'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {port: 5400},
  plugins: [
    // tsconfigPaths(),
    vue(),
    dts({
      include: ['src'],
      rollupTypes: true,
      staticImport: true,
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // ssr: true,
    lib: {
      formats: ['es'],
      entry: './src/index.ts',
      fileName: 'index',
    },
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue', '@stitches/core'],
    },
  },
})
