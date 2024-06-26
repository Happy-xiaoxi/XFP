 export function _hRT() {
    var e =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection;
    window.webkitRTCPeerConnection;
    if (!e) {
      var t = document.getElementById("EHTalonIframe");
      if (void 0 === typeof t || null === t) return;
      var n = t.contentWindow;
      (e =
        n.RTCPeerConnection ||
        n.mozRTCPeerConnection ||
        n.webkitRTCPeerConnection),
        !!n.webkitRTCPeerConnection;
    }
    return e;
  }