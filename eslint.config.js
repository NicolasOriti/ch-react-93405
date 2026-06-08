import { defineConfig, globalIgnores } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import js from '@eslint/js'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Librerías externas (react, react-dom, etc.)
            ['^react', '^\\w', '^@\\w'],
            // 2. Archivos locales (rutas relativas ./  o ../)
            ['^\\.\\./', '^\\./', '^\\./'],
            // 3. Estilos y assets (.css, .scss, imágenes)
            ['^.+\\.s?css$', '^.+\\.(png|jpg|svg|gif|webp)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
])
