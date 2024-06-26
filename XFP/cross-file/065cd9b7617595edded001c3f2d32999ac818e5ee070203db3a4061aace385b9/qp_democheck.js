export function qp_democheck(n) {
	var t = qp_oID('qp_form' + n),
		f,
		i,
		c,
		e,
		o,
		l,
		a,
		r,
		s;
	if (
		((t.demov = ''),
		(f = t.parentNode),
		(i = {
			a: parseInt(f.getAttribute('dage')),
			g: parseInt(f.getAttribute('dage')),
			s: parseInt(f.getAttribute('dskip')),
		}),
		!t.dm && (i.a || i.g))
	) {
		var n = t.id.substr(7),
			u = t.childNodes[0],
			h = t.insertBefore(document.createElement('DIV'), u);
		return (
			(h.style.cssText = u.style.cssText),
			(c = u.getElementsByTagName('DIV')[0].style.cssText),
			(e = ''),
			i.a &&
				(e +=
					'<div style="' +
					c +
					'"><span style="display:inline-block; width:70px;">Age:</span><select name=\'qp_da' +
					n +
					"'><option value=0>Please Select --></option><option value=1>0-12</option><option value=2>13-17</option><option value=3>18-24</option><option value=4>25-34</option><option value=5>35-44</option><option value=6>45-54</option><option value=7>55-64</option><option value=8>65+</option></select></div>"),
			i.g &&
				(e +=
					'<div style="' +
					c +
					'"><span style="display:inline-block; width:70px;">Gender:</span><select name=\'qp_dg' +
					n +
					"'><option value=0>Please Select --></option><option value=1>Male</option><option value=2>Female</option><option value=3>Other</option></select></div>"),
			i.s &&
				((o = t.childNodes[2]),
				console.log(o),
				(l = o.getElementsByTagName('A')[0]),
				(a = o.insertBefore(l.cloneNode(!0), l.nextSibling)),
				(a.getElementsByTagName('INPUT')[0].value = 'Skip'),
				attachE(
					a,
					'click',
					(function (n) {
						return function () {
							var t = n.dm.getElementsByTagName('SELECT');
							t[0].value = 0;
							t[1] && (t[1].value = 0);
						};
					})(t)
				)),
			(h.innerHTML = e),
			(u.style.display = 'none'),
			(t.dm = h),
			(t.ab = u),
			!1
		);
	}
	if (i.a || i.g) {
		if (
			((r = t.dm.getElementsByTagName('SELECT')),
			(s = 0),
			r[0].value == '0' && (s = 1),
			i.a && i.g && ((r[1] && r[1].value != '0') || (s = 1)),
			s)
		)
			return alert('Please fill out the anoymous demographics questions'), !1;
		i.a
			? ((t.demov += '&da=' + r[0].value), i.g && (t.demov += '&dg=' + r[1].value))
			: (t.demov += '&dg=' + r[0].value);
	}
	return !0;
}