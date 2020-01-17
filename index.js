module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/recommended',
    'prettier/react',
    'prettier-standard'
  ],
  plugins: ['filenames', 'react', 'prettier', 'react-perf', 'react-hooks'],
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
    'prettier/prettier': 'error',
    'react-perf/jsx-no-new-object-as-prop': 'warn',
    'react-perf/jsx-no-new-array-as-prop': 'warn',
    'react-perf/jsx-no-new-function-as-prop': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    "react/no-unsafe": 'warn',
    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-no-bind': 0,
    'react/jsx-handler-names': 'warn',
    'curly': 'error',
    'no-shadow': 'warn',
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
