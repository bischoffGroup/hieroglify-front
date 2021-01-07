module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "import/prefer-default-export": "off",
    'generator-star-spacing': 'off',
     'arrow-parens': 'off',
    'one-var': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-erors': 'off',
    camelcase: ['error', { allow: ['^_configure_'] }],
      'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'max-len': ['error', 150, 2, { 'ignoreComments': true, 'ignorePattern': 'ignoreLongStrings' }],
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 5,
          allowFirstLine: false
        }
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb'
  ],

};
