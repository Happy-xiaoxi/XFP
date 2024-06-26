export function loadSwfAndDetectFonts(e) {
    window.___fp_swf_loaded = function (t) {
      e(t);
    };
    var t = this.options.swfContainerId;
    this.addFlashDivNode();
    var n = { onReady: "___fp_swf_loaded" },
      i = { allowScriptAccess: "always", menu: "false" };
    swfobject.embedSWF(
      this.options.swfPath,
      t,
      "1",
      "1",
      "9.0.0",
      !1,
      n,
      i,
      {}
    );
  }