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
    // -> we don't want warnings

    // errors
    'no-alert': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: false },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { object: false, array: false },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/named': 'error',
    'mocha/no-exclusive-tests': 'error',
  },
};
