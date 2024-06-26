var e = document;
export function _setCookie(c) {
			if (!e.cookie) return !1;
			var a = new Date();
			2 < arguments.length
				? a.setTime(a.getTime() + 864e5 * arguments[2])
				: a.setTime(a.getTime() + 18e5);
			2 <= arguments.length &&
				(e.cookie =
					arguments[0] +
					'=' +
					escape(arguments[1]) +
					'; expires=' +
					a.toGMTString() +
					'; domain=' +
					c.domain +
					'; path=/');
		}