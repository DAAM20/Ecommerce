import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * Configuración Global de ESLint para el Proyecto
 * 
 * Define las reglas de calidad de código, análisis estático y buenas prácticas
 * para los archivos JavaScript y React (JSX) en el entorno de desarrollo.
 */

export default defineConfig([
  // Excluye la carpeta de compilación final del análisis estático
  globalIgnores(['dist']),
  {
    // Aplica las reglas exclusivamente a archivos con extensión .js y .jsx
    files: ['**/*.{js,jsx}'],
    // Extensiones de configuraciones recomendadas por la comunidad y herramientas
    extends: [
      js.configs.recommended,               // Reglas recomendadas básicas de JavaScript
      reactHooks.configs.flat.recommended,  // Buenas prácticas para React Hooks
      reactRefresh.configs.vite,            // Reglas específicas para Fast Refresh con Vite
    ],
    // Configuración del entorno de ejecución y análisis del lenguaje
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Habilita variables globales del navegador (window, document, etc.)
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Permite el análisis de la sintaxis JSX de React
        sourceType: 'module',        // Habilita el uso de módulos de ECMAScript (import/export)
      },
    },
    // Personalización de reglas específicas de calidad de código
    rules: {
      /**
       * Controla las variables declaradas que no se utilizan.
       * Configurada en 'error', pero ignora aquellas variables cuyo nombre 
       * comience con mayúscula o guion bajo (útil para ciertos componentes o importaciones).
       */
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
