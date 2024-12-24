import perfectionist from 'eslint-plugin-perfectionist'
import stylisticJs from '@stylistic/eslint-plugin-js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import ts from 'typescript-eslint'

export default ts.config(
  ...ts.configs.recommended,
  // vue start
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        sourceType: 'module',
        parser: {ts: ts.parser},
      },
    },
  },
  {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
  // vue end
  perfectionist.configs['recommended-line-length'],
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    ignores: ['dist'],
    rules: {
      'quotes': ['error', 'single'],
      'object-curly-spacing': 'error',
      'array-bracket-spacing': 'error',
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', {
        fixStyle: 'separate-type-imports',
      }],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-imports': ['error', {
        internalPattern: [],
        newlinesBetween: 'never',
        type: 'line-length',
        order: 'desc',
      }],
    },
  },
)
