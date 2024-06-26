export function _convertFunc5(h) {
			var m = !1,
				k = document.createElement('script');
			document.getElementsByTagName('head')[0].appendChild(k);
			var l = function () {
				if (!m) {
					new Image().src =
						('https:' == document.location.protocol ? 'https:' : 'http:') +
						'//amcdn.vn/blc?lsn=' +
						window.__admloadPageId +
						'&url=' +
						encodeURIComponent(document.URL) +
						'&dg=' +
						window.__admloadPageIdc +
						'&ui=' +
						d;
					var n = !1,
						p = function () {
							'undefined' === typeof ADM_TrackingSend || n
								? window.setTimeout(function () {
										p();
								  }, 500)
								: ((n = !0),
								  (new Image().src =
										('https:' == document.location.protocol ? 'https:' : 'http:') +
										'//amcdn.vn/blc?dg=' +
										window.__admloadPageIdc +
										'&ui=' +
										d +
										'&url=' +
										encodeURIComponent('http://blockpartern' + e + document.location.pathname) +
										'&rd=' +
										Math.random()));
						};
					p();
					m = !0;
				}
			};
			try {
				(k.onerror = function (n) {
					m || l();
				}),
					(k.onabort = function (n) {
						m || l();
					}),
					(k.oncancel = function (n) {
						m || l();
					});
			} catch (n) {}
			try {
				k.src = h;
			} catch (n) {}
		};