export function getParameter(t, e) {
  var r = new RegExp("(?:^|&|[?]|[/])" + e + "=([^&]*)").exec(t);
  return r ? n(r[1]) : "";
}