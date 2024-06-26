//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// added together as a 64bit int (as an array of two 32bit ints).
//
const x64Add = function (m, n) {
  m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
  n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
  var o = [0, 0, 0, 0]
  o[3] += m[3] + n[3]
  o[2] += o[3] >>> 16
  o[3] &= 0xffff
  o[2] += m[2] + n[2]
  o[1] += o[2] >>> 16
  o[2] &= 0xffff
  o[1] += m[1] + n[1]
  o[0] += o[1] >>> 16
  o[1] &= 0xffff
  o[0] += m[0] + n[0]
  o[0] &= 0xffff
  return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
}

export {
  x64Add
}
