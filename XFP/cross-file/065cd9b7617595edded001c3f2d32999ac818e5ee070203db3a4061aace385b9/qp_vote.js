export function qp_vote(n, t, i) {
	var h, o, b, c, l, a, f, k, g, v, s, r, u, d;
	try {
		n = n ? n : event;
		h = n.target ? n.target : n.srcElement;
	} catch (nt) {}
	if (((t = t ? t : h.f), (i = i ? i : h.fp), qpPV)) return qp_results(n, t, i), !1;
	var e = '',
		y = '',
		p = '',
		w = '';
	for (console.log(t), o = qp_oName('qp_v' + t), u = 0; u < o.length; u++)
		o[u].checked && (e = (!e || o[u].type == 'radio' ? '' : e + ', ') + o[u].value);
	if (((b = qp_oName('qp_other' + t)[0]), b && (y = b.value), !e)) {
		alert('You need to select an option!');
		return;
	}
	if (!qp_democheck(t)) return !1;
	if (
		(qp_h(t),
		(c = document.createElement('SCRIPT')),
		(c.charset = 'utf-8'),
		(l = qp_oName('qp_t' + t)),
		l && l[0] && (p = l[0].value),
		(a = qp_oName('qp_uc' + t)),
		a && a[0] && (w = a[0].value),
		(f = qp_oName('qp_d' + t)),
		(k = ''),
		f && f[0])
	) {
		for (
			f = f[0],
				g = new Date().getTime() - f.tmr,
				f.dvalue || (f.dvalue = (f.value + '-').split('-')[0]),
				v = [0, 0],
				s = 0;
			s < 2;
			s++
		) {
			for (
				r = ([f.dvalue, parseFloat(f.dvalue) + g / 864e5][s] + '').split('.'),
					r[1] = (r[1] + Array(11).join('0')).substr(0, 10).split(''),
					r = r.concat([parseInt(r[1][8]), parseInt(r[1][9])]),
					u = 2;
				u < 4;
				u++
			)
				r.push(0 + (r[u] < 5 ? 9 - r[u] : r[u])), (r[u + 2] = r[u + 2] == 9 ? 8 : r[u + 2]);
			r[4] == r[5] && (r[5] = r[4] == 8 ? 5 : r[4] + 1);
			r[1][r[4] - 1] = 0 + r[3];
			r[1][r[5] - 1] = 0 + r[2];
			(n.screenY || h.kp) && ((r[1][8] = r[2]), (r[1][9] = r[3]));
			v[s] = r[0] + '.' + r[1].join('');
		}
		k = '&qpd=' + encodeURIComponent(v.join('-'));
	}
	try {
		document.cookie = i + '=1;expires=' + new Date(new Date().getTime() + 15552e6).toGMTString();
	} catch (nt) {}
	d = 0;
	try {
		d = new Fingerprint({ screen_resolution: !0, canvas: !0, ie_activex: !0 }).get();
	} catch (nt) {}
	if (qp_oID('qp_form' + t).qpfb)
		return (
			(f.value = v.join('-')),
			setTimeout(function () {
				qp_oID('qp_ww' + t).innerHTML =
					"Vote Recorded<br><br><a href='http://poll-maker.com/results" +
					i +
					"' target=_blank>View Results</a>";
			}, 3e3),
			!0
		);
	c.src =
		i.indexOf('-') == -1
			? '//' +
			  qp_dm(t) +
			  '/pmvote/Inventory.Poll_Vote_Inline&qp=' +
			  i +
			  '&v=' +
			  encodeURIComponent(e) +
			  '&o=' +
			  encodeURIComponent(y) +
			  '&t=' +
			  encodeURIComponent(p) +
			  '&tt=' +
			  new Date().getTime()
			: '//' +
			  qp_dm(t) +
			  '/pmvote/Poll.Vote_Inline&qp=' +
			  i +
			  '&v=' +
			  encodeURIComponent(e) +
			  '&o=' +
			  encodeURIComponent(y) +
			  '&t=' +
			  encodeURIComponent(p) +
			  (w ? '&uc=' + encodeURIComponent(w) : '') +
			  (qpHH ? '&hosted=y' : '') +
			  '&tt=' +
			  new Date().getTime() +
			  '&tz=' +
			  encodeURIComponent(document.ctz) +
			  '&dstz=' +
			  encodeURIComponent(document.dstz) +
			  k +
			  (document.ip2 ? '&ipt=' + encodeURIComponent(document.ip2) : '') +
			  '&fp=' +
			  encodeURIComponent(d) +
			  qp_oID('qp_form' + t).demov;
	qp_oTag('HEAD')[0].appendChild(c);
}