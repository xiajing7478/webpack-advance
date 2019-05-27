/**
 * @author xiajing
 * @date 2019/5/27 14:48
 */
class SyncHook {
  constructor(arg) {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    this.tasks.forEach((task) => task(...args))
  }
}

let sl = new SyncHook(['name'])
sl.tap('react', function (name) {
  console.log('react', name)
})
sl.tap('node', function (name) {
  console.log('node', name)
})
sl.tap('vue', function (name) {
  console.log('vue', name)
})
sl.call(['qs', 'xj'])
