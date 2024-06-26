export function _convertFunc6(c) {
	if (c == null || c == undefined) {
		return;
	}
	var b = {};
	b.VERSION = '0.0.1';
	b.error = false;
	var a = 'https://event.clientgear.com/re';
	b.init = function () {
		c.util.load(function () {
			setTimeout(function () {
				var l = c.util.getCookie('_mk_sync');
				if (!c.util.isBlank(l)) {
					if (new Date().getTime() > l * 1) {
						c.util.delCookie('_mk_sync');
					} else {
						return;
					}
				}
				if (c.config.module.ssp.val) {
					var g = localStorage.getItem('_mk_luid');
					var h = c.config.module.ssp.val.split(',');
					for (var e = 0; e < h.length; e++) {
						var k = a + '/' + h[e];
						var d = new Image();
						d.src = k + '?uid=' + g;
					}
					var j = new Date();
					j.setHours(j.getHours() + 3);
					c.util.setCookieHour('_mk_sync', j.getTime(), 3);
				}
			}, 0);
		});
	};
	b.track = function (d, e) {};
	b.trackCustom = function (d, e) {};
	c.ssp = b;
}