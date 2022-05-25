module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': 'error',
  },
};
