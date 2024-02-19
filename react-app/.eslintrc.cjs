module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-hooks', 'react', 'import-helpers'],
  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'], offsetTernaryExpressions: true },
    ],
    'import-helpers/order-imports': [
      "error",
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/prop-types/',
          '/^src/',
          '/^[./]/',
          '/styles/'
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'newline-before-return': 'error',
    'max-len': ['error', {
      code: 110,
      ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
      ignoreUrls: true
    }],
    'function-call-argument-newline': ['error', 'consistent'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'operator-linebreak': ['error', 'before'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'no-console': 'warn',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'const' },
      { blankLine: 'always', prev: 'block-like', next: 'let' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'block-like', next: 'function' },
      { blankLine: 'always', prev: 'block-like', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
};
