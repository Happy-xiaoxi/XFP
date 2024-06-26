export function qp_ae(n, t, i) {
	n.attachEvent ? n.attachEvent('on' + t, i) : n.addEventListener(t.replace(/^on/i, ''), i, !1);
}