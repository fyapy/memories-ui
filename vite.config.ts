import tsconfigPaths from 'vite-tsconfig-paths'
import preact from '@preact/preset-vite'
import {defineConfig} from 'vite'

export default defineConfig({
  server: {port: 5400},
  base: '/',
  plugins: [
    preact({devToolsEnabled: false}),
    tsconfigPaths(),
  ],
})
