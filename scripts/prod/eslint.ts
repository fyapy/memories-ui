import {join} from 'node:path'
import fs from 'node:fs'

const dist = './dist/memories-eslint'

export const eslintDeps = [
  'eslint',
  'typescript-eslint',
  'eslint-plugin-perfectionist',
  '@stylistic/eslint-plugin-js',
  '@stylistic/eslint-plugin-ts',
]

export default () => {
  console.log('Eslint Build started')

  fs.cpSync(
    join('./eslint', 'index.js'),
    join(dist, 'index.js'),
  )

  const json = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

  fs.writeFileSync(`${dist}/package.json`, JSON.stringify({
    name: 'memories-eslint',
    version: json.version,
    module: './index.js',
    type: 'module',
    exports: {
      '.': './index.js',
    },
    dependencies: eslintDeps.reduce((acc, dep) => ({
      [dep]: json.devDependencies[dep],
      ...acc,
    }), {}),
  }))

  console.log('Eslint Build finished')
}
