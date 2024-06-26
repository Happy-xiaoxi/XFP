export function complexMold(cookieArrary, tag, prefix, logtype, flag) {
  for (var i = 0; i < cookieArrary.length; i++) {
    var items = eval("(" + getCookie(prefix + cookieArrary[i]) + ")");
    if (null != items)
      for (var k in items)
        "" != items[k] && loginfo(items[k], k.toString(), tag, logtype, flag);
  }
}