export function remove(t, e) {
  var n = t.indexOf(e);
  return n > -1 && t.splice(n, 1), t;
}