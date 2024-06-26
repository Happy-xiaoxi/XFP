export function qp_date(n, t, i, r) {
	var u = new Date();
	u.setTime(((t - 25569) * 24 - i) * 36e5);
	u.getSeconds() == 59 && u.setTime(u.getTime() + 1e3);
	qp_msg(n, 'This poll ' + (r == 'e' ? 'has ended at ' : 'will start at ') + u.toLocaleString(), r == 's' ? 1 : 0);
}