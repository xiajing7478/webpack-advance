/**
 * @author xiajing
 * @date 2019/5/26 16:36
 */
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const config = require('../config')
const webpack = require('webpack')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssExtractPlugin = require('mini-css-extract-plugin') // css提取
const CleanWebpackPlugin = require('clean-webpack-plugin')
const getPath = (dir) => path.join(__dirname, '..', dir)
module.exports = (merge(base, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: config.prod.productionSourceMap,
      extract: true, usePostCSS: true })
  },
  // devtool: config.prod.devtool,
  output: {
    path: config.prod.assetRoot,
    filename: 'js/[name].[hash:8].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: { // 抽离第三方插件
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minSize: 0
        }
      }
    }
  },
  plugins:[
    new CssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: getPath('index.html'),
      filename: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin(
      [
        {
          from: utils.getPath('static'),
          to: config.prod.assetsSubDirectory,
          ignore: ['.*']
        }
      ]
    ),
    new CleanWebpackPlugin()
  ]
}))
