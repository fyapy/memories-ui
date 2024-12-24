import './build'
import {$} from 'bun'

await $`npm publish`.cwd('./dist')
