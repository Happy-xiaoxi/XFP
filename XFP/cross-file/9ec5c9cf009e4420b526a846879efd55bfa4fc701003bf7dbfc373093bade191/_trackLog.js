export function _trackLog(c) {
			this.sendLog('trackLog', { tag: 'pvstatall', rand_id: c.getRandom() },c);
		}