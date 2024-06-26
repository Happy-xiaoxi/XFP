export function chunk(str, n) {
  if (typeof n === "undefined") {
    n = 2;
  }
  var result = str.match(RegExp(".{1," + n + "}", "g"));
  return result || [];
}