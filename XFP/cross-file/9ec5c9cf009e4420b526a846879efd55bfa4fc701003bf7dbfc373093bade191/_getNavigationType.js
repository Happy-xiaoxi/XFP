export function _getNavigationType() {
			var a = '-1';
			try {
				a = d.performance.navigation.type;
			} catch (b) {
				return '-1';
			}
			return a;
		}