var loseWebglContext = function (context) {
  var loseContextExtension = context.getExtension('WEBGL_lose_context')
  if (loseContextExtension != null) {
    loseContextExtension.loseContext()
  }
}

export {
  loseWebglContext
}
