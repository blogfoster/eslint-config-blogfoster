module.exports = {
  extends: [
    'eslint-config-airbnb',
    require.resolve('./rules/default'),
    require.resolve('./rules/react'),
    'prettier',
    'prettier/react',
  ],
  rules: {},
};
