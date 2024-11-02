import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginImport from 'eslint-plugin-import';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginRouter from '@tanstack/eslint-plugin-router';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import pluginTurbo from 'eslint-plugin-turbo';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default tsEslint.config(
  { ignores: ['*.config.js', 'node_modules', 'dist'] },
  js.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  pluginImport.flatConfigs.react,
  ...pluginRouter.configs['flat/recommended'],
  ...pluginTailwind.configs['flat/recommended'],
  prettierPluginRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: pluginReact,
      'typescript-eslint': tsEslint.plugin,
      'react-refresh': pluginReactRefresh,
      'react-hooks': pluginReactHooks,
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
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginTurbo.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
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
