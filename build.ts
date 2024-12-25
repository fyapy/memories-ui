import {join} from 'node:path'
import {Glob} from 'bun'
import fs from 'node:fs'

console.log('Build started')

if (fs.existsSync('./dist')) {
  fs.rmdirSync('./dist', {recursive: true})
}

const toCopy = Array.from(new Glob('**/*').scanSync('./src'))
const ignoreFiles = new Set<string>(['vite-env.d.ts', 'routes.ts', 'App.vue', 'main.ts'])

for (const copy of toCopy) {
  if (copy.startsWith('pages')) continue
  if (copy.endsWith('.test.ts')) continue
  if (ignoreFiles.has(copy)) continue

  fs.cpSync(
    join('./src', copy),
    join('./dist', copy),
  )
}

fs.cpSync('./package.json', './dist/package.json')
fs.cpSync('./readme.md', './dist/readme.md')

console.log('Build finished')
