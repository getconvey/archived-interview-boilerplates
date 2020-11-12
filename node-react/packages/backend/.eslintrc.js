module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    "prettier/prettier": "error",
  },
};
