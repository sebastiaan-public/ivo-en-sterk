module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    // '@vue/prettier',
    // 'plugin:prettier/recommended',
    '@vue/typescript'
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    // ! plugin does not yet support pug templates -> (Aug-8 '19)
    // 'vuetify/no-deprecated-classes': 'error',
    // 'vuetify/grid-unknown-attributes': 'error',
    // 'vuetify/no-legacy-grid': 'error',

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-constant-condition': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'comma-dangle': ['warn', 'never']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
