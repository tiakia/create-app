const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const common = CommonConfig.config,
      Path = CommonConfig.Path,
      publicPath = CommonConfig.publicPath;

const proLoaders = [
  {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
        ]
  },
  {
    test: /\.scss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.less$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'less-loader'
    ]
  }

];

const proPlugins = [
    // 清理打包文件目录
    new CleanPlugin(['build/*.*'],{
        root: Path('../')
    }),
    new UglifyJsPlugin({
        sourceMap: true,
        test: /\.jsx?$/i,
        parallel: true, //使用多进程并行和文件换成提高构建速度
        cache: true,
        uglifyOptions: {
            warnings: false,
            compress: {
                warnings: false,  //删除无用代码时不输出警告
                drop_console: true,  //删除所有console语句，可以兼容IE
                collapse_vars: true,  //内嵌已定义但只使用一次的变量
                reduce_vars: true,  //提取使用多次但没定义的静态值到变量
            },
            output: {
                beautify: false, //最紧凑的输出，不保留空格和制表符
                comments: false, //删除所有注释
            },
            ie8: true
        }
    }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: Path('../static/tpl.html'),
    favicon: Path('../static/images/favicon.ico'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new AddAssetHtmlPlugin([
      {
          filepath: Path('../static/js/vendors_lib.js'),
          includeSourcemap: false
      },
      {
          filepath: Path('../build/*.js'),
          includeSourcemap: true
      },
      {
          filepath: Path('../build/*.css'),
          includeSourcemap: true
      }
  ]),
    /* new webpack.optimize.AggressiveSplittingPlugin({
     *     minSize: 30000,
     *     maxSize: 50000
     * }), */
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require(path.resolve(__dirname, '../static/vendors-manifest.json'))
  })
];

const proConfig = merge(common,{
  devtool: 'source-map',
  entry: {
      index: Path('../src/main.js')
  },
  output: {
    path: Path('../build/'),
    filename: '[name].js',
    publicPath: publicPath
  },
  optimization: {
      namedModules: true,
      runtimeChunk: true,
      splitChunks: {
          cacheGroups: {
              styles: {
                  name: 'styles',
                  test: /\.css$/,
                  chunks: 'all',
                  enforce: true
              }
          }
      },
      //自定义 UglifyJsPlugin
      minimizer: [
          /* new UglifyJsPlugin({
           *     cache: true,
           *     parallel: true,
           *     sourceMap: true // set to true if you want JS source maps
           * }), */
          new OptimizeCSSAssetsPlugin({})
      ]
  },
  recordsOutputPath: path.join(__dirname, "build", "records.json"),
    module: {
        rules: proLoaders
    },
    mode: "production",
    plugins: proPlugins
});

module.exports = proConfig;
