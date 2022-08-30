// @see https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js
// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  env: {
    browser: true,
  },
  rules: {
    // turned off rules
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-multi-comp': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // warnings
    'react/destructuring-assignment': 'warning',

    // errors
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'jsx-a11y/label-has-for': [
      'error',
      { required: { some: ['nesting', 'id'] } },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref'],
      },
    ],
  },
};
