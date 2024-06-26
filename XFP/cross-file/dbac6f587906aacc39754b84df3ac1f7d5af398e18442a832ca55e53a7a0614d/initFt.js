export function initFt(r) {
	var ft = {};
	function setResultObject(i, s) {
		if (i !== undefined && r !== undefined) {
			r['D9_'.concat(i.toString())] = s;
		}
	}
	var FtBh = function (options) {
		var nativeForEach, nativeMap;
		nativeForEach = Array.prototype.forEach;
		nativeMap = Array.prototype.map;
		this.each = function (obj, iterator, context) {
			if (obj === null) {
				return;
			}
			if (nativeForEach && obj.forEach === nativeForEach) {
				obj.forEach(iterator, context);
			} else {
				if (obj.length === +obj.length) {
					for (var i = 0, l = obj.length; i < l; i++) {
						if (iterator.call(context, obj[i], i, obj) === {}) {
							return;
						}
					}
				} else {
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							if (iterator.call(context, obj[key], key, obj) === {}) {
								return;
							}
						}
					}
				}
			}
		};
		this.map = function (obj, iterator, context) {
			var results = [];
			if (obj == null) {
				return results;
			}
			if (nativeMap && obj.map === nativeMap) {
				return obj.map(iterator, context);
			}
			this.each(obj, function (value, index, list) {
				results[results.length] = iterator.call(context, value, index, list);
			});
			return results;
		};
		if (typeof options == 'object') {
			this.hasher = options.hasher;
			this.indexProperties = options.indexProperties;
		} else {
			if (typeof options == 'function') {
				this.hasher = options;
			}
		}
	};
	FtBh.prototype = {
		get: function () {
			var ua = navigator.userAgent.toLowerCase();
			var keys = [];
			var navLang = navigator.language || navigator.browserLanguage;
			var navLangArr = navLang.split('-');
			if (typeof navLangArr[0] == 'undefined') {
				navLang = navLang;
			} else {
				navLang = navLangArr[0];
			}
			keys.push((this.indexProperties ? 'a:' : '') + navLang);
			keys.push((this.indexProperties ? 'b:' : '') + screen.colorDepth);
			keys.push((this.indexProperties ? 'c:' : '') + new Date().getTimezoneOffset());
			keys.push((this.indexProperties ? 'd:' : '') + this.hasSessionStorage());
			if (ua.indexOf('android') == -1) {
				keys.push((this.indexProperties ? 'e:' : '') + this.hasLocalStorage());
			}
			if (navigator.platform != 'iPhone' && navigator.platform != 'iPad') {
				var hasDb;
				try {
					hasDb = !!window.indexedDB;
				} catch (e) {
					hasDb = true;
				}
				keys.push((this.indexProperties ? 'f:' : '') + hasDb);
			}
			if (document.body) {
				keys.push((this.indexProperties ? 'g:' : '') + typeof document.body.addBehavior);
			} else {
				keys.push((this.indexProperties ? 'g:' : '') + typeof undefined);
			}
			if (ua.indexOf('android') == -1) {
				keys.push((this.indexProperties ? 'h:' : '') + typeof window.openDatabase);
			}
			keys.push((this.indexProperties ? 'i:' : '') + navigator.cpuClass);
			keys.push((this.indexProperties ? 'j:' : '') + navigator.platform);
			if (this.hasher) {
				return this.hasher(keys.join('###'), 31);
			} else {
				return this.murmurhash3_32_gc(keys.join('###'), 31);
			}
		},
		murmurhash3_32_gc: function (key, seed) {
			var remainder, bytes, h1, h1b, c1, c2, k1, i;
			remainder = key.length & 3;
			bytes = key.length - remainder;
			h1 = seed;
			c1 = 3432918353;
			c2 = 461845907;
			i = 0;
			while (i < bytes) {
				k1 =
					(key.charCodeAt(i) & 255) |
					((key.charCodeAt(++i) & 255) << 8) |
					((key.charCodeAt(++i) & 255) << 16) |
					((key.charCodeAt(++i) & 255) << 24);
				++i;
				k1 = ((k1 & 65535) * c1 + ((((k1 >>> 16) * c1) & 65535) << 16)) & 4294967295;
				k1 = (k1 << 15) | (k1 >>> 17);
				k1 = ((k1 & 65535) * c2 + ((((k1 >>> 16) * c2) & 65535) << 16)) & 4294967295;
				h1 ^= k1;
				h1 = (h1 << 13) | (h1 >>> 19);
				h1b = ((h1 & 65535) * 5 + ((((h1 >>> 16) * 5) & 65535) << 16)) & 4294967295;
				h1 = (h1b & 65535) + 27492 + ((((h1b >>> 16) + 58964) & 65535) << 16);
			}
			k1 = 0;
			switch (remainder) {
				case 3:
					k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
				case 2:
					k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
				case 1:
					k1 ^= key.charCodeAt(i) & 255;
					k1 = ((k1 & 65535) * c1 + ((((k1 >>> 16) * c1) & 65535) << 16)) & 4294967295;
					k1 = (k1 << 15) | (k1 >>> 17);
					k1 = ((k1 & 65535) * c2 + ((((k1 >>> 16) * c2) & 65535) << 16)) & 4294967295;
					h1 ^= k1;
			}
			h1 ^= key.length;
			h1 ^= h1 >>> 16;
			h1 = ((h1 & 65535) * 2246822507 + ((((h1 >>> 16) * 2246822507) & 65535) << 16)) & 4294967295;
			h1 ^= h1 >>> 13;
			h1 = ((h1 & 65535) * 3266489909 + ((((h1 >>> 16) * 3266489909) & 65535) << 16)) & 4294967295;
			h1 ^= h1 >>> 16;
			return h1 >>> 0;
		},
		hasLocalStorage: function () {
			try {
				return !!window.localStorage;
			} catch (e) {
				return true;
			}
		},
		hasSessionStorage: function () {
			try {
				return !!window.sessionStorage;
			} catch (e) {
				return true;
			}
		},
	};
	ft.isM = function (p, t) {
		return (!!p && p === 'iPhone') || p === 'iPad' || (p.substr(0, 7) === 'Linux a' && t > 0);
	};
	ft.bh = function () {
		return new FtBh().get();
	};
	ft.bh64 = function () {
		return new FtBh({
			indexProperties: true,
			hasher: function (s) {
				return btoa(s);
			},
		}).get();
	};
	ft.encodeURIComponent = function (value) {
		if (value === undefined || value === null) {
			return value;
		}
		return encodeURIComponent(value);
	};
	ft.location = function () {
		var l = window.location.hostname;
		if (window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0) {
			var rootLoc = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
			var rootHost = ft.hostName(rootLoc);
			if (rootHost) {
				l = rootHost;
			}
		}
		if (!l) {
			l = '';
		}
		return l;
	};
	ft.referrer = function () {
		var r = ft.hostName(document.referrer);
		if (r === ft.location()) {
			r = '';
		}
		if (!r) {
			r = '';
		}
		return r;
	};
	ft.hostName = function (urlString) {
		try {
			var url = new URL(urlString);
			return url.hostname;
		} catch (e) {}
	};
	ft.flashVersion = function (m) {
		setResultObject(138, '315b15c7996e825a32e6898b8ee420f9');
		if (m) {
			return null;
		}
		try {
			try {
				var obj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
				try {
					obj.AllowScriptAccess = 'always';
				} catch (e) {
					return '6.0.0';
				}
			} catch (e) {}
			return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
				.GetVariable('$version')
				.replace(/\D+/g, '.')
				.match(/^.?(.+),?$/)[1];
		} catch (e) {
			try {
				if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
					return (
						navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']
					).description
						.replace(/\D+/g, '.')
						.match(/^.?(.+),?$/)[1];
				}
			} catch (e) {}
		}
		return null;
	};
	ft.acrobatVersion = function (m) {
		setResultObject(139, 'd10e54cb41fb43c5945b4d01b9bde1da');
		if (m) {
			return null;
		}
		if (window.ActiveXObject) {
			var obj = null;
			try {
				obj = new ActiveXObject('AcroPDF.PDF');
			} catch (e) {}
			if (!obj) {
				try {
					obj = new ActiveXObject('PDF.PdfCtrl');
				} catch (e) {
					return null;
				}
			}
			if (obj) {
				var version = obj.GetVersions().split(',');
				version = version[0].split('=');
				version = parseFloat(version[1]);
				return version;
			} else {
				return null;
			}
		} else {
			for (var i = 0; i < navigator.plugins.length; i++) {
				if (navigator.plugins[i].name.indexOf('Adobe Acrobat') != -1) {
					return navigator.plugins[i].description.replace(/\D+/g, '.').match(/^.?(.+),?$/)[1];
				}
			}
			return null;
		}
	};
	ft.silverlightVersion = function (m) {
		if (m) {
			return null;
		}
		var parts = Array('', '', '', '');
		var nav = navigator.plugins['Silverlight Plug-In'];
		if (nav) {
			for (var i = 0; i < 4; i++) {
				parts[i] = parseInt(nav.description.split('.')[i]).toString();
			}
		} else {
			try {
				var control = new ActiveXObject('AgControl.AgControl');
				var vers = Array(1, 0, 0, 0);
				loopMatch(control, vers, 0, 1);
				loopMatch(control, vers, 1, 1);
				loopMatch(control, vers, 2, 10000);
				loopMatch(control, vers, 2, 1000);
				loopMatch(control, vers, 2, 100);
				loopMatch(control, vers, 2, 10);
				loopMatch(control, vers, 2, 1);
				loopMatch(control, vers, 3, 1);
				for (var i = 0; i < 4; i++) {
					parts[i] = vers[i].toString();
				}
			} catch (e) {
				return null;
			}
		}
		return parts.join('.');
		function loopMatch(control, vers, idx, inc) {
			while (IsSupported(control, vers)) {
				vers[idx] += inc;
			}
			vers[idx] -= inc;
		}
		function IsSupported(control, ver) {
			return control.isVersionSupported(ver[0] + '.' + ver[1] + '.' + ver[2] + '.' + ver[3]);
		}
	};
	ft.getPlugins = function (m) {
		var a = [];
		if (m) {
			return a;
		}
		try {
			for (var i = 0; i < navigator.plugins.length; i++) {
				a.push(
					navigator.plugins[i].name +
						': ' +
						navigator.plugins[i].description +
						' (' +
						navigator.plugins[i].filename +
						')'
				);
			}
			return a;
		} catch (e) {
			return null;
		}
	};
	ft.getMimeTypes = function (m) {
		var a = [];
		if (m) {
			return a;
		}
		try {
			for (var i = 0; i < navigator.mimeTypes.length; i++) {
				a.push(navigator.mimeTypes[i].type + ': ' + navigator.mimeTypes[i].description);
			}
			return a;
		} catch (e) {
			return null;
		}
	};
	return ft;
}