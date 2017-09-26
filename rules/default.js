module.exports = {
  parser: 'babel-eslint',
  plugins: ['mocha'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    'prefer-arrow-callback': [
      'warn',
      { allowNamedFunctions: true, allowUnboundThis: false },
    ],
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    curly: ['error', 'all'],
    'newline-per-chained-call': 'off',
    'no-return-assign': 'off',
    'import/named': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'mocha/no-exclusive-tests': 'error',
  },
};
