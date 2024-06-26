export function _clickLog(a) {
			var b = '',
				b = null != a && 'from=' === a.substring(0, 5) ? a.replace('from=', '') : 'default&' + a;
			this.sendLog('clickLog', { tag: 'pvsiters', from: b, rand: c.getRandom() },c);
		}