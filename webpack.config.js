const path = require('path')

module.exports = {
  entry: ['./src/app/index.js'],
  output: 'bundle.js',
  path: path.resolve(__dirname, 'assets','js')
}