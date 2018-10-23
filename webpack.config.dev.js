import webpack from 'webpack';
import path from 'path';

const HtmlWebPackPlugin = require("html-webpack-plugin");

export default {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.html$/,use: [ { loader: "html-loader" } ] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};