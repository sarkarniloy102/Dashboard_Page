module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    rule: 'prettier/prettier',
    'prettier/prettier': 'error',
    'node/no-unpublished-require': 0,
  },
};
