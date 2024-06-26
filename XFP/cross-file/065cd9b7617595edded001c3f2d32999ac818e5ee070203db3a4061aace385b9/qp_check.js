export function qp_check(n) {
	for (var i = document.cookie.split('; '), t = 0; t < i.length; t++) if (i[t] == n + '=1') return !0;
	return !1;
}