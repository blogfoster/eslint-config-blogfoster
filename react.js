module.exports = {
  extends: [
    'eslint-config-airbnb',
    require.resolve('./rules/default'),
    require.resolve('./rules/react'),
  ],
  rules: {},
};
