/**  需要 细配置
 *   image,font,css的 style-loader
 *   babel-ployfill 的作用 ?
 transform-runtime 只会对es6的语法进行转换，而不会对新api(Set、Maps等)进行转换。
 如果需要转换新api，就要引入babel-polyfill

 *   为什么需要引入 babel-runtime ?
 babel-polyfill 通过帮助函数(helper) 实现es6功能后，会重复出现在一些模块里，导致编译后的代码体积变大。Babel 为了解决这个问题，提供了单独的包 babel-runtime 供编译模块复用工具函数。这时候就需要使用 transform-runtime：启用 babel-runtime，以避免编译输出的重复问题
*/

const webpack = require('webpack');
const path = require('path');
const AppPort = require('./port.js').port;

const Path = (filePath) => path.join(path.resolve(__dirname,filePath));

const publicPath = '/';

const webpackLoaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use:['babel-loader', 'eslint-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg|webp)$/,
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    loader: 'url-loader',
    query: {
      limit: 20480
    }
  }
];

const webpackPlugins = [
  new webpack.BannerPlugin({
    banner: 'author: tiankai,file:[file],name:[name]',
    entryOnly: false
  })
];

const config = {
  resolve: {
    alias: {
        static: Path('../static'),
        src: Path('../src'),
        assets: Path('../src/assets'),
        utils: Path('../src/utils')
    }
  },
  module: {
    rules: webpackLoaders
  },
  plugins: webpackPlugins
};

module.exports = {
  config,
  Path,
  publicPath
};
