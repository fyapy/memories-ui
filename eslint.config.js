import perfectionist from 'eslint-plugin-perfectionist'
import reactRefresh from 'eslint-plugin-react-refresh'
import ts from 'typescript-eslint'

export default ts.config(
  ...ts.configs.recommended,
  perfectionist.configs['recommended-line-length'],
  {
    plugins: {'react-refresh': reactRefresh},
    ignores: ['dist'],
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'object-curly-spacing': 'error',
      'array-bracket-spacing': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
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
