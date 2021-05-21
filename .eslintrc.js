const prettier = require('./.prettierrc.js');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
    es6: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    ],
    'prettier/prettier': ['error', prettier],
    'no-irregular-whitespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'no-continue': 'off',
    camelcase: 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
        exceptions: [],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
    'no-unused-vars': 'warn',
    'no-tabs': 'error',
    'max-lines': 'warn',
    'symbol-description': 'off',
    'class-methods-use-this': 'off',
    'react/no-typos': 'off',
    'no-underscore-dangle': 'off',
    radix: 'off',
    'no-restricted-globals': 'off',
    'global-require': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'state',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'rendering',
          'methods',
          'events',
          '/^set.+Ref$/',
        ],
      },
    ],
  },
};
