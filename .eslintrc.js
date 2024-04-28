module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-commonjs': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['warn', 'unix'],
    'no-case-declarations': 'warn',
    'no-extra-semi': 'warn',
    'no-redeclare': 'warn',
    'prefer-const': 'warn',
    quotes: ['off', 'single'],
    semi: ['off', 'always'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', ''],
      },
    },
  },
};
