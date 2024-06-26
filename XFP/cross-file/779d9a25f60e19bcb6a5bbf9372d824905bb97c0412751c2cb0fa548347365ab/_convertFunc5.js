export function _convertFunc5(mkqc) {
	if (mkqc == null || mkqc == undefined) {
		return;
	}
	var wait = {};
	var trackUrl = 'https://event.clientgear.com/track';
	wait.VERSION = '0.0.1';
	var isInit = false;
	function getParams(event, params) {
		if (!params) {
			params = {};
		}
		var win = mkqc.config.module.mk.useTopWin ? window.top : window;
		params.event = event;
		params.upc = mkqc.mk.upc;
		params.referrer = mkqc.util.fixedEncodeURIComponent(win.document.referrer);
		params.domain = win.location.host;
		params.pagurl = mkqc.util.fixedEncodeURIComponent(win.location.href);
		params.winwidh = win.screen.width;
		params.winheight = win.screen.height;
		params.uid = mkqc.config.uid;
		params.timezone = mkqc.util.getTimezone();
		params.time = mkqc.util.getTime();
		params.mkPixelId = mkqc.config.pixelCode;
		params.uidCookie = mkqc.util.getCookie('uid');
		var m = wait;
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
	function sendWait(s) {
		setTimeout(function () {
			var event = 'ViewContent' + s;
			var params = getParams(event);
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
		}, s * 1000);
	}
	wait.init = function () {
		if (isInit) {
			return;
		}
		var sArr = [3, 10, 30];
		isInit = true;
		for (var i = 0; i < sArr.length; i++) {
			var s = sArr[i];
			sendWait(s);
		}
	};
	wait.track = function (event, params) {};
	wait.trackCustom = function (event, params) {};
	mkqc.wait = wait;
};