const path = require("path");

module.exports = {
  target: "node",
  entry: {
    index: "./src/index.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              require("babel-plugin-transform-object-rest-spread"),
              "@babel/transform-runtime"
            ]
          }
        }
      }
    ]
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
