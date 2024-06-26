export function qp_sr(n, t, i, r, u, f, e) {
	var k, a, nt, w, tt, b, it, h, p, rt, s, y, d, o, v, c, g, l, ut;
	if (!e && ((n + '').indexOf('.') != -1 || qp_oID('qp_main' + n + '.1')) && document.qpHasQS) {
		for (
			k = document.querySelectorAll("DIV[id^='qp_main" + (n + '.').split('.')[0] + "']"), s = 0;
			s < k.length;
			s++
		)
			k[s].initf && qp_sr(k[s].id.replace(/qp_main/, ''), t, i, r, u, f, 1);
		return;
	}
	if (
		(qp_ls(n, 4),
		u && qp_h(n),
		(a = qp_oName('qp_v' + n)),
		(i = i.split(',')),
		(nt = qp_oID('qp_main' + n)),
		(nt.ot = r),
		(nt.rs = i),
		(p = 0),
		(w = qp_oID('qp_form' + n)),
		(w.style.visibility = 'visible'),
		t > 9 && ((w.ow = 1), (t -= 10)),
		(tt = qp_oID('qp_ww' + n)),
		tt && (tt.style.display = 'none'),
		(b = qp_oID('qp_rv' + n)),
		f)
	) {
		it = w
			.getElementsByTagName('DIV')[0]
			.insertBefore(document.createElement('DIV'), w.getElementsByTagName('DIV')[0].childNodes[0]);
		it.innerHTML = f;
		try {
			it.style.cssText = qp_oID('qp_rb_' + n).style.cssText;
		} catch (ft) {}
	}
	for (s = 0; s < a.length; s++)
		(h = s),
			(a[s].ridx || a[s].ridx === 0) && (h = a[s].ridx),
			(v = (parseFloat(i[h + 2]) * 100) / parseFloat(i[0])),
			(c = Math.round((parseFloat(i[h + 2]) * 90) / parseFloat(i[0]))),
			(c = !c || c < 0 ? 0 : c),
			(o = qp_oID('qp_rv_' + h + '_' + n)),
			(o.style.width = '0%'),
			(o.innerHTML =
				"<div style='position:relative;" +
				(b ? '' : 'line-height:16px;') +
				"'>" +
				(!i[h + 2] && i[h + 2] !== 0 ? '' : i[h + 2]) +
				'</div>'),
			(w.childNodes[0].offsetWidth * (v ? v : 0)) / 100 < (i[h + 2] + '').length * 10 &&
				((o.style.color = 'inherit'),
				(l = o.childNodes[0].style),
				(l.left = '100%'),
				(l.textAlign = 'left'),
				(l.marginLeft = '7px')),
			(qp_oID('qp_rp_' + h + '_' + n).innerHTML = !i[h + 2] && i[h + 2] !== 0 ? '' : Math.round(v ? v : 0) + '%'),
			setTimeout(
				(function (n, t) {
					return function () {
						qp_grow(n, 0, t);
					};
				})('qp_rv_' + h + '_' + n, c),
				1
			);
	if (!document.querySelectorAll("DIV[id='qp_main" + n + "'] TABLE IMG")[0]) {
		for (s = 0; s < a.length; s++)
			(o = qp_oID('qp_rv_' + s + '_' + n)),
				o.parentNode.parentNode.tagName == 'TD' &&
					((p = o.parentNode.parentNode.parentNode.parentNode.parentNode),
					p.parentNode.appendChild(o.parentNode));
		p && p.parentNode.removeChild(p);
	}
	if (
		((qp_oID('qp_rb_' + n).childNodes[0].innerHTML =
			i[0] + ' vote' + (i[0] == '1' ? '' : 's') + ' in ' + i[1] + ' day' + (i[1] == '1' ? '' : 's')),
		r)
	)
		for (rt = r.split('|'), s = 0; s < rt.length; s++)
			(y = rt[s].split('~')),
				(y[1] = parseFloat(y[1])),
				(d = a[a.length - 1].parentNode.parentNode),
				(o = d.cloneNode(!0)),
				(o.style.display = 'none'),
				o.removeNode
					? o.childNodes[0].childNodes[0].removeNode(!0)
					: o.childNodes[0].removeChild(o.childNodes[0].childNodes[0]),
				(o.childNodes[1].id = o.childNodes[1].id + '_o' + s),
				(o.childNodes[2].id = o.childNodes[2].id + '_o' + s),
				(v = (y[1] * 100) / parseFloat(i[0])),
				(c = Math.round((y[1] * 90) / parseFloat(i[0]))),
				(c = c < 0 ? 0 : c),
				(o.childNodes[0].innerHTML = y[0]),
				(o.childNodes[b ? 1 : 2].innerHTML = Math.round(v) + '%'),
				(g = o.childNodes[b ? 2 : 1]),
				(g.innerHTML =
					"<div style='display:block; position:relative;" +
					(b ? '' : 'line-height:16px;') +
					"'>" +
					y[1] +
					'</div>'),
				(d.offsetWidth * c) / 100 < (y[1] + '').length * 10 &&
					((g.style.color = 'inherit'),
					(l = g.childNodes[0].style),
					(l.left = '100%'),
					(l.textAlign = 'left'),
					(l.marginLeft = '7px')),
				(o = d.parentNode.appendChild(o));
	ut = qp_oID('qp_cl_' + n);
	t && ut && (ut.style.display = 'block');
	qpPostSize();
}