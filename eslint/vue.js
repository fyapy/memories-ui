import pluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import configs from './index.js'

export default ts.config(
  ...configs,
  {
    extends: pluginVue.configs['flat/recommended'],
    languageOptions: {
      parserOptions: {parser: {ts: ts.parser}},
    },
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
)
