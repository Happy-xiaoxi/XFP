var d = window;
export function _bindAlsTag(c) {
			if (!c.getCookie('als') && d.$ && 'function' === typeof $('body').one)
				$('body').one('mouseover', function () {
					c.setCookie('als', '0', 365);
				});
			c.getCookie('isSpider') && c.setCookie('isSpider', '', 0);
		}