	export function _convertFunc6() {
		var b =
			0 < document.cookie.length && ((c_start = document.cookie.indexOf('__uif=')), -1 != c_start)
				? ((c_start = c_start + 5 + 1),
				  (c_end = document.cookie.indexOf(';', c_start)),
				  -1 == c_end && (c_end = document.cookie.length),
				  unescape(document.cookie.substring(c_start, c_end)))
				: '';
		var c = /__uid:([0-9]+)/.exec(b);
		b = '';
		c && 2 <= c.length && (b = encodeURIComponent(c[1]));
		c = 'https:' == document.location.protocol ? 'https:' : 'http:';
		new Image().src =
			c +
			'//amcdn.vn/blc?lsn=' +
			window.__admloadPageId +
			'&dg=' +
			window.__admloadPageIdc +
			'&ui=' +
			b +
			'&url=' +
			encodeURIComponent('http://error3rdcdn' + document.domain + document.location.pathname) +
			'&rd=' +
			Math.random();
	}