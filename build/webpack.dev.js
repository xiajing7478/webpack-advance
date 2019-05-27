/**
 * @author xiajing
 * @date 2019/5/26 16:37
 */
const { smart } = require('webpack-merge')
const base = require('./webpack.base')
module.exports = smart(base, {
  mode: 'development',
})
