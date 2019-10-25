const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets','js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}