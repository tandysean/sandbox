  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js',
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'button.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    module: {
       rules: [{
           test: /\.scss$/,
           use: [
               "style-loader", // creates style nodes from JS strings
               "css-loader", // translates CSS into CommonJS
               "sass-loader" // compiles Sass to CSS
           ]
       }]
   },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ]
  };
