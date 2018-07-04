'use strict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/../dist/assets'),
    publicPath: '/assets/'
  },
  entry: {
    path: path.join(__dirname, '../src/index'),
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    // new ExtractTextPlugin('[name].css'),
    new CleanWebpackPlugin(['dist/*.js'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      sdry: false
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true//折叠空白区域 也就是压缩代码
      },          
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths, [path.join(__dirname, '/../src')]
  )
});

module.exports = config;
