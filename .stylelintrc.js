module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"],
      },
    ],
    "selector-max-id": [2],
    "alpha-value-notation": "percentage",
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive"],
      },
    ],
    "selector-class-pattern": "^[a-zA-Z][a-zA-Z0-9-_]*$",
  },
};
