const webpack = require("webpack");
const commonPaths = require("./paths");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              // modules: true,
              // camelCase: true,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: commonPaths.envPath, // load this now instead of the ones in '.env'
      silent: false, // hide any errors
      systemvars: true,
    }),
  ],
  // * This is down here cuz of dotenv
  node: {
    fs: "empty",
  },
};
