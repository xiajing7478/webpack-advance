/**
 * @author xiajing
 * @date 2019/5/23 17:11
 */
require('./css/index.css')
require('./less/index.less')
require('./sass/index.scss')
import './classA.js'
import './classB.js'
import './includeDemo.js'
import './decoratorDemo.js'
import '@/alias/alias'
// import './env.js'
import './time.js'
import './react.js'
import './dynamicImport/btn.js'

/**
 * import 在生产环境下, 会自动去掉没用的代码
 * tree-shaking 把没用用到的代码， 自动删除掉
 * const cal = require('./caluate')
 * 如果用es6模块， 会把结果放到default上
 * 并且不会tree-shaking
 *
 */
import cal from './caluate'
// // const cal = require('./caluate')
// // console.log('webpack........................')
//
// import $ from 'jquery'
// console.log($)
// console.log(window.$) // undefined
//
let fn = () => {
  console.log('fn........')
}

fn()

console.log(cal.sumtest(1, 2))
//
// // scope hosting 作用域提升
// let a = 1
// let aa = 2
// let aaa = 3
// let aaaa = a + aa + aaa // 在webpack中自动省略，可以简化代码
// console.log(aaaa, '----------------------')
//
//
if (module.hot) {
  module.hot.accept('./classA', () => {
    // console.log('hot.............')
    let str = require('./classA')
    console.log(str)
  })
}
