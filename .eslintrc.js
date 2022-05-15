module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/recommended", "eslint:recommended"],

  parserOptions: {
    parser: "babel-eslint",
  },

  plugins: ["eslint-plugin-prettier", "eslint-plugin-vue"],

  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prefer-const": "error",
    "no-var": "error",
    "no-new-object": "error",
    "object-shorthand": "error",
    "no-array-constructor": "error",
    "array-callback-return": "error",
    "array-element-newline": "error",

    "prefer-destructuring": [
      "error", {
      "array": true,
      "object": true
      }
    ],

    "quotes": ["error", "single"],
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "no-eval": "error",

    "func-style": [
      "error",
      "expression",
      { "allowArrowFunctions": true }
    ],

    "wrap-iife": ["error", "outside"],
    "no-loop-func": "error",
    "prefer-rest-params": "error",
    "no-new-func": "error",
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": "error",
    "no-param-reassign": "error",
    "prefer-spread": "error",
    "function-paren-newline": ["error", { "minItems": 3 }],
    "prefer-arrow-callback": "error",
    "arrow-spacing": "error",
    "arrow-parens": "error",
    "arrow-body-style": ["error", "always"],
    "no-confusing-arrow": "error",
    "no-useless-constructor": "error",
    "no-dupe-class-members": "error",
    "sort-imports": ["error", { "ignoreCase": true }],
    "no-duplicate-imports": ["error", { "includeExports": true }],
    "no-iterator": "error",
    "no-restricted-syntax": ["error", "ForStatement"],
    "generator-star-spacing": ["error", {"before": true, "after": true}],
    "dot-notation": "error",

    "no-restricted-properties": [2, {
      "object": "Math",
      "property": "pow",
      "message": "Use exponentiation operator ** instead!",
    }],

    "one-var": ["error", "never"],
    "no-multi-assign": "error",
    "no-plusplus": "error",
    "operator-linebreak": ["error", "after"],
    "eqeqeq": "error",
    "no-case-declarations": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-mixed-operators": "error",
    "curly": "error",
    "brace-style": "error",
    "no-else-return": "error",
    "spaced-comment": ["error", "always"],
    "indent": ["error", 2],
    "keyword-spacing": ["error", { "before": true }],
    "space-infix-ops": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "padded-blocks": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],

    "max-len": [
      "error",
      { "code": 85, ignorePattern: '^import .*' },
    ],

    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline", { "functions": "never" }],
    "semi": "error",
    "no-new-wrappers": "error",
    "radix": "error",
    "id-length": "error",
    "camelcase": "error",
    "new-cap": "error",
    "no-underscore-dangle": "error",

    "no-restricted-globals": [
      "error",
      {
        "name": "event",
        "message": "Use local parameter instead."
      },
      {
        "name": "fdescribe",
        "message": "Do not commit fdescribe. Use describe instead."
      }
    ],

    "constructor-super": "error",
    "getter-return": "error",
    "no-await-in-loop": "error",
    "no-cond-assign": [ "error", "always" ],
    "no-const-assign": "error",

    "array-bracket-newline": ["error", { "multiline": true }],

    "valid-typeof": "error",
    "use-isnan": "error",
    "no-use-before-define": "error",
    "no-unused-vars": "error",
    // "no-unused-private-class-members": "error",
    // "no-unsafe-optional-chaining": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-finally": "error",
    // "no-unreachable-loop": "error",
    "no-unreachable": "error",
    "no-unmodified-loop-condition": "error",
    "no-unexpected-multiline": "error",
    "no-undef": "error",
    "no-this-before-super": "error",
    "no-template-curly-in-string": "error",
    "no-sparse-arrays": "error",
    "no-setter-return": "error",
    "no-self-compare": "error",
    "no-self-assign": "error",
    "no-prototype-builtins": "error",
    // "no-promise-executor-return": "error",
    "no-obj-calls": "error",
    "no-new-symbol": "error",
    // "no-loss-of-precision": "error",
    "no-invalid-regexp": "error",
    "no-import-assign": "error",
    "no-func-assign": "error",
    "no-fallthrough": "error",
    "no-ex-assign": "error",
    "no-empty-pattern": "error",
    "no-empty-character-class": "error",
    "no-duplicate-case": "error",
    "no-dupe-keys": "error",
    "no-dupe-else-if": "error",
    "no-dupe-args": "error",
    "no-control-regex": "error",
    "no-constructor-return": "error",
    "no-constant-condition": "error",

    "accessor-pairs": "error",
    "capitalized-comments": "error",

    // "id-denylist": [
    //   "error",
    //   [
    //     "data",
    //     "err",
    //     "e",
    //     "cb",
    //     "callback",
    //   ],
    // ],

    "max-classes-per-file": "error",
    "max-depth": ["error", 2],
    "max-lines": "error",
    "max-lines-per-function": ["error", 25],
    "max-nested-callbacks": ["error", 2],
    "max-params": ["error", 3],
    "multiline-comment-style": ["error", "starred-block"],
    "no-alert": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-continue": "error",
    "no-delete-var": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    'no-implied-eval': "error",
    "no-label-var": "error",
    "no-lonely-if": "error",
    "no-magic-numbers": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    "block-spacing": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "dot-location": ["error", "property"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false }],
    "lines-between-class-members": ["error", "always"],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": "error",

    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      },
      {
        blankLine: "always",
        prev: "directive",
        next: "*"
      },
      {
        blankLine: "any",
        prev: "directive",
        next: "directive"
      },
      {
        blankLine: "always",
        prev: ["case", "default"],
        next: "*"
      },
    ],

    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": "error",
    "switch-colon-spacing": "error",
    "wrap-regex": "error",
  },

  overrides: [
    {
      files: ["*.vue"],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
