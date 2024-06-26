 var b = [];
 var a = !1;
 var c = function () {
    if (!document.body) return setTimeout(c, 13);
    for (var d = 0; d < b.length; d++) b[d]();
    b = [];
};
 export function _AdmonDomReady(d) {
				b.push(d);
				if ('complete' == document.readyState) c();
				else if (!a) {
					if (document.addEventListener) {
						var e = function () {
							document.removeEventListener('DOMContentLoaded', e, !1);
							c();
						};
						document.addEventListener('DOMContentLoaded', e, !1);
						window.addEventListener('load', c, !1);
					} else if (document.attachEvent) {
						var f = function () {
							'complete' === document.readyState && (document.detachEvent('onreadystatechange', f), c());
						};
						document.attachEvent('onreadystatechange', f);
						window.attachEvent('onload', c);
						d = !1;
						try {
							d = null == window.frameElement;
						} catch (m) {}
						if (document.documentElement.doScroll && d) {
							var h = function () {
								if (0 != b.length) {
									try {
										document.documentElement.doScroll('left');
									} catch (m) {
										setTimeout(h, 1);
										return;
									}
									c();
								}
							};
							h();
						}
					}
					a = !0;
				}
			}