import reactEslintConfig from '@repo/eslint-config/react.js';

export default [
  ...reactEslintConfig,
  {
    rules: {
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: ['toaster'],
        },
      ],
    },
  },
];
