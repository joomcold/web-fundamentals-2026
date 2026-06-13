import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import html from '@html-eslint/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
      'no-console': 'warn',
    },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.html'],
    plugins: { '@html-eslint': html },
    language: '@html-eslint/html',
    rules: {
      ...html.configs['flat/recommended'].rules,
    },
  },
])