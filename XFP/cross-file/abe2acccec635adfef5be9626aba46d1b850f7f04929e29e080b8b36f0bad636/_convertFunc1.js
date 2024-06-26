export function _convertFunc1() {
	var a = (function () {
		try {
			if (!('localStorage' in window && null !== window.localStorage)) return !1;
			try {
				localStorage.setItem('_admstorage', ''), localStorage.removeItem('_admstorage');
			} catch (e) {
				return !1;
			}
			return !0;
		} catch (e) {
			return !1;
		}
	})();
	({
		version: '1.0.0',
		paramFlash: {},
		lcStorage: {
			timestamp: 'timestamp_',
			get_exprises: function (e, t, i, a) {
				return (
					(t = (e += '').indexOf(t, i)),
					(i = e.length - 1),
					-1 != t ? (-1 == (a = e.indexOf(a, t)) && (a = i), e.substring(t, a)) : ''
				);
			},
			get_item: function (e, t) {
				var i,
					a = localStorage.getItem(e),
					o = new Date().getTime(),
					n = this.timestamp;
				return '' == a || null == a
					? ''
					: -1 == a.indexOf('timestamp_')
					? a
					: '' == (i = (i = this.get_exprises(a, n, 0, (e = '_azs' == e ? ';' : ','))).replace(n, '')) ||
					  isNaN(parseInt(i)) ||
					  parseInt(i) < o
					? ''
					: a.replace(n + i + e, '');
			},
		},
		getDomainGuid: function () {
			var e = window.__admloadPageIdc || window.__admloadPageRdIdc || this.createDomainGuid();
			return (
				window.__admloadPageIdc || (window.__admloadPageIdc = e),
				window.__admloadPageRdIdc || (window.__admloadPageRdIdc = e),
				e
			);
		},
		makeDomainGuid: function () {
			function e(e) {
				return (
					void 0 !== e && e && 2 == e
						? Math.floor(256 * (1 + Math.random()))
						: Math.floor(65536 * (1 + Math.random()))
				)
					.toString(16)
					.substring(1);
			}
			return '01' + Math.floor(new Date().getTime() / 1e3).toString(16) + e(2) + e(4) + e(4) + e(4) + e(4) + e(4);
		},
		createDomainGuid: function () {
			var e = '',
				t = this.getCookie('__uidac');
			return (
				a &&
					'' == (e = localStorage.__uidac || t) &&
					((e = this.makeDomainGuid()),
					(localStorage.__uidac = e),
					(window.__admloadPageIdc = e),
					(window.__admloadPageRdIdc = e),
					this.setCookie('__uidac', e, 2e3, '/', '.' + document.domain)),
				'' == e &&
					((e = this.makeDomainGuid()),
					this.setCookie('__uidac', e, 2e3, '/', '.' + document.domain),
					(window.__admloadPageIdc = e),
					(window.__admloadPageRdIdc = e)),
				e
			);
		},
		setCookie: function (e, t, i, a, o, n) {
			for (var r in (new Date().getTime(),
			(i = (
				0 == i || '' == i ? new Date(+new Date() + 63072e7) : new Date(+new Date() + 864e5 * i)
			).toGMTString()),
			(e = [e + '=' + escape(t)]),
			(i = { expires: i, path: '/', domain: o })))
				i[r] && e.push(r + '=' + i[r]);
			return n && e.push('secure'), (document.cookie = e.join(';')), !0;
		},
		getCookie: function (e) {
			var i = e + '=',
				a = window.unescape(document.cookie).split(';');
			for (let t = 0; t < a.length; t++) {
				let e = a[t];
				for (; ' ' == e.charAt(0); ) e = e.substring(1);
				if (0 == e.indexOf(i)) return e.substring(i.length, e.length);
			}
			return '';
		},
		get: function (e) {
			if ('__uidac' == e) return this.getDomainGuid();
			var t = '',
				i = e;
			if (
				(('__ui' != e && '__uid' != e && '__create' != e) || ((i = e), (e = '__uif')),
				'__uif' == e &&
					'' != (t = a && null != (t = localStorage.__uif) && '' != t ? t : this.getCookie('__uif')))
			) {
				var e = new RegExp(i + ':([0-9+%C]+)').exec(t);
				if (e && 1 < e.length) return (t = e[1]) || '';
			}
			return (
				(t =
					'' == (t = a && (e = localStorage[i]) && '' != e ? e.replace(/timestamp_[0-9]+?,/g, '') : t)
						? this.getCookie(i)
						: t) || ''
			);
		},
		getParam: function () {
			try {
				var e = this.get('__create') || this.getCookie('__create'),
					t = this.get('__uid') || this.getCookie('__uid');
				return (
					11 < (e = '' == (t = 30 < t.length ? '' : t) ? '' : e).length &&
						'' != t &&
						(e = Math.floor(new Date().getTime() / 1e3)),
					'&ce=1&lc=' +
						this.get('__RC') +
						'&cr=' +
						e +
						'&ui=' +
						t +
						'&dg=' +
						(this.get('__uidac') || this.getCookie('__uidac'))
				);
			} catch (e) {
				return '';
			}
		},
		getInfoParam: function () {
			return (
				`&ce=1&guie=1&ui=${this.get('__uid')}&cr=${this.get('__create')}&dg=` +
				(this.get('__uidac') || this.getCookie('__uidac'))
			);
		},
	}).get('__uidac');
}