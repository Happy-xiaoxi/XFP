export function ke() {
  var e = Date.now();
  O(window, "message", Me),
    window.parent.postMessage(
      JSON.stringify({ ppfn: !0, frameReady: !0, iframeLoadEnd: e }),
      "*"
    );
}