const x64LeftShift = function (m, n) {
  n %= 64
  if (n === 0) {
    return m
  } else if (n < 32) {
    return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
  } else {
    return [m[1] << (n - 32), 0]
  }
}

export {
  x64LeftShift
}
