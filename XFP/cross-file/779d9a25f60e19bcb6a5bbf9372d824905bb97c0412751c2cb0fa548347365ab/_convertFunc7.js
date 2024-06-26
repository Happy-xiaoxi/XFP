export function _convertFunc7(b) {
	if (b == null || b == undefined) {
		return;
	}
	var a = {};
	a.VERSION = '0.0.1';
	function c(g) {
		if (b.util.isBlank(g)) {
			return;
		}
		if (b.config && !b.config.use) {
			console.log('stop this site!');
			return;
		}
		if (b.config.module) {
			for (var e in b.config.module) {
				if (b.util.isBlank(b[e])) {
					console.log(e + ' module not config!');
					continue;
				}
				if (!b.config.module[e]['enable']) {
					console.log(e + ' stop !');
					continue;
				}
				if (!b[e][g]) {
					console.log(e + ' ' + g + ' method not config!');
					continue;
				}
				var d = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : arguments;
				b[e][g].apply(b[e], d);
			}
		}
	}
	a.init = function (e, d) {
		if (!e) {
			b.config.error = true;
			b.config.errorMsg = 'mkq error!Pixel code is not exist!';
			console.log(b.config.errorMsg);
			return;
		}
		if (e != b.config.module.mk.val) {
			b.config.error = true;
			b.config.errorMsg = 'mkq error!Pixel code is not match!';
			console.log(b.config.errorMsg);
			return;
		}
		if (!d) {
			d = 'guest';
		}
		c('init', e, d);
	};
	a.track = function (d, e) {
		if (b.config.error) {
			console.log(b.config.errorMsg);
			return;
		}
		c('track', d, e);
	};
	a.trackCustom = function (d, e) {
		if (b.config.error) {
			console.log(b.config.errorMsg);
			return;
		}
		c('trackCustom', d, e);
	};
	b.distribute = a;
};