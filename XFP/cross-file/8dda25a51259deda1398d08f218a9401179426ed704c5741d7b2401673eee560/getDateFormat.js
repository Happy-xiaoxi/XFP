export function getDateFormat(e, t) {
  var r = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "q+": Math.floor((e.getMonth() + 3) / 3),
    S: e.getMilliseconds(),
  };
  /(y+)/.test(t) &&
    (t = t.replace(
      RegExp.$1,
      (e.getFullYear() + "").substr(4 - RegExp.$1.length)
    ));
  for (var n in r)
    new RegExp("(" + n + ")").test(t) &&
      (t = t.replace(
        RegExp.$1,
        1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)
      ));
  return t;
}