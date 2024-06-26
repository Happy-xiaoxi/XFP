export function _convertFunc3(b) {
	if (b == null || b == undefined) {
		return;
	}
	var a = {};
	a.VERSION = '0.0.1';
	a.isBlank = function (c) {
		return c == undefined || c == null || c.length == 0;
	};
	a.stringify = function (c) {
		return JSON.stringify(c);
	};
	a.getCookie = function (d) {
		if (!d) {
			return '';
		}
		if (document.cookie.length > 0) {
			var e = document.cookie.indexOf(d + '=');
			if (e != -1) {
				e = e + d.length + 1;
				var c = document.cookie.indexOf(';', e);
				if (c == -1) {
					c = document.cookie.length;
				}
				return decodeURIComponent(document.cookie.substring(e, c));
			}
		}
		return '';
	};
	a.getMasterDomain = function () {
		var c = location.hostname.split('.');
		return c
			.slice(0)
			.slice(-(c.length === 4 ? 3 : 2))
			.join('.');
	};
	a.setCookie = function (d, e, c) {
		if (!d) {
			return;
		}
		var g = new Date();
		g.setDate(g.getDate() + c);
		document.cookie =
			d + '=' + e + '; expires=' + g + '; domain=.' + a.getMasterDomain() + '; path=/; Secure; SameSite=None;';
	};
	a.setCookieHour = function (d, e, c) {
		if (!d) {
			return;
		}
		var g = new Date();
		g.setHours(g.getHours() + c);
		document.cookie =
			d + '=' + e + '; expires=' + g + '; domain=.' + a.getMasterDomain() + '; path=/; Secure; SameSite=None;';
	};
	a.delCookie = function (c) {
		if (!c) {
			return;
		}
		var d = new Date();
		d.setSeconds(d.getSeconds() + 1);
		document.cookie =
			c + '=; expires=' + d + '; domain=.' + a.getMasterDomain() + '; path=/; Secure; SameSite=None;';
	};
	a.wait = function (k, h, j, c) {
		var e = j || -1,
			d = c || 20,
			g;
		if (window[h]) {
			k.call();
		} else {
			g = setInterval(function () {
				if (!e) {
					clearInterval(g);
				}
				e <= 0 || e--;
				if (window[h]) {
					clearInterval(g);
					k.call();
				}
			}, d);
		}
	};
	a.clone = function (d) {
		var e = d instanceof Array ? [] : {};
		for (var c in d) {
			if (!d.hasOwnProperty(c)) {
				continue;
			}
			e[c] = d[c];
		}
		return e;
	};
	a.getTimezone = function () {
		var d = new Date().getTimezoneOffset();
		var c = d < 0 ? '+' : '-';
		d = Math.abs(d);
		return 'UTC' + c + ((d / 60) | 0);
	};
	a.getTime = function () {
		var d = new Date();
		var h = d.getFullYear();
		var j = d.getMonth() + 1;
		var c = d.getDate();
		var g = d.getHours();
		var k = d.getMinutes();
		var e = d.getSeconds();
		return h + '-' + j + '-' + c + ' ' + g + ':' + k + ':' + e;
	};
	a.ajax = function (j, c, e, l, g) {
		var m = null;
		if (window.XMLHttpRequest) {
			m = new XMLHttpRequest();
		} else {
			m = new ActiveXObject('Microsoft.XMLHTTP');
		}
		var j = j.toUpperCase();
		var d = Math.random();
		if (typeof e == 'object') {
			var h = '';
			for (var k in e) {
				h += k + '=' + e[k] + '&';
			}
			e = h.replace(/&$/, '');
		}
		if (j == 'GET') {
			if (e) {
				m.open('GET', c + '?' + e, true);
			} else {
				m.open('GET', c + '', true);
			}
			m.withCredentials = true;
			m.send();
		} else {
			if (j == 'POST') {
				m.open('POST', c, true);
				m.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				m.withCredentials = true;
				m.send(e);
			}
		}
		m.onreadystatechange = function () {
			if (m.readyState == 4) {
				if (m.status == 200) {
					if (l) {
						l(m.responseText);
					}
				} else {
					if (g) {
						g(m.status);
					}
				}
			}
		};
	};
	a.guid = function () {
		var e = new Date().getTime();
		var c = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (g) {
			var d = Math.random() * 16;
			if (e > 0) {
				d = (e + d) % 16 | 0;
				e = Math.floor(e / 16);
			} else {
				d = (c + d) % 16 | 0;
				c = Math.floor(c / 16);
			}
			return (g === 'x' ? d : (d & 3) | 8).toString(16);
		});
	};
	a.load = function (c) {
		if (
			document.readyState == 'complete' ||
			(document.readyState != 'loading' && !document.documentElement.doScroll)
		) {
			c();
		} else {
			document.addEventListener('DOMContentLoaded', c);
		}
	};
	a.thirdCookie = function () {
		var c = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		return !(c && !!document.hasStorageAccess);
	};
	a.fixedEncodeURIComponent = function (c) {
		return encodeURIComponent(c).replace(/[!'()*]/g, function (d) {
			return '%' + d.charCodeAt(0).toString(16);
		});
	};
	b.util = a;
}