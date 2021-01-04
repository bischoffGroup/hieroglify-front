module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended",
    "@vue/prettier"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/max-len": ["error", {
      "code": 150,
      "template": 80,
      "tabWidth": 2,
      "comments": 80,
      "ignorePattern": "",
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": false,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false,
      "ignoreRegExpLiterals": false,
      "ignoreHTMLAttributeValues": false,
      "ignoreHTMLTextContents": false,
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
