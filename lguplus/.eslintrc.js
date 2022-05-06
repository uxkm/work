module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-new': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    camelcase: 'off',
    'prefer-const': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'object-shorthand': 'off',
    'no-empty-pattern': 'off',
    'import/namespace': 'off',
  },
};
