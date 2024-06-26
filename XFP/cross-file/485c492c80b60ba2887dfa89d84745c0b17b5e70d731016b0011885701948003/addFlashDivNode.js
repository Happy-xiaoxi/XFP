var addFlashDivNode = function (options) {
  var node = document.createElement('div')
  node.setAttribute('id', options.fonts.swfContainerId)
  document.body.appendChild(node)
}

export {
  addFlashDivNode
}
