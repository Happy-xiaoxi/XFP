export function _convertFunc8(e, a) {
	var b = e,
		g = a;
	var c = function (j, k) {
		return new c.prototype.init(j, k);
	};
	c.prototype = {
		constructor: c,
		length: 0,
		splice: [].splice,
		selector: '',
		init: function (j, l) {
			l = l || g;
			var m;
			if (!j) {
				return this;
			}
			if (typeof j == 'object') {
				var j = [j];
				for (var k = 0; k < j.length; k++) {
					this[k] = j[k];
				}
				this.length = j.length;
				return this;
			} else {
				if (typeof j == 'function') {
					c.ready(j);
					return;
				}
			}
			if (j.charAt(0) == '#' && !j.match('\\s')) {
				this.selector = j;
				j = j.substring(1);
				m = g.getElementById(j);
				this[0] = m;
				this.context = l;
				this.length = 1;
				return this;
			} else {
				m = l.querySelectorAll(j);
				for (var k = 0; k < m.length; k++) {
					this[k] = m[k];
				}
				this.selector = j;
				this.context = l;
				this.length = m.length;
				return this;
			}
		},
		attr: function (j, l) {
			for (var k = 0; k < this.length; k++) {
				if (typeof j == 'string') {
					if (arguments.length == 1) {
						return this[k].getAttribute(j);
					}
					this[k].setAttribute(j, l);
				} else {
					var m = this[k];
					f.each(j, function (o, p) {
						m.setAttribute(o, p);
					});
				}
			}
			return this;
		},
		removeAttr: function (j) {
			for (var k = 0; k < this.length; k++) {
				if (typeof j == 'string') {
					this[k].removeAttribute(j);
				} else {
					var l = this[k];
					f.each(j, function (m, o) {
						l.removeAttribute(m);
					});
				}
			}
			return this;
		},
		find: function (j) {
			if (!j) {
				return;
			}
			var k = this.selector;
			return new c(k + ' ' + j);
		},
		data: function (j, l) {
			for (var k = 0; k < this.length; k++) {
				if (typeof j == 'string') {
					if (arguments.length == 1) {
						return this[k].getAttribute('data-' + j);
					}
					this[k].setAttribute('data-' + j, l);
				} else {
					var m = this[k];
					f.each(j, function (o, p) {
						m.setAttribute('data-' + o, p);
					});
				}
			}
			return this;
		},
		on: function (o, k, m) {
			if (typeof k == 'function') {
				m = k;
				for (var l = 0; l < this.length; l++) {
					if (!this[l].guid) {
						this[l].guid = ++c.guid;
						c.Events[c.guid] = {};
						c.Events[c.guid][o] = [m];
						h(this[l], o, this[l].guid);
					} else {
						var p = this[l].guid;
						if (c.Events[p][o]) {
							c.Events[p][o].push(m);
						} else {
							c.Events[p][o] = [m];
							h(this[l], o, p);
						}
					}
				}
			} else {
				for (var l = 0; l < this.length; l++) {
					if (!this[l].deleId) {
						this[l].deleId = ++c.deleId;
						c.deleEvents[c.deleId] = {};
						c.deleEvents[c.deleId][k] = {};
						c.deleEvents[c.deleId][k][o] = [m];
						d(this[l], o, k);
					} else {
						var p = this[l].deleId,
							j = c.deleEvents[p];
						if (!j[k]) {
							j[k] = {};
							j[k][o] = [m];
							d(this[l], o, k);
						} else {
							if (j[k][o]) {
								j[k][o].push(m);
							} else {
								j[k][o] = [m];
								d(this[l], o, k);
							}
						}
					}
				}
			}
		},
		off: function (p, k) {
			if (arguments.length == 0) {
				for (var o = 0; o < this.length; o++) {
					var q = this[o].guid;
					for (var m in c.Events[q]) {
						delete c.Events[q][m];
					}
				}
			} else {
				if (arguments.length == 1) {
					for (var o = 0; o < this.length; o++) {
						var q = this[o].guid;
						delete c.Events[q][p];
					}
				} else {
					for (var o = 0; o < this.length; o++) {
						var q = this[o].deleId;
						try {
							delete c.deleEvents[q][k][p];
						} catch (l) {}
					}
				}
			}
		},
	};
	c.prototype.init.prototype = c.prototype;
	c.Events = [];
	c.guid = 0;
	c.deleEvents = [];
	c.deleId = 0;
	function d(l, k, j) {
		var o = l.deleId;
		l.addEventListener(
			k,
			function (t) {
				var s = t.target;
				var q = t.currentTarget;
				var p = true;
				while (p && s != q) {
					if (m(l, j, s)) {
						for (var r = 0; r < c.deleEvents[o][j][k].length; r++) {
							p = c.deleEvents[o][j][k][r].call(s, t);
							return p;
						}
					}
					s = s.parentNode;
				}
			},
			false
		);
		function m(s, p, t) {
			var q = s.querySelectorAll(p);
			for (var r = 0; r < q.length; r++) {
				if (q[r] == t) {
					return true;
				}
			}
		}
	}
	function h(l, k, j) {
		l.addEventListener(
			k,
			function (o) {
				for (var m = 0; m < c.Events[j][k].length; m++) {
					c.Events[j][k][m].call(l, o);
				}
			},
			false
		);
	}
	c.ready = function (j) {
		g.addEventListener(
			'DOMContentLoaded',
			function () {
				j && j();
			},
			false
		);
		g.removeEventListener('DOMContentLoaded', j, true);
	};
	c.each = function (m, p) {
		var k = m.length,
			j = m.constructor,
			l = 0;
		if (j === e.f) {
			for (; l < k; l++) {
				var o = p.call(m[l], l, m[l]);
				if (o === false) {
					break;
				}
			}
		} else {
			if (isArray(m)) {
				for (; l < k; l++) {
					var o = p.call(m[l], l, m[l]);
					if (o === false) {
						break;
					}
				}
			} else {
				for (l in m) {
					var o = p.call(m[l], l, m[l]);
					if (o === false) {
						break;
					}
				}
			}
		}
	};
	c.isBlank = function (j) {
		return j == undefined || j == null || j.length == 0;
	};
	c.wait = function (q, j, p, k) {
		var m = p || -1,
			l = k || 100,
			o;
		if (c(j).length > 0) {
			q.call();
		} else {
			o = setInterval(function () {
				if (!m) {
					clearInterval(o);
				}
				m <= 0 || m--;
				if (c(j).length > 0) {
					clearInterval(o);
					q.call();
				}
			}, l);
		}
	};
	c.bsVersion = function () {
		var k = {};
		var j = {};
		var l = navigator.userAgent.toLowerCase();
		var m;
		if (navigator.appVersion.match(/MSIE 6./i) == '6.') {
			k.type = 'IE';
			k.version = 6;
			return k;
		} else {
			(m = l.match(/msie ([\d.]+)/))
				? (j.ie = m[1])
				: (m = l.match(/firefox\/([\d.]+)/))
				? (j.firefox = m[1])
				: (m = l.match(/chrome\/([\d.]+)/))
				? (j.chrome = m[1])
				: (m = l.match(/opera.([\d.]+)/))
				? (j.opera = m[1])
				: (m = l.match(/version\/([\d.]+).*safari/))
				? (j.safari = m[1])
				: 0;
		}
		if (j.ie) {
			k.type = 'IE';
			k.version = j.ie;
		} else {
			if (j.firefox) {
				k.type = 'Firefox';
				k.version = j.firefox;
			} else {
				if (j.chrome) {
					k.type = 'Chrome';
					k.version = j.chrome;
				} else {
					if (j.opera) {
						k.type = 'Opera';
						k.version = j.opera;
					} else {
						if (j.safari) {
							k.type = 'Safari';
							k.version = j.safari;
						}
					}
				}
			}
		}
		return k;
	};
	b._s1_31 = c;
};