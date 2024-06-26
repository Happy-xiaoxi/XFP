import { _AdmonDomReady } from './_AdmonDomReady.js';
export function _convertFunc7() {
	var a = !1,
		b = [];
	if (!window.AdmonDomReady || 'function' != typeof window.AdmonDomReady) {
		var c = function () {
			if (!document.body) return setTimeout(c, 13);
			for (var d = 0; d < b.length; d++) b[d]();
			b = [];
		};
		window.AdmonDomReady =_AdmonDomReady;
	}
}