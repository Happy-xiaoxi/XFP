export function getHasLiedOs() {
    var e,
      t = navigator.userAgent.toLowerCase(),
      n = navigator.oscpu,
      i = navigator.platform.toLowerCase();
    e =
      t.indexOf("windows phone") >= 0
        ? "Windows Phone"
        : t.indexOf("win") >= 0
        ? "Windows"
        : t.indexOf("android") >= 0
        ? "Android"
        : t.indexOf("linux") >= 0
        ? "Linux"
        : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0
        ? "iOS"
        : t.indexOf("mac") >= 0
        ? "Mac"
        : "Other";
    if (
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0) &&
      "Windows Phone" !== e &&
      "Android" !== e &&
      "iOS" !== e &&
      "Other" !== e
    )
      return !0;
    if (void 0 !== n) {
      if (
        ((n = n.toLowerCase()),
        n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
      )
        return !0;
      if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
        return !0;
      if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
      if (
        0 === n.indexOf("win") &&
        0 === n.indexOf("linux") &&
        n.indexOf("mac") >= 0 &&
        "other" !== e
      )
        return !0;
    }
    return (
      (i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) ||
      ((i.indexOf("linux") >= 0 ||
        i.indexOf("android") >= 0 ||
        i.indexOf("pike") >= 0) &&
        "Linux" !== e &&
        "Android" !== e) ||
      ((i.indexOf("mac") >= 0 ||
        i.indexOf("ipad") >= 0 ||
        i.indexOf("ipod") >= 0 ||
        i.indexOf("iphone") >= 0) &&
        "Mac" !== e &&
        "iOS" !== e) ||
      (0 === i.indexOf("win") &&
        0 === i.indexOf("linux") &&
        i.indexOf("mac") >= 0 &&
        "other" !== e) ||
      (void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)
    );
  }