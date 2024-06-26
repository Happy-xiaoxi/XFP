export function qp_results(n, t, i, r) {
	var f, u;
	try {
		n = n ? n : event;
		f = n.target ? n.target : n.srcElement;
	} catch (e) {}
	if (((t = t ? t : f.f), (i = i ? i : f.fp), qp_oID('qp_form' + t).qpfb)) return !0;
	u = document.createElement('SCRIPT');
	u.charset = 'utf-8';
	qp_ae(
		u,
		'load',
		(function (n) {
			return function () {
				qp_ls(n, 3);
			};
		})(t)
	);
	u.src =
		i.indexOf('-') == -1
			? '//' +
			  qp_dm(t) +
			  '/pmvote/Inventory.Poll_Results_' +
			  (qpPV ? 'Fake' : 'Inline') +
			  '&qp=' +
			  i +
			  (r ? '&fr=1' : '') +
			  '&tt=0'
			: '//' +
			  qp_dm(t) +
			  '/pmvote/Poll.Results_' +
			  (qpPV ? 'Fake' : 'Inline') +
			  '&qp=' +
			  i +
			  (r ? '&fr=1' : '') +
			  (qpHH ? '&hosted=y' : '') +
			  '&tt=0' +
			  ((t + '').indexOf('.') != -1 ? '&dup=' + t.split('.')[1] : '');
	r || qp_h(t);
	qp_oTag('HEAD')[0].appendChild(u);
}