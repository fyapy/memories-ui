import fs from 'node:fs'
import buildEslint from './eslint'
import buildUI from './ui'

if (fs.existsSync('./dist')) {
  fs.rmdirSync('./dist', {recursive: true})
}

buildUI()
buildEslint()
