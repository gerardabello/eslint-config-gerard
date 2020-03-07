const jsConfig = require('./index.js')

module.exports = {
  ...jsConfig,
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    ...jsConfig.extends,
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [...jsConfig.plugins, '@typescript-eslint']
}

