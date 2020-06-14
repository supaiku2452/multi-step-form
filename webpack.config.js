const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
