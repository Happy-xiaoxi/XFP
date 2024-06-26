export function _convertFunc3() {
	try {
		var a = '';
		var b =
			0 < document.cookie.length && ((c_start = document.cookie.indexOf('__uif=')), -1 != c_start)
				? ((c_start = c_start + 5 + 1),
				  (c_end = document.cookie.indexOf(';', c_start)),
				  -1 == c_end && (c_end = document.cookie.length),
				  unescape(document.cookie.substring(c_start, c_end)))
				: '';
		var c = /__uid:([0-9]+)/.exec(b);
		b = '';
		c && 2 <= c.length && (b = encodeURIComponent(c[1]));
		a = 'https://amcdn.vn/cmd_track?lsn=' + window.__admloadPageId + '&dg=' + window.__admloadPageIdc;
		a += '&ui=' + b;
		a += '&fl=' + paramBrowser.flashVersion();
		a += '&je=' + paramBrowser.javaEnabled;
		a += '&sr=' + paramBrowser.screen_Resolution;
		a += '&sc=' + paramBrowser.screen_Color;
		a += '&hn=' + paramBrowser.hostname;
		a += '&p=' + paramBrowser.zenURL.encode(paramBrowser.url());
		a +=
			'&r=' +
			('' == paramBrowser.referrer ? paramBrowser.referrer : paramBrowser.zenURL.encode(paramBrowser.referrer));
		a =
			'undefined' != typeof _Analytics_Channel && '' != _Analytics_Channel
				? a + ('&cat=' + encodeURIComponent(decodeURIComponent(_Analytics_Channel)))
				: 'undefined' != typeof _ADM_Channel && '' != _ADM_Channel
				? a + ('&cat=' + encodeURIComponent(decodeURIComponent(_ADM_Channel)))
				: a + '&cat=';
		a += '&vp=' + wPrototype.wdWidth() + 'x' + wPrototype.wdHeight();
		new Image().src = a;
	} catch (d) {}
}