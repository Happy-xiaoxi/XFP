export function qp_rclick(n, t) {
	var i, r, u, f;
	try {
		n = n ? n : event;
	} catch (e) {}
	if (n) {
		if (((i = n.target ? n.target : n.srcElement), (t = i.f), i.tagName == 'A')) return !0;
		i.tagName != 'INPUT' &&
			i.delOC &&
			((r = i.getElementsByTagName('INPUT')[0]), (r.checked = r.type == 'radio' ? !0 : !r.checked));
	}
	u = qp_oName('qp_v' + t);
	f = qp_oID('qp_ot' + t);
	f && !qp_oID('qp_main' + t).rs && (f.style.display = u[u.length - 1].checked ? 'block' : 'none');
}