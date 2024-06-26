export function _(t, e) {
  var n = "___fp_swf_loaded";
  window[n] = function (e) {
    t(e);
  };
  var a,
    r,
    i = e.fonts.swfContainerId;
  (r = document.createElement("div")).setAttribute(
    "id",
    a.fonts.swfContainerId
  ),
    document.body.appendChild(r);
  var o = { onReady: n };
  window.swfobject.embedSWF(
    e.fonts.swfPath,
    i,
    "1",
    "1",
    "9.0.0",
    !1,
    o,
    { allowScriptAccess: "always", menu: "false" },
    {}
  );
}