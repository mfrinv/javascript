module.exports = {
  'env': {
    'node': true,
  },
  'rules': {
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'warn',
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'warn',
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'warn',
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'warn',
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'warn',
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'warn',
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'warn',
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'warn',
  },
}
