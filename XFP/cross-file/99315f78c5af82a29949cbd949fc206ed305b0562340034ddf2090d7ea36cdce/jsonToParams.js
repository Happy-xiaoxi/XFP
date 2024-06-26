export function jsonToParams(json) {
  return Object.keys(json)
    .map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(json[k]);
    })
    .join("&");
}