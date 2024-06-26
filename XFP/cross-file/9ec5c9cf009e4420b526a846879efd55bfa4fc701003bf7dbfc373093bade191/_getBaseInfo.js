var d = window;
export function _getBaseInfo(c) {
			var a = d.site_name || '58che',
				b = d.encodeURIComponent(c.referrer),
				e = c.getUUID('58tj_uuid'),
				g = c.window_size,
				h = c.navigation_type,
				s = c.getCookie('als'),
				f = d._trackURL || 'NA',
				k,
				m,
				n;
			'' != c.getCookie('new_session')
				? ((k = c.getCookie('init_refer')), (m = '0'))
				: ((k = d.encodeURIComponent(c.referrer)), (m = '1'));
			n = '' != c.getCookie('new_uv') ? parseInt(c.getCookie('new_uv')) + ('0' == m ? 0 : 1) : 1;
			c.setCookie('new_session', m);
			c.setCookie('init_refer', k);
			c.setCookie('new_uv', n, 365);
			var l = '1.1.1.1.1.' + n,
				p = [],
				r = f.indexOf('{'),
				h = { als: s, new_session: m, init_refer: k, new_uv: n, UUID: e, navtype: h },
				q;
			for (q in h) h.hasOwnProperty(q) && p.push("'" + q + "':'" + h[q] + "'");
			p.join(',');
			f = 'NA' !== f && -1 !== r ? f.substring(0, r + 1) + p + ',' + f.substring(r + 1) : '{' + p + '}';
			return { site_name: a, referrer: b, UUID: e, window_size: g, _ga_utma: l, trackURL: f };
		}