export function x(e) {
  var t = e.match(/Android ([.0-9]*)/i);
  if (null !== t && t[1]) return parseFloat(t[1]);
}