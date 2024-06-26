export function _convertFunc4(mkqc) {
	if (mkqc == null || mkqc == undefined) {
		return;
	}
	var mk = {};
	var trackUrl = 'https://event.clientgear.com/track';
	mk.VERSION = '0.0.1';
	mk.upc = mkqc.util.guid();
	mk.init = function (pixelCode, uid) {
		mkqc.config.uid = uid;
		mkqc.config.pixelCode = pixelCode;
		var uid = mkqc.util.getCookie('uid') + '';
		if (mkqc.util.isBlank(uid) || uid.indexOf('mk') == -1) {
			mkqc.util.setCookie('uid', 'mk' + mkqc.util.guid(), 365);
		}
	};
	function getTrackParams(url) {
		var source_data = null;
		var searchParams = new URLSearchParams(url);
		var utm_source = searchParams.get('utm_source');
		var f = searchParams.get('f');
		if (!mkqc.util.isBlank(utm_source)) {
			var utm_medium = searchParams.get('utm_medium');
			var utm_campaign = searchParams.get('utm_campaign');
			var utm_term = searchParams.get('utm_term');
			var utm_content = searchParams.get('utm_content');
			var bidimpid = searchParams.get('bidimpid');
			var adid = searchParams.get('adid');
			var lp = mkqc.util.fixedEncodeURIComponent(location.href);
			source_data = {
				lp: lp,
				lp_utm_source: utm_source,
				lp_utm_medium: utm_medium || '',
				lp_utm_campaign: utm_campaign || '',
				lp_utm_term: utm_term || '',
				lp_utm_content: utm_content || '',
				bidimpid: bidimpid || '',
				adid: adid || '',
			};
		} else {
			if (!mkqc.util.isBlank(f)) {
				if (f.indexOf('bm') > -1) {
					var arrs = f.split('|');
					var utm_source = arrs[1] || '';
					var utm_medium = arrs[2] || '';
					var utm_campaign = arrs[3] || '';
					var utm_term = arrs[4] || '';
					var utm_content = arrs[5] || '';
					var bidimpid = searchParams.get('bidimpid');
					var adid = searchParams.get('adid');
					var lp = mkqc.util.fixedEncodeURIComponent(location.href);
					source_data = {
						lp: lp,
						lp_utm_source: utm_source,
						lp_utm_medium: utm_medium || '',
						lp_utm_campaign: utm_campaign || '',
						lp_utm_term: utm_term || '',
						lp_utm_content: utm_content || '',
						bidimpid: bidimpid || '',
						adid: adid || '',
					};
				}
			}
		}
		return source_data;
	}
	function getParams(event, params) {
		if (!params) {
			params = {};
		}
		var win = window;
		params.event = event;
		params.referrer = mkqc.util.fixedEncodeURIComponent(win.document.referrer);
		params.domain = win.location.host;
		params.pagurl = mkqc.util.fixedEncodeURIComponent(win.location.href);
		params.winwidh = win.screen.width;
		params.winheight = win.screen.height;
		params.uid = mkqc.config.uid;
		params.timezone = mkqc.util.getTimezone();
		params.time = mkqc.util.getTime();
		params.mkPixelId = mkqc.config.pixelCode;
		params.upc = mk.upc;
		var trackParams = getTrackParams(win.location.search);
		if (!mkqc.util.isBlank(trackParams)) {
			var datastr = JSON.stringify(trackParams);
			localStorage.setItem('source_data', datastr);
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + 21);
			localStorage.setItem('source_data_exp', exdate.getTime());
			mkqc.util.setCookie('source_data', datastr, 21);
			mkqc.util.setCookie('source_data_exp', exdate.getTime(), 21);
		}
		var source_data = mkqc.util.getCookie('source_data');
		if (!mkqc.util.isBlank(source_data)) {
			var source_data_exp = mkqc.util.getCookie('source_data_exp');
			if (!mkqc.util.isBlank(source_data_exp)) {
				if (new Date().getTime() > source_data_exp * 1) {
					mkqc.util.delCookie('source_data');
					mkqc.util.delCookie('source_data_exp');
					source_data = null;
				}
			}
		}
		if (mkqc.util.isBlank(source_data)) {
			source_data = localStorage.getItem('source_data');
			if (!mkqc.util.isBlank(source_data)) {
				var source_data_exp = localStorage.getItem('source_data_exp');
				if (!mkqc.util.isBlank(source_data_exp)) {
					if (new Date().getTime() > source_data_exp * 1) {
						localStorage.removeItem('source_data');
						localStorage.removeItem('source_data_exp');
						source_data = null;
					}
				}
			}
		}
		if (!mkqc.util.isBlank(source_data)) {
			try {
				var source_params = JSON.parse(source_data);
				params.lp = source_params.lp;
				params.lp_utm_source = source_params.lp_utm_source;
				params.lp_utm_medium = source_params.lp_utm_medium;
				params.lp_utm_campaign = source_params.lp_utm_campaign;
				params.lp_utm_term = source_params.lp_utm_term;
				params.lp_utm_content = source_params.lp_utm_content;
				params.bidimpid = source_params.bidimpid;
				params.adid = source_params.adid;
			} catch (e) {}
		}
		params.uidCookie = mkqc.util.getCookie('uid');
		var m = mk;
		if (m.getLocalStoreUid) {
			params.uidLocalStore = m.getLocalStoreUid();
		} else {
			m.getLocalStoreUid = function () {
				var luid = localStorage.getItem('_mk_luid') + '';
				if (luid && luid.indexOf('mk') > -1) {
					return luid;
				} else {
					luid = 'mk' + mkqc.util.guid();
					localStorage.setItem('_mk_luid', luid);
					return luid;
				}
			};
			params.uidLocalStore = m.getLocalStoreUid();
		}
		if (m.getCanvasUid) {
			params.uidCanvas = m.getCanvasUid();
		} else {
			function bin2hex(s) {
				var o = '';
				var s = s + '';
				for (let i = 0; i < s.length; i++) {
					let n = s.charCodeAt(i).toString(16);
					o += n.length < 2 ? '0' + n : n;
				}
				return o;
			}
			function getUUID() {
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var txt = 'clientgear.com <canvas> 1.0';
				ctx.textBaseline = 'top';
				ctx.font = "14px 'Arial'";
				ctx.textBaseline = 'alphabetic';
				ctx.fillStyle = '#f60';
				ctx.fillRect(125, 1, 62, 20);
				ctx.fillStyle = '#069';
				ctx.fillText(txt, 2, 15);
				ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
				ctx.fillText(txt, 4, 17);
				var b64 = canvas.toDataURL().replace('data:image/png;base64,', '');
				var bin = atob(b64);
				var crc = bin2hex(bin.slice(-16, -12));
				return crc;
			}
			m.getCanvasUid = function () {
				return getUUID();
			};
			params.uidCanvas = m.getCanvasUid();
		}
		params.thirdCookie = mkqc.util.thirdCookie();
		return params;
	}
	function fixedvalue(value) {
		try {
			value = value + '';
			if (value.indexOf('money') > -1) {
				value = value.replace('<span class=money>$', '').replace('USD</span>', '').trim();
			}
			if (value.indexOf('subtotal') > -1) {
				value = value.replace('<span id="revy-cart-subtotal-price">', '').replace('</span>', '').trim();
			}
			if (value.indexOf('$') > -1) {
				value = value.replace('$', '').trim();
			}
			if (value.indexOf('USD') > -1) {
				value = value.replace('USD', '').trim();
			}
			if (mkqc.config.module.mk.custom) {
				if (mkqc.config.module.mk.custom.acc === true) {
					var values = value.split(',');
					var total = 0;
					for (var i = 0; i < values.length; i++) {
						total = total + values[i] * 1;
					}
					return total;
				}
				if (mkqc.config.module.mk.custom.delComma === true) {
					return value.replace(new RegExp(',', 'gm'), '');
				}
				if (mkqc.config.module.mk.custom.repComma === true) {
					return value.replace(',', '$').replace(new RegExp('.', 'gm'), '').replace('$', '.');
				}
			}
			return value;
		} catch (e) {
			return value;
		}
	}
	mk.track = function (event, params) {
		if (mkqc.util.isBlank(event)) {
			return;
		}
		if (event == 'addToCart') {
			event = 'AddToCart';
		}
		params = getParams(event, params);
		if (!mkqc.util.isBlank(params.value)) {
			params.value = fixedvalue(params.value);
		}
		var src = trackUrl + '?event=' + event;
		src = src + '&params=' + mkqc.util.fixedEncodeURIComponent(mkqc.util.stringify(params));
		mkqc.util.ajax('GET', src, null, function (txt) {
			if (mkqc.util.isBlank(txt)) {
				return;
			}
			try {
				eval(txt);
			} catch (e) {
				console.log('now time:' + new Date().getTime());
			}
		});
	};
	mk.trackCustom = function (event, params) {
		mk.track(event, params);
	};
	mkqc.mk = mk;
}