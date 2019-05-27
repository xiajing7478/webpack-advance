/**
 * @author xiajing
 * @date 2019/5/26 16:36
 */
const { smart } = require('webpack-merge')
const base = require('./webpack.base')

console.log(smart(base, {
  mode: 'production',
}))
