import {defineConfig} from 'tsup'

export default defineConfig({
  entry: {
    index: './src/lib.ts',
  },
  target: 'node22',
  format: ['esm'],
  outDir: 'dist',
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  treeshake: false,
  sourcemap: false,
  tsconfig: './tsconfig.app.json',
})
