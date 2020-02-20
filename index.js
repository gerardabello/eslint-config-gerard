module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['filenames', 'react', 'import', 'react-hooks'],
  settings: {
    react: {
      version: '16'
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  globals: { fixture: true, FS: true },
  rules: {
    'filenames/match-regex': ['warn', '^_?[a-z0-9-.]+$'],

    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/export': 'error',
    'import/default': 'error',
    'import/no-unused-modules': 'warn',

    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-key': 'error',

    eqeqeq: 'error',
    'no-return-await': 'error',
    curly: 'error',
    'no-shadow': 'error',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  }
}

