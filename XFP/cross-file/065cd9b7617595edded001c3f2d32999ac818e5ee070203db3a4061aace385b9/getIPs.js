export function getIPs(n) {
	var i, o, u, t;
	try {
		var f = {},
			r = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
			e = !!window.webkitRTCPeerConnection;
		r ||
			((i = iframe.contentWindow),
			(r = i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection),
			(e = !!i.webkitRTCPeerConnection));
		o = { optional: [{ RtpDataChannels: !0 }] };
		u = undefined;
		e && (u = { iceServers: [{ urls: 'stun:stun.services.mozilla.com' }] });
		t = new r(u, o);
		hCand = function (t) {
			try {
				var i = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t)[1];
			} catch (r) {}
			i && (/(10|192|172)\.[\d]+\.[\d]+\.[\d]+/.test(i) || (f[i] === undefined && n(i), (f[i] = !0)));
		};
		t.onicecandidate = function (n) {
			n.candidate && hCand(n.candidate.candidate);
		};
		t.createDataChannel('');
		t.createOffer(
			function (n) {
				t.setLocalDescription(
					n,
					function () {},
					function () {}
				);
			},
			function () {}
		);
		setTimeout(function () {
			try {
				var n = t.localDescription.sdp.split('\n');
				n.forEach(function (n) {
					n.indexOf('a=candidate:') === 0 && hCand(n);
				});
			} catch (i) {}
		}, 1e3);
	} catch (s) {}
}