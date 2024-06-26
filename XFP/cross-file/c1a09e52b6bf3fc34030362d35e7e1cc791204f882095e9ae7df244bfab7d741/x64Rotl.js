const x64Rotl = function (m, n) {
  n %= 64
  if (n === 32) {
    return [m[1], m[0]]
  } else if (n < 32) {
    return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
  } else {
    n -= 32
    return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
  }
}

export {
  x64Rotl
}
