export function Wv(t, e, n, i) {
  (n =
    n &&
    ((n.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [
      "",
    ])[0] ||
      n.replace(/.*?([^.]+\.[^.]+)$/, "$1"))),
    (t = t + "=" + e + "; path=/; "),
    i &&
      (t +=
        "expires=" +
        new Date(new Date().getTime() + i).toGMTString() +
        "; "),
    n && (t += "domain=" + n + ";"),
    (r.cookie = t);
}