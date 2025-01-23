import {join} from 'node:path'
import {Glob} from 'bun'
import fs from 'node:fs'
import {eslintDeps} from './eslint'

const dist = './dist/memories-ui'

export default () => {
  console.log('UI Build started')

  const toCopy = Array.from(new Glob('**/*').scanSync('./src'))
  const ignoreFiles = new Set<string>(['vite-env.d.ts', 'routes.ts', 'App.vue', 'main.ts'])

  for (const copy of toCopy) {
    if (copy.startsWith('pages')) continue
    if (copy.endsWith('.test.ts')) continue
    if (ignoreFiles.has(copy)) continue

    fs.cpSync(
      join('./src', copy),
      join(dist, copy),
    )
  }

  const json = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

  json.dependencies = [...eslintDeps, 'eslint-plugin-vue'].reduce((acc, dep) => ({
    [dep]: json.devDependencies[dep],
    ...acc,
  }), json.dependencies)

  delete json['scripts']
  delete json['devDependencies']

  fs.writeFileSync(`${dist}/package.json`, JSON.stringify(json))

  fs.cpSync('./readme.md', `${dist}/readme.md`)

  fs.cpSync('./eslint/index.js', `${dist}/index.js`)
  fs.cpSync('./eslint/vue.js', `${dist}/eslint.js`)

  console.log('UI Build finished')
}
