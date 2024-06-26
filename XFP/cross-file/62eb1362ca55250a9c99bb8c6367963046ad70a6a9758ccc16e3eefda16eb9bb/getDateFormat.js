export function getDateFormat(t, e) {
  var r = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds(),
  };
  /(y+)/.test(e) &&
    (e = e.replace(
      RegExp.$1,
      (t.getFullYear() + "").substr(4 - RegExp.$1.length)
    ));
  for (var n in r)
    new RegExp("(" + n + ")").test(e) &&
      (e = e.replace(
        RegExp.$1,
        1 == RegExp.$1.length
          ? r[n]
          : ("00" + r[n]).substr(("" + r[n]).length)
      ));
  return e;
}