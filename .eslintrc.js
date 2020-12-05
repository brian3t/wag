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
    "object-curly-spacing": 0,
    "object-curly-newline": 0,
    "comma-spacing": 0,
    "comma-dangle": 0,
    "no-console": "off",
    "arrow-body-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "max-len": "off",
    "react/jsx-filename-extension": "off"
  },
};
