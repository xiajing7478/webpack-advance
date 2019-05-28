var btn = document.createElement('button')
btn.innerText = '按钮'

btn.addEventListener('click', function () {
  // import('./soucre.js').then(data => {
  //   console.log('data', data.default.name)
  // })
  let result = require('./soucre')
  console.log('result', result.default.name)
})

document.body.appendChild(btn)
