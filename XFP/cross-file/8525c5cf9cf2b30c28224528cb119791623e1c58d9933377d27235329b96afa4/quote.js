export function quote(string) {
  rx_escapable.lastIndex = 0;
  return rx_escapable.test(string)
    ? '"' +
        string.replace(rx_escapable, function (a) {
          var c = meta[a];
          return typeof c === "string"
            ? c
            : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) +
        '"'
    : '"' + string + '"';
}