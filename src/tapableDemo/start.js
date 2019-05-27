/**
 * @author xiajing
 * @date 2019/5/27 14:35
 */

const { SyncHook } = require('tapable')

class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncHook(['name'])
    }
  }
  tap() { //注册监听函数
    this.hooks.arch.tap('node', function (name) {
      console.log('node', name)
    });
    this.hooks.arch.tap('react', function (name) {
      console.log('react', name)
    })
  }
  start() {
    this.hooks.arch.call('xj')
  }
}

const lesson = new Lesson()
lesson.tap()
lesson.start()
