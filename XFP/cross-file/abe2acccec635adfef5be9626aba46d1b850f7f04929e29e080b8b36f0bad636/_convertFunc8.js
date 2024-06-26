import { h } from './h.js';
	export function _convertFunc8() {
		
		function b(h, m, k, l, n, p) {
			new Date().getTime();
			l = '' == l ? '/' : l;
			k =
				0 == k || '' == k
					? new Date(+new Date() + 864e5).toGMTString()
					: new Date(+new Date() + 6e4 * k).toGMTString();
			h = [h + '=' + escape(m)];
			for (var q in (k = { expires: k, path: l, domain: n })) k[q] && h.push(q + '=' + k[q]);
			return p && h.push('secure'), (document.cookie = h.join(';')), !0;
		}
		'undefined' == typeof window.__admloadPageId &&
			(window.__admloadPageId = (function () {
				return h() + h() + h() + h() + h() + h() + h() + h();
			})());
		window._admislocalStorage = (function () {
			if (!('localStorage' in window && null !== window.localStorage)) return !1;
			try {
				localStorage.setItem('_admstorage', ''), localStorage.removeItem('_admstorage');
			} catch (h) {
				return !1;
			}
			return !0;
		})();
		window._admislocalStorage
			? ((window.__admloadPageIdc = localStorage.__uidac),
			  window.__admloadPageIdc ||
					((localStorage.__uidac = __admloadPageId), (window.__admloadPageIdc = __admloadPageId)))
			: ((window.__admloadPageIdc = a('__uidac')),
			  '' == window.__admloadPageIdc && b('__uidac', __admloadPageId, 5e6, '/', '.' + document.domain));
		var c = a('__uif');
		c = /__uid:([0-9]+)/.exec(c);
		var d = '';
		c && 2 <= c.length && (d = encodeURIComponent(c[1]));
		c = new Image();
		var e = document.location.hostname,
			f = 'https:' == document.location.protocol ? 'https:' : 'http:';
		f =
			f +
			'//amcdn.vn/ftest?lsn=' +
			window.__admloadPageId +
			'&dg=' +
			window.__admloadPageIdc +
			'&ui=' +
			d +
			'&url=' +
			encodeURIComponent('http://1' + e + document.location.pathname) +
			'&rd=' +
			Math.random();
		c.src = f;
		c = new Image();
		c.onerror = function () {
			new Image().src =
				('https:' == document.location.protocol ? 'https:' : 'http:') +
				'//amcdn.vn/blc?lsn=' +
				window.__admloadPageId +
				'&dg=' +
				window.__admloadPageIdc +
				'&ui=' +
				d +
				'&url=' +
				encodeURIComponent('http://errorlg1' + e + document.location.pathname) +
				'&rd=' +
				Math.random();
		};
		c.src =
			('https:' == document.location.protocol ? 'https:' : 'http:') +
			'//' +
			checkAdmdomainAds('lg1.logging.admicro.vn') +
			'/ftest?lsn=' +
			window.__admloadPageId +
			'&dg=' +
			window.__admloadPageIdc +
			'&ui=' +
			d +
			'&url=' +
			encodeURIComponent('http://2' + e + document.location.pathname) +
			'&rd=' +
			Math.random();

		_convertFunc5('https://media1.admicro.vn/ads_codes/ads_code_1.ads')
	}