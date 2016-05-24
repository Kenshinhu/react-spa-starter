var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


var ExtractTextPlugin = require("extract-text-webpack-plugin");


var path = require('path');
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://127.0.0.1:8080',
    './app/js/app.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: "./build"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      {test: /\.less$/,loader: "style!css!less"}
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js'),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   __DEBUG__: true
    // })
    // new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' })
  ]
};
