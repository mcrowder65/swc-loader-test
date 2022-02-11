const {
  override,
  addBabelPlugin,
  addBundleVisualizer,
  addBabelPreset,
} = require("customize-cra")

let config = override(
  (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      return plugin.key !== "ESLintWebpackPlugin"
    })
    // Adds human readable names to chunks
    config.optimization.chunkIds = "named"
    config.module.rules[1].oneOf = config.module.rules[1].oneOf.filter(
      (loader) => {
        if (!loader.loader) {
          return true
        }

        if (loader.loader.includes("babel-loader")) {
          return false
        }
        return true
      },
    )
    config.module.rules[1].oneOf.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        // Use `.swcrc` to configure swc
        loader: "swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
            },
            transform: {
              react: {
                pragma: "React.createElement",
                pragmaFrag: "React.Fragment",
                throwIfNamespace: true,
                development: false,
                useBuiltins: false,
              },
            },
          },
        },
      },
    })
    return config
  },
  // addBabelPlugin("@emotion/babel-plugin"),
  // addBabelPreset("@emotion/babel-preset-css-prop"),
  // process.env.ANALYZE && addBundleVisualizer(),
)

/*eslint-disable no-param-reassign */
if (process.env.NODE_ENV === "test") {
  config = {
    babelrc: true,
    jest: (config) => {
      config.setupFilesAfterEnv = ["<rootDir>/test/setup-tests.js"]
      config.modulePaths = ["."]

      return config
    },
  }
}

module.exports = config
