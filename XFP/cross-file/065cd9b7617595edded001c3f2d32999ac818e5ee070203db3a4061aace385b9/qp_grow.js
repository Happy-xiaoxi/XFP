export function qp_grow(n, t, i) {
	t = (t = t + 4) > 100 ? 100 : t;
	qp_oID(n).style.width = Math.round(i * (t / 100)) + '%';
	t < 100 && setTimeout("qp_grow('" + n + "'," + t + ',' + i + ')', 1);
}