require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  globals: {
    vi: "readonly",
    __APP_VERSION__: "readonly",
    afterEach: "readonly",
    afterAll: "readonly",
    beforeEach: "readonly",
    beforeAll: "readonly",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-multi-spaces": "error",
    semi: "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "eol-last": ["error", "always"],
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off",
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-typescript"
  ],

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
        "**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
