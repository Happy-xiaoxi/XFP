export function replaceUrlParamVal(url, paramName, replaceWith) {
  let re = eval("/(" + paramName + "=)([^&#]*)/gi");
  return url.replace(re, paramName + "=" + replaceWith);
}