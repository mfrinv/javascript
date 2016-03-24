module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
  },
  'env': {
    'es6': true,
  },
  'rules': {
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['warn', 'as-needed'],
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['warn', {before: true, after: true}],
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['warn', {before: true, after: false}],
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'warn',
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'warn',
    // http://eslint.org/docs/rules/no-var
    'no-var': 'warn',
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'warn',
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'warn',
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 'warn',
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'warn',
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'warn',
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'warn',
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ['warn', 'never'],
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['warn', {before: true, after: false}],
  },
}
