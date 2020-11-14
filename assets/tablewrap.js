var elements = document.querySelectorAll('table')

elements.forEach(element => {
  var wrap = document.createElement('div')
  wrap.className = "table-wrap"
  element.parentNode.insertBefore(wrap, element)
  wrap.appendChild(element)
})
