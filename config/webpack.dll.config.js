const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux'
    ]
  },
  output:{
    filename: '[name]_lib.js',
    path: path.resolve(__dirname, '../static/js'),
    library: '[name]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname,'../static/[name]-manifest.json'),
      name: '[name]_lib'
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        warnings: false,
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        }
      }
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
