const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const pkg = require("./package.json");

const commitHash = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

const banner = `
${pkg.name} v${pkg.version} (git: ${commitHash})
Author: ${pkg.author}
License: ${pkg.license}
`;

module.exports = {
  entry: "./src/standalone.js",
  output: {
    filename: "hljs-cedar.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [new webpack.BannerPlugin({ banner })],
};
