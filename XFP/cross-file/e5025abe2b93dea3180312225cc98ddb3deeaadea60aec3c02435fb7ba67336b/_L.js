export function L() {
  var e,
    t = navigator.userAgent.toLowerCase(),
    n = navigator.productSub;
  if (0 <= t.indexOf("edge/") || 0 <= t.indexOf("iemobile/")) return !1;
  if (0 <= t.indexOf("opera mini")) return !1;
  if (
    ("Chrome" ===
      (e =
        0 <= t.indexOf("firefox/")
          ? "Firefox"
          : 0 <= t.indexOf("opera/") || 0 <= t.indexOf(" opr/")
          ? "Opera"
          : 0 <= t.indexOf("chrome/")
          ? "Chrome"
          : 0 <= t.indexOf("safari/")
          ? 0 <= t.indexOf("android 1.") ||
            0 <= t.indexOf("android 2.") ||
            0 <= t.indexOf("android 3.") ||
            0 <= t.indexOf("android 4.")
            ? "AOSP"
            : "Safari"
          : 0 <= t.indexOf("trident/")
          ? "Internet Explorer"
          : "Other") ||
      "Safari" === e ||
      "Opera" === e) &&
    "20030107" !== n
  )
    return !0;
  var a,
    r = eval.toString().length;
  if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
  if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
  if (
    33 === r &&
    "Chrome" !== e &&
    "AOSP" !== e &&
    "Opera" !== e &&
    "Other" !== e
  )
    return !0;
  try {
    throw "a";
  } catch (i) {
    try {
      i.toSource(), (a = !0);
    } catch (o) {
      a = !1;
    }
  }
  return a && "Firefox" !== e && "Other" !== e;
}