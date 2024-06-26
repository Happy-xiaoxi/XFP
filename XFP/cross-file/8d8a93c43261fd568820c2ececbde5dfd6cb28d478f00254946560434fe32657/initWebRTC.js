  export function initWebRTC(e) {
    function t(t) {
      var i = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/,
        a = i.exec(t)[1];
      void 0 === n[a] && e(a), (n[a] = !0);
    }
    this.makeFrame("lol");
    var n = {},
      i =
        window.RTCPeerConnection ||
        window.moxRTCPeerConnection ||
        window.webkitRTCPeerConnection;
    window.webkitRTCPeerConnection;
    if (!i) {
      var a = lol.contentWindow;
      (i =
        a.RTCPeerConnection ||
        a.mozRTCPeerConnection ||
        a.webkitRTCPeerConnection),
        !!a.webkitRTCPeerConnection;
    }
    var o = { optional: [{ RtpDataChannels: !0 }] },
      r = {
        iceServers: [
          { urls: "stun:stun.2.google.com:19302" },
          { urls: "stun:stun.3.google.com:19302" },
          { urls: "stun:stun.4.google.com:19302" },
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" },
        ],
      };
    try {
      var s = new i(r, o);
    } catch (t) {
      return e(!1), !1;
    }
    (s.onicecandidate = function (e) {
      e.candidate && t(e.candidate.candidate);
    }),
      s.createDataChannel(""),
      s.createOffer(
        function (e) {
          s.setLocalDescription(
            e,
            function () {},
            function () {}
          );
        },
        function () {}
      ),
      setTimeout(function () {
        s.localDescription.sdp.split("\n").forEach(function (e) {
          0 === e.indexOf("a=candidate:") && t(e);
        });
      }, 1e3);
  }