var e = document;
export function _getCookie(a) {
	if (!e.cookie) return '';
	var b;
	return (b = e.cookie.match(RegExp('(^| )' + a + '=([^;]*)(;|$)'))) ? unescape(b[2]) : '';
}