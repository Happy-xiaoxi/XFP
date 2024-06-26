export function setCookieMills(e, t, r) {
    var n = new Date();
    n.setTime(n.getTime() + r);
    var i =
      window.location.hostname.indexOf("360buy") >= 0 ? ".360buy.com" : ".jd.com";
    document.cookie =
      e + "=" + escape(t) + ";expires=" + n.toGMTString() + ";path=/;domain=" + i;
  }