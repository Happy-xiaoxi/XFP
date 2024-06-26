export function qp_showot(n) {
	var o = qp_oID('qp_main' + n),
		s = o.ot,
		c = o.rs,
		l = qp_oName('qp_v' + n),
		h = qp_oID('qp_otl_' + n),
		r = h.innerHTML != '(show)',
		u,
		t,
		e;
	if (((h.innerHTML = r ? '(show)' : '(hide)'), s))
		for (u = s.split('|'), t = 0; t < u.length; t++) {
			var a = u[t].split('~'),
				f = qp_oID('qp_rv_' + (l.length - 1) + '_' + n + '_o' + t).parentNode,
				i = Math.round((a[1] * 90) / parseFloat(c[0]));
			i = i < 0 ? 0 : i;
			e = qp_oID('qp_rv' + n);
			f.style.display = r ? 'none' : 'block';
			r
				? (f.childNodes[e ? 2 : 1].style.width = '0%')
				: setTimeout("qp_grow('" + f.childNodes[e ? 2 : 1].id + "',0," + i + ')', 1);
		}
	qpPostSize();
}