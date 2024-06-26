var x64Fmix = function (h) {
  h = x64Xor(h, [0, h[0] >>> 1])
  h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
  h = x64Xor(h, [0, h[0] >>> 1])
  h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
  h = x64Xor(h, [0, h[0] >>> 1])
  return h
}

export {
  x64Fmix
}
