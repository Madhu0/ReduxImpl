const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'test/test.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /^.*js$/, use: 'babel-loader' }
    ]
  }
}