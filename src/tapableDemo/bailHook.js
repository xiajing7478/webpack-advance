class SyncBailHook {
  constructor(arg) {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    // this.tasks.forEach((task) => task(...args))
    let ret; // 当前方法的返回值
    let index =0;
    do {
      ret = this.tasks[index++](...args)
    }while (ret === undefined && index < this.tasks.length)
  }
}

let sl = new SyncBailHook(['name'])
sl.tap('react', function (name) {
  console.log('react', name)
  return 'stop'
})
sl.tap('node', function (name) {
  console.log('node', name)
})
sl.tap('vue', function (name) {
  console.log('vue', name)
})
sl.call(['qs', 'xj'])
