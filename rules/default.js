module.exports = {
  parser: 'babel-eslint',
  plugins: ['mocha'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    // turned off rules
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',

    // warnings
    'prefer-arrow-callback': [
      'warn',
      { allowNamedFunctions: true, allowUnboundThis: false },
    ],

    // errors
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'mocha/no-exclusive-tests': 'error',
    'no-console': 'error',
    'import/named': 'error',
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
  },
};
