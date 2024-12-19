import perfectionist from 'eslint-plugin-perfectionist'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylisticJs from '@stylistic/eslint-plugin-js'
import ts from 'typescript-eslint'

export default ts.config(
  ...ts.configs.recommended,
  perfectionist.configs['recommended-line-length'],
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      'react-refresh': reactRefresh,
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
      'react-refresh/only-export-components': ['error'],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-imports': ['error', {
        internalPattern: ['pages/*', 'stores/*', 'ui/*', 'utils/*', 'styles', 'router'],
        newlinesBetween: 'never',
        type: 'line-length',
        order: 'desc',
      }],
    },
  },
)
