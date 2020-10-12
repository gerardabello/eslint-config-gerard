module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'filenames',
    'react',
    'react-hooks',
    'import',
  ],
  settings: {
    react: {
      version: '16'
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json"
    ]
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: { fixture: true, FS: true },
  rules: {
    'filenames/match-regex': ['warn', '^_?[a-z0-9-.]+$'],

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          'index',
          'sibling',
          'parent',
          'internal',
          'object',
        ],
      },
    ],

    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    'react/display-name': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-key': 'error',

    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',

    eqeqeq: ["error", "always", {"null": "ignore"}],
    'consistent-return': 'warn',
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
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}


