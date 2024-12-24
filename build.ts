import fs from 'node:fs'

console.log('Build started')

if (fs.existsSync('./dist')) {
  fs.unlinkSync('./dist')
}

fs.cpSync('./src', './dist', {recursive: true})
fs.cpSync('./package.json', './dist/package.json')

console.log('Build finished')
