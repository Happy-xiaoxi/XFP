import { _convertFunc1 } from "./_convertFunc1.js";
import { _convertFunc2 } from "./_convertFunc2.js";
import { _convertFunc3 } from "./_convertFunc3.js";
import { _convertFunc4 } from "./_convertFunc4.js";
import { _convertFunc5 } from "./_convertFunc5.js";
import { _convertFunc6 } from "./_convertFunc6.js";
import { _convertFunc7 } from "./_convertFunc7.js";
import { _convertFunc8 } from "./_convertFunc8.js";
import { a } from "./a.js";

import { _ADMTrackingsend } from "./_ADMTrackingsend.js";
import { _AdmonDomReady } from "./_AdmonDomReady.js";


var c_start,c_end;

_convertFunc1();
_convertFunc2();
_convertFunc7();

function _wdHeight() {
	var a,
		b = document;
	'number' == typeof window.innerWidth
		? (a = window.innerHeight)
		: b.documentElement && b.documentElement.clientHeight
		? (a = b.documentElement.clientHeight)
		: b.body && b.body.clientHeight && (a = b.body.clientHeight);
	return a;
}

window.checkAdmdomainAds = function (a) {
	var b = navigator.userAgent + '';
	if (-1 != b.indexOf('Firefox') || -1 != b.indexOf('coc_coc'))
		a = a.replace('lg1.logging.admicro.vn', 'contineljs.com');
	return a;
};
'undefined' == typeof AMCDNCheckSend &&
	((window.AMCDNCheckSend = 'send'),
	_convertFunc8())
try {
	var _admloadJs1 = function (a, b) {
			var c = document.createElement('script');
			c.type = 'text/javascript';
			c.src = a;
			2 <= arguments.length &&
				((c.onload = b),
				(c.onreadystatechange = function () {
					(4 != c.readyState && 'complete' != c.readyState) || b();
				}));
			document.getElementsByTagName('head')[0].appendChild(c);
		},
		ADM_TrackingSend$1 = function () {
			if ('undefined' != typeof __ADM_TrackingSend && !0 === __ADM_TrackingSend) return !1;
			ADM_AdsTracking.checkBrowser();
			var a = '',
				b = 0;
			window._AdmGetGa = function () {
				return '';
			};
			window._AdmGetGa = function () {
				var d = '';
				try {
					var e = window.performance || window.webkitPerformance;
					if ((e = e && e.timing)) {
						var f = e.navigationStart;
						d =
							';' +
							[
								e.loadEventStart - f,
								e.domainLookupEnd - e.domainLookupStart,
								e.connectEnd - e.connectStart,
								e.responseStart - e.requestStart,
								e.responseEnd - e.responseStart,
								e.fetchStart - f,
								e.domInteractive - f,
								e.domContentLoadedEventStart - f,
							].join(';');
					}
					return ';' + ADM_AdsTracking.getCookie('_ga') + d;
				} catch (h) {}
				return '';
			};
			a = '//' + checkAdmdomainAds('lg1.logging.admicro.vn') + '/_tracking1.gif?dg=' + __admloadPageIdc;
			a += '&fl=' + paramBrowser.flashVersion();
			a += '&je=' + paramBrowser.javaEnabled;
			a += '&sr=' + paramBrowser.screen_Resolution;
			a += '&sc=' + paramBrowser.screen_Color;
			a += '&hn=' + paramBrowser.hostname;
			a += '&p=' + paramBrowser.zenURL.encode(paramBrowser.url());
			a +=
				'&r=' +
				('' == paramBrowser.referrer
					? paramBrowser.referrer
					: paramBrowser.zenURL.encode(paramBrowser.referrer));
			a =
				'undefined' != typeof _Analytics_Channel && '' != _Analytics_Channel
					? a + ('&cat=' + encodeURIComponent(decodeURIComponent(_Analytics_Channel)))
					: 'undefined' != typeof _ADM_Channel && '' != _ADM_Channel
					? a + ('&cat=' + encodeURIComponent(decodeURIComponent(_ADM_Channel)))
					: a + '&cat=';
			try {
				var c = window.self !== window.top;
			} catch (d) {
				c = !0;
			}
			c = c ? 1 : 0;
			-1 != paramBrowser.hostname.indexOf('enbac.com') &&
				(b = '' != ADM_AdsTracking.getCookie('province_id') ? ADM_AdsTracking.getCookie('province_id') : 0);
			-1 != paramBrowser.hostname.indexOf('rongbay.com') &&
				(b = '' != ADM_AdsTracking.getCookie('cityid') ? ADM_AdsTracking.getCookie('cityid') : 0);
			-1 != paramBrowser.hostname.indexOf('muachung.vn') &&
				(b =
					'' != ADM_AdsTracking.getCookie('muachung_cityMC')
						? ADM_AdsTracking.getCookie('muachung_cityMC')
						: 0);
			window.__ifr = c;
			window.__ADM_TrackingSend = !0;
			window.__ADMScrollcounter = 0;
			window.__ADMScrollEnd = 0;
			window.__ADMTrackingSendUrl = a + ('&g=' + b);
			window.__ADMTouch = 0;
			window.__ADMMouse = 0;
			window.__ADMisActive = 0;
			window.__ADMTimeTk = Math.floor(new Date().getTime() / 1e3);
			try {
				__ADMwdVis() && (window.__ADMisActive = 1);
			} catch (d) {}
			ADMTrackingsend('s');
			ADMTrackingsend('v');
			admaddEventListener(window, 'scroll', function () {
				window.__ADMScrollcounter += 1;
				0 > wPrototype.bdHeight() - (wPrototype.scrollTop() + wPrototype.wdHeight() + 100) &&
					(window.__ADMScrollEnd = 1);
			});
			admaddEventListener(window, 'blur', function () {
				__ADMisActive = 0;
			});
			admaddEventListener(window, 'focus', function () {
				__ADMisActive = 1;
			});
			'ontouchstart' in window &&
				admaddEventListener(document, 'touchmove', function (d) {
					__ADMTouch++;
				});
			admaddEventListener(document, 'mousemove', function (d) {
				__ADMMouse++;
			});
			window.setTimeout(function () {
				var d,
					e = '',
					f = {
						hidden: 'visibilitychange',
						webkitHidden: 'webkitvisibilitychange',
						mozHidden: 'mozvisibilitychange',
						msHidden: 'msvisibilitychange',
					};
				for (d in f)
					if (d in document) {
						var h = f[d];
						e = d;
						break;
					}
				document.addEventListener(h, function () {
					__ADMisActive = document[e] ? 0 : 1;
					ADMTrackingsend('p');
				});
			}, 5e3);
			chkadmTrackingt = window.setTimeout(function () {
				ADM_TrackingSendChk();
			}, 2e4);
			if ('beforeunload' in window || 'onbeforeunload' in window)
				-1 != navigator.userAgent.indexOf('Firefox')
					? admaddEventListener(window, 'unload', function () {
							ADMTrackingsend('e');
					  })
					: admaddEventListener(window, 'beforeunload', function () {
							ADMTrackingsend('e');
					  });
		},
		ADMTrackingsend = _ADMTrackingsend,
		ADM_TrackingSendChk = _ADM_TrackingSendChk,
		admRemoveEventListener = function (a, b, c) {
			'removeEventListener' in a
				? a.removeEventListener(b, c)
				: 'detachEvent ' in a && a.detachEvent('on' + b, c);
		},
		admaddEventListener = function (a, b, c) {
			'addEventListener' in a ? a.addEventListener(b, c) : 'attachEvent' in a && a.attachEvent('on' + b, c);
		};
	if ('undefined' == typeof logposurlview) var logposurlview = '';
	if ('undefined' == typeof chkadmTrackingt) var chkadmTrackingt;
	if ('undefined' == typeof __admPageloadid) var __admPageloadid = new Date().getTime();

	if (void 0 === ADM_AdsTracking)
		var ADM_AdsTracking = {
			version: '1.0.0',
			paramFlash: {},
			getFlashMovie: function (a) {
				return -1 != navigator.appName.indexOf('Microsoft') ? document.getElementById(a) : document[a];
			},
			checkBrowser: function () {
				var a = !1;
				var b = navigator.appName;
				var c = navigator.userAgent + '',
					d,
					e = c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				null == e && -1 == c.indexOf('MSIE') && -1 != c.indexOf('Trident/')
					? ((b = -1),
					  null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c) && (b = RegExp.$1),
					  (e = ['MSIE', b + '']))
					: (e && null != (d = c.match(/version\/([\.\d]+)/i)) && (e[2] = d[1]),
					  (e = e ? [e[1], e[2]] : [b, navigator.appVersion, '-?']));
				b = e;
				'undefined' != typeof b &&
					null != b &&
					1 <= b.length &&
					((c = (b[0] + '').toLowerCase()),
					(b = b[1].split('.')),
					(b = parseInt(b[0])),
					(('firefox' == c && 22 <= b) ||
						('msie' == c && 10 <= b) ||
						('safari' == c && 5 <= b) ||
						'chrome' == c) &&
						_admislocalStorage &&
						(a = !0));
				return a;
			},
			fonts: '',
			getFont: function (a) {
				ADM_AdsTracking.fonts = a;
			},
			lcStorage: {
				timestamp: 'timestamp_',
				get_exprises: function (a, b, c, d) {
					a += '';
					b = a.indexOf(b, c);
					c = a.length - 1;
					return -1 != b ? ((d = a.indexOf(d, b)), -1 == d && (d = c), a.substring(b, d)) : '';
				},
				set_item: function (a, b, c) {
					var d = new Date().getTime(),
						e = this.timestamp;
					d = 0 == c || '' == c ? d + 63072e7 : d + 864e5 * c;
					var f = '_azs' == a ? ';' : ',';
					c = this.get_exprises(b, e, 0, f);
					b = '' == c ? b + (e + d.toString() + f) : b.replace(c, e + d.toString());
					localStorage.setItem(a, b);
				},
				get_item: function (a, b) {
					var c = localStorage.getItem(a),
						d = new Date().getTime(),
						e = this.timestamp;
					if ('' == c || null == c) return '';
					endchar = '_azs' == a ? ';' : ',';
					var f = this.get_exprises(c, e, 0, endchar);
					f = f.replace(e, '');
					return '' == f || isNaN(parseInt(f)) || parseInt(f) < d ? '' : c.replace(e + f + endchar, '');
				},
				remove_item: function (a) {
					localStorage.removeItem(a);
				},
				flush: function () {
					localStorage.clear();
				},
			},
			setCookie: function (a, b, c, d, e, f) {
				new Date().getTime();
				d = '/';
				c =
					0 == c || '' == c
						? new Date(+new Date() + 63072e7).toGMTString()
						: new Date(+new Date() + 864e5 * c).toGMTString();
				a = [a + '=' + escape(b)];
				for (var h in (c = { expires: c, path: d, domain: e })) c[h] && a.push(h + '=' + c[h]);
				return f && a.push('secure'), (document.cookie = a.join(';')), !0;
			},
			getCookie: function (a) {
				return 0 < document.cookie.length && ((c_start = document.cookie.indexOf(a + '=')), -1 != c_start)
					? ((c_start = c_start + a.length + 1),
					  (c_end = document.cookie.indexOf(';', c_start)),
					  -1 == c_end && (c_end = document.cookie.length),
					  unescape(document.cookie.substring(c_start, c_end)))
					: '';
			},
			get: function (a) {
				var b = '',
					c = '';
				if ('__ui' == a || '__uid' == a || '__create' == a) (c = a), (a = '__uif');
				if (_admislocalStorage) {
					if ('__R' == a || '__RC' == a || '__uif' == a) b = ADM_AdsTracking.getCookie(a);
					if (null == b || '' == b)
						(b = ADM_AdsTracking.lcStorage.get_item(a)),
							null != b && '' != b && ADM_AdsTracking.setCookie(a, b, '');
				} else b = ADM_AdsTracking.getCookie(a);
				if ('' != c && '' != b) {
					a = b.split('|');
					for (var d = 0, e = a.length; d < e; d++)
						if (-1 != a[d].indexOf(c + ':')) {
							b = a[d].replace(c + ':', '');
							break;
						}
				}
				return b;
			},
			set: function (a, b, c) {
				if (_admislocalStorage) {
					if ((ADM_AdsTracking.lcStorage.set_item(a, b, c), '__R' == a || '__RC' == a || '__uif' == a))
						'__R' == a &&
							'undefined' != typeof ADS_Location &&
							ADS_Location != b &&
							'' != b &&
							'0' != b &&
							(ADS_Location = parseInt(b)),
							'__RC' == a &&
								'undefined' != typeof ADS_City &&
								ADS_City != b &&
								'' != b &&
								'0' != b &&
								(ADS_City = parseInt(b)),
							ADM_AdsTracking.setCookie(a, b, c);
				} else ADM_AdsTracking.setCookie(a, b, c);
			},
			getParam: function () {
				if (ADM_AdsTracking.checkBrowser()) {
					var a = ADM_AdsTracking.get('__create') + '',
						b = ADM_AdsTracking.get('__uid') + '';
					30 < b.length && (b = '');
					'' == b && (a = '');
					11 < a.length && '' != b && (a = Math.floor(new Date().getTime() / 1e3));
					return '&ce=1&lc=' + ADM_AdsTracking.get('__RC') + '&cr=' + a + '&ui=' + b;
				}
				return '';
			},
			getInfoParam: function () {
				if (ADM_AdsTracking.checkBrowser()) return '';
				var a = ADM_AdsTracking.get('__uid'),
					b = ADM_AdsTracking.get('__create');
				return '&ce=1&guie=1&__uid=' + a + '&__create=' + b;
			},
			flashcheck: function (a) {
				for (var b in a) ADM_AdsTracking.check(b, a[b], !0);
			},
			expireAllCookies: function (a, b) {
				var c = new Date(0).toUTCString();
				document.cookie = a + '=; expires=' + c;
				for (var d = 0, e = b.length; d < e; d++) document.cookie = a + '=; path=' + b[d] + '; expires=' + c;
			},
			expireActiveCookies: function (a) {
				for (
					var b = location.pathname.replace(/\/$/, '').split('/'), c = [], d = 0, e = b.length, f;
					d < e;
					d++
				)
					(f = b.slice(0, d + 1).join('/')),
						(f = f.replace(/\.([\w]+)/gi, '')),
						'' != f && (c.push(f), c.push(f + '/'));
				0 < c.length && ADM_AdsTracking.expireAllCookies(a, c);
			},
			check: function (a, b) {
				switch (a) {
					case '__ui':
					case '__uid':
					case '__create':
						if ((2 == arguments.length && '__uid' == a) || ('__create' == a && '' != b)) {
							ADM_AdsTracking.paramFlash[a] = b;
							var c = ADM_AdsTracking.getFlashMovie('_admFlck');
							c && c.setck && c.setck(ADM_AdsTracking.paramFlash);
						}
						var d = ADM_AdsTracking.get('__uif') + '';
						if ('' == d) d = a + ':' + b;
						else {
							c = a + ':' + b;
							d = d.split('|');
							for (var e = [], f = 0, h = d.length; f < h; f++)
								-1 == d[f].indexOf(a + ':') && e.push(d[f]);
							e.push(c);
							d = e.join('|');
						}
						ADM_AdsTracking.set('__uif', d, 10);
						break;
					default:
						(d = ADM_AdsTracking.get(a)),
							2 == arguments.length &&
								'' != b &&
								'0' != b &&
								'-1' != b &&
								((ADM_AdsTracking.paramFlash[a] = b),
								(c = ADM_AdsTracking.getFlashMovie('_admFlck')) &&
									c.setck &&
									c.setck(ADM_AdsTracking.paramFlash)),
							d != b && ADM_AdsTracking.set(a, b, '');
				}
			},
		};
	if ('undefined' == typeof admaddEventListener)
		var admaddEventListener$7 = function (a, b, c) {
			'addEventListener' in a ? a.addEventListener(b, c) : 'attachEvent' in a && a.attachEvent('on' + b, c);
		};
	if ('undefined' == typeof wPrototype)
		var wPrototype = {
			wdHeight: _wdHeight,
			wdWidth: function () {
				var a,
					b = document;
				'number' == typeof window.innerWidth
					? (a = window.innerWidth)
					: b.documentElement && b.documentElement.clientWidth
					? (a = b.documentElement.clientWidth)
					: b.body && b.body.clientWidth && (a = b.body.clientWidth);
				return a;
			},
			getElementTop: function (a) {
				var b = document;
				if (b.getElementById) var c = b.getElementById(a);
				else b.all && (c = b.all[a]);
				if (null != c) {
					yPos = c.offsetTop;
					for (tempEl = c.offsetParent; null != tempEl; )
						(yPos += tempEl.offsetTop), (tempEl = tempEl.offsetParent);
					return yPos;
				}
				return 150;
			},
			getElementWidth: function (a) {
				return document.getElementById(a).clientWidth;
			},
			getElementLeft: function (a) {
				var b,
					c = document;
				c.getElementById ? (b = c.getElementById(a)) : c.all && (b = c.all[a]);
				a = b.offsetLeft;
				for (b = b.offsetParent; null != b; ) (a += b.offsetLeft), (b = b.offsetParent);
				return a;
			},
			scrollTop: function () {
				var a = document,
					b = a.body.scrollTop;
				0 == b &&
					(b = window.pageYOffset
						? window.pageYOffset
						: a.body.parentElement
						? a.body.parentElement.scrollTop
						: 0);
				return b;
			},
			scrollLeft: function () {
				var a = document,
					b = window.pageXOffset ? window.pageXOffset : 0,
					c = a.documentElement ? a.documentElement.scrollLeft : 0;
				a = a.body ? a.body.scrollLeft : 0;
				b = b ? b : 0;
				c && (!b || b > c) && (b = c);
				return a && (!b || b > a) ? a : b;
			},
			bdWidth: function () {
				var a = document;
				return (bodyWidth = Math.max(
					Math.max(a.body.scrollWidth, a.documentElement.scrollWidth),
					Math.max(a.body.offsetWidth, a.documentElement.offsetWidth),
					Math.max(a.body.clientWidth, a.documentElement.clientWidth)
				));
			},
			bdHeight: function () {
				var a = document;
				return Math.max(
					Math.max(a.body.scrollHeight, a.documentElement.scrollHeight),
					Math.max(a.body.offsetHeight, a.documentElement.offsetHeight),
					Math.max(a.body.clientHeight, a.documentElement.clientHeight)
				);
			},
		};
	var _ADMFlashDetect = new (function () {
			var a = this;
			a.installed = !1;
			a.raw = '';
			a.major = -1;
			a.minor = -1;
			a.revision = -1;
			a.revisionStr = '';
			var b = [
					{
						name: 'ShockwaveFlash.ShockwaveFlash.7',
						version: function (d) {
							return c(d);
						},
					},
					{
						name: 'ShockwaveFlash.ShockwaveFlash.6',
						version: function (d) {
							var e = '6.0.r21';
							try {
								(d.AllowScriptAccess = 'always'), (e = c(d));
							} catch (f) {}
							return e;
						},
					},
					{
						name: 'ShockwaveFlash.ShockwaveFlash',
						version: function (d) {
							return c(d);
						},
					},
				],
				c = function (d) {
					var e = -1;
					try {
						e = d.GetVariable('$version');
					} catch (f) {}
					return e;
				};
			a.majorAtLeast = function (d) {
				return a.major >= d;
			};
			a.minorAtLeast = function (d) {
				return a.minor >= d;
			};
			a.revisionAtLeast = function (d) {
				return a.revision >= d;
			};
			a.versionAtLeast = function (d) {
				var e = [a.major, a.minor, a.revision],
					f = Math.min(e.length, arguments.length);
				for (i = 0; i < f; i++)
					if (e[i] >= arguments[i]) {
						if (!(i + 1 < f && e[i] == arguments[i])) return !0;
					} else return !1;
			};
			a._ADMFlashDetect = (function () {
				if (navigator.plugins && 0 < navigator.plugins.length) {
					var d = navigator.mimeTypes;
					if (
						d &&
						d['application/x-shockwave-flash'] &&
						d['application/x-shockwave-flash'].enabledPlugin &&
						d['application/x-shockwave-flash'].enabledPlugin.description
					) {
						var e = (d = d['application/x-shockwave-flash'].enabledPlugin.description);
						d = e.split(/ +/);
						var f = d[2].split(/\./);
						d = d[3];
						var h = parseInt(f[0], 10);
						var m = parseInt(f[1], 10);
						var k = d;
						var l = parseInt(d.replace(/[a-zA-Z]/g, ''), 10) || a.revision;
						a.raw = e;
						a.major = h;
						a.minor = m;
						a.revisionStr = k;
						a.revision = l;
						a.installed = !0;
					}
				} else if (-1 == navigator.appVersion.indexOf('Mac') && window.execScript)
					for (d = -1, f = 0; f < b.length && -1 == d; f++) {
						e = -1;
						try {
							e = new ActiveXObject(b[f].name);
						} catch (n) {
							e = { activeXError: !0 };
						}
						e.activeXError ||
							((a.installed = !0),
							(d = b[f].version(e)),
							-1 != d &&
								((e = d),
								(k = e.split(',')),
								(h = parseInt(k[0].split(' ')[1], 10)),
								(m = parseInt(k[1], 10)),
								(l = parseInt(k[2], 10)),
								(k = k[2]),
								(a.raw = e.replace('Shockwave Flash ', '')),
								(a.major = h),
								(a.minor = m),
								(a.revision = l),
								(a.revisionStr = k)));
					}
			})();
		})(),
		paramBrowser = {
			screen_Resolution: screen.width + 'x' + screen.height,
			screen_Color: screen.colorDepth,
			hostname: document.domain.replace('www.', ''),
			cookieEnabled: navigator.cookieEnabled ? 1 : 0,
			javaEnabled: navigator.javaEnabled() ? 1 : 0,
			referrer: document.referrer,
			url: function () {
				var a = window.location != window.parent.location ? document.referrer : document.location + '',
					b = this.hostname;
				return '' == b ? a : a.substring(a.indexOf(b) + b.length, a.length);
			},
			flashVersion: function () {
				return _ADMFlashDetect.major + '.' + _ADMFlashDetect.minor + '.' + _ADMFlashDetect.revisionStr;
			},
			zenURL: {
				encode: function (a) {
					if (-1 != document.domain.indexOf('muachung.vn') && -1 == a.indexOf('http://')) {
						for (
							var b = 'undefined' == typeof ADS_CHECKER ? '' : ADS_CHECKER.getCookie('mc_city'),
								c = '/ha-noi /tp-ho-chi-minh /da-nang /nha-trang /vung-tau /hai-phong'.split(' '),
								d = '/Ha-Noi /TP-HCM /Da-Nang /Khanh-Hoa /Ba-Ria-Vung-Tau /Hai-Phong'.split(' '),
								e = 0;
							e < c.length;
							e++
						)
							if (0 == a.indexOf(c[e])) return (a = a.replace(c[e], d[e])), encodeURIComponent(a);
						c = {
							22: '/Ha-Noi',
							29: '/TP-HCM',
							15: '/Da-Nang',
							68: '/Khanh-Hoa',
							26: '/Hai-Phong',
							67: '/Ba-Ria-Vung-Tau',
						};
						'' != b && 'undefined' != typeof c[b] && (a = c[b] + a);
					}
					return encodeURIComponent(a);
				},
				decode: function (a) {
					return decodeURIComponent(a.replace(/\+/g, ' '));
				},
			},
		},
		_ADMBrowser = {
			Version: function () {
				var a = 999;
				try {
					var b = navigator.userAgent + '';
					-1 != navigator.appVersion.indexOf('MSIE') &&
						(a = parseFloat(navigator.appVersion.split('MSIE')[1]));
					if (-1 != b.indexOf('Trident')) {
						var c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(b);
						c && 2 <= c.length && (a = parseFloat(c[1]));
					}
				} catch (d) {}
				return a;
			},
		},
		_admBrV = _ADMBrowser.Version(),
		__ADMwdVis = (function () {
			var a,
				b = {
					hidden: 'visibilitychange',
					webkitHidden: 'webkitvisibilitychange',
					mozHidden: 'mozvisibilitychange',
					msHidden: 'msvisibilitychange',
				};
			for (a in b)
				if (a in document) {
					var c = b[a];
					break;
				}
			return function (d) {
				d && document.addEventListener(c, d);
				return !document[a];
			};
		})(),
		ADM_PPTKSend = ADM_PPTKSend || {};
	ADM_PPTKSend.trackingPopup = function () {
		window.__ADM_TrackingSend = !1;
		window.__admloadPageId = (function () {
			function a() {
				return Math.floor(65536 * (1 + Math.random()))
					.toString(16)
					.substring(1);
			}
			return a() + a() + a() + a() + a() + a() + a() + a();
		})();
		__admPageloadid = new Date().getTime();
		window.__AdmsendRandom = '&lsn=' + __admPageloadid + ADM_AdsTracking.getParam();
		new Image().src =
			'//' +
			checkAdmdomainAds('lg1.logging.admicro.vn') +
			'/ftest?dg=' +
			__admloadPageIdc +
			ADM_AdsTracking.getParam() +
			'&url=' +
			encodeURIComponent('http://popup' + document.location.hostname + document.location.pathname) +
			'&rd=' +
			Math.random();
		ADM_TrackingSend$1();
	};
	ADM_TrackingSend$1();
	if ('undefined' == typeof logposurlviewsend) {
		try {
			var ptc = 'https:' == document.location.protocol ? 'https:' : 'http:';
			_admloadJs1(ptc + '//static.contineljs.com/core/lgnews.js');
		} catch (a) {}
		window.logposurlviewsend = 'sendnews';
		AdmonDomReady(function () {
			try {
				var a = function () {
						he = b() + d;
						if (he > c) {
							c = he;
							for (var l = [], n = [], p = 0; p < f; p++) c > m[p] && l.push(p);
							for (p = 0; p < l.length; p++) {
								var q = h[p].getAttributeNode('data-check-position').value;
								n.push(q + ':' + m[p]);
							}
							n = encodeURIComponent(n);
							logposurlview = '&sl=' + c + '&si=' + n;
							l.length == f &&
								('undefined' != typeof window.__ADMTrackingSendUrl &&
									'' != window.__ADMTrackingSendUrl &&
									((img = new Image()),
									(img.src =
										window.__ADMTrackingSendUrl +
										logposurlview +
										'&i=' +
										encodeURIComponent(
											'p;' +
												__admPageloadid +
												';' +
												window.__ADMScrollcounter +
												';' +
												window.__ADMScrollEnd +
												';' +
												__ADMisActive +
												';' +
												__ADMMouse +
												';' +
												__ADMTouch +
												';' +
												(wPrototype.wdWidth() + 'x' + wPrototype.wdHeight()) +
												';' +
												window.__ifr +
												';' +
												('undefined' == typeof ADS_CHECKER ? 0 : 1) +
												';' +
												__admloadPageId +
												';' +
												__admloadPageIdc
										) +
										'&rdm=' +
										Math.random() +
										ADM_AdsTracking.getParam())),
								chkadmTrackingt || clearTimeout(chkadmTrackingt),
								(chkadmTrackingt = window.setTimeout(function () {
									ADM_TrackingSendChk();
								}, 2e4)));
						}
					},
					b = function () {
						var l = document.body.scrollTop;
						0 == l &&
							(l = window.pageYOffset
								? window.pageYOffset
								: document.body.parentElement
								? document.body.parentElement.scrollTop
								: 0);
						return l;
					},
					c = 0,
					d = window.innerHeight,
					e = -1,
					f = 0,
					h = [];
				h = document.querySelectorAll('[data-check-position]');
				f = h.length;
				for (var m = [], k = 0; k < f; k++) m.push(h[k].offsetTop);
				window.addEventListener('scroll', function () {
					-1 != e && clearTimeout(e);
					e = window.setTimeout(function () {
						a();
					}, 1e3);
				});
			} catch (l) {}
		});
	}
} catch (a) {

	_convertFunc6();
}

_convertFunc3()
AdmonDomReady(function () {
	function a() {
		if (
			'undefined' == typeof ADS_CHECKER &&
			(('undefined' != typeof admerrorload && 1 == admerrorload) ||
				('undefined' != typeof arferrorload && 1 == arferrorload)) &&
			0 == c
		) {
			c = !0;
			try {
				b('//static.contineljs.com/core/corecontineljs.js');
			} catch (d) {}
		} else
			'undefined' == typeof ADS_CHECKER &&
				window.setTimeout(function () {
					a();
				}, 500);
	}
	var b = function (d, e) {
			var f = document.createElement('script');
			f.type = 'text/javascript';
			f.async = !0;
			f.src = d;
			2 <= arguments.length &&
				((f.onload = e),
				(f.onreadystatechange = function () {
					(4 != f.readyState && 'complete' != f.readyState) || e();
				}));
			document.getElementsByTagName('head')[0].appendChild(f);
		},
		c = !1;
	a();
});
_convertFunc4()
