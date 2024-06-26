export function _convertFunc(name, definition) {
  if (typeof module != "undefined" && module.exports)
    module.exports = definition();
  else if (typeof define == "function" && define.amd) define(name, definition);
  else this[name] = definition();
}