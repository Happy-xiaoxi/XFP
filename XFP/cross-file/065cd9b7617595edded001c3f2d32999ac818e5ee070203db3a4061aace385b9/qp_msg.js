export function qp_msg(n, t, i) {
	var f = qp_oID('qp_ww' + n),
		r,
		u;
	f && (f.style.display = 'none');
	var e = qp_oID('qp_form' + n),
		o = qp_oID('qp_main' + n),
		s = o.getElementsByTagName('DIV')[0];
	e.getElementsByTagName('DIV')[0].style.visibility = 'hidden';
	r = document.createElement('DIV');
	r.id = 'qp_msg' + n;
	r.style.cssText =
		'position:absolute; padding-left:10px; font-family:' +
		s.style.fontFamily +
		'; font-size:' +
		s.style.fontSize +
		';';
	try {
		r.style.cssText = qp_oID('qp_rb_' + n).style.cssText;
	} catch (h) {}
	r.innerHTML = t;
	o.insertBefore(r, e);
	u = qp_oName('qp_b' + n);
	u[0].parentNode.style.display = 'none';
	u[1] && (i ? (u[1].parentNode.style.visibility = 'hidden') : (u[1].style.display = ''));
}