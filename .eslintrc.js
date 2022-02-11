module.exports = {
  extends: ["mcrowder65"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: [],
  settings: {
    "import/resolver": {
      node: {
        paths: ".",
      },
    },
  },
  rules: {},
}
