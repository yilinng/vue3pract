module.exports = {
  'extends': [
    "@vue/typescript",
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser", // <-
    ecmaVersion: 2020, // <-
    sourceType: 'module'
  }
}
