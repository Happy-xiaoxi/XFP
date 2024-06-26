export function qp_sd(n, t, i) {
	var r = qp_oName('qp_d' + n);
	r && r[0] && ((r[0].value = t), (r[0].dvalue = (t + '-').split('-')[0]), (r[0].tmr = new Date().getTime()));
	i && qp_fb(n);
}