module.exports = {
  'rules': {
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['warn', 'never'],
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['warn', 'always'],
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'warn',
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'warn',
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['warn', 'last'],
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['warn', 'never'],
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': ['warn', 'self'],
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 'warn',
    // http://eslint.org/docs/rules/func-names
    'func-names': 'error',
    // http://eslint.org/docs/rules/func-style
    'func-style': 'off',
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',
    // http://eslint.org/docs/rules/indent
    'indent': ['warn', 2],
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': 'warn',
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'warn',
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'warn',
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['warn', 4],
    // http://eslint.org/docs/rules/max-len
    'max-len': ['warn', 80, 2],
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['warn', 4],
    // http://eslint.org/docs/rules/max-params
    'max-params': 'off',
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 'off',
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 'error',
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': ['warn', 'always'],
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'warn',
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['warn', { 'ignoreChaintWithDepth': 4 }],
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'warn',
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'warn',
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'warn',
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'warn',
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 'warn',
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'warn',
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'warn',
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',
    // http://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'warn',
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'warn',
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'warn',
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn',
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['warn', 'never'],
    // http://eslint.org/docs/rules/one-var
    'one-var': 'off',
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['warn', 'always'],
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['warn', 'always'],
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['warn', 'after'],
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['warn', 'never'],
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['warn', 'as-needed'],
    // http://eslint.org/docs/rules/quotes
    'quotes': ['warn', 'single', 'avoid-escape'],
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',
    // http://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['warn', {before: true, after: false}],
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ['warn', 'always'],
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['warn', 'never'],
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['warn', 'never'],
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'warn',
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['warn', {words: true, nonwords: false}],
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['warn', 'always'],
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'warn',
  },
}
