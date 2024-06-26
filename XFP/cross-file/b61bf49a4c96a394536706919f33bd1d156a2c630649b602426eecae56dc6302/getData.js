export function getData(name) {
  var nameEQ = name + "=";
  var cookieList = document.cookie.split(";");
  var chr;
  for (var i = 0; i < cookieList.length; i++) {
    chr = cookieList[i];
    while (chr.charAt(0) === " ") {
      chr = chr.substring(1, chr.length);
    }
    if (chr.indexOf(nameEQ) === 0) {
      return unescape(chr.substring(nameEQ.length, chr.length));
    }
  }
  return null;
}