/**
 * @author xiajing
 * @date 2019/5/26 16:37
 */
// const { smart } = require('webpack-merge')
// const base = require('./webpack.base')
// module.exports = smart(base, {
//   mode: 'development',
// })

const base = require('./webpack.base.js')
const config = require('../config')
const webpack = require('webpack')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssExtractPlugin = require('mini-css-extract-plugin') // css提取
const merge = require('webpack-merge')
const path = require('path')
const getPath = (dir) => path.join(__dirname, '..', dir)
module.exports = merge(base, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    port: 9999,
    contentBase: config.dev.contentBase,
    hot: true,
    historyApiFallback: config.dev.historyApiFallback,
    compress: true,
    open: config.dev.autoOpenBrowser,
    progress: !config.dev.progress
  },
  module: {
    rules: [...utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true})]
      // {
      //   test: /\.css$/,
      //   // use: [CssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      //   use: ['style-loader', 'css-loader', 'postcss-loader']
      // },
      // {
      //   test: /\.less/,
      //   // use: [CssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
      //   use: ['style-loader', 'css-loader', 'postcss-loader']
      // },
      // {
      //   test: /\.scss$/,
      //   // use: [CssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      //   use: ['style-loader', 'css-loader', 'postcss-loader']
      // },
  },
  plugins: [
    new CssExtractPlugin({
      filename: 'main.[hash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: getPath('index.html'),
      filename: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin(
      [
        {
          from: getPath('static'),
          to: config.dev.assetsSubDirectory,
          ignore: ['.*']
        }
      ]
    )
  ]
})
