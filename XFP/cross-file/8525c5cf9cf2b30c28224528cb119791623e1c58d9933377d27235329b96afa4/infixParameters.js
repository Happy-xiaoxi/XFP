export function infixParameters(url, params) {
  var updated_url,
    url_parts = url.split("?");
  if (params) {
    if (url_parts[1] === undefined) {
      updated_url = url + "?" + params;
    } else if (url_parts[1] === "") {
      updated_url = url + params;
    } else {
      updated_url = url_parts[0] + "?" + params + "&" + url_parts[1];
    }
  } else {
    updated_url = url;
  }
  return updated_url;
}