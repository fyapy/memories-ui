import perfectionist from 'eslint-plugin-perfectionist'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import ts from 'typescript-eslint'

export default ts.config(
  {ignores: ['dist/*', 'node_modules/*', 'public/*']},
  ...ts.configs.recommended,
  perfectionist.configs['recommended-line-length'],
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      quotes: ['error', 'single'],
      'object-curly-spacing': 'error',
      'array-bracket-spacing': 'error',
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/quote-props': ['error', 'as-needed'],
      '@stylistic/ts/member-delimiter-style': ['error', {
        multiline: {delimiter: 'none'},
        singleline: {delimiter: 'semi'},
      }],
      '@stylistic/ts/indent': ['error', 2],
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
