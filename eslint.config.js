import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import perfectionist from 'eslint-plugin-perfectionist'
import reactRefresh from 'eslint-plugin-react-refresh'
import {fixupPluginRules} from '@eslint/compat'
import ts from 'typescript-eslint'

export default ts.config(
  ...ts.configs.recommended,
  perfectionistLineLength,
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': reactRefresh,
      perfectionist,
    },
    ignores: ['dist'],
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
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
      'perfectionist/sort-imports': ['error', {
        ...perfectionistLineLength.rules['perfectionist/sort-imports'][1],
        'internal-pattern': ['pages/*', 'stores/*', 'ui/**', 'utils/*', 'styles', 'router'],
        'newlines-between': 'never',
      }],
    },
  },
)
