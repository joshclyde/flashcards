/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  ignorePatterns: ["functions"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  rules: {
    "vue/script-setup-uses-vars": "error",
    "vue/attributes-order": "error",
    "vue/component-tags-order": [
      "error",
      { order: ["script", "template", "style"] },
    ],
    "vue/no-v-html": "error",
    "vue/order-in-components": "error",
    "vue/block-lang": ["error", { script: { lang: "ts" } }],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
  },
};
