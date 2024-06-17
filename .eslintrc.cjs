module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: [
    "react",
    'react-refresh',
    "@typescript-eslint"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": [
      "error",
      "never"
  ],
  "react/react-in-jsx-scope": "off",
  "react/jsx-uses-react": "off",
  "no-spaced-func": 2,
  "jsx-quotes": [2, "prefer-double"],
  "no-trailing-spaces": 1,
  "no-use-before-define": 'off',
  "no-multiple-empty-lines": [2, {
      "max": 2
    }],
  "no-mixed-spaces-and-tabs": [
  "error", "smart-tabs"
  ],
  "space-before-blocks": [2, "always"],
  "template-curly-spacing": 1,
  "react/jsx-equals-spacing": 2,
  "no-undef-init": 2,
  "react/jsx-indent": [2, 4],
  "@typescript-eslint/no-var-requires": 0,
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-unnecessary-type-constraint": "off",
  "@typescript-eslint/no-explicit-any": "off",
  },
}
