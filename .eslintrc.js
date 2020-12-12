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
      modules: true,
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
    "no-trailing-spaces": 0,
    "no-multiple-empty-lines": 0,
    "camelcase": 0,
    "space-unary-ops": 0,
    "arrow-parens" : 0,
    "eol-last": 0,
    "padded-blocks": 0,
    "object-shorthand": 0,
    "unamed-method": 0,
    "no-nested-ternary": 0,
    "space-before-blocks": 0,
    "prefer-arrow-callback": 0,
    "indent": 0,
    "lines-between-class-members": 0,
    "no-unexpected-multiline": 0,
    "no-sequences": 0,
    "function-paren-newline": 0,
    "no-trailing-space": 0,
    "class-methods-use-this" :"warn",
    "no-console": "off",
    "arrow-body-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": 0,
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "max-len": "off",
    //react
    "react/jsx-curly-brace-presence": 0,

    "react/jsx-filename-extension": "off",
    //12/05 BN added
    "react/sort-comp": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-no-bind": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "react/no-this-in-sfc": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-max-props-per-line": 0,
    "react/self-closing-comp": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-tag-location": 0,
    "react/state-in-constructor": 0,
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 0,
    "react/no-array-index-key": 0,
  },
};
