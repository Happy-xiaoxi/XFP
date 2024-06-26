export function qp_fb(n) {
	var t = qp_oID('qp_form' + n),
		i;
	t.qpfb = t.tagName == 'DIV' ? 0 : 1;
	t.action = (t.out + '').replace(/www[\.]poll[\-]maker/gi, 'poll-maker') + '?src=emb';
	i = (function (t) {
		return function (i, r) {
			if (r) {
				var u = document.createElement('INPUT');
				u.type = 'hidden';
				u.name = 'qp_' + i + n;
				u.value = r;
				t.appendChild(u);
			}
		};
	})(t);
	i('fp', new Fingerprint({ screen_resolution: !0, canvas: !0, ie_activex: !0 }).get());
	i('fb', 1);
	i('ipt', document.ip2);
}