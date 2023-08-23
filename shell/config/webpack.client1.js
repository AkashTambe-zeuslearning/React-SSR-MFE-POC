const path = require("path");
const { merge } = require("webpack-merge");
const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/client1/index")],
  output: {
    path: path.resolve(__dirname, "../dist/client1"),
    publicPath: "http://localhost:3003/client1/",
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: "./src/client1/index.html",
    }),
  ],
};

module.exports = merge(shared, webpackConfig);
