module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@liip-lausanne',
    'plugin:prettier/recommended',
  ],
}
