import {join} from 'node:path'
import {Glob} from 'bun'
import fs from 'node:fs'

console.log('Build started')

if (fs.existsSync('./dist')) {
  fs.rmdirSync('./dist', {recursive: true})
}

const toCopy = Array.from(new Glob('**/*').scanSync('./src'))
const ignoreFiles = ['App.vue', 'routes.ts', 'main.ts', 'vite-env.d.ts']

for (const copy of toCopy) {
  if (copy.startsWith('pages')) continue
  if (copy.endsWith('.test.ts')) continue
  if (ignoreFiles.includes(copy)) continue

  fs.cpSync(
    join('./src', copy),
    join('./dist', copy),
  )
}

fs.cpSync('./package.json', './dist/package.json')

console.log('Build finished')
