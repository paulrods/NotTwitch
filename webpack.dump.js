const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    // compress: true,
    port: 3000,
    hot: true,
  },
  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // {
      //   // Preprocess 3rd party .css files located in node_modules
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(eot|otf|ttf|woff|woff2)$/,
      //   use: "file-loader",
      // },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "svg-url-loader",
      //       options: {
      //         // Inline files smaller than 10 kB
      //         limit: 10 * 1024,
      //         noquotes: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         // Inline files smaller than 10 kB
      //         limit: 10 * 1024,
      //       },
      //     },
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         mozjpeg: {
      //           enabled: false,
      //           // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         optipng: {
      //           optimizationLevel: 9,
      //         },
      //         pngquant: {
      //           quality: "90-100",
      //           speed: 4,
      //         },
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.html$/,
      //   use: "html-loader",
      // },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new HtmlWebpackPlugin({
    //   // inject: true,
    //   template: "src/index.html",
    // }),
  ],
};
