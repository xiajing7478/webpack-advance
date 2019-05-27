var btn = document.createElement('button')
btn.innerText = '按钮'

btn.addEventListener('click', function () {
  import('./soucre.js').then(data => {
    console.log('data', data.default.name)
  })
  // console.log('btn click ..........')
})

document.body.appendChild(btn)
