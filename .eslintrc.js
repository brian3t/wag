module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": 0,
    "quotes": 0,
    "spaced-comment": 0,
    "object-curly-spacing": 0,
    "object-curly-newline": 0,
    "comma-spacing": 0,
    "comma-dangle": 0,
    "key-spacing": 0,
    "space-before-blocks": 0,
    "prefer-arrow-callback": 0,
    "indent": 0,
    "function-paren-newline": 0,
    "no-trailing-space": 0,
    "no-console": "off",
    "arrow-body-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "max-len": "off",
    //react
    "react/jsx-curly-brace-presence": 0,

    "react/jsx-filename-extension": "off",
    //12/05 BN added
    "react/jsx-curly-newline": 0,
    "react/jsx-closing-tag-location": 0,
    "react/state-in-constructor": 0,
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 0,
    "react/no-array-index-key": 0,
  },
};
