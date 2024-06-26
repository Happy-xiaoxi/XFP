export function qp_h(n, t) {
	var ct = qp_oName('qp_b' + n)[1],
		u,
		y,
		f,
		k,
		rt,
		ut,
		ft,
		et,
		d,
		e,
		p,
		ot,
		g,
		o,
		v,
		w,
		c,
		st,
		b,
		s,
		l,
		nt,
		h,
		tt,
		it,
		i,
		ht;
	ct && (ct.style.display = 'none');
	u = [];
	u[0] = 'FF0000;0000FF;008000;FBD400;800080;f99900;9900f9;007d4d;83f400;7d0030'.split(';');
	u[1] = 'FF6464;6464FF;559F55;FFF1AA;956397;ffc364;c364ff;559f82;d8ffaa;d6518a'.split(';');
	u[2] = '960000;000096;005A00;907300;500050;835101;4d007d;00472b;549000;50001f'.split(';');
	var r = 0,
		a = qp_oID('qp_form' + n),
		lt = qp_oID('qp_msg' + n);
	if (
		(lt && ((lt.style.display = 'none'), (a.childNodes[0].style.visibility = '')),
		(y = qp_oID('qp_main' + n)),
		y.rs)
	)
		return !1;
	if (
		((a.style.visibility = 'hidden'),
		y.setAttribute('results', 1),
		(f = qp_oName('qp_v' + n)),
		(k = qp_oName('qp_b' + n)[0].parentNode),
		(k.style.display = 'none'),
		(rt = qp_oID('qp_a' + n)),
		rt && (rt.style.display = 'none'),
		(ut = qp_oID('qp_ot' + n)),
		ut && (ut.style.display = 'none'),
		(qp_oID('qp_form' + n).style.margin = '0px'),
		(ft = qp_oID('qp_tb' + n)),
		ft && (ft.style.display = 'none'),
		(et = qp_oID('qp_ucb' + n)),
		et && (et.style.display = 'none'),
		(d = qp_oID('qp_rv' + n)),
		(e = qp_oID('qp_ww' + n)),
		a.dm && ((a.dm.style.display = 'none'), (a.ab.style.display = '')),
		e)
	)
		e.style.display = 'block';
	else {
		e = document.createElement('DIV');
		p = y.childNodes[0];
		e.id = 'qp_ww' + n;
		e.style.position = 'absolute';
		e.style.marginLeft = '10px';
		e.style.marginTop = '10px';
		p && p.style && ((e.style.fontFamily = p.style.fontFamily), (e.style.fontSize = p.style.fontSize));
		e.innerHTML = 'Please Wait...';
		try {
			y.insertBefore(e, a);
		} catch (at) {}
	}
	for (i = 0; i < f.length; i++) {
		ot = '18px';
		try {
			ot = getComputedStyle(f[i].parentNode, null).lineHeight;
		} catch (at) {}
		f[i].style.display = 'none';
		g = f[i].parentNode.style;
		g.paddingLeft = '0px';
		g.height = ot;
		g.overflow = 'hidden';
		o = f[i].parentNode.parentNode;
		d && (o.style.position = 'relative');
		v = document.createElement('DIV');
		v.style.cssText =
			'float:left; width:0%; font-size:11px; color:white; height:16px; text-align:right; background-color:#' +
			u[0][r] +
			'; border:1px solid #' +
			u[2][r] +
			'; border-left:1px solid #' +
			u[1][r] +
			'; border-top:1px solid #' +
			u[1][r] +
			'; background: -webkit-gradient(linear, left top, left bottom, from(#' +
			u[0][r] +
			'), to(#' +
			u[2][r] +
			')); background: -moz-linear-gradient(top, #' +
			u[0][r] +
			', #' +
			u[2][r] +
			'); filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#FF' +
			u[0][r] +
			', EndColorStr=#FF' +
			u[2][r] +
			'); border-bottom-right-radius:3px; border-top-right-radius:3px; padding-right:2px;';
		d &&
			(v.style.cssText = d.style.cssText + qp_oID('qp_rv' + String.fromCharCode(97 + (r % 3)) + n).style.cssText);
		w = i;
		(f[i].ridx || f[i].ridx === 0) && (w = f[i].ridx);
		v = o.appendChild(v);
		v.id = 'qp_rv_' + w + '_' + n;
		r++;
		r = r > 9 ? 0 : r;
		c = document.createElement('DIV');
		c.id = 'qp_rp_' + w + '_' + n;
		c.style.cssText = 'font-size:11px; float:right; width:25px; overflow:hidden;';
		st = qp_oID('qp_rp' + n);
		st
			? ((c.style.cssText = st.style.cssText), (c = o.insertBefore(c, v)))
			: ((c = o.appendChild(c)), (o.style.paddingTop = (i == 0 || !o.attachEvent ? 5 : 0) + 'px'));
		b = document.createElement('DIV');
		b.id = 'qp_rpc_' + w + '_' + n;
		b.style.cssText = 'clear:both; height:0;';
		b = o.appendChild(b);
		f[i].value == '999' &&
			((s = document.createElement('A')),
			(s.id = 'qp_otl_' + n),
			(s.innerHTML = '(show)'),
			(s.style.color = o.style.color),
			(s.style.outline = 'none'),
			(s.style.marginLeft = '5px'),
			(s.href = "javascript:qp_showot('" + n + "');void(0);"),
			(s = f[i].parentNode.appendChild(s)),
			(s.parentNode.style.pointerEvents = ''));
		qp_ae(
			o,
			'click',
			(function (n) {
				return function () {
					n.ow || window.open(n.action + '?v=97#tab-2', '_blank', '');
				};
			})(a)
		);
	}
	if (
		((y.rs = !0),
		(l = document.createElement('DIV')),
		(l.id = 'qp_rb_' + n),
		(l.style.cssText = f[f.length - 1].parentNode.parentNode.style.cssText + 'padding-right:10px;'),
		(l = k.parentNode.insertBefore(l, k.nextSibling)),
		(nt = document.createElement('DIV')),
		(nt.style.cssText = 'float:left; margin:0px; clear:none;'),
		(nt = l.appendChild(nt)),
		qp_oID('qp_main' + n).getAttribute('cmt') + '' != '0' &&
			((h = document.createElement('A')),
			(h.id = 'qp_cl_' + n),
			(h.href = ''),
			(h.target = '_blank'),
			(h.href = 'http:' + (qp_oID('qp_form' + n).action + '').replace(/http[s]*[\:]/gi, '')),
			(h.innerHTML = '(comments)'),
			(h.style.cssText = 'float:right; display:block; clear:none; margin:0px; outline:none; padding:0px;'),
			(h = l.appendChild(h))),
		(tt = document.createElement('DIV')),
		(tt.style.clear = 'both'),
		(tt.style.height = '0px'),
		l.appendChild(tt),
		!t && ((n + '').indexOf('.') != -1 || qp_oID('qp_main' + n + '.1')))
	)
		for (it = document.querySelectorAll("DIV[id^='qp_main" + n.split('.')[0] + "']"), i = 0; i < it.length; i++)
			(ht = it[i].id.replace(/qp_main/, '')), ht != n && it[i].initf && qp_h(ht, 1);
}