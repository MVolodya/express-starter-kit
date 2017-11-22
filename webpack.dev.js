const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  watch: true,

  watchOptions: {
    aggregateTimeout: 300
  },

  devtool: "inline-cheap-module-source-map"
});
