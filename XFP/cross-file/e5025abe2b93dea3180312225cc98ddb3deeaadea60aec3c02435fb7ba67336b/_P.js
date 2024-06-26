export function P() {
  var e,
    t = navigator.userAgent.toLowerCase(),
    n = navigator.oscpu,
    a = navigator.platform.toLowerCase();
  if (
    ((e =
      0 <= t.indexOf("windows phone")
        ? "Windows Phone"
        : 0 <= t.indexOf("windows") ||
          0 <= t.indexOf("win16") ||
          0 <= t.indexOf("win32") ||
          0 <= t.indexOf("win64") ||
          0 <= t.indexOf("win95") ||
          0 <= t.indexOf("win98") ||
          0 <= t.indexOf("winnt") ||
          0 <= t.indexOf("wow64")
        ? "Windows"
        : 0 <= t.indexOf("android")
        ? "Android"
        : 0 <= t.indexOf("linux") ||
          0 <= t.indexOf("cros") ||
          0 <= t.indexOf("x11")
        ? "Linux"
        : 0 <= t.indexOf("iphone") ||
          0 <= t.indexOf("ipad") ||
          0 <= t.indexOf("ipod") ||
          0 <= t.indexOf("crios") ||
          0 <= t.indexOf("fxios")
        ? "iOS"
        : 0 <= t.indexOf("macintosh") || 0 <= t.indexOf("mac_powerpc)")
        ? "Mac"
        : "Other"),
    ("ontouchstart" in window ||
      0 < navigator.maxTouchPoints ||
      0 < navigator.msMaxTouchPoints) &&
      "Windows" !== e &&
      "Windows Phone" !== e &&
      "Android" !== e &&
      "iOS" !== e &&
      "Other" !== e &&
      -1 === t.indexOf("cros"))
  )
    return !0;
  if (void 0 !== n) {
    if (
      0 <= (n = n.toLowerCase()).indexOf("win") &&
      "Windows" !== e &&
      "Windows Phone" !== e
    )
      return !0;
    if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
    if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
    if (
      (-1 === n.indexOf("win") &&
        -1 === n.indexOf("linux") &&
        -1 === n.indexOf("mac")) !=
      ("Other" === e)
    )
      return !0;
  }
  return (
    (0 <= a.indexOf("win") && "Windows" !== e && "Windows Phone" !== e) ||
    ((0 <= a.indexOf("linux") ||
      0 <= a.indexOf("android") ||
      0 <= a.indexOf("pike")) &&
      "Linux" !== e &&
      "Android" !== e) ||
    ((0 <= a.indexOf("mac") ||
      0 <= a.indexOf("ipad") ||
      0 <= a.indexOf("ipod") ||
      0 <= a.indexOf("iphone")) &&
      "Mac" !== e &&
      "iOS" !== e) ||
    (!(0 <= a.indexOf("arm") && "Windows Phone" === e) &&
      !(0 <= a.indexOf("pike") && 0 <= t.indexOf("opera mini")) &&
      ((a.indexOf("win") < 0 &&
        a.indexOf("linux") < 0 &&
        a.indexOf("mac") < 0 &&
        a.indexOf("iphone") < 0 &&
        a.indexOf("ipad") < 0 &&
        a.indexOf("ipod") < 0) !=
        ("Other" === e) ||
        ("undefined" == typeof navigator.plugins &&
          "Windows" !== e &&
          "Windows Phone" !== e)))
  );
}