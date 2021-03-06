const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: './src/index.js',
      print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      port: 6656
  },
  mode: 'development',
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Development'
      })
  ],
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.csv$/i,
              use: ['csv-loader']
          }
      ]
  }
};
