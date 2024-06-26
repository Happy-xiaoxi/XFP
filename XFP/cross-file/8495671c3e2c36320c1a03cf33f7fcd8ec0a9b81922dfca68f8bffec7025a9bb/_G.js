export function G(){
    var e,
      n,
      t = window.navigator.userAgent,
      r =
        (null ===
          (n =
            null === (e = window.navigator) || void 0 === e
              ? void 0
              : e.userAgentData) || void 0 === n
          ? void 0
          : n.platform) || window.navigator.platform;
    return ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "MacOS"].some(
      function (e) {
        return e.toLowerCase() === r.toLowerCase();
      }
    )
      ? "Mac OS"
      : ["iPhone", "iPad", "iPod"].some(function (e) {
          return e.toLowerCase() === r.toLowerCase();
        })
      ? "iOS"
      : ["Win32", "Win64", "Windows", "WinCE"].some(function (e) {
          return e.toLowerCase() === r.toLowerCase();
        })
      ? "Windows"
      : /Android/.test(t)
      ? "Android"
      : /Linux/.test(r)
      ? "Linux"
      : "Other";
  }