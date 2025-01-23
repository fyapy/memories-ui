import './prod'
import {$} from 'bun'

await $`bun test`
await $`bun lint`
await $`bun types`

await $`npm publish`.cwd('./dist/memories-eslint')
await $`npm publish`.cwd('./dist/memories-ui')
