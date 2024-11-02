import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import pluginTurbo from 'eslint-plugin-turbo';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default tsEslint.config(
  { ignores: ['*.config.js', 'node_modules', 'dist'] },
  js.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  pluginImport.flatConfigs.react,
  prettierPluginRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'typescript-eslint': tsEslint.plugin,
      turbo: pluginTurbo,
      'simple-import-sort': pluginSimpleImportSort,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      globals: { ...globals.node, ...globals.jest, Express: 'readonly' },
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginTurbo.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
        },
      ],
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'off',
      'typescript-eslint/no-unused-vars': ['error'],
    },
  },
);
