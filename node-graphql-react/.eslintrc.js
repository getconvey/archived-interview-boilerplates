module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    eqeqeq: ['error', 'always'],
  },
};
