import tsconfigPaths from 'vite-tsconfig-paths'
import preact from '@preact/preset-vite'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: '/',
  server: {port: 5400},
  plugins: [
    preact(),
    tsconfigPaths(),
    dts({
      include: ['src'],
      staticImport: true,
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      formats: ['es'],
      entry: './src/index.tsx',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'preact',
        'preact/jsx-runtime',
        'preact/jsx-dev-runtime',
        '@preact/signals',
        '@stitches/core',
      ],
    },
  },
})
