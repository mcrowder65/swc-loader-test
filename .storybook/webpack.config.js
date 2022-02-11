module.exports = ({ config }) => {
  // Remove eslint-loader
  config.module.rules = config.module.rules.filter((rule) => {
    if (rule.use) {
      return rule.use.find(({ loader }) => {
        return !loader.includes("eslint-loader")
      })
    } else {
      return true
    }
  })
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [
        "@babel/preset-react",
        "@babel/preset-env",
        // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
        // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
        require.resolve("@emotion/babel-preset-css-prop"),
      ],
      plugins: ["babel-plugin-emotion"],
    },
  })
  return config
}
