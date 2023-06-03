module.exports = {
  root: true,
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
  ],
  rules: {
    // Additional ESLint rules to fix warnings
    'no-console': 'warn', // Warns about console.log statements
    'jsx-a11y/alt-text': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-anonymous-default-export': 'error',
  },
};
