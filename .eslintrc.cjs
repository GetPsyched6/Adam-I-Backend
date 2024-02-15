module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'import/extensions': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        endOfLine: 'lf',
        arrowParens: 'avoid',
      },
    ],
  },
  settings: {
    // Node.js specific settings if needed
  },
  plugins: ['@typescript-eslint', 'prettier'],
};
