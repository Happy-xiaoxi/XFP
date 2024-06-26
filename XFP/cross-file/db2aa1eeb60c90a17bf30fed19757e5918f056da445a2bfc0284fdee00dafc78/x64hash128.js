var x64hash128 = function (key, seed) {
  key = key || ''
  seed = seed || 0
  var remainder = key.length % 16
  var bytes = key.length - remainder
  var h1 = [0, seed]
  var h2 = [0, seed]
  var k1 = [0, 0]
  var k2 = [0, 0]
  var c1 = [0x87c37b91, 0x114253d5]
  var c2 = [0x4cf5ad43, 0x2745937f]
  for (var i = 0; i < bytes; i = i + 16) {
    k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
    k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
    k1 = x64Multiply(k1, c1)
    k1 = x64Rotl(k1, 31)
    k1 = x64Multiply(k1, c2)
    h1 = x64Xor(h1, k1)
    h1 = x64Rotl(h1, 27)
    h1 = x64Add(h1, h2)
    h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
    k2 = x64Multiply(k2, c2)
    k2 = x64Rotl(k2, 33)
    k2 = x64Multiply(k2, c1)
    h2 = x64Xor(h2, k2)
    h2 = x64Rotl(h2, 31)
    h2 = x64Add(h2, h1)
    h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
  }
  k1 = [0, 0]
  k2 = [0, 0]
  switch (remainder) {
    case 15:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
    // fallthrough
    case 14:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
    // fallthrough
    case 13:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
    // fallthrough
    case 12:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
    // fallthrough
    case 11:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
    // fallthrough
    case 10:
      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
    // fallthrough
    case 9:
      k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
      k2 = x64Multiply(k2, c2)
      k2 = x64Rotl(k2, 33)
      k2 = x64Multiply(k2, c1)
      h2 = x64Xor(h2, k2)
    // fallthrough
    case 8:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
    // fallthrough
    case 7:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
    // fallthrough
    case 6:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
    // fallthrough
    case 5:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
    // fallthrough
    case 4:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
    // fallthrough
    case 3:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
    // fallthrough
    case 2:
      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
    // fallthrough
    case 1:
      k1 = x64Xor(k1, [0, key.charCodeAt(i)])
      k1 = x64Multiply(k1, c1)
      k1 = x64Rotl(k1, 31)
      k1 = x64Multiply(k1, c2)
      h1 = x64Xor(h1, k1)
    // fallthrough
  }
  h1 = x64Xor(h1, [0, key.length])
  h2 = x64Xor(h2, [0, key.length])
  h1 = x64Add(h1, h2)
  h2 = x64Add(h2, h1)
  h1 = x64Fmix(h1)
  h2 = x64Fmix(h2)
  h1 = x64Add(h1, h2)
  h2 = x64Add(h2, h1)
  return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
}

export {
  x64hash128
}
