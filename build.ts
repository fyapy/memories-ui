import fs from 'node:fs'
import {$} from 'bun'

console.log('Build started')

if (fs.existsSync('./dist')) {
  fs.rmdirSync('./dist', {recursive: true})
}

fs.cpSync('./src', './dist', {recursive: true})

fs.rmdirSync('./dist/pages', {recursive: true})
fs.unlinkSync('./dist/App.vue')
fs.unlinkSync('./dist/main.ts')
fs.unlinkSync('./dist/routes.ts')
fs.unlinkSync('./dist/vite-env.d.ts')

fs.cpSync('./package.json', './dist/package.json')

console.log('Build finished')

await $`bun types`
