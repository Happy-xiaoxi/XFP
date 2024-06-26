export function getHistory() {
  var e = decodeURIComponent(escape(getCookie("pin"))),
    t = getCookie("_ghis"),
    r =
      window.location.hostname.toLowerCase().indexOf("360buy.com") >= 0
        ? "360buy"
        : "jd";
  if (null == t && null != e) {
    var n = "//gh." + r + ".com/BuyHistory.aspx?mid=" + encodeURIComponent(e);
    $.ajax({
      url: n,
      type: "GET",
      dataType: "jsonp",
      success: function (e) {
        var t = e.SSkus,
          r = e.UserInsterest;
        t.toString().length > 0 &&
          setCookieMills("_ghis", t.toString().substring(0, 51)),
          r.toString().length > 0 && setCookieMills("_ghit", r);
      },
    });
  }
}