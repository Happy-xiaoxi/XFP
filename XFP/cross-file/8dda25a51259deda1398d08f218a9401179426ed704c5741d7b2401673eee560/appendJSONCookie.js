export function appendJSONCookie(cookieName, key, wid, Mills) {
    var ns = eval("(" + getCookie(cookieName) + ")");
    (null != ns && "" != ns) || (ns = new Object()),
      null == ns[key] && (ns[key] = "");
    var pos = ns[key].indexOf(wid);
    pos < 0 && (ns[key] = ns[key] + "," + wid),
      setCookieMills(cookieName, $.toJSON(ns), Mills);
  }