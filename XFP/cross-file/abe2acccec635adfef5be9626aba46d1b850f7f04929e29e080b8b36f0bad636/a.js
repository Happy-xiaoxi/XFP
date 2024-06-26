var c_start,c_end;

export function a(h) {
			return 0 < document.cookie.length && ((c_start = document.cookie.indexOf(h + '=')), -1 != c_start)
				? ((c_start = c_start + h.length + 1),
				  (c_end = document.cookie.indexOf(';', c_start)),
				  -1 == c_end && (c_end = document.cookie.length),
				  unescape(document.cookie.substring(c_start, c_end)))
				: '';
		}