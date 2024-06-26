export function _sendLog(a, b, c) {
			var d = this.baseInfo,
				e = this.config[a];
			if (a && e && b && 'object' === typeof b) {
				for (var h = [], g = e.allParams, f = 0, k = g.length; f < k; f++)
					h.push(g[f] + '=' + (b[g[f]] || d[g[f]] || ''));
				c.ajaxsend(c.protocol + '//' + e.server + '?' + h.join('&'));
			}
		}