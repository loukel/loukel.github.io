const headingEl = document.getElementById('heading')
const hexCodes = ['#1c8bc1', '#ddd417', '#760a0a', '#5e2a0e']

setInterval(() => {
  headingEl.style.color = hexCodes[Math.floor(Math.random() * hexCodes.length)]
}, 10)