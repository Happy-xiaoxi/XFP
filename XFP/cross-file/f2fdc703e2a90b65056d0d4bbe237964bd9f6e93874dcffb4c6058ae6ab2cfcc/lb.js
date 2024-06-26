;
;
export function lb(a) {
    var b = a(), c = { iceServers: [{ url: 'stun:stun.cdn-net.com:3478' }] }, d, h = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (h) {
        var g = function (a) {
            }, f = [];
        (function () {
            d = new h(c);
            d.onicecandidate = function (a) {
                a.candidate && f.push(a.candidate);
                if ('complete' == d.iceGatheringState) {
                    a = {};
                    for (var c = 0; c < f.length; c++)
                        try {
                            var h = f[c].candidate.split(' ');
                            8 <= h.length && (h[4] in a || (a[h[4]] = { type: h[7] }));
                        } catch (g) {
                        }
                    e('webrtc-addrs', a);
                    e('webrtc-sdp', d.localDescription.sdp);
                    b(!0);
                }
            };
            d.createDataChannel('', { reliable: !1 });
            d.createOffer(function (a) {
                d.setLocalDescription(a, function (a) {
                }, g);
            }, g);
        }());
    } else
        k('webrtc not supported');
}