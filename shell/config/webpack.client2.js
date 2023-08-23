const path = require("path");
const { merge } = require("webpack-merge");
const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: "client",
  target: "web",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/client2/index")],
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/client2"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "http://localhost:3003/client2/",
  },
  plugins: [moduleFederationPlugin.client],
};
module.exports = merge(shared, webpackConfig);
