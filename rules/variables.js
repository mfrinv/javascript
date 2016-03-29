module.exports = {
  'rules': {
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations': ['error', 'always'],
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'warn',
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error', { 'hoist': 'functions' }],
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'error',
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'warn',
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'warn',
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['warn', 'nofunc'],
  },
}
