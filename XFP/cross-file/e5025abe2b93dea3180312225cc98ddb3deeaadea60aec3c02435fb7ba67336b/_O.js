export function O() {
  var e = document.createElement("div");
  e.innerHTML = "&nbsp;";
  var t = !(e.className = "adsbox");
  try {
    document.body.appendChild(e),
      (t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight),
      document.body.removeChild(e);
  } catch (n) {
    t = !1;
  }
  return t;
}