export function qp_init() {
	var i = 0,
		o,
		d,
		u,
		t,
		f,
		g,
		nt,
		c,
		h,
		v,
		ut,
		l,
		ft,
		tt,
		it,
		r,
		y,
		s,
		a,
		e,
		n;
	try {
		if (
			document.querySelectorAll &&
			((i = document.querySelectorAll("DIV[id^='qp_main']:not([init='1'])")), i && i.length)
		) {
			for (document.qpHasQS = 1, u = 0; u < i.length; u++)
				if (
					((t = i[u].id.replace(/qp_main/i, '')),
					(o = document.querySelectorAll("DIV[id='qp_all" + t + "']")),
					o.length > 1)
				) {
					for (d = document.querySelectorAll("DIV[id='qp_main" + t + "']"), n = 1; n < d.length; n++)
						d[n].defer = !0;
					for (n = 1; n < o.length; n++)
						(o[n].id = 'qp_all' + t + '.' + n),
							o[n].setAttribute('id', o[n].id),
							(o[n].fn = (function (n, i, r) {
								return function () {
									for (
										var f = document.querySelectorAll("DIV[id='" + n.id + "'] *[id]"), u = 0;
										u < f.length;
										u++
									)
										f[u].id.indexOf(t + '') != -1 &&
											((f[u].id = f[u]
												.getAttribute('id')
												.replace(new RegExp(t, 'g'), t + '.' + r)),
											f[u].setAttribute('id', f[u].id));
									for (
										f = document.querySelectorAll("DIV[id='" + n.id + "'] *[name]"), u = 0;
										u < f.length;
										u++
									)
										f[u].name.indexOf(t + '') != -1 &&
											((f[u].name = f[u]
												.getAttribute('name')
												.replace(new RegExp(t, 'g'), t + '.' + r)),
											f[u].setAttribute('name', f[u].name));
									i.defer = !1;
									setTimeout(qp_init, 100);
								};
							})(o[n], d[n], n)),
							document.winLoaded ? setTimeout(o[n].fn, 100) : qp_ae(window, 'load', o[n].fn);
				}
			i = document.querySelectorAll("DIV[id^='qp_main']:not([init='1'])");
		}
	} catch (vt) {}
	for (document.qpHasQS || (i && i.length) || (i = qp_oTag('DIV')), u = 0; u < i.length; u++)
		if (i[u].id.indexOf('qp_main') != -1 && !i[u].initf && !i[u].defer) {
			for (
				i[u].initf = !0,
					t = i[u].id.replace(/qp_main/i, ''),
					i[u].setAttribute('init', 1),
					f = 0,
					g = i[u].getElementsByTagName('FORM'),
					n = 0;
				n < g.length;
				n++
			)
				g[n].id.indexOf('qp_form') != -1 && (f = g[n]);
			if (!f)
				for (
					r = i[u].childNodes[1],
						f = i[u].insertBefore(document.createElement('DIV'), r),
						f.id = 'qp_form' + t,
						f.appendChild(r),
						f.action =
							'http://' +
							((document.location + '').indexOf('/embed-test.asp?q=') == -1 ? 'www' : 'test') +
							'.poll-maker.com/results' +
							(t + '.').split('.')[0] +
							'x' +
							i[u].getAttribute('fp'),
						f.setAttribute('action', f.action),
						r = i[u].getElementsByTagName('INPUT'),
						n = 0;
					n < r.length;
					n++
				)
					r[n].getAttribute('type') == 'submit' &&
						(r[n].name + '   ').substr(0, 4) == 'qp_b' &&
						((r[n].type = 'button'), r[n].setAttribute('type', 'button'));
			f.out = f.action;
			var w = f.action.replace(/^[\s\S]+results([\d\w\-]+)($|[\&\?][\s\S]*?$)/i, '$1'),
				rt = qp_oID('qp_all' + t),
				ct = { p: parseInt(rt.getAttribute('pop')), h: f.parentNode.offsetHeight, w: f.parentNode.offsetWidth };
			for (
				ct.p &&
					((rt.style.cssText =
						'position:absolute; top:-10000px; left:-10000px; opacity:0; -webkit-transition:opacity 150ms ease-in;'),
					setTimeout(
						(function (n, t) {
							return function () {
								n.style.cssText =
									'opacity:1; -webkit-transition:opacity 300ms ease-in; position:fixed; width:' +
									t.w +
									'px; height:' +
									t.h +
									'px; top:50%; left:50%; margin-left:' +
									(-1e4 - t.w / 2) +
									'px; margin-top:' +
									(-1e4 - t.h / 2) +
									'px; padding:0px; box-sizing:content-box; border:10000px solid rgba(0,0,0,0.5);';
							};
						})(rt, ct),
						500
					)),
					nt = qp_oName('qp_d' + t),
					nt && nt[0] && (nt[0].tmr = new Date().getTime()),
					e = qp_oName('qp_v' + t),
					c = [],
					n = 0;
				n < e.length;
				n++
			)
				(e[n].f = t),
					(e[n].fp = w),
					(e[n].parentNode.f = t),
					(h = e[n].parentNode.parentNode),
					(h.f = t),
					(e[n].parentNode.fp = w),
					(e[n].ridx = n),
					(v = h.getAttribute('onClick')),
					v
						? (v + '').indexOf(';k=k+1') == -1 &&
						  ((v = v.replace(/[\;]k=k[\s]*1[\)]/gi, ';k=k+1)')), h.setAttribute('onClick', v))
						: ((h.delOC = 1), (ut = h.getElementsByTagName('SPAN')[0]), ut && (ut.delOC = 1)),
					qp_ae(h, 'click', qp_rclick),
					(h.style.cursor = 'pointer'),
					e[n].value != '999' && c.push(e[n]);
			if (qp_oAtt(t, 'rnd') == 1) {
				for (f.style.visibility = 'hidden', l = document.createElement('DIV'), n = 0; n < c.length; n++)
					(ft = Math.floor(Math.random() * c.length)),
						ft != n &&
							c[n].value != '999' &&
							((tt = c[n].parentNode.parentNode),
							(it = c[ft].parentNode.parentNode),
							tt.parentNode.insertBefore(l, tt),
							it.parentNode.insertBefore(tt, it),
							l.parentNode.insertBefore(it, l));
				l.parentNode && l.parentNode.removeChild(l);
				f.style.visibility = '';
			}
			qp_rclick(0, t);
			qp_ae(
				f,
				'submit',
				(function (n) {
					return function (t) {
						return n.qpfb
							? !0
							: ((t = t ? t : event), t.preventDefault && t.preventDefault(), (t.returnValue = !1), !1);
					};
				})(f)
			);
			r = qp_oName('qp_b' + t);
			r[0] &&
				((r[0].f = t),
				(r[0].fp = w),
				qp_ae(
					r[0],
					'keydown',
					(function (n) {
						return function () {
							n.kp = !0;
						};
					})(r[0])
				),
				qp_ae(r[0], 'click', qp_vote));
			r[1] && ((r[1].f = t), (r[1].fp = w), qp_ae(r[1], 'click', qp_results));
			qp_results(0, t, w, 1);
			y = unescape(qp_qsV('qp_t' + t));
			y || (y = unescape(qp_qsV('qp_t')));
			y &&
				((s = qp_oName('qp_t' + t)),
				s && s[0]
					? (s[0].value = y)
					: ((s = document.createElement('INPUT')),
					  (s.name = 'qp_t' + t),
					  (s.type = 'hidden'),
					  (s.value = y),
					  f.appendChild(s)));
			var b = new Date(),
				p = qp_oAtt(t, 'tzs'),
				lt = new Date(b.getFullYear(), 0, 1),
				at = new Date(b.getFullYear(), 6, 1);
			document.ctz = 0 - Math.max(lt.getTimezoneOffset(), at.getTimezoneOffset()) / 60;
			document.dstz = 0 - b.getTimezoneOffset() / 60;
			var k = '',
				et = 0,
				ot = p,
				st = qp_oAtt(t, 'sd'),
				ht = qp_oAtt(t, 'ed');
			ht &&
				((a = new Date()),
				a.setTime(((ht - 25569) * 24 - p) * 36e5),
				b.getTime() > a.getTime() && ((et = ht), (k = 'e'), (ot = p)));
			p = qp_oAtt(t, 'tze');
			st &&
				!k &&
				((a = new Date()),
				a.setTime(((st - 25569) * 24 - p) * 36e5),
				b.getTime() < a.getTime() && ((et = st), (k = 's'), (ot = p)));
			k && qp_date(t, et, ot, k);
		}
	try {
		for (e = document.querySelectorAll('A.qp_btna'), n = 0; n < e.length; n++) e[n].href = 'javascript:void(0);';
	} catch (vt) {}
}